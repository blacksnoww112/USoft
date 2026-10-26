import React, { useEffect, useState } from 'react'

function SplashScreen({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show animation for ~1.8s, then trigger fade out exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 1800)

    // Remove from DOM after exit animation completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
      if (onFinish) onFinish()
    }, 2300)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [onFinish])

  if (!isVisible) return null

  return (
    <div
      dir="ltr"
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-white dark:bg-[#070D18] transition-all duration-500 ease-in-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="USoft Loader"
    >
      <style>{`
        .usoft-loader-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(14px, 2.5vw, 28px);
          max-width: 90vw;
          padding: 20px;
        }

        .usoft-mark {
          width: clamp(75px, 15vw, 130px);
          height: auto;
          flex: 0 0 auto;
          overflow: visible;
          filter: drop-shadow(0 4px 16px rgba(52, 49, 111, 0.12));
        }

        .usoft-brand {
          min-width: 0;
          flex: 1 1 auto;
          color: #34316f;
          transform: translateX(16px);
          opacity: 0;
          animation: usoft-brand-in .65s cubic-bezier(.2, .8, .2, 1) .9s forwards;
        }

        .dark .usoft-brand {
          color: #F8FAFC;
        }

        .usoft-word {
          font-size: clamp(38px, 8vw, 72px);
          line-height: .9;
          font-weight: 700;
          letter-spacing: -0.05em;
          white-space: nowrap;
          background: linear-gradient(135deg, #173B67 0%, #34316F 50%, #2F80ED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dark .usoft-word {
          background: linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #38BDF8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .usoft-tagline {
          margin-top: clamp(4px, 0.8vw, 8px);
          font-size: clamp(12px, 2.4vw, 18px);
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -.02em;
          white-space: nowrap;
          color: #827bb2;
        }

        .dark .usoft-tagline {
          color: #94A3B8;
        }

        .usoft-stripe {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: usoft-stripe-in .55s ease forwards;
        }

        .usoft-stripe:nth-child(1)  { animation-delay: .02s; }
        .usoft-stripe:nth-child(2)  { animation-delay: .05s; }
        .usoft-stripe:nth-child(3)  { animation-delay: .08s; }
        .usoft-stripe:nth-child(4)  { animation-delay: .11s; }
        .usoft-stripe:nth-child(5)  { animation-delay: .14s; }
        .usoft-stripe:nth-child(6)  { animation-delay: .17s; }
        .usoft-stripe:nth-child(7)  { animation-delay: .20s; }
        .usoft-stripe:nth-child(8)  { animation-delay: .23s; }
        .usoft-stripe:nth-child(9)  { animation-delay: .26s; }
        .usoft-stripe:nth-child(10) { animation-delay: .29s; }
        .usoft-stripe:nth-child(11) { animation-delay: .32s; }
        .usoft-stripe:nth-child(12) { animation-delay: .35s; }
        .usoft-stripe:nth-child(13) { animation-delay: .38s; }
        .usoft-stripe:nth-child(14) { animation-delay: .41s; }
        .usoft-stripe:nth-child(15) { animation-delay: .44s; }
        .usoft-stripe:nth-child(16) { animation-delay: .47s; }

        .usoft-base {
          transform-box: fill-box;
          transform-origin: center top;
          transform: scaleY(0);
          animation: usoft-base-in .5s ease-out .52s forwards;
        }

        .usoft-signature {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: usoft-sig-appear .55s ease-out .7s forwards,
                     usoft-sig-glow 2.5s ease-in-out 1.25s infinite;
        }

        @keyframes usoft-stripe-in {
          to { stroke-dashoffset: 0; }
        }

        @keyframes usoft-base-in {
          to { transform: scaleY(1); }
        }

        @keyframes usoft-sig-appear {
          0% { opacity: 0; transform: scale(0.92); }
          70% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes usoft-sig-glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(255,255,255,.15));
          }
          50% {
            filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.45));
          }
        }

        @keyframes usoft-brand-in {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <main className="usoft-loader-wrap" aria-label="USoft — Business Future">
        <svg className="usoft-mark" viewBox="0 0 400 400" role="img" aria-label="USoft diamond logo">
          <defs>
            <clipPath id="intro-upper-diamond">
              <polygon points="200,8 398,202 2,202" />
            </clipPath>
            <clipPath id="intro-lower-diamond">
              <polygon points="2,202 398,202 200,398" />
            </clipPath>
          </defs>

          {/* Striped upper half */}
          <g clipPath="url(#intro-upper-diamond)" fill="none" stroke="#827bb2" strokeWidth="6">
            <path className="usoft-stripe" pathLength="1" d="M194 15 H206" />
            <path className="usoft-stripe" pathLength="1" d="M184 27 H216" />
            <path className="usoft-stripe" pathLength="1" d="M174 39 H226" />
            <path className="usoft-stripe" pathLength="1" d="M162 51 H238" />
            <path className="usoft-stripe" pathLength="1" d="M150 63 H250" />
            <path className="usoft-stripe" pathLength="1" d="M138 75 H262" />
            <path className="usoft-stripe" pathLength="1" d="M126 87 H274" />
            <path className="usoft-stripe" pathLength="1" d="M114 99 H286" />
            <path className="usoft-stripe" pathLength="1" d="M102 111 H298" />
            <path className="usoft-stripe" pathLength="1" d="M90 123 H310" />
            <path className="usoft-stripe" pathLength="1" d="M78 135 H322" />
            <path className="usoft-stripe" pathLength="1" d="M66 147 H334" />
            <path className="usoft-stripe" pathLength="1" d="M54 159 H346" />
            <path className="usoft-stripe" pathLength="1" d="M42 171 H358" />
            <path className="usoft-stripe" pathLength="1" d="M30 183 H370" />
            <path className="usoft-stripe" pathLength="1" d="M18 195 H382" />
          </g>

          {/* Solid lower diamond */}
          <polygon
            className="usoft-base"
            points="2,202 398,202 200,398"
            fill="#34316f"
            clipPath="url(#intro-lower-diamond)"
          />

          {/* Signature image extracted from original logo */}
          <image
            className="usoft-signature"
            x="130"
            y="227"
            width="140"
            height="120"
            href="data:image/png;base64,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"
            preserveAspectRatio="none"
          />
        </svg>

        <section className="usoft-brand">
          <div className="usoft-word">Soft</div>
          <div className="usoft-tagline">Business Future.</div>
        </section>
      </main>
    </div>
  )
}

export default SplashScreen
