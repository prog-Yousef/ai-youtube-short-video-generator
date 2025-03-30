const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

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
    responseMimeType: "application/json",
};


export const generateScript = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "write a two different script for 30 Seconds video on Topic:Kids Story,\n- Do not add Scene description\n- Do not Add Anything in Braces, Just return the plain story in text\n- Give me response in JSON format and follow the schema\n-{\n scripts:[\n {\n content:''\n },\n ],\n}\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"Once upon a time, there was a little firefly named Flicker who was afraid of the dark. He wouldn't light up! One night, lost in the woods, Flicker saw other fireflies, bravely shining. He took a deep breath, flickered his light, and helped guide them all home. Flicker wasn't afraid anymore!\"\n    },\n    {\n      \"content\": \"Barnaby the bear wanted to fly. He tried flapping his arms, jumping off rocks – nothing worked! He felt sad until a wise old owl suggested building a kite. Barnaby built a beautiful kite, ran with it, and watched it soar. He couldn't fly, but his dreams could!\"\n    }\n  ]\n}\n```" },
            ],
        },
    ],
});

export const GenerateImageScript = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Image prompt of Cinematic style with all deatils for each scene for 30 seconds video : script: Rosa Parks refused to give up her seat on a bus in 1955. Her quiet act of defiance sparked the Montgomery Bus Boycott, a pivotal moment in the Civil Rights Movement. One person's bravery can inspire lasting change for everyone.\n\nJust Give specifing image prompt depends on the story line\n\ndo not give camera angle image prompt\n\nFollow the Folowing schema and return JSON data (Max 4-5 Images). JSON response Only\n\n[\n{\nimagePrompt:'',\nsceneContent: ' <Script Content>'\n}\n]" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n[\n  {\n    \"imagePrompt\": \"A tired Rosa Parks, an African American woman in her 40s with a calm but determined expression, sits in a Montgomery bus seat. It's 1955. The bus is crowded with both Black and white passengers, separated by an invisible but palpable line. The light is dim, highlighting the weariness of the day. The atmosphere is tense.\",\n    \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n  },\n  {\n    \"imagePrompt\": \"Close up on Rosa Park's hand clenching her purse as the white bus driver looks back at her with a stern expression. Other white passengers are staring at her. The composition emphasizes the weight of the moment and the defiance in her quiet act. The color palette is muted, reflecting the era.\",\n    \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery Bus Boycott,\"\n  },\n  {\n    \"imagePrompt\": \"A wide shot of a large group of African Americans walking down a street in Montgomery, Alabama. They are boycotting the buses. The scene is filled with determined faces. Banners and signs advocating for equal rights are visible. The overall tone is one of hope and solidarity. Bright, clear lighting, showcasing the sheer number of people involved.\",\n    \"sceneContent\": \"a pivotal moment in the Civil Rights Movement.\"\n  },\n  {\n    \"imagePrompt\": \"A montage showing a timeline of events following the bus boycott: newspaper headlines, meetings, marches, and legal battles. The style is fast-paced and impactful. The final image is a hopeful scene of integrated buses with people of all races sitting together. Focus on key historical moments and faces associated with the Civil Rights Movement.\",\n    \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n  }\n]\n```" },
            ],
        },
    ],
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
