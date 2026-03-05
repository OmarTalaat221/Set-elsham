// sections/Gallery/GalleryTabsSection.jsx

"use client";
import { useState } from "react";
import {
  galleryImages,
  galleryCategories,
} from "../../../utils/data/galleryData";
import GalleryGrid from "../GalleryGrid";
// import { galleryCategories, galleryImages } from "../../data/galleryData";
// import GalleryGrid from "../../components/Gallery/GalleryGrid";

const GalleryTabsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter images based on active tab
  const filteredImages =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`
                px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg
                transition-all duration-300 border-2
                ${
                  activeTab === category.id
                    ? "bg-[#DCB56D] text-[#023048] border-[#DCB56D] shadow-lg"
                    : "bg-transparent text-[#023048] border-[#023048]/20 hover:border-[#DCB56D] hover:bg-[#DCB56D]/10"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={filteredImages} />
      </div>
    </section>
  );
};

export default GalleryTabsSection;
