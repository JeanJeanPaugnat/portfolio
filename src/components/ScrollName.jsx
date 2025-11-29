"use client";

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Constante définie en dehors du composant pour éviter les problèmes d'hydratation
const NAME_TEXT = "JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT / JEAN PAUGNAT /";

export default function ScrollName() {
  const targetRef = useRef(null);

  // Configuration de scroll mémorisée
  const scrollConfig = useMemo(() => ({
    target: targetRef,
    offset: ["start end", "end start"]
  }), []);

  // Détection du scroll sur cet élément précis
  const { scrollYProgress } = useScroll(scrollConfig);

  // Transformation : Le texte bouge de droite (0%) vers la gauche (-10%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={targetRef} className="flex overflow-hidden w-full py-10">
      <motion.h1
        style={{ x, color: 'var(--neutral-900)' }}
        className="font-black whitespace-nowrap leading-[0.65] will-change-transform text-[clamp(2.5rem,8vw,12rem)] sm:text-[clamp(4rem,12vw,18rem)] md:text-[clamp(6rem,15vw,24rem)] lg:text-[clamp(8rem,18vw,30rem)] xl:text-[clamp(10rem,20vw,35rem)]"
      >
        {NAME_TEXT}
      </motion.h1>
    </div>
  );
}