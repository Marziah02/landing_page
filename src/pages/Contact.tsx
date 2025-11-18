import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	FaXTwitter,
	FaLinkedinIn,
	FaYoutube,
	FaWhatsapp,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa6";
// import contucthero from "@/assets/contucthero.jpg";
import contucthero from "@/assets/contract1.png";

const links = [
	{ icon: <FaXTwitter />, url: "https://twitter.com" },
	{ icon: <FaLinkedinIn />, url: "https://linkedin.com" },
	{ icon: <FaYoutube />, url: "https://youtube.com" },
	// { icon: <FaWhatsapp />, url: "https://wa.me/880" },
	{ icon: <FaFacebook />, url: "https://www.facebook.com/" },
	{ icon: <FaInstagram />, url: "https://instagram.com" },
];
// --- Icon Components ---
const Mail = ({ className }) => (
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
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
		<polyline points="22,6 12,13 2,6" />
	</svg>
);

const Phone = ({ className }) => (
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
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
	</svg>
);

const MapPin = ({ className }) => (
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
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
		<circle
			cx="12"
			cy="10"
			r="3"
		/>
	</svg>
);

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

// --- 2. Contact Hero Section ---
const ContactHeroSection = () => (
	<motion.section
		className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
		initial="hidden"
		animate="visible"
		variants={containerVariants}>
		<div
			className="absolute inset-0 bg-cover bg-center"
			style={{
				backgroundImage: `url(${contucthero})`, // Blurred office/desk image
				// filter: "blur(8px)",
				// transform: "scale(1.05)",
			}}></div>
		<div className="absolute inset-0 bg-black opacity-60"></div> Overlay
		<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<motion.h1
				style={{
					fontFamily: "Inter",
					fontSize: "48px",
					fontWeight: "600",
					letterSpacing: "-1.68px",
					lineHeight: "64px",
					textAlign: "center",
				}}
				// className="text-5xl md:text-7xl font-bold tracking-tighter"
				variants={itemVariants}>
				Contact Us
			</motion.h1>
			{/* <motion.p
				style={{
					fontFamily: "Inter",
					fontSize: "24px",
					fontWeight: "400",
					lineHeight: "38.4px",
					textAlign: "center",
				}}
				// className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
				variants={itemVariants}>
				Let's connect and make something extraordinary.
			</motion.p> */}
		</div>
	</motion.section>
);

// --- 3. Contact Form Section ---
const ContactFormSection = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formState);
		// You could show a success message
	};

	return (
		<motion.section
			className="bg-white text-black py-16 sm:py-24 font-sans"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={containerVariants}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Re-ordered grid: form on left for lg+, info on right */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left Column (Now Form on large screens) */}
					<motion.div
						variants={itemVariants}
						className="bg-[#F2F2F2] p-8 md:p-12 rounded-xl lg:order-1 h-screen shadow-lg font-sans" // Form on left
					>
						<form
							onSubmit={handleSubmit}
							className="space-y-6 font-sans">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-semibold text-black">
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									required
									value={formState.name}
									onChange={handleInputChange}
									className="mt-2 block w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-semibold text-black">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									required
									value={formState.email}
									onChange={handleInputChange}
									className="mt-2 block w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
								/>
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-semibold text-black">
									Contacts (Phone)
								</label>
								<input
									type="tel"
									name="phone"
									id="phone"
									value={formState.phone}
									onChange={handleInputChange}
									className="mt-2 block w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-semibold text-black">
									Message
								</label>
								<textarea
									name="message"
									id="message"
									rows="5"
									required
									value={formState.message}
									onChange={handleInputChange}
									className="mt-2 block w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
							</div>
							<div>
								<button
									type="submit"
									className="w-full bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
									Send Message
								</button>
							</div>
						</form>
					</motion.div>

					{/* Right Column (Now Info on large screens) */}
					<motion.div
						variants={itemVariants}
						className="lg:order-2 bg-[#F2F2F2] p-8 md:p-12 rounded-xl h-screen shadow-lg font-sans">
						{" "}
						{/* Info on right */}
						<h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tighter text-black">
							We'd Love to Hear from You
						</h2>
						<p className="font-sans mt-4 text-base text-gray-700 leading-relaxed">
							Whether you're an investor, partner, early adopter, or just
							curious about our work—we're open to collaboration, conversation,
							and bold ideas.
						</p>
						<div className="mt-12 space-y-6">
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
									<MapPin className="w-6 h-6 text-black" />
								</div>
								<div>
									<h3 className="font-sans text-xl font-semibold">
										Our Address
									</h3>
									<p className="font-sans text-gray-700">
										61 Bridge Street, Kington,
										<br />
										Herefordshire, HR5 3DJ,
										<br />
										United Kingdom.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
									<Mail className="w-6 h-6 text-black" />
								</div>
								<div>
									<h3 className="font-sans text-xl font-semibold">Email Us</h3>
									<a
										href="mailto:info@10xgalaxy.com"
										className="text-gray-700 hover:text-black hover:underline font-sans">
										info@10xgalaxy.com
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
									<Phone className="w-6 h-6 text-black" />
								</div>
								<div>
									<h3 className="text-xl font-semibold font-sans">Call Us</h3>
									<a
										href="tel:+447535796307"
										className="text-gray-700 hover:text-black hover:underline font-sans">
										+447535796307
									</a>
								</div>
							</div>
						</div>
						<div className="flex justify-end items-end mt-[62px]">
							<div className="flex flex-col items-start gap-2 text-black">
								<p className="text-sm font-semibold font-sans">Find us on</p>
								<div className="flex gap-1">
									{links.map((item, i) => (
										<a
											key={i}
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-neutral-900 hover:bg-neutral-800 w-10 h-10 flex items-center justify-center rounded-md transition-all border border-neutral-700 hover:border-neutral-500 text-2xl text-white">
											{item.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

// --- 4. CTA Section ---
const JoinAiRevolutionSection = () => (
	<motion.section
		className="bg-[#F2F2F2] text-black py-16 sm:py-24 font-sans"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={containerVariants}>
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-sans">
			<motion.h2
				className="text-4xl md:text-5xl font-bold tracking-tighter"
				variants={itemVariants}>
				Join the AI Revolution
			</motion.h2>
			<motion.p
				className="mt-4 text-lg max-w-2xl mx-auto text-gray-700"
				variants={itemVariants}>
				Be the first to know about new AI tools, product releases, job openings,
				and thought leadership from the 10xGalaxy team.
			</motion.p>
			<motion.div
				className="mt-10"
				variants={itemVariants}>
				<a
					href="/careers"
					className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center">
					Click here
					<ArrowRight className="w-5 h-5 ml-2" />
				</a>
			</motion.div>
		</div>
	</motion.section>
);

// --- Main App Component ---
export default function Contact() {
	return (
		<div className="bg-white font-inter">
			<main>
				<ContactHeroSection />
				<ContactFormSection />
				<JoinAiRevolutionSection />
			</main>
		</div>
	);
}
