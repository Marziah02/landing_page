import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blog1 from "@/assets/Blog_1.jpg";
import blog2 from "@/assets/Blog_2.jpg";
import blog3 from "@/assets/Blog_3.jpg";
import blog4 from "@/assets/Blog_4.jpg";
import blog5 from "@/assets/Blog_5.jpg";
import blog6 from "@/assets/Blog_6.jpg";
import blog7 from "@/assets/Blog_7.jpg";
import blog8 from "@/assets/Blog_8.jpg";
import blog9 from "@/assets/Blog_9.jpg";
import blogshero from "@/assets/blogshero.jpg";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { mockPosts } from "@/lib/blog-data"; // Adjust path to your data file

// --- Icon Components ---
const ArrowRight = ({ className }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

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

// --- Constants ---

const POSTS_PER_PAGE = 6;

// --- 2. Blog Hero Section ---
const BlogHeroSection = () => (
  <motion.section
    className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${blogshero})`, // filter: "blur(6px) brightness(0.7)",
        filter: "brightness(0.7)",
        transform: "scale(1.05)",
      }}
    ></div>
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tighter"
        variants={itemVariants}
      >
        Galaxy Notes
      </motion.h1>
      {/* <motion.p
        className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Our thoughts on AI, product, and building 10x ventures.
      </motion.p> */}
    </div>
  </motion.section>
);

// --- 3. Blog List Section ---
const BlogListSection = ({ onPostClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockPosts.length / POSTS_PER_PAGE);

  // Get posts for the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = mockPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Boundary check
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <motion.section
      className="bg-[#F2F2F2] text-black py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={currentPage} // Add key to force re-animation on page change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              onClick={() => onPostClick(post)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={post.imageUrl}
                  alt={`Featured image for ${post.title}`}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/F2F2F2/000000?text=Image+Error";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold bg-gradient-to-br from-[#22D2E0] to-[#85249F] bg-clip-text text-transparent uppercase tracking-wider mb-2">
                  {post.category}
                </p>
                <h3
                  className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:bg-gradient-to-br group-hover:from-[#22D2E0] group-hover:to-[#85249F]
             group-hover:bg-clip-text group-hover:text-transparent transition-colors"
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-black group-hover:translate-x-1 transition-transform">
                  Read Note
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white text-black border border-gray-200 hover:bg-gray-100 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Prev
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white text-black border border-gray-200 hover:bg-gray-100 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

// --- 4. Blog Post Page Component ---
const BlogPostPage = ({ post, onBackClick }) => (
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
      {/* <div className="absolute inset-0 bg-black opacity-60"></div>{" "} */}
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
      //   viewport={{ once: true, amount: 0.1 }}
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
                Back to all notes
              </button>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-foreground cursor-pointer transition-colors">
                  {/* <svg
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
								</svg> */}
                  <FaXTwitter />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-foreground hover:text-white cursor-pointer transition-colors">
                  {/* <svg
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg> */}
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

// --- Main App Component ---
export default function Blogs() {
  const [view, setView] = useState("list"); // 'list' or 'post'
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    // setSelectedPost(post);
    // setView("post");
    // window.scrollTo(0, 0);

    navigate(`/galaxy-notes/${post.slug}`);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
    setView("list");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white font-sans antialiased">
      {view === "list" && (
        <main>
          <BlogHeroSection />
          <BlogListSection onPostClick={handlePostClick} />
        </main>
      )}

      {view === "post" && (
        <BlogPostPage post={selectedPost} onBackClick={handleBackClick} />
      )}
    </div>
  );
}
