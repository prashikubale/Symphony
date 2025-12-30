import { GoogleGenAI } from "@google/genai";
import { MenuItem } from "../types";

export const getMenuRecommendation = async (userMood: string, menuItems: MenuItem[]) => {
  // Use strictly following guidelines, while being safe about the environment
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;

  if (!apiKey) {
    console.warn("Breeze Concierge: API_KEY missing.");
    return "Our Chef recommends the Signature Grilled Sea Bass—it's absolutely perfect for an elevated evening vibe!";
  }

  try {
    // ALWAYS instantiate fresh right before making the call per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const menuSummary = menuItems.map(item => `${item.name}: ${item.description}`).join('\n');
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `A guest is feeling: "${userMood}". Recommend a dish from our menu.`,
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
    console.error("Breeze Concierge: Gemini API Error", error);
    return "I'd suggest our Rooftop Special Sea Bass—it's perfect for any mood!";
  }
};