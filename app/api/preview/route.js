import { NextResponse } from "next/server";


const convertMarkdown = (markdown) => {
    return "Hello World";
}

export async function GET(request) {
    const data = await request.json()
    const converted = convertMarkdown(data.markdown)
    return NextResponse.json({ data: converted })
}