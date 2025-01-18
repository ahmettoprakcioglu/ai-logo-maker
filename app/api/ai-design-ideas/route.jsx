import { AIDesignIdea } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { prompt } = await req.json();
        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { error: 'Valid prompt was not sent' },
                { status: 400 }
            );
        }

        const result = await AIDesignIdea.sendMessage(prompt);

        if (!result?.response?.text) {
            return NextResponse.json(
                { error: 'Could not get AI response' },
                { status: 500 }
            );
        }

        const cleanText = result.response.text
            .replace(/```json\n?/g, '')
            .replace(/```/g, '')
            .trim();

        try {
            const parsedData = JSON.parse(cleanText);
            if (!parsedData.logo_ideas && parsedData.ideas) {
                parsedData.logo_ideas = parsedData.ideas;
                delete parsedData.ideas;
            }
            if (!parsedData.logo_ideas || !Array.isArray(parsedData.logo_ideas)) {
                throw new Error('Invalid response format');
            }
            return NextResponse.json(parsedData);
        } catch (error) {
            console.error('JSON parse error:', error);
            return NextResponse.json(
                { error: 'Invalid JSON response from AI' },
                { status: 500 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: 'An error occurred' },
            { status: 500 }
        );
    }
}