"use client";


import { useLanguage } from '@/lib/LanguageContext';
import { Activity } from 'lucide-react';

export default function AnnouncementBar() {
    const { t } = useLanguage();

    return (
        <div className="bg-[#0a0118] py-2 border-b border-white/5 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <div className="marquee flex items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center mx-12">
                            <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-wider">
                                {t('announcement')}
                            </span>
                            <span className="text-white/20 mx-4">•</span>
                        </div>
                    ))}
                </div>
                <div className="marquee flex items-center" aria-hidden="true">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center mx-12">
                            <span className="text-[#FFB800] font-bold text-xs md:text-sm tracking-wider">
                                {t('announcement')}
                            </span>
                            <span className="text-white/20 mx-4">•</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

