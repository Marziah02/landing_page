import { motion } from "framer-motion";
import { Package, Code, Smartphone, Zap } from "lucide-react";
// import heroImage from "@/assets/herobg.jpg";
import heroImage from "@/assets/galaxylight.png";
import logo from "@/assets/10x_logo.svg";
import storymaster_color from "@/assets/storymaster_color.svg";
import meetingpilot_color from "@/assets/meetingpilot_color.svg";
import dialogsy_icon_color from "@/assets/dialogsy_icon_color.svg";
import perfectcode_color from "@/assets/perfectcode_color.svg";
import photo360_color from "@/assets/photo360_color.svg";
const OrbitAnimation = () => {
	const icons = [
		// { Icon: Package, radius: 100, duration: 10, color: "hsl(var(--accent))" },
		// { Icon: Code, radius: 150, duration: 15, color: "hsl(var(--accent))" },
		// {
		//   Icon: Smartphone,
		//   radius: 200,
		//   duration: 20,
		//   color: "hsl(var(--accent))",
		// },
		// { Icon: Zap, radius: 250, duration: 25, color: "hsl(var(--accent))" },
		{ img: storymaster_color, radius: 130, duration: 20, color: "#fff" },
		{ img: meetingpilot_color, radius: 180, duration: 25, color: "#fff" },
		{
			img: dialogsy_icon_color,
			radius: 230,
			duration: 30,
			color: "#fff",
		},
		{ img: perfectcode_color, radius: 280, duration: 35, color: "#fff" },
		{ img: photo360_color, radius: 330, duration: 40, color: "#fff" },
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
					//   style={{
					//     width: `${radius * 2}px`,
					//     height: `${radius * 2}px`,
					//     borderColor: "hsl(var(--accent) / 0.5)",
					//     opacity: 0.3,
					//     boxShadow: `inset 0 0 10px hsl(var(--accent) / 0.2)`,
					//   }}
					//           style={{
					//             width: `${radius * 2}px`,
					//             height: `${radius * 2}px`,
					//             border: "2px solid transparent",
					//             borderColor: "linear-gradient(135deg, #22D2E0, #85249F) 1",
					//             boxShadow: `
					//     0 0 25px 5px rgba(34,210,224,0.4),
					//     0 0 45px 10px rgba(133,36,159,0.3),
					//     inset 0 0 15px rgba(133,36,159,0.4)
					//   `,
					//             borderRadius: "100%",
					//             background: "transparent",
					//             opacity: 0.9,
					//           }}
					style={{
						width: `${radius * 2}px`,
						height: `${radius * 2}px`,
						border: "2px solid transparent",
						borderColor: "linear-gradient(to right, #22D2E0, #85249F) 1",
						boxShadow: `
              0 0 10px rgba(34,210,224,0.6),
              0 0 20px rgba(133,36,159,0.5)
            `,
						borderRadius: "100%",
						background: "transparent",
					}}
				/>
			))}

			{/* Center spinner glow */}
			<motion.div
				className="absolute rounded-full"
				// style={{
				//   width: "130px",
				//   height: "130px",
				//   background:
				//     "linear-gradient(180deg, rgba(17, 17, 17, 0) 45%, rgba(166, 97, 17, 0.5) 75%)",
				//   boxShadow: `
				//     inset 0 -0.2rem 0.40rem -0.22rem hsl(var(--accent)),
				//     inset 0 0 0 1rem #06080B,
				//     inset 0 -0.2rem 0.60rem 0.80rem hsl(var(--accent)),
				//     0 0.4rem 0.80rem -0.22rem hsl(var(--accent))
				//   `,
				//   borderTop: "1px solid #111",
				//   borderBottom: "1px solid hsl(var(--accent))",
				// }}
				style={{
					width: "160px",
					height: "160px",
					background:
						"linear-gradient(180deg, rgba(255, 255, 255, 0.3) 35%, rgba(255, 255, 255, 0.1) 80%)",
					boxShadow: `
  inset 0 -0.3rem 0.6rem -0.3rem rgba(255, 255, 255, 0.9),  
  inset 0 0 0 1.2rem rgba(255, 255, 255, 0.1), 
  inset 0 -0.3rem 0.8rem 1rem rgba(255, 255, 255, 1),  
  0 0.6rem 1rem 0 rgba(255, 255, 255, 1),  
  0 0 2rem 0.3rem rgba(133, 36, 159, 0.5), 
  0 0 2.4rem 0.6rem rgba(34, 210, 224, 0.4)  
`,
					borderTop: "1px solid rgba(255, 255, 255, 0.5)",
					borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
				}}
				animate={{ rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
			/>

			{/* Center text "Ollyo" */}
			<div className="relative z-10 text-center">
				{/* <h2
          className="text-4xl font-bold"
          style={{
            color: "hsl(var(--accent))",
            textShadow: "0 0 20px hsl(var(--accent) / 0.5)",
          }}
        >
          10x
        </h2> */}
				<img
					src={logo}
					alt="10x Logo"
					className="h-10 w-auto"
				/>
			</div>

			{/* Orbiting product icons */}
			{icons.map(({ img, radius, duration, color }, index) => {
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
							className="h-10 w-10 p-1 rounded-full backdrop-blur-sm absolute flex justify-center items-center"
							style={{
								// backgroundColor: "rgba(17, 17, 17, 0.8)",
								backgroundColor: "#fff",
								boxShadow: `0 0 20px ${color}40`,
								border: `1px solid ${color}40`,
								left: `${radius}px`,
								transform: "translate(-50%, -50%)",
								alignItems: "center",
							}}>
							{/* <Icon
								size={24}
								style={{ color }}
							/> */}
							<img
								src={img}
								alt="Icon"
								className="h-6 w-6 bg-white "
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
