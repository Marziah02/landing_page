import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.webp";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

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
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="max-w-[2000px] mx-auto bg-[#EDEDED]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-1 items-start">
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="mb-1 px-12 py-12 bg-[#F4F4F4]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "Inter",
                fontSize: "48px",
                fontWeight: "600",
                letterSpacing: "-1.68px",
                lineHeight: "64px",
                textAlign: "left",
              }}
            >
              An AI Venture Studio Launching the Future of AI One 10x Product at
              a Time
            </motion.h1>

            {/* Statistics Section */}
            <motion.div
              className="grid grid-col-5 gap-12 items-start bg-[#F4F4F4] px-12 py-[50px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "Inter",
              }}
            >
              <div>
                <h2 className="text-3xl font-bold">Numbers</h2>
              </div>

              <div className="md:col-span-4 grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="text-5xl font-bold mb-2">
                    <AnimatedCounter value={100} suffix="K+" />
                  </div>
                  <p className="text-muted-foreground">Subscribers</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-5xl font-bold mb-2">
                    <AnimatedCounter value={20} suffix="+" />
                  </div>
                  <p className="text-muted-foreground">AI Products</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="text-5xl font-bold mb-2">
                    <AnimatedCounter value={10} suffix="x" />
                  </div>
                  <p className="text-muted-foreground">Growth Mindset</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-5xl font-bold mb-2">
                    $<AnimatedCounter value={100} suffix="M+" />
                  </div>
                  <p className="text-muted-foreground">
                    Portfolio Valuation Target
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src={heroImage}
              alt="Modern workspace with professional working"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
