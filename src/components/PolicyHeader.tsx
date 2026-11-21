import React from 'react';
import { Language, PolicyTranslation } from '../content/privacyPolicyContent';

interface PolicyHeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  content: PolicyTranslation;
  activeSection: string;
}

export const PolicyHeader: React.FC<PolicyHeaderProps> = ({
  lang,
  onLanguageChange,
  content,
  activeSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBFAF5]/92 backdrop-blur-md border-b border-[#C4CCC2] no-print">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand lockup */}
        <a
          href="#top"
          className="flex items-center gap-2.5 min-w-0 shrink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C] rounded-lg"
        >
          <img
            src="/assets/aistudio/trichy_corp_logo_5c994da1.png"
            alt="Tiruchirappalli City Corporation Seal"
            referrerPolicy="no-referrer"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
          />
          <span className="text-sm sm:text-base font-semibold tracking-tight text-[#161A16] whitespace-nowrap truncate">
            {content.meta.headerBrand}
          </span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5C655C]"
        >
          {content.navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C] ${
                  isActive
                    ? 'text-[#C8102E] border-[#C8102E] font-semibold'
                    : 'border-transparent hover:text-[#161A16] hover:border-[#C4CCC2]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher Pill */}
        <div
          role="group"
          aria-label="Language selection"
          className="flex items-center p-1 rounded-full bg-white border border-[#C4CCC2] shadow-xs shrink-0"
        >
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            aria-pressed={lang === 'en'}
            className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1F2A8C] ${
              lang === 'en'
                ? 'bg-[#1F2A8C] text-white'
                : 'text-[#5C655C] hover:text-[#161A16]'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange('ta')}
            aria-pressed={lang === 'ta'}
            className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1F2A8C] ${
              lang === 'ta'
                ? 'bg-[#1F2A8C] text-white'
                : 'text-[#5C655C] hover:text-[#161A16]'
            }`}
          >
            தமிழ்
          </button>
        </div>
      </div>
    </header>
  );
};
