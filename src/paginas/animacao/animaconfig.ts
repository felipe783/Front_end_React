import type { Variants } from "framer-motion";

export const botaoAnimado: Variants = {
  hidden: { opacity: 0, y: 780 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};