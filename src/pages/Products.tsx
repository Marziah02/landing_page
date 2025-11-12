import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import storyMaster from "@/assets/StoryMaster_black.svg";
import photo360 from "@/assets/Photo360_black.svg";
import perfectcode from "@/assets/PerfectCode_black.svg";
import meetingpilot from "@/assets/MeetingPilot_black.svg";
import dialogsy from "@/assets/Dialogsy_icon_black.svg";

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
];

const Products = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 4;

	const totalPages = Math.ceil(brands.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentProducts = brands.slice(startIndex, endIndex);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
					<p className="text-muted-foreground text-lg max-w-2xl">
						Discover our suite of powerful tools and solutions designed to help
						you build, grow, and scale your digital presence.
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 gap-8"
					variants={container}
					initial="hidden"
					animate="show"
					key={currentPage}>
					{brands.map((product, index) => (
						<motion.div
							key={product.id}
							variants={item}>
							<Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border rounded-none h-[280px] flex flex-col">
								<div className="flex items-center justify-between mb-6">
									<div className="text-xs text-muted-foreground">
										{String(startIndex + index + 1).padStart(2, "0")}
									</div>
									<div className="text-sm font-bold text-foreground">
										{/* {product.price} */}
									</div>
								</div>
								<div className="mb-4">
									<div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
										{/* {product.category} */}
									</div>
									<h3 className="text-xl font-bold">{product.name}</h3>
								</div>
								<p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
									{product.description}
								</p>
								<motion.a
									href="#"
									className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}>
									View details
									<ArrowRight className="w-4 h-4" />
								</motion.a>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="mt-12 flex justify-center">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									onClick={() =>
										setCurrentPage((prev) => Math.max(prev - 1, 1))
									}
									className={
										currentPage === 1
											? "pointer-events-none opacity-50"
											: "cursor-pointer"
									}
								/>
							</PaginationItem>
							{[...Array(totalPages)].map((_, i) => (
								<PaginationItem key={i + 1}>
									<PaginationLink
										onClick={() => setCurrentPage(i + 1)}
										isActive={currentPage === i + 1}
										className="cursor-pointer">
										{i + 1}
									</PaginationLink>
								</PaginationItem>
							))}
							<PaginationItem>
								<PaginationNext
									onClick={() =>
										setCurrentPage((prev) => Math.min(prev + 1, totalPages))
									}
									className={
										currentPage === totalPages
											? "pointer-events-none opacity-50"
											: "cursor-pointer"
									}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</div>
		</section>
	);
};

export default Products;
