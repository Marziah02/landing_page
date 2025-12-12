import {
  ArrowRight,
  DollarSign,
  Package,
  Shell,
  TrendingUp,
  Earth,
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
    name: "StoryMaster AI™",
    description:
      "StoryMaster AI is an AI-driven platform designed to help users create, edit, and publish high-quality stories effortlessly.",
    logo: storyMaster,
    link: "/story-master-ai-coming-soon",
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
    id: "6",
    name: "More",
    description: "",
    logo: "See 10x Revolution",
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
      <span ref={ref} className="font-bold text-2xl sm:text-3xl text-white">
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
        style={{ backgroundImage: `url(${sky})`, backgroundSize: "cover" }}
      >
        <div className="flex justify-between items-center gap-1 h-full text-black  container mx-auto">
          <motion.div
            className="font-sans flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* <TrendingUp
							className="w-7 h-7 mb-1"
							color="#22D2E0"
						/> */}
            <svg className="w-7 h-7 mb-1">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D2E0" />
                  <stop offset="100%" stopColor="#85249F" />
                </linearGradient>
              </defs>
              <TrendingUp stroke="url(#grad)" />
            </svg>

            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedCounter value={100} suffix="K+" />
            </div>
            <p className="text-gray-300">Global Users</p>
          </motion.div>
          <motion.div
            className="font-sans flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <svg className="w-7 h-7 mb-1">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D2E0" />
                  <stop offset="100%" stopColor="#85249F" />
                </linearGradient>
              </defs>
              <Package stroke="url(#grad)" />
            </svg>
            {/* <Package className="w-7 h-7 mb-1 bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text" /> */}
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedCounter value={20} suffix="+" />
            </div>
            <p className="text-gray-300">AI & AGI Products</p>
          </motion.div>

          <motion.div
            className="font-sans flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {/* <Shell className="w-7 h-7 mb-1 bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text" /> */}
            <svg className="w-7 h-7 mb-1">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D2E0" />
                  <stop offset="100%" stopColor="#85249F" />
                </linearGradient>
              </defs>

              <Shell stroke="url(#grad)" />
            </svg>
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedCounter value={10} suffix="x" />
            </div>
            <p className="text-gray-300">Growth Mindset</p>
          </motion.div>
          <motion.div
            className="font-sans flex flex-col items-center justify-center "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <svg className="w-7 h-7 mb-1 ">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D2E0" />
                  <stop offset="100%" stopColor="#85249F" />
                </linearGradient>
              </defs>
              <Earth stroke="url(#grad)" />
            </svg>
            {/* <DollarSign className="w-7 h-7 mb-1 bg-gradient-to-r from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text" /> */}
            <div className="text-2xl sm:text-3xl font-bold mb-2 text-white ">
              {/* $ */}
              <AnimatedCounter
                value={50}
                // suffix="M+"
                suffix="+"
              />
            </div>
            <p className="text-gray-300">Builders in Orbit</p>
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
              Our AI Universe
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
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div key={brand.id} variants={item}>
              <div
                className={`px-12 py-6 hover:shadow-lg transition-shadow h-[277px] ${
                  brand.name === "More"
                    ? "bg-[#F2F2F2]  flex items-center justify-center group relative hover:cursor-pointer overflow-hidden isolate transition-all duration-500"
                    : "bg-[#F2F2F2] "
                } rounded-none flex flex-col`}
              >
                <div className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-500/30 opacity-0 group-hover:opacity-40 transition-all duration-1000 animate-spin [animation-duration:8000ms]"></div>
                <div className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-500/30 opacity-0 group-hover:opacity-50 transition-all duration-1000 delay-100 animate-spin [animation-duration:6000ms] [animation-direction:reverse]"></div>
                <div className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-sky-500/30 opacity-0 group-hover:opacity-60 transition-all duration-1000 delay-200 animate-spin [animation-duration:4000ms]"></div>
                <div className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-indigo-500/30 opacity-0 group-hover:opacity-70 transition-all duration-1000 delay-300 animate-spin [animation-duration:2000ms] [animation-direction:reverse]"></div>

                <div
                  className="mb-4"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "400",
                    // lineHeight: "64px",
                    textAlign: "left",
                    color: "#1B1921",
                  }}
                >
                  {brand.name !== "More" && String(index + 1).padStart(2, "0")}
                </div>
                <div
                  className={`flex items-center  gap-3 mb-3 ${
                    brand.name === "More" && "justify-center"
                  }`}
                >
                  <div
                    className={`${
                      brand.name !== "More" && "h-10"
                    } w-auto  text-black flex items-center justify-center text-sm font-bold`}
                  >
                    {/* {brand.logo} */}
                    {brand.name === "More" ? (
                      <>
                        <Link
                          to="/products"
                          className="z-10 font-sans text-2xl font-semibold text-center cursor-pointer bg-gradient-to-br from-[#22D2E0] to-[#85249F] text-transparent bg-clip-text hover:scale-105 transition-all "
                        >
                          {brand.logo}
                          {/* <Link to="#"> {brand.logo}</Link> */}
                        </Link>
                      </>
                    ) : (
                      <>
                        <img
                          className="h-10 w-auto"
                          src={brand.logo}
                          alt="icon"
                        />
                        <h1 className="font-sans ml-3 text-2xl">
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
                    }}
                  >
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
                    transition={{ duration: 0.2 }}
                  >
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
