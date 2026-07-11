import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { Hero } from "@/src/components/sections/Hero"
import { Experience } from "@/src/components/sections/Experience";
import { Projects } from "@/src/components/sections/Projects";
import { Skills } from "@/src/components/sections/Skills";
import { Footer } from "@/src/components/layout/Footer";
import { Header } from "@/src/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}