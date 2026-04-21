"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Gift } from 'lucide-react';
import Link from 'next/link';


export default function Hero() {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialIcons = [
        { name: 'Facebook', color: 'text-blue-600', icon: 'f', bg: 'bg-white' },
        { name: 'Instagram', color: 'text-pink-600', icon: '📸', bg: 'bg-white' },
        { name: 'TikTok', color: 'text-black', icon: 'd', bg: 'bg-white' },
        { name: 'Twitter', color: 'text-blue-400', icon: '🐦', bg: 'bg-white' },
        { name: 'YouTube', color: 'text-red-600', icon: '▶', bg: 'bg-white' },
        { name: 'WhatsApp', color: 'text-green-500', icon: '🗨', bg: 'bg-white' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center pt-32 md:pt-48 pb-40 overflow-hidden"
        >
            {/* Background Gradient is handled in globals.css */}

            {/* Medical-Marketing Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 400 H 200 L 250 300 L 300 500 L 350 400 H 500 C 600 400 700 300 800 200 C 900 100 1000 100 1200 50" stroke="#FFB800" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse" />
                    <circle cx="250" cy="300" r="4" fill="#FFB800" className="animate-ping" />
                    <circle cx="300" cy="500" r="4" fill="#FFB800" />
                    <circle cx="800" cy="200" r="8" fill="white" className="opacity-50" />

                    {/* Abstract Medical Crosses */}
                    <g className="opacity-30">
                        <path d="M100 100 H 140 M 120 80 V 120" stroke="white" strokeWidth="4" />
                        <path d="M1200 600 H 1240 M 1220 580 V 1220 620" stroke="white" strokeWidth="4" />
                        <path d="M300 700 H 320 M 310 690 V 710" stroke="white" strokeWidth="2" />
                    </g>
                </svg>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">

                    {/* Content - Center */}
                    <div className={`w-full max-w-6xl flex flex-col items-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                        {/* Logo */}
                        <div className="mb-8 flex flex-col items-center">
                            <img src="/logo.png" alt="Dr. Media Shot" className="w-full max-w-[650px] md:max-w-[900px] h-auto object-contain mb-0" fetchPriority="high" />
                        </div>

                        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 w-full">
                            {/* Hero Text */}
                            <div className="space-y-6 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                {/* Wavy Text Implementation inside Hero */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-col gap-4 items-center md:items-start">
                                    <span className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 text-white">
                                        {(language === 'ar' ? 'لو انت دكتور' : 'If you are a doctor').split(' ').map((word, i) => (
                                            <span
                                                key={i}
                                                className="inline-block animate-wave"
                                                style={{ animationDelay: `${i * 0.15}s` }}
                                            >
                                                {word}
                                            </span>
                                        ))}
                                    </span>

                                    <span className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 text-[#FFB800]">
                                        {(language === 'ar' ? 'فاحنا العلاج' : 'we are the cure').split(' ').map((word, i) => (
                                            <span
                                                key={i}
                                                className="inline-block animate-wave text-[#FFB800]"
                                                style={{ animationDelay: `${(i * 0.15) + 0.5}s` }}
                                            >
                                                {word}
                                            </span>
                                        ))}
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
                                    {t('heroDescription')}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col items-center md:items-start gap-6 pt-4 -mt-10 w-full">
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                                        <a
                                            href="#contact"
                                            className="btn-primary w-full md:w-[200px] text-base md:text-lg py-3 md:py-4"
                                        >
                                            {t('ctaRegister')}
                                        </a>

                                        <a
                                            href="#services"
                                            className="btn-primary bg-transparent border-2 border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#0A0118] w-full md:w-[200px] text-base md:text-lg py-3 md:py-4"
                                        >
                                            {t('ctaOurServices')}
                                        </a>
                                    </div>

                                    <div className="flex justify-center w-full md:w-[416px]">
                                        <a
                                            href="#market-yourself"
                                            className="btn-primary whitespace-nowrap py-3 md:py-4 px-8 text-base md:text-lg"
                                        >
                                            <BookOpen className="w-5 h-5 flex-shrink-0" />
                                            <span>{t('freeCourse')}</span>
                                            <Gift className="w-5 h-5 flex-shrink-0 text-red-600" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Medicine Image */}
                            <div className="w-full md:w-1/2 flex justify-center items-center">
                                <div className="relative group">
                                    {/* All-around Glowing Aura */}
                                    <div className="absolute inset-0 bg-[#FFB800]/20 rounded-full blur-[100px] animate-pulse" />
                                    <div className="absolute -inset-10 bg-[#FFB800]/10 rounded-full blur-[80px]" />
                                    <div className="absolute -inset-4 bg-[#FFB800]/30 rounded-full blur-[40px] mix-blend-screen" />
                                    <img
                                        src="/medicine.png"
                                        alt="Marketing Treatment"
                                        className="relative w-full max-w-[400px] h-auto object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(255,184,0,0.3)] float"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-1 h-8 bg-white/20 rounded-full" />
            </div>
        </section>
    );
}

