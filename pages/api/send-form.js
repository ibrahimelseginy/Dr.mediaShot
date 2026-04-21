import { createTransport } from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const {
        // Section 1
        name, specialty, clinicName, address, workHours,
        // Section 2
        focusService, whyFocus,
        // Section 3
        certificates, experienceYears, competitiveAdvantage,
        // Section 5
        targetPatientDesc, patientMainProblem,
        // Section 6
        mainCompetitors, competitorsNegative, competitorsPositive,
        // Section 7
        bookingMethod, hasSchedulingSystem, dailyCapacity, outsidePatients,
        // Section 8
        dealtWithAgencies, prevSystemType, prevMarketingProblems, whatToChange,
        // Section 9
        videoAgree, prevMedia, socialLinks,
        // Section 10
        primaryGoal, threeMonthGoal,
        // Notes
        notes
    } = req.body;

    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Dr. Media Shot Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `📝 New Registration: Dr. ${name}`,
        html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800;">1. البيانات الأساسية (Basic Data)</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Specialty:</b> ${specialty}</p>
                <p><b>Clinic Name:</b> ${clinicName}</p>
                <p><b>Address:</b> ${address}</p>
                <p><b>Work Hours:</b> ${workHours}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">2. التخصص والتركيز (Focus)</h2>
                <p><b>Focus Topic:</b> ${focusService}</p>
                <p><b>Why now:</b> ${whyFocus}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">3. الخبرة والتميز (Experience)</h2>
                <p><b>Certificates:</b> ${certificates}</p>
                <p><b>Years of Experience:</b> ${experienceYears}</p>
                <p><b>Competitive Adv:</b> ${competitiveAdvantage}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">4. المريض المستهدف (Target Patient)</h2>
                <p><b>Patient Description:</b> ${targetPatientDesc}</p>
                <p><b>Main Problem:</b> ${patientMainProblem}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">5. المنافسين (Competitors)</h2>
                <p><b>Main Competitors:</b> ${mainCompetitors}</p>
                <p><b>Negative points:</b> ${competitorsNegative}</p>
                <p><b>Positive points:</b> ${competitorsPositive}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">6. نظام الشغل (Current System)</h2>
                <p><b>Booking Methods:</b> ${Array.isArray(bookingMethod) ? bookingMethod.join(', ') : bookingMethod}</p>
                <p><b>Has Scheduling System:</b> ${hasSchedulingSystem}</p>
                <p><b>Daily Capacity:</b> ${dailyCapacity}</p>
                <p><b>Outside Patients:</b> ${outsidePatients}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">7. الخبرة التسويقية (Prev Marketing)</h2>
                <p><b>Dealt with agencies:</b> ${dealtWithAgencies}</p>
                <p><b>Previous System:</b> ${prevSystemType}</p>
                <p><b>Prev Problems:</b> ${Array.isArray(prevMarketingProblems) ? prevMarketingProblems.join(', ') : prevMarketingProblems}</p>
                <p><b>What needs to change:</b> ${whatToChange}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">8. المحتوى والظهور (Content)</h2>
                <p><b>Video Consent:</b> ${videoAgree}</p>
                <p><b>Has Previous Media:</b> ${prevMedia}</p>
                <p><b>Social Links:</b> ${socialLinks}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">9. الهدف (Marketing Goal)</h2>
                <p><b>Primary Goal:</b> ${primaryGoal}</p>
                <p><b>3-Month Goal:</b> ${threeMonthGoal}</p>

                <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; margin-top: 30px;">10. Notes</h2>
                <p>${notes}</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Email failed to send" });
    }
}
