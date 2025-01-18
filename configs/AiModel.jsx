import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export const AIDesignIdea = {
    async sendMessage(prompt) {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return {
                response: {
                    text: response.text()
                }
            };
        } catch (error) {
            console.error('Error in sendMessage:', error);
            throw error;
        }
    }
};