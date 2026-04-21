import type { Metadata } from "next";
import { Alexandria, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const alexandria = Alexandria({
    subsets: ["arabic", "latin"],
    variable: "--font-alexandria",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://dr.mediashot.agency'),
    title: {
        default: "Dr.MediaShot",
        template: "%s | Dr.MediaShot"
    },
    description: "نحن وكالة Media Shot نقدم خدمات التسويق الرقمي والمحتوى الإبداعي لعيادات الأطباء في الوطن العربي. نساعدك في زيادة الحجوزات وتعزيز تواجدك الرقمي.",
    keywords: ["التسويق الطبي", "Media Shot", "dr.mediashot", "dr.media shot", "تسويق عيادات", "تسويق رقمي للأطباء", "صناعة محتوى طبي"],
    authors: [{ name: "Media Shot Agency", url: "https://dr.mediashot.agency" }],
    creator: "Media Shot",
    publisher: "Media Shot",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        shortcut: '/favicon.svg',
        apple: '/favicon-circle.png', // Keep PNG for Apple if needed
    },
    openGraph: {
        title: "Media Shot - وكالة تسويق طبي متخصصة",
        description: "نزيد من وصولك للمرضى من خلال التسويق الرقمي الحديث للأطباء.",
        url: 'https://dr.mediashot.agency',
        siteName: 'Dr. Media Shot',
        images: [
            {
                url: '/logo.png',
                width: 800,
                height: 600,
                alt: 'Media Shot Logo',
            },
        ],
        type: "website",
        locale: "ar_EG",
        alternateLocale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Media Shot - التسويق الرقمي للأطباء",
        description: "حلول تسويقية متكاملة لعيادتك مع Dr. Media Shot",
        images: ['/logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: '9J6rHHIgXN53LR_tI94VKhcutXk38pz9c1uJoBgfVIE',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body
                className={`${alexandria.variable} ${playfair.variable} font-alexandria antialiased`}
            >
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
