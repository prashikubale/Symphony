
import { GoogleGenAI } from "@google/genai";
import { MenuItem } from "../types";

export const getMenuRecommendation = async (userMood: string, menuItems: MenuItem[]) => {
  // Safe environment check to prevent crashes if process is undefined
  let apiKey: string | undefined;
  try {
    apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
  } catch (e) {
    apiKey = undefined;
  }

  if (!apiKey) {
    console.warn("API_KEY is not defined in the environment.");
    return "Our Chef recommends the Signature Grilled Sea Bass—it's absolutely perfect for an elevated evening vibe!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const menuSummary = menuItems.map(item => `${item.name}: ${item.description}`).join('\n');
    
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

    return response.text || "The Rooftop Special Grilled Sea Bass is our signature recommendation for you today.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'd suggest our Rooftop Special Sea Bass—it's perfect for any mood!";
  }
};
