"use client";

import React from 'react';

const MomentsFromWeddings = () => {
    const moments = [
        {
            id: 1,
            name: 'لحظة الزفاف',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
        },
        {
            id: 2,
            name: 'حفل الاستقبال',
            image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500',
        },
        {
            id: 3,
            name: 'قاعة الأفراح',
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500',
        },
        {
            id: 4,
            name: 'التصوير الفوتوغرافي',
            image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500',
        },
        {
            id: 5,
            name: 'الكوشة',
            image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500',
        }
    ];

    return (
        <div className="w-full mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-gray-50" dir="rtl">

            {/* Section Title */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023048] mb-2">
                    لحظات من افراحنا
                </h2>
            </div>

            {/* Mobile & Tablet: Horizontal Scroll */}
            <div className="block xl:hidden py-4">
                <div
                    className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {moments?.map((moment) => (
                        <div
                            key={moment.id}
                            className="flex-shrink-0 snap-center group cursor-pointer"
                        >
                            <div className="relative 
                                w-[140px] h-[100px]
                                xs:w-[160px] xs:h-[110px]
                                sm:w-[200px] sm:h-[130px]
                                md:w-[220px] md:h-[150px]
                                overflow-hidden rounded-lg sm:rounded-xl 
                                border border-[#EEDFC8]
                                transition-all duration-300
                                hover:shadow-lg">

                                <img
                                    src={moment.image}
                                    alt={moment.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-2
                                    transform translate-y-full group-hover:translate-y-0 
                                    transition-transform duration-300">
                                    <p className="text-white text-xs sm:text-sm font-semibold text-center">
                                        {moment.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: Centered Grid/Flex */}
            <div className="hidden xl:block py-4 sm:py-8">
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-7xl mx-auto">
                    {moments?.map((moment) => (
                        <div
                            key={moment.id}
                            className="group cursor-pointer"
                        >
                            <div className="relative 
                                w-[220px] h-[150px]
                                2xl:w-[250px] 2xl:h-[170px]
                                overflow-hidden rounded-xl 
                                border border-[#EEDFC8]
                                transition-all duration-300
                                hover:shadow-xl hover:scale-[1.02]">

                                <img
                                    src={moment.image}
                                    alt={moment.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                    opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-3
                                    transform translate-y-full group-hover:translate-y-0 
                                    transition-transform duration-300">
                                    <p className="text-white text-sm font-semibold text-center">
                                        {moment.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MomentsFromWeddings;