type WorkItem = {
  title: string;
  tag: string;
  subtitle: string;
  color: string;
};

const WORK: WorkItem[] = [
  {
    title: "Lucid Coffee",
    tag: "Brand + Web",
    subtitle: "Elevating a direct-to-consumer caffeine icon.",
    color: "from-rose-500 to-red-400",
  },
  {
    title: "Nova Health",
    tag: "Product Design",
    subtitle: "Simplifying care with a compassionate platform.",
    color: "from-teal-400 to-emerald-400",
  },
  {
    title: "Astra Bank",
    tag: "Design System",
    subtitle: "Trustworthy fintech with a human voice.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "Orbit Travel",
    tag: "Interactive",
    subtitle: "An immersive booking experience among the stars.",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Lumen AI",
    tag: "Identity",
    subtitle: "A luminous brand for an intelligent platform.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Field Notes",
    tag: "Editorial",
    subtitle: "A tactile journal meets digital craft.",
    color: "from-lime-400 to-green-500",
  },
];

export function WorkGrid() {
  return (
    <section id="work" className="pt-24 md:pt-32">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Selected work
          </h2>
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10 transition"
          >
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {WORK.map((w, i) => (
            <article
              key={w.title}
              className="card overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
            >
              <div
                className={`h-48 md:h-64 bg-gradient-to-tr ${w.color} opacity-90`}
              />
              <div className="p-5 md:p-6">
                <div className="text-xs uppercase tracking-widest text-white/60">
                  {w.tag}
                </div>
                <h3 className="mt-2 text-2xl font-semibold">{w.title}</h3>
                <p className="mt-1 text-white/70">{w.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
