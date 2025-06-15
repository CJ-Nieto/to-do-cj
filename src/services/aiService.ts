import axios from "axios";

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchAIEnhancements = async (task: string): Promise<string> => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `Crea una lista de tareas sobre: "${task}" y sugiere subtareas.`,
        model: "gpt-3.5-turbo",
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "response" in error &&
      error.response &&
      typeof error.response === "object" &&
      "data" in error.response
    ) {
      // @ts-ignore
      console.error("Error en la solicitud a OpenAI:", (error as any).response.data || error);
    } else {
      console.error("Error en la solicitud a OpenAI:", error);
    }
    throw new Error("Error al conectar con OpenAI API");
  }
};