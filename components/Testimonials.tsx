"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
    '/testimonials/wa1.jpg',
    '/testimonials/wa2.jpg',
    '/testimonials/wa3.jpg',
    '/testimonials/wa4.jpg',
    '/testimonials/wa5.jpg',
    '/testimonials/wa6.jpg',
    '/testimonials/wa7.jpg',
    '/testimonials/wa8.jpg',
    '/testimonials/wa9.jpg',
];

export default function Testimonials() {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

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
            setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [isPaused]);

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    const prev = () => {
        setCurrentIndex((p) => (p - 1 + testimonialImages.length) % testimonialImages.length);
    };

    const next = () => {
        setCurrentIndex((p) => (p + 1) % testimonialImages.length);
    };

    // Show 3 images at a time on desktop
    const getVisibleImages = () => {
        const images = [];
        for (let i = -1; i <= 1; i++) {
            const idx = (currentIndex + i + testimonialImages.length) % testimonialImages.length;
            images.push({ src: testimonialImages[idx], index: idx, offset: i });
        }
        return images;
    };

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="py-24 bg-[#0A0118]"
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                        {t('testimonialsTitle')}
                    </h2>
                    <p className="text-white/60 text-lg">
                        {t('testimonialsSubtitle')}
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className={`relative ${isVisible ? 'fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: '300ms' }}
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
                    <div className="overflow-hidden px-12 md:px-8">
                        <div className="hidden md:flex gap-6 items-center justify-center">
                            {getVisibleImages().map((img) => (
                                <div
                                    key={img.index}
                                    className={`transition-all duration-500 ease-in-out rounded-2xl overflow-hidden border-2 ${img.offset === 0
                                        ? 'border-[#FFB800]/50 scale-105 shadow-2xl shadow-[#FFB800]/20'
                                        : 'border-white/10 scale-95 opacity-70'
                                        }`}
                                    style={{ width: '450px', flexShrink: 0 }}
                                >
                                    <img
                                        src={img.src}
                                        alt={`Client testimonial ${img.index + 1}`}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Mobile: single image */}
                        <div className="md:hidden flex justify-center">
                            <div className="rounded-2xl overflow-hidden border-2 border-[#FFB800]/50 shadow-2xl shadow-[#FFB800]/20 w-full">
                                <img
                                    src={testimonialImages[currentIndex]}
                                    alt={`Client testimonial ${currentIndex + 1}`}
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8 flex-wrap px-4">
                        {testimonialImages.map((_, i) => (
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
        </section>
    );
}
