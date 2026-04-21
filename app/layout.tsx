import type { Metadata } from "next";
import { Alexandria, Playfair_Display } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import ConsentBanner from "@/components/ConsentBanner";

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

    // Title: Unique, concise, describes the page content accurately
    title: {
        default: "Dr.mediashot | للتسويق الطبي وانظمة الادارة والمتابعة",
        template: "%s | Dr.mediashot"
    },

    // Description: Short, compelling, summarizes the page for the user
    description: "Dr.mediashot وكالة متخصصة في التسويق الطبي الرقمي للأطباء والعيادات. نساعدك في زيادة الحجوزات وبناء حضورك الرقمي عبر السوشيال ميديا، الإعلانات الممولة، وأنظمة إدارة العيادات الذكية.",

    // Keywords: What patients/doctors actually search for
    keywords: [
        // Core service keywords
        "تسويق طبي",
        "تسويق رقمي للأطباء",
        "تسويق عيادات",
        "زيادة حجوزات العيادة",
        "نظام إدارة عيادة",
        "إدارة سوشيال ميديا للأطباء",
        "dr.mediashot",
        "وكالة تسويق طبي",
        "تصميم موقع عيادة",
        "إعلانات ممولة للأطباء",
        "استشارات تسويقية للأطباء",
        "برنامج إدارة عيادات",
        "إدارة عيادات",

        // Egypt-specific
        "تسويق طبي في مصر",
        "تسويق عيادات في مصر",
        "وكالة تسويق طبي مصر",
        "تصميم موقع عيادة في مصر",
        "إعلانات ممولة للأطباء في مصر",
        "نظام إدارة عيادة مصر",
        "سوشيال ميديا للأطباء مصر",
        "أفضل شركة تسويق طبي في مصر",
        "تسويق طبي القاهرة",
        "تسويق طبي الإسكندرية",

        // Gulf-specific
        "تسويق طبي السعودية",
        "تسويق عيادات السعودية",
        "تسويق طبي الإمارات",
        "تسويق عيادات دبي",
        "تسويق طبي الكويت",
        "تسويق طبي قطر",
        "تسويق طبي البحرين",
        "تسويق طبي عمان",
        "وكالة تسويق طبي الخليج",
        "تسويق مستشفيات الخليج",
        "إعلانات جوجل للأطباء السعودية",
        "سوشيال ميديا للأطباء الخليج",
        "تسويق طبي الأردن",
        "تسويق عيادات الأردن",
        "وكالة تسويق طبي الأردن",
        "تصميم موقع عيادة في الأردن",
        "إعلانات ممولة للأطباء في الأردن",
        "نظام إدارة عيادة الأردن",
        "سوشيال ميديا للأطباء الأردن",
        "أفضل شركة تسويق طبي في الأردن",
        "تسويق طبي عمان",
        "تسويق عيادات عمان",
        "وكالة تسويق طبي عمان",
        "تصميم موقع عيادة في عمان",
        "إعلانات ممولة للأطباء في عمان",
        "نظام إدارة عيادة عمان",
        "سوشيال ميديا للأطباء عمان",
        "أفضل شركة تسويق طبي في عمان",
        "تسويق طبي لبنان",
        "تسويق عيادات لبنان",
        "وكالة تسويق طبي لبنان",
        "تصميم موقع عيادة في لبنان",
        "إعلانات ممولة للأطباء في لبنان",
        "نظام إدارة عيادة لبنان",
        "سوشيال ميديا للأطباء لبنان",
        "أفضل شركة تسويق طبي في لبنان",
        "تسويق طبي المغرب",
        "تسويق عيادات المغرب",
        "وكالة تسويق طبي المغرب",
        "تصميم موقع عيادة في المغرب",
        "إعلانات ممولة للأطباء في المغرب",
        "نظام إدارة عيادة المغرب",
        "سوشيال ميديا للأطباء المغرب",
        "أفضل شركة تسويق طبي في المغرب",
        "تسويق طبي فلسطين",
        "تسويق عيادات فلسطين",
        "وكالة تسويق طبي فلسطين",
        "تصميم موقع عيادة في فلسطين",
        "إعلانات ممولة للأطباء في فلسطين",
        "نظام إدارة عيادة فلسطين",
        "سوشيال ميديا للأطباء فلسطين",
        "أفضل شركة تسويق طبي في فلسطين",
        "تسويق طبي تونس",
        "تسويق عيادات تونس",
        "وكالة تسويق طبي تونس",
        "تصميم موقع عيادة في تونس",
        "إعلانات ممولة للأطباء في تونس",
        "نظام إدارة عيادة تونس",
        "سوشيال ميديا للأطباء تونس",
        "أفضل شركة تسويق طبي في تونس",
        "تسويق طبي الجزائر",
        "تسويق عيادات الجزائر",
        "وكالة تسويق طبي الجزائر",
        "تصميم موقع عيادة في الجزائر",
        "إعلانات ممولة للأطباء في الجزائر",
        "نظام إدارة عيادة الجزائر",
        "سوشيال ميديا للأطباء الجزائر",
        "أفضل شركة تسويق طبي في الجزائر",
        "تسويق طبي ليبيا",
        "تسويق عيادات ليبيا",
        "وكالة تسويق طبي ليبيا",
        "تصميم موقع عيادة في ليبيا",
        "إعلانات ممولة للأطباء في ليبيا",
        "نظام إدارة عيادة ليبيا",
        "سوشيال ميديا للأطباء ليبيا",
        "أفضل شركة تسويق طبي في ليبيا",
        "تسويق طبي السودان",
        "تسويق عيادات السودان",
        "وكالة تسويق طبي السودان",
        "تصميم موقع عيادة في السودان",
        "إعلانات ممولة للأطباء في السودان",
        "نظام إدارة عيادة السودان",
        "سوشيال ميديا للأطباء السودان",
        "أفضل شركة تسويق طبي في السودان",
    ],

    authors: [{ name: "Dr.Mediashot", url: "https://dr.mediashot.agency" }],
    creator: "Dr.Mediashot",
    publisher: "Dr.Mediashot",

    // Canonical URL
    alternates: {
        canonical: 'https://dr.mediashot.agency',
        languages: {
            'ar': 'https://dr.mediashot.agency',
            'en': 'https://dr.mediashot.agency/en',
        },
    },

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
        apple: '/favicon-circle.png',
    },

    // Open Graph: for social sharing (Facebook, WhatsApp, LinkedIn)
    openGraph: {
        title: "Dr.mediashot | وكالة التسويق الطبي الرقمي",
        description: "نساعد الأطباء والعيادات في بناء حضور رقمي قوي، زيادة الحجوزات، وإدارة العيادة باحترافية.",
        url: 'https://dr.mediashot.agency',
        siteName: 'Dr.mediashot',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Dr.mediashot - وكالة التسويق الطبي الرقمي',
            },
        ],
        type: "website",
        locale: "ar_EG",
        alternateLocale: "en_US",
    },

    // Twitter Cards
    twitter: {
        card: "summary_large_image",
        title: "Dr.mediashot | التسويق الطبي الرقمي للأطباء",
        description: "نساعد الأطباء في زيادة الحجوزات وبناء الحضور الرقمي المحترف.",
        images: ['/logo.png'],
    },

    // Allow Google to fully index and follow the site
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

    // Google Search Console verification
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
                {/* 
                    STEP 1: Consent Mode v2 — Default DENIED
                    Must run BEFORE any GA scripts (beforeInteractive)
                    as per Google's official Consent Mode v2 docs
                */}
                <Script id="consent-default" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'ad_user_data': 'denied',
                            'ad_personalization': 'denied',
                            'analytics_storage': 'denied',
                            'wait_for_update': 500,
                        });
                        gtag('set', 'url_passthrough', true);
                        gtag('set', 'ads_data_redaction', true);
                    `}
                </Script>

                {/* STEP 2: Load GA — after consent default is set */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-HL6HS2LEM0"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-HL6HS2LEM0');
                    `}
                </Script>

                {/* STEP 3: Restore consent from localStorage on every page load */}
                <Script id="consent-restore" strategy="afterInteractive">
                    {`
                        (function() {
                            var saved = localStorage.getItem('dr_mediashot_consent');
                            if (saved === 'granted') {
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('consent', 'update', {
                                    'ad_storage': 'granted',
                                    'ad_user_data': 'granted',
                                    'ad_personalization': 'granted',
                                    'analytics_storage': 'granted',
                                });
                            }
                        })();
                    `}
                </Script>

                {/* STEP 4: App + Consent Banner */}
                <LanguageProvider>
                    {children}
                    <ConsentBanner />
                </LanguageProvider>
            </body>
        </html>
    );
}
