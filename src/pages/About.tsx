import { ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-4">About 10x</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                We transform web, innovate and future-proof software products,
                empowering customers to test and scale their experimenting
                digital landscape.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={teamImage}
                alt="Ollyo team collaborating"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="bg-foreground text-background p-12 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                We bring together a team of experts with the latest technologies
                to make it high-performance possible for the business.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At 10x, we are dedicated to pushing the boundaries of digital
              innovation. Our mission is to create cutting-edge software
              solutions that empower businesses to thrive in an ever-evolving
              digital landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a team of passionate developers, designers, and strategists,
              we combine creativity with technical excellence to deliver
              products that make a real difference.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
