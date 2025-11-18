import { ArrowRight, Link } from "lucide-react";
// import teamImage from "@/assets/team-collaboration.jpg";
import office from "@/assets/breedge.png";
import { motion } from "framer-motion";

const AboutSection = () => {
	return (
		<section className="max-w-[1600px] mx-auto bg-background">
			<div className="container mx-auto">
				<div className="grid md:grid-cols-2 gap-1 pb-12 md:pt-[100px]">
					<motion.div
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
							Meet 10x Galaxy
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
							We are a UK-based AI venture studio. Our mission is to build,
							launch, and scale world-class AI products that drive 10x impact
							and unlock growth for people and business.
						</p>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative w-full h-[764px] overflow-hidden">
					<img
						src={office}
						alt="Ollyo Team"
						className="w-full h-full object-cover"
					/>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="absolute bottom-0 right-0 bg-black text-background p-8 max-w-md">
						<p
							className="mb-12"
							style={{
								fontFamily: "Inter",
								fontSize: "24px",
								fontWeight: "400",
								lineHeight: "34px",
								textAlign: "left",
								color: "#fff",
							}}>
							A futuristic team with a 10× mindset building AI & AGI products at
							breakthrough speed.
						</p>
						<Link
							to="/about"
							className="font-sans inline-flex items-center gap-2 text-base font-normal text-accent hover:text-accent/80 transition-colors ">
							About us
							<ArrowRight className="w-4 h-4" />
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
