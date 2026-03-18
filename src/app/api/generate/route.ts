import { NextRequest, NextResponse } from "next/server";
import { generatePosts, type GenerateRequest } from "@/lib/gemini";

export async function POST(request: NextRequest) {
    try {
        const body: GenerateRequest = await request.json();

        if (!body.topic?.trim()) {
            return NextResponse.json(
                { error: "Topic is required" },
                { status: 400 }
            );
        }

        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_gemini_api_key_here") {
            return NextResponse.json(
                { error: "GEMINI_API_KEY not configured. Add it to .env.local" },
                { status: 500 }
            );
        }

        const posts = await generatePosts(body);

        return NextResponse.json({ posts });
    } catch (error) {
        console.error("Generation error:", error);
        return NextResponse.json(
            { error: "Failed to generate posts. Please try again." },
            { status: 500 }
        );
    }
}
