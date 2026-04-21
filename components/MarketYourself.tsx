"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { Download, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MarketYourself() {
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

    const features = [
        language === 'ar' ? 'ليه دكتور شاطر ... مش معروف؟' : 'Why a good doctor... is not known?',
        language === 'ar' ? 'يعني ايه تسويق طبي؟' : 'What is medical marketing?',
        language === 'ar' ? 'الفرق بينه وبين التسويق العادي!' : 'The difference between it and regular marketing!',
        language === 'ar' ? 'هل التسويق الطبي ضد اخلاقيات المهنه ؟' : 'Is medical marketing against professional ethics?',
        language === 'ar' ? 'ازاي المريض بيفكر و يختار ؟' : 'How does the patient think and choose?',
        language === 'ar' ? 'اختبار سريع' : 'Quick test',
        language === 'ar' ? 'التسويق يعني اعلان و يافطه؟' : 'Marketing means ads and signs?',
        language === 'ar' ? 'يعني ايه نظام تسويقي و استراتيجي ؟' : 'What is a marketing and strategic system?',
    ];

    return (
        <section id="market-yourself" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800] rounded-full blur-[150px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] -ml-64 -mb-64" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                        <BookOpen className="w-6 h-6" />
                        <span className="text-xl md:text-2xl font-bold tracking-wider">{t('freeCourse')}</span>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                        {t('marketYourselfTitle')}
                    </h2>

                    <p className={`text-base md:text-lg text-white/50 mb-12 leading-relaxed ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                        {t('marketYourselfSubtitle')}
                    </p>

                    {/* Download Box */}
                    <div className={`glass-card-purple p-8 md:p-12 mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                        <div className="flex flex-col md:flex-row items-center gap-8 text-right md:text-right">
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative w-48 h-64 bg-gradient-to-br from-[#FFB800] to-[#FF8A00] rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 transform hover:rotate-3 transition-transform duration-500">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-black/10 rounded-t-lg" />
                                    <img src="/logo.png" alt="Logo" className="w-24 h-auto opacity-80 mb-4 brightness-0" />
                                    <div className="text-black font-black text-center leading-tight">
                                        DR.Media Shot
                                    </div>
                                    <div className="mt-8 bg-black/10 p-2 rounded-full">
                                        <Download className="w-6 h-6 text-black" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 space-y-6">
                                <h3 className="text-[#FFB800] text-2xl md:text-4xl font-bold">
                                    {t('medicalMarketingGuide')}
                                </h3>
                                <ul className="space-y-3">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                                            <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <a
                                        href="https://drive.google.com/uc?export=download&id=1yKYormFYTcHR9FZEE1XlK7ZVGf5bh3ae"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary w-full md:w-auto flex items-center justify-center gap-3 py-4 px-8 text-xl shadow-xl shadow-orange-500/20 group cursor-pointer"
                                    >
                                        <Download className="w-6 h-6 group-hover:bounce" />
                                        <span>{t('downloadGuide')}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Part 2 Teaser */}
                    <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
                        <div className="glass-card-purple p-8 md:p-12 text-center">
                            <div className="inline-block px-6 py-2 rounded-2xl bg-[#FFB800]/10 border border-[#FFB800]/20 mb-6">
                                <span className="text-[#FFB800] font-bold text-lg tracking-wider">
                                    {language === 'ar' ? 'قريباً' : 'Coming Soon'}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                                {language === 'ar' ? 'الجزء التاني :- ازاي تعمل النظام التسويقي' : 'Part 2: How to build your marketing system'}
                            </h2>
                            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                                {language === 'ar'
                                    ? 'وايه الفرق بين ال'
                                    : 'What is the difference between'
                                }
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                                    <span className="text-[#FFB800] font-bold text-lg">Marketing Strategy</span>
                                </div>
                                <span className="text-white/40 text-2xl font-bold">&</span>
                                <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                                    <span className="text-[#FFB800] font-bold text-lg">Marketing Plan</span>
                                </div>
                            </div>
                            <p className="text-white/70 text-lg mb-10">
                                {language === 'ar' ? 'وازاي تعملهم' : 'And how to create them'}
                            </p>
                            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] font-bold text-lg hover:bg-[#FFB800]/20 transition-all cursor-pointer">
                                <span>{language === 'ar' ? 'تابع وكن اول من يصله الجزء التاني' : 'Follow and be the first to receive Part 2'}</span>
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
