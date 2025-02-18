import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class UserService {
    public async createUser(user: users): Promise<users | undefined> {
        if (user.email == null || user.name == null) {
            throw new Error("Missing required field");
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(user.password_hash, salt);
        // console.log(passwordHash);
        try {
            const newUser = await prisma.users.create({
                data: {
                    ...user,
                    password_hash: passwordHash,
                },
            });
            return newUser;
        } catch (error) {
            console.error("Error on creating user: ", error);
        }
        return undefined;
    }

    public async getAllUsers() {
        return true;
    }

    public async getUser(id: number) {
        return id;
    }

    private encrypPassword() {}

    private decryptPassword() {}

    private updateUser(id: number) {
        return id;
    }

    private deleteUser(id: number) {
        return id;
    }
}

type users = {
    name: string;
    id: number;
    email: string;
    password_hash: string;
    role: Role;
    created_at: Date | null;
    updated_at: Date | null;
};
