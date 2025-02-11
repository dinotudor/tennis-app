/*
  Warnings:

  - The `status` column on the `payments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `surface_type` column on the `tennis_courts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AVAILABLE', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Surfaces" AS ENUM ('HARD', 'CLAY', 'GRASS', 'SYNTHETIC');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MANAGER', 'PLAYER');

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'AVAILABLE';

-- AlterTable
ALTER TABLE "tennis_courts" DROP COLUMN "surface_type",
ADD COLUMN     "surface_type" "Surfaces" NOT NULL DEFAULT 'HARD';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'PLAYER';
