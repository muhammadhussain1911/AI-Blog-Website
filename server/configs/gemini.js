import { GoogleGenerativeAI } from "@google/generative-ai";
import { setTimeout } from 'timers/promises';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generates content using Gemini AI
 * @param {string} prompt - The input prompt for the AI
 * @returns {Promise<string>} - The generated text response
 */
export async function generateAIContent(prompt) {
  try {
    await setTimeout(1000); // 1-second delay between requests
    // Get the Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    
    // Generate content
    const result = await model.generateContent(prompt);
    const response = result.response;
    
    return response.text();
  } catch (error) {
    console.error("AI generation error:", error);
    throw new Error("Failed to generate AI content");
  }
}

// Alternative if you want to keep default export
// export default generateAIContent;