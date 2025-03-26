import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";


const SCRIPT_PROMPT = `write a two different script for 30 seconds video on topic:{topic},

do not add scene decription

do not add anything in braces. Just return the plain story in text
*give me response in JSON format and follow the schema
-{
scripts:[
{
content:"
},
],
}`

export async function POST(req) {
    const {topic} = await req.json();
const PROMT = SCRIPT_PROMPT.replace("{topic}", topic);

    const result = await generateScript.sendMessage(PROMT);
const resp = result?.response?.text();

return NextResponse.json(JSON.parse(resp));
}