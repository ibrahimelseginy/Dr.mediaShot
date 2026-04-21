"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "dr_mediashot_consent";

export default function ConsentBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(CONSENT_KEY);
        if (!saved) {
            setVisible(true);
        } else {
            // Re-apply consent on every load
            const granted = saved === "granted";
            updateConsent(granted);
        }
    }, []);

    const updateConsent = (granted: boolean) => {
        if (typeof window === "undefined") return;
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
            (window.dataLayer as unknown[]).push(args);
        }
        gtag("consent", "update", {
            ad_user_data: granted ? "granted" : "denied",
            ad_personalization: granted ? "granted" : "denied",
            ad_storage: granted ? "granted" : "denied",
            analytics_storage: granted ? "granted" : "denied",
        });
    };

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, "granted");
        updateConsent(true);
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem(CONSENT_KEY, "denied");
        updateConsent(false);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
            dir="rtl"
        >
            <div
                className="max-w-4xl mx-auto rounded-2xl p-5 md:p-6 shadow-2xl border border-white/10"
                style={{
                    background: "linear-gradient(135deg, rgba(10,1,24,0.97) 0%, rgba(30,10,60,0.97) 100%)",
                    backdropFilter: "blur(20px)",
                }}
            >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    {/* Icon */}
                    <div className="text-4xl flex-shrink-0">🍪</div>

                    {/* Text */}
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">
                            نستخدم ملفات تعريف الارتباط (Cookies)
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            نستخدم ملفات تعريف الارتباط لتحليل زيارات الموقع وتحسين تجربتك. بياناتك لن تُشارك مع طرف ثالث دون موافقتك.{" "}
                            <span className="text-[#FFB800]">
                                Google Analytics
                            </span>{" "}
                            يُستخدم فقط لتحسين محتوى الموقع.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
                        <button
                            onClick={handleDecline}
                            className="flex-1 md:flex-none px-5 py-2.5 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-sm font-medium"
                        >
                            رفض
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold text-sm text-black transition-all hover:scale-105"
                            style={{ background: "linear-gradient(135deg, #FFB800, #FF8C00)" }}
                        >
                            قبول الكل ✓
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
