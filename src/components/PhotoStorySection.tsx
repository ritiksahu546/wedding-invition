import { useEffect, useRef, useState } from 'react';
import { FLOATING_STORY_PHOTOS, WEDDING_META } from '../data/weddingData';

function clamp(n: number) {
  return Math.max(0, Math.min(1, n));
}

function smooth(n: number) {
  const c = clamp(n);
  return c * c * (3 - 2 * c);
}

export function PhotoStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backdropRef = useRef<HTMLImageElement | null>(null);
  const shadeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const photoRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [backdropFailed, setBackdropFailed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let rafId = 0;

    const updateStage = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollRange = section.offsetHeight - window.innerHeight;
        const progress =
          scrollRange <= 0 ? 1 : clamp(-rect.top / scrollRange);

        FLOATING_STORY_PHOTOS.forEach((photo, idx) => {
          const el = photoRefs.current[idx];
          if (!el) return;

          if (prefersReduced) {
            el.style.opacity = '0.92';
            el.style.transform = `rotate(${photo.drift[2]}deg)`;
            return;
          }

          const start = idx * 0.115;
          const local = clamp((progress - start) / Math.max(0.38, 1 - start));
          const fadeIn = smooth(local / 0.12);
          const fadeOut = 1 - smooth((local - 0.76) / 0.24);
          const opacity = Math.max(0, Math.min(1, fadeIn, fadeOut));
          const [dx, dy, angle] = photo.drift;

          el.style.opacity = opacity.toFixed(3);
          el.style.transform = `translate3d(${(dx * (1 - 2 * local)).toFixed(
            1
          )}px, ${(dy * (1 - 2 * local)).toFixed(1)}px, 0) rotate(${(
            angle +
            (local - 0.5) * 8
          ).toFixed(2)}deg) scale(${(0.93 + 0.07 * opacity).toFixed(3)})`;
        });

        if (titleRef.current) {
          titleRef.current.style.opacity = prefersReduced
            ? '1'
            : (1 - 0.55 * smooth((progress - 0.62) / 0.32)).toFixed(3);
        }

        if (shadeRef.current) {
          shadeRef.current.style.opacity = (
            0.28 +
            0.48 * smooth((progress - 0.55) / 0.45)
          ).toFixed(3);
        }

        if (backdropRef.current && !prefersReduced) {
          backdropRef.current.style.transform = `scale(${(
            1.02 +
            0.045 * progress
          ).toFixed(3)})`;
        }

        rafId = 0;
      });
    };

    window.addEventListener('scroll', updateStage, { passive: true });
    window.addEventListener('resize', updateStage);
    updateStage();

    return () => {
      window.removeEventListener('scroll', updateStage);
      window.removeEventListener('resize', updateStage);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="photo-story"
      className="photo-story-section"
      aria-label="A scroll-through collection of pre-wedding photographs"
    >
      <div className="photo-story-stage">
        {!backdropFailed ? (
          <img
            ref={backdropRef}
            src={WEDDING_META.photoStoryBackdrop}
            alt="Sumit and Damini holding hands before their wedding"
            referrerPolicy="no-referrer"
            onError={() => setBackdropFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-[center_48%] -z-20"
            style={{ transform: 'scale(1.02)' }}
          />
        ) : (
          <div
            className="absolute inset-0 -z-20 bg-gradient-to-br from-[#3a282c] via-[#282321] to-[#1b1716]"
            aria-hidden="true"
          />
        )}

        <div
          ref={shadeRef}
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(110deg, rgba(50,31,45,0.48), rgba(30,21,28,0.42))',
            opacity: 0.32,
          }}
          aria-hidden="true"
        />

        <h2
          ref={titleRef}
          className="relative z-10 w-[min(900px,84vw)] text-center text-white font-serif-display font-normal text-[clamp(28px,4.8vw,64px)] leading-[1.12] [text-shadow:0_2px_22px_rgba(0,0,0,0.45)] mx-auto p-5 md:p-7 pointer-events-none [text-wrap:balance]"
        >
          Four days in <em className="text-[#e7d8ac] italic">December</em>,
          everyone we love, and the start of everything after.
        </h2>

        {FLOATING_STORY_PHOTOS.map((photo, idx) =>
          failedImages[idx] ? null : (
            <img
              key={photo.className}
              ref={(el) => {
                photoRefs.current[idx] = el;
              }}
              src={photo.src}
              alt={photo.alt}
              referrerPolicy="no-referrer"
              onError={() =>
                setFailedImages((prev) => ({ ...prev, [idx]: true }))
              }
              className={`floating-photo-card ${photo.className}`}
            />
          )
        )}
      </div>
    </section>
  );
}
