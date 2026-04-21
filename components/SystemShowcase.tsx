"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const systemImages = [
    '/system/1.png',
    '/system/2.png',
    '/system/3.png',
    '/system/4.png',
    '/system/5.png',
];

export default function SystemShowcase() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
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

    // Auto-scroll
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % systemImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    const prev = () => {
        setCurrentIndex((p) => (p - 1 + systemImages.length) % systemImages.length);
    };

    const next = () => {
        setCurrentIndex((p) => (p + 1) % systemImages.length);
    };

    // Show 3 images at a time on desktop
    const getVisibleImages = () => {
        const images = [];
        for (let i = -1; i <= 1; i++) {
            const idx = (currentIndex + i + systemImages.length) % systemImages.length;
            images.push({ src: systemImages[idx], index: idx, offset: i });
        }
        return images;
    };

    return (
        <div ref={sectionRef} className="w-full my-6">
            <div className="w-full">
                {/* Carousel */}
                <div
                    className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: '200ms' }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#FFB800]/20 hover:bg-[#FFB800]/40 text-white flex items-center justify-center transition-all hover:scale-110 ml-1 md:-ml-6"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#FFB800]/20 hover:bg-[#FFB800]/40 text-white flex items-center justify-center transition-all hover:scale-110 mr-1 md:-mr-6"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    {/* Images Grid */}
                    <div className="overflow-hidden px-8 md:px-4">
                        <div className="hidden md:flex gap-6 items-center justify-center">
                            {getVisibleImages().map((img) => (
                                <div
                                    key={img.index}
                                    className={`transition-all duration-500 ease-in-out rounded-xl overflow-hidden border-2 ${img.offset === 0
                                        ? 'border-[#FFB800]/50 scale-100 shadow-2xl shadow-[#FFB800]/20 z-10'
                                        : 'border-white/10 scale-90 opacity-60'
                                        }`}
                                    style={{ width: '600px', flexShrink: 0 }}
                                >
                                    <img
                                        src={img.src}
                                        alt={`System interface ${img.index + 1}`}
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Mobile: single image */}
                        <div className="md:hidden flex justify-center">
                            <div className="rounded-xl overflow-hidden border-2 border-[#FFB800]/50 shadow-2xl shadow-[#FFB800]/20 w-full">
                                <img
                                    src={systemImages[currentIndex]}
                                    alt={`System interface ${currentIndex + 1}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8 flex-wrap px-4">
                        {systemImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${i === currentIndex
                                    ? 'w-6 h-2 md:w-8 md:h-3 bg-[#FFB800]'
                                    : 'w-2 h-2 md:w-3 md:h-3 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
