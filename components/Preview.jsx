import React, { useEffect, useState } from 'react';

const Preview = ({ content }) => {
    const [converted, setConverted] = useState('');

    useEffect(() => {
        const convertRequest = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/preview", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ markdown: content })
                });

                const data = await response.json();
                setConverted(data.converted);
            } catch (error) {
                console.error("Error fetching preview:", error);
            }
        };

        convertRequest();
    }, [content]); // Add content as a dependency


    return (
        <div
            className="w-full mt-5 p-2 bg-black text-white border text-left border-white rounded-md prose"
            dangerouslySetInnerHTML={{ __html: converted }}
        />
    );
};

export default Preview;
