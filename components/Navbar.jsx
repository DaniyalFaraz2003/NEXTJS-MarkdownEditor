import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="bg-black text-white py-4 border border-black border-b-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Minimalist Markdown Editor</h1>
                <nav>
                    <Link href="/">
                        <span className="text-gray-300 hover:text-white px-3">Home</span>
                    </Link>
                    <Link href="/editor">
                        <span className="text-gray-300 hover:text-white px-3">Editor</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
