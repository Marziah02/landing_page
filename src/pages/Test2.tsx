import React, { useState } from "react";
import { Download, Check, X, Menu, X as CloseIcon, Copy } from "lucide-react";

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
	},
	{
		title: "Do not rotate",
		description: "Keep the logo horizontal.",
		visualClass: "rotate-45",
		type: "transform",
	},
	{
		title: "Don't use busy backgrounds",
		description: "Ensure high visibility.",
		visualClass: "bg-pattern",
		type: "bg",
	},
	{
		title: "Don't use low contrast",
		description: "Avoid colors that blend in.",
		visualClass: "opacity-30",
		type: "opacity",
	},
];

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
						title="Copy Hex">
						{copied ? (
							<Check
								size={14}
								className="text-green-500"
							/>
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
		<h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
		{description && (
			<p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
				{description}
			</p>
		)}
	</div>
);

const LogoPreview = ({ variant = "full", className = "" }) => {
	// Simple SVG representation of a brand logo similar to the style
	return (
		<svg
			viewBox="0 0 200 60"
			className={`h-12 w-auto ${className}`}
			fill="currentColor">
			{variant !== "text" && (
				<g className="text-teal-500">
					{/* Abstract Circle/Logo Mark */}
					<circle
						cx="30"
						cy="30"
						r="12"
						stroke="currentColor"
						strokeWidth="8"
						fill="none"
					/>
					<circle
						cx="50"
						cy="30"
						r="12"
						stroke="currentColor"
						strokeWidth="8"
						fill="none"
					/>
				</g>
			)}
			{variant !== "icon" && (
				<text
					x={variant === "text" ? "0" : "80"}
					y="42"
					fontFamily="sans-serif"
					fontWeight="bold"
					fontSize="32"
					className="text-slate-800 fill-current">
					Ollyo
				</text>
			)}
		</svg>
	);
};

const LogoCard = ({ title, variant }) => (
	<div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
		<div className="mb-8 flex h-40 items-center justify-center rounded-xl bg-slate-50/50 border border-slate-100 border-dashed">
			<LogoPreview variant={variant} />
		</div>
		<div className="flex items-center justify-between">
			<h3 className="text-lg font-semibold text-slate-900">{title}</h3>
			<button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900">
				<Download size={16} />
				SVG
			</button>
		</div>
	</div>
);

// --- Main Layout ---

export default function App() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
			{/* Navigation (Simplified) */}
			<main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Hero Section */}
				<section className="mb-24">
					<div className="max-w-4xl">
						<span className="mb-4 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-600">
							Brand Guidelines
						</span>
						<h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
							Use our brand <br className="hidden md:block" />
							<span className="text-teal-500">correctly.</span>
						</h1>
						<p className="mt-6 max-w-2xl text-xl text-slate-600 leading-relaxed">
							Our brand is more than just a logo. It's a system of design
							elements that helps us communicate who we are. Please use these
							guidelines to maintain consistency across all platforms.
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<button className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30">
								<Download size={18} />
								Download Brand Assets
							</button>
						</div>
					</div>
				</section>

				{/* Logo Section */}
				<section
					className="mb-24 scroll-mt-24"
					id="logo">
					<SectionHeading
						title="Logo Wordmark"
						description="The Ollyo logo, with its distinctive connected shapes, embodies our commitment to technological innovation and seamless integration. It represents harmony between code and culture."
					/>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<LogoCard
							title="Primary Logo"
							variant="full"
						/>
						<LogoCard
							title="Wordmark Only"
							variant="text"
						/>
						<LogoCard
							title="Icon Only"
							variant="icon"
						/>
					</div>
				</section>

				{/* Clearspace Section */}
				<section className="mb-24">
					<SectionHeading
						title="Anatomy & Clearspace"
						description="Our logo thrives with ample breathing room. It should remain unobstructed by other logos, text, or graphic elements. To ensure clarity, maintain the minimum clear space shown below."
					/>

					<div className="relative flex items-center justify-center rounded-3xl bg-slate-50 border border-slate-100 py-24 px-8 overflow-hidden">
						{/* Grid Background */}
						<div
							className="absolute inset-0 opacity-[0.03]"
							style={{
								backgroundImage:
									"linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
								backgroundSize: "40px 40px",
							}}
						/>

						{/* Clearspace Visual */}
						<div className="relative">
							{/* Clearspace Guides */}
							<div className="absolute -inset-12 border border-dashed border-teal-300 bg-teal-50/30">
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
							</div>

							{/* Logo */}
							<div className="relative z-10 bg-white p-2">
								<LogoPreview className="h-20 w-auto" />
							</div>
						</div>
					</div>
				</section>

				{/* Best Practices Section */}
				<section className="mb-24">
					<SectionHeading
						title="Best Practices"
						description="Adhere to our guidelines for using brand assets correctly. Avoid stretching, recoloring, or placing the logo on busy backgrounds."
					/>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{LOGO_DO_NOTS.map((item, idx) => (
							<div
								key={idx}
								className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
								<div className="aspect-[4/3] flex items-center justify-center p-8 bg-white border-b border-slate-100 overflow-hidden">
									<div
										className={`transition-transform duration-300 ${
											item.visualClass === "bg-pattern"
												? "relative w-full h-full flex items-center justify-center"
												: ""
										}`}>
										{item.visualClass === "bg-pattern" && (
											<div
												className="absolute inset-0 opacity-20 bg-black"
												style={{
													backgroundImage:
														"radial-gradient(circle, #000 2px, transparent 2px)",
													backgroundSize: "10px 10px",
												}}></div>
										)}

										<div
											className={`
                      ${item.visualClass === "scale-y-50" ? "scale-y-50" : ""}
                      ${item.visualClass === "rotate-45" ? "rotate-12" : ""}
                      ${
												item.visualClass === "opacity-30"
													? "opacity-20 blur-[1px]"
													: ""
											}
                    `}>
											<LogoPreview className="h-8 w-auto" />
										</div>

										{/* Big Red X Overlay */}
										<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/80">
											<div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-sm">
												<X
													size={24}
													strokeWidth={3}
												/>
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
				<section
					className="mb-24 scroll-mt-24"
					id="colors">
					<SectionHeading
						title="Brand Colors"
						description="Our primary brand color is Turquoise, which complements both light and dark backgrounds. We use a range of supporting colors to create depth and hierarchy."
					/>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
						{BRAND_COLORS.map((color) => (
							<ColorCard
								key={color.name}
								color={color}
							/>
						))}
					</div>
				</section>

				{/* Typography Preview (Bonus) */}
				<section className="mb-24">
					<SectionHeading
						title="Typography"
						description="We use a clean, geometric sans-serif typeface to convey modernity and clarity."
					/>
					<div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 md:p-12 overflow-hidden relative">
						<div className="grid gap-12 md:grid-cols-2 relative z-10">
							<div>
								<span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
									Headings
								</span>
								<div className="space-y-6">
									<div>
										<p className="text-5xl font-bold text-slate-900">Aa</p>
										<p className="mt-2 text-sm text-slate-500">Bold / 700</p>
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
										<p className="text-5xl font-normal text-slate-900">Aa</p>
										<p className="mt-2 text-sm text-slate-500">Regular / 400</p>
									</div>
									<div className="h-px bg-slate-200 w-full" />
									<p className="text-lg text-slate-600 leading-relaxed">
										Good design is obvious. Great design is transparent. We
										believe in creating tools that empower creators without
										getting in their way.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
