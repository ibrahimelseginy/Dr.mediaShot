export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Rocket Body */}
            <path
                d="M50 10 L70 70 L65 90 L50 100 L35 90 L30 70 Z"
                fill="url(#gradient1)"
                stroke="#D97706"
                strokeWidth="2"
            />

            {/* Rocket Window */}
            <ellipse cx="50" cy="85" rx="8" ry="12" fill="#FCD34D" />

            {/* Left Fin */}
            <path
                d="M30 70 L15 85 L30 80 Z"
                fill="url(#gradient2)"
                stroke="#D97706"
                strokeWidth="1.5"
            />

            {/* Right Fin */}
            <path
                d="M70 70 L85 85 L70 80 Z"
                fill="url(#gradient2)"
                stroke="#D97706"
                strokeWidth="1.5"
            />

            {/* Rocket Top */}
            <path
                d="M50 10 L35 35 L65 35 Z"
                fill="url(#gradient3)"
                stroke="#D97706"
                strokeWidth="2"
            />

            {/* Flame */}
            <path
                d="M50 100 L45 110 L50 115 L55 110 Z"
                fill="#F59E0B"
                opacity="0.8"
            >
                <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="0.5s"
                    repeatCount="indefinite"
                />
            </path>

            <defs>
                <linearGradient id="gradient1" x1="50" y1="10" x2="50" y2="100">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                </linearGradient>

                <linearGradient id="gradient2" x1="0" y1="0" x2="100" y2="0">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                </linearGradient>

                <linearGradient id="gradient3" x1="50" y1="10" x2="50" y2="35">
                    <stop offset="0%" stopColor="#FEF3C7" />
                    <stop offset="100%" stopColor="#FCD34D" />
                </linearGradient>
            </defs>
        </svg>
    );
}
