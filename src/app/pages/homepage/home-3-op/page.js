import Contact from "~/sections/Home-3/Contact";
import Hero from "~/sections/Home-3/Hero";
import Portfolio from "~/sections/Home-3/Portfolio";
import Team from "~/sections/Home-3/Team";

import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import HeaderTwoOp from "~/sections/Common/HeaderOp/HeaderTwoOp";
import Scroll from "~/sections/Common/Scroll";

export default function HomeThree() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderTwoOp />
      <Hero />
      <About />
      <WhyChoose />
      <Process />
      <Portfolio />
      <Counter />
      <Contact />
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
