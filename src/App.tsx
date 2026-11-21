import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, PRIVACY_CONTENT } from './content/privacyPolicyContent';
import { PolicyHeader } from './components/PolicyHeader';
import { PolicyHero } from './components/PolicyHero';
import { PolicySections } from './components/PolicySections';

const STORAGE_KEY = 'tcc_inspection_privacy_lang';

const SECTION_IDS = [
  'overview',
  'permissions',
  'data-collected',
  'on-device-ai',
  'infrastructure',
  'security',
  'contact',
];

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ta') {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted frames
  }
  return 'en';
}

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const [activeSection, setActiveSection] = useState<string>('overview');

  const content = PRIVACY_CONTENT[lang];

  const handleLanguageChange = (nextLang: Language) => {
    setLang(nextLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore storage access errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.meta.pageTitle;
  }, [lang, content.meta.pageTitle]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFAF5] text-[#161A16]">
      <PolicyHeader
        lang={lang}
        onLanguageChange={handleLanguageChange}
        content={content}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <PolicyHero content={content} activeSection={activeSection} />

        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <PolicySections content={content} />
        </div>
      </main>

      <footer className="border-t border-[#C4CCC2] bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#161A16]">
              {content.footer.copyright}
            </p>
            <p className="text-xs text-[#5C655C]">
              {content.footer.motto} <span aria-hidden="true">·</span> {content.footer.complianceNote}
            </p>
          </div>
          <a
            href="#top"
            className="no-print inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1F2A8C] hover:text-[#C8102E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C] rounded-md"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
            <span>{content.meta.backToTop}</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
