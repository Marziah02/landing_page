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

const Header = () => {
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
									className="hover:text-[#22D2E0] transition-colors ">
									Home
								</Link>
							</li>
							<li className="px-[19px] py-4">
								<DropdownMenu>
									<DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#22D2E0] transition-colors">
										AI Products
									</DropdownMenuTrigger>
									<DropdownMenuContent className="bg-background">
										<DropdownMenuItem asChild>
											<Link
												to="https://perfectcode.ai/dashboard"
												className="cursor-pointer hover:text-white">
												PerfectCode.ai
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
												className="cursor-pointer">
												StoryMaster.ai
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
												className="cursor-pointer">
												Photo360.ai
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
												className="cursor-pointer">
												MeetingPilot.ai
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link
												to="https://palegreen-badger-420606.hostingersite.com/coming-soon/"
												className="cursor-pointer">
												ExtensionLab.ai
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
							<li className="px-[19px] py-4">
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
							</li>
							<li className="px-[19px] py-4">
								<a
									href="#"
									className="hover:text-[#22D2E0] transition-colors">
									Resources
								</a>
							</li>
						</ul>
					</div>
					<div
						className="bg-foreground text-background hover:bg-[#22D2E0] rounded-full mr-2 py-4"
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
