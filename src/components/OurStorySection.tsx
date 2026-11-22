import { WEDDING_META } from '../data/weddingData';

export function OurStorySection() {
  return (
    <section
      id="our-story"
      className="bg-[#eae4df] py-[84px] md:py-[120px] px-[clamp(22px,8vw,150px)]"
    >
      <div className="text-center mx-auto mb-[52px] md:mb-[64px]">
        <div className="text-[12px] tracking-[0.2em] uppercase text-[#c6ad71] font-semibold">
          Two families, one celebration
        </div>
        <h2 className="font-serif-display font-normal text-[clamp(34px,5vw,66px)] leading-[1.08] tracking-[-0.03em] text-[#26231f] my-[18px] [text-wrap:balance]">
          With the blessings of our families
        </h2>
        <p className="text-[#6f6962] leading-[1.8] max-w-[600px] mx-auto text-[15px]">
          We would be honoured to have you with us as we begin our new journey
          together.
        </p>
      </div>

      <div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[22px]">
        <article className="md:col-start-2 bg-[#f8f4f1] rounded-[5px] px-[30px] py-[34px] md:min-h-[275px] border border-[#e3dbd3]/60">
          <div className="font-serif-display italic text-[22px] text-[#c6ad71]">
            Together
          </div>
          <h3 className="font-serif-display font-normal text-[26px] text-[#26231f] mt-[20px] mb-[8px]">
            {WEDDING_META.coupleTitle}
          </h3>
          <time className="text-[11px] tracking-[0.11em] uppercase text-[#9a8b70] block">
            December 6–9, 2026
          </time>
          <p className="text-[14px] leading-[1.75] text-[#6d6760] mt-3 mb-0">
            Four days of family rituals, music, laughter and the beginning of
            forever.
          </p>
        </article>
      </div>
    </section>
  );
}
