
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductDescription = async (productName: string, category: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a professional, industrial-grade export product description for a product named "${productName}" in the category "${category}". Focus on quality, durability, and international standards. Keep it under 100 words.`
    });
    return response.text || "Quality industrial component manufactured to global precision standards.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Precision engineered component for diverse industrial applications.";
  }
};

export const generateQuotationReply = async (inquiry: { name: string, message: string, product?: string }) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Draft a professional, warm, and corporate export quotation follow-up email for a client named ${inquiry.name} who inquired about ${inquiry.product || 'our industrial products'}. Their message was: "${inquiry.message}". Keep it concise and professional.`
    });
    return response.text || "Thank you for your inquiry. Our team will get back to you with a detailed quote shortly.";
  } catch (error) {
    return "Thank you for your interest in Savita Global. We have received your inquiry.";
  }
};

export const translateText = async (text: string, targetLanguage: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Translate the following industrial text into ${targetLanguage}. Maintain the professional corporate tone: "${text}"`
    });
    return response.text || text;
  } catch (error) {
    return text;
  }
};

export const chatWithAI = async (message: string, context: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: `You are an AI assistant for Savita Global Group of Industries. 
        Context: ${context}. 
        Answer queries professionally about Industrial Machinery, Tools, and Precision Components. 
        Always be helpful and try to capture leads.`
      }
    });
    return response.text;
  } catch (error) {
    return "I'm sorry, I'm having trouble connecting. Please call us at +91 9506943134.";
  }
};
