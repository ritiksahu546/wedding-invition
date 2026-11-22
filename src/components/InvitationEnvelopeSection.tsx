import { useEffect, useState } from 'react';
import { WEDDING_META } from '../data/weddingData';

interface InvitationEnvelopeSectionProps {
  onOpenEnvelope: () => void;
}

interface CountdownParts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function computeCountdown(targetTime: number): CountdownParts {
  const left = Math.max(0, targetTime - Date.now());
  const days = Math.floor(left / 86400000);
  const hours = Math.floor((left % 86400000) / 3600000);
  const minutes = Math.floor((left % 3600000) / 60000);
  const seconds = Math.floor((left % 60000) / 1000);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export function InvitationEnvelopeSection({
  onOpenEnvelope,
}: InvitationEnvelopeSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const targetTime = new Date(WEDDING_META.targetIso).getTime();
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    computeCountdown(targetTime)
  );

  useEffect(() => {
    if (!showCountdown) return;
    setCountdown(computeCountdown(targetTime));
    const timer = window.setInterval(() => {
      setCountdown(computeCountdown(targetTime));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [showCountdown, targetTime]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpenEnvelope();
    window.setTimeout(() => {
      setShowCountdown(true);
    }, 850);
  };

  return (
    <section
      id="invitation"
      className="text-center max-w-[920px] mx-auto px-[clamp(22px,6vw,48px)] pt-[72px] md:pt-[96px] pb-[78px] md:pb-[104px]"
    >
      <div className="text-[12px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
        Save the date
      </div>
      <h2 className="font-serif-display font-normal text-[clamp(32px,4.8vw,64px)] leading-[1.09] tracking-[-0.03em] text-[#26231f] my-6 max-w-[840px] mx-auto [text-wrap:balance]">
        Together with our families, we invite you to celebrate the beginning of
        our forever.
      </h2>

      {/* Interactive 3D Envelope */}
      <div className={`invitation-envelope ${isOpen ? 'open' : ''}`}>
        <button
          type="button"
          onClick={handleOpen}
          aria-expanded={isOpen}
          aria-controls="dateReveal"
          className="envelope-trigger focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#384a34]"
        >
          <span className="envelope-prompt">Tap to Open</span>
          <span className="envelope-seal" aria-hidden="true">
            ✦
          </span>
        </button>

        <div
          id="dateReveal"
          aria-hidden={!isOpen}
          className={`date-reveal-card ${isOpen ? 'revealed' : 'pointer-events-none'}`}
        >
          <div className="text-[15px] text-[#aa8d51] tracking-[0.35em]">
            ✦ &nbsp; ✦ &nbsp; ✦
          </div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold mt-2">
            The wedding of
          </div>
          <div className="font-serif-display text-[clamp(27px,4vw,39px)] leading-tight my-[7px] text-[#384a34]">
            {WEDDING_META.coupleTitle}
          </div>
          <div className="font-serif-display text-[20px] text-[#8c7546] tracking-[0.08em]">
            {WEDDING_META.shortDateRange}
          </div>
          <div className="text-[10px] tracking-[0.15em] uppercase text-[#756e64] mt-[6px]">
            {WEDDING_META.citiesLine}
          </div>
          <div className="text-[15px] text-[#aa8d51] tracking-[0.35em] mt-3">
            ✦ &nbsp; ✦ &nbsp; ✦
          </div>
        </div>
      </div>

      {/* Live Countdown */}
      {showCountdown && (
        <div
          id="countdown"
          className="animate-fade-reveal flex justify-center gap-[clamp(20px,7vw,90px)] mt-[42px] mx-auto"
          aria-label="Countdown to the wedding ceremony"
        >
          {[
            { value: countdown.days, label: 'DAYS' },
            { value: countdown.hours, label: 'HOURS' },
            { value: countdown.minutes, label: 'MINUTES' },
            { value: countdown.seconds, label: 'SECONDS' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <strong className="font-serif-display font-normal text-[clamp(29px,4vw,48px)] leading-none block text-[#26231f] tabular-nums">
                {item.value}
              </strong>
              <span className="text-[9px] md:text-[10px] tracking-[0.16em] text-[#827b72] mt-1.5 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
