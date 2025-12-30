import { GoogleGenAI } from "@google/genai";
import { MenuItem } from "../types";

// Always use named parameter for apiKey and use process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMenuRecommendation = async (userMood: string, menuItems: MenuItem[]) => {
  const menuSummary = menuItems.map(item => `${item.name}: ${item.description}`).join('\n');
  
  // Using systemInstruction for the concierge persona and menu context as per guidelines
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `A guest is feeling: "${userMood}".`,
    config: {
      systemInstruction: `You are the AI Concierge for "Breeze - The Rooftop Café". 
Based on our menu below, suggest the perfect dish or drink and explain why it fits their mood. 
Keep it elegant, friendly, and brief (max 3 sentences).

Menu:
${menuSummary}`,
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
  });

  // response.text is a property, not a method, and returns the extracted string.
  return response.text || "I'd suggest our Rooftop Special Sea Bass—it's perfect for any mood!";
};