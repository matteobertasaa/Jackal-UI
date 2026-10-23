import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function JackalHowlButton({
  label = "howling",
  onClick,
  ...props
}) {
  const red = useReducedMotion();
  const [waves, setWaves] = useState([]);
  const mx = useMotionValue(0),
    my = useMotionValue(0);

  const magX = useTransform(
    useSpring(mx, { stiffness: 150, damping: 15 }),
    [-1, 1],
    [-8, 8],
  );
  const magY = useTransform(
    useSpring(my, { stiffness: 150, damping: 15 }),
    [-1, 1],
    [-8, 8],
  );

  const handleMove = (e) => {
    if (red) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - left) / width - 0.5) * 2);
    my.set(((e.clientY - top) / height - 0.5) * 2);
  };

  const handleDown = (e) => {
    if (red) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setWaves((p) => [
      ...p,
      { id: Date.now(), x: e.clientX - left, y: e.clientY - top },
    ]);
  };

  return (
    <motion.button
      onPointerDown={(e) => {
        handleDown(e);
        onClick?.(e);
      }}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        if (!red) {
          mx.set(0);
          my.set(0);
        }
      }}
      style={{ x: red ? 0 : magX, y: red ? 0 : magY }}
      whileTap={
        red ? { backgroundColor: "var(--color-amber)" } : { scale: 0.96 }
      }
      className="group relative overflow-hidden rounded-xl bg-fur px-8 py-4 font-semibold text-night shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-night"
      {...props}
    >
      <span className="relative z-10">{label}</span>
      {!red && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-[100%] w-[100%] rotate-12 bg-linear-to-r from-transparent via-sand/30 to-transparent"
          initial={{ left: "-100%" }}
          whileHover={{ left: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      {!red &&
        waves.map((w) => (
          <div
            key={w.id}
            className="pointer-events-none absolute z-0"
            style={{ left: w.x, top: w.y }}
          >
            {[0, 0.15, 0.3].map((delay, i) => (
              <motion.div
                key={`${w.id}-${i}`}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.7, delay, ease: "easeOut" }}
                onAnimationComplete={() =>
                  i === 2 && setWaves((p) => p.filter((ow) => ow.id !== w.id))
                }
                className="absolute -ml-10 -mt-10 h-20 w-20 rounded-full border-2 border-amber bg-amber/20"
              />
            ))}
          </div>
        ))}
    </motion.button>
  );
}
