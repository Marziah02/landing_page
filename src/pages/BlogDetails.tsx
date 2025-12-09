import { useParams, Navigate, useNavigate } from "react-router-dom";
import { mockPosts } from "@/lib/blog-data"; // Adjust path to your data file
import Layout from "../components/Layout"; // Optional: if you want Layout here or in App.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ArrowLeft = ({ className }) => (
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
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

// --- Animation Variants ---
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
const BlogDetails = () => {
  // 1. Get the slug from the URL (defined as :slug in App.tsx)
  const { slug } = useParams();
  const navigate = useNavigate();

  // 2. Find the blog post that matches this slug
  const post = mockPosts.find((b) => b.slug === slug);

  // 3. Handle 404 - If no post found, redirect to 404 page or show message
  if (!post) {
    return <Navigate to="/not-found" replace />;
  }

  const onBackClick = () => {
    navigate("/galaxy-notes");
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Post Header */}
      <motion.section
        className="bg-black text-white pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url(${post.imageUrl})`,
            //   filter: "blur(20px)",
          }}
        ></div>
        {/* Overlay */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <button
              onClick={onBackClick}
              className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Notes
            </button>
          </motion.div>

          <motion.span
            className="inline-block px-3 py-1 rounded text-xs font-bold bg-blue-600 text-white uppercase tracking-wider mb-6"
            variants={itemVariants}
          >
            {post.category}
          </motion.span>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
            variants={itemVariants}
          >
            {post.title}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center space-x-4 text-gray-300 text-sm md:text-base"
            variants={itemVariants}
          >
            <span className="font-medium text-white">{post.author}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>5 min read</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Post Content */}
      <motion.section
        className="relative -mt-10 z-20 pb-24"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#22D2E0] to-[#85249F] rounded-2xl shadow-2xl p-0.5"
            variants={itemVariants}
          >
            <div className="bg-white  rounded-2xl">
              {" "}
              {/* Article Content */}
              <div
                className="p-8 md:p-12 prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-a:text-blue-600 prose-blockquote:border-l-black prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-li:text-gray-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              {/* Footer / Share / Back */}
              <div className="rounded-b-xl mt-16 p-8 md:p-12 border-t border-gray-100 flex justify-between items-center bg-gradient-to-br from-[#22D2E0] to-[#85249F]">
                <button
                  onClick={onBackClick}
                  className="text-white hover:text-gray-300 font-semibold flex items-center transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Notes
                </button>
                <div className="flex space-x-4">
                  {/* Social Placeholders */}
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-foreground cursor-pointer transition-colors">
                    <FaXTwitter />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-foreground hover:text-white cursor-pointer transition-colors">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default BlogDetails;
