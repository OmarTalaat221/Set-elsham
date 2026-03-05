"use client";

import { useState } from "react";

const ImagePlaceholder = ({ label, className = "" }) => (
  <div className={`flex items-center justify-center bg-gray-200 w-full h-full ${className}`}>
    <span className="text-gray-400 !text-[14px] text-center font-light tracking-widest">{label}</span>
  </div>
);

const farmers = [
  { id: 0, name: "ANNA K.", role: "Farmer" },
  { id: 1, name: "MICHAEL HUNTS", role: "Grower" },
  { id: 2, name: "ROSE T.", role: "Producer" },
];

export default function WhyChooseThree() {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#fafaf8] text-gray-700 min-h-screen font-serif" style={{
      direction: "ltr"
    }}>
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Section 1: Hero */}
        <div className="grid relative grid-cols-2 gap-10 mb-20 items-start">

          {/* Left: Text */}
          <div className="flex flex-col gap-4">
            <h1 className="!text-[33px] text-center font-normal  text-gray-800 mb-7">
              Have a look at<br />
              our beautiful farm!
            </h1>

            <p className="!text-[14px] text-center  leading-[21px] text-[#696969] mb-4">
              Maecenas tristique gravida nulla, ut sagittis felis porta interdum porta.
              Duis ut lacus mollis, tincidunt eros.
            </p>

            <p className="!text-[14px] text-center leading-relaxed text-[#696969] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <p className="!text-[14px] text-center leading-relaxed text-[#696969] mb-8">
              Maecenas tristique gravida nulla, ut sagittis felis porta interdum porta.
              Duis ut lacus mollis, tincidunt eros. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Aliquam ex nunc euismod tincidunt, tortor augue
              non, aliquam justo. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>

            <button className="bg-[#7ecdb5] m-auto hover:bg-[#5bb89e] text-white text-xs tracking-widest uppercase px-7 py-3 transition-colors duration-200 font-sans cursor-pointer">
              Purchase Theme
            </button>
          </div>


          <div className="aspect-[420/630] w-full">
            <ImagePlaceholder label="470×660" />
          </div>

          <div className=" absolute -bottom-10 right-20 shadow-xl  ml-auto w-[350px] aspect-[370/240]">
            <ImagePlaceholder label="370×240" />
          </div>


        </div>

        <div className="grid grid-cols-2 gap-10  items-center">

          {/* Left: portrait with cream offset background */}
          <div className="relative pt-4">
            <div className=" top-0 left-4 right-[-12px] bottom-[-12px] bg-[#f5f0e8] z-0" />
            <div className="relative z-10 aspect-[370/530] w-full">
              <ImagePlaceholder label="370×530" />
            </div>

            {/* <div className=" !w-full flex items-center gap-4 pt-4 m-auto">
              <img src="/main-assets/img/pattern.png" className="!w-[115px]" alt="" />
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-700 font-sans uppercase">
                  John Doe
                </p>
                <p className="text-xs text-gray-400 tracking-wide font-sans">Genuine Organics</p>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col gap-8 pt-24">


            <div>
              <h2 className="!text-[33px]  font-normal  text-gray-800 mb-4">Our farmers</h2>
              <p className="!text-[14px] leading-relaxed text-[#696969] mb-3">
                Maecenas tristique gravida nulla, ut sagittis felis porta interdum porta.
                Duis ut lacus mollis, tincidunt eros.
              </p>
              <p className="!text-[14px]  leading-relaxed text-[#696969] mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit
                in voluptate velit esse. Duis aute irure dolor in reprehenderit.
              </p>
              <p className="!text-[14px] leading-relaxed text-[#696969]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure
                dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive((p) => (p === 0 ? farmers.length - 1 : p - 1))}
                  className="text-gray-400 hover:text-gray-600 text-xl px-2 transition-colors cursor-pointer"
                >
                  ‹
                </button>

                {farmers.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActive(f.id)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 font-sans text-[10px] tracking-wide cursor-pointer
                    ${active === f.id
                        ? "border-[#7ecdb5] bg-[#7ecdb5] text-white"
                        : "border-gray-300 bg-gray-200 text-gray-400 hover:border-[#7ecdb5]"
                      }`}
                  >
                    {f.name.split(" ")[0]}
                  </button>
                ))}

                <button
                  onClick={() => setActive((p) => (p === farmers.length - 1 ? 0 : p + 1))}
                  className="text-gray-400 hover:text-gray-600 text-xl px-2 transition-colors cursor-pointer"
                >
                  ›
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold tracking-widest text-gray-700 font-sans uppercase">
                  {farmers[active].name}
                </p>
                <div className="w-8 h-0.5 bg-[#7ecdb5] mx-auto mt-1" />
              </div>
            </div> */}
          </div>


        </div>

        {/* Section 3: Signature + Farmer Carousel */}
        <div className="grid grid-cols-2 gap-10 items-center pt-8 border-t border-[#e5e0d8]">

          {/* Left: Signature block */}
          <div className=" !w-full flex items-center gap-4 pt-4 m-auto">
            <img src="/main-assets/img/pattern.png" className="!w-[115px]" alt="" />
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-700 font-sans uppercase">
                John Doe
              </p>
              <p className="text-xs text-gray-400 tracking-wide font-sans">Genuine Organics</p>
            </div>
          </div>

          {/* Right: Farmer nav */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActive((p) => (p === 0 ? farmers.length - 1 : p - 1))}
                className="text-gray-400 hover:text-gray-600 text-xl px-2 transition-colors cursor-pointer"
              >
                ‹
              </button>

              {farmers.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 font-sans text-[10px] tracking-wide cursor-pointer
                    ${active === f.id
                      ? "border-[#7ecdb5] bg-[#7ecdb5] text-white"
                      : "border-gray-300 bg-gray-200 text-gray-400 hover:border-[#7ecdb5]"
                    }`}
                >
                  {f.name.split(" ")[0]}
                </button>
              ))}

              <button
                onClick={() => setActive((p) => (p === farmers.length - 1 ? 0 : p + 1))}
                className="text-gray-400 hover:text-gray-600 text-xl px-2 transition-colors cursor-pointer"
              >
                ›
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs font-semibold tracking-widest text-gray-700 font-sans uppercase">
                {farmers[active].name}
              </p>
              <div className="w-8 h-0.5 bg-[#7ecdb5] mx-auto mt-1" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}