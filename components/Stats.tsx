"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

import Link from 'next/link';
import Image from 'next/image';

export default function Stats() {
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

    const results = [
        { title: t('result1Title'), desc: t('result1Desc') },
        { title: t('result2Title'), desc: t('result2Desc') },
        { title: t('result3Title'), desc: t('result3Desc') },
        { title: t('result4Title'), desc: t('result4Desc') },
    ];

    const chartLabels = [
        {
            title: language === 'ar' ? 'التفاعلات مع المحتوى' : 'Engagement',
            image: '/images/results/interactions-graph.png'
        },
        {
            title: language === 'ar' ? 'المشاهدات' : 'Views',
            image: '/images/results/views-graph.png'
        },
        {
            title: language === 'ar' ? 'الزيارات' : 'Visits',
            image: '/images/results/visits-graph.png'
        },
        {
            title: language === 'ar' ? 'الوصول' : 'Reach',
            image: '/images/results/reach-graph.png'
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    <div className="inline-block bg-[#1a0b2e] px-8 py-3 rounded-xl border border-purple-500/20 shadow-lg mb-4">
                        <h2 className="text-white text-3xl md:text-5xl font-bold">
                            {t('resultsTitle')}
                        </h2>
                    </div>
                </div>

                {/* Key Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {results.map((item, index) => (
                        <div
                            key={index}
                            className={`space-y-2 ${isVisible ? 'fade-in' : 'opacity-0'} text-start`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <h3 className="text-white text-xl md:text-2xl font-bold flex items-center gap-3 justify-start">
                                <span className={`${language === 'ar' ? 'order-2' : 'order-1'} text-[#FFB800]`}>{item.title.split(' - ')[0]}</span>
                                <span className={`${language === 'ar' ? 'order-1' : 'order-2'} text-white/60`}>- {item.title.split(' - ')[1]}</span>
                            </h3>
                            <p className="text-white/80 text-lg">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Charts Placeholder Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chartLabels.map((chart, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-4 shadow-2xl ${isVisible ? 'fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${(index + 4) * 150}ms` }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-400 text-xs text-[10px]">▼ {language === 'ar' ? 'تصدير' : 'Export'}</span>
                                <span className="text-gray-800 text-sm font-bold">{chart.title}</span>
                            </div>

                            {/* Graph Image */}
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={chart.image}
                                    alt={chart.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

