"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
    title: "Réservation",
    description: "Prenez rendez-vous facilement en ligne.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 20.105V4.875A2.625 2.625 0 016.375 2.25h11.25A2.625 2.625 0 0120.25 4.875v10.5A2.625 2.625 0 0117.625 18H6.375a2.625 2.625 0 01-2.625-2.625z"
        />
      </svg>
    ),
    title: "Conseils personnalisés",
    description: "Recevez des recommandations adaptées à votre peau.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    ),
    title: "Informations",
    description: "Posez vos questions sur nos soins et services.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    title: "Suivi & Accompagnement",
    description: "Nous restons à vos côtés avant, pendant et après.",
  },
];

export function WhyContactSection() {
  return (
    <section className="bg-[#FAFAF8] py-8 md:py-10">
      <div className="container-luxe">
        <Reveal variant="scroll" direction="none">
          <p className="eyebrow text-center">
            Pourquoi nos clientes nous contactent
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08} variant="scroll">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-2xl bg-white px-5 py-6 text-center transition-all duration-300 hover:shadow-card"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(9,52,133,0.04), 0 4px 12px rgba(9,52,133,0.03)",
                }}
              >
                {/* Ligne dorée subtile en haut */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-deep/20 to-transparent" />

                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/10 to-gold-deep/5 text-gold-deep ring-1 ring-gold-deep/10 transition-all duration-300 group-hover:from-gold/15 group-hover:to-gold-deep/10 group-hover:ring-gold-deep/20">
                  {reason.icon}
                </div>
                <h3 className="font-display text-[15px] font-bold text-royal">
                  {reason.title}
                </h3>
                <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-slate-ink/80">
                  {reason.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
