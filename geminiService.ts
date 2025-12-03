import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
// The API key must be obtained exclusively from process.env.API_KEY.
// We assume process.env.API_KEY is available in the execution context.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the friendly and helpful AI assistant for "SavEat", a food rescue platform in Lithuania. 
      Your goal is to help users understand how SavEat works, the benefits of rescuing food, and how to get started.
      
      Key details about SavEat:
      - Mission: Fight food waste by connecting consumers with surplus meals from restaurants, cafes, and bakeries.
      - Benefits for Users: Save up to 70% on quality food, discover new places, help the environment.
      - Benefits for Business: Recover revenue, attract new customers, easy dashboard.
      - How it works: 1. Browse surplus meals nearby. 2. Reserve in app. 3. Pick up during specified time.
      - Cities: Currently launching in Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys.
      
      Tone: Enthusiastic, eco-conscious, helpful, and concise. Use emojis occasionally (🌱, 🍽️, 💚).
      If asked about technical support or billing, politely direct them to support@saveat.lt.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm currently offline (API Key missing). Please try again later.";
  }
  try {
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! Something went wrong. Please try again later.";
  }
};