import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import Contact from "~/sections/Home-3/Contact";
import Hero from "~/sections/Home-3/Hero";
import Portfolio from "~/sections/Home-3/Portfolio";
import Team from "~/sections/Home-3/Team";

import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";

export default function HomeThree() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderTwo />
      <Hero />
      <About />
      <WhyChoose />
      <Process />

      <Portfolio />
      <Counter />
      {/* <Contact /> */}
      <Testimonial />
      <Client />
      <Team />
      <CTA />
      <Blog />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
