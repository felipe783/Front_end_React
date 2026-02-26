import { motion } from "framer-motion";
import * as tudo from "./animaconfig";


export function Animated({ children, className }:{
  children: React.ReactNode
  className?: string /* O "?" pro type ele considera como uma prop opcional sem o "?" seria obrigado a colocar ela */
}) {
  return (
    <motion.div
      className={className}
      variants={tudo.botaoAnimado}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

/* 
!Botão 
*/ 
export function Botao({ children, className }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.button>
  );
}

/*
! Card descrição
*/
export function Card({children, className}:{
  children:React.ReactNode 
  className?:string}){
    return(
      <motion.div
        className={className}
        whileHover = {{scale:1.05, y:-2}}
        transition= {{type:"spring", stiffness:200}}
      >
        {children}
      </motion.div>
    )
  }