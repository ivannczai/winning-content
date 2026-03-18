import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export interface GeneratedPost {
  id: string;
  content: string;
  hashtags: string[];
  hookScore: number;
  format: string;
  createdAt: string;
}

export interface GenerateRequest {
  topic: string;
  format: "storytelling" | "educacional" | "opiniao";
  context?: string;
}

const POST_SCHEMA = {
  type: "object" as const,
  properties: {
    posts: {
      type: "array" as const,
      items: {
        type: "object" as const,
        properties: {
          content: { type: "string" as const, description: "The full LinkedIn post text" },
          hashtags: {
            type: "array" as const,
            items: { type: "string" as const },
            description: "3-5 relevant hashtags without #",
          },
          hookScore: {
            type: "number" as const,
            description: "Engagement prediction score from 1-10",
          },
        },
        required: ["content", "hashtags", "hookScore"],
      },
    },
  },
  required: ["posts"],
};

export async function generatePosts(request: GenerateRequest) {
  const { topic, format, context } = request;

  const formatInstructions: Record<string, string> = {
    storytelling:
      "Write in first person, share a real-seeming experience or journey. Start with a hook that creates curiosity. Build tension, deliver insight. End with a reflection or lesson.",
    educacional:
      "Share practical knowledge in a structured way. Use numbered lists, bullet points, or step-by-step format. Start with a bold statement about what the reader will learn. End with a call to action.",
    opiniao:
      "Take a clear, bold stance on a professional topic. Start with a contrarian or provocative hook. Support with brief arguments. End with a question that invites discussion.",
  };

  const systemPrompt = `You are an expert LinkedIn content strategist who creates viral, high-engagement posts in Portuguese (Brazil).

RULES:
- Write in Portuguese (Brazil)
- Each post must be 800-1500 characters (LinkedIn optimal)
- Start every post with a POWERFUL hook (first line is everything on LinkedIn)
- Use line breaks strategically (LinkedIn mobile reading)
- No emojis overuse (max 3-5 per post, strategic placement)
- Include a subtle call-to-action at the end
- Make it feel authentic and human, NEVER robotic
- Vary the opening style across the 3 variations

FORMAT STYLE: ${formatInstructions[format]}

${context ? `ADDITIONAL CONTEXT FROM USER: ${context}` : ""}`;

  const userPrompt = `Generate exactly 3 different LinkedIn post variations about this topic: "${topic}"

Each variation must have a different angle/approach but all follow the ${format} format.`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: userPrompt,
    config: {
      systemInstruction: systemPrompt,
      thinkingConfig: { thinkingLevel: "high" },
      responseMimeType: "application/json",
      responseJsonSchema: POST_SCHEMA,
      temperature: 1.0,
    },
  });

  const parsed = JSON.parse(response.text || "{}");
  return parsed.posts as Array<{
    content: string;
    hashtags: string[];
    hookScore: number;
  }>;
}
