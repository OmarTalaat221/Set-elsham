// "use client";

// import Link from "next/link";
// import { useTranslations, useLocale } from "next-intl";

// const Team = () => {
//   const t = useTranslations("home.team");
//   const locale = useLocale();
//   const isRTL = locale === "ar";

//   const teamMembers = [
//     {
//       key: "member1",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
//       socials: [
//         { platform: "facebook", icon: "ri-facebook-fill", color: "hover:bg-blue-600" },
//         { platform: "twitter", icon: "ri-twitter-x-line", color: "hover:bg-gray-900" },
//         { platform: "linkedin", icon: "ri-linkedin-fill", color: "hover:bg-blue-700" },
//       ]
//     },
//     // ... duplicate for other members or map from a data file
//   ];

//   return (
//     <section className="relative py-24 lg:py-32 bg-slate-50/50 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
//       {/* Decorative Background Element */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
//         <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-theme/5 blur-[120px] rounded-full"></div>
//         <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-4 mb-6">
//               <span className="h-px w-12 bg-theme"></span>
//               <span className="text-theme font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
//                 {t("subtitle")}
//               </span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 leading-[1.1]">
//               {t("title")}
//             </h2>
//           </div>
          
//           <Link 
//             href="/pages/innerpage/team" 
//             className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white overflow-hidden transition-all duration-300 hover:bg-theme"
//           >
//             <span className="relative z-10 font-semibold">{t("viewAll")}</span>
//             <i className={`${isRTL ? "ri-arrow-left-line" : "ri-arrow-right-line"} relative z-10 text-xl transition-transform group-hover:translate-x-1`}></i>
//           </Link>
//         </div>

//         {/* Team Members Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
//           {[1, 2, 3, 4].map((_, index) => {
//             const member = teamMembers[0]; // Using index 0 for demo purposes
//             return (
//               <div key={index} className="group relative">
//                 <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  
//                   {/* Image */}
//                   <img 
//                     src={member.image} 
//                     alt="Team Member"
//                     className="w-full h-full object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
//                   />

//                   {/* Sidebar Socials - Animates in from the side */}
//                   <div className={`absolute top-6 ${isRTL ? 'left-4' : 'right-4'} flex flex-col gap-2 translate-x-${isRTL ? '-12' : '12'} opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100`}>
//                     {member.socials.map((social, sIdx) => (
//                       <a 
//                         key={sIdx}
//                         href="#" 
//                         className={`w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 shadow-xl ${social.color} hover:text-white transition-all duration-300`}
//                       >
//                         <i className={social.icon}></i>
//                       </a>
//                     ))}
//                   </div>

//                   {/* Bottom Content Overlay */}
//                   <div className="absolute inset-x-0 flex flex-col gap-3 bottom-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                     <div className="overflow-hidden">
//                        <p className="text-theme font-medium text-sm mb-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
//                         {t(`member1.position`)}
//                       </p>
//                       <h3 className="text-white! my-2 text-xl font-bold">
//                         <Link href="/pages/innerpage/team-details" className="hover:text-theme transition-colors">
//                           {t(`member1.name`)}
//                         </Link>
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

"use client";
import React, { useState } from 'react';
import { ArrowRight, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';


const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500",
    socials: [
      { platform: "linkedin", icon: <Linkedin size={18} />, color: "hover:bg-blue-600" },
      { platform: "twitter", icon: <Twitter size={18} />, color: "hover:bg-slate-900" },
      { platform: "email", icon: <Mail size={18} />, color: "hover:bg-emerald-500" },
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    bio: "Expert in scalable architecture and emerging technologies with a passion for innovation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
    socials: [
      { platform: "linkedin", icon: <Linkedin size={18} />, color: "hover:bg-blue-600" },
      { platform: "twitter", icon: <Twitter size={18} />, color: "hover:bg-slate-900" },
      { platform: "facebook", icon: <Facebook size={18} />, color: "hover:bg-blue-700" },
    ]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Design Director",
    bio: "Award-winning designer creating intuitive and beautiful user experiences.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500",
    socials: [
      { platform: "instagram", icon: <Instagram size={18} />, color: "hover:bg-pink-500" },
      { platform: "linkedin", icon: <Linkedin size={18} />, color: "hover:bg-blue-600" },
      { platform: "email", icon: <Mail size={18} />, color: "hover:bg-emerald-500" },
    ]
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Head of Operations",
    bio: "Operations expert ensuring seamless delivery and exceptional client satisfaction.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
    socials: [
      { platform: "linkedin", icon: <Linkedin size={18} />, color: "hover:bg-blue-600" },
      { platform: "twitter", icon: <Twitter size={18} />, color: "hover:bg-slate-900" },
      { platform: "email", icon: <Mail size={18} />, color: "hover:bg-emerald-500" },
    ]
  },
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-emerald-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-amber-200/30 rounded-lg rotate-45 opacity-60"></div>
      <div className="absolute top-60 left-1/4 w-6 h-6 bg-emerald-300/40 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-emerald-500"></span>
              <span className="text-emerald-600 font-bold uppercase tracking-[0.25em] text-xs md:text-sm">
                Our Experts
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
              Meet The Talented People Behind Our Success
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Our diverse team of experts brings together decades of experience in design, technology, and strategy to create exceptional solutions.
            </p>
          </div>
          
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white overflow-hidden transition-all duration-300 hover:bg-emerald-600 rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-1">
            <span className="relative z-10 font-semibold">View All Members</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 bg-white rounded-2xl shadow-lg border border-slate-100">
          {[
            { number: "50+", label: "Team Members" },
            { number: "12+", label: "Years Experience" },
            { number: "150+", label: "Projects Completed" },
            { number: "30+", label: "Countries Served" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                
                {/* Image Container with Gradient Overlay */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-slate-800">{member.position}</span>
                  </div>
                </div>

                {/* Social Icons - Animated */}
                <div className={`absolute right-6 flex flex-col gap-3 transition-all duration-500 ${
                  hoveredId === member.id ? 'top-20 opacity-100' : 'top-32 opacity-0'
                }`}>
                  {member.socials.map((social, idx) => (
                    <a 
                      key={idx}
                      href="#" 
                      className={`w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-700 shadow-xl ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                      style={{ transitionDelay: `${idx * 75}ms` }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {member.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 line-clamp-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card Bottom Decoration */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 relative">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 lg:p-16 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Our Team of Innovators
                </h3>
                <p className="text-slate-300 text-lg">
                  We're always looking for talented individuals to join our mission of creating exceptional digital experiences.
                </p>
              </div>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/25">
                <span>View Open Positions</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}