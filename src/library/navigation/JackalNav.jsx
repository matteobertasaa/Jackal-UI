import { useState, useId, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export default function JackalNav({
  items = [
    { id: "home", label: "Home" },
    { id: "components", label: "Components" },
    { id: "docs", label: "Docs" },
    { id: "github", label: "GitHub" },
  ],
  defaultActive = "home",
}) {
  const [active, setActive] = useState(defaultActive);
  const [hovered, setHovered] = useState(null);
  const [blink, setBlink] = useState(false);
  const uid = useId(),
    red = useReducedMotion();

  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const mask = useMotionTemplate`radial-gradient(150px circle at ${mx}px ${my}px, rgba(227,176,75,0.15), transparent 80%)`;

  useEffect(() => {
    if (red) return;
    const i = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 4000);
    return () => clearInterval(i);
  }, [red]);

  return (
    <nav
      onPointerMove={(e) => {
        if (!red) {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }
      }}
      onPointerLeave={() => setHovered(null)}
      className="relative flex w-full max-w-max items-center overflow-x-auto overflow-y-hidden rounded-full border border-earth bg-den p-1.5 shadow-lg"
    >
      {!red && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{ background: mask }}
          animate={{ opacity: hovered ? 1 : 0 }}
        />
      )}
      {items.map((i) => {
        const isAct = active === i.id,
          hasPill = hovered ? hovered === i.id : isAct;
        return (
          <button
            key={i.id}
            onClick={() => setActive(i.id)}
            onMouseEnter={() => setHovered(i.id)}
            onFocus={() => setHovered(i.id)}
            onBlur={() => setHovered(null)}
            aria-current={isAct ? "page" : undefined}
            className={`relative flex items-center justify-center rounded-full px-5 pt-3.5 pb-2 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-den transition-colors ${isAct || hovered === i.id ? "text-sand" : "text-back hover:text-sand"}`}
          >
            {hasPill && (
              <motion.div
                layoutId={`pill-${uid}`}
                className="absolute inset-0 z-0 rounded-full border border-fur/30 bg-fur/20 shadow-[0_0_12px_rgba(191,138,71,0.2)]"
                transition={
                  red
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 400, damping: 30 }
                }
              >
                <div
                  aria-hidden="true"
                  className="absolute top-1.5 left-1/2 flex -translate-x-1/2 gap-1.5 opacity-90"
                >
                  {[1, 2].map((k) => (
                    <motion.div
                      key={k}
                      animate={{ scaleY: blink ? 0.1 : 1 }}
                      className="h-1 w-1.5 rounded-full bg-amber shadow-[0_0_4px_#E3B04B]"
                    />
                  ))}
                </div>
              </motion.div>
            )}
            <span className="relative z-10 flex flex-col items-center">
              {i.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
