import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `Write two unique scripts for a 30 to 60 second 
video on the topic: {topic}. Each script should be engaging, 
concise, and impactful. Do not include scene descriptions, formatting, or anything in braces—just return the plain text story.
Respond strictly in JSON format using the following schema:
-{
scripts:[
{
content:''
},
],
}`
export async function POST(req) {
    const { topic } = await req.json();

    const PROMPT = SCRIPT_PROMPT.replace('{topic}', topic);
    const result = await generateScript.sendMessage(PROMPT);
    const resp = result?.response?.text();

    return NextResponse.json(JSON.parse(resp));

}