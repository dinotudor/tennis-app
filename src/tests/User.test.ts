import { PrismaClient } from "@prisma/client";
import { describe, beforeAll, afterAll, it, expect } from "@jest/globals";

const prisma = new PrismaClient();

jest.mock("", () => ({}));

describe("User CRUD tests", () => {
    beforeAll(async () => {
        await prisma.$connect();
        await prisma.users.deleteMany();
    });
    afterAll(async () => {
        await prisma.$disconnect();
    });

    it.only("should create a new user", async () => {
        const newUser = await prisma.users.create({
            data: {
                name: "Me 2",
                email: "test@me.de",
                password_hash: "1234!@#$zxcvb",
                role: "ADMIN",
            },
        });
        expect(newUser).toHaveProperty("id");
        expect(newUser.email).toBe("test@me.de");
        expect(newUser.password_hash).toBe("1234!@#$");
        expect(newUser.role).toBe("PLAYER");
    });

    it("shoud update users info", async () => {});

    it("should delete a user", async () => {});
});
