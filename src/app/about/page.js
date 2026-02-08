import AboutThree from "~/sections/About/AboutThree";
import Breadcumb from "~/sections/About/Breadcumb";
import ClientThree from "~/sections/About/ClientThree";
import PortfolioThree from "~/sections/About/PortfolioThree";
import ProcessThree from "~/sections/About/ProcessThree";
import TeamThree from "~/sections/About/TeamThree/TeamThree";
import WhyChooseThree from "~/sections/About/WhyChooseThree";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import CounterThree from "~/sections/Common/Counter/CounterThree";
import TestimonialThree from "~/sections/Common/Testimonial/TestimonialThree";
import Scroll from "~/sections/Common/Scroll";
import Portfolio from "~/sections/Home-3/Portfolio";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import Blog from "~/sections/Home-2/Blog";
import Counter from "~/sections/Home-3/Counter";
import Testimonial from "~/sections/Home-3/Testimonial";
import TeamSection from "~/sections/Home-3/Team";
export default function AboutPage() {
  return (
    <>
      <HeaderTwo />
      <Breadcumb />
      <AboutThree />
      <WhyChooseThree />
      <ProcessThree />
      <Portfolio />
      <Counter />
      <Testimonial />
      <TeamSection />
      <ClientThree />
      <Blog />
      <FooterTwo />
      <Scroll />
    </>
  );
}
