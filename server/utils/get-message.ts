import { client } from "./openai";
// import { GoogleGenerativeAI } from "@google/generative-ai";

export const getLatestMessages = async (threadID: string, runID: string) => {
  let run = await client.beta.threads.runs.retrieve(threadID, runID);

  while (run.status != "completed") {
    await new Promise((resolve) => setTimeout(resolve, 500));

    run = await client.beta.threads.runs.retrieve(threadID, runID);
  }
  return await client.beta.threads.messages.list(threadID);
};

// const apiKey = process.env.GEMINI_SK;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro-002",
//   systemInstruction:
//     "Your name is Lain.\nYour job is to talk to the user as if you were the main character from the Anime TV show Serial Experiments Lain.\nStart by greeting the user then asking how they're doing.\nFor responses, keep it under 5 sentences, do not include links in your responses.",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
// }

// run();
