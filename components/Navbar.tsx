"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { navLinks, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 50;

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-all duration-500",
				scrolled
					? "border-b border-slate-line/60 bg-ivory/90 backdrop-blur-xl shadow-soft"
					: "border-b border-transparent bg-transparent",
			)}
		>
			<nav className="container-luxe flex items-center justify-between gap-4 py-1 sm:py-1.5">
				{/* Logo */}
				<a
					href="#accueil"
					className="relative z-10 flex shrink-0 items-center"
					aria-label="Cynthia Cosmétique — accueil"
				>
					<img
						src="/cynthia-logo.svg"
						alt="Cynthia Cosmétique"
						width={56}
						height={56}
						className="h-10 w-10 sm:h-12 sm:w-12"
					/>
				</a>

				{/* Centered menu (desktop) */}
				<ul className="hidden items-center gap-1 lg:flex">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className={cn(
									"group relative px-4 py-2 text-sm font-medium uppercase tracking-[0.08em] transition-colors",
									"text-royal/80 hover:text-royal",
								)}
							>
								{link.label}
								<span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-deep transition-transform duration-300 group-hover:scale-x-100" />
							</a>
						</li>
					))}
				</ul>

				{/* Right — CTA */}
				<div className="flex items-center gap-3">
					<Button
						href={waLink()}
						external
						size="md"
						className="hidden animate-pulse-glow shadow-gold sm:inline-flex"
						icon={<WhatsAppIcon className="h-4 w-4" />}
					>
						Réserver
					</Button>

					{/* Mobile toggle */}
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						className={cn(
							"inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
							"border border-slate-line/60 text-royal hover:bg-cream",
							scrolled ? "bg-ivory" : "bg-ivory/70 backdrop-blur",
						)}
						aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
						aria-expanded={open}
					>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{open ? (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className="overflow-hidden border-t border-slate-line/50 bg-ivory/95 backdrop-blur-xl lg:hidden"
					>
						<ul className="container-luxe flex flex-col gap-1 py-6">
							{navLinks.map((link, i) => (
								<motion.li
									key={link.href}
									initial={{ opacity: 0, x: -16 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.05 * i }}
								>
									<a
										href={link.href}
										onClick={() => setOpen(false)}
										className="block rounded-xl px-4 py-3 text-base font-medium uppercase tracking-[0.08em] text-royal/85 transition-colors hover:bg-cream hover:text-royal"
									>
										{link.label}
									</a>
								</motion.li>
							))}
							<li className="mt-3 px-1">
								<Button
									href={waLink()}
									external
									size="lg"
									className="w-full"
									icon={<WhatsAppIcon className="h-4 w-4" />}
								>
									Réserver via WhatsApp
								</Button>
							</li>
						</ul>
					</motion.div>
				) : null}
			</AnimatePresence>
		</motion.header>
	);
}
