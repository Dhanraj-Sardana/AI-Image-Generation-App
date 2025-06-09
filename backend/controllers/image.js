import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const image = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image",
      {
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 512,
        width: 512,
        samples: 1,
        steps: 30
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.Stability_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );

    const base64Image = response.data.artifacts[0].base64;
    res.status(200).json({ photo: base64Image });

  } catch (error) {
    console.error("Stability API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Image generation failed." });
  }
};
