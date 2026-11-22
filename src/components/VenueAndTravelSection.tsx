import { useState } from 'react';
import {
  FAMILIES,
  FAQ_ITEMS,
  TRAVEL_HIGHLIGHTS,
  VENUES,
  WEDDING_META,
} from '../data/weddingData';

export function VenueAndTravelSection() {
  const [venueImgFailed, setVenueImgFailed] = useState(false);

  return (
    <>
      {/* 50/50 Venue Split Section */}
      <section
        id="venue"
        className="grid grid-cols-1 md:grid-cols-2 md:min-h-[640px] items-stretch bg-[#f7f2ef]"
      >
        <div className="relative min-h-[360px] md:min-h-[580px] overflow-hidden bg-[#ddd4ca]">
          {!venueImgFailed ? (
            <img
              src={WEDDING_META.venueImage}
              alt="Sumit and Damini walking through a sandstone heritage courtyard"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setVenueImgFailed(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#c9b9a6] to-[#8a7c6c] flex items-center justify-center p-10 text-center">
              <span className="font-serif-display text-2xl text-white">
                Vidisha &amp; Satna · Madhya Pradesh
              </span>
            </div>
          )}
        </div>

        <div className="px-6 py-[54px] md:p-[clamp(45px,7vw,100px)] self-center">
          <div className="text-[12px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
            The locations
          </div>
          <h2 className="font-serif-display font-normal text-[clamp(38px,5vw,64px)] leading-[1.05] text-[#26231f] mt-[18px] mb-[10px]">
            Vidisha
            <br />
            &amp; Satna
          </h2>
          <p className="text-[#706962] leading-[1.8] text-[14px] my-1">
            Our celebrations begin in Vidisha and continue in Satna, Madhya
            Pradesh.
          </p>

          <div className="mt-2">
            {VENUES.map((venue) => (
              <div key={venue.name} className="mt-[28px]">
                <h3 className="font-serif-display font-normal text-[25px] text-[#26231f] mb-[6px]">
                  {venue.name}
                </h3>
                <p className="text-[#706962] leading-[1.75] text-[14px] my-1">
                  {venue.subtitle}
                </p>
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#384a34] hover:bg-[#263422] text-white px-[21px] py-[13px] rounded-[3px] mt-[10px] text-[11px] font-medium tracking-[0.09em] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#384a34]"
                >
                  {venue.buttonLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Visit / Journey Section */}
      <section className="bg-[#eae4df] py-[84px] md:py-[120px] px-[clamp(22px,8vw,150px)]">
        <div className="text-center mx-auto mb-[52px] md:mb-[64px]">
          <div className="text-[12px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
            Plan your visit
          </div>
          <h2 className="font-serif-display font-normal text-[clamp(34px,5vw,66px)] leading-[1.08] tracking-[-0.03em] text-[#26231f] my-[18px] [text-wrap:balance]">
            Journey to our wedding
          </h2>
          <p className="text-[#6f6962] leading-[1.8] text-[15px] max-w-[600px] mx-auto">
            Everything you need to follow the celebrations between Vidisha and
            Satna.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {TRAVEL_HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="bg-[#f7f2ef] p-[31px] min-h-[205px]"
            >
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
                {item.kicker}
              </div>
              <h3 className="font-serif-display font-normal text-[22px] tracking-[0.04em] text-[#26231f] mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-[13.5px] leading-[1.75] text-[#6d6760] m-0">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Families Section */}
      <section className="bg-[#f7f2ef] py-[84px] md:py-[120px] px-[clamp(22px,8vw,150px)]">
        <div className="text-center mx-auto mb-[52px] md:mb-[64px]">
          <div className="text-[12px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
            With love from our families
          </div>
          <h2 className="font-serif-display font-normal text-[clamp(34px,5vw,66px)] leading-[1.08] tracking-[-0.03em] text-[#26231f] my-[18px] [text-wrap:balance]">
            Your presence is our greatest gift
          </h2>
        </div>

        <div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {FAMILIES.map((member) => (
            <article
              key={member.name}
              className="border border-[#ded6ce] px-[30px] py-[28px]"
            >
              <small className="text-[#a78e53] tracking-[0.15em] text-[10px] font-semibold block">
                {member.role}
              </small>
              <h3 className="font-serif-display font-normal text-[25px] text-[#26231f] my-[12px]">
                {member.name}
              </h3>
              <p className="text-[14px] leading-[1.75] text-[#6d6760] m-0">
                {member.lineage}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="bg-[#eae4df] py-[84px] md:py-[120px] px-[clamp(22px,8vw,150px)]">
        <div className="max-w-[850px] mx-auto">
          <div className="text-center mx-auto mb-[48px] md:mb-[64px]">
            <div className="text-[12px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
              A few helpful details
            </div>
            <h2 className="font-serif-display font-normal text-[clamp(34px,5vw,66px)] leading-[1.08] tracking-[-0.03em] text-[#26231f] my-[18px] [text-wrap:balance]">
              Questions you may have
            </h2>
          </div>

          <div>
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="faq-item border-b border-[#cfc6bd] py-[22px]"
              >
                <summary className="cursor-pointer font-serif-display font-normal text-[21px] md:text-[23px] text-[#26231f] flex justify-between items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#384a34]">
                  <span>{item.question}</span>
                </summary>
                <p className="text-[#6d6760] leading-[1.8] max-w-[700px] text-[14.5px] mt-3 mb-1">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
