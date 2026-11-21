import React, { useState } from 'react';
import { Printer, ArrowDown } from 'lucide-react';
import { PolicyTranslation } from '../content/privacyPolicyContent';

interface PolicyHeroProps {
  content: PolicyTranslation;
  activeSection: string;
}

export const PolicyHero: React.FC<PolicyHeroProps> = ({ content, activeSection }) => {
  const [backdropError, setBackdropError] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="top" className="relative overflow-hidden border-b border-[#C4CCC2] bg-[#FBFAF5]">
      {/* Subtle Rockfort cityscape atmospheric backdrop from official app asset */}
      {!backdropError && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden no-print"
        >
          <img
            src="/assets/aistudio/app_icon_d0628da3.png"
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setBackdropError(true)}
            className="w-full h-full object-cover object-center opacity-[0.14] scale-110 blur-[2px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(125deg, rgba(251,250,245,0.96) 0%, rgba(251,250,245,0.84) 55%, rgba(251,250,245,0.95) 100%)',
            }}
          />
        </div>
      )}

      <div className="relative max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-10">
        {/* Top Institutional Marks & App Icon Lockup */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/assets/aistudio/tn_emblem_0da0dd22.png"
              alt={content.hero.governmentLabel}
              referrerPolicy="no-referrer"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
            />
            <img
              src="/assets/aistudio/trichy_corp_logo_5c994da1.png"
              alt={content.hero.corporationLabel}
              referrerPolicy="no-referrer"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
            />
            <div className="pl-1 sm:pl-2">
              <p className="text-xs sm:text-sm font-semibold text-[#1F2A8C] tracking-wide">
                {content.hero.governmentLabel}
              </p>
              <p className="text-sm sm:text-base font-bold text-[#161A16]">
                {content.hero.corporationLabel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-[#5C655C]">
                {content.meta.effectiveDateLabel}
              </p>
              <p className="text-sm font-bold text-[#161A16] tabular-nums">
                {content.meta.effectiveDateValue}
              </p>
            </div>
            <div className="p-0.5 rounded-[18px] bg-gradient-to-br from-[#F2B705] via-[#F2B705] to-[#C8102E] shadow-sm shrink-0">
              <img
                src="/assets/aistudio/app_icon_d0628da3.png"
                alt="TCC Inspection Official App Icon"
                referrerPolicy="no-referrer"
                className="w-13 h-13 sm:w-15 sm:h-15 rounded-[16px] object-cover bg-white block"
              />
            </div>
          </div>
        </div>

        {/* Hero Copy + Primary Print Action */}
        <div className="pt-7 sm:pt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-[#C8102E] mb-2">
              {content.meta.readingNotice}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#161A16] leading-[1.18] text-balance">
              {content.hero.title}
            </h1>
            <p className="mt-3.5 text-base sm:text-[1.0625rem] text-[#5C655C] leading-relaxed max-w-2xl">
              {content.hero.subtitle}
            </p>

            {/* Clean unboxed typographic metadata */}
            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-[13px] font-medium text-[#5C655C] tabular-nums">
              {content.hero.metadataItems.map((item, idx) => (
                <React.Fragment key={item}>
                  {idx > 0 && (
                    <span aria-hidden="true" className="text-[#C4CCC2]">
                      ·
                    </span>
                  )}
                  <span className={idx === 1 ? 'font-mono-code text-[#1F2A8C]' : ''}>
                    {item}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 no-print shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8102E] hover:bg-[#a90d27] active:scale-[0.99] text-white text-sm font-semibold shadow-xs transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C]"
            >
              <Printer className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{content.hero.primaryAction}</span>
            </button>
            <a
              href="#permissions"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#C4CCC2] hover:border-[#1F2A8C] text-[#1F2A8C] text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C]"
            >
              <span>{content.hero.secondaryAction}</span>
              <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick-Jump Table of Contents Pills */}
        <nav
          aria-label={content.tocTitle}
          className="mt-8 pt-5 border-t border-[#C4CCC2]/70 no-print"
        >
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {content.toc.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C] ${
                    isActive
                      ? 'bg-[#1F2A8C] text-white border-[#1F2A8C]'
                      : 'bg-white text-[#161A16] border-[#C4CCC2] hover:border-[#1F2A8C] hover:text-[#1F2A8C]'
                  }`}
                >
                  <span
                    className={`tabular-nums text-[11px] font-semibold ${
                      isActive ? 'text-[#F2B705]' : 'text-[#C8102E]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
};
