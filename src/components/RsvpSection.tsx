import { useEffect, useState, type FormEvent } from 'react';
import { Check, MessageCircle, X } from 'lucide-react';
import { WEDDING_META } from '../data/weddingData';

interface SavedRsvp {
  guestName: string;
  guestsCount: number;
  attendingCities: string[];
  message: string;
  submittedAt: string;
}

const STORAGE_KEY = 'sumit_damini_rsvp_v1';

const CITY_OPTIONS = [
  'Vidisha Celebrations (6–7 Dec)',
  'Baraat Departure (7 Dec Night)',
  'Satna Celebrations & Wedding (8–9 Dec)',
];

export function RsvpSection() {
  const [backdropFailed, setBackdropFailed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [savedRsvp, setSavedRsvp] = useState<SavedRsvp | null>(null);

  const [guestName, setGuestName] = useState('');
  const [guestsCount, setGuestsCount] = useState(2);
  const [attendingCities, setAttendingCities] = useState<string[]>([
    CITY_OPTIONS[0],
    CITY_OPTIONS[2],
  ]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SavedRsvp;
        setSavedRsvp(parsed);
        setGuestName(parsed.guestName);
        setGuestsCount(parsed.guestsCount);
        setAttendingCities(parsed.attendingCities);
        setMessage(parsed.message);
      }
    } catch {
      // Ignore storage errors in private contexts
    }
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalOpen]);

  const toggleCity = (city: string) => {
    setAttendingCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const buildWhatsAppUrl = (rsvp: SavedRsvp | null) => {
    const text = rsvp
      ? `Namaste! ${rsvp.guestName} (${rsvp.guestsCount} guest${
          rsvp.guestsCount > 1 ? 's' : ''
        }) is delighted to celebrate with Sumit & Damini (${rsvp.attendingCities.join(
          ', '
        )}).${rsvp.message ? ` "${rsvp.message}"` : ''}`
      : 'We are happy to celebrate with Sumit and Damini, 6–9 December 2026.';
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = guestName.trim();
    if (!trimmed) {
      setError('Please enter your name or family name.');
      return;
    }
    if (attendingCities.length === 0) {
      setError('Please choose at least one celebration you plan to attend.');
      return;
    }

    setError('');
    const record: SavedRsvp = {
      guestName: trimmed,
      guestsCount,
      attendingCities,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };
    setSavedRsvp(record);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Ignore storage quota errors
    }
    setModalOpen(false);
  };

  return (
    <section
      id="rsvp"
      className="relative isolate min-h-[100svh] grid place-items-center py-[72px] px-5 text-[#302c27] bg-[#eee9e2] overflow-hidden"
    >
      {/* Full-bleed sunset backdrop */}
      {!backdropFailed ? (
        <img
          src={WEDDING_META.rsvpBackdrop}
          alt="Sumit and Damini at sunset in a heritage garden"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setBackdropFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center -z-20"
        />
      ) : (
        <div
          className="absolute inset-0 -z-20 bg-gradient-to-br from-[#52463a] to-[#2e261f]"
          aria-hidden="true"
        />
      )}

      {/* Warm dark overlay for crisp stationery contrast */}
      <div
        className="absolute inset-0 -z-10 bg-[rgba(42,35,30,0.42)]"
        aria-hidden="true"
      />

      {/* Deckle-Edge Torn Paper RSVP Card */}
      <div className="rsvp-paper-card">
        <div className="wax-seal-badge" aria-hidden="true">
          {WEDDING_META.monogram}
        </div>

        <div className="text-[12px] tracking-[0.24em] uppercase text-[#9a7741] font-semibold">
          RSVP
        </div>

        <h2 className="font-serif-display font-normal text-[clamp(27px,3.8vw,46px)] leading-[1.18] max-w-[710px] mx-auto mt-[20px] mb-[30px] text-[#332e28] [text-wrap:balance]">
          Please Confirm Your Attendance
          <br className="hidden sm:inline" /> We Cannot Wait To Celebrate This
          <br className="hidden sm:inline" /> Special Day With You.
        </h2>

        {savedRsvp && (
          <div className="max-w-[650px] mx-auto mb-6 px-5 py-4 bg-[#eef0e6] border border-[#cad1bc] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[#384a34] text-white grid place-items-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-[#26231f] m-0">
                  Attendance confirmed for {savedRsvp.guestName} ({savedRsvp.guestsCount}{' '}
                  {savedRsvp.guestsCount === 1 ? 'guest' : 'guests'})
                </p>
                <p className="text-[12.5px] text-[#5e5a52] mt-1 mb-0">
                  {savedRsvp.attendingCities.join(' · ')}
                </p>
              </div>
            </div>
            <a
              href={buildWhatsAppUrl(savedRsvp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-[12px] font-semibold text-[#384a34] underline underline-offset-4 hover:opacity-75 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Share via WhatsApp
            </a>
          </div>
        )}

        <div className="max-w-[650px] mx-auto mt-[28px] md:mt-[34px] p-[14px] md:px-[18px] md:py-[17px] flex flex-col md:flex-row items-center justify-between gap-[14px] md:gap-[18px] text-center md:text-left bg-[#e5e7dc]">
          <div className="font-serif-display font-normal text-[20px] md:text-[23px] text-[#282822]">
            December 6–9, 2026
            <small className="block font-sans-body font-medium text-[10px] tracking-[0.08em] text-[#6d6e63] mt-[6px]">
              {WEDDING_META.citiesLine}
            </small>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full md:w-auto inline-flex items-center justify-center bg-[#566a4b] hover:bg-[#384a34] text-white px-[23px] py-[14px] rounded-[3px] text-[13px] font-medium tracking-[0.07em] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#384a34]"
          >
            {savedRsvp ? 'Update RSVP' : 'Submit RSVP'}
          </button>
        </div>
      </div>

      {/* Interactive RSVP Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="rsvp-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="w-full max-w-[520px] bg-[#f7f5ed] text-[#26231f] border border-[#d6ccbe] shadow-2xl p-6 sm:p-8 relative max-h-[92svh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close RSVP form"
              className="absolute top-4 right-4 w-10 h-10 rounded-full grid place-items-center text-[#655f55] hover:bg-[#eae4df] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[11px] tracking-[0.22em] uppercase text-[#9a7741] font-semibold">
              Sumit &amp; Damini · RSVP
            </div>
            <h3
              id="rsvp-modal-title"
              className="font-serif-display font-normal text-[30px] leading-tight mt-2 mb-1 text-[#26231f]"
            >
              Confirm your presence
            </h3>
            <p className="text-[13.5px] text-[#6d6760] mb-6">
              Let our families know which celebrations you will join in Vidisha
              and Satna.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="block text-[12px] font-semibold tracking-[0.08em] uppercase text-[#5c564e] mb-1.5"
                >
                  Full Name / Family Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Sharma Family"
                  className="w-full bg-white border border-[#cfc5b7] px-3.5 py-2.5 text-[14.5px] text-[#26231f] focus:outline-none focus:border-[#384a34]"
                />
              </div>

              <div>
                <label
                  htmlFor="rsvp-guests"
                  className="block text-[12px] font-semibold tracking-[0.08em] uppercase text-[#5c564e] mb-1.5"
                >
                  Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestsCount(num)}
                      className={`h-10 min-w-10 px-3 text-[13.5px] font-medium border transition-colors cursor-pointer tabular-nums ${
                        guestsCount === num
                          ? 'bg-[#384a34] text-white border-[#384a34]'
                          : 'bg-white text-[#26231f] border-[#cfc5b7] hover:border-[#829582]'
                      }`}
                    >
                      {num === 6 ? '6+' : num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[12px] font-semibold tracking-[0.08em] uppercase text-[#5c564e] mb-2">
                  Celebrations Attending
                </span>
                <div className="space-y-2">
                  {CITY_OPTIONS.map((city) => {
                    const checked = attendingCities.includes(city);
                    return (
                      <label
                        key={city}
                        className={`flex items-center gap-3 px-3.5 py-2.5 border cursor-pointer transition-colors ${
                          checked
                            ? 'bg-[#eef0e6] border-[#829582]'
                            : 'bg-white border-[#ddd4c8]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleCity(city)}
                          className="accent-[#384a34] w-4 h-4 shrink-0"
                        />
                        <span className="text-[13.5px] text-[#26231f]">
                          {city}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="rsvp-note"
                  className="block text-[12px] font-semibold tracking-[0.08em] uppercase text-[#5c564e] mb-1.5"
                >
                  Blessings or Note (Optional)
                </label>
                <textarea
                  id="rsvp-note"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Wishing Sumit & Damini a lifetime of joy..."
                  className="w-full bg-white border border-[#cfc5b7] px-3.5 py-2.5 text-[14px] text-[#26231f] focus:outline-none focus:border-[#384a34] resize-none"
                />
              </div>

              {error && (
                <p className="text-[13px] text-[#9c322c] font-medium m-0">
                  {error}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 bg-[#384a34] hover:bg-[#263422] text-white px-5 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors cursor-pointer"
                >
                  Confirm Attendance
                </button>
                <a
                  href={buildWhatsAppUrl(
                    guestName.trim()
                      ? {
                          guestName: guestName.trim(),
                          guestsCount,
                          attendingCities,
                          message: message.trim(),
                          submittedAt: '',
                        }
                      : null
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#384a34] text-[#384a34] hover:bg-[#e5e7dc] px-4 py-3 text-[13px] font-semibold transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
