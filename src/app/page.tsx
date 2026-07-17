import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-white selection:bg-brand-primary selection:text-white">
      <Navbar />

      {/* Background Particles Wrapper (Simulated) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-brand-primary/20 rounded-full blur-[1px] animate-[ping_3s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] right-[10%] w-3 h-3 bg-brand-accent/20 rounded-full blur-[1px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[15%] w-2 h-2 bg-brand-light/20 rounded-full blur-[1px] animate-[ping_5s_ease-in-out_infinite]" />
      </div>

      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Portfolio />
      <FAQ />
      <Contact />

      <Footer />
    </main>
  );
}
