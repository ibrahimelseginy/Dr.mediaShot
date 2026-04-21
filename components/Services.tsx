"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import SystemShowcase from './SystemShowcase';
import WebsiteShowcase from './WebsiteShowcase';

export default function Services() {
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

    const services: {
        id: string;
        title: string;
        subtitle?: string;
        description: string;
        result: string;
        links?: { url: string; label: string; isVideo?: boolean }[];
    }[] = [
            {
                id: 'marketAnalysis',
                title: t('marketAnalysis'),
                description: t('marketAnalysisTitle') + ' ' + t('marketAnalysisDesc'),
                result: t('marketAnalysisResult'),
            },
            {
                id: 'branding',
                title: t('branding'),
                description: t('brandingTitle') + ' ' + t('brandingDesc'),
                result: t('brandingResult'),
            },
            {
                id: 'digitalPresence',
                title: t('digitalPresence'),
                description: t('digitalPresenceTitle') + ' ' + t('digitalPresenceDesc'),
                result: t('digitalPresenceResult'),
            },
            {
                id: 'paidAds',
                title: t('paidAds'),
                description: t('paidAdsTitle'),
                result: t('paidAdsResult'),
            },
            {
                id: 'customerService',
                title: t('customerService'),
                description: t('customerServiceTitle'),
                result: t('customerServiceResult'),
            },
            {
                id: 'webDevelopment',
                title: t('webDevelopment'),
                subtitle: t('webDevelopmentSubtitle'),
                description: t('webDevelopmentTitle'),
                result: t('webDevelopmentResult'),
                links: [
                    { url: 'https://drive.google.com/file/d/14E6mHZzy9bkNf2dZaPtjezUhS4JYaUcI/view?usp=drive_link', label: language === 'ar' ? 'فيديو توضيحي للسيستم' : 'System Overview Video', isVideo: true },
                    { url: 'https://khaki-sheep-702294.hostingersite.com/', label: language === 'ar' ? 'رابط الموقع (نسخة تجريبية)' : 'Website Demo Link', isVideo: false }
                ]
            },
            {
                id: 'aiAutomation',
                title: t('aiAutomation'),
                subtitle: t('aiAutomationSubtitle'),
                description: t('aiAutomationTitle'),
                result: t('aiAutomationResult'),
            },
        ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-24"
        >
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    <h2 className="section-title">
                        {t('servicesTitle')}
                    </h2>
                </div>

                {/* Services Rows */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`glass-card-purple p-8 md:p-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-12 text-start">
                                {/* Title */}
                                <div className="w-full md:w-1/3">
                                    <h3 className="text-[#FFB800] text-3xl md:text-4xl font-bold flex flex-col gap-4">
                                        <span className="leading-tight">{service.title}</span>
                                        {service.subtitle && (
                                            <span className="text-2xl md:text-3xl opacity-90 leading-tight">
                                                {service.subtitle}
                                            </span>
                                        )}
                                    </h3>
                                </div>

                                {/* Description & Result */}
                                <div className="w-full md:w-2/3 space-y-8">
                                    <p className="text-white text-lg md:text-xl font-medium leading-[1.8]">
                                        {service.description}
                                    </p>
                                    <p className="text-white/80 text-base md:text-lg leading-[1.8]">
                                        <span className="text-[#FFB800] font-bold">
                                            {language === 'ar' ? 'النتيجة:' : 'Result:'}
                                        </span>{' '}
                                        {service.result.replace('النتيجة:', '').replace('Result:', '')}
                                    </p>

                                    {service.id === 'webDevelopment' && (
                                        <div className="w-full">
                                            <WebsiteShowcase />
                                            <SystemShowcase />
                                        </div>
                                    )}

                                    {service.links && (
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            {service.links.map((link, idx) => (
                                                <a
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${link.isVideo ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[#FFB800] hover:bg-[#FFB800]/90 text-black'}`}
                                                >
                                                    {link.isVideo ? <span className="text-xl">▶</span> : <span className="text-xl">🌐</span>}
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

