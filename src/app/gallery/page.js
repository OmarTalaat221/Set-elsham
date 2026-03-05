// app/gallery/page.jsx

import React from "react";
import PageBanner from "../../components/PagesBanner";
import GalleryTabsSection from "../../sections/Gallery/GalleryTabsSection";
import ScrollTopButton from "~/sections/Common/Scroll";

const Gallery = () => {
  return (
    <>
      {/* ===== Banner Section ===== */}
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
            المعرض
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            خدمات زواج وافراح متكاملة في اوروبا
          </p>
        </div>
      </PageBanner>

      <GalleryTabsSection />
      <ScrollTopButton />
    </>
  );
};

export default Gallery;
