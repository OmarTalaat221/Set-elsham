"use client";

import React from 'react';
import {
    Building2,
    Heart,
    Music,
    Users,
    Disc3,
    Gem,
    PartyPopper,
    UtensilsCrossed,
    Building,
    HeartHandshake,
    Flower2,
    Sparkles,
    Home,
    Calendar
} from 'lucide-react';

const ArabicServicesPage = () => {
    const services = [
        {
            id: 1,
            name: 'بوفيه طعام',
            Icon: UtensilsCrossed,
            color: 'bg-gray-200'
        },
        {
            id: 2,
            name: ' حجز صالة الأفراح',
            Icon: Building,
            color: 'bg-gray-200'
        },
        {
            id: 3,
            name: 'البحث عن شركاء الحياة',
            Icon: HeartHandshake,
            color: 'bg-gray-200'
        },
        {
            id: 4,
            name: 'زغاريد',
            Icon: Flower2,
            color: 'bg-gray-200'
        },
        {
            id: 5,
            name: 'غرفه زفاف للسيدات',
            Icon: Sparkles,
            color: 'bg-gray-200'
        },
        {
            id: 6,
            name: 'غرفه زفاف للراجل',
            Icon: Home,
            color: 'bg-gray-200'
        },
        {
            id: 7,
            name: 'احتفالات المناسبات',
            Icon: Calendar,
            color: 'bg-gray-200'
        },
        {
            id: 8,
            name: 'DJ',
            Icon: Disc3,
            color: 'bg-gray-200'
        }
    ];



    return (
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 " dir="rtl">

            <div className="flex flex-wrap gap-5 mb-12 justify-center">
                <button className="!bg-[#023048] hover:bg-blue-600 text-white !py-2 !px-6  text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[220px] active:translate-y-0">
                    احجز خدمات رائعة
                </button>
                <button className="!bg-[#EEDFC8] hover:bg-yellow-700 !text-[#023048] !py-2 !px-6  text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[220px] active:translate-y-0">
                    ابحث عن شركاء الحياة
                </button>

            </div>


            <div className="!py-16">

                <div className="relative">
                    <div
                        className="flex gap-4  overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {services?.map((service) => {
                            const ServiceIcon = service.Icon;
                            return (
                                <div
                                    key={service.id}
                                    className="flex-shrink-0 gap-4 flex flex-col snap-center"
                                >
                                    <div className={`w-[200px] py-12 ${service.color} rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
                                        <div className=" rounded-full flex items-center justify-center">
                                            <ServiceIcon size={50} className="text-black" strokeWidth={1.5} />
                                        </div>

                                    </div>
                                    <p className="!text-[#023048] text-[14px] font-semibold text-center px-4 text-sm leading-tight">
                                        {service.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ArabicServicesPage;