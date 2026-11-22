import { useEffect, useRef, useState } from 'react';
import { WEDDING_EVENTS, WEDDING_META, type WeddingEvent } from '../data/weddingData';

function PhoolonHaldiWatercolourSvg() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-[min(300px,100%)] max-w-[180px] md:max-w-[300px] aspect-square mx-auto watercolour-art"
      role="img"
      aria-label="Watercolour illustration of marigold and rose petals for Phoolon Ki Haldi"
    >
      <defs>
        <radialGradient id="haldiWash" cx="50%" cy="54%" r="44%">
          <stop offset="0%" stopColor="#f5be58" stopOpacity="0.34" />
          <stop offset="60%" stopColor="#ee8c44" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#f5f0ec" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brassPlatter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dfc07b" />
          <stop offset="50%" stopColor="#b89048" />
          <stop offset="100%" stopColor="#8f6b30" />
        </linearGradient>
      </defs>
      {/* Soft watercolour aura */}
      <circle cx="160" cy="172" r="118" fill="url(#haldiWash)" />

      {/* Falling marigold & rose petals shower */}
      <g opacity="0.92">
        <ellipse cx="96" cy="72" rx="9" ry="5" transform="rotate(-24 96 72)" fill="#ef8f32" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="144" cy="54" rx="8" ry="4.5" transform="rotate(18 144 54)" fill="#f3b63a" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="196" cy="66" rx="9" ry="5" transform="rotate(-35 196 66)" fill="#e36d54" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="232" cy="94" rx="7" ry="4" transform="rotate(28 232 94)" fill="#f2a634" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="78" cy="112" rx="7.5" ry="4.5" transform="rotate(15 78 112)" fill="#e57a5b" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="122" cy="96" rx="8" ry="4.5" transform="rotate(-14 122 96)" fill="#f6c748" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="172" cy="92" rx="8.5" ry="5" transform="rotate(22 172 92)" fill="#ee842f" stroke="#6c4d2c" strokeWidth="0.9" />
        <ellipse cx="208" cy="118" rx="7" ry="4" transform="rotate(-20 208 118)" fill="#f5c344" stroke="#6c4d2c" strokeWidth="0.9" />
      </g>

      {/* Mango leaves framing platter */}
      <g fill="#7d9569" stroke="#3f4d34" strokeWidth="1.2">
        <path d="M84 216 C64 202, 58 182, 74 168 C88 180, 96 198, 98 214 Z" />
        <path d="M236 216 C256 202, 262 182, 246 168 C232 180, 224 198, 222 214 Z" />
        <path d="M104 234 C84 236, 70 226, 74 212 C90 214, 102 222, 112 232 Z" fill="#92a77b" />
        <path d="M216 234 C236 236, 250 226, 246 212 C230 214, 218 222, 208 232 Z" fill="#92a77b" />
      </g>

      {/* Woven brass floral platter (urli) */}
      <ellipse cx="160" cy="212" rx="92" ry="36" fill="url(#brassPlatter)" stroke="#5b4322" strokeWidth="1.4" />
      <ellipse cx="160" cy="206" rx="82" ry="29" fill="#d9b76c" stroke="#6b4f26" strokeWidth="1.1" />
      <path d="M72 212 C78 242, 118 258, 160 258 C202 258, 242 242, 248 212" fill="url(#brassPlatter)" stroke="#5b4322" strokeWidth="1.4" />

      {/* Overflowing marigold blossoms */}
      {[
        { cx: 118, cy: 196, r: 21, fill: '#f3a72b' },
        { cx: 150, cy: 184, r: 24, fill: '#ee7c2e' },
        { cx: 188, cy: 188, r: 22, fill: '#f6bd38' },
        { cx: 210, cy: 202, r: 19, fill: '#ec7430' },
        { cx: 136, cy: 206, r: 20, fill: '#f6c542' },
        { cx: 170, cy: 206, r: 21, fill: '#df6c53' },
      ].map((flower, idx) => (
        <g key={idx}>
          <circle cx={flower.cx} cy={flower.cy} r={flower.r} fill={flower.fill} stroke="#6c4520" strokeWidth="1.2" />
          <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.65} fill="none" stroke="#8c5422" strokeWidth="0.9" strokeDasharray="4 3" />
          <circle cx={flower.cx} cy={flower.cy} r={flower.r * 0.28} fill="#fce088" stroke="#7d4c1f" strokeWidth="0.8" />
        </g>
      ))}

      {/* Small turmeric bowl beside urli */}
      <ellipse cx="222" cy="244" rx="22" ry="10" fill="#c79e4e" stroke="#5b4322" strokeWidth="1.2" />
      <ellipse cx="222" cy="241" rx="17" ry="6.5" fill="#f3be26" />
      <path d="M200 244 C202 256, 212 262, 222 262 C232 262, 242 256, 244 244" fill="#b48a3e" stroke="#5b4322" strokeWidth="1.2" />
    </svg>
  );
}

