import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  title = "Tilt 3D Card",
  description = "Move your mouse over me to trigger 3D.",
}) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const conf = { stiffness: 150, damping: 15 };
  const rotateX = useTransform(
    useSpring(y, conf),
    [-0.5, 0.5],
    ["15deg", "-15deg"],
  );
  const rotateY = useTransform(
    useSpring(x, conf),
    [-0.5, 0.5],
    ["-15deg", "15deg"],
  );

  const handleMove = (e) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full max-w-[18rem] rounded-2xl border border-earth bg-den p-8 shadow-2xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-fur/5 to-transparent" />
      <div style={{ transform: "translateZ(60px)" }} className="relative z-10">
        <div className="mb-6 inline-flex rounded-xl bg-fur/20 p-3 text-amber shadow-inner ring-1 ring-fur/30">
          <svg
            className="size-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-sand">{title}</h3>
        <p className="text-sm leading-relaxed text-back">{description}</p>
        <button className="mt-6 w-full cursor-pointer rounded-lg bg-earth py-2 text-sm font-medium text-sand transition-colors hover:bg-steel/50">
          Explore 3D
        </button>
      </div>
    </motion.div>
  );
}
