"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Filaments } from "@/components/ui/Filaments";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * PrestationHero — Refined hero for the services page.
 * Portrait image is positioned absolutely on the right and fills the full section height.
 */
export function PrestationHero() {
  return (
    <Reveal as="section" variant="scroll" className="relative w-full overflow-hidden bg-ivory">
      {/* ─── Layer 1: Global Silk Background ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/left-image-effect.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_70%] opacity-60"
          aria-hidden
        />
      </div>

      {/* Filaments dorés */}
      <Filaments intensity="subtle" />

      {/* ─── Layer 2: Main Portrait (Right) — absolute, fills section height ─── */}
      <div className="absolute inset-y-0 right-0 z-10 hidden w-[48%] lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/assets/images/hero-right-image.png"
            alt="Portrait Cynthia Cosmétique"
            fill
            priority
            className="object-cover object-[45%_15%]"
          />
        </motion.div>
      </div>

      {/* ─── Layer 3: Content (Left) ─── */}
      <div className="container-luxe relative z-20 flex min-h-[540px] flex-col justify-center pt-28 pb-10 sm:min-h-[600px] lg:min-h-[70vh] lg:pt-0 lg:pb-0">
        <div className="flex max-w-xl flex-col gap-1 lg:gap-2 xl:max-w-2xl">
          {/* Eyebrow — collé au titre */}
          <Reveal direction="down" delay={0.2}>
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                <Image
                  src="/assets/images/lotus-expertise.png"
                  alt="Lotus"
                  fill
                  sizes="24px"
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <span className="eyebrow !text-[10px] !tracking-[0.2em] text-gold-deep/80 sm:!text-[11px]">
                L'expertise au service de votre beauté
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.3}>
            <h1 className="font-display text-2xl font-bold leading-[1.08] tracking-tight text-royal sm:text-3xl md:text-5xl lg:text-5xl xl:text-[4rem]">
              <span>Nos</span>{" "}
              <span className="text-gradient-gold font-normal italic">
                Prestations
              </span>
            </h1>
          </Reveal>

          {/* Small decorative line */}
          <Reveal delay={0.4} direction="none">
            <div className="h-0.5 w-16 bg-royal/10 sm:w-20">
              <div className="h-full w-1/3 bg-gold-deep" />
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.5}>
            <p className="max-w-md text-xs leading-relaxed text-slate-ink/80 sm:text-sm md:text-base lg:text-base xl:text-lg">
              Des soins sur-mesure, des techniques de pointe et une approche
              personnalisée pour révéler la beauté naturelle de votre peau.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.6} direction="up">
            <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href={waLink("Bonjour, je souhaite réserver un soin.")}
                external
                variant="gold"
                size="lg"
                className="animate-pulse-glow shadow-gold hover:shadow-lift"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                Réserver maintenant
              </Button>
              <Button
                href="/contact"
                variant="outline-gold"
                size="lg"
                className="group border-gold-deep/30"
              >
                Nous contacter
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile Portrait Background (Faded) */}
      <div className="absolute inset-0 z-10 block lg:hidden">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/hero-right-image.png"
            alt=""
            fill
            className="object-cover object-top opacity-25"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/40 to-ivory" />
        </div>
      </div>
    </Reveal>
  );
}
