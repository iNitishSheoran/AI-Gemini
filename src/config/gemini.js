import { initializeApp } from "firebase/app";
import {
  getAI,
  getGenerativeModel,
} from "firebase/ai";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD4u9KCu5GIAAXIucAGfFAs8TDpQte9_1Q",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
});

const generateGeminiResponse = async (userInput) => {
  const model = getGenerativeModel(getAI(firebaseApp), {
    model: "gemini-2.5-pro-preview-06-05",
    generationConfig: {
      responseMimeType: "text/plain",
    },
  });

  const chat = await model.startChat();

  const result = await chat.sendMessage({
    role: "user",
    parts: [userInput],
  });

  return await result.response.text();
};

export default generateGeminiResponse;
