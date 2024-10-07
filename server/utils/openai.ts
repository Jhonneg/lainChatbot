import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: process.env.OPEN_AI_SK,
});

export const assistant = "asst_1mgIcXp00voqP8u1chpg6ReM";
