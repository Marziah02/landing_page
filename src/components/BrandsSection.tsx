import {
	ArrowRight,
	DollarSign,
	Package,
	Shell,
	TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import storyMaster from "@/assets/StoryMaster_black.svg";
import photo360 from "@/assets/Photo360_black.svg";
import perfectcode from "@/assets/PerfectCode_black.svg";
import meetingpilot from "@/assets/MeetingPilot_black.svg";
import dialogsy from "@/assets/Dialogsy_icon_black.svg";
import sky from "@/assets/sky.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const brands = [
	{
		id: 1,
		name: "StoryMaster AI",
		description:
			"StoryMaster.ai is an AI-driven platform designed to help users create, edit, and publish high-quality stories effortlessly.",
		logo: storyMaster,
		link: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
	},
	{
		id: 2,
		name: "PerfectCode AI",
		description:
			"PerfectCode.ai is an AI-powered coding assistant built to help developers write, review, and optimize code with precision.",
		logo: perfectcode,
		link: "https://perfectcode.ai/dashboard",
	},
	{
		id: 3,
		name: "Dialogsy AI",
		description:
			"Dialogsy.ai is an AI-powered platform that helps developers create, manage, and optimize browser extensions effortlessly.",
		logo: dialogsy,
		link: "https://dialogsy.ai/",
	},
	{
		id: 4,
		name: "Photo360 AI",
		description:
			"Photo360.ai is an AI-powered platform that transforms images into immersive 360-degree experiences.",
		logo: photo360,
		link: "https://photo360.ai/",
	},

	{
		id: 5,
		name: "MeetingPilot AI",
		description:
			"MeetingPilot.ai is an AI-powered meeting assistant that helps users schedule, manage, and optimize their meetings.",
		logo: meetingpilot,
		link: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
	},

	{
		id: "6",
		name: "More",
		description: "",
		logo: "Join AI Revolution",
	},
];

