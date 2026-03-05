// components/ServicesSection/ServicesSection.jsx

"use client";

const ServicesSection = () => {
  const services = [
    {
      id: 3,
      title: "البحث عن شريك",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624891/Image_24_w9hszw.webp",
    },
    {
      id: 2,
      title: "حجز صالة الأفراح",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624876/Image_18_sgz7td.webp",
    },
    {
      id: 1,
      title: "بوفيه طعام",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624889/Image_16_kqermq.webp",
    },
    {
      id: 6,
      title: "فرقة زفة ودقة ستي للسيدات",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624880/Image_6_ucse64.webp",
    },
    {
      id: 5,
      title: "زغاريد",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624883/Image_19_xwxbeq.webp",
    },
    {
      id: 4,
      title: "فرقة العراضة الشامية رجال",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624886/Image_15_gizrgx.webp",
    },
    {
      id: 9,
      title: "تأجير بدلات",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624893/Image_22_nm7mzc.webp",
    },
    {
      id: 8,
      title: "DJ",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624897/Image_17_yh0rmk.webp",
    },
    {
      id: 7,
      title: "تصوير المناسبات",
      image:
        "https://res.cloudinary.com/dp7jfs375/image/upload/v1772624895/Image_20_itocr9.webp",
    },
  ];

  return (
    <section className="w-full bg-[#fff] py-16 md:py-20 lg:py-24" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023048] text-center mb-12 md:mb-16 lg:mb-20">
          خدماتنا
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Service Image */}
              <div
                className="w-full aspect-[377/264] rounded-2xl overflow-hidden
                            border-2 border-[#DCB56D]/60
                            transition-all duration-300
                            group-hover:shadow-lg group-hover:shadow-[#DCB56D]/20
                            group-hover:-translate-y-1
                            group-hover:border-[#DCB56D]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Service Title */}
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-[#023048] text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px] rounded-2xl overflow-hidden">
            {/* Background Image */}
            <img
              src="https://res.cloudinary.com/dp7jfs375/image/upload/v1772625741/Image_14_mt1wig.png"
              alt="تنظيم الحفلات"
              className="absolute inset-0 w-full h-full! object-cover"
            />

            {/* Golden Gradient Overlay - Right to Left Fade */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, 
                  rgba(220, 181, 109, 0.9) 0%, 
                  rgba(220, 181, 109, 0.7) 25%, 
                  rgba(220, 181, 109, 0.4) 50%, 
                  rgba(220, 181, 109, 0) 100%)`,
              }}
            />

            {/* Banner Text - Right Aligned & Vertically Centered */}
            <div className="absolute inset-0 flex items-center justify-start pr-8 md:pr-12 lg:pr-16">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023048]">
                تنظيم الحفلات
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
