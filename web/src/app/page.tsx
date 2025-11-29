import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WorkGrid } from "@/components/WorkGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee
          items={[
            "Branding",
            "Websites",
            "Product",
            "Ecommerce",
            "Design Systems",
            "Content",
            "Strategy",
          ]}
        />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
