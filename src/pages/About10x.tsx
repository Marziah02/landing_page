import React from "react";
import { motion } from "framer-motion";
import herosection from "@/assets/sharedimage.jpeg";

// --- Icon Components (using SVG for single-file compatibility) ---

const CheckCircle = ({ className }) => (
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
		<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
		<polyline points="22 4 12 14.01 9 11.01" />
	</svg>
);

const Briefcase = ({ className }) => (
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
		<rect
			x="2"
			y="7"
			width="20"
			height="14"
			rx="2"
			ry="2"
		/>
		<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
	</svg>
);

const Users = ({ className }) => (
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
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
		<circle
			cx="9"
			cy="7"
			r="4"
		/>
		<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
);

const TrendingUp = ({ className }) => (
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
		<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
		<polyline points="17 6 23 6 23 12" />
	</svg>
);

// Framer Motion Variants for consistent animation
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

// --- 2. Hero Section (About) ---
const HeroSection = () => (
	<motion.section
		className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
		initial="hidden"
		animate="visible"
		variants={containerVariants}>
		<div
			className="absolute inset-0 bg-cover bg-center"
			style={{
				// backgroundImage:
				// 	"url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1974&q=80)", // Blurred office image
				backgroundImage: `url(${herosection})`,
				// filter: "blur(2px)",
				transform: "scale(1.05)", // Slightly scale to hide blur edges
			}}></div>
		<div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
		<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<motion.h1
				className="tracking-tighter"
				variants={itemVariants}
				style={{
					fontFamily: "Inter",
					fontSize: "48px",
					fontWeight: "600",
					letterSpacing: "-1.68px",
					lineHeight: "64px",
					textAlign: "center",
				}}>
				About 10x Galaxy
			</motion.h1>
		</div>
	</motion.section>
);

// --- 3. Intro Section (Moved content) ---
const IntroSection = () => (
	<motion.section
		className=" text-black py-12"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<motion.h2
				style={{
					fontFamily: "Inter",
					fontSize: "38px",
					fontWeight: "600",
					letterSpacing: "-1.68px",
					lineHeight: "64px",
					textAlign: "center",
				}}
				// className="text-3xl md:text-5xl font-bold tracking-tighter"
				variants={itemVariants}>
				10x Galaxy Ltd - AI Venture Studio
			</motion.h2>
			<motion.p
				style={{
					fontFamily: "Inter",
					fontSize: "18px",
					fontWeight: "400",
					lineHeight: "38.4px",
					textAlign: "left",
				}}
				className="mt-4  text-gray-800 container mx-auto"
				variants={itemVariants}>
				10x Galaxy Ltd is a UK-based AI Venture Studio shaping the evolution of
				intelligence itself. We build and scale AI and AGI technologies designed
				to accelerate human progress and unlock exponential potential across
				industries. Our vision goes beyond automation. We are engineering a
				future where human creativity and artificial intelligence grow together
				to power the next great leap in innovation.
			</motion.p>
		</div>
	</motion.section>
);

// --- 4. Stats Section ---
// const stats = [
// 	{
// 		value: "10",
// 		label: "AI Products in development & launch cycle",
// 	},
// 	{
// 		value: "10X",
// 		label: "ROI Vision embedded in every product",
// 	},
// 	{
// 		value: "5,000+",
// 		label: "early users and counting",
// 	},
// ];

const stats = [
	{
		value: "AI SaaS",
		label:
			"Designing scalable intelligence platforms that transform how businesses operate and grow.",
	},
	{
		value: "AGI Systems",
		label:
			"Advancing cognitive architectures that explore the next frontier of human–machine intelligence.",
	},
	{
		value: "Creative AI",
		label:
			"Turning imagination into innovation through expressive, generative technologies.",
	},
	{
		value: "Cognitive Automation",
		label:
			"Empowering enterprises with adaptive, self-learning systems that think, act, and evolve autonomously.",
	},
];

