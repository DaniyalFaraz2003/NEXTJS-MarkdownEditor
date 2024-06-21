import { NextResponse } from 'next/server';

export const highlightMarkdown = (text) => {
    const headingStyles = {
        h1: "text-4xl font-bold text-white",
        h2: "text-3xl font-semibold text-white",
        h3: "text-2xl font-medium text-white",
        h4: "text-xl font-normal text-white",
        h5: "text-lg font-light text-white",
        h6: "text-base font-thin text-white",
    };


    const rules = [
        { regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>' }, // Bold
        { regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>' }, // Italic
        { regex: /`([^`]+)`/g, replacement: '<code>$1</code>' }, // Inline code
        { regex: /^(#{1,6})\s*(.+)$/gm, replacement: (match, p1, p2) => `<h${p1.length} class="${headingStyles[`h${p1.length}`]}">${p2}</h${p1.length}>` }, // Headers
        { regex: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2">$1</a>' }, // Links
        { regex: /^> (.*)$/gm, replacement: '<blockquote>$1</blockquote>' }, // Blockquotes
        { regex: /^\s*([-+*])\s+(.*)$/gm, replacement: '<li>$2</li>' }, // Unordered list
        { regex: /^\d+\.\s+(.*)$/gm, replacement: '<li>$1</li>' }, // Ordered list
    ];

    let highlighted = text;

    // Apply list replacements first and wrap in <ul> or <ol>
    highlighted = highlighted.replace(/((?:^\s*[-+*]\s+.*$\n?)+)/gm, match => `<ul>${match.replace(/^\s*[-+*]\s+(.*)$/gm, '<li>$1</li>')}</ul>`);
    highlighted = highlighted.replace(/((?:^\d+\.\s+.*$\n?)+)/gm, match => `<ol>${match.replace(/^\d+\.\s+(.*)$/gm, '<li>$1</li>')}</ol>`);

    // Apply the remaining replacements
    rules.forEach(rule => {
        highlighted = highlighted.replace(rule.regex, rule.replacement);
    });

    return highlighted;
};


const convertMarkdown = (markdown) => {
    // Here you can implement actual Markdown conversion logic, e.g., using a library like marked or markdown-it
    return highlightMarkdown(markdown);
}

export async function POST(request) {
    try {
        const data = await request.json();
        const converted = convertMarkdown(data.markdown);
        return NextResponse.json({ converted });
    } catch (error) {
        return NextResponse.json({ error: "Error processing request" }, { status: 500 });
    }
}
