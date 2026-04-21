"use client";

import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function CTA() {
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
            { threshold: 0.3 }
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
            ref={sectionRef}
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-4">
                <div
                    className={`relative max-w-5xl mx-auto bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl ${isVisible ? 'fade-in' : 'opacity-0'
                        }`}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {t('ctaTitle')}
                        </h2>

                        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                            {t('ctaSubtitle')}
                        </p>

                        <a
                            href="tel:01004580185"
                            className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <Phone className="w-6 h-6" />
                            <span>{t('ctaDirect')}</span>
                            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''} transition-transform`} />
                        </a>

                        {/* Phone Number Display */}
                        <div className="mt-8">
                            <a
                                href="tel:01004580185"
                                className="text-2xl md:text-3xl font-bold text-white hover:text-amber-300 transition-colors"
                                dir="ltr"
                            >
                                0100 458 0185
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
