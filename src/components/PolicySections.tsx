import React, { useState } from 'react';
import {
  Camera,
  MapPin,
  Wifi,
  ShieldCheck,
  Cpu,
  Database,
  Lock,
  Building2,
  Mail,
  Phone,
  ChevronDown,
  Copy,
  Check,
  Ban,
} from 'lucide-react';
import { PolicyTranslation } from '../content/privacyPolicyContent';

interface PolicySectionsProps {
  content: PolicyTranslation;
}

const PERMISSION_ICONS = [Camera, MapPin, Wifi];

export const PolicySections: React.FC<PolicySectionsProps> = ({ content }) => {
  const { sections } = content;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(() => {
        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(null), 2000);
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* 01. About the App & Scope */}
      <article
        id="overview"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
              {sections.overview.number}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
              {sections.overview.title}
            </h2>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.overview.lead}
          </p>
        </header>

        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Authorized Roles */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold text-[#1F2A8C] tracking-wide mb-3">
              {sections.overview.authorizedRolesTitle}
            </h3>
            <ul className="divide-y divide-[#C4CCC2]/55">
              {sections.overview.authorizedRoles.map((role, index) => (
                <li
                  key={role}
                  className="py-2.5 flex items-baseline gap-3 text-sm sm:text-[15px] text-[#161A16]"
                >
                  <span className="text-xs font-semibold text-[#C8102E] tabular-nums shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones & 16 Asset Categories */}
          <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-[#C4CCC2]/60">
            <h3 className="text-sm font-bold text-[#1F2A8C] tracking-wide">
              {sections.overview.zonesTitle}
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-[#5C655C] leading-relaxed">
              {sections.overview.zonesDescription}
            </p>

            <h4 className="mt-5 mb-3 text-xs font-bold uppercase tracking-wider text-[#5C655C]">
              {sections.overview.assetCategoriesTitle}
            </h4>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#161A16]">
              {sections.overview.assetCategories.map((category, idx) => (
                <li key={category} className="flex items-baseline gap-2.5 py-1">
                  <span className="text-xs font-semibold text-[#5C655C] tabular-nums w-5 shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{category}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Non-Commercial Notice Strip */}
        <div className="mt-8 pt-5 border-t border-[#C4CCC2]/70 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#C8102E]">
            <Ban className="w-4.5 h-4.5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#161A16]">
              {sections.overview.restrictionNoticeTitle}
            </h3>
            <p className="mt-1 text-sm text-[#5C655C] leading-relaxed">
              {sections.overview.restrictionNoticeBody}
            </p>
          </div>
        </div>
      </article>

      {/* 02. Android Permissions Transparency Table */}
      <article
        id="permissions"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
              {sections.permissions.number}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
              {sections.permissions.title}
            </h2>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.permissions.lead}
          </p>
        </header>

        {/* Desktop & Tablet Table */}
        <div className="hidden md:block mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#C4CCC2]">
                <th
                  scope="col"
                  className="py-3.5 pr-4 text-xs font-bold uppercase tracking-wider text-[#5C655C] w-[26%]"
                >
                  {sections.permissions.headers.permission}
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#5C655C] w-[40%]"
                >
                  {sections.permissions.headers.whyNeeded}
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 text-xs font-bold uppercase tracking-wider text-[#5C655C] w-[34%]"
                >
                  {sections.permissions.headers.whenAccessed}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C4CCC2]/60">
              {sections.permissions.rows.map((row, idx) => {
                const Icon = PERMISSION_ICONS[idx] || ShieldCheck;
                return (
                  <tr key={row.manifestKey} className="align-top">
                    <td className="py-5 pr-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
                          <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-[15px] font-bold text-[#161A16]">
                            {row.permission}
                          </div>
                          <div className="mt-1 font-mono-code text-[11px] text-[#5C655C] break-all">
                            {row.manifestKey}
                          </div>
                          <div className="mt-1.5 text-xs font-semibold text-[#C8102E]">
                            {row.scopeLabel}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-4 text-sm text-[#161A16] leading-relaxed">
                      {row.whyNeeded}
                    </td>
                    <td className="py-5 pl-4 text-sm text-[#5C655C] leading-relaxed">
                      {row.whenAccessed}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Table */}
        <div className="md:hidden mt-4 divide-y divide-[#C4CCC2]/60">
          {sections.permissions.rows.map((row, idx) => {
            const Icon = PERMISSION_ICONS[idx] || ShieldCheck;
            return (
              <div key={row.manifestKey} className="py-5 first:pt-2 last:pb-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#161A16]">
                      {row.permission}
                    </div>
                    <div className="mt-0.5 font-mono-code text-[11px] text-[#5C655C] break-all">
                      {row.manifestKey}
                    </div>
                  </div>
                </div>
                <dl className="mt-3.5 space-y-2.5 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                      {sections.permissions.headers.whyNeeded}
                    </dt>
                    <dd className="mt-0.5 text-[#161A16] leading-relaxed">{row.whyNeeded}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                      {sections.permissions.headers.whenAccessed}
                    </dt>
                    <dd className="mt-0.5 text-[#5C655C] leading-relaxed">{row.whenAccessed}</dd>
                  </div>
                </dl>
              </div>
            );
          })}
        </div>

        {/* Zero Background Location Notice */}
        <div className="mt-6 pt-5 border-t border-[#C4CCC2]/70 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
            <ShieldCheck className="w-4.5 h-4.5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#161A16]">
              {sections.permissions.backgroundLocationCalloutTitle}
            </h3>
            <p className="mt-1 text-sm text-[#5C655C] leading-relaxed">
              {sections.permissions.backgroundLocationCalloutBody}
            </p>
          </div>
        </div>
      </article>

      {/* 03. Information We Collect */}
      <article
        id="data-collected"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
              {sections.dataCollected.number}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
              {sections.dataCollected.title}
            </h2>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.dataCollected.lead}
          </p>
        </header>

        <div className="divide-y divide-[#C4CCC2]/60">
          {sections.dataCollected.categories.map((category, idx) => (
            <section
              key={category.title}
              className="py-6 first:pt-6 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 print-break-inside-avoid"
            >
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xs font-bold text-[#5C655C] tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-[#161A16]">
                    {category.title}
                  </h3>
                </div>
                {category.technicalTags && category.technicalTags.length > 0 && (
                  <p className="mt-1.5 pl-6 font-mono-code text-xs text-[#1F2A8C] leading-relaxed">
                    {category.technicalTags.join(' · ')}
                  </p>
                )}
              </div>
              <div className="lg:col-span-8">
                <p className="text-sm sm:text-[15px] text-[#161A16] leading-relaxed">
                  {category.description}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-[#5C655C]">
                  {category.retentionOrNote}
                </p>
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* 04. On-Device AI Processing */}
      <article
        id="on-device-ai"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
                {sections.onDeviceAi.number}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
                {sections.onDeviceAi.title}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
              <Cpu className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.onDeviceAi.lead}
          </p>
        </header>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sections.onDeviceAi.points.map((point, idx) => (
            <div key={point.title} className="space-y-2">
              <div className="text-xs font-bold text-[#C8102E] tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[15px] font-bold text-[#161A16] leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-[#5C655C] leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 pt-5 border-t border-[#C4CCC2]/70">
          <p className="text-xs sm:text-sm font-semibold text-[#1F2A8C]">
            {sections.onDeviceAi.transmissionSummary}
          </p>
        </div>
      </article>

      {/* 05. How We Use & Store Data (Third-Party Infrastructure) */}
      <article
        id="infrastructure"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
                {sections.infrastructure.number}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
                {sections.infrastructure.title}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
              <Database className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.infrastructure.lead}
          </p>
        </header>

        <div className="divide-y divide-[#C4CCC2]/60">
          {sections.infrastructure.partners.map((partner) => (
            <div
              key={partner.provider}
              className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <div className="text-base font-bold text-[#161A16]">
                  {partner.provider}
                </div>
                <div className="mt-0.5 text-xs font-semibold text-[#1F2A8C]">
                  {partner.service}
                </div>
              </div>
              <div className="lg:col-span-8 text-sm sm:text-[15px] text-[#5C655C] leading-relaxed">
                {partner.purpose}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-5 border-t border-[#C4CCC2]/70">
          <h3 className="text-sm font-bold text-[#C8102E]">
            {sections.infrastructure.zeroSellingTitle}
          </h3>
          <p className="mt-1.5 text-sm text-[#161A16] leading-relaxed">
            {sections.infrastructure.zeroSellingBody}
          </p>
        </div>
      </article>

      {/* 06. Data Security & Retention */}
      <article
        id="security"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
                {sections.security.number}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
                {sections.security.title}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
              <Lock className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.security.lead}
          </p>
        </header>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sections.security.controls.map((control) => (
            <div key={control.title} className="space-y-1.5">
              <h3 className="text-[15px] font-bold text-[#161A16]">
                {control.title}
              </h3>
              <p className="text-sm text-[#5C655C] leading-relaxed">
                {control.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 pt-6 border-t border-[#C4CCC2]/70">
          <h3 className="text-sm font-bold text-[#1F2A8C]">
            {sections.security.retentionTitle}
          </h3>
          <p className="mt-2 text-sm sm:text-[15px] text-[#5C655C] leading-relaxed max-w-4xl">
            {sections.security.retentionBody}
          </p>
        </div>
      </article>

      {/* Operational Clarifications (Interactive FAQ Accordion) */}
      <article className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid">
        <h2 className="text-lg sm:text-xl font-bold text-[#161A16] pb-4 border-b border-[#C4CCC2]/70">
          {sections.faq.title}
        </h2>
        <div className="divide-y divide-[#C4CCC2]/60">
          {sections.faq.items.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={item.question} className="py-4 first:pt-5 last:pb-1">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C] rounded-lg"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#161A16]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 text-[#5C655C] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#C8102E]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-sm text-[#5C655C] leading-relaxed pr-8">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </article>

      {/* 07. Account Access, Corrections & Contact */}
      <article
        id="contact"
        className="bg-white border border-[#C4CCC2] rounded-[20px] p-6 sm:p-8 lg:p-10 print-surface print-break-inside-avoid"
      >
        <header className="pb-6 border-b border-[#C4CCC2]/70">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-bold text-[#C8102E] tabular-nums tracking-wide">
              {sections.contact.number}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#161A16] tracking-tight">
              {sections.contact.title}
            </h2>
          </div>
          <p className="mt-3 text-base text-[#5C655C] leading-relaxed max-w-3xl">
            {sections.contact.lead}
          </p>
          <p className="mt-2.5 text-sm sm:text-[15px] text-[#161A16] leading-relaxed max-w-3xl">
            {sections.contact.accountManagementNote}
          </p>
        </header>

        {/* Official Contact Details Grid */}
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
                <Building2 className="w-4.5 h-4.5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                  {sections.contact.card.organizationLabel}
                </p>
                <p className="mt-0.5 text-base font-bold text-[#161A16]">
                  {sections.contact.card.organizationValue}
                </p>
                <p className="text-sm font-medium text-[#1F2A8C]">
                  {sections.contact.card.wingValue}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#C4CCC2]/55">
              <p className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                {sections.contact.card.addressLabel}
              </p>
              <p className="mt-1 text-sm sm:text-[15px] text-[#161A16] leading-relaxed">
                {sections.contact.card.addressValue}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pl-6 lg:border-l lg:border-[#C4CCC2]/60">
            {/* Official Support Email Placeholder */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#C8102E]">
                  <Mail className="w-4.5 h-4.5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                    {sections.contact.card.emailLabel}
                  </p>
                  <p className="mt-0.5 font-mono-code text-sm font-semibold text-[#1F2A8C] break-all">
                    {sections.contact.card.emailValue}
                  </p>
                  <p className="mt-1 text-xs text-[#5C655C] italic">
                    {sections.contact.card.emailPlaceholderNote}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('email', sections.contact.card.emailValue)}
                title="Copy email"
                aria-label="Copy support email"
                className="no-print p-2 rounded-lg text-[#5C655C] hover:text-[#1F2A8C] hover:bg-[#FBFAF5] transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C]"
              >
                {copiedKey === 'email' ? (
                  <Check className="w-4 h-4 text-[#14532D]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Official Helpline Placeholder */}
            <div className="pt-3 border-t border-[#C4CCC2]/55 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FBFAF5] flex items-center justify-center shrink-0 text-[#1F2A8C]">
                <Phone className="w-4.5 h-4.5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                  {sections.contact.card.helplineLabel}
                </p>
                <p className="mt-0.5 font-mono-code text-sm font-semibold text-[#161A16] tabular-nums">
                  {sections.contact.card.helplineValue}
                </p>
                <p className="mt-1 text-xs text-[#5C655C] italic">
                  {sections.contact.card.helplinePlaceholderNote}
                </p>
              </div>
            </div>

            {/* Package ID */}
            <div className="pt-3 border-t border-[#C4CCC2]/55 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5C655C]">
                  {sections.contact.card.packageLabel}
                </p>
                <p className="mt-0.5 font-mono-code text-sm font-semibold text-[#161A16]">
                  {sections.contact.card.packageValue}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('pkg', sections.contact.card.packageValue)}
                title="Copy package ID"
                aria-label="Copy package ID"
                className="no-print p-2 rounded-lg text-[#5C655C] hover:text-[#1F2A8C] hover:bg-[#FBFAF5] transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A8C]"
              >
                {copiedKey === 'pkg' ? (
                  <Check className="w-4 h-4 text-[#14532D]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
