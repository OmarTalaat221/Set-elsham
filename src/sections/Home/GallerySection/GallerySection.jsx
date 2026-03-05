// components/GallerySection/GallerySection.jsx

"use client";

const GallerySection = () => {
  // Gallery images data
  const galleryImages = {
    // Large portrait image (right side)
    featured: {
      src: "https://res.cloudinary.com/dp7jfs375/image/upload/v1772628027/Image_1_2x_azssyc.png",
      alt: "لحظة من أفراحنا",
    },
    // Top row - 2 small images
    topRow: [
      {
        id: 1,
        src: "https://res.cloudinary.com/dp7jfs375/image/upload/v1772627865/NoPath_-_Copy_4_2x_bdflrd.png",
        alt: "لحظة من أفراحنا",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/dp7jfs375/image/upload/v1772627868/NoPath_-_Copy_3_2x_fiyjxk.png",
        alt: "لحظة من أفراحنا",
      },
    ],
    // Bottom row - 2 larger images
    bottomRow: [
      {
        id: 4,
        src: "https://res.cloudinary.com/dp7jfs375/image/upload/v1772627865/NoPath_-_Copy_6_2x_caxzma.png",
        alt: "لحظة من أفراحنا",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/dp7jfs375/image/upload/v1772627866/NoPath_-_Copy_2x_kkn9cm.png",
        alt: "لحظة من أفراحنا",
      },
    ],
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#023048] text-center mb-12 md:mb-16">
          لحظات من افراحنا
        </h2>

        {/* Gallery Grid */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
          {/* Right Side - Large Portrait Image */}
          <div className="w-full lg:w-[35%]">
            <div className="h-[300px] md:h-[400px] lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden">
              <img
                src={galleryImages.featured.src}
                alt={galleryImages.featured.alt}
                className="w-full h-full! object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Left Side - Grid of smaller images */}
          <div className="w-full lg:w-[65%] flex flex-col gap-4 md:gap-5">
            {/* Top Row - 3 small images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 flex-1">
              {galleryImages.topRow.map((image) => (
                <div
                  key={image.id}
                  className="aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full! object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 larger images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 flex-1">
              {galleryImages.bottomRow.map((image) => (
                <div
                  key={image.id}
                  className="aspect-[4/3] md:aspect-auto md:h-full min-h-[180px] md:min-h-[200px] rounded-2xl overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full! object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 md:mt-12 lg:mt-14">
          <button
            className="px-10 md:px-14 py-3 md:py-4 mt-[50px]
                       bg-[#DCB56D] hover:bg-[#c9a227]
                       text-[#023048] font-semibold text-lg md:text-2xl
                       rounded-xl
                       hover:shadow-lg hover:shadow-[#DCB56D]/30
                       transition-all duration-300"
          >
            معرض الصور
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
