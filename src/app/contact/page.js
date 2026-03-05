import Scroll from "~/sections/Common/Scroll";

import PageBanner from "../../components/PagesBanner";
import ContactInfo from "~/sections/Contact/ContactInfo";
import ContactForm from "~/sections/Contact/ContactForm";
import GoogleMap from "~/sections/Contact/GoogleMap";
import ContactInfoBar from "~/sections/Contact/ContactInfoBar";
import ReviewsSection from "~/sections/Home/ReviewsSection";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";

export default function ContactPage() {
  return (
    <>
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
            اتصل بنا
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            خدمات زواج وافراح متكاملة في اوروبا{" "}
          </p>
        </div>
      </PageBanner>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid: Form + Map */}

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#DCB56D] mb-3 font-montserrat uppercase">
              أرسل لنا استفسارك
            </h2>
            <p className="text-[#023048]/70 text-base md:text-lg leading-relaxed">
              فقط أرسل لنا استفسارك، وسيتواصل معك متخصص من ست الشام في أقرب وقت
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Google Map */}
            <div className="order-1 lg:order-2 h-[350px] md:h-[450px] lg:h-auto lg:min-h-[700px]">
              <GoogleMap
                lat={45.5017}
                lng={-73.5673}
                address="Montreal, Quebec, Canada"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactInfoBar />

      <ReviewsSection
        title={
          <div className="text-[#DCB56D]!">
            أفضل خدمات ووكالات الزواج في أوروبا
          </div>
        }
        description="نحن متخصصون في ربط الأشخاص المتوافقين من خلال خدمات زواج موثوقة ومنظمة في مختلف أنحاء أوروبا."
        showGoogleRating={true}
        showUnderline={false}
      />
      <FooterTwo />
      <Scroll />
    </>
  );
}
