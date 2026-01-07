import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Globe,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Newspaper,
  Layers,
  Image as ImageIcon,
  MessageSquare,
  BookOpen,
  Mic,
  Briefcase,
  Puzzle,
  Rocket,
  Check,
  X as CloseIcon,
  Copy,
  MapPin,
  Phone,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import presshero from "@/assets/pressher.png";
import storyMaster from "@/assets/StoryMaster_black.svg";
import photo360 from "@/assets/Photo360_black.svg";
import perfectcode from "@/assets/PerfectCode_black.svg";
import meetingpilot from "@/assets/MeetingPilot_black.svg";
import dialogsy from "@/assets/Dialogsy_icon_black.svg";
import logo from "@/assets/10X_Logo_color.svg";
import contactpress from "@/assets/contactpress.jpeg";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

// brand assets list-----------------

// --- Constants & Data ---

const BRAND_COLORS = [
  { name: "Mint", hex: "#CCEFF1", text: "black" },
  { name: "Turquoise", hex: "#0BC1C0", text: "black", isPrimary: true },
  { name: "Dark Teal", hex: "#10627B", text: "white" },
  { name: "Peach", hex: "#FFE1D6", text: "black" },
  { name: "Orange", hex: "#FFAF45", text: "black" },
  { name: "Dark Orange", hex: "#FF7557", text: "white" },
  { name: "Light Blue", hex: "#C0DAFF", text: "black" },
  { name: "Blue", hex: "#0E6BEC", text: "white" },
  { name: "Dark Blue", hex: "#0E1E93", text: "white" },
  { name: "Light Purple", hex: "#E8DDFF", text: "black" },
  { name: "Purple", hex: "#7856FF", text: "white" },
  { name: "Dark Purple", hex: "#30006D", text: "white" },
];

const LOGO_DO_NOTS = [
  {
    title: "Don't stretch or squeeze",
    description: "Always maintain aspect ratio.",
    visualClass: "scale-y-50",
    type: "transform",
    image: "/brand/dont/Don-t-stretch-or-squeeze.jpg",
  },
  {
    title: "Do not rotate",
    description: "Keep the logo horizontal.",
    visualClass: "rotate-45",
    type: "transform",
    image: "/brand/dont/Do-not-rotate.jpg",
  },
  {
    title: "Don't use busy backgrounds",
    description: "Ensure high visibility.",
    visualClass: "bg-pattern",
    type: "bg",
    image: "/brand/dont/Don-t-use-against-low-contrast.jpg",
  },
  // {
  // 	title: "Don't use low contrast",
  // 	description: "Avoid colors that blend in.",
  // 	visualClass: "opacity-30",
  // 	type: "opacity",
  // },
];

// --- Helper: Download single file ---
const downloadFile = (url, filename) => {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    });
};

// --- Components ---

const ColorCard = ({ color }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
      <div
        className="h-32 w-full transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
      />
      <div className="flex flex-col p-4 bg-white">
        <span className="font-semibold text-slate-800">{color.name}</span>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono text-sm text-slate-500 uppercase">
            {color.hex}
          </span>
          <button
            onClick={copyToClipboard}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            title="Copy Hex"
          >
            {copied ? (
              <Check size={14} className="text-green-500" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
        {color.isPrimary && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-bold text-teal-600 shadow-sm">
            Primary
          </span>
        )}
      </div>
    </div>
  );
};