function TeekaFaldaanWatercolourSvg() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-[min(300px,100%)] max-w-[180px] md:max-w-[300px] aspect-square mx-auto watercolour-art"
      role="img"
      aria-label="Watercolour illustration of the Teeka Faldaan ceremonial thali"
    >
      <defs>
        <radialGradient id="teekaWash" cx="50%" cy="54%" r="44%">
          <stop offset="0%" stopColor="#d8b56c" stopOpacity="0.28" />
          <stop offset="65%" stopColor="#c96b59" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#f5f0ec" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="thaliGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8cf8e" />
          <stop offset="55%" stopColor="#c59c4e" />
          <stop offset="100%" stopColor="#947032" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="172" r="118" fill="url(#teekaWash)" />

      {/* Decorative scalloped brass thali */}
      <ellipse cx="160" cy="196" rx="108" ry="52" fill="url(#thaliGold)" stroke="#5e4421" strokeWidth="1.5" />
      <ellipse cx="160" cy="193" rx="95" ry="43" fill="#ebd9a7" stroke="#8c6932" strokeWidth="1.1" />
      <ellipse cx="160" cy="193" rx="84" ry="36" fill="none" stroke="#9e7939" strokeWidth="0.9" strokeDasharray="5 4" />

      {/* Betel paan leaves */}
      <g fill="#738f5e" stroke="#39492f" strokeWidth="1.2">
        <path d="M126 164 C112 134, 134 106, 160 100 C184 106, 206 134, 192 164 Z" />
        <path d="M100 176 C84 156, 94 128, 120 124 C138 134, 146 156, 136 178 Z" fill="#87a171" />
        <path d="M220 176 C236 156, 226 128, 200 124 C182 134, 174 156, 184 178 Z" fill="#87a171" />
      </g>

      {/* Sacred coconut with red mauli thread */}
      <ellipse cx="160" cy="152" rx="28" ry="33" fill="#94623d" stroke="#4f331e" strokeWidth="1.4" />
      <path d="M138 140 C150 148, 170 148, 182 140" fill="none" stroke="#be3f35" strokeWidth="3.2" />
      <path d="M136 148 C150 156, 170 156, 184 148" fill="none" stroke="#d89b32" strokeWidth="1.8" />
      <path d="M150 122 C156 138, 152 166, 158 182" fill="none" stroke="#6d4528" strokeWidth="1" opacity="0.6" />

      {/* Kumkum roli bowl (left) */}
      <ellipse cx="108" cy="198" rx="22" ry="11" fill="#c9a252" stroke="#5e4421" strokeWidth="1.2" />
      <ellipse cx="108" cy="196" rx="17" ry="7.5" fill="#b9362c" />
      <path d="M86 198 C88 210, 96 216, 108 216 C120 216, 128 210, 130 198" fill="#b28a3d" stroke="#5e4421" strokeWidth="1.2" />

      {/* Akshata rice bowl (right) */}
      <ellipse cx="212" cy="198" rx="22" ry="11" fill="#c9a252" stroke="#5e4421" strokeWidth="1.2" />
      <ellipse cx="212" cy="196" rx="17" ry="7.5" fill="#f7f2e3" />
      <path d="M190 198 C192 210, 200 216, 212 216 C224 216, 232 210, 234 198" fill="#b28a3d" stroke="#5e4421" strokeWidth="1.2" />

      {/* Glowing brass diya in front */}
      <path d="M142 212 Q160 226 178 212 Q160 202 142 212 Z" fill="#c99c4a" stroke="#5e4421" strokeWidth="1.2" />
      <path d="M160 186 C165 194, 166 202, 160 207 C154 202, 155 194, 160 186 Z" fill="#f3b237" stroke="#c86827" strokeWidth="1" />

      {/* Sweets & marigold accents */}
      <circle cx="132" cy="222" r="8" fill="#e8b853" stroke="#6c4d21" strokeWidth="1" />
      <circle cx="188" cy="222" r="8" fill="#e8b853" stroke="#6c4d21" strokeWidth="1" />
      <circle cx="198" cy="228" r="7" fill="#ee8532" stroke="#6c4d21" strokeWidth="1" />
    </svg>
  );
}

