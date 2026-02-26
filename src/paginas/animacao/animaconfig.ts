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

/* 
! Variaveis da lista completa
*/ 
export const variaveis_lista = {
  features: [
    {texto:"Sobre o Projeto", rota:"projeto"}, 
    {texto:"Funcionalidades Principais", rota:"funcionalidade"}, 
    {texto:"Stack Técnica", rota:"stack"}
  ],

  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    },
  },

  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
};