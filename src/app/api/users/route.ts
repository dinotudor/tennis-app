import { UserService } from "@/app/api/users/UserService";
import { NextRequest, NextResponse } from "next/server";

const userService = new UserService();

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit")
        ? parseInt(searchParams.get("limit") as string)
        : users.length;

    return NextResponse.json(users.slice(0, limit), {
        status: 200,
        headers: {
            "X-Total-Count": users.length.toString(),
        },
    });
}

export async function POST(request: NextRequest) {
    try {
        const user = await request.json(); // Correctly parse the JSON body
        console.log({ user });

        if (
            user.name == null ||
            user.email == null ||
            user.password_hash == null
        ) {
            return NextResponse.json(
                { error: "Missing required field" },
                { status: 400 }
            );
        }

        const newUser = await userService.createUser(user);
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error("POST - create user:", error);
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
}
