import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { Landing } from "@/src/components/sections/Landing";
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
        <Landing />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}