export default function Home({ setPage }) {
  return (
    <main className="relative overflow-hidden flex flex-col items-center justify-center px-6 py-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(227,176,75,0.15), transparent)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-earth bg-den px-4 py-1.5 text-xs text-back backdrop-blur-sm">
          <span className="mr-2 flex size-2 rounded-full bg-amber shadow-[0_0_8px_rgba(227,176,75,0.8)]"></span>
          New components for React 19
        </div>
        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-sand md:text-7xl">
          The foundation for your <br />
          <span className="bg-linear-to-r from-fur to-amber bg-clip-text text-transparent">
            Design System
          </span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-back md:text-xl">
          Animated React components built with Framer Motion and Tailwind CSS
          v4. Copy, paste, and ship unforgettable websites in seconds.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setPage("components")}
            className="cursor-pointer rounded-xl bg-fur px-8 py-4 font-bold text-night shadow-[0_0_30px_rgba(191,138,71,0.2)] transition-transform hover:scale-105 hover:bg-amber active:scale-95"
          >
            Browse Components
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center rounded-xl bg-earth px-8 py-4 font-bold text-sand transition-colors hover:bg-steel"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
