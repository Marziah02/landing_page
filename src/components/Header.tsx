"use client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
// import logo from "@/assets/10x_logo.svg";
import logo from "@/assets/10X_Logo_color.svg";
import { useRef, useState } from "react";

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

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-[#DCDCDC] h-[60px]">
			<div className="container mx-auto px-6">
				<nav className="flex items-center justify-between">
					<div className="flex items-center gap-8 ">
						<Link
							to="/"
							className="text-2xl font-bold py-4 pl-2">
							<img
								src={logo}
								alt="10x Logo"
								className="h-8 w-auto"
							/>
						</Link>
						<div
							className="w-0.5 h-6 bg-[#dcdcdc] py-4 ml-4"
							style={{
								lineHeight: "25.6px",
								textAlign: "left",
							}}></div>
						<ul
							className="hidden md:flex items-center "
							style={{
								fontFamily: "Inter",
								fontSize: "14px",
								fontWeight: "400",
								lineHeight: "22.4px",
								textAlign: "left",
							}}>
							<li className="px-[19px] py-4">
								<Link
									to="/"
									className="relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent ">
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
								className="relative group px-[19px] py-4"
								onMouseEnter={() => handleEnter("ai")}
								onMouseLeave={handleLeave}>
								<button
									className="flex items-center gap-1 relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent ">
									AI Products
								</button>

								{/* Dropdown Menu */}
								{openDropdown === "ai" && (
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
             hover:bg-clip-text hover:text-transparent ">
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
								className="relative group px-[19px] py-4"
								onMouseEnter={() => handleEnter("company")}
								onMouseLeave={handleLeave}>
								<button
									className="flex items-center gap-1 relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent ">
									Company
								</button>

								{/* Dropdown Menu */}
								{openDropdown === "company" && (
									<div className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 animate-fadeIn">
										{[
											{ name: "About", url: "/about" },
											{ name: "Careers", url: "/careers" },
											{ name: "Contact", url: "/contact" },
											// { name: "Products", url: "/products" },
											{ name: "Products", url: "#" },
										].map((item) => (
											<Link
												key={item.name}
												to={item.url}
												className="block px-4 py-2 text-sm text-gray-700 relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent ">
												{item.name}
											</Link>
										))}
									</div>
								)}
							</li>
							<li className="px-[19px] py-4">
								<a
									href="#"
									className="relative transition-all duration-300
             hover:bg-gradient-to-br hover:from-[#22D2E0] hover:to-[#85249F]
             hover:bg-clip-text hover:text-transparent ">
									Resources
								</a>
							</li>
						</ul>
					</div>
					<div
						className="bg-foreground text-background hover:bg-gradient-to-br from-[#22D2E0] to-[#85249F] rounded-full mr-2 py-4"
						style={{
							fontFamily: "Inter",
							fontSize: "16px",
							fontWeight: "400",
							lineHeight: "19.2px",
							textAlign: "center",
							padding: "8px 36px",
						}}>
						<Link to="/careers">Join Galaxy</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
