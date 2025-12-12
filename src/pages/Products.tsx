import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Puzzle,
  Rocket,
} from "lucide-react";
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
import monalisa from "@/assets/monalisa.png";
import herosection from "@/assets/producthero.png";

const brands = [
  {
    id: 1,
    name: "StoryMaster AI™",
    description:
      "StoryMaster AI is an AI-driven platform designed to help users create, edit, and publish high-quality stories effortlessly.",
    logo: storyMaster,
    link: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
  },
  {
    id: 2,
    name: "PerfectCode AI",
    description:
      "PerfectCode AI is an AI-powered coding assistant built to help developers write, review, and optimize code with precision.",
    logo: perfectcode,
    link: "https://perfectcode.ai/dashboard",
  },
  {
    id: 3,
    name: "Dialogsy AI",
    description:
      "Dialogsy AI is an AI-powered platform that helps businesses create, launch, and manage chatbots - no code needed.",
    logo: dialogsy,
    link: "https://dialogsy.ai/",
  },
  {
    id: 4,
    name: "Photo360 AI",
    description:
      "Photo360 AI is an AI-powered platform that transforms images into immersive 360-degree experiences.",
    logo: photo360,
    link: "https://photo360.ai/",
  },

  {
    id: 5,
    name: "MeetingPilot AI",
    description:
      "MeetingPilot AI is an AI-powered meeting assistant that helps users schedule, manage, and optimize their meetings.",
    logo: meetingpilot,
    link: "/meeting-pilot-ai-coming-soon",
  },
  {
    id: 6,
    name: "MonaLisaX AI",
    description:
      "MonaLisaX AI turns any photo into stunning digital artwork using advanced generative models.",
    logo: monalisa,
    // icon: <ExternalLink className="w-10 h-10" />,
    link: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
  },
  {
    id: 7,
    name: "SalesBeeCRM AI",
    description:
      "SalesBeeCRM AI is an AI-driven CRM designed to automate tracking, engagement, and sales workflows.",
    icon: <Briefcase className="w-10 h-10" />,
    link: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
  },
  {
    id: 8,
    name: "ExtensionLab AI",
    description:
      "ExtensionLab AI offers AI-powered browser extensions that simplify workflows and boost productivity.",
    icon: <Puzzle className="w-10 h-10" />,
    link: "/extension-lab-ai-comming-soon",
  },
  {
    id: 9,
    name: "FunnelBee",
    description:
      "FunnelBee is an AI-powered GTM and funnel automation engine that helps teams launch, distribute, and scale products faster.",
    icon: <Rocket className="w-10 h-10" />,
    link: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
  },
];

// Framer Motion Variants for consistent animation
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
    <section className=" bg-background">
      <motion.section
        className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${herosection})`,
            // filter: "blur(2px)",
            transform: "scale(1.05)", // Slightly scale to hide blur edges
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="tracking-tighter"
            variants={itemVariants}
            style={{
              fontFamily: "Inter",
              fontSize: "48px",
              fontWeight: "600",
              letterSpacing: "-1.68px",
              lineHeight: "64px",
              textAlign: "center",
            }}
          >
            Our Products
          </motion.h1>
        </div>
      </motion.section>
      <div className="container mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-1 pb-12">
            <motion.div
              className=""
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className=""
                style={{
                  fontFamily: "Inter",
                  fontSize: "56px",
                  fontWeight: "400",
                  lineHeight: "72px",
                  textAlign: "left",
                }}
              >
                Our Products
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "38.4px",
                  textAlign: "left",
                }}
              >
                Discover the AI platforms we are building to help creators,
                teams, and businesses grow smarter, faster, and at 10× scale.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          key={currentPage}
        >
          {/* {currentProducts.map((product, index) => ( */}
          {brands.map((product, index) => (
            <motion.div key={product.id} variants={item}>
              <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border rounded-none h-[280px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs text-muted-foreground">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-sm font-bold text-foreground">
                    {/* {product.price} */}
                  </div>
                </div>
                <div className="mb-4 w-auto  text-black flex items-center justify-start text-sm font-bold">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {/* {product.category} */}
                  </div>

                  {product.logo ? (
                    <>
                      {" "}
                      <img
                        className="h-10 w-auto"
                        src={product.logo}
                        alt="icon"
                      />
                    </>
                  ) : (
                    product.icon
                  )}
                  <h1 className="font-sans ml-3 text-2xl">{product.name}</h1>
                  {/* <h3 className="text-xl font-bold">{product.name}</h3> */}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {product.description}
                </p>
                <motion.a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View details
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* temporary off */}
        {/* <div className="mt-12 flex justify-center">
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
				</div> */}
      </div>
    </section>
  );
};

export default Products;
