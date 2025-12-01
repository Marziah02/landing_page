import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Icon Components ---
const ArrowRight = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}>
		<line
			x1="5"
			y1="12"
			x2="19"
			y2="12"
		/>
		<polyline points="12 5 19 12 12 19" />
	</svg>
);

const ArrowLeft = ({ className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}>
		<line
			x1="19"
			y1="12"
			x2="5"
			y2="12"
		/>
		<polyline points="12 19 5 12 12 5" />
	</svg>
);

// --- Animation Variants ---
const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

// --- Mock Blog Post Data (Expanded for Pagination) ---
const mockPosts = [
	{
		id: 1,
		title: "Why Micro-SaaS is the Future for AI Ventures",
		slug: "blog-why-micro-saas-is-the-future",
		category: "Venture Studio",
		excerpt:
			"Explore how Micro-SaaS models are perfectly suited for launching targeted, high-impact AI products with 10x potential.",
		author: "10x Galaxy Team",
		date: "Oct 28, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=AI+Micro-SaaS",
		content: `
      <p class="text-xl leading-relaxed">At 10x Galaxy, we are constantly evaluating the models that drive 10x returns. When it comes to building and launching AI-powered products, one model consistently stands out for its speed, focus, and scalability: Micro-SaaS.</p>
      <h2>What is Micro-SaaS?</h2>
      <p>Unlike traditional, monolithic SaaS platforms that try to be everything to everyone, a Micro-SaaS business is hyper-focused. It typically targets a niche market, solves one specific problem exceptionally well, and is often run by a small team or even a single founder.</p>
      <p>Think of it as the difference between a sprawling department store and a high-end boutique. One offers endless choice; the other offers a perfectly curated solution.</p>
      <blockquote><p>"The future of AI isn't just one giant brain; it's a constellation of specialized, intelligent tools. Micro-SaaS is the framework that lets us build that constellation."</p></blockquote>
      <h2>Why AI and Micro-SaaS are a Perfect Match</h2>
      <p>The rise of powerful, accessible AI APIs (like GPT-4, Claude, and Stable Diffusion) has created a Cambrian explosion of new product possibilities. This is where the Micro-SaaS model shines:</p>
      <ul>
        <li><strong>Speed to Market:</strong> We can wrap a powerful AI capability in a clean UI, solving a niche problem, and launch in weeks, not years. This aligns perfectly with our "Move Fast, Build Smart" value.</li>
        <li><strong>High-Impact Automation:</strong> AI excels at automating complex, repetitive tasks. A Micro-SaaS can target one of these tasks (e.g., "AI-powered product descriptions for e-commerce") and deliver immediate, measurable 10x value.</li>
        <li><strong>Lean & Scalable:</strong> By leveraging AI for the heavy lifting, we can maintain a lean team, focusing on product-market fit and user experience while the AI handles the complex logic.</li>
      </ul>
      <h2>The 10x Galaxy Approach</h2>
      <p>Our venture studio model is built to launch a portfolio of these high-impact Micro-SaaS products. We identify niche problems, apply our AI expertise, and build breakthrough platforms that empower users. This isn't just the future; it's what we're building today.</p>
    `,
	},
	{
		id: 2,
		title: "The Rise of Generative AI in Product Design",
		slug: "blog-generative-ai-design",
		category: "AI & Design",
		excerpt:
			"Generative AI is not just a tool; it's a new creative partner. We dive into how it's reshaping the design workflow.",
		author: "Jane Doe",
		date: "Oct 22, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=Gen-AI+Design",
		content: `<p>Generative AI is completely changing the game for product designers. What used to take days of iteration can now be explored in minutes...</p>`,
	},
	{
		id: 3,
		title: "Building 10x Products: Our Core Principles",
		slug: "blog-10x-principles",
		category: "Product",
		excerpt:
			"What does it take to build a product that delivers 10x returns? We share our internal playbook for innovation.",
		author: "10x Galaxy Team",
		date: "Oct 15, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=10x+Playbook",
		content: `<p>The term "10x" is at the core of our name and mission. But what does it actually mean in practice? It's not just about 10x revenue; it's about 10x impact...</p>`,
	},
	{
		id: 4,
		title: 'The "Lean Venture Studio" Model Explained',
		slug: "blog-lean-venture-studio",
		category: "Venture Studio",
		excerpt:
			"Why we chose the venture studio model over a traditional accelerator or VC fund for building next-gen AI companies.",
		author: "10x Galaxy Team",
		date: "Oct 10, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=Venture+Studio",
		content: `<p>Venture studios are not a new concept, but applying the "lean" methodology to an AI-focused studio is. Here's how we operate...</p>`,
	},
	{
		id: 5,
		title: "Prompt Engineering: The New Essential Skill",
		slug: "blog-prompt-engineering",
		category: "AI & Design",
		excerpt:
			"Crafting the perfect prompt is more art than science, and it's the key to unlocking the true power of LLMs.",
		author: "Jane Doe",
		date: "Oct 5, 2025",
		imageUrl:
			"https://placehold.co/600x400/000000/F2F2F2?text=Prompt+Engineering",
		content: `<p>If the AI is the engine, the prompt is the steering wheel. We explore techniques for effective prompt engineering...</p>`,
	},
	{
		id: 6,
		title: "Validating AI Product Ideas in 48 Hours",
		slug: "blog-validating-ai-ideas",
		category: "Product",
		excerpt:
			"Our rapid validation process for testing new AI product concepts before writing a single line of production code.",
		author: "10x Galaxy Team",
		date: "Oct 1, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=Idea+Validation",
		content: `<p>Don't waste months building something nobody wants. Our 48-hour validation sprint is crucial to our success...</p>`,
	},
	{
		id: 7,
		title: "The Ethics of AI: Building with Responsibility",
		slug: "blog-ai-ethics",
		category: "Venture Studio",
		excerpt:
			"With great power comes great responsibility. How we approach the ethical challenges of building intelligent systems.",
		author: "10x Galaxy Team",
		date: "Sep 25, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=AI+Ethics",
		content: `<p>It's not enough to ask "can we build it?" We must also ask "should we build it?" An overview of our ethical framework...</p>`,
	},
	{
		id: 8,
		title: "From Idea to 5,000 Users: A Launch Retrospective",
		slug: "blog-launch-retrospective",
		category: "Product",
		excerpt:
			"A behind-the-scenes look at the launch of our first product and the lessons we learned getting to 5,000+ users.",
		author: "Jane Doe",
		date: "Sep 20, 2025",
		imageUrl: "https://placehold.co/600x400/000000/F2F2F2?text=5000+Users",
		content: `<p>The journey from 0 to 1 (and then to 5,000) is always a wild ride. Here's what went right, what went wrong, and what we're doing next...</p>`,
	},
];