const BrandsSection = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	const AnimatedCounter = ({
		value,
		suffix = "",
	}: {
		value: number;
		suffix?: string;
	}) => {
		const ref = useRef<HTMLSpanElement>(null);
		const motionValue = useMotionValue(0);
		const springValue = useSpring(motionValue, { duration: 2000 });
		const isInView = useInView(ref, { once: true });

		useEffect(() => {
			if (isInView) {
				motionValue.set(value);
			}
		}, [isInView, motionValue, value]);

		useEffect(() => {
			springValue.on("change", (latest) => {
				if (ref.current) {
					ref.current.textContent =
						Math.floor(latest).toLocaleString() + suffix;
					//ref.current.textContent = Math.floor(latest).toLocaleString();
				}
			});
		}, [springValue, suffix]);

		return (
			<span
				ref={ref}
				className="font-bold text-2xl sm:text-3xl text-white">
				{Math.floor(springValue.get()).toLocaleString()}
				{suffix}
			</span>
		);
	};

	return (
		<section className="max-w-[1600px] mx-auto bg-background">
			<motion.div
				className="w-full h-[130px] 
             
             [border-image:linear-gradient(to_right,#22D2E0,#85249F)_1] 
             border-b border-transparent"
				style={{ backgroundImage: `url(${sky})`, backgroundSize: "cover" }}>
				<div className="flex justify-between items-center gap-1 h-full text-black mx-2 md:mx-12">
					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}>
						{/* <TrendingUp
							className="w-7 h-7 mb-1"
							color="#22D2E0"
						/> */}
						<svg className="w-7 h-7 mb-1">
							<defs>
								<linearGradient id="grad">
									<stop
										offset="0%"
										stopColor="#22D2E0"
									/>
									<stop
										offset="100%"
										stopColor="#85249F"
									/>
								</linearGradient>
							</defs>
							<TrendingUp color="url(#grad)" />
						</svg>

						<div className="text-2xl sm:text-3xl font-bold mb-2">
							<AnimatedCounter
								value={100}
								suffix="K+"
							/>
						</div>
						<p className="text-gray-300">Subscribers</p>
					</motion.div>
					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}>
						<svg className="w-7 h-7 mb-1">
							<defs>
								<linearGradient id="grad">
									<stop
										offset="0%"
										stopColor="#22D2E0"
									/>
									<stop
										offset="100%"
										stopColor="#85249F"
									/>
								</linearGradient>
							</defs>
							<Package color="url(#grad)" />
						</svg>
						{/* <Package className="w-7 h-7 mb-1 bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text" /> */}
						<div className="text-2xl sm:text-3xl font-bold mb-2">
							<AnimatedCounter
								value={20}
								suffix="+"
							/>
						</div>
						<p className="text-gray-300">AI Products</p>
					</motion.div>

					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}>
						{/* <Shell className="w-7 h-7 mb-1 bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text" /> */}
						<svg className="w-7 h-7 mb-1">
							<defs>
								<linearGradient id="grad">
									<stop
										offset="0%"
										stopColor="#22D2E0"
									/>
									<stop
										offset="100%"
										stopColor="#85249F"
									/>
								</linearGradient>
							</defs>
							<Shell color="url(#grad)" />
						</svg>
						<div className="text-2xl sm:text-3xl font-bold mb-2">
							<AnimatedCounter
								value={10}
								suffix="x"
							/>
						</div>
						<p className="text-gray-300">Growth Mindset</p>
					</motion.div>
					<motion.div
						className="font-sans flex flex-col items-center justify-center "
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}>
						<svg className="w-7 h-7 mb-1 ">
							<defs>
								<linearGradient id="grad">
									<stop
										offset="0%"
										stopColor="#22D2E0"
									/>
									<stop
										offset="100%"
										stopColor="#85249F"
									/>
								</linearGradient>
							</defs>
							<DollarSign color="url(#grad)" />
						</svg>
						{/* <DollarSign className="w-7 h-7 mb-1 bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text" /> */}
						<div className="text-2xl sm:text-3xl font-bold mb-2 text-white ">
							$
							<AnimatedCounter
								value={100}
								suffix="M+"
							/>
						</div>
						<p className="text-gray-300">Portfolio Valuation Target</p>
					</motion.div>
				</div>
			</motion.div>
			<div className="container mx-auto">
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
							Our AI Universe
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
							Our AI Universe spans a powerful suite of intelligent products,
							including AI code assistants, creative intelligence platforms, AGI
							frameworks, and next-generation no-code solutions. Built to
							accelerate innovation, this ecosystem empowers people and
							businesses to scale at 10x speed.
						</p>
					</motion.div>
				</div>

				<motion.div
					className="grid md:grid-cols-2 gap-1"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}>
					{brands.map((brand, index) => (
						<motion.div
							key={brand.id}
							variants={item}>
							<div
								className={`px-12 py-6 hover:shadow-lg transition-shadow ${
									brand.name === "More"
										? "bg-[#F2F2F2] h-[277px] flex items-center justify-center"
										: "bg-[#F2F2F2] "
								} rounded-none flex flex-col`}>
								<div
									className="mb-4"
									style={{
										fontFamily: "Inter",
										fontSize: "14px",
										fontWeight: "400",
										// lineHeight: "64px",
										textAlign: "left",
										color: "#1B1921",
									}}>
									{brand.name !== "More" && String(index + 1).padStart(2, "0")}
								</div>
								<div
									className={`flex items-center  gap-3 mb-3 ${
										brand.name === "More" && "justify-center"
									}`}>
									<div
										className={`${
											brand.name !== "More" && "h-10"
										} w-auto  text-black flex items-center justify-center text-sm font-bold`}>
										{/* {brand.logo} */}
										{brand.name === "More" ? (
											<>
												<h3 className="font-sans text-2xl font-semibold text-center cursor-pointer hover:text-[#22D2E0]">
													<Link to="/products"> {brand.logo}</Link>
												</h3>
											</>
										) : (
											<>
												<img
													className="h-10 w-auto"
													src={brand.logo}
													alt="icon"
												/>
												<h1 className="font-[Poppins] ml-3 text-2xl">
													{brand.name}
												</h1>
											</>
										)}
									</div>
									{/* <h3 className="text-xl font-bold">{brand.name}</h3> */}
								</div>
								{brand.name !== "More" && (
									<p
										className="md:h-28 2xl:h-24 mb-2 flex-grow"
										style={{
											fontFamily: "Inter",
											fontSize: "18px",
											fontWeight: "400",
											lineHeight: "32px",
											textAlign: "left",
											color: "#1b1921",
										}}>
										{brand.description}
									</p>
								)}

								{brand.name !== "More" && (
									<motion.a
										href={brand.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}>
										Learn more
										<ArrowRight className="w-4 h-4" />
									</motion.a>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default BrandsSection;
