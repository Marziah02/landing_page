import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const products = [
  {
    id: 1,
    name: "Tutor LMS",
    category: "Learning Management",
    description:
      "A comprehensive learning management system for WordPress that enables you to create and sell courses online with ease.",
    price: "$149",
  },
  {
    id: 2,
    name: "WP Crowdfunding",
    category: "Fundraising Platform",
    description:
      "Create your own crowdfunding platform with WordPress. Accept donations and manage campaigns effortlessly.",
    price: "$99",
  },
  {
    id: 3,
    name: "WP Megamenu",
    category: "Navigation Solution",
    description:
      "Build beautiful mega menus for your WordPress site with drag-and-drop functionality and responsive design.",
    price: "$29",
  },
  {
    id: 4,
    name: "Qubely",
    category: "Page Builder",
    description:
      "A full-fledged Gutenberg block toolkit with advanced styling options and pre-built sections for WordPress.",
    price: "$79",
  },
  {
    id: 5,
    name: "IconFont",
    category: "Icon Library",
    description:
      "Access thousands of premium icons for your projects. Unlimited downloads with a single subscription.",
    price: "Free",
  },
  {
    id: 6,
    name: "Droip",
    category: "VoIP Solution",
    description:
      "Cloud-based VoIP solution for businesses. Make and receive calls from anywhere with crystal clear quality.",
    price: "$49/mo",
  },
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover our suite of powerful tools and solutions designed to help
            you build, grow, and scale your digital presence.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          key={currentPage}
        >
          {currentProducts.map((product, index) => (
            <motion.div key={product.id} variants={item}>
              <Card className="p-8 hover:shadow-lg transition-shadow bg-card border-border rounded-none h-[280px] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs text-muted-foreground">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-sm font-bold text-foreground">
                    {product.price}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {product.description}
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View details
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Products;
