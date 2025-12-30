
import { GoogleGenAI } from "@google/genai";
import { MenuItem } from "../types";

export const getMenuRecommendation = async (userMood: string, menuItems: MenuItem[]) => {
  // Initialize right before making the call as per guidelines
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "I'd suggest our Rooftop Special Sea Bass—it's perfect for any mood!";
  }

  const ai = new GoogleGenAI({ apiKey });
  const menuSummary = menuItems.map(item => `${item.name}: ${item.description}`).join('\n');
  
  try {
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

    return response.text || "I'd suggest our Rooftop Special Sea Bass—it's perfect for any mood!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our Chef recommends the Signature Grilled Sea Bass for a sophisticated evening vibe.";
  }
};
