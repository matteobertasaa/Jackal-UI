import { useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function JackalCard({
  title = "Jackal Card",
  text = "Di notte lo sciacallo vede tutto.",
  tag = "Signature",
}) {
  const red = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [blink, setBlink] = useState(false);

  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const mask = useMotionTemplate`radial-gradient(400px circle at ${mx}px ${my}px, rgba(227,176,75,0.15), transparent 80%)`;

  const px = useTransform(
    useSpring(mx, { stiffness: 100, damping: 20 }),
    [0, 320],
    [-3, 3],
  );
  const py = useTransform(
    useSpring(my, { stiffness: 100, damping: 20 }),
    [0, 160],
    [-2, 2],
  );

  const handleMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - left);
    my.set(e.clientY - top);
  };

  const scaleY = blink ? 0.1 : red || hover ? 1 : 0.1;

  return (
    <motion.div
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => {
        setHover(false);
        mx.set(160);
        my.set(80);
      }}
      onPointerMove={handleMove}
      onPointerDown={() => {
        if (!red) {
          setBlink(true);
          setTimeout(() => setBlink(false), 200);
        }
      }}
      whileTap={red ? {} : { scale: 0.98 }}
      className="group relative w-full max-w-[20rem] overflow-hidden rounded-2xl border border-earth bg-den p-6 shadow-2xl transition-colors hover:border-fur/50"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{ background: mask }}
        animate={{ opacity: hover ? 1 : 0 }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-sand">{title}</h3>
          <div aria-hidden="true" className="flex gap-2 pt-1">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="relative flex h-3 w-5 items-center justify-center overflow-hidden rounded-[50%] bg-night shadow-[0_0_2px_rgba(227,176,75,0.5)]"
              >
                <motion.div
                  className="absolute h-full w-full origin-center bg-amber"
                  animate={{ scaleY }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {!red && (
                    <motion.div
                      className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night"
                      style={{ x: px, y: py }}
                    />
                  )}
                </motion.div>
                <div className="absolute inset-0 rounded-[50%] border-t border-amber opacity-30 mix-blend-screen" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-6 text-sm leading-relaxed text-back">{text}</p>
          <span className="inline-flex rounded-md border border-fur/30 bg-fur/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber backdrop-blur-md">
            {tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