function EventArtwork({ event }: { event: WeddingEvent }) {
  const [failed, setFailed] = useState(false);

  if (event.customSvgType === 'phoolon-haldi') {
    return <PhoolonHaldiWatercolourSvg />;
  }
  if (event.customSvgType === 'teeka-faldaan') {
    return <TeekaFaldaanWatercolourSvg />;
  }

  if (!event.artSrc || failed) {
    return (
      <div className="w-[min(260px,100%)] aspect-square mx-auto rounded-full bg-[#ece5dc] border border-[#d6c9b8] flex flex-col items-center justify-center p-6 text-center">
        <span className="text-2xl text-[#b18d50] mb-2" aria-hidden="true">
          ✦
        </span>
        <span className="font-serif-display text-base text-[#384a34]">
          {event.title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={event.artSrc}
      alt={event.artAlt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-[min(300px,100%)] max-w-[180px] md:max-w-[300px] aspect-square object-contain mx-auto watercolour-art"
    />
  );
}

export function EventTimelineSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const [seenIds, setSeenIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timelineEl = timelineRef.current;
    const progressEl = progressRef.current;
    if (!timelineEl || !progressEl) return;

    const rows = timelineEl.querySelectorAll<HTMLElement>('[data-event-id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-event-id');
            if (id) {
              setSeenIds((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.14 }
    );

    rows.forEach((row) => observer.observe(row));

    let rafId = 0;
    const updateLine = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const box = timelineEl.getBoundingClientRect();
        const lineStart = window.innerHeight * 0.68;
        const progress = Math.min(
          1,
          Math.max(0, (lineStart - box.top) / Math.max(1, box.height))
        );
        progressEl.style.transform = `scaleY(${progress.toFixed(4)})`;
        rafId = 0;
      });
    };

    window.addEventListener('scroll', updateLine, { passive: true });
    window.addEventListener('resize', updateLine);
    updateLine();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateLine);
      window.removeEventListener('resize', updateLine);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="schedule"
      className="bg-[#f5f0ec] text-[#26231f] py-[84px] md:py-[120px] px-[clamp(18px,6vw,120px)]"
    >
      <div className="text-center mx-auto mb-[56px] md:mb-[72px]">
        <div className="text-[12px] tracking-[0.2em] uppercase text-[#a78e53] font-semibold">
          The celebration
        </div>
        <h2 className="font-serif-display font-normal text-[clamp(34px,5vw,66px)] leading-[1.08] tracking-[-0.03em] text-[#26231f] my-[18px]">
          SCHEDULE FOR
          <br />
          {WEDDING_META.scheduleDateCode}
        </h2>
        <p className="text-[#6d6962] leading-[1.8] text-[15px]">
          Follow the celebrations along our wedding timeline.
        </p>
      </div>

      <div
        ref={timelineRef}
        className="max-w-[1040px] mx-auto relative"
        id="eventTimeline"
      >
        {/* Center vertical timeline rule */}
        <div
          className="absolute z-0 top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#deded5]"
          aria-hidden="true"
        >
          <span
            ref={progressRef}
            className="block w-full h-full bg-[#829582] origin-top transition-transform duration-150 ease-linear"
            style={{ transform: 'scaleY(0)' }}
          />
        </div>

        {/* Event Rows */}
        {WEDDING_EVENTS.map((event, index) => {
          const isEven = index % 2 === 1;
          const isSeen = Boolean(seenIds[event.id]);

          return (
            <article
              key={event.id}
              data-event-id={event.id}
              className={`timeline-event-row relative z-10 grid grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] items-center min-h-[225px] md:min-h-[320px] ${
                isSeen ? 'seen' : ''
              }`}
            >
              {/* Artwork Column */}
              <figure
                className={`m-0 text-center row-start-1 ${
                  isEven ? 'col-start-3' : 'col-start-1'
                }`}
              >
                <EventArtwork event={event} />
              </figure>

              {/* Center Gold Star Marker */}
              <span
                aria-hidden="true"
                className="timeline-marker-badge col-start-2 row-start-1 z-20 self-start justify-self-center mt-4 md:mt-7 w-[29px] h-[29px] md:w-[38px] md:h-[38px] rounded-full grid place-items-center text-[#fff9e8] text-[11px] md:text-[15px]"
              >
                ✦
              </span>

              {/* Event Info Column */}
              <div
                className={`row-start-1 max-w-[440px] ${
                  isEven
                    ? 'col-start-1 text-right ml-auto py-3 md:py-5 pr-[13px] pl-2 md:pr-[30px] md:pl-[25px]'
                    : 'col-start-3 text-left py-3 md:py-5 pl-[13px] pr-2 md:pl-[30px] md:pr-[25px]'
                }`}
              >
                <div className="text-[9.5px] md:text-[11px] tracking-[0.04em] text-[#817d75] leading-[1.45]">
                  {event.time}
                </div>
                <h3 className="font-serif-display font-normal text-[clamp(17px,3.8vw,32px)] leading-[1.16] text-[#282822] my-[6px] md:my-[9px]">
                  {event.title}
                </h3>
                <p className="text-[11.5px] md:text-[14px] leading-[1.55] md:leading-[1.65] text-[#67665f] italic m-0">
                  {event.location}
                  {event.dressCode && (
                    <>
                      <br />
                      <span
                        className={`inline-flex items-center gap-2 mt-2 text-[11px] md:text-[12px] leading-[1.4] not-italic tracking-[0.02em] text-[#655f55] ${
                          isEven ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <span
                          className="w-[10px] h-[10px] rounded-full inline-block shrink-0"
                          style={{ backgroundColor: event.dressCode.colorHex }}
                          aria-hidden="true"
                        />
                        {event.dressCode.label}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
