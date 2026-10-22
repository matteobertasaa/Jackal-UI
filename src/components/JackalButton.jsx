 import React from 'react';
    // IMPORTANTE: Importiamo 'motion' per dare vita agli elementi
     import { motion } from 'framer-motion';
    
     // Creiamo il nostro componente (è solo una funzione JavaScript!)
     const JackalButton = () => {
       return (
         // Usiamo <motion.button> invece di un normale <button> HTML.
         // Questo dice a React: "Questo bottone può essere animato!"
        <motion.button
   
          /* --- LA MAGIA DI MOTION --- */
          // whileHover: Cosa succede quando il mouse passa sopra?
          // scale: 1.05 significa "ingrandisci del 5%"
          whileHover={{ scale: 1.05 }}
   
          // whileTap: Cosa succede quando clicchi?
          // scale: 0.95 significa "rimpicciolisci leggermente" (effetto click tattile)
          whileTap={{ scale: 0.95 }}

          /* --- LO STILE DI TAILWIND --- */
          // relative = serve per gestire effetti interni
          // rounded-xl = bordi arrotondati
          // bg-gradient-to-r from-orange-600 to-orange-400 = colore sfumato
          // shadow-lg = ombra sotto il bottone
          className="
            relative px-8 py-4 font-bold text-white
            rounded-xl overflow-hidden shadow-lg
            bg-gradient-to-r from-orange-600 to-orange-400
          "
        >
          {/* Testo del bottone */}
          <span className="relative z-10">
            Hover Me
          </span>
   
          {/* EFFETTO EXTRA: Una patina bianca invisibile che appare quando passi il mouse */}
          {/* opacity-0 = invisibile di base. hover:opacity-10 = visibile al 10% col mouse */}
          <div className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
        </motion.button>
      );
    };

    export default JackalButton; // Esportiamo il bottone per usarlo in App.jsx