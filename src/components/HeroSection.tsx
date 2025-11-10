import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Package,
	TrendingUp,
	Shell,
	DollarSign,
} from "lucide-react";
import { useRef, useEffect } from "react";
import herosection from "@/assets/HeroSection.jpeg";
import { Link } from "react-router-dom";

// Video will be loaded from public folder or external URL
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
				ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
				//ref.current.textContent = Math.floor(latest).toLocaleString();
			}
		});
	}, [springValue, suffix]);

	return (
		<span
			ref={ref}
			className="font-bold text-2xl sm:text-3xl">
			{Math.floor(springValue.get()).toLocaleString()}
			{suffix}
		</span>
	);
};

const HeroSection = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<section
			ref={ref}
			className="relative min-h-screen max-w-[1600px] mx-auto bg-black flex justify-start items-center overflow-hidden">
			{/* Optional: subtle blurred fill behind to avoid empty sides */}
			{/* <div className="absolute inset-0 -z-10">
        <img src={herosection} alt="" className="w-auto h-auto object-cover" />
      </div> */}
			{/* Main image (no cropping) */}
			<motion.img
				src={herosection}
				alt=""
				className="absolute w-full h-full object-cover"
				style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
			/>
			{/* <div className="absolute inset-0 bg-black opacity-50"></div>{" "} */}
			{/* Overlay */}
			{/* <motion.div className="relative mb-1 md:h-[408px] 2xl:h-[495px]  md:p-0"> */}
			{/* bg-gradient-to-r from-[#22D2E0] to-[#85249F] bg-clip-text text-transparent */}
			<motion.div className="relative mb-1 md:h-screen  md:p-0 w-full flex justify-center ">
				<motion.h1
					className="m-2 md:mx-12 md:mt-12 text-white"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					style={{
						fontFamily: "Inter",
						fontSize: "58px",
						fontWeight: "800",
						letterSpacing: "-1.68px",
						lineHeight: "74px",
						textAlign: "left",
					}}>
					AI Venture Studio
				</motion.h1>
				{/* <motion.p
					className="m-2 md:mx-12  text-gray-400 w-[500px]"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					style={{
						fontFamily: "Inter",
						fontSize: "20px",
						fontWeight: "400",
						letterSpacing: "-1.68px",
						lineHeight: "34px",
						textAlign: "left",
					}}>
					We build, launch, and scale AI SaaS products - from idea to global
					traction.
				</motion.p>
				<motion.div
					className="w-[200px] m-2 md:mx-12 bg-[#22D2E0] text-black hover:bg-[#85249F] rounded-lg py-2 flex justify-center items-center cursor-pointer gap-2 hover:scale-105 transition-transform"
					style={{
						fontFamily: "Inter",
						fontSize: "16px",
						fontWeight: "400",
						lineHeight: "19.2px",
						textAlign: "center",
					}}>
					<Link to="#">Explore Our Product</Link>
					<ArrowRight className="w-4 h-4" />
				</motion.div> */}
			</motion.div>
			{/* <motion.div
				className="absolute bottom-0 w-full h-[130px] bg-white/90 
             
             [border-image:linear-gradient(to_right,#22D2E0,#85249F)_1] 
             border-b border-transparent">
				<div className="flex justify-between items-center gap-1 h-full text-black mx-2 md:mx-12">
					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}>
						<TrendingUp className="w-7 h-7 mb-1 text-[#22D2E0]" />
						<div className="text-2xl sm:text-3xl font-bold mb-2">
							<AnimatedCounter
								value={100}
								suffix="K+"
							/>
						</div>
						<p className="text-muted-foreground">Subscribers</p>
					</motion.div>
					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}>
						<Package className="w-7 h-7 mb-1 text-[#22D2E0]" />
						<div className="text-2xl sm:text-3xl font-bold mb-2">
							<AnimatedCounter
								value={20}
								suffix="+"
							/>
						</div>
						<p className="text-muted-foreground">AI Products</p>
					</motion.div>

					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}>
						<Shell className="w-7 h-7 mb-1 text-[#22D2E0]" />

						<div className="text-2xl sm:text-3xl font-bold mb-2">
							<AnimatedCounter
								value={10}
								suffix="x"
							/>
						</div>
						<p className="text-muted-foreground">Growth Mindset</p>
					</motion.div>
					<motion.div
						className="font-sans flex flex-col items-center justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}>
						<DollarSign className="w-7 h-7 mb-1 text-[#22D2E0]" />
						<div className="text-2xl sm:text-3xl font-bold mb-2">
							$
							<AnimatedCounter
								value={100}
								suffix="M+"
							/>
						</div>
						<p className="text-muted-foreground">Portfolio Valuation Target</p>
					</motion.div>
				</div>
			</motion.div> */}
		</section>
	);
};

export default HeroSection;
