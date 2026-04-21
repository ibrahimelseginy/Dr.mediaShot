import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const AnnouncementBar = dynamic(() => import('@/components/AnnouncementBar'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Process = dynamic(() => import('@/components/Process'), { ssr: true });
const ContentProduction = dynamic(() => import('@/components/ContentProduction'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const MarketYourself = dynamic(() => import('@/components/MarketYourself'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false });

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <AnnouncementBar />
            <About />
            <Services />
            <Process />

            <Stats />
            <Testimonials />
            <MarketYourself />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
