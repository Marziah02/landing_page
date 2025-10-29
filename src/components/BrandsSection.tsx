import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import storyMaster from "@/assets/storymaster_1.svg";
import photo360 from "@/assets/photo360_1.svg";
import perfectcode from "@/assets/perfectcode_1.svg";
import meetingpilot from "@/assets/meetingpilot.svg";
import dialogsy from "@/assets/dialogsy_1.svg";

const brands = [
  {
    id: 1,
    name: "StoryMaster.ai",
    description:
      "StoryMaster.ai is an AI-driven platform designed to help users create, edit, and publish high-quality stories effortlessly.",
    logo: storyMaster,
  },
  {
    id: 2,
    name: "PerfectCode.ai",
    description:
      "PerfectCode.ai is an AI-powered coding assistant built to help developers write, review, and optimize code with precision.",
    logo: perfectcode,
  },
  {
    id: 3,
    name: "Dialogsy.ai",
    description:
      "Dialogsy.ai is an AI-powered platform that helps developers create, manage, and optimize browser extensions effortlessly.",
    logo: dialogsy,
  },
  {
    id: 4,
    name: "Photo360.ai",
    description:
      "Photo360.ai is an AI-powered platform that transforms images into immersive 360-degree experiences.",
    logo: photo360,
  },

  {
    id: 5,
    name: "MeetingPilot.ai",
    description:
      "MeetingPilot.ai is an AI-powered meeting assistant that helps users schedule, manage, and optimize their meetings.",
    logo: meetingpilot,
  },

  {
    id: "6",
    name: "More",
    description: "",
    logo: "Join AI Revolution",
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

  return (
    <section className="max-w-[1600px] mx-auto bg-background">
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
                className={`px-12 py-6 hover:shadow-lg transition-shadow ${
                  brand.name === "More" ? "bg-[#F2F2F2] " : "bg-[#F2F2F2] "
                } rounded-none flex flex-col`}
              >
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
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-auto  text-black flex items-center justify-center text-sm font-bold">
                    {/* {brand.logo} */}
                    {brand.name === "More" ? (
                      <>
                        <h3 className="font-sans text-2xl font-semibold text-center">
                          {brand.logo}
                        </h3>
                      </>
                    ) : (
                      <>
                        <img
                          className="h-10 w-auto"
                          src={brand.logo}
                          alt="icon"
                        />
                      </>
                    )}
                  </div>
                  {/* <h3 className="text-xl font-bold">{brand.name}</h3> */}
                </div>
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
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
