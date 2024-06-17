// pages/index.js
import Link from 'next/link';

const Home = () => {
	return (
		<div className="my-10">
			<main className="flex flex-1 flex-col items-center justify-center text-center px-4">
				<h2 className="text-4xl font-bold mb-4">Welcome to Minimalist Markdown Editor</h2>
				<p className="text-lg mb-6">A simple, distraction-free tool for writing and viewing Markdown</p>

				<div className="flex gap-20 mt-10">
					<div className="flex flex-col items-start bg-black text-white border border-white p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold mb-4 self-start">Features</h3>
						<div className='flex gap-10'>
							<ul className="list-disc space-y-2 pl-4 mt-4 text-left">
								<li>Real-time Preview</li>
								<li>Syntax Highlighting</li>
							</ul>
							<ul className="list-disc space-y-2 pl-4 mt-4 text-left">
								<li>Easy Export Options</li>
								<li>Import Markdown Files</li>
							</ul>
						</div>
						<Link href="/editor" className="w-full">
							<span className="bg-black text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black active:bg-black active:text-white transition block text-center mt-10">Try It Out</span>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
