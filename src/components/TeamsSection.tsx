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

const teams = [
  {
    id: 1,
    icon: Rocket,
    title: "Mission Commander",
    description:
      "Leading the crew with vision and precision to achieve every mission goal.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Tech Captain",
    description:
      "Guiding the engineering fleet through complex technical challenges.",
  },
  {
    id: 3,
    icon: Compass,
    title: "Launch Navigator",
    description: "Charting the path from concept to successful deployment.",
  },
  {
    id: 4,
    icon: Wifi,
    title: "Signal Strategist",
    description:
      "Optimizing communication and data intelligence across systems.",
  },
  {
    id: 5,
    icon: Cpu,
    title: "Neural Architect",
    description: "Designing intelligent frameworks where logic meets learning.",
  },
  {
    id: 6,
    icon: BookOpen,
    title: "Content Oracle",
    description: "Crafting clear, compelling narratives that power engagement.",
  },
  {
    id: 7,
    icon: FlaskConical,
    title: "Innovation Alchemist",
    description: "Transforming bold ideas into breakthrough realities.",
  },
  {
    id: 8,
    icon: Lock,
    title: "Protocol Sentinel",
    description:
      "Guarding the integrity, security, and compliance of every digital interaction.",
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
              Meet the Team
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
          viewport={{ once: true }}
        >
          {teams.map((team) => {
            const Icon = team.icon;
            return (
              <motion.div key={team.id} variants={item}>
                <div className="px-8 py-12 hover:shadow-lg transition-shadow  border border-[#d3d3d3]">
                  <Icon className="w-8 h-8 mb-9 text-foreground" />
                  <h3 className="font-sans text-lg font-semibold mb-4">
                    {team.title}
                  </h3>
                  <p
                    className="h-20 "
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "left",
                    }}
                  >
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
