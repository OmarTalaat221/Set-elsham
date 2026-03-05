// components/PackagesSection/PackagesSection.jsx

"use client";

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: "الباقة الملكية",
      price: "1200",
      services: [
        "البحث عن شريك",
        "فرقة زفة ودقة ستي للسيدات",
        "فرقة العراضة الشامية رجال",
        "تأجير بدلات",
      ],
    },
    {
      id: 2,
      name: "الباقة المميزة",
      price: "900",
      services: [
        "البحث عن شريك",
        "فرقة زفة ودقة ستي للسيدات",
        "فرقة العراضة الشامية رجال",
        "تأجير بدلات",
      ],
    },
    {
      id: 3,
      name: "الباقة الاقتصادية",
      price: "500",
      services: [
        "البحث عن شريك",
        "فرقة زفة ودقة ستي للسيدات",
        "فرقة العراضة الشامية رجال",
        "تأجير بدلات",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#023048] mb-4">
            باقات الأفراح
          </h2>
          {/* Divider */}
          <div className="w-24 md:w-32 h-[2px] bg-[#023048] mx-auto" />
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="bg-[#023048] py-5 md:py-6 px-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                  {pkg.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="flex-1 bg-[#faf2ea] flex flex-col items-center px-6 py-8 md:py-10">
                {/* Services List */}
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 w-full">
                  {pkg.services.map((service, index) => (
                    <li
                      key={index}
                      className="text-[#023048] text-lg md:text-xl text-center leading-relaxed font-bold"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Spacer to push price and button to bottom */}
                <div className="flex-1" />

                {/* Price */}
                <div className="mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#023048]">
                    {pkg.price}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#023048] ml-2">
                    $
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full max-w-[200px] py-3 md:py-4 px-8
                             bg-[#DCB56D] hover:bg-[#c9a227]
                             text-[#023048] font-semibold text-base md:text-lg
                             rounded-xl
                             hover:shadow-lg transition-all duration-300"
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
