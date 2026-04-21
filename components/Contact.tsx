"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const initialState = {
    // Section 1
    name: '',
    specialty: '',
    clinicName: '',
    address: '',
    workHours: '',
    // Section 2
    focusService: '',
    whyFocus: '',
    // Section 3
    certificates: '',
    experienceYears: '',
    competitiveAdvantage: '',
    // Section 5
    targetPatientDesc: '',
    patientMainProblem: '',
    // Section 6
    mainCompetitors: '',
    competitorsNegative: '',
    competitorsPositive: '',
    // Section 7
    bookingMethod: [] as string[],
    hasSchedulingSystem: '',
    dailyCapacity: '',
    outsidePatients: '',
    // Section 8
    dealtWithAgencies: '',
    prevSystemType: '',
    prevMarketingProblems: [] as string[],
    whatToChange: '',
    // Section 9
    videoAgree: '',
    prevMedia: '',
    socialLinks: '',
    // Section 10
    primaryGoal: '',
    threeMonthGoal: '',
    // Notes
    notes: ''
};

export default function Contact() {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Construct WhatsApp message
        const whatsappMsg = encodeURIComponent(
            `📝 *New Doctor Registration*\n\n` +
            `*1. Section 1 (بيانات أساسية):*\n` +
            `- Name: ${formData.name}\n` +
            `- Specialty: ${formData.specialty}\n` +
            `- Clinic: ${formData.clinicName}\n\n` +
            `*2. Section 2 (التخصص):*\n` +
            `- Focus: ${formData.focusService}\n\n` +
            `*3. Section 3 (الخبرة):*\n` +
            `- Experience: ${formData.experienceYears} years\n\n` +
            `*4. Section 4 (المريض):*\n` +
            `- Description: ${formData.targetPatientDesc}\n\n` +
            `*5. Section 5 (المنافسين):*\n` +
            `- Competitors: ${formData.mainCompetitors}\n\n` +
            `*6. Section 6 (نظام العمل):*\n` +
            `- Booking: ${formData.bookingMethod.join(', ')}\n\n` +
            `*7. Section 7 (التسويق):*\n` +
            `- Worked with agencies: ${formData.dealtWithAgencies}\n\n` +
            `*8. Section 8 (المحتوى):*\n` +
            `- Video Consent: ${formData.videoAgree}\n\n` +
            `*9. Section 9 (الهدف):*\n` +
            `- Primary Goal: ${formData.primaryGoal}\n` +
            `- 3-Month Goal: ${formData.threeMonthGoal}\n\n` +
            `*10. Notes:* ${formData.notes}`
        );
        
        const whatsappUrl = `https://wa.me/201004580185?text=${whatsappMsg}`;

        // Artificial delay for UX
        setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            alert(language === 'ar' ? 'تم التسجيل بنجاح. سيتم توجيهك للواتساب الآن.' : 'Registration successful. Redirecting you to WhatsApp now.');
            window.open(whatsappUrl, '_blank');
            setFormData(initialState);
        }, 800);
    };

    const handleCheckbox = (name: string, value: string) => {
        const current = (formData as any)[name] as string[];
        if (current.includes(value)) {
            setFormData({ ...formData, [name]: current.filter(v => v !== value) });
        } else {
            setFormData({ ...formData, [name]: [...current, value] });
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24"
        >
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Section Header */}
                <div className={`text-center mb-16 space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl font-bold leading-normal flex flex-wrap justify-center gap-x-3 gap-y-2">
                        {t('announcement').split(' ').map((word, i) => (
                            <span
                                key={i}
                                className="inline-block animate-wave text-white"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                    <h3 className="text-[#FFB800] text-3xl md:text-5xl font-bold leading-normal block">
                        {t('ctaTitle')}
                    </h3>
                </div>

                {/* Form Card */}
                <div className={`bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                    <form onSubmit={handleSubmit} className="space-y-8 text-start">

                        {/* Section 1: Basic Data */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection1')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formNameLabel')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>

                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formSpecialtyLabel')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.specialty} onChange={e => setFormData({ ...formData, specialty: e.target.value })} />
                                </div>

                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formClinicNameLabel')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.clinicName} onChange={e => setFormData({ ...formData, clinicName: e.target.value })} />
                                </div>

                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formClinicAddressLabel')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <label className="text-black text-xl font-extrabold mb-3 block">{t('formWorkDatesLabel')}</label>
                                <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.workHours} onChange={e => setFormData({ ...formData, workHours: e.target.value })} />
                            </div>
                        </div>

                        {/* Section 2: Speciality & Focus */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection2')}</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formFocusServiceQuestion')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.focusService} onChange={e => setFormData({ ...formData, focusService: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formWhyFocusQuestion')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.whyFocus} onChange={e => setFormData({ ...formData, whyFocus: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Experience & Excellence */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection3')}</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formCertificatesLabel')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.certificates} onChange={e => setFormData({ ...formData, certificates: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formExperienceLabel')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.experienceYears} onChange={e => setFormData({ ...formData, experienceYears: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formCompetitiveAdvantage')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.competitiveAdvantage} onChange={e => setFormData({ ...formData, competitiveAdvantage: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Target Patient */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection4')}</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formTargetPatientDesc')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.targetPatientDesc} onChange={e => setFormData({ ...formData, targetPatientDesc: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formPatientMainProblem')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.patientMainProblem} onChange={e => setFormData({ ...formData, patientMainProblem: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Competitor Analysis */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection5')}</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formMainCompetitors')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.mainCompetitors} onChange={e => setFormData({ ...formData, mainCompetitors: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formCompetitorsNegative')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.competitorsNegative} onChange={e => setFormData({ ...formData, competitorsNegative: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formCompetitorsPositive')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.competitorsPositive} onChange={e => setFormData({ ...formData, competitorsPositive: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Section 6: Current Working System */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection6')}</h3>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <label className="text-black text-xl font-extrabold block">{t('formBookingMethodLabel')}</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-start">
                                        {[
                                            { id: 'whatsapp', label: t('formBookingWhatsapp') },
                                            { id: 'phone', label: t('formBookingPhone') },
                                            { id: 'reception', label: t('formBookingReception') },
                                            { id: 'online', label: t('formBookingOnline') }
                                        ].map(item => (
                                            <label key={item.id} className="flex items-center gap-2 cursor-pointer group">
                                                <input type="checkbox" className="w-6 h-6 accent-[#FFB800]" checked={formData.bookingMethod.includes(item.id)} onChange={() => handleCheckbox('bookingMethod', item.id)} />
                                                <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formHasSchedulingSystem')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.hasSchedulingSystem} onChange={e => setFormData({ ...formData, hasSchedulingSystem: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formDailyCapacity')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.dailyCapacity} onChange={e => setFormData({ ...formData, dailyCapacity: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formOutsidePatients')}</label>
                                    <input type="text" className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" value={formData.outsidePatients} onChange={e => setFormData({ ...formData, outsidePatients: e.target.value })} />
                                </div>
                            </div>
                        </div>


                        {/* Section 7: Previous Marketing Experience */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection7')}</h3>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <label className="text-black text-xl font-extrabold block">{t('formDealtWithAgencies')}</label>
                                    <div className="flex gap-6 justify-start">
                                        {['نعم', 'لا'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" name="dealtWithAgencies" className="w-6 h-6 accent-[#FFB800]" checked={formData.dealtWithAgencies === opt} onChange={() => setFormData({ ...formData, dealtWithAgencies: opt })} />
                                                <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{language === 'ar' ? opt : (opt === 'نعم' ? 'Yes' : 'No')}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {formData.dealtWithAgencies === 'نعم' && (
                                    <>
                                        <div className="space-y-4 pt-4">
                                            <label className="text-black text-xl font-extrabold block">{t('formPrevSystemType')}</label>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-start">
                                                {[
                                                    { id: 'packages', label: t('formSystemPackages') },
                                                    { id: 'agency', label: t('formSystemAgency') },
                                                    { id: 'other', label: t('formSystemOther') }
                                                ].map(item => (
                                                    <label key={item.id} className="flex items-center gap-2 cursor-pointer group">
                                                        <input type="radio" name="prevSystemType" className="w-6 h-6 accent-[#FFB800]" checked={formData.prevSystemType === item.id} onChange={() => setFormData({ ...formData, prevSystemType: item.id })} />
                                                        <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{item.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <label className="text-black text-xl font-extrabold block">{t('formPrevMarketingProblems')}</label>
                                            <div className="space-y-3 flex flex-col items-start">
                                                {[
                                                    { id: 'weakAds', label: t('formProbWeakAds') },
                                                    { id: 'noBookingIncrease', label: t('formProbNoBookingIncrease') },
                                                    { id: 'badContent', label: t('formProbBadContent') },
                                                    { id: 'noCommitment', label: t('formProbNoCommitment') },
                                                    { id: 'hardReports', label: t('formProbHardReports') },
                                                    { id: 'communicationIssues', label: t('formProbCommunicationIssues') },
                                                    { id: 'other', label: t('formSystemOther') }
                                                ].map(item => (
                                                    <label key={item.id} className="flex items-center gap-3 cursor-pointer justify-start group">
                                                        <input type="checkbox" className="w-6 h-6 accent-[#FFB800]" checked={formData.prevMarketingProblems.includes(item.id)} onChange={() => handleCheckbox('prevMarketingProblems', item.id)} />
                                                        <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{item.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="pt-4">
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formWhatToChange')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.whatToChange} onChange={e => setFormData({ ...formData, whatToChange: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Section 8: Content & Appearance */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection8')}</h3>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <label className="text-black text-xl font-extrabold block">{t('formVideoAppearanceConsent')}</label>
                                    <div className="flex gap-6 justify-start">
                                        {['نعم', 'لا'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" name="videoAgree" className="w-6 h-6 accent-[#FFB800]" checked={formData.videoAgree === opt} onChange={() => setFormData({ ...formData, videoAgree: opt })} />
                                                <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{language === 'ar' ? opt : (opt === 'نعم' ? 'Yes' : 'No')}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-black text-xl font-extrabold block">{t('formPreviousMediaMedia')}</label>
                                    <div className="flex gap-6 justify-start">
                                        {['نعم', 'لا'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" name="prevMedia" className="w-6 h-6 accent-[#FFB800]" checked={formData.prevMedia === opt} onChange={() => setFormData({ ...formData, prevMedia: opt })} />
                                                <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{language === 'ar' ? opt : (opt === 'نعم' ? 'Yes' : 'No')}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formSocialLinksLabel')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={2} value={formData.socialLinks} onChange={e => setFormData({ ...formData, socialLinks: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Section 9: Marketing Goal */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSection9')}</h3>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <label className="text-black text-xl font-extrabold block">{t('formPrimaryGoal')}</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start">
                                        {[
                                            { id: 'bookings', label: t('formGoalBookings') },
                                            { id: 'spread', label: t('formGoalSpread') },
                                            { id: 'personalBranding', label: t('formGoalPersonalBranding') },
                                            { id: 'specificService', label: t('formGoalSpecificService') }
                                        ].map(item => (
                                            <label key={item.id} className="flex items-center gap-2 cursor-pointer group">
                                                <input type="radio" name="primaryGoal" className="w-6 h-6 accent-[#FFB800]" checked={formData.primaryGoal === item.id} onChange={() => setFormData({ ...formData, primaryGoal: item.id })} />
                                                <span className="text-black font-bold text-lg group-hover:text-[#FFB800] transition-colors">{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-black text-xl font-extrabold mb-3 block">{t('formThreeMonthGoal')}</label>
                                    <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={3} value={formData.threeMonthGoal} onChange={e => setFormData({ ...formData, threeMonthGoal: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="pt-8 space-y-8 border-t border-[#FFB800]/20">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFB800] pb-4 border-b border-[#FFB800]/20">{t('formSectionNotes')}</h3>
                            <div>
                                <label className="text-black text-xl font-extrabold mb-3 block">{t('formAdditionalNotesLabel')}</label>
                                <textarea className="w-full bg-white border-2 border-gray-300 rounded-2xl px-5 py-4 text-black font-bold text-lg focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 outline-none transition-all duration-300" rows={4} value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8 flex justify-center">
                            <button
                                type="submit"
                                className="btn-primary w-full max-w-sm py-4 text-2xl shadow-xl shadow-orange-500/20"
                            >
                                {t('ctaDirect')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

