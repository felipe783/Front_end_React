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

export function Lista_ul({ children, className }:{
  children: React.ReactNode 
  className?:string
}) {
  return (
    <motion.ul
      className={className}
      variants={tudo.variaveis_lista.container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
}

export function Lista_li({className}:{
  className?:string
}) {
  /*Todos os itens são unicos */ 
  return (
    <>
      {tudo.variaveis_lista.features.map((item) => ( 
        /*
        Cada item é um objeto do array, e cada objeto tem "texto" "rota"
        */ 
        <motion.li 
          className={className} /*Nome da classe*/ 
          key={item.rota} /*O item*/
          variants={tudo.variaveis_lista.item} 
          onClick={() => document.getElementById(item.rota)?.scrollIntoView ({behavior:"smooth"})} /*Navegar quando clica, sem o "?" ele pode dar null e o TS reclamar então é opcional*/ 
          whileHover= {{scale:1.05, y:-2 }}
          whileTap = {{scale:0.9, y:1}}
          transition= {{type:"spring", stiffness:200}}
        >  
          {item.texto} 
        </motion.li>
      ))}
    </>
  );
}