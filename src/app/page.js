import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import Header from "../sections/Common/Header/Header";
import PageBanner from "../components/PagesBanner";
import HeroContent from "~/sections/HeroContent";
import AboutSection from "~/sections/Home/About";
import ServicesSection from "~/sections/Home/Services";
import GallerySection from "~/sections/Home/GallerySection";
import PackagesSection from "~/sections/Home/PackagesSection";
import AppDownloadSection from "~/sections/Home/AppDownloadSection";
import ReviewsSection from "~/sections/Home/ReviewsSection";
import FAQSection from "~/sections/Home/FAQSection";
import NewsSection from "~/sections/Home/NewsSection";
// import "./globals.css";

export default function HomePage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <PageBanner
        mediaSrc="https://camp-coding.tech/nour_maison/Nour-opening-1.mp4"
        gradientColor="#023048"
        height="lg"
        align="center"
        overlayStrength={70}
        parallax={false}
      >
        <HeroContent />
      </PageBanner>
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PackagesSection />
      <AppDownloadSection />
      <ReviewsSection />
      <FAQSection />
      <NewsSection />

      <FooterTwo />
      <Scroll />
    </div>
  );
}
