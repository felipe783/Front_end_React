import { motion } from "motion/react";
import * as tudo from "./animaconfig";

export function Animated({ children, className }) {
  
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

export function Botao({ children, className }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05, y: -2 }} /*Quando passa por cima ele aumenta*/ 
      whileTap={{ scale: 0.9, y: 1 }} /*Quando clica ele diminui*/ 
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
}

export function Lista_ul({ children, className }) {
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

export function Lista_li({className}) {
  /*Todos os itens são unicos */ 
  return (
    <>
      {tudo.variaveis_lista.features.map((item) => ( 
        /*
        Cada item é um objeto do array, e cada objeto tem "texto" "rota"
        */ 
        <motion.li 
          className={className} /*Nome da classe*/ 
          key={item} /*O item*/
          variants={tudo.variaveis_lista.item} 
          onClick={() => document.getElementById(item.rota).scrollIntoView({behavior:"smooth"})} /*Navegar quando clica*/ 
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