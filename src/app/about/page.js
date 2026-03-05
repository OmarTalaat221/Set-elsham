import WhyChooseThree from "~/sections/About/WhyChooseThree";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import PageBanner from "../../components/PagesBanner";

export default function AboutPage() {
  return (
    <>
      {/* <HeaderTwo /> */}
      {/* <Breadcumb /> */}
      {/* <AboutThree /> */}
      <PageBanner
        mediaSrc="https://res.cloudinary.com/dp7jfs375/image/upload/v1772704864/white-wedding-banner-template-fr_vd4ivl.png"
        gradientColor="#DCB56D"
        overlayStrength={70}
        align="right"
        showBottomFade={true}
        bottomFadeColor="white"
        className="h-[80vh]!"
      >
        {/* Banner Content */}
        <div className="flex flex-col w-full justify-center md:justify-end items-center md:items-start h-full">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            من نحن{" "}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            خدمات زواج وافراح متكاملة في اوروبا
          </p>
        </div>
      </PageBanner>
      <WhyChooseThree />
      {/* <ProcessThree />
      <Portfolio />
      <Counter />
      <Testimonial />
      <TeamSection />
      <ClientThree /> */}
      {/* <Blog /> */}
      <FooterTwo />
      <Scroll />
    </>
  );
}
