import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
// import careerhero from "@/assets/careerhero.jpg";
import careerhero from "@/assets/careerhero2.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// --- Icon Components (using SVG for single-file compatibility) ---

const CheckCircle = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Briefcase = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const HeartHandshake = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96c.82-.82 2.13.82 2.94 0v0a2.17 2.17 0 0 1 0 3.08L12 5Z" />
  </svg>
);

const Zap = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Users = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BookOpen = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Framer Motion Variants for consistent animation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // Using cubic bezier values instead of string
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
      duration: 0.8, // Increased duration
      ease: "easeOut", // Added ease
    },
  },
};

// --- 2. Hero Section ---
const HeroSection = () => (
  <section
    className="relative py-24 sm:py-32 lg:py-40 bg-cover bg-center"
    style={{
      backgroundImage: `url(${careerhero})`, // Blurred office image
    }}
  >
    <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay */}
    <motion.div
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="tracking-tighter leading-tight uppercase"
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
        Join Our Cossmic Journey
      </motion.h1>
      {/* <motion.p
				className=" text-white text-center"
				variants={itemVariants}
				style={{
					fontFamily: "Inter",
					fontSize: "20px",
					fontWeight: "400",
					lineHeight: "28.4px",
					textAlign: "center",
					fontStyle: "italic",
				}}>
				Innovate. Collaborate. Explore.
			</motion.p> */}
      <motion.div
        className="mt-10"
        variants={itemVariants}
        style={{
          fontFamily: "Inter",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "38.4px",
          textAlign: "center",
        }}
      >
        {/* <a
          href="#"
          className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          See Openings
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

// --- 3. Benefits Section ---
const benefits = [
  {
    title: "Excellent Culture & Growth Environment",
    icon: <Users className="w-8 h-8 text-black" />,
  },
  {
    title: "Flexible Work Options / Hybrid Environment",
    icon: <Briefcase className="w-8 h-8 text-black" />,
  },
  {
    title: "Meals, Coffee & Snacks",
    icon: <CheckCircle className="w-8 h-8 text-black" />,
  },
  {
    title: "Festival Bonuses / Annual Retreats",
    icon: <HeartHandshake className="w-8 h-8 text-black" />,
  },
  {
    title: "Health & Wellness Programs",
    icon: <Zap className="w-8 h-8 text-black" />,
  },
  {
    title: "Learning & Upskilling Allowances",
    icon: <BookOpen className="w-8 h-8 text-black" />,
  },
];

const BenefitsSection = () => (
  <motion.section
    className="bg-white text-black"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="max-w-[1600px] mx-auto bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-1 pb-12 pt-10 md:pt-[100px]">
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
              Perks & Benefits
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
              We invest in our team’s success and well-being. Here are just a
              few ways we support you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[#F2F2F2] p-8 transition-transform hover:scale-105"
              variants={itemVariants}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="font-sans text-lg font-semibold">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

// --- 4. Company Values Section ---
const values = [
  "Excellence & Innovation",
  "Empathy & Respect",
  "Integrity & Accountability",
  "Teamwork & Collaboration",
  "Growth & Learning",
  "Adaptability & Agility",
];

const ValuesSection = () => (
  <motion.section
    className=" text-black"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="max-w-[1600px] mx-auto bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-1 pb-12 md:pt-[100px] pt-10">
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
              Our Values
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
              These principles guide our work, our collaboration, and our
              commitment to building the future.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 shadow-sm bg-[#F2F2F2]"
              variants={itemVariants}
            >
              <h3 className="font-sans text-xl font-semibold text-center">
                {value}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

// --- 5. Current Openings Section ---
// const jobOpenings = [
//   {
//     title: "Software Engineer (Backend)",
//     department: "Engineering",
//     type: "Onsite / Hybrid",
//   },
//   {
//     title: "Product Designer",
//     department: "Design",
//     type: "Hybrid",
//   },
//   {
//     title: "AI Research Engineer",
//     department: "Research & Development",
//     type: "Onsite",
//   },
//   {
//     title: "Marketing Specialist",
//     department: "Marketing",
//     type: "Remote",
//   },
// ];

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    type: "Onsite / Hybrid",
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Hybrid",
  },
  {
    title: "Product Manager",
    department: "Product Management",
    type: "Remote / Hybrid",
  },
];

const OpeningsSection = () => (
  <motion.section
    id="openings"
    className="bg-white text-black"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    {/*  <div className="max-w-[1600px] mx-auto bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-1 pb-12 md:pt-[100px]"> */}
    <div className="max-w-[1600px] mx-auto bg-background container pb-12 md:pt-[100px] pt-10">
      <motion.div className="text-center" variants={itemVariants}>
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "56px",
            fontWeight: "400",
            lineHeight: "72px",
            textAlign: "center",
          }}
          className="tracking-tighter"
        >
          Current Openings
        </h2>
        <p
          className="mt-4 text-gray-800"
          style={{
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "400",
            lineHeight: "38.4px",
            textAlign: "center",
          }}
        >
          We’re looking for talented people to join our mission.
        </p>
      </motion.div>
      <motion.div
        className="mt-16 max-w-4xl mx-auto border border-[#F2F2F2] rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <ul className="divide-y divide-[#F2F2F2]">
          {jobOpenings.map((job, index) => (
            <motion.li
              key={index}
              className="p-6 hover:bg-[#F2F2F2]/50 transition-colors"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-sans text-xl font-semibold">
                    {job.title}
                  </h3>
                  <p className="font-sans mt-1 text-gray-700">
                    {job.department} &middot; {job.type}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:hello@10xgalaxy.com?subject=Job Application - ${job.title}&body=Hi, I’d like to apply for the ${job.title} position. Please find my resume attached.`}
                    className="font-sans bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </motion.section>
);

// --- 6. FAQs Section ---
const faqsList = [
  {
    question: "How to apply?",
    answer:
      'Find the role you’re interested in under "Current Openings" and click the "Apply" button. You will be redirected to our application portal to submit your resume and cover letter.',
  },
  {
    question: "What are the steps involved?",
    answer:
      "Our typical process includes an initial application review, a brief phone screen with HR, one or two technical/role-specific interviews, and a final chat with the team lead. We keep you informed at every step.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "The timeline can vary depending on the role and applicant volume, but we strive to move quickly. On average, the process takes about 2-4 weeks from application to offer.",
  },
  {
    question: "What should I prepare for the interview?",
    answer:
      "Be prepared to discuss your past experiences in detail, showcase your portfolio or past work (if applicable), and ask thoughtful questions about the role, the team, and 10x Galaxy.",
  },
];

const FaqItem = ({ key, faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      //   className="border-b border-[#F2F2F2] bg-white p-6"
      className="pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <span className="font-sans text-lg font-semibold">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-10">
          <p className="text-gray-700 font-sans">{faq.answer}</p>
        </div>
      )} */}

      <div
        key={key}
        className="faq-item bg-white p-6  border border-slate-200 rounded-lg transition-all duration-300"
      >
        <button
          onClick={() => toggleFAQ(key)}
          className="w-full flex justify-between items-center text-left font-semibold text-lg cursor-pointer text-gray-900"
        >
          {faq.question}

          {openIndex === key ? (
            <FaChevronUp className="text-gray-600 transition-transform duration-300" />
          ) : (
            <FaChevronDown className="text-gray-600 transition-transform duration-300" />
          )}
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            openIndex === key ? "max-h-40 mt-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FaqSection = () => (
  <motion.section
    className="bg-[#F2F2F2] text-black py-16 sm:py-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "56px",
            fontWeight: "400",
            lineHeight: "72px",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-12 ">
          {faqsList.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// --- Main App Component ---
export default function Careers() {
  return (
    <div className="bg-white font-inter">
      <main>
        <HeroSection />
        <BenefitsSection />
        <ValuesSection />
        <OpeningsSection />
        <FaqSection />
      </main>
    </div>
  );
}
