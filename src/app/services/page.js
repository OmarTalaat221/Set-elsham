import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";

import ArabicServicesPage from "~/sections/services/OurServices";
import HowServicesMade from "~/sections/services/HowServicesMade";
import MomentsFromWeddings from "~/sections/services/MomentsFromWeddings";
import PageBanner from "../../components/PagesBanner";
import HeroContent from "../../sections/HeroContent";
import PackagesSection from "../../sections/Home/PackagesSection";
import ReviewsSection from "../../sections/Home/ReviewsSection";
import NewsSection from "../../sections/Home/NewsSection";
import ServicesSection from "../../sections/Home/Services";
import AppDownloadSection from "../../sections/Home/AppDownloadSection";
export default function ServicesPage() {
  return (
    <>
      {/* <HeaderTwo /> */}
      <PageBanner
        mediaSrc="https://camp-coding.tech/nour_maison/Nour-opening-1.mp4"
        gradientColor="#023048"
        height="lg"
        align="center"
        overlayStrength={70}
        parallax={false}
      >
        <div className="flex-1 flex flex-col items-center justify-center w-full h-full! text-center lg:text-right order-2 lg:order-1">
          {/* Eyebrow */}
          <span className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mb-2 sm:mb-3 md:mb-4">
            ست الشام
          </span>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6">
            نصنع لك بداية حياة لا تنسى
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed">
            خدمات زواج وافراح متكاملة في اوروبا
          </p>
        </div>
      </PageBanner>
      <ArabicServicesPage />
      {/* <HowServicesMade /> */}
      <MomentsFromWeddings />
      <ServicesSection />
      <PackagesSection />
      <AppDownloadSection />
      <ReviewsSection />
      <NewsSection />
      <FooterTwo />
      <Scroll />
    </>
  );
}
