import { motion, useReducedMotion } from 'framer-motion'

export default function JackalLogo({ className = "h-10 w-10" }) {
  // Disabilita le animazioni se l'utente ha impostato preferenze di sistema per ridurre il movimento
  const shouldReduceMotion = useReducedMotion()

  const earAnimation = shouldReduceMotion ? {} : {
    rotate: [0, 8, -5, 0],
    transition: { duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }
  }

  const eyeAnimation = shouldReduceMotion ? {} : {
    scaleY: [1, 0.1, 1, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 5, times: [0, 0.04, 0.08, 1], repeat: Infinity }
  }

  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={shouldReduceMotion ? {} : { rotate: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      aria-label="Jackal UI logo"
      role="img"
    >
      {/* Orecchio Sinistro */}
      <motion.path 
        d="M20 50 L10 10 L40 30 Z" 
        className="fill-fur"
        animate={earAnimation}
        style={{ originX: "25px", originY: "30px" }}
      />
      <motion.path 
        d="M22 45 L15 18 L35 32 Z" 
        className="fill-sand"
        animate={earAnimation}
        style={{ originX: "25px", originY: "30px" }}
      />

      {/* Orecchio Destro */}
      <motion.path 
        d="M80 50 L90 10 L60 30 Z" 
        className="fill-fur"
        animate={earAnimation}
        style={{ originX: "75px", originY: "30px" }}
      />
      <motion.path 
        d="M78 45 L85 18 L65 32 Z" 
        className="fill-sand"
        animate={earAnimation}
        style={{ originX: "75px", originY: "30px" }}
      />

      {/* Testa e Muso */}
      <path d="M20 50 L50 95 L80 50 L50 25 Z" className="fill-fur" />
      <path d="M40 70 L50 90 L60 70 L50 55 Z" className="fill-sand" />
      <path d="M46 90 L54 90 L50 95 Z" className="fill-night" />

      {/* Occhi */}
      <motion.ellipse cx="35" cy="50" rx="4" ry="4" className="fill-amber" animate={eyeAnimation} style={{ originX: "35px", originY: "50px" }} />
      <motion.ellipse cx="65" cy="50" rx="4" ry="4" className="fill-amber" animate={eyeAnimation} style={{ originX: "65px", originY: "50px" }} />
    </motion.svg>
  )
}