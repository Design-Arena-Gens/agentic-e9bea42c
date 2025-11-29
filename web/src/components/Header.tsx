"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? "backdrop-blur-md/50 bg-black/40" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <Link href="#top" className="font-semibold tracking-tight text-xl">
          Buzzworthy
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="opacity-80 hover:opacity-100">
            Work
          </a>
          <a href="#about" className="opacity-80 hover:opacity-100">
            About
          </a>
          <a href="#contact" className="opacity-80 hover:opacity-100">
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-zinc-200 transition"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
