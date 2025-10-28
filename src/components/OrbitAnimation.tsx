import { motion } from "framer-motion";
import { Package, Code, Smartphone, Zap } from "lucide-react";
import heroImage from "@/assets/herobg.jpg";
const OrbitAnimation = () => {
	const icons = [
		{ Icon: Package, radius: 100, duration: 10, color: "hsl(var(--accent))" },
		{ Icon: Code, radius: 150, duration: 15, color: "hsl(var(--accent))" },
		{
			Icon: Smartphone,
			radius: 200,
			duration: 20,
			color: "hsl(var(--accent))",
		},
		{ Icon: Zap, radius: 250, duration: 25, color: "hsl(var(--accent))" },
	];

	return (
		<div
			style={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="w-full relative h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
			{/* Milky way background effect */}
			<div className="absolute inset-0 opacity-30">
				{[...Array(100)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-white"
						style={{
							width: Math.random() * 3 + 1 + "px",
							height: Math.random() * 3 + 1 + "px",
							top: Math.random() * 100 + "%",
							left: Math.random() * 100 + "%",
							opacity: Math.random() * 0.7 + 0.3,
							animation: `twinkle ${Math.random() * 3 + 2}s infinite ${
								Math.random() * 2
							}s`,
						}}
					/>
				))}
			</div>

			{/* Orbit rings */}
			{icons.map(({ radius }, index) => (
				<div
					key={index}
					className="absolute rounded-full border"
					style={{
						width: `${radius * 2}px`,
						height: `${radius * 2}px`,
						borderColor: "hsl(var(--accent) / 0.5)",
						opacity: 0.3,
						boxShadow: `inset 0 0 10px hsl(var(--accent) / 0.2)`,
					}}
				/>
			))}

			{/* Center spinner glow */}
			<motion.div
				className="absolute rounded-full"
				style={{
					width: "130px",
					height: "130px",
					background:
						"linear-gradient(180deg, rgba(17, 17, 17, 0) 45%, rgba(166, 97, 17, 0.5) 75%)",
					boxShadow: `
            inset 0 -0.2rem 0.40rem -0.22rem hsl(var(--accent)),
            inset 0 0 0 1rem #06080B,
            inset 0 -0.2rem 0.60rem 0.80rem hsl(var(--accent)),
            0 0.4rem 0.80rem -0.22rem hsl(var(--accent))
          `,
					borderTop: "1px solid #111",
					borderBottom: "1px solid hsl(var(--accent))",
				}}
				animate={{ rotate: 360 }}
				transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
			/>

			{/* Center text "Ollyo" */}
			<div className="relative z-10 text-center">
				<h2
					className="text-4xl font-bold"
					style={{
						color: "hsl(var(--accent))",
						textShadow: "0 0 20px hsl(var(--accent) / 0.5)",
					}}>
					10x
				</h2>
			</div>

			{/* Orbiting product icons */}
			{icons.map(({ Icon, radius, duration, color }, index) => {
				const startAngle = (index * 360) / icons.length;
				return (
					<motion.div
						key={index}
						className="absolute left-1/2 top-1/2"
						style={{
							width: 0,
							height: 0,
						}}
						animate={{
							rotate: [startAngle, startAngle + 360],
						}}
						transition={{
							duration: duration,
							repeat: Infinity,
							ease: "linear",
						}}>
						<div
							className="p-3 rounded-full backdrop-blur-sm absolute"
							style={{
								backgroundColor: "rgba(17, 17, 17, 0.8)",
								boxShadow: `0 0 20px ${color}40`,
								border: `1px solid ${color}40`,
								left: `${radius}px`,
								transform: "translate(-50%, -50%)",
							}}>
							<Icon
								size={24}
								style={{ color }}
							/>
						</div>
					</motion.div>
				);
			})}

			<style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
		</div>
	);
};

export default OrbitAnimation;