const SectionHeading = ({ title, description }) => (
  <div className="mb-10">
    <h2
      style={{
        fontFamily: "Inter",
        fontSize: "38px",
        fontWeight: "600",
        letterSpacing: "-1.68px",
        lineHeight: "64px",
        textAlign: "left",
      }}
      className=" text-black"
    >
      {title}
    </h2>
    {description && (
      <p className="mt-2 text-justify text-slate-500 leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const LogoPreview = ({ variant = "full", className = "", imageUrl }) => {
  // Simple SVG representation of a brand logo similar to the style
  return <img src={imageUrl} alt="Brand Logo" />;
};

const LogoPreview2 = ({ variant, className = "", imageUrl }) => {
  // Simple SVG representation of a brand logo similar to the style
  return (
    <img
      src={imageUrl}
      alt="Brand Logo"
      className={` ${variant === "full" ? "w-20" : ""}`}
    />
  );
};

const LogoCard = ({ title, variant, imageUrl, imageDownloadUrl }) => (
  <div className="flex flex-col border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-8 flex  items-center justify-center  bg-slate-50/50 border border-slate-100 border-dashed">
      <LogoPreview variant={variant} imageUrl={imageUrl} />
    </div>
    <div className="flex items-center justify-between">
      {/* <h3 className="text-lg font-semibold text-slate-900">{title}</h3> */}
      <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
        Download <ArrowRight className="w-5" />
      </h3>
      <button
        onClick={() =>
          downloadFile(imageDownloadUrl, `${imageDownloadUrl.split("/").pop()}`)
        }
        className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
      >
        <Download size={16} />
        SVG
      </button>
    </div>
  </div>
);

const LogoCardWord = ({ title, variant, imageUrl, imageDownloadUrl }) => (
  <div className="flex flex-col border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md h-full">
    <div
      className={`mb-8 flex  items-center justify-center  border border-slate-100 border-dashed ${
        title === "Dark Mode Version"
          ? "bg-black h-52 md:h-full "
          : "bg-slate-50/50 "
      }`}
    >
      <LogoPreview2 variant={variant} imageUrl={imageUrl} />
    </div>
    <div className="flex items-center justify-center border-t border-slate-100">
      {/* <h3 className="text-lg font-semibold text-slate-900">{title}</h3> */}
      <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2 pt-4">
        {title}
      </h3>
    </div>
  </div>
);

// brand assets list-----------------
const links = [
  { icon: <FaXTwitter />, url: "https://twitter.com" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  { icon: <FaYoutube />, url: "https://youtube.com" },
  // { icon: <FaWhatsapp />, url: "https://wa.me/880" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
];

const Press = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- ANIMATION VARIANTS ---
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
  // --------------------------

  // --- DOWNLOAD FUNCTIONALITY ---
  // const handleDownload = (type) => {
  //   let content = "";
  //   let filename = "";
  //   let mimeType = "text/plain";

  //   switch (type) {
  //     case "logo":
  //       content = "/10X_Logo_color.svg";
  //       filename = "10x-galaxy-logo.svg";
  //       mimeType = "image/svg+xml";
  //       break;
  //     case "colors":
  //       // Creates a JSON file with color codes
  //       content = JSON.stringify(
  //         {
  //           primary: "#FFFFFF",
  //           secondary: "#000000",
  //           accent_gradient_start: "#22D2E0",
  //           accent_gradient_end: "#85249F",
  //           gray_light: "#F2F2F2",
  //           gray_dark: "#F8F9FA",
  //         },
  //         null,
  //         2
  //       );
  //       filename = "10x-brand-colors.json";
  //       mimeType = "application/json";
  //       break;
  //     case "typography":
  //       // Creates a text file for typography info
  //       content = `10x Galaxy Brand Fonts\n\nHeadlines: Inter\nBody: Inter\n\nGoogle Fonts Links:\n- https://fonts.google.com/specimen/Inter`;
  //       filename = "10x-typography.txt";
  //       break;
  //     case "kit":
  //     default:
  //       // Creates a dummy text file representing the full kit
  //       content = `10x Galaxy Media Kit\n\nThis is a placeholder file for the full media kit.`;
  //       filename = "10x-media-kit.txt";
  //       break;
  //   }

  //   const blob = new Blob([content], { type: mimeType });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = filename;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(url);
  // };

  // --- Main Exported Function ---
  const handleDownload = (type) => {
    switch (type) {
      case "logo":
        handleDownloadLogos();
        break;
      case "colors":
        downloadJsonColors();
        break;
      case "typography":
        downloadTypography();
        break;
      case "kit":
        handleDownloadKit();
        break;
      default:
        console.error("Unknown download type:", type);
    }
  };

  // --- Helper: Download single file ---
  // const downloadFile = (url, filename) => {
  //   fetch(url)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       const link = document.createElement("a");
  //       link.href = URL.createObjectURL(blob);
  //       link.download = filename;
  //       link.click();
  //       URL.revokeObjectURL(link.href);
  //     });
  // };

  const files = [
    {
      url: "/brand/clearspace.jpg",
      name: "clearspace.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Black.jpg",
      name: "10xGalaxy_Logo_Outline_Black.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Black.svg",
      name: "10xGalaxy_Logo_Outline_Black.svg",
    },
    {
      url: "/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Gradient.jpg",
      name: "10xGalaxy_Logo_Outline_Gradient.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Gradient.svg",
      name: "10xGalaxy_Logo_Outline_Gradient.svg",
    }, // example icon
    {
      url: "/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_White.jpg",
      name: "10xGalaxy_Logo_Outline_White.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Black.jpg",
      name: "10xGalaxy_Logo_Primary_Black.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Black.svg",
      name: "10xGalaxy_Logo_Primary_Black.svg",
    },
    {
      url: "/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Gradient.jpg",
      name: "10xGalaxy_Logo_Primary_Gradient.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Gradient.svg",
      name: "10xGalaxy_Logo_Primary_Gradient.svg",
    },
    {
      url: "/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_White.jpg",
      name: "10xGalaxy_Logo_Primary_White.jpg",
    },
    {
      url: "/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_White.svg",
      name: "10xGalaxy_Logo_Primary_White.svg",
    },
    {
      url: "/brand/dont/Do-not-rotate.jpg",
      name: "Do-not-rotate.jpg",
    },
    {
      url: "/brand/dont/Don-t-stretch-or-squeeze.jpg",
      name: "Don-t-stretch-or-squeeze.jpg",
    },
    {
      url: "/brand/dont/Don-t-use-against-low-contrast.jpg",
      name: "Don-t-use-against-low-contrast.jpg",
    },
  ];

  // --- Download Multiple Logos ---
  const handleDownloadLogos = async () => {
    const zip = new JSZip();

    // files.forEach((file) => downloadFile(file.url, file.name));

    // Fetch all files and add to ZIP
    for (const file of files) {
      const blob = await fetch(file.url).then((res) => res.blob());
      zip.file(file.name, blob);
    }

    // Generate the ZIP
    const zipBlob = await zip.generateAsync({ type: "blob" });

    // Download the ZIP
    saveAs(zipBlob, "10xgalaxy-logos.zip");
  };

  // --- Download Colors JSON ---
  const downloadJsonColors = () => {
    const content = JSON.stringify(
      {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent_gradient_start: "#22D2E0",
        accent_gradient_end: "#85249F",
        gray_light: "#F2F2F2",
        gray_dark: "#F8F9FA",
      },
      null,
      2
    );

    const blob = new Blob([content], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "10x-brand-colors.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  // --- Download Typography TXT ---
  const downloadTypography = () => {
    const content = `
10x Galaxy Brand Typography

Headings: Inter
Body: Inter

Google Fonts:
https://fonts.google.com/specimen/Inter
  `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "10x-typography.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  // --- Download Full Brand Kit as ZIP ---
  const handleDownloadKit = async () => {
    const zip = new JSZip();

    // --- Logo Files ---
    // const logos = [
    // 	{ url: "/10X_Logo_color.svg", name: "logos/10x-logo-color.svg" },
    // 	{ url: "/10X_Logo_white.png", name: "logos/10x-logo-white.png" },
    // 	{ url: "/10X_Logo_black.jpg", name: "logos/10x-logo-black.jpg" },
    // 	{ url: "/icon_galaxy.png", name: "logos/10x-galaxy-icon.png" },
    // ];

    for (const file of files) {
      const blob = await fetch(file.url).then((res) => res.blob());
      zip.file(file.name, blob);
    }

    // --- Colors JSON ---
    const colors = {
      primary: "#FFFFFF",
      secondary: "#000000",
      accent_gradient_start: "#22D2E0",
      accent_gradient_end: "#85249F",
      gray_light: "#F2F2F2",
      gray_dark: "#F8F9FA",
    };
    zip.file("colors/colors.json", JSON.stringify(colors, null, 2));

    // --- Typography TXT ---
    zip.file(
      "typography/typography.txt",
      `
10x Galaxy Brand Typography

Headings: Inter
Body: Inter

Google Fonts:
https://fonts.google.com/specimen/Inter
    `
    );

    // --- Generate ZIP ---
    const finalZip = await zip.generateAsync({ type: "blob" });
    saveAs(finalZip, "10x-brand-kit.zip");
  };
  // ------------------------------

  // Data from "10x Press.docx" and "Product Fact Sheet Card.docx"
  const announcements = [
    {
      label: "Studio Update",
      title: "10x Galaxy - AI Venture Studio Is Live",
      body: "Launching our multi-product AI ecosystem.",
      color: "text-gray-900",
      bg: "bg-gray-100",
      border: "border-gray-200",
      more: "Learn more",
      link: "/products",
      icon: <Rocket className="w-7 h-7" />,
    },
    {
      label: "Product Update",
      title: "Dialogsy AI is Growing Fast",
      body: "Our smart AI chatbot platform is gaining traction.",
      color: "text-gray-900",
      bg: "bg-gray-100",
      border: "border-gray-200",
      more: "Learn more",
      link: "https://dialogsy.ai/",
      icon: <Sparkles className="w-7 h-7" />,
    },
    {
      label: "Investment Update",
      title: "Global Interest in 10x Galaxy Portfolio",
      body: "Strong early signals across our AGI roadmap.",
      color: "text-gray-900",
      bg: "bg-gray-100",
      border: "border-gray-200",
      more: "Learn more",
      link: "/products",
      icon: <TrendingUp className="w-7 h-7" />,
    },
    {
      label: "Coming Soon",
      title: "New AI Products Arriving Soon",
      body: "PerfectCode.ai, StoryMaster.ai, and more in pipeline.",
      color: "text-gray-900",
      bg: "bg-gray-100",
      border: "border-gray-200",
      more: "Explore products",
      link: "/products",
      icon: <Clock className="w-7 h-7" />,
    },
  ];

  const products = [
    {
      name: "PerfectCode.ai",
      tagline: "AI Code & Product Builder",
      launch: "2025",
      features: ["AI code assistant", "App builder from prompts"],
      useCases: "Developers, founders, agencies",
      summary:
        "PerfectCode.ai helps users write code and build full apps using natural language.",
      icon: <Layers className="w-6 h-6" />,
      img: perfectcode,
    },
    {
      name: "Dialogsy.ai",
      tagline: "AI Chatbot Builder",
      launch: "2025",
      features: [
        "No-code chatbot builder",
        "Omnichannel messaging",
        "Auto-reply workflows",
      ],
      useCases: "Customer support, e-commerce, automation",
      summary:
        "Dialogsy.ai enables businesses to build and automate conversations across web, WhatsApp, FB, and social channels with AI.",
      icon: <MessageSquare className="w-6 h-6" />,
      img: dialogsy,
    },
    {
      name: "StoryMaster.ai®",
      tagline: "AI Book Creator",
      launch: "Coming 2026",
      features: [
        "AI story writing",
        "Book outline & chapter generation",
        "Multi-language support",
      ],
      useCases: "Authors, content creators, students",
      summary:
        "StoryMaster.ai helps users create full books, stories, and manuscripts using advanced creative intelligence models.",
      icon: <BookOpen className="w-6 h-6" />,
      img: storyMaster,
    },
    {
      name: "Photo360.ai",
      tagline: "AI Image Enhancement",
      launch: "2025",
      features: ["Background removal", "Upscaling", "Image enhancement"],
      useCases: "Photography, e-commerce, media, design",
      summary:
        "Photo360.ai enhances, restores, and transforms images using high-quality custom AI models.",
      icon: <ImageIcon className="w-6 h-6" />,
      img: photo360,
    },
    {
      name: "MonaLisaX.ai",
      tagline: "AI Art Engine",
      launch: "2025",
      features: [
        "AI photo-to-art",
        "Artistic style transfers",
        "High-resolution output",
      ],
      useCases: "Artists, creators, social media, design",
      summary:
        "MonaLisaX.ai turns any photo into stunning digital artwork using advanced generative models.",
      icon: <ExternalLink className="w-6 h-6" />, // Placeholder icon
    },
    {
      name: "MeetingPilot.ai",
      tagline: "AI Meeting Intelligence",
      launch: "Coming 2026",
      features: ["Meeting notes", "Action items", "Summary generation"],
      useCases: "Teams, founders, agencies, organizations",
      summary:
        "MeetingPilot.ai captures, summarizes, and organizes meeting conversations with AI-powered accuracy.",
      icon: <Mic className="w-6 h-6" />,
      img: meetingpilot,
    },
    {
      name: "SalesBeeCRM.ai",
      tagline: "AI CRM",
      launch: "Coming 2026",
      features: ["Lead tracking", "Smart follow-ups", "Pipeline automation"],
      useCases: "Sales teams, founders, agencies",
      summary:
        "SalesBeeCRM.ai is an AI-driven CRM designed to automate tracking, engagement, and sales workflows.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      name: "ExtensionLab.ai",
      tagline: "AI Browser Extensions",
      launch: "Upcoming",
      features: [
        "Productivity extensions",
        "On-page AI tools",
        "Smart automation",
      ],
      useCases: "Daily productivity, browsing automation",
      summary:
        "ExtensionLab.ai offers AI-powered browser extensions that simplify workflows and boost productivity.",
      icon: <Puzzle className="w-6 h-6" />,
    },
    {
      name: "FunnelBee",
      tagline: "AI GTM & Launch Engine",
      launch: "Coming 2026",
      features: [
        "GTM planning",
        "Funnel builder",
        "Distribution engine",
        "Launch automation",
      ],
      useCases: "Startups, marketers, creators",
      summary:
        "FunnelBee is an AI-powered GTM and funnel automation engine that helps teams launch, distribute, and scale products faster.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const mediaLogos = [
    "TechCrunch",
    "Wired",
    "VentureBeat",
    "MIT Tech Review",
    "Forbes",
    "Bloomberg",
  ];
  // Create a quadrupled list for smoother infinite scrolling on large screens
  const marqueeLogos = [
    ...mediaLogos,
    ...mediaLogos,
    ...mediaLogos,
    ...mediaLogos,
  ];

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

  // Copy Color Handler (with fallback for iframe contexts)
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (hex) => {
    // Attempting to use the Clipboard API directly can fail in sandboxed iframes.
    // We use the traditional execCommand fallback which is more robust in these environments.
    const textArea = document.createElement("textarea");
    textArea.value = hex;

    // Ensure the textarea is not visible but is part of the DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 2000);
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  };

  // Expanded Palette Data matching the user screenshot
  const paletteData = [
    {
      name: "Mint / Turquoise",
      shades: [
        { name: "Pale Aqua", hex: "#B4FFFF", textColor: "text-gray-800" },
        { name: "Bright Cyan", hex: "#22D2E0", textColor: "text-white" }, // Main
        { name: "Deep Teal", hex: "#007B95", textColor: "text-white" },
      ],
      bottom: ["#023E4D", "#007B95", "#22D2E0", "#B4FFFF"], // Approximate gradients
    },
    {
      name: "Peach / Orange",
      shades: [
        { name: "Lavender Pink", hex: "#FFE5FF", textColor: "text-gray-800" },
        { name: "Royal Purple", hex: "#85249F", textColor: "text-white" }, // Main
        { name: "Deep Purple", hex: "#4A0062", textColor: "text-white" },
      ],
      bottom: ["#301B41", "#4A0062", "#85249F", "#FFE5FF"],
    },
    {
      name: "Blue",
      shades: [
        { name: "Light Gray", hex: "#EEEEEE", textColor: "text-gray-800" },
        { name: "Slate Gray", hex: "#686D76", textColor: "text-white" }, // Main
        { name: "Charcoal Gray", hex: "#373A40", textColor: "text-white" },
      ],
      bottom: ["#2B2E33", "#373A40", "#686D76", "#EEEEEE"],
    },
    {
      name: "Purple",
      shades: [
        { name: "Silver Gray", hex: "#C9C9C9", textColor: "text-gray-800" },
        { name: "Jet Black", hex: "#292929", textColor: "text-white" }, // Main
        { name: "Rich Black", hex: "#0A0A0A", textColor: "text-white" },
      ],
      bottom: ["#000000", "#0A0A0A", "#292929", "#C9C9C9"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      {/* Inject Fonts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
        
        .clean-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
        }
        
        .clean-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
          border-color: #D1D5DB;
        }
      `,
        }}
      />

      {/* Navigation */}
      {/* <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22D2E0] to-[#85249F] flex items-center justify-center">
              <span className="font-grotesk font-bold text-lg text-white">
                10x
              </span>
            </div>
            <span className="font-grotesk font-bold text-xl tracking-tight text-black">
              Galaxy
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-inter text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">
              Studio
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-black font-medium">
              Press
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Contact
            </a>
            <button
              onClick={() => handleDownload("kit")}
              className="px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-white transition-all cursor-pointer"
            >
              Media Kit
            </button>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-lg">
            <a href="#" className="text-gray-600 hover:text-black">
              Studio
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Portfolio
            </a>
            <a href="#" className="text-black font-medium">
              Press
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </div>
        )}
      </nav> */}

      {/* Hero Section */}
      <motion.section
        className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${presshero})`, // filter: "blur(6px) brightness(0.7)",
            filter: "brightness(0.7)",
            transform: "scale(1.05)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter"
            variants={itemVariants}
          >
            Brand Media Hub
          </motion.h1>
          {/* <motion.p
        className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Our thoughts on AI, product, and building 10x ventures.
      </motion.p> */}
        </div>
      </motion.section>
      <motion.section
        className="relative py-20 overflow-hidden bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div> */}

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8  text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            <span className="text-xs font-inter text-gray-600 uppercase tracking-wider">
              Official Press Hub
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "38px",
              fontWeight: "600",
              letterSpacing: "-1.68px",
              lineHeight: "64px",
              textAlign: "center",
            }}
            className="mb-4 leading-tight text-black"
          >
            Press & Media Headquarters
          </h1>

          <p
            style={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "38.4px",
              textAlign: "justify",
            }}
            className=" text-gray-600 mx-auto mb-10 leading-relaxed text-justify"
          >
            Welcome to the official press and media headquarters of 10x Galaxy.
            Here you’ll find our latest announcements, product releases, media
            coverage, founder interviews, and brand assets. For press inquiries,
            collaborations, or speaking opportunities, our communications team
            is ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/galaxy-notes">
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Newspaper className="w-4 h-4" />
                Latest News
              </button>
            </Link>
            <button
              onClick={() => handleDownload("kit")}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-50 transition-colors border border-gray-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Media Kit
            </button>
          </div>
        </div>
      </motion.section>

      {/* Section 1: Latest Announcements */}
      <motion.section
        className="py-20 bg-[#F8F9FA] border-y border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className=" relative container mx-auto px-4 sm:px-6 lg:px-8  z-10">
          <h2
            style={{
              fontFamily: "Inter",
              fontSize: "38px",
              fontWeight: "600",
              letterSpacing: "-1.68px",
              lineHeight: "64px",
              textAlign: "center",
            }}
            className="mb-12 leading-tight text-black"
            // className="text-3xl font-bold mb-12 flex items-center gap-3 text-black"
          >
            Latest Announcements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {announcements.map((item, index) => (
              <div
                key={index}
                className="
                group 
                relative 
                bg-white 
                p-6 
                h-[410px] 
                flex 
                flex-col 
                justify-between 
                items-start 
                border 
                border-gray-200 
                hover:border-gray-300 
                hover:shadow-xl 
                transition-all 
                duration-300 
                cursor-pointer
              "
              >
                {/* Top Section: Header & Content */}
                <div className="w-full">
                  {/* Header Row: Icon & Label aligned cleanly */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-50 rounded-xl text-black border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>
                    {/* Label with Sliding Gradient Wave Animation */}
                    <div className="relative overflow-hidden px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200 uppercase tracking-wide group cursor-default">
                      <span className="relative z-10">{item.label}</span>
                      {/* <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-gray-100 to-gray-200 " /> */}
                    </div>
                  </div>

                  {/* Content Block */}
                  <div>
                    <h3 className="font-inter text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-500 leading-relaxed line-clamp-4">
                      {item.body}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Action 
                  Using 'mt-auto' or justify-between ensures this always stays at the bottom
                  regardless of text length. 
              */}
                <div className="w-full pt-6 mt-4 border-t border-gray-100">
                  <Link
                    to={item.link}
                    className="flex items-center gap-2 text-sm font-semibold text-black group-hover:gap-3 transition-all duration-300"
                  >
                    {item.more}
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 2: What is 10x Galaxy */}
      <motion.section
        className="py-24  bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start items-center">
          <div className="">
            <h2
              style={{
                fontFamily: "Inter",
                fontSize: "38px",
                fontWeight: "600",
                letterSpacing: "-1.68px",
                lineHeight: "64px",
                textAlign: "left",
              }}
              className="mb-6 text-black"
            >
              {/* Building the Interstellar
              <br />
              Future of AI */}
              What Is 10x Galaxy Ltd.?
            </h2>
            <div className="font-inter text-gray-600 space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="text-black">10x Galaxy Ltd.</strong> is a
                UK-based AI Venture Studio creating, launching, and scaling a
                portfolio of AI and AGI-driven products. Our work spans creative
                intelligence, automation, and cognitive systems designed to
                accelerate human progress.
              </p>
              <p>
                Our studio model advances product development from idea to
                interstellar - enabling rapid validation, high-speed execution,
                and scalable global launches.
              </p>
              <p>
                Through platforms such as PerfectCode.ai, Dialogsy.ai, and a
                growing suite of technologies, 10x Galaxy is building the next
                generation of intelligent tools that empower entrepreneurs,
                creators, and modern businesses worldwide.
              </p>
            </div>
          </div>
          <div className="relative mb-16 md:mb-0">
            {/* Abstract Visual Representation of a Studio */}
            <div className="relative w-full aspect-square max-w-md mx-auto h-full">
              <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                <div className="bg-white border border-gray-200 shadow-sm p-6  mt-12">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-black">
                    <Layers />
                  </div>
                  <div className="font-bold text-lg text-black">
                    Venture Studio
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Rapid Execution
                  </div>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm p-6 ">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-black">
                    <Globe />
                  </div>
                  <div className="font-bold text-lg text-black">
                    Global Scale
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Worldwide Reach
                  </div>
                </div>
                <div className="bg-white border border-gray-200 shadow-sm p-6 ">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-black">
                    <Briefcase />
                  </div>
                  <div className=" font-bold text-lg text-black">Portfolio</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Diverse AI Tools
                  </div>
                </div>
                <div className="bg-black border border-gray-200 shadow-sm p-6 mt-[-3rem] rounded-t-2xl">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-black">
                    <Rocket />
                  </div>
                  <div className=" font-bold text-lg text-white">Launchpad</div>
                  <div className="text-sm text-white mt-2">GTM Engine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Media Coverage */}
      <motion.section
        className="py-16 bg-[#F2F2F2]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <p className="font-inter text-sm text-gray-500 mb-8 uppercase tracking-widest">
            Targeted Global Outreach
          </p>
          {/* <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60">
            {mediaLogos.map((logo, index) => (
              <span
                key={index}
                className="font-inter text-2xl font-bold text-gray-400 hover:text-black transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div> */}

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex items-center gap-16 w-max"
              animate={{ x: "-25%" }} // Move by 1/4th since we quadrupled the list
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeLogos.map((logo, index) => (
                <span
                  key={index}
                  className="font-inter text-3xl font-bold text-black hover:text-gray-500 transition-colors cursor-default whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
          <p className="font-inter text-xs text-gray-400 mt-8">
            Logos shown represent upcoming outreach targets for the 10x Galaxy
            portfolio.
          </p>
        </div>
      </motion.section>

      {/* Section 5: Product Fact Sheets */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="mb-16">
            <h2
              style={{
                fontFamily: "Inter",
                fontSize: "38px",
                fontWeight: "600",
                letterSpacing: "-1.68px",
                lineHeight: "64px",
                textAlign: "center",
              }}
              className="mb-4 text-black"
            >
              Product Fact Sheets
            </h2>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "38.4px",
                textAlign: "center",
              }}
              className="text-gray-500"
            >
              Detailed insights into our portfolio companies. Use these
              summaries for press coverage and citations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {products.map((product, index) => (
              <div key={index} className="clean-card  p-8 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gray-50 rounded-xl text-black border border-gray-100">
                    {product.img ? (
                      <>
                        {" "}
                        <img
                          className="h-6 w-auto"
                          src={product.img}
                          alt="icon"
                        />
                      </>
                    ) : (
                      product.icon
                    )}
                    {/* {product.icon} */}
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded border ${
                      product.launch.includes("Coming") ||
                      product.launch.includes("Upcoming")
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-black text-white border-black"
                    }`}
                  >
                    Launch: {product.launch}
                  </span>
                </div>

                <h3 className="font-sans text-2xl font-bold mb-1 text-black">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {product.tagline}
                </p>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed border-b border-gray-100 pb-6">
                  {product.summary}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                      Use Cases
                    </h4>
                    <p className="text-sm text-gray-600">{product.useCases}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 4: Brand Assets */}
      <motion.section
        className="py-20 bg-[#F8F9FA]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"> */}
          <div className="flex flex-col  md:items-center justify-between mb-16 gap-6">
            <div>
              <h2
                style={{
                  fontFamily: "Inter",
                  fontSize: "38px",
                  fontWeight: "600",
                  letterSpacing: "-1.68px",
                  lineHeight: "64px",
                  textAlign: "center",
                }}
                className=" mb-4 text-black"
              >
                Brand Assets
              </h2>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "38.4px",
                  textAlign: "justify",
                }}
                className="text-gray-500"
              >
                Everything you need to represent 10x Galaxy with clarity and
                consistency. Download official logos, colors, typography, and
                product identity elements designed for use across web, media,
                and partner platforms.
              </p>
            </div>
            <button
              onClick={() => handleDownload("kit")}
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Full Media Kit
            </button>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-3">
            Logo Asset//
            <div className="clean-card p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mb-2">
                <img src={logo} alt="" className="w-10 h-10" />
                <span className="font-grotesk font-bold text-white">10x</span>
              </div>
              <h3 className="font-bold font-inter mb-2 text-black">
                Logos & Icons
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Light and Dark variations in SVG/PNG.
              </p>
              <button
                onClick={() => handleDownload("logo")}
                className="text-sm text-black hover:opacity-70 font-medium flex items-center gap-1 transition-opacity cursor-pointer"
              >
                Download <Download className="w-3 h-3" />
              </button>
            </div>
            Colors Asset//
            <div className="clean-card p-8 flex flex-col items-center text-center">
              <div className="flex gap-2 mb-8 mt-2">
                <div className="w-8 h-8 rounded-full bg-black border border-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22D2E0] to-[#85249F]"></div>
              </div>
              <h3 className="font-bold font-inter mb-2 text-black">
                Brand Colors
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Primary palette and monochrome.
              </p>
              <button
                onClick={() => handleDownload("colors")}
                className="text-sm text-black hover:opacity-70 font-medium flex items-center gap-1 transition-opacity cursor-pointer"
              >
                Download <Download className="w-3 h-3" />
              </button>
            </div>
            Typography Asset//
            <div className="clean-card p-8 flex flex-col items-center text-center">
              <div className="mb-6 mt-1">
                <div className="font-inter text-2xl font-bold text-black">
                  Aa
                </div>
                <div className="font-inter text-sm text-gray-400">
                  Inter & Sans
                </div>
              </div>
              <h3 className="font-bold font-inter mb-2 text-black">
                Typography
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Font files and usage guidelines.
              </p>
              <button
                onClick={() => handleDownload("typography")}
                className="text-sm text-black hover:opacity-70 font-medium flex items-center gap-1 transition-opacity cursor-pointer"
              >
                Download <Download className="w-3 h-3" />
              </button>
            </div>
          </div> */}
          {/* new update */}
          <div className=" font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
            {/* Navigation (Simplified) */}
            <main className="mt-4">
              {/* Logo Section */}
              <section className="mb-20 scroll-mt-24" id="logo">
                <SectionHeading
                  title="Brand Logos & Icons"
                  description="Download official 10x Galaxy logos and icons in light, dark, and monochrome formats. Designed for use across web, print, and media."
                />

                <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
                  <LogoCard
                    title="Primary Logo"
                    variant="full"
                    imageUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Gradient.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Gradient.svg"
                  />
                  <LogoCard
                    title="Wordmark Only"
                    variant="text"
                    imageUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_White.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_White.svg"
                  />
                  <LogoCard
                    title="Icon Only"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Black.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Black.svg"
                  />
                  <LogoCard
                    title="Icon Only"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Gradient.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Gradient.svg"
                  />
                  <LogoCard
                    title="Icon Only"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_White.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_White.svg"
                  />
                  <LogoCard
                    title="Icon Only"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Black.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Black.svg"
                  />
                </div>
              </section>

              {/* Clearspace Section */}
              <section className="mb-20">
                <SectionHeading
                  title="Anatomy & Clearspace"
                  description="Maintain the minimum clearspace around the logo to protect clarity and impact.
Use spacing equal to the height of the “X” on all sides."
                />

                <div className="relative flex items-center justify-center overflow-hidden">
                  {/* Grid Background */}
                  {/* <div
										className="absolute inset-0 opacity-[0.03]"
										style={{
											backgroundImage:
												"linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
											backgroundSize: "40px 40px",
										}}
									/> */}

                  {/* Clearspace Visual */}
                  <div className="relative">
                    {/* Clearspace Guides */}
                    {/* <div className="absolute -inset-12 border border-dashed border-teal-300 bg-teal-50/30">
											<span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-xs font-bold text-teal-600">
												x
											</span>
											<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs font-bold text-teal-600">
												x
											</span>
											<span className="absolute top-1/2 -left-8 -translate-y-1/2 font-mono text-xs font-bold text-teal-600">
												x
											</span>
											<span className="absolute top-1/2 -right-8 -translate-y-1/2 font-mono text-xs font-bold text-teal-600">
												x
											</span>
										</div> */}

                    {/* Logo */}
                    <div className="relative z-10">
                      <img
                        src="/brand/clearspace.jpg"
                        alt="Clearspace Logo"
                        className="h-80 w-auto"
                      />
                      {/* <LogoPreview
                        className="h-10 w-10"
                        imageUrl="/brand/clearspace.jpg"
                      /> */}
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices Section */}
              <section className="mb-20">
                <SectionHeading
                  title="Best Practices"
                  description="Always use approved colors, proportions, and backgrounds.
Avoid stretching, rotating, or applying unapproved effects to the logo."
                />

                <div className="grid gap-1 sm:grid-cols-1 lg:grid-cols-3">
                  {LOGO_DO_NOTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden bg-slate-50 border border-slate-100"
                    >
                      <div className="aspect-[4/3] flex items-center justify-center p-8 bg-white border-b border-slate-100 overflow-hidden">
                        <div
                          // className={`transition-transform duration-300 ${
                          //   item.visualClass === "bg-pattern"
                          //     ? "relative w-full h-full flex items-center justify-center"
                          //     : ""
                          // }`}
                          className={`transition-transform duration-300 `}
                        >
                          {/* {item.visualClass === "bg-pattern" && (
                            <div
                              className="absolute inset-0 opacity-20 bg-black"
                              style={{
                                backgroundImage:
                                  "radial-gradient(circle, #000 2px, transparent 2px)",
                                backgroundSize: "10px 10px",
                              }}
                            ></div>
                          )} */}

                          <div
                          // className={`
                          //     ${
                          //       item.visualClass === "scale-y-50"
                          //         ? "scale-y-50"
                          //         : ""
                          //     }
                          //     ${
                          //       item.visualClass === "rotate-45"
                          //         ? "rotate-12"
                          //         : ""
                          //     }
                          //     ${
                          //       item.visualClass === "opacity-30"
                          //         ? "opacity-20 blur-[1px]"
                          //         : ""
                          //     }
                          //   `}
                          >
                            <LogoPreview
                              className="h-auto w-auto"
                              imageUrl={item.image}
                            />
                          </div>

                          {/* Big Red X Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/80">
                            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-sm">
                              <X size={24} strokeWidth={3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-red-600 text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Colors Section */}
              <section className="mb-20 scroll-mt-24" id="colors">
                <SectionHeading
                  title="Cosmic Palette"
                  description="Our color system is inspired by deep space and futuristic technology.
Use these colors to maintain visual consistency across all touchpoints."
                />

                {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {BRAND_COLORS.map((color) => (
                    <ColorCard key={color.name} color={color} />
                  ))}
                </div> */}
                {/* NEW SECTION: COLOR PALETTE */}
                <motion.section
                  className=" bg-[#F8F9FA] "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                      {paletteData.map((palette, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col border border-gray-100 overflow-hidden shadow-sm h-full"
                        >
                          {/* Main Color Blocks */}
                          <div className="flex-1 flex flex-col">
                            {palette.shades.map((shade, sIdx) => (
                              <div
                                key={sIdx}
                                className={`p-6 flex flex-col justify-between group cursor-pointer transition-all ${
                                  sIdx === 1
                                    ? "flex-grow min-h-[160px]"
                                    : "min-h-[100px]"
                                }`}
                                style={{ backgroundColor: shade.hex }}
                                onClick={() => copyToClipboard(shade.hex)}
                              >
                                <span
                                  className={`font-grotesk text-lg font-medium ${shade.textColor}`}
                                >
                                  {shade.name}
                                </span>
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`text-sm opacity-80 uppercase tracking-wider ${shade.textColor}`}
                                  >
                                    {shade.hex}
                                  </span>
                                  {copiedColor === shade.hex ? (
                                    <Check
                                      className={`w-4 h-4 ${shade.textColor}`}
                                    />
                                  ) : (
                                    <Copy
                                      className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${shade.textColor}`}
                                    />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* Bottom Color Strip */}
                          <div className="h-12 flex">
                            {palette.bottom.map((color, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex-1 h-full hover:opacity-90 transition-opacity cursor-pointer"
                                style={{ backgroundColor: color }}
                                title={color}
                                onClick={() => copyToClipboard(color)}
                              ></div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              </section>

              {/* Typography Preview (Bonus) */}
              <section className="mb-20">
                <SectionHeading
                  title="Typography"
                  description="Inter is our primary typeface for headings and body text.
Modern, clean, and optimized for clarity across digital interfaces."
                />
                <div className=" border border-slate-100 bg-slate-50 p-8 md:p-12 overflow-hidden relative">
                  <div className="grid gap-12 md:grid-cols-2 relative z-10">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
                        Headings
                      </span>
                      <div className="space-y-6">
                        <div>
                          <p className="text-5xl font-bold text-slate-900">
                            Aa
                          </p>
                          <p className="mt-2 text-sm text-slate-500">
                            Bold / 600
                          </p>
                        </div>
                        <div className="h-px bg-slate-200 w-full" />
                        <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                          Design is intelligence <br /> made visible.
                        </h3>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
                        Body
                      </span>
                      <div className="space-y-6">
                        <div>
                          <p className="text-5xl font-normal text-slate-900">
                            Aa
                          </p>
                          <p className="mt-2 text-sm text-slate-500">
                            Regular / 400
                          </p>
                        </div>
                        <div className="h-px bg-slate-200 w-full" />
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Good design is obvious. Great design is transparent.
                          We believe in creating tools that empower creators
                          without getting in their way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Logo Wordmark Preview (Bonus) */}
              <section className="mb-">
                <SectionHeading
                  title="Logo Wordmark"
                  description="The 10x Galaxy wordmark reflects acceleration, intelligence, and exponential growth.
Its angled “X” symbolizes forward motion and breakthrough innovation."
                />
                <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
                  <LogoCardWord
                    title="Gradient Core Version"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Gradient.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Gradient.svg"
                  />

                  <LogoCardWord
                    title="Monochrome Version"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Black.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_Black.svg"
                  />
                  <LogoCardWord
                    title="Outline Version"
                    variant="icon"
                    imageUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Black.jpg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Black.svg"
                  />
                  <LogoCardWord
                    title="Dark Mode Version"
                    variant="full"
                    imageUrl="/brand/10xgalaxy_logo_primary/10xGalaxy_Logo_Primary_White.svg"
                    imageDownloadUrl="/brand/10xgalaxy_logo_outline/10xGalaxy_Logo_Outline_Gradient.svg"
                  />
                </div>
              </section>
            </main>
          </div>
          {/* new update end */}
        </div>
      </motion.section>

      {/* Section 6: Contact */}
      <motion.footer
        className="py-20  bg-white border-b border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          {/* <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-black border border-gray-100">
            <Mail className="w-8 h-8" />
          </div> */}
          <h2
            style={{
              fontFamily: "Inter",
              fontSize: "38px",
              fontWeight: "600",
              letterSpacing: "-1.68px",
              lineHeight: "64px",
              textAlign: "center",
            }}
            className=" text-black"
          >
            Press & Media Contact
          </h2>
          {/* <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            For press inquiries, collaborations, or speaking opportunities, our
            communications team is ready to assist.
          </p> */}

          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 font-inter text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4 text-black" />
              info@10xgalaxy.com
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="w-4 h-4 text-black" />
              London, United Kingdom
            </div>
          </div> */}

          {/* <a
            href="mailto:info@10xgalaxy.com"
            className="px-8 py-4 bg-black rounded-full text-white font-bold hover:shadow-lg transition-all hover:-translate-y-1"
          >
            Send Media Request
          </a> */}

          <motion.section
            className="bg-white text-black font-sans mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className="">
              {/* Re-ordered grid: form on left for lg+, info on right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start">
                {/* Left Column (Now Form on large screens) */}
                <motion.div
                  variants={itemVariants}
                  className="bg-[#F2F2F2] p-8 md:p-12 rounded-xl lg:order-1 h-screen shadow-lg font-sans relative bg-cover bg-center inset-0" // Form on left
                  style={{
                    backgroundImage: `url(${contactpress})`, // Blurred office/desk image
                    // filter: "blur(8px)",
                    // transform: "scale(1.05)",
                  }}
                >
                  {/* <img src={contactpress} alt="" className="object" /> */}
                </motion.div>

                {/* Right Column (Now Info on large screens) */}
                <motion.div
                  variants={itemVariants}
                  className="lg:order-2 bg-[#F2F2F2] p-8 md:p-12 rounded-xl md:h-screen shadow-lg font-sans text-start"
                >
                  {" "}
                  {/* Info on right */}
                  <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tighter text-black">
                    We'd Love to Hear from You
                  </h2>
                  <p className="font-sans mt-4 text-base text-gray-700 leading-relaxed">
                    For press inquiries, collaborations, or speaking
                    opportunities, our communications team is ready to assist.
                  </p>
                  <div className="mt-12 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-semibold">
                          Email Us
                        </h3>
                        <a
                          href="mailto:info@10xgalaxy.com"
                          className="text-gray-700 hover:text-black hover:underline font-sans"
                        >
                          info@10xgalaxy.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold font-sans">
                          Call Us
                        </h3>
                        <a
                          href="tel:+447535796307"
                          className="text-gray-700 hover:text-black hover:underline font-sans"
                        >
                          +447535796307
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xl font-semibold">
                          Our Address
                        </h3>
                        <p className="font-sans text-gray-700">
                          61 Bridge Street, Kington,
                          <br />
                          Herefordshire, HR5 3DJ,
                          <br />
                          United Kingdom.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-end mt-[62px]">
                    <div className="flex flex-col items-start gap-2 text-black">
                      <p className="text-sm font-semibold font-sans">
                        Find us on
                      </p>
                      <div className="flex gap-1">
                        {links.map((item, i) => (
                          <a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-neutral-900 hover:bg-neutral-800 w-10 h-10 flex items-center justify-center rounded-md transition-all border border-neutral-700 hover:border-neutral-500 text-2xl text-white"
                          >
                            {item.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.footer>
    </div>
  );
};

export default Press;
