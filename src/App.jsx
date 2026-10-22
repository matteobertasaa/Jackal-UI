import React from 'react';
import JackalButton from './components/JackalButton';

function App() {
  return (
    // 1. TAILWIND: Creiamo lo sfondo.
    // min-h-screen = occupa tutta l'altezza dello schermo
    // bg-gray-950 = grigio molto scuro, quasi nero
    // text-white = testo bianco
    // flex, items-center, justify-center = centra tutto perfettamente in mezzo allo schermo
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center font-sans">

      {/* 2. IL TITOLO */}
      <div className="text-center mb-12">
        {/* bg-gradient-to-r = Sfumatura da destra a sinistra (da arancione a giallo) */}
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300">
          Jackal UI
        </h1>
        <p className="text-gray-400 text-lg">Copy-paste React animations.</p>
      </div>

      {/* 3. L'AREA DEL COMPONENTE */}
      {/* Questo è un "tavolo da lavoro" dove appoggeremo i nostri componenti */}
      {/* backdrop-blur-sm = crea un effetto vetro sfocato (Glassmorphism) */}
      <div className="p-12 border border-gray-800 rounded-3xl bg-gray-900/50 backdrop-blur-sm shadow-2xl flex items-center justify-center min-w-[300px] min-h-[200px]">

        <JackalButton />

      </div>
    </div>
  );
}

export default App;