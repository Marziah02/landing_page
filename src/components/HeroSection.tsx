import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.webp";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import OrbitAnimation from "./OrbitAnimation";

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
				// ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
				ref.current.textContent = Math.floor(latest).toLocaleString();
			}
		});
	}, [springValue, suffix]);

	return (
		<span
			ref={ref}
			className="font-bold text-2xl sm:text-3xl">
			{Math.floor(springValue.get()).toLocaleString()}
			{/* {suffix} */}
		</span>
	);
};

const HeroSection = () => {
	return (
		<section className="max-w-[1600px] mx-auto bg-[#EDEDED] overflow-hidden ">
			{/* <div className="container"> */}
			<div className="px-6 h-full">
				{/* <div className="md:flex gap-1 items-start justify-between"> */}
				<div className="h-full grid md:grid-cols-2 gap-1 items-start justify-between">
					<motion.div
						className="h-full md:flex md:flex-col md:justify-between"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<motion.div className="mb-1 bg-[#F4F4F4]  md:h-[408px] 2xl:h-[495px] p-12 md:p-0">
							<motion.h1
								className="md:ml-12 md:mr-9 2xl:mr-14 md:my-12 "
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
							className="bg-[#F4F4F4] px-12 py-2 mb-1"
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
								<div className="bg-[#F4F4F4] px-12 pt-6 pb-12">
									{" "}
									<motion.div
										className="mb-6 font-sans"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.5 }}>
										<div className="text-2xl sm:text-3xl font-bold mb-2">
											<AnimatedCounter
												value={100}
												suffix="K+"
											/>
											K
											<span className="bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text">
												+
											</span>
										</div>
										<p className="text-muted-foreground">Subscribers</p>
									</motion.div>
									<motion.div
										className="font-sans"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.6 }}>
										<div className="text-2xl sm:text-3xl font-bold mb-2">
											<AnimatedCounter
												value={20}
												suffix="+"
											/>
											<span className="bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text">
												+
											</span>
										</div>
										<p className="text-muted-foreground">AI Products</p>
									</motion.div>
								</div>
								<div className="bg-[#F4F4F4] px-12 pt-6 pb-12">
									{" "}
									<motion.div
										className="mb-6 font-sans"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.7 }}>
										<div className="text-2xl sm:text-3xl font-bold mb-2">
											<AnimatedCounter
												value={10}
												suffix="x"
											/>
											<span className="bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text">
												x
											</span>
										</div>
										<p className="text-muted-foreground">Growth Mindset</p>
									</motion.div>
									<motion.div
										className="font-sans"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.8 }}>
										<div className="text-2xl sm:text-3xl font-bold mb-2">
											$
											<AnimatedCounter
												value={100}
												suffix="M+"
											/>
											<span>
												M
												<span className="bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text">
													+
												</span>
											</span>
										</div>
										<p className="text-muted-foreground">
											Portfolio Valuation Target
										</p>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="w-full md:h-full h-screen">
						{/* <img
              src={heroImage}
              alt="Modern workspace with professional working"
              className="w-full h-auto object-cover"
            /> */}
						<OrbitAnimation />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
