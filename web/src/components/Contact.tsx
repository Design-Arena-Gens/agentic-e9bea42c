export function Contact() {
  return (
    <section id="contact" className="pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="container">
        <div className="rounded-3xl bg-white text-black p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-black/70">
                We?d love to hear about your goals and how we can help.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a
                href="mailto:hello@example.com"
                className="inline-flex rounded-full bg-black text-white px-6 py-3 font-medium hover:bg-zinc-800 transition"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
