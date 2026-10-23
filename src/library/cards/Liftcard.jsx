import { motion } from "framer-motion";

export default function Liftcard({
  title = "Lift Card",
  description = "Hover to discover the magic.",
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative w-full max-w-[18rem] overflow-hidden rounded-2xl border border-earth bg-den p-6 shadow-2xl"
    >
      <div className="absolute inset-0 bg-linear-to-br from-fur/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute top-0 left-1/2 h-[2px] w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-amber to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-lg bg-fur/20 p-3 text-amber ring-1 ring-fur/30">
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-sand transition-colors group-hover:text-amber">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-back">{description}</p>
      </div>
    </motion.div>
  );
}
