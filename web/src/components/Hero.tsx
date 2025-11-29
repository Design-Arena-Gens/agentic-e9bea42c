export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32">
      <div className="container">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
          Award-winning creative studio
          <span className="inline-block h-1 w-1 rounded-full bg-white/60" />
          Est. 2025
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold tracking-tight">
          We craft bold brands
          <br className="hidden md:block" /> and immersive websites.
        </h1>
        <p className="mt-6 max-w-2xl text-white/70 text-lg">
          Strategy, design, and engineering fused into memorable digital
          experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition"
          >
            See our work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.18),transparent_60%)]"
      />
    </section>
  );
}
