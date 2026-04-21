"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Pen, Palette, Video } from 'lucide-react';

export default function ContentProduction() {
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

    const contentServices = [
        {
            id: 'copywriting',
            icon: Pen,
            title: t('copywriting'),
            description: t('copywritingDesc'),
        },
        {
            id: 'designs',
            icon: Palette,
            title: t('designs'),
            description: t('designsDesc'),
        },
        {
            id: 'videos',
            icon: Video,
            title: t('videos'),
            description: t('videosDesc'),
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-gradient-to-b from-[#0A0118] to-[#1a0b2e]"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                        {t('contentProduction')}
                    </h2>
                    <p className="text-[#FFB800] text-xl md:text-2xl font-semibold">
                        {t('contentProductionSubtitle')}
                    </p>
                </div>

                {/* Content Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contentServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`glass-card-purple p-8 text-center hover:scale-105 transition-transform duration-300 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-[#FFB800]/20 rounded-full flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-[#FFB800]" />
                                    </div>
                                </div>
                                <h3 className="text-[#FFB800] text-2xl md:text-3xl font-bold mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/90 text-lg leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
