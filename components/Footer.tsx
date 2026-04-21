"use client";

import { Facebook, Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';


export default function Footer() {
    const { t, language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center space-y-12">

                {/* Logo */}
                <div className="flex flex-col items-center">
                    <img src="/logo.png" alt="Dr. Media Shot" className="h-16 md:h-20 w-auto object-contain float hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        <span className="text-white">{language === 'ar' ? 'لو انت دكتور' : 'If you are a doctor'}</span>
                        <span className="text-[#FFB800] px-2">..</span>
                        <span className="text-[#FFB800]">{language === 'ar' ? 'فإحنا العلاج' : 'we are the cure'}</span>
                    </h2>
                </div>

                {/* Map & Address */}
                <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
                    <div className="text-center space-y-2">
                        <p className="text-white/80 text-lg font-bold">
                            {language === 'ar' ? '📍 كفر الشيخ، مصر' : '📍 Kafr El Sheikh, Egypt'}
                        </p>
                        <p className="text-white/60 text-sm">
                            {language === 'ar' ? 'شارع إبراهيم مغازي 45' : 'Ibrahim Moghazy Street 45'}
                        </p>
                    </div>

                    {/* Live Map Embed */}
                    <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.0145214041185!2d30.9416!3d31.1042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA2JzE1LjEiTiAzMMKwNTYnMjkuOCJF!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <a
                            href="https://maps.apple/p/ggCU7IDLsJgzGa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 right-6 px-6 py-2 rounded-full bg-[#FFB800] text-[#0a0118] text-sm font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <span>Open In Maps</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col items-center gap-2">
                    <a href="tel:+201004580185" className="text-xl font-bold text-white hover:text-[#FFB800] transition-colors flex items-center gap-2 dir-ltr">
                        <span className="text-[#FFB800]">📞</span>
                        <span dir="ltr">0100 4580 185</span>
                    </a>
                </div>

                {/* Social Media */}
                <div className="flex justify-center gap-6">
                    <a href="https://www.facebook.com/people/MEDIA-SHOT/61559207184115/?locale=ar_AR" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white">
                        <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/media_shot1/?igsh=MWY4Z2NibGc4aHNlNQ%3D%3D#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white">
                        <Instagram className="w-6 h-6" />
                    </a>

                </div>

                {/* Copyright */}
                <div className="pt-12 border-t border-white/5 text-white/40 text-sm">
                    © {currentYear} Media Shot All rights reserved
                </div>
            </div>
        </footer>
    );
}

