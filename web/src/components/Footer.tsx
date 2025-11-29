export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>&copy; {new Date().getFullYear()} Buzzworthy (Clone)</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Dribbble
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
