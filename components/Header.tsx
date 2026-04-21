"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, Globe, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Header() {
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('home'), href: '#home' },
        { name: t('services'), href: '#services' },
        { name: t('about'), href: '#about' },
        { name: t('contact'), href: '#contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'ar' ? 'en' : 'ar');
    };

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                    ? 'bg-black/80 backdrop-blur-xl py-2 shadow-lg border-b border-white/10' 
                    : 'bg-transparent py-3'
                }`}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
                <nav className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        
                        {/* Right / Left based on language: Language Switcher & CTA */}
                        <div className={`flex items-center gap-4 ${language === 'en' ? 'order-3' : 'order-1'}`}>
                            {/* Desktop CTA */}
                            <a 
                                href="#contact"
                                className="hidden md:flex items-center gap-2 bg-[#FFB800] text-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300 scale-hover"
                            >
                                <Phone size={18} />
                                <span>{t('contact')}</span>
                            </a>

                            {/* Language Button */}
                            <button 
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 text-white hover:text-[#FFB800] transition-colors font-bold px-3 py-2 rounded-lg bg-white/5"
                            >
                                <Globe size={20} />
                                <span className="uppercase">{language === 'ar' ? 'EN' : 'العربية'}</span>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* Center: Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8 order-2">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    className="text-white font-bold text-lg hover:text-[#FFB800] transition-colors relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFB800] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Left: Logo (Right for English) */}
                        <div className={`flex items-center ${language === 'en' ? 'order-1' : 'order-3'} slide-in-right`}>
                            <a href="#home" className="flex items-center">
                                <img src="/logo.png" alt="Dr. Media Shot" className="h-10 md:h-16 w-auto object-contain mt-4 md:mt-8 float hover:scale-110 transition-transform duration-300 cursor-pointer" />
                            </a>
                        </div>

                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black transform transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : (language === 'ar' ? 'translate-x-full' : '-translate-x-full')}`}>
                <div className="flex flex-col h-full p-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                    <div className="flex justify-between items-center mb-12">
                        <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
                        <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white font-bold text-3xl hover:text-[#FFB800] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto pt-12 border-t border-white/10">
                        <p className="text-white/60 mb-6 font-bold">{t('contact')}</p>
                        <div className="flex gap-6 mb-8">
                            <a href="#" className="p-3 bg-white/5 rounded-full text-white hover:bg-[#FFB800] hover:text-black transition-all">
                                <Instagram size={28} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full text-white hover:bg-[#FFB800] hover:text-black transition-all">
                                <Facebook size={28} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full text-white hover:bg-[#FFB800] hover:text-black transition-all">
                                <Youtube size={28} />
                            </a>
                        </div>
                        <a 
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-3 bg-[#FFB800] text-black py-5 rounded-2xl font-bold text-xl hover:bg-white transition-all"
                        >
                            <Phone size={24} />
                            <span>{t('contact')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