const StatsSection = () => (
	<motion.section
		className="bg-[#F2F2F2] text-black py-12 "
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="max-w-[1600px] mx-auto container">
			<motion.h2
				style={{
					fontFamily: "Inter",
					fontSize: "38px",
					fontWeight: "600",
					// letterSpacing: "-1.68px",
					// lineHeight: "64px",
					textAlign: "center",
				}}
				// className="text-3xl md:text-5xl font-bold tracking-tighter"
				variants={itemVariants}>
				The Future We’re Building
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-10">
				{stats.map((stat) => (
					<motion.div
						key={stat.label}
						variants={itemVariants}
						className="bg-white p-8 text-center">
						{/* <span
							className=" text-black"
							style={{
								fontFamily: "Inter",
								fontSize: "48px",
								fontWeight: "600",
								letterSpacing: "-1.68px",
								lineHeight: "64px",
								textAlign: "center",
							}}>
							{stat.value}
						</span> */}
						<h3 className="font-sans text-xl font-semibold mb-4">
							{stat.value}
						</h3>
						<p className="mt-2 text-lg text-gray-700 font-sans">{stat.label}</p>
					</motion.div>
				))}
			</div>
		</div>
	</motion.section>
);

// --- 5. Mission & Vision Section ---
const MissionSection = () => (
	<motion.section
		className="bg-[#EDEDED] text-black pb-1"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="container max-w-[1600px] mx-auto bg-white grid gap-16 md:gap-0 pb-12">
			<div className="grid md:grid-cols-2 gap-1 md:pt-[100px]">
				<motion.div
					className=""
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2
						className=""
						style={{
							fontFamily: "Inter",
							fontSize: "56px",
							fontWeight: "400",
							lineHeight: "72px",
							textAlign: "left",
						}}>
						Our Mission
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<p
						style={{
							fontFamily: "Inter",
							fontSize: "24px",
							fontWeight: "400",
							lineHeight: "38.4px",
							textAlign: "left",
						}}>
						We build and launch AI powered platforms that create new
						opportunities for people and businesses to grow, earn, and innovate,
						turning ideas into impact, fast.
					</p>
				</motion.div>
			</div>
		</div>
	</motion.section>
);

const VisionSection = () => (
	<motion.section
		className="bg-[#EDEDED] text-black pb-1"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="container max-w-[1600px] mx-auto bg-white grid gap-16 md:gap-0 pb-12">
			<div className="grid md:grid-cols-2 gap-1 md:pt-[100px]">
				<motion.div
					className=""
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2
						className=""
						style={{
							fontFamily: "Inter",
							fontSize: "56px",
							fontWeight: "400",
							lineHeight: "72px",
							textAlign: "left",
						}}>
						Our Vision
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<p
						style={{
							fontFamily: "Inter",
							fontSize: "24px",
							fontWeight: "400",
							lineHeight: "38.4px",
							textAlign: "left",
						}}>
						To become the world’s leading AI venture studio by launching 10x
						impact products that empower individuals, teams, and businesses to
						achieve more, faster, smarter, and with purpose.
					</p>
				</motion.div>
			</div>
		</div>
	</motion.section>
);

// --- 6. Core Values Section ---
const values = [
	{
		title: "Think 10x, Not 10%",
		description:
			"We don’t aim for small gains—we build for exponential growth in productivity, revenue, and impact.",
		icon: <TrendingUp className="w-8 h-8 text-black" />,
	},
	{
		title: "AI with Purpose",
		description:
			"Every product we build solves real problems with intelligent, ethical, and scalable solutions.",
		icon: <CheckCircle className="w-8 h-8 text-black" />,
	},
	{
		title: "Move Fast, Build Smart",
		description:
			"We believe in rapid iteration, smart automation, and staying lean while shipping high-impact products.",
		icon: <Briefcase className="w-8 h-8 text-black" />,
	},
	{
		title: "Collaborate with Integrity",
		description:
			"We grow by building trust—across teams, users, and partners. Transparency and respect power our progress.",
		icon: <Users className="w-8 h-8 text-black" />,
	},
];

