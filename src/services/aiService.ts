import axios from "axios";

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchAIEnhancements = async (task: string): Promise<string> => {
  const response = await axios.post("https://api.openai.com/v1/completions", {
    prompt: `Mejora esta tarea: "${task}" y sugiere subtareas.`,
    model: "gpt-4",
    max_tokens: 100,
  }, {
    headers: {
      Authorization: `Bearer ${openaiApiKey}`,
    },
  });

  return response.data.choices[0].text;
};
