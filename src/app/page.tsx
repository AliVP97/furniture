import {
  Hero,
  Products,
  WhyChoosingUs,
  Experience,
  Footer,
  Materials,
  Testimonials,
} from "./modules";

export default function Home() {
  return (
    <div className="w-screen bg-white text-[#1e1e1e]">
      <Hero />
      <WhyChoosingUs />
      <Products />
      <Experience />
      {/* <Materials /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
}
