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
import logo from "@/assets/10x_logo.svg";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-16">
			<div className="container mx-auto px-6 py-4">
				<nav className="flex items-center justify-between">
					<div className="flex items-center gap-12 ">
						<Link
							to="/"
							className="text-2xl font-bold">
							<img
								src={logo}
								alt="10x Logo"
								className="h-8 w-auto"
							/>
						</Link>
						{/* <div className="w-1 h-8 bg-amber-700 mr-2"></div> */}
						<ul className="hidden md:flex items-center gap-8">
							<li>
								<a
									href="#"
									className="font-sans text-sm font-medium hover:text-muted-foreground transition-colors">
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="font-sans text-sm font-medium hover:text-muted-foreground transition-colors">
									Brand
								</a>
							</li>
							<li>
								<DropdownMenu>
									<DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors">
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
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
							<li>
								<a
									href="#"
									className="text-sm font-medium hover:text-muted-foreground transition-colors">
									Resources
								</a>
							</li>
						</ul>
					</div>
					<Button
						size="sm"
						className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
						asChild>
						<Link to="/contact">Careers</Link>
					</Button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