const POSTS_PER_PAGE = 6;

// --- 2. Blog Hero Section ---
const BlogHeroSection = () => (
	<motion.section
		className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
		initial="hidden"
		animate="visible"
		variants={containerVariants}>
		<div
			className="absolute inset-0 bg-cover bg-center"
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1453928582365-b6ad333212c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)", // Blurred keyboard image
				filter: "blur(8px)",
				transform: "scale(1.05)",
			}}></div>
		<div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
		<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<motion.h1
				className="text-5xl md:text-7xl font-bold tracking-tighter"
				variants={itemVariants}>
				10x Insights
			</motion.h1>
			<motion.p
				className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
				variants={itemVariants}>
				Our thoughts on AI, product, and building 10x ventures.
			</motion.p>
		</div>
	</motion.section>
);

// --- 3. Blog List Section ---
const BlogListSection = ({ onPostClick }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(mockPosts.length / POSTS_PER_PAGE);

	// Get posts for the current page
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const currentPosts = mockPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

	const handlePageChange = (page) => {
		if (page < 1 || page > totalPages) return; // Boundary check
		setCurrentPage(page);
		window.scrollTo(0, 0); // Scroll to top on page change
	};

	return (
		<motion.section
			className="bg-[#F2F2F2] text-black py-16 sm:py-24"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={containerVariants}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					key={currentPage} // Add key to force re-animation on page change
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					animate="visible">
					{currentPosts.map((post) => (
						<motion.div
							key={post.id}
							variants={itemVariants}
							className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col transition-transform hover:scale-105">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									onPostClick(post);
								}}
								className="block">
								<img
									className="w-full h-48 object-cover"
									src={post.imageUrl}
									alt={`Featured image for ${post.title}`}
									onError={(e) => {
										e.target.src =
											"https://placehold.co/600x400/F2F2F2/000000?text=Image+Error";
									}}
								/>
							</a>
							<div className="p-6 flex flex-col flex-grow">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									{post.category}
								</p>
								<h3 className="mt-2 text-2xl font-semibold text-black">
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault();
											onPostClick(post);
										}}
										className="hover:underline">
										{post.title}
									</a>
								</h3>
								<p className="mt-3 text-gray-700 flex-grow">{post.excerpt}</p>
								<div className="mt-6">
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault();
											onPostClick(post);
										}}
										className="font-semibold text-black hover:underline flex items-center">
										Read More
										<ArrowRight className="w-5 h-5 ml-2" />
									</a>
								</div>
							</div>
							<div className="p-6 pt-0 text-sm text-gray-500 border-t border-[#F2F2F2] mt-4">
								<span>{post.author}</span> &middot; <span>{post.date}</span>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* --- Pagination Controls --- */}
				<div className="mt-16 flex justify-center items-center space-x-2">
					{/* Previous Button */}
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
						Prev
					</button>

					{/* Page Number Buttons */}
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<button
							key={page}
							onClick={() => handlePageChange(page)}
							className={`px-4 py-2 rounded-lg ${
								currentPage === page
									? "bg-black text-white"
									: "bg-white text-black hover:bg-gray-100"
							} font-medium transition-colors`}>
							{page}
						</button>
					))}

					{/* Next Button */}
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
						Next
					</button>
				</div>
			</div>
		</motion.section>
	);
};

