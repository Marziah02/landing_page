import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import earth from "@/assets/galaxyvdo.mp4";

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
			className="relative h-screen w-full overflow-hidden">
			{/* Animated Background */}
			{/* <motion.div style={{ y }} className="absolute inset-0 hero-gradient" /> */}

			{/* Mars Planet Image with Parallax */}
			<motion.div
				style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
				className="absolute inset-0">
				<div className="absolute inset-0  z-10" />
				<video
					autoPlay
					// loop
					muted
					playsInline
					className="w-full h-full object-cover "
					style={{ animationDelay: "4.8s" }} // slightly before loop end
				>
					<source
						src={earth}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>

				{/* <div className="absolute top-0 left-0 w-full h-full bg-black/.5 z-0"></div> */}
			</motion.div>

			{/* Content */}
			<motion.div
				style={{ opacity }}
				className="relative z-10 h-full flex items-center">
				<div className="container mx-auto px-6">
					<div className="max-w-2xl">
						<motion.div
							className="h-full md:flex md:flex-col md:justify-between"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}>
							<motion.div className="mb-1 p-12 md:p-0">
								<motion.h1
									className="md:ml-12 md:mr-4 xl:mr-9 2xl:mr-14 md:my-12 text-white"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									style={{
										fontFamily: "Inter",
										fontSize: "48px",
										fontWeight: "600",
										letterSpacing: "-1.68px",
										lineHeight: "64px",
										textAlign: "left",
									}}>
									{/* Creating The Future of Software Technology */}
									AI Venture Studio Powering 10x Innovation
								</motion.h1>
							</motion.div>

							{/* Statistics Section h1*/}
							<motion.div
								className="px-12 py-2 mb-1 text-white"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								style={{
									fontFamily: "Inter",
									fontSize: "30px",
									fontWeight: "400",
									lineHeight: "72px",
									textAlign: "left",
								}}>
								<div>
									<h2>Numbers</h2>
								</div>
							</motion.div>
							{/* Statistics Section number*/}
							<motion.div
								className="break-words"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								style={{
									fontFamily: "Inter",
								}}>
								{/* <div>
                          <h2 className="text-3xl font-bold">Numbers</h2>
                        </div> */}

								<div className="grid grid-cols-2 gap-1  ">
									<div className=" px-12 pt-6 pb-12">
										{" "}
										<motion.div
											className="mb-6 font-sans text-white"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.5 }}>
											<div className="text-2xl sm:text-3xl font-bold mb-2">
												<AnimatedCounter
													value={100}
													suffix="K+"
												/>
												{/* <span className="bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text">
                                  +
                                </span> */}
											</div>
											<p className="text-muted-foreground">Subscribers</p>
										</motion.div>
										<motion.div
											className="font-sans text-white"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.6 }}>
											<div className="text-2xl sm:text-3xl font-bold mb-2">
												<AnimatedCounter
													value={20}
													suffix="+"
												/>
											</div>
											<p className="text-muted-foreground">AI Products</p>
										</motion.div>
									</div>
									<div className="px-12 pt-6 pb-12">
										{" "}
										<motion.div
											className="mb-6 font-sans text-white"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.7 }}>
											<div className="text-2xl sm:text-3xl font-bold mb-2">
												<AnimatedCounter
													value={10}
													suffix="x"
												/>
											</div>
											<p className="text-muted-foreground">Growth Mindset</p>
										</motion.div>
										<motion.div
											className="font-sans text-white"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.8 }}>
											<div className="text-2xl sm:text-3xl font-bold mb-2">
												$
												<AnimatedCounter
													value={100}
													suffix="M+"
												/>
											</div>
											<p className="text-muted-foreground">
												Portfolio Valuation Target
											</p>
										</motion.div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
