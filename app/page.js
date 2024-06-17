// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Minimalist Markdown Editor</h2>
        <p className="text-lg mb-6">A simple, distraction-free tool for writing and viewing Markdown</p>
        <Link href="/editor">
          <span className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Get Started</span>
        </Link>
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time Preview</li>
            <li>Syntax Highlighting</li>
            <li>Easy Export Options</li>
          </ul>
        </section>
      </main>

      <footer className="bg-black border border-black border-t-white text-white py-4">
        <div className="container mx-auto text-center">
          <p>Contact: example@example.com</p>
          <p>&copy; 2024 Minimalist Markdown Editor</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
