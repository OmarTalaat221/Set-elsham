import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import About from "~/sections/Home-3/About";
import CTA from "~/sections/Home-3/CTA";
import Client from "~/sections/Home-3/Client";
import Contact from "~/sections/Home-3/Contact";
import Counter from "~/sections/Home-3/Counter";
import Hero from "~/sections/Home-3/Hero";
import Portfolio from "~/sections/Home-3/Portfolio";
import Process from "~/sections/Home-3/Process";
import Team from "~/sections/Home-3/Team";
import Testimonial from "~/sections/Home-3/Testimonial";
import WhyChoose from "~/sections/Home-3/WhyChoose";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Blog from "~/sections/Home-2/Blog";
import Scroll from "~/sections/Common/Scroll";
import Categories from "~/sections/Home-3/Categories";
import OrganizationalPyramid from "~/sections/Home-3/OrganizationalPyramid";
// import "./globals.css";

export default function HomePage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderTwo />
      <Hero />
      <OrganizationalPyramid />
      <About />
      <WhyChoose />
      <Process />
      <Categories />

      {/* <Portfolio /> */}
      <Counter />
      {/* <Contact /> */}
      <Testimonial />
      <Client />
      {/* <Team /> */}
      <CTA />
      <Blog />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
