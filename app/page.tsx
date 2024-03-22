import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import StackLayers from "@/components/StackLayers";
import Operations from "@/components/Operations";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <StackLayers />
      <Operations />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
