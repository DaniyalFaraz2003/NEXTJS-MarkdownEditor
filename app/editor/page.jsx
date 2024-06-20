"use client";

import React, { useState, useEffect, useRef } from 'react'
import Preview from '@/components/Preview';

const page = () => {
    const [activeTab, setActiveTab] = useState('code');
    const [markdown, setMarkdown] = useState('');

    const textareaRef = useRef(null);


    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [markdown]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="my-10">
            <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
                <div className="w-full max-w-4xl mt-6">
                    <div className="flex border-b border-gray-300">
                        <button
                            className={`py-2 px-4 ${activeTab === 'code' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleTabChange('code')}
                        >
                            Code
                        </button>
                        <button
                            className={`py-2 px-4 ${activeTab === 'preview' ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => handleTabChange('preview')}
                        >
                            Preview
                        </button>
                    </div>

                    <div className="p-4 border border-gray-300 rounded-b-lg">
                        {activeTab === 'code' && (
                            <div>
                                <textarea
                                    ref={textareaRef}
                                    className="bg-black text-white w-full p-5"
                                    name="editor"
                                    id="editor"
                                    value={markdown}
                                    onChange={handleChange}
                                    style={{ resize: 'none', overflow: 'hidden' }}
                                />
                            </div>
                        )}
                        {activeTab === 'preview' && (
                            <Preview content={markdown} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
