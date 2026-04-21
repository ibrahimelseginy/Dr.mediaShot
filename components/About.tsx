"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import Logo from '@/components/Logo';

export default function About() {
    const { t } = useLanguage();
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
            { threshold: 0.2 }
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

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
        >
            <div className="container mx-auto px-4 relative z-10">
                <div
                    className={`max-w-4xl mx-auto text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    {/* Section Title */}
                    <div className="mb-12 flex flex-col items-center gap-4">
                        <h2 className="section-title">
                            {t('whoWeAreTitle')}
                        </h2>
                        <img src="/logo.png" alt="Dr. Media Shot" className="w-[450px] h-auto md:w-[800px]" />
                    </div>

                    {/* Content Card */}
                    <div className="glass-card-purple p-8 md:p-12 space-y-8">
                        <h3 className="text-[#FFB800] text-3xl md:text-5xl font-bold">
                            {t('whoWeAreSubtitle')}
                        </h3>

                        <div className="space-y-6">
                            <p className="text-white text-xl md:text-2xl font-medium">
                                {t('whoWeAreDescription')}
                            </p>

                            <p className="text-[#FFB800] text-lg md:text-xl font-bold">
                                {t('whoWeAreTagline')}
                            </p>

                            <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-8 border-t border-white/10 pt-8">
                                {t('whoWeAreSelection')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

