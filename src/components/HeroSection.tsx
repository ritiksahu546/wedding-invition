import { useState } from 'react';
import { WEDDING_META } from '../data/weddingData';

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="hero-sticky relative flex items-end text-white px-[clamp(24px,3.3vw,54px)] pt-14 pb-[42px]"
      id="hero-section"
      aria-label="Sumit and Damini wedding hero portrait"
    >
      {/* Full-bleed background portrait with fallback */}
      {!imgFailed ? (
        <img
          src={WEDDING_META.heroImage}
          alt="Sumit and Damini in a golden-hour garden pre-wedding portrait"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-[center_44%] -z-20 select-none"
        />
      ) : (
        <div
          className="absolute inset-0 -z-20 bg-gradient-to-br from-[#3d4c39] via-[#2c3429] to-[#1e211b]"
          aria-hidden="true"
        />
      )}

      {/* Measured contrast scrim for WCAG legibility */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,20,15,0.16) 0%, rgba(16,20,15,0.04) 36%, rgba(8,13,10,0.12) 58%, rgba(8,13,10,0.58) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Floating Top Navigation Capsule (3-Zone Contract) */}
      <nav
        aria-label="Main navigation"
        className="absolute top-[28px] md:top-[34px] left-1/2 -translate-x-1/2 z-20 w-[min(920px,calc(100%-36px))] md:w-[min(920px,calc(100%-50px))] bg-white text-[#282822] rounded-full py-[7px] pr-[10px] pl-[19px] flex items-center justify-between gap-8 whitespace-nowrap text-xs shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
      >
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero-section"
          onClick={closeMenu}
          className="font-serif-display italic text-[22px] leading-none text-[#282822] hover:opacity-65 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#384a34]"
        >
          {WEDDING_META.monogram}
        </a>

        {/* Zone 2: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[clamp(20px,3vw,42px)] font-medium tracking-[0.01em]">
          <a
            href="#schedule"
            className="hover:opacity-55 transition-opacity whitespace-nowrap shrink-0 py-2"
          >
            Schedule
          </a>
          <a
            href="#our-story"
            className="hover:opacity-55 transition-opacity whitespace-nowrap shrink-0 py-2"
          >
            Our Story
          </a>
          <a
            href="#venue"
            className="hover:opacity-55 transition-opacity whitespace-nowrap shrink-0 py-2"
          >
            Venue
          </a>
          <a
            href="#photo-story"
            className="hover:opacity-55 transition-opacity whitespace-nowrap shrink-0 py-2"
          >
            Gallery
          </a>
        </div>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#rsvp"
            className="hidden md:inline-flex items-center justify-center bg-[#384a34] hover:bg-[#263422] text-white px-[21px] py-[11px] rounded-full font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#384a34]"
          >
            I&apos;m coming!
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[#282822] text-xl cursor-pointer hover:bg-[#f7f2ef] transition-colors focus-visible:outline-2 focus-visible:outline-[#384a34]"
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white rounded-[20px] p-3 shadow-[0_14px_38px_rgba(0,0,0,0.18)] flex flex-col items-stretch gap-1 text-sm">
            <a
              href="#schedule"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl text-[#282822] hover:bg-[#f7f2ef] transition-colors font-medium"
            >
              Schedule
            </a>
            <a
              href="#our-story"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl text-[#282822] hover:bg-[#f7f2ef] transition-colors font-medium"
            >
              Our Story
            </a>
            <a
              href="#venue"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl text-[#282822] hover:bg-[#f7f2ef] transition-colors font-medium"
            >
              Venue
            </a>
            <a
              href="#photo-story"
              onClick={closeMenu}
              className="px-4 py-3 rounded-xl text-[#282822] hover:bg-[#f7f2ef] transition-colors font-medium"
            >
              Gallery
            </a>
            <a
              href="#rsvp"
              onClick={closeMenu}
              className="mt-1 bg-[#384a34] hover:bg-[#263422] text-white text-center px-5 py-3 rounded-full font-semibold transition-colors"
            >
              I&apos;m coming!
            </a>
          </div>
        )}
      </nav>

      {/* Hero Editorial Lockup */}
      <div className="w-full relative z-10 max-w-[1440px] mx-auto">
        <div className="text-[clamp(14px,1.5vw,21px)] font-semibold tracking-[0.01em] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
          {WEDDING_META.eyebrow}&nbsp; —
        </div>
        <h1 className="font-serif-display font-normal text-[clamp(48px,11.6vw,172px)] leading-[0.94] tracking-[-0.055em] mt-[14px] mb-[20px] md:whitespace-nowrap drop-shadow-[0_2px_24px_rgba(0,0,0,0.32)]">
          {WEDDING_META.coupleTitle}
        </h1>
        <div className="hero-date-line text-right text-[clamp(13px,1.6vw,22px)] font-semibold drop-shadow-[0_1px_12px_rgba(0,0,0,0.38)]">
          {WEDDING_META.heroDateRange}
        </div>
      </div>
    </header>
  );
}