const ValuesSection = () => (
	<motion.section
		className=" text-black"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="container max-w-[1600px] mx-auto ">
			<div className="grid md:grid-cols-2 gap-1 pb-12 md:pt-[100px]">
				<motion.div
					className=""
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2
						className=""
						style={{
							fontFamily: "Inter",
							fontSize: "56px",
							fontWeight: "400",
							lineHeight: "72px",
							textAlign: "left",
						}}>
						Our Core Values
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<p
						style={{
							fontFamily: "Inter",
							fontSize: "24px",
							fontWeight: "400",
							lineHeight: "38.4px",
							textAlign: "left",
						}}>
						Our values reflect how we think, build, and grow, faster, smarter,
						and with purpose.
					</p>
				</motion.div>
			</div>

			<div className="bg-[#F2F2F2] p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
				{values.map((item, index) => (
					<motion.div
						key={index}
						className="bg-white p-8"
						variants={itemVariants}>
						<div className="mb-4">{item.icon}</div>
						<h3 className="font-sans text-lg font-semibold mb-4">
							{item.title}
						</h3>
						<p
							className="mt-2 text-gray-700"
							style={{
								fontFamily: "Inter",
								fontSize: "16px",
								fontWeight: "400",
								lineHeight: "24px",
								textAlign: "left",
							}}>
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	</motion.section>
);

// --- 7. Team Section ---
const teamRoles = [
	"MISSION COMMANDER",
	"TECH CAPTAIN",
	"LAUNCH NAVIGATOR",
	"SIGNAL STRATEGIST",
	"NEURAL ARCHITECT",
	"CONTENT ORACLE",
	"PROTOCOL SENTINEL",
	"ORBIT ANALYST",
	"INNOVATION ALCHEMIST",
];

const TeamSection = () => (
	<motion.section
		className="bg-white text-black md:pt-[100px]"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="container max-w-[1600px] mx-auto ">
			<motion.div
				className="text-center max-w-4xl mx-auto"
				variants={itemVariants}>
				<h2
					style={{
						fontFamily: "Inter",
						fontSize: "56px",
						fontWeight: "400",
						lineHeight: "72px",
						textAlign: "center",
					}}
					className="tracking-tighter">
					A Lean Team of Builders, Thinkers, and Visionaries
				</h2>
				<p
					style={{
						fontFamily: "Inter",
						fontSize: "18px",
						fontWeight: "400",
						lineHeight: "24.4px",
						textAlign: "center",
					}}
					className="mt-6 text-gray-800">
					We are a lean team of builders, thinkers, and visionaries. Our
					leadership combines expertise across AI, startups, product design, and
					growth strategy. We turn bold ideas into scalable ventures with speed,
					precision, and purpose.
				</p>
				<p
					style={{
						fontFamily: "Inter",
						fontSize: "18px",
						fontWeight: "400",
						lineHeight: "24.4px",
						textAlign: "center",
					}}
					className="mt-4  text-gray-800">
					Whether it’s engineering robust AI systems, crafting powerful user
					experiences, or validating product-market fit—we move as one.
				</p>
			</motion.div>
			<div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-1">
				{teamRoles.map((role, index) => (
					<motion.div
						key={index}
						className="bg-[#F2F2F2]  p-6 text-center"
						variants={itemVariants}>
						<h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-black">
							{role}
						</h3>
					</motion.div>
				))}
			</div>
		</div>
	</motion.section>
);

// --- 8. CTA Section ---
const CTASection = () => (
	<motion.section
		className="bg-[#F2F2F2] text-black py-16 sm:py-24 md:mt-[100px]"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<motion.h2
				style={{
					fontFamily: "Inter",
					fontSize: "48px",
					fontWeight: "600",
					letterSpacing: "-1.68px",
					lineHeight: "64px",
					textAlign: "center",
				}}
				// className="text-3xl md:text-5xl font-bold tracking-tighter"
				variants={itemVariants}>
				Join the AI Revolution
			</motion.h2>
			<motion.p
				style={{
					fontFamily: "Inter",
					fontSize: "18px",
					fontWeight: "400",
					lineHeight: "38.4px",
					textAlign: "center",
				}}
				className="mt-4  text-gray-800 max-w-2xl mx-auto"
				variants={itemVariants}>
				Be the first to know about new AI tools, product releases, job openings,
				and thought leadership from the 10xGalaxy team.
			</motion.p>
			<motion.div
				className="mt-10"
				variants={itemVariants}>
				<a
					style={{
						fontFamily: "Inter",
						fontSize: "24px",
						fontWeight: "400",
						lineHeight: "38.4px",
						textAlign: "center",
					}}
					href="#"
					className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
					Click here
				</a>
			</motion.div>
		</div>
	</motion.section>
);

// --- Main App Component ---
export default function About10x() {
	return (
		<div className="bg-white font-inter">
			<main>
				<HeroSection />
				<IntroSection /> {/* New section for the main intro text */}
				<StatsSection />
				<MissionSection />
				<VisionSection />
				<ValuesSection />
				{/* <TeamSection /> */}
				<CTASection />
			</main>
		</div>
	);
}
