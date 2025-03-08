// GET ALL USERS

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectToDatabase();
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to get users" });
    }
}

export async function POST(req: Request, res: NextResponse) {
    try {
        await connectToDatabase();
        const { name, email, password } = await req.json();
        const user = new User({ name, email, password });
        await user.save();
        return NextResponse.json(user);
    } catch (error) {
        let result = error as Error;
        return NextResponse.json(result)
    }
}
