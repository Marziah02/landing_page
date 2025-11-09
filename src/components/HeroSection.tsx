import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import earth from "@/assets/galaxyvdo.mp4";
import herosection from "@/assets/bgtest.jpg";

// Video will be loaded from public folder or external URL
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
        //ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue, suffix]);

  return (
    <span ref={ref} className="font-bold text-2xl sm:text-3xl">
      {Math.floor(springValue.get()).toLocaleString()}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Optional: subtle blurred fill behind to avoid empty sides */}
      {/* <div className="absolute inset-0 -z-10">
        <img src={herosection} alt="" className="w-auto h-auto object-cover" />
      </div> */}

      {/* Main image (no cropping) */}
      <motion.img
        src={herosection}
        alt=""
        className="w-full h-full object-cover"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
      />
    </section>
  );
};

export default HeroSection;
