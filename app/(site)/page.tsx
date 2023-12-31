import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "INFORM by SDID",
  description: "This is Home for INFORM",
  // other metadata
};


export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <About />
      {/* <Feature /> */}
      {/*<FeaturesTab />
       <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
