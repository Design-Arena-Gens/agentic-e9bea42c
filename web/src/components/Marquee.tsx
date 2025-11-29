type Props = {
  items: string[];
  speedMs?: number;
};

export function Marquee({ items, speedMs = 22000 }: Props) {
  const repeated = [...items, ...items, ...items];
  return (
    <section className="py-10 md:py-12">
      <div className="marquee border-y border-white/10 py-4">
        <div
          className="marquee-track"
          style={{ animationDuration: `${Math.max(6000, speedMs)}ms` }}
        >
          {repeated.map((txt, i) => (
            <span
              key={`${txt}-${i}`}
              className="mx-6 inline-flex items-center gap-3 text-sm uppercase tracking-wider text-white/60"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
              {txt}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
