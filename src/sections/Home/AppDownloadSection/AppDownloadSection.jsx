// components/AppDownloadSection/AppDownloadSection.jsx

"use client";

const AppDownloadSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Main Beige Container ===== */}
        <div
          className="relative bg-[#FAF2EA] rounded-2xl md:rounded-3xl
                      px-6 sm:px-8 md:px-12 lg:px-16
                      py-10 md:py-14 lg:py-16
                      overflow-visible"
        >
          {/* ===== Content Grid ===== */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between 
                        gap-8 lg:gap-12 xl:gap-20"
          >
            {/* ===== Right Side: Text + Store Buttons ===== */}
            <div className="flex-1 order-2 lg:order-1 text-right">
              {/* Headline */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] 
                           font-semibold text-[#023048] leading-[1.5] 
                           mb-4 md:mb-8"
              >
                حمل التطبيق على متجر
                <br />
                جوجل بلاي و ابل ستور
              </h2>

              {/* Subheadline */}
              <div
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] 
                           text-[#023048]/75 leading-[1.8] 
                           mb-6 md:mb-8 lg:mb-10 
                           max-w-md lg:max-w-lg"
              >
                يتيح لك تطبيقنا متابعة طلباتك
                <br />
                والعديد من مزايا ست الشام
              </div>

              {/* Store Buttons */}
              <div className="flex flex-row items-center gap-3 sm:gap-4">
                {/* App Store */}
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on App Store"
                    className="h-10! sm:h-11! md:h-12! lg:h-[52px]! w-auto"
                  />
                </a>
                {/* Google Play */}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10! sm:h-11! md:h-12! lg:h-[52px]! w-auto"
                  />
                </a>
              </div>
            </div>

            {/* ===== Left Side: Circle + Phone Mockups ===== */}
            <div className="flex-1 order-1 lg:order-2 flex items-center justify-center">
              {/* Circle + Phones Wrapper */}
              <div className="relative">
                {/* Decorative Gold Dots */}
                <div
                  className="absolute w-3 h-3 md:w-4 md:h-4 
                             rounded-full bg-[#FAF2EA]
                             -top-8 md:-top-12 lg:-top-16
                             left-1/2 -translate-x-1/2
                             z-10"
                />
                <div
                  className="absolute w-2 h-2 md:w-3 md:h-3 
                             rounded-full bg-[#FAF2EA]
                             -bottom-4 md:-bottom-6 
                             -left-2 md:-left-4
                             z-10"
                />

                {/* Cream Circle */}
                <div
                  className="w-[180px] h-[180px] 
                             sm:w-[200px] sm:h-[200px] 
                             md:w-[240px] md:h-[240px] 
                             lg:w-[280px] lg:h-[280px]
                             xl:w-[320px] xl:h-[320px]
                             rounded-full bg-[#f0e6d9]
                             relative"
                  style={{
                    // background: "#fbf9e9",
                    background:
                      "linear-gradient(176deg, #fbf9e9 0.00%, rgba(220,181,109,0.44 ) 100.00%)",
                  }}
                />

                {/* Phones Image - Overflowing from circle */}
                <img
                  src="https://res.cloudinary.com/dp7jfs375/image/upload/v1772631289/Rectangle_20068_2x_ddsyju.png"
                  alt="Set Al Sham Mobile App"
                  className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2
                             w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px]
                             h-auto max-w-none!
                             pointer-events-none"
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
