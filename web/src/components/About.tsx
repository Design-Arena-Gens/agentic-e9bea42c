export function About() {
  return (
    <section id="about" className="pt-24 md:pt-32">
      <div className="container grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-5">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What we do
          </h2>
        </div>
        <div className="md:col-span-7 text-white/80 leading-relaxed">
          <p>
            We partner with ambitious brands to shape identities, craft world?class
            websites, and launch products that stand out. Our team blends
            strategy, design, and engineering to ship work that performs.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="rounded-xl border border-white/10 px-4 py-3">
              Brand Identity
            </li>
            <li className="rounded-xl border border-white/10 px-4 py-3">
              Web Design & Development
            </li>
            <li className="rounded-xl border border-white/10 px-4 py-3">
              Product & UI/UX
            </li>
            <li className="rounded-xl border border-white/10 px-4 py-3">
              Design Systems
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
