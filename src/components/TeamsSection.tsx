import {
	Code,
	Palette,
	Brain,
	Users,
	Sparkles,
	BarChart,
	Boxes,
	Headphones,
	Rocket,
	Shield,
	Compass,
	Wifi,
	Cpu,
	BookOpen,
	FlaskConical,
	Lock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import MissionCommander from "@/assets/MissionCommander.svg";
import TechCaptain from "@/assets/TechCaptain.svg";
import LaunchNavigator from "@/assets/LaunchNavigator.svg";
import SignalStrategist from "@/assets/SignalStrategist.svg";
import NeuralArchitect from "@/assets/NeuralArchitect.svg";
import ContentOracle from "@/assets/ContentOracle.svg";
import InnovationAlchemist from "@/assets/InnovationAlchemist.svg";
import ProtocolSentinel from "@/assets/ProtocolSentinel.svg";

const teams = [
	{
		id: 1,
		icon: MissionCommander,
		title: "Chief Executive Officer (CEO)",
		description:
			"Leads company vision, growth strategy, and strategic partnerships.",
	},
	{
		id: 2,
		icon: TechCaptain,
		title: "Chief Technology Officer (CTO)",
		description:
			"Oversees technology strategy, architecture, and technical innovation.",
	},
	{
		id: 3,
		icon: LaunchNavigator,
		title: "Head of Product & Innovation",
		description:
			"Drives product strategy, user experience, and roadmap execution.",
	},
	{
		id: 4,
		icon: SignalStrategist,
		title: "Head of Growth & Marketing",
		description: "Owns distribution, brand visibility, and GTM strategy.",
	},
	{
		id: 5,
		icon: NeuralArchitect,
		title: "AI & ML Architect",
		description:
			"Leads core AI research, model development, and intelligent system design.",
	},
	{
		id: 6,
		icon: ContentOracle,
		title: "Content & Brand Strategist",
		description: "Crafts storytelling, brand voice, and creative direction.",
	},
	{
		id: 7,
		icon: InnovationAlchemist,
		title: "R&D & Emerging Tech Lead",
		description:
			"Experiments with frontier technologies and rapid prototyping.",
	},
	{
		id: 8,
		icon: ProtocolSentinel,
		title: "Head of Security",
		description: "Ensures data security, privacy, and trust at scale.",
	},
];

const TeamsSection = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

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
							Meet the Team
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
							At 10x Galaxy, we’re a bold team of builders, innovators, and
							visionaries shaping the future of AI. Our expertise spans AI
							engineering, product design, AGI frameworks, growth strategy, and
							venture building. We move fast, think big, and build products that
							deliver 10x impact.
						</p>
					</motion.div>
				</div>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 border border-[#d3d3d3]"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}>
					{teams.map((team) => {
						const Icon = team.icon;
						return (
							<motion.div
								key={team.id}
								variants={item}>
								<div className="px-8 py-12 hover:shadow-lg transition-shadow  border border-[#d3d3d3]">
									<img
										src={Icon}
										alt="icon"
										className="w-8 h-8 mb-9 text-foreground"
									/>
									<h3 className="font-sans text-lg font-semibold mb-4 h-12">
										{team.title}
									</h3>
									<p
										className="h-20"
										style={{
											fontFamily: "Inter",
											fontSize: "16px",
											fontWeight: "400",
											lineHeight: "24px",
											textAlign: "left",
										}}>
										{team.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default TeamsSection;