// --- 4. Blog Post Page Component ---
const BlogPostPage = ({ post, onBackClick }) => (
	<main>
		{/* Post Header */}
		<motion.section
			className="bg-white text-black py-16 sm:py-24"
			initial="hidden"
			animate="visible"
			variants={containerVariants}>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.p
					className="text-sm font-semibold text-gray-600 uppercase tracking-wide"
					variants={itemVariants}>
					{post.category}
				</motion.p>
				<motion.h1
					className="mt-4 text-4xl md:text-6xl font-bold tracking-tighter text-black"
					variants={itemVariants}>
					{post.title}
				</motion.h1>
				<motion.p
					className="mt-6 text-lg text-gray-700"
					variants={itemVariants}>
					By {post.author} on {post.date}
				</motion.p>
			</div>
		</motion.section>

		{/* Post Content */}
		<motion.section
			className="bg-white text-black pb-16 sm:pb-24"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={containerVariants}>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Back Link */}
				<motion.div
					className="mb-8"
					variants={itemVariants}>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							onBackClick();
						}}
						className="flex items-center font-semibold text-black hover:underline">
						<ArrowLeft className="w-5 h-5 mr-2" />
						Back to Blog
					</a>
				</motion.div>

				{/* Featured Image */}
				<motion.img
					className="w-full h-auto rounded-xl object-cover shadow-md"
					src={post.imageUrl.replace("600x400", "1200x600")} // Get larger image
					alt={`Featured image for ${post.title}`}
					variants={itemVariants}
					onError={(e) => {
						e.target.src =
							"https://placehold.co/1200x600/F2F2F2/000000?text=Image+Error";
					}}
				/>

				{/* Article Content */}
				<motion.div
					className="mt-12 prose prose-lg lg:prose-xl max-w-none text-gray-800"
					variants={itemVariants}
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</div>
		</motion.section>
	</main>
);

// --- Main App Component (with View Routing) ---
export default function Blogs() {
	const [view, setView] = useState("list"); // 'list' or 'post'
	const [selectedPost, setSelectedPost] = useState(null);

	const handlePostClick = (post) => {
		setSelectedPost(post);
		setView("post");
		window.scrollTo(0, 0);
	};

	const handleBackClick = () => {
		setSelectedPost(null);
		setView("list");
		window.scrollTo(0, 0);
	};

	return (
		<div className="bg-white font-inter">
			{view === "list" && (
				<main>
					<BlogHeroSection />
					<BlogListSection onPostClick={handlePostClick} />
				</main>
			)}

			{view === "post" && (
				<BlogPostPage
					post={selectedPost}
					onBackClick={handleBackClick}
				/>
			)}
		</div>
	);
}
