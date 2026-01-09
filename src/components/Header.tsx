"use client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "@/assets/10x_logo.svg";
import logo from "@/assets/10X_Logo_color.svg";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  // place this at the top of your component:
  const [openAI, setOpenAI] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const aiTimeout = useRef<NodeJS.Timeout | null>(null);
  const companyTimeout = useRef<NodeJS.Timeout | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleEnter = (name: string) => setOpenDropdown(name);
  const handleLeave = () => setOpenDropdown(null);
  // Helper functions
  const openMenu = (setter: any, ref: any) => {
    if (ref.current) clearTimeout(ref.current);
    setter(true);
  };
  const closeMenu = (setter: any, ref: any) => {
    ref.current = setTimeout(() => setter(false), 150);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //   mobile dropdown---------------

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navLinks = {
    ai: [
      { name: "PerfectCode.ai", url: "https://perfectcode.ai/dashboard" },
      { name: "Dialogsy.ai", url: "https://dialogsy.ai/" },
      { name: "MonaLisaX.ai", url: "https://monalisax.ai/" },
      { name: "Photo360.ai", url: "https://photo360.ai/" },
      { name: "StoryMaster.ai", url: "/story-master-ai-coming-soon" },
      { name: "MeetingPilot.ai", url: "/meeting-pilot-ai-coming-soon" },
      { name: "ExtensionLab.ai", url: "/extension-lab-ai-coming-soon" },
    ],
    company: [
      { name: "About", url: "/about" },
      { name: "Products", url: "/products" },
      { name: "Careers", url: "/careers" },
      { name: "Contact", url: "/contact" },
    ],
    resources: [
      { name: "Galaxy Notes", url: "/galaxy-notes" },
      { name: "Brand Media Hub", url: "/brand-media-hub" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-[#DCDCDC] h-[60px]">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8 ">
            <Link to="/" className="text-2xl font-bold py-4 pl-2">
              <img src={logo} alt="10x Logo" className="h-8 w-auto" />
            </Link>
            <div
              className="w-0.5 h-6 bg-[#dcdcdc] py-4 ml-4"
              style={{
                lineHeight: "25.6px",
                textAlign: "left",
              }}
            ></div>
            <ul
              className="hidden md:flex items-center "
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "22.4px",
                textAlign: "left",
              }}
            >
              <li className="px-[19px] py-4">
                <Link
                  to="/"
                  className="relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent "
                >
                  Home
                </Link>
              </li>
              {/* <li className="px-[19px] py-4">
								<DropdownMenu
									open={openAI}
									onOpenChange={setOpenAI}>
									<div className="relative inline-block">
										<DropdownMenuTrigger
											asChild
											className="flex items-center gap-1 hover:text-[#22D2E0] transition-colors cursor-pointer select-none">
											<span
												onMouseEnter={() => openMenu(setOpenAI, aiTimeout)}
												onMouseLeave={() => closeMenu(setOpenAI, aiTimeout)}>
												AI Products
											</span>
										</DropdownMenuTrigger>

										<DropdownMenuContent
											align="start"
											sideOffset={4}
											className="bg-background"
											onMouseEnter={() => openMenu(setOpenAI, aiTimeout)}
											onMouseLeave={() => closeMenu(setOpenAI, aiTimeout)}>
											<DropdownMenuItem asChild>
												<Link
													to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
													target="_blank"
													rel="noopener noreferrer">
													StoryMaster.ai
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem asChild>
												<Link
													to="https://perfectcode.ai/dashboard"
													target="_blank"
													rel="noopener noreferrer">
													PerfectCode.ai
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem asChild>
												<Link
													to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
													target="_blank"
													rel="noopener noreferrer">
													Dialogsy.ai
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem asChild>
												<Link
													to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
													target="_blank"
													rel="noopener noreferrer">
													Photo360.ai
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem asChild>
												<Link
													to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
													target="_blank"
													rel="noopener noreferrer">
													MeetingPilot.ai
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem asChild>
												<Link
													to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
													target="_blank"
													rel="noopener noreferrer">
													ExtensionLab.ai
												</Link>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</div>
								</DropdownMenu>
							</li> */}
              <li
                className={`relative group px-[19px] py-4 ${
                  openDropdown === "ai" && !scrolled
                    ? " border-x border-t border-black/20 bg-black/20"
                    : openDropdown === "ai" && scrolled
                    ? " border-x border-t border-[#DCDCDC] bg-white/20"
                    : ""
                }`}
                onMouseEnter={() => handleEnter("ai")}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-1 relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent  ${
               openDropdown === "ai"
                 ? "bg-gradient-to-br from-[#22D2E0] to-[#85249F] bg-clip-text text-transparent"
                 : ""
             }`}
                >
                  AI Products
                </button>

                {/* Dropdown Menu */}
                {/* {openDropdown === "ai" && (
                  <div className="absolute left-0 top-full w-52 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 animate-fadeIn">
                    {[
                      {
                        name: "PerfectCode.ai",
                        url: "https://perfectcode.ai/dashboard",
                      },
                      {
                        name: "Dialogsy.ai",
                        url: "https://dialogsy.ai/",
                      },
                      {
                        name: "MonaLisaX.Ai",
                        url: "https://monalisax.ai/",
                      },
                      {
                        name: "Photo360.ai",
                        url: "https://photo360.ai/",
                      },
                      {
                        name: "StoryMaster.ai",
                        url: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
                      },
                      {
                        name: "MeetingPilot.ai",
                        url: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
                      },
                      {
                        name: "ExtensionLab.ai",
                        url: "https://palegreen-badger-420606.hostingersite.com/coming-soon/",
                      },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // hover:bg-[#22D2E0]/10
                        className="block px-4 py-2 text-sm text-gray-700  relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )} */}

                {openDropdown === "ai" && (
                  <div
                    className={`
      absolute left-0 top-full w-44
      rounded-b-xl  
      py-3 z-50 animate-fadeIn  ${
        scrolled
          ? "shadow-lg backdrop-blur-3xl border-x border-b border-[#DCDCDC] bg-white/20"
          : "shadow-[0_24px_60px_rgba(15,23,42,0.7)] backdrop-blur-xl border-x border-b border-white/20 bg-gradient-to-b from-white/20 to-white/5"
      }  
    `}
                    //  ${
                    //     scrolled
                    //       ? "bg-black/80 backdrop-blur-lg"
                    //       : "bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl"
                    //   }`
                  >
                    {/* inner white glow */}
                    {/* <div
                      className="
    absolute inset-0 rounded-3xl
    bg-gradient-to-b
    from-white/60 via-white/20 to-transparent
    pointer-events-none
  "
                    /> */}

                    {[
                      {
                        name: "PerfectCode.ai",
                        url: "https://perfectcode.ai/dashboard",
                      },
                      { name: "Dialogsy.ai", url: "https://dialogsy.ai/" },
                      { name: "MonaLisaX.ai", url: "https://monalisax.ai/" },
                      { name: "Photo360.ai", url: "https://photo360.ai/" },
                      {
                        name: "StoryMaster.ai",
                        url: "/story-master-ai-coming-soon",
                      },
                      {
                        name: "MeetingPilot.ai",
                        url: "/meeting-pilot-ai-coming-soon",
                      },
                      {
                        name: "ExtensionLab.ai",
                        url: "/extension-lab-ai-coming-soon",
                      },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
          block px-4 py-2 text-sm 
          
          rounded-lg transition-all duration-300 
           ${
             scrolled
               ? "text-black/90 hover:text-black hover:bg-black/10 "
               : "text-white/90 hover:text-white hover:bg-white/10 "
           }
        `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              {/* <li className="px-[19px] py-4">
								<DropdownMenu>
									<DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#22D2E0] transition-colors">
										Company
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-background">
										<DropdownMenuItem asChild>
											<Link
												to="/about"
												className="cursor-pointer">
												About
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="/careers"
												className="cursor-pointer">
												Careers
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="/contact"
												className="cursor-pointer">
												Contact
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="/products"
												className="cursor-pointer">
												Products
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</li> */}
              <li
                // className="relative group px-[19px] py-4"
                className={`relative group px-[19px] py-4 ${
                  openDropdown === "company" && !scrolled
                    ? " border-x border-t border-black/20 bg-black/20"
                    : openDropdown === "company" && scrolled
                    ? " border-x border-t border-[#DCDCDC] bg-white/20"
                    : ""
                }`}
                onMouseEnter={() => handleEnter("company")}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-1 relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent  ${
               openDropdown === "company"
                 ? "bg-gradient-to-br from-[#22D2E0] to-[#85249F] bg-clip-text text-transparent"
                 : ""
             }`}
                >
                  Company
                </button>

                {/* Dropdown Menu */}
                {openDropdown === "company" && (
                  <div
                    className={`
      absolute left-0 top-full w-44
      rounded-b-xl
      py-3 z-50 animate-fadeIn ${
        scrolled
          ? "shadow-lg backdrop-blur-3xl border-x border-b border-[#DCDCDC] bg-white/20"
          : "shadow-[0_24px_60px_rgba(15,23,42,0.7)] backdrop-blur-xl border-x border-b border-white/20 bg-gradient-to-b from-white/20 to-white/5"
      }  `}
                    //   className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 animate-fadeIn"
                  >
                    {[
                      { name: "About", url: "/about" },
                      { name: "Products", url: "/products" },
                      { name: "Careers", url: "/careers" },
                      { name: "Contact", url: "/contact" },
                      // { name: "Products", url: "/products" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        //             className="block px-4 py-2 text-sm text-gray-700 relative transition-all duration-300
                        //  hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
                        //  hover:bg-clip-text hover:text-transparent "
                        className={`
          block px-4 py-2 text-sm 
          
          rounded-lg transition-all duration-300 
           ${
             scrolled
               ? "text-black/90 hover:text-black hover:bg-black/10 "
               : "text-white/90 hover:text-white hover:bg-white/10 "
           }
        `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li
                // className="relative group px-[19px] py-4"
                className={`relative group px-[19px] py-4 ${
                  openDropdown === "resource" && !scrolled
                    ? " border-x border-t border-black/20 bg-black/20"
                    : openDropdown === "resource" && scrolled
                    ? " border-x border-t border-[#DCDCDC] bg-white/20"
                    : ""
                }`}
                onMouseEnter={() => handleEnter("resource")}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-1 relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent  ${
               openDropdown === "resource"
                 ? "bg-gradient-to-br from-[#22D2E0] to-[#85249F] bg-clip-text text-transparent"
                 : ""
             }`}
                >
                  Resources
                </button>

                {/* Dropdown Menu */}
                {openDropdown === "resource" && (
                  <div
                    className={`
      absolute left-0 top-full w-44
      rounded-b-xl
      py-3 z-50 animate-fadeIn ${
        scrolled
          ? "shadow-lg backdrop-blur-3xl border-x border-b border-[#DCDCDC] bg-white/20"
          : "shadow-[0_24px_60px_rgba(15,23,42,0.7)] backdrop-blur-xl border-x border-b border-white/20 bg-gradient-to-b from-white/20 to-white/5"
      }  `}
                    //   className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 animate-fadeIn"
                  >
                    {[
                      { name: "Galaxy Notes", url: "/galaxy-notes" },
                      { name: "Brand Media Hub", url: "/brand-media-hub" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        //             className="block px-4 py-2 text-sm text-gray-700 relative transition-all duration-300
                        //  hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
                        //  hover:bg-clip-text hover:text-transparent "
                        className={`
          block px-4 py-2 text-sm 
          
          rounded-lg transition-all duration-300 
           ${
             scrolled
               ? "text-black/90 hover:text-black hover:bg-black/10 "
               : "text-white/90 hover:text-white hover:bg-white/10 "
           }
        `}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              {/* <li className="px-[19px] py-4">
								<a
									href="#"
									className="relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent ">
									Resources
								</a>
							</li> */}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="hidden sm:block bg-foreground text-background hover:bg-gradient-to-br from-[#22D2E0] to-[#85249F] rounded-full mr-2 py-4"
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19.2px",
                textAlign: "center",
                padding: "8px 36px",
              }}
            >
              <Link to="/careers">Join Galaxy</Link>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      {/* mobile view */}

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-[60px] right-0 bottom-0 w-[85%] max-w-xs bg-white z-[100] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <Link
            to="/"
            className="block py-3 text-lg font-medium border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Accordion - AI Products */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("ai")}
              className="flex items-center justify-between w-full py-3 text-lg font-medium border-b border-gray-100"
            >
              <span>AI Products</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  activeMobileDropdown === "ai" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeMobileDropdown === "ai" ? "max-h-[500px] py-2" : "max-h-0"
              }`}
            >
              {navLinks.ai.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 pl-4 text-gray-600 hover:text-cyan-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Accordion - Company */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("company")}
              className="flex items-center justify-between w-full py-3 text-lg font-medium border-b border-gray-100"
            >
              <span>Company</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  activeMobileDropdown === "company" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeMobileDropdown === "company" ? "max-h-64 py-2" : "max-h-0"
              }`}
            >
              {navLinks.company.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="block py-2 pl-4 text-gray-600 hover:text-cyan-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Accordion - Resources */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("resources")}
              className="flex items-center justify-between w-full py-3 text-lg font-medium border-b border-gray-100"
            >
              <span>Resources</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  activeMobileDropdown === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeMobileDropdown === "resources"
                  ? "max-h-64 py-2"
                  : "max-h-0"
              }`}
            >
              {navLinks.resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="block py-2 pl-4 text-gray-600 hover:text-cyan-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Join Button (Visible only on mobile/small screen) */}
          <div className="pt-6">
            <Link
              to="/careers"
              className="block w-full text-center bg-black text-white py-4 rounded-xl font-bold bg-gradient-to-r from-[#22D2E0] to-[#85249F]"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Galaxy
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
