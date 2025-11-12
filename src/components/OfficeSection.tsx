import officeImage from "@/assets/Heading.jpg";
import { motion } from "framer-motion";
// import office from "@/assets/breedge.png";

const OfficeSection = () => {
	return (
		<section className="pb-12 md:pt-[100px] max-w-[1600px]  mx-auto bg-background">
			<div className="container mx-auto">
				<motion.img
					src={officeImage}
					alt="office reception"
					className="w-full h-auto shadow-lg object-cover"
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
