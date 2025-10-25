import officeImage from "@/assets/office.png";
import { motion } from "framer-motion";

const OfficeSection = () => {
  return (
    <section className="py-12 max-w-[2000px] mx-auto bg-background">
      <div className="container mx-auto">
        <motion.img
          src={officeImage}
          alt="office reception"
          className="w-full h-auto shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
};

export default OfficeSection;
