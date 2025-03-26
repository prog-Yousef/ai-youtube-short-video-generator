const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const fs = require("node:fs");
  const mime = require("mime-types");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };
  
 
    export const generateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a two different script for 30 second video on Topic:Kids Story,\n\n* Give me response in JSON format and follow the schema \n-{\nscript:[\n{\ncontent:\"\n},\n\n],\n\n\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"script\": [\n        {\n          \"content\": \"(SCENE START) A cozy bedroom. A young girl, LILLY (6), sits on her bed, holding a well-loved teddy bear. A warm lamp illuminates her face.\"\n        },\n        {\n          \"content\": \"(SOUND of gentle wind chimes) LILLY (voiceover, warm and slightly sleepy): Once upon a time, in a land filled with whispering trees...\"\n        },\n        {\n          \"content\": \"(VISUAL: Transition to a whimsical, illustrated shot of a forest with talking trees and friendly-looking animals.)\"\n        },\n        {\n          \"content\": \"LILLY (voiceover): ...lived a little squirrel named Nutsy. Nutsy was always losing things!\"\n        },\n        {\n          \"content\": \"(VISUAL: Nutsy the squirrel, animated simply, frantically searches for something behind a tree. Comic sound effect of rustling leaves.)\"\n        },\n        {\n          \"content\": \"LILLY (voiceover): One day, he lost something very, very important...\"\n        },\n        {\n          \"content\": \"(VISUAL: Nutsy looks distraught, holding his head in his paws. Fade to black.)\"\n        },\n        {\n          \"content\": \"(TEXT ON SCREEN: Find out what Nutsy lost! [Website/App Logo])\"\n        },\n        {\n          \"content\": \"(SOUND: Upbeat, playful music fades in and then out.) (SCENE END)\"\n        }\n      ]\n    },\n    {\n      \"script\": [\n        {\n          \"content\": \"(SCENE START) A vibrant, colorful animated scene of a jungle. A monkey, MIKO (5), swings from a vine.\"\n        },\n        {\n          \"content\": \"(SOUND of jungle birds and playful monkey chatter) NARRATOR (Energetic, friendly voice): Meet Miko! The cheekiest monkey in the jungle!\"\n        },\n        {\n          \"content\": \"(VISUAL: Miko lands on a tree branch, spots a bright red fruit, and grabs it.)\"\n        },\n        {\n          \"content\": \"NARRATOR: Miko loved adventures... and bananas! But sometimes, his curiosity got him into trouble.\"\n        },\n        {\n          \"content\": \"(VISUAL: Miko accidentally drops the fruit into a dark cave. A scared expression appears on his face.)\"\n        },\n        {\n          \"content\": \"NARRATOR: What's hiding in the cave? And will Miko be brave enough to find out?\"\n        },\n        {\n          \"content\": \"(VISUAL: Miko cautiously peeks into the cave. Dramatic music sting.)\"\n        },\n        {\n          \"content\": \"(VISUAL: quick cuts -  Miko's surprised expression, glowing eyes in the dark, Miko running out of the cave laughing)\"\n        },\n        {\n          \"content\": \"(TEXT ON SCREEN: New adventures every week!  [App Store/Google Play Buttons])\"\n        },\n         {\n          \"content\": \"(VISUAL: logo and app name)\"\n        },\n        {\n          \"content\": \"(SOUND: Jungle music fades in and out.) (SCENE END)\"\n        }\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "write a two different script for 30 second video on Topic:Kids Story,\n*Do not add Scene description\n*Do not add Anithing in Braces. Just return the plain story in text\nGive me response in JSON format and follow the schema\n-{\nscripts:[\n{\ncontent:\"\n},\n\n],\n\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"script\": [\n        {\n          \"content\": \"Once upon a time, lived a little firefly named Flicker. Flicker was so small, his light was barely a spark.\"\n        },\n        {\n          \"content\": \"All the other fireflies shone so brightly. Flicker felt sad he couldn't shine as bright as them.\"\n        },\n        {\n          \"content\": \"One night, a little lost beetle wandered into the dark forest, scared and alone.\"\n        },\n        {\n          \"content\": \"The other fireflies were too busy dancing to notice, but Flicker saw the beetle.\"\n        },\n        {\n          \"content\": \"Flicker, with all his might, focused his tiny spark and guided the beetle home.\"\n        },\n        {\n          \"content\": \"The beetle was so grateful! Flicker realized, even a small light can make a big difference.\"\n        },\n        {\n          \"content\": \"Discover more heartwarming stories! [Website/App Logo]\"\n        }\n      ]\n    },\n    {\n      \"script\": [\n        {\n          \"content\": \"Once, there was a shy little cloud named Nimbus. Nimbus didn't like making rain.\"\n        },\n        {\n          \"content\": \"All the other clouds loved to shower the earth, but Nimbus worried he'd make mistakes.\"\n        },\n        {\n          \"content\": \"The flowers were wilting, the animals were thirsty, and the world needed rain.\"\n        },\n        {\n          \"content\": \"A wise old sunbeam whispered to Nimbus, 'Even a little rain can help things grow.'\"\n        },\n        {\n          \"content\": \"Nimbus took a deep breath and let a few drops fall. Then a few more.\"\n        },\n        {\n          \"content\": \"Soon, a gentle rain was falling. The flowers perked up, and Nimbus felt a sense of pride.\"\n        },\n         {\n          \"content\": \"Every story is a new adventure. Download now! [App Store/Google Play Buttons]\"\n        }\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  


/*     console.log(result.response.text());
 */
 /*    const result = await chatSession.sendMessage("INSERT_INPUT_HERE"); */