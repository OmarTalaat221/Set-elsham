"use client";

import React from 'react';
import { Check } from 'lucide-react';

const HowServicesMade = () => {
    const steps = [
        {
            id: 1,
            label: 'اختيار الخدمة',
            description: 'مثال أول'
        },
        {
            id: 2,
            label: 'تحديد الموعد',
            description: 'مثال أول'
        },
        {
            id: 3,
            label: 'الدفع والتأكيد',
            description: 'مثال أول'
        },
        {
            id: 4,
            label: 'استلام الخدمة',
            description: 'مثال أول'
        }
    ];

    const packages = [
        {
            id: 1,
            title: 'الباقة الاقتصادية',
            price: '700',
            currency: '$',
            features: [
                'خدمة أساسية',
                'دعم فني',
                'ضمان الجودة'
            ],
            color: 'bg-[#EEDFC8]',
            popular: false
        },
        {
            id: 2,
            title: 'الباقة المميزة',
            price: '900',
            currency: '$',
            features: [
                'جميع مميزات الباقة الاقتصادية',
                'خدمات إضافية',
                'أولوية في الحجز',
                'دعم على مدار الساعة'
            ],
            color: 'bg-[#EEDFC8]',
            textColor: 'text-white',
            popular: true
        },
        {
            id: 3,
            title: 'الباقة الملكية',
            price: '1200',
            currency: '$',
            features: [
                'جميع مميزات الباقة المميزة',
                'خدمات VIP',
                'تخصيص كامل',
                'هدايا حصرية',
                'متابعة شخصية'
            ],
            color: 'bg-[#EEDFC8]',
            popular: false
        }
    ];

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white" dir="rtl">

            {/* Section Title */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023048] mb-2 sm:mb-4">
                    كيف تتم الخدمة
                </h2>
            </div>

            {/* Steps Section */}
            <div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
                <div className="relative">

                    {/* Steps Grid - Desktop (Horizontal) */}
                    <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center text-center">
                                {/* Step Description */}
                                <p className="text-gray-400 text-xs lg:text-sm mb-3 lg:mb-4">
                                    {step.description}
                                </p>

                                {/* Step Circle */}
                                <div className="relative z-10">
                                    <div className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300 
                                        ${index === 0
                                            ? 'bg-[#efbd4c] shadow-lg'
                                            : 'bg-[#efbd4c]'
                                        }`}
                                    >
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Connection Line - Desktop */}
                    <div className="hidden md:block absolute bottom-[8px] lg:bottom-[10px] right-[12%] left-[12%] h-[3px] lg:h-1 bg-[#023048]"></div>

                    {/* Steps - Mobile & Tablet (Vertical) */}
                    <div className="md:hidden flex flex-col items-center">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute top-0 bottom-0 right-[9px] w-[3px] bg-[#023048]"></div>

                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center gap-4 mb-6 last:mb-0">
                                    {/* Step Circle */}
                                    <div className="relative z-10">
                                        <div className={`w-5 h-5 rounded-full transition-all duration-300 
                                            ${index === 0
                                                ? 'bg-[#efbd4c] shadow-lg'
                                                : 'bg-[#efbd4c]'
                                            }`}
                                        >
                                        </div>
                                    </div>

                                    {/* Step Description */}
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Pricing Section Title */}
            <div className=" w-full text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="!text-[33px] w-fit !mx-auto sm:text-2xl md:text-3xl lg:text-4xl font-bold w-fit mx-auto border-b-[.5px] border-[#023048] text-[#023048] pb-2">
                    باقات الافراح
                </h2>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
                {packages.map((pkg) => (
                    <div
                        key={pkg.id}
                        className={`relative rounded-2xl sm:rounded-3xl transition-all duration-300 
                            hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl
                            ${pkg.color} text-[#023048]
                            ${pkg.popular ? 'sm:scale-105 shadow-xl order-first sm:order-none' : 'shadow-lg'}
                        `}
                    >
                        {/* Package Header */}
                        <div className="bg-[#023048] w-full shadow-lg px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl sm:rounded-t-3xl">
                            <p className="w-full text-white text-center text-sm sm:text-base font-semibold">
                                {pkg.title}
                            </p>
                        </div>

                        {/* Price & Button Container */}
                        <div className="p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
                            {/* Price Section */}
                            <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{pkg.currency}</span>
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">{pkg.price}</span>
                            </div>

                            {/* Button */}
                            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg 
                                transition-all duration-300 hover:shadow-lg active:scale-95
                                bg-[#D4AF37] hover:bg-[#C5A028] text-white
                                w-full sm:w-auto"
                            >
                                احجز الآن
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default HowServicesMade;