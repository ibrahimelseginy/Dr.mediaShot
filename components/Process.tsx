"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function Process() {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const mediaItems = [
        { id: 1, type: 'image', src: '/images/portfolio/dr-headache.png', alt: 'Headache Treatment' },
        { id: 2, type: 'image', src: '/images/portfolio/dr-asthma.jpg', alt: 'Asthma Treatment' },
        { id: 3, type: 'image', src: '/images/portfolio/dr-hand-foot-mouth.jpg', alt: 'Hand Foot Mouth Disease' },
        { id: 4, type: 'image', src: '/images/portfolio/dr-allergy.jpg', alt: 'Allergy Treatment' },
        { id: 5, type: 'video', src: '/images/portfolio/dr-video-thumb-72-48.png', alt: 'Video Content' },
        { id: 6, type: 'video', src: '/images/portfolio/baby-orange.png', alt: 'Reel Content' },
    ];

    return (
        <section
            id="creative"
            ref={sectionRef}
            className="py-24"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    <div className="inline-block bg-[#1a0b2e] px-8 py-3 rounded-xl border border-purple-500/20 shadow-lg mb-4">
                        <h2 className="text-[#FFB800] text-3xl md:text-4xl font-bold">
                            {t('contentProduction')}
                        </h2>
                    </div>
                    <p className="text-white text-lg font-medium tracking-widest opacity-80">
                        {t('contentProductionSubtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
                    {/* Media Gallery Grid - Desktop Only */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-2 hidden lg:block">
                        <div className="grid grid-cols-2 gap-4">
                            {mediaItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`relative rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105 ${item.id > 4 ? 'aspect-[9/16]' : 'aspect-square'} ${isVisible ? 'fade-in' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Text - Right (Arabic) / Left (English) */}
                    <div className={`w-full lg:w-1/2 flex flex-col gap-16 md:gap-28 order-1 lg:order-1 ${language === 'en' ? 'text-left' : 'text-right'}`}>
                        {/* Copywriting Section */}
                        <div className={`flex flex-col gap-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                            <h3 className="text-[#FFB800] text-3xl md:text-4xl font-bold mb-2">
                                {t('copywriting')}
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-loose font-medium opacity-90">
                                {t('copywritingDesc')}
                            </p>
                        </div>

                        {/* Designs Section + Mobile Images */}
                        <div className={`flex flex-col gap-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                            <h3 className="text-[#FFB800] text-3xl md:text-4xl font-bold mb-2">
                                {t('designs')}
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-loose font-medium opacity-90">
                                {t('designsDesc')}
                            </p>
                            
                            {/* Images Grid (Mobile Only) */}
                            <div className="lg:hidden grid grid-cols-2 gap-4 mt-4">
                                {mediaItems.filter(item => item.type === 'image').map((item, idx) => (
                                    <div 
                                        key={item.id} 
                                        className="relative aspect-square rounded-xl overflow-hidden shadow-xl"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <Image src={item.src} alt={item.alt} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Videos Section + Mobile Videos */}
                        <div className={`flex flex-col gap-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                            <h3 className="text-[#FFB800] text-3xl md:text-4xl font-bold mb-2">
                                {t('videos')}
                            </h3>
                            <p className="text-white text-xl md:text-2xl leading-loose font-medium opacity-90">
                                {t('videosDesc')}
                            </p>

                            {/* Videos Grid (Mobile Only) */}
                            <div className="lg:hidden grid grid-cols-2 gap-4 mt-4">
                                {mediaItems.filter(item => item.type === 'video').map((item, idx) => (
                                    <div 
                                        key={item.id} 
                                        className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-xl"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <Image src={item.src} alt={item.alt} fill className="object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

