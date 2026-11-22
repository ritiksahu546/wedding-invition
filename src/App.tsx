import { useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationEnvelopeSection } from './components/InvitationEnvelopeSection';
import { OurStorySection } from './components/OurStorySection';
import { EventTimelineSection } from './components/EventTimelineSection';
import { VenueAndTravelSection } from './components/VenueAndTravelSection';
import { PhotoStorySection } from './components/PhotoStorySection';
import { RsvpSection } from './components/RsvpSection';
import { WEDDING_META } from './data/weddingData';
import { weddingMelody } from './utils/weddingAudio';

export default function App() {
  const [musicVisible, setMusicVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    return () => {
      weddingMelody.pause();
    };
  }, []);

  const handleOpenEnvelope = async () => {
    setMusicVisible(true);
    const started = await weddingMelody.play();
    setMusicPlaying(started);
  };

  const handleToggleMusic = async () => {
    if (musicPlaying) {
      weddingMelody.pause();
      setMusicPlaying(false);
    } else {
      const started = await weddingMelody.play();
      setMusicPlaying(started);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f2ef] text-[#26231f]">
      {/* Sticky full-screen portrait hero */}
      <HeroSection />

      {/* Main wedding invitation canvas sliding smoothly over sticky hero */}
      <main className="relative z-10 bg-[#f7f2ef]">
        <InvitationEnvelopeSection onOpenEnvelope={handleOpenEnvelope} />
        <OurStorySection />
        <EventTimelineSection />
        <VenueAndTravelSection />
        <PhotoStorySection />
        <RsvpSection />
      </main>

      {/* Floating Music Toggle (revealed when envelope is opened) */}
      {musicVisible && (
        <button
          type="button"
          onClick={handleToggleMusic}
          aria-pressed={musicPlaying}
          className="fixed right-[18px] bottom-[18px] z-30 border border-white/45 rounded-full px-[17px] py-[12px] bg-[#384a34] hover:bg-[#263422] text-white text-[11px] font-semibold tracking-[0.08em] shadow-[0_7px_24px_rgba(0,0,0,0.22)] cursor-pointer transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6ad71]"
        >
          {musicPlaying ? '♫ Pause Song' : '♫ Play Song'}
        </button>
      )}

      {/* Quiet Editorial Footer */}
      <footer className="relative z-10 bg-[#26231f] text-[#d6cec5] text-center py-8 px-6 text-[11px] tracking-[0.18em] uppercase">
        {WEDDING_META.footerCopy}
      </footer>
    </div>
  );
}
