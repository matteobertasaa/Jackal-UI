import { motion } from "framer-motion";

export default function ScaleButton({ label = "Hover Me" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group relative overflow-hidden rounded-xl bg-linear-to-r from-fur to-amber px-8 py-4 font-bold text-night shadow-lg transition-all hover:opacity-90"
    >
      <span className="relative z-10">{label}</span>
      <div className="pointer-events-none absolute inset-0 bg-sand opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
    </motion.button>
  );
}
