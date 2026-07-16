"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const treatments = [
  {
    name: "Clean Face Detox",
    description: "Nettoyage profond et purification",
    price: "5 000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    name: "Glow Therapy",
    description: "Soin éclat illuminateur et coup d'éclat",
    price: "7 000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    name: "Skin Drink",
    description: "Hydratation intense et repulpante",
    price: "10 000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
  {
    name: "Soin Renaissance",
    description: "Régénération globale anti-âge et fermeté",
    price: "15 000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

const easeLuxe = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const fadeSlideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeLuxe } },
};

const fadeSlideLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeLuxe } },
};

export function SoinsVisage() {
  return (
    <Reveal as="section" variant="scroll" className="relative overflow-hidden bg-cream py-6 md:py-10">
      {/* Décorations animées — float subtil */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-0 h-full w-[20%] opacity-20"
      >
        <img
          src="/assets/images/floor-dore-image.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{ transform: "scaleX(-1)" }}
        />
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute left-0 top-0 h-full w-[20%] opacity-15"
      >
        <img
          src="/assets/images/forme-left.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="container-luxe relative z-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.7fr_0.6fr_1fr] lg:gap-5">
          {/* ─── Colonne 1 : Image — fade + slide left ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeSlideLeftVariants}
            className="flex"
          >
            <div className="flex w-full overflow-hidden rounded-xl bg-royal shadow-card">
              <div className="relative h-full w-full min-h-[200px] md:min-h-[260px]">
                <Image
                  src="/assets/images/cleanup.png"
                  alt="Soin du visage expert"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* ─── Colonne 2 : Texte + Bouton — fade + slide up ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerVariants}
            className="flex flex-col gap-2 py-6"
          >
            <motion.span
              variants={fadeSlideUpVariants}
              className="eyebrow !text-[9px] !tracking-[0.18em] text-gold-deep/80 sm:!text-[10px]"
            >
              Soins du visage
            </motion.span>

            <motion.h2
              variants={fadeSlideUpVariants}
              className="font-display text-lg font-bold leading-[1.1] tracking-tight text-royal sm:text-xl lg:text-2xl"
            >
              Une peau saine, éclatante et{" "}
              <span className="text-gradient-gold font-normal italic">
                équilibrée.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeSlideUpVariants}
              className="h-0.5 w-8 bg-royal/10 sm:w-10"
            >
              <div className="h-full w-1/3 bg-gold-deep" />
            </motion.div>

            <motion.p
              variants={fadeSlideUpVariants}
              className="max-w-[260px] text-xs leading-relaxed text-slate-ink/80"
            >
              Nos soins visages sont conçus pour répondre aux besoins
              specifiques de votre peau avec des produits professionnels et des
              techniques expertes.
            </motion.p>

            <motion.div variants={fadeSlideUpVariants}>
              <Link
                href="#soins-visage"
                className="mt-0.5 inline-flex items-center justify-center rounded-full bg-royal px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-ivory shadow-soft transition-all hover:bg-royal-light hover:shadow-lift sm:w-fit"
              >
                Voir tous les soins
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── Colonne 3 : Cartes en 2x2 — staggered ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            className="grid grid-cols-2 gap-2 sm:gap-2.5"
          >
            {treatments.map((treatment, i) => (
              <motion.div
                key={treatment.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: easeLuxe },
                  },
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 18px 50px -20px rgba(9, 52, 133, 0.14)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                className="flex h-full flex-col gap-1 rounded-lg bg-ivory p-2.5 shadow-soft ring-1 ring-slate-line/20 hover:shadow-card sm:p-3"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold-deep"
                >
                  {treatment.icon}
                </motion.div>
                <h3 className="font-display text-[11px] font-bold text-royal sm:text-xs">
                  {treatment.name}
                </h3>
                <p className="text-[10px] leading-relaxed text-slate-soft sm:text-[11px]">
                  {treatment.description}
                </p>
                <div className="mt-auto pt-0.5">
                  <p className="text-[10px] font-semibold text-gold-deep sm:text-[11px]">
                    Dès{" "}
                    <span className="font-bold">{treatment.price} FCFA</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
}
