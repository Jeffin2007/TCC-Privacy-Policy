export type Language = 'en' | 'ta';

export interface TocItem {
  id: string;
  number: string;
  label: string;
}

export interface PermissionRow {
  permission: string;
  manifestKey: string;
  whyNeeded: string;
  whenAccessed: string;
  scopeLabel: string;
}

export interface DataCategory {
  title: string;
  technicalTags?: string[];
  description: string;
  retentionOrNote: string;
}

export interface InfrastructurePartner {
  provider: string;
  service: string;
  purpose: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PolicyTranslation {
  meta: {
    pageTitle: string;
    appTitle: string;
    headerBrand: string;
    packageId: string;
    effectiveDateLabel: string;
    effectiveDateValue: string;
    jurisdiction: string;
    printButton: string;
    backToTop: string;
    readingNotice: string;
  };
  navLinks: {
    id: string;
    label: string;
  }[];
  hero: {
    governmentLabel: string;
    corporationLabel: string;
    title: string;
    subtitle: string;
    metadataItems: string[];
    primaryAction: string;
    secondaryAction: string;
  };
  tocTitle: string;
  toc: TocItem[];
  sections: {
    overview: {
      number: string;
      title: string;
      lead: string;
      authorizedRolesTitle: string;
      authorizedRoles: string[];
      zonesTitle: string;
      zonesDescription: string;
      assetCategoriesTitle: string;
      assetCategories: string[];
      restrictionNoticeTitle: string;
      restrictionNoticeBody: string;
    };
    permissions: {
      number: string;
      title: string;
      lead: string;
      headers: {
        permission: string;
        whyNeeded: string;
        whenAccessed: string;
      };
      rows: PermissionRow[];
      backgroundLocationCalloutTitle: string;
      backgroundLocationCalloutBody: string;
    };
    dataCollected: {
      number: string;
      title: string;
      lead: string;
      categories: DataCategory[];
    };
    onDeviceAi: {
      number: string;
      title: string;
      lead: string;
      points: {
        title: string;
        detail: string;
      }[];
      transmissionSummary: string;
    };
    infrastructure: {
      number: string;
      title: string;
      lead: string;
      partners: InfrastructurePartner[];
      zeroSellingTitle: string;
      zeroSellingBody: string;
    };
    security: {
      number: string;
      title: string;
      lead: string;
      controls: {
        title: string;
        detail: string;
      }[];
      retentionTitle: string;
      retentionBody: string;
    };
    faq: {
      title: string;
      items: FaqItem[];
    };
    contact: {
      number: string;
      title: string;
      lead: string;
      accountManagementNote: string;
      card: {
        organizationLabel: string;
        organizationValue: string;
        wingLabel: string;
        wingValue: string;
        addressLabel: string;
        addressValue: string;
        emailLabel: string;
        emailValue: string;
        emailPlaceholderNote: string;
        helplineLabel: string;
        helplineValue: string;
        helplinePlaceholderNote: string;
        packageLabel: string;
        packageValue: string;
      };
    };
  };
  footer: {
    copyright: string;
    motto: string;
    complianceNote: string;
  };
}

export const PRIVACY_CONTENT: Record<Language, PolicyTranslation> = {
  en: {
    meta: {
      pageTitle: 'TCC Inspection — Privacy Policy | Tiruchirappalli City Corporation',
      appTitle: 'TCC Inspection',
      headerBrand: 'TCC Inspection — Privacy Policy',
      packageId: 'gov.tn.trichycorp',
      effectiveDateLabel: 'Effective Date',
      effectiveDateValue: 'November 2026',
      jurisdiction: 'Tiruchirappalli, Tamil Nadu, India',
      printButton: 'Print / Save as PDF',
      backToTop: 'Back to top',
      readingNotice: 'Official Governance & Google Play Data Safety Disclosure',
    },
    navLinks: [
      { id: 'overview', label: 'Overview' },
      { id: 'permissions', label: 'Permissions' },
      { id: 'data-collected', label: 'Data Collected' },
      { id: 'on-device-ai', label: 'On-Device AI' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      governmentLabel: 'Government of Tamil Nadu',
      corporationLabel: 'Tiruchirappalli City Corporation',
      title: 'Privacy Policy for TCC Inspection',
      subtitle:
        'Official privacy and data governance policy for the internal civic-infrastructure inspection mobile application (gov.tn.trichycorp) operated by Tiruchirappalli City Corporation.',
      metadataItems: [
        'Effective Date: November 2026',
        'Package: gov.tn.trichycorp',
        'Zones 1–5 Official Platform',
        'No Ads · No Public Sign-Up',
      ],
      primaryAction: 'Print / Save as PDF',
      secondaryAction: 'View Permissions Table',
    },
    tocTitle: 'Policy Sections',
    toc: [
      { id: 'overview', number: '01', label: 'Overview & Scope' },
      { id: 'permissions', number: '02', label: 'Permissions' },
      { id: 'data-collected', number: '03', label: 'Data Collected' },
      { id: 'on-device-ai', number: '04', label: 'On-Device AI' },
      { id: 'infrastructure', number: '05', label: 'Infrastructure' },
      { id: 'security', number: '06', label: 'Security & Retention' },
      { id: 'contact', number: '07', label: 'Access & Contact' },
    ],
    sections: {
      overview: {
        number: '01',
        title: 'About the App & Scope',
        lead: 'TCC Inspection is an internal civic-infrastructure inspection platform built exclusively for authorized officials of Tiruchirappalli City Corporation (TCC), Tamil Nadu, India.',
        authorizedRolesTitle: 'Authorized Municipal Officials',
        authorizedRoles: [
          'Commissioner',
          'City Engineer',
          'Executive Engineers (EE)',
          'Assistant Executive Engineers (AEE)',
          'Assistant Engineers (AE)',
          'Junior Engineers (JE)',
          'Technical Assistants (TA)',
        ],
        zonesTitle: 'Municipal Coverage Across Zones 1–5',
        zonesDescription:
          'Authorized engineers and inspecting officers use the application to inspect, verify, and submit condition reports across all five administrative zones (Zones 1–5) of Tiruchirappalli City Corporation covering sixteen municipal asset categories:',
        assetCategoriesTitle: 'Covered Municipal Asset Categories',
        assetCategories: [
          'PKBS Breakfast Scheme Schools',
          'Public & Community Toilets',
          'Parks & Open Spaces',
          'Overhead Tanks (OHT)',
          'UGD Pumping Stations',
          'Municipal Markets',
          'Bus Shelters',
          'Burial Grounds',
          'Urban Health Centres',
          'ICDS / Anganwadi Centres',
          'PDS / Ration Shops',
          'Public Libraries',
          'Gymnasiums',
          'Amma Unavagam Canteens',
          'Municipal Buildings',
          'Ongoing Civil Works',
        ],
        restrictionNoticeTitle: 'Restricted Official Use Only (Non-Commercial)',
        restrictionNoticeBody:
          'This application is strictly for official government civic-monitoring duties. There is no public user registration, no commercial advertising, no third-party ad SDKs, and no in-app purchases.',
      },
      permissions: {
        number: '02',
        title: 'Android Permissions Transparency',
        lead: 'TCC Inspection requests only the minimum Android system permissions strictly required to verify physical site presence and record photographic inspection evidence.',
        headers: {
          permission: 'Android Permission',
          whyNeeded: 'Why It Is Needed',
          whenAccessed: 'When It Is Accessed',
        },
        rows: [
          {
            permission: 'Camera',
            manifestKey: 'android.permission.CAMERA',
            whyNeeded:
              'Captures geotagged on-site photographic evidence of municipal asset conditions and feeds single-frame captures to the local on-device AI analyzer.',
            whenAccessed:
              'Only when the officer explicitly opens the inspection camera screen during an active asset inspection.',
            scopeLabel: 'Active Inspection Only',
          },
          {
            permission: 'Fine & Coarse Location',
            manifestKey: 'ACCESS_FINE_LOCATION · ACCESS_COARSE_LOCATION',
            whyNeeded:
              'Verifies that the inspecting official is physically present within the assigned asset or ward geofence and attaches verified coordinates to the inspection record.',
            whenAccessed:
              'Strictly in the foreground while an inspection session or geofence check is open. Never accessed in the background.',
            scopeLabel: 'Foreground Only',
          },
          {
            permission: 'Internet & Network State',
            manifestKey: 'INTERNET · ACCESS_NETWORK_STATE',
            whyNeeded:
              'Authenticates official officer credentials, validates single-device session status, syncs inspection reports and asset registries, and receives silent OTA web bundle updates.',
            whenAccessed:
              'When signing in, fetching assigned ward assets, submitting completed inspection reports, or checking for app bundle updates.',
            scopeLabel: 'Encrypted Sync',
          },
        ],
        backgroundLocationCalloutTitle: 'Zero Background Location Tracking',
        backgroundLocationCalloutBody:
          'TCC Inspection does not request ACCESS_BACKGROUND_LOCATION and never tracks, polls, or logs officer location when the app is closed, minimized, or idle.',
      },
      dataCollected: {
        number: '03',
        title: 'Information We Collect',
        lead: 'All data collected is strictly bounded to municipal asset auditing, official accountability, and single-device session integrity.',
        categories: [
          {
            title: 'Official Account & Profile Information',
            technicalTags: ['Cloud Firestore', 'Supabase PostgreSQL'],
            description:
              'Officer full name, official username, designation, official mobile phone number, assigned administrative zone, and assigned ward numbers provisioned centrally by TCC administrators.',
            retentionOrNote: 'Managed centrally by TCC administration; no self-service public registration.',
          },
          {
            title: 'Device & Single-Device Session Data',
            technicalTags: ['device_id', 'device_label', 'session_token'],
            description:
              'A unique device identifier (device_id), device model/label, and active session token collected strictly for Zone 1–5 field officers to enforce the Single-Device Policy and prevent simultaneous multi-device logins or proxy inspections.',
            retentionOrNote: 'Bound to active officer duty status; resettable by TCC IT Cell.',
          },
          {
            title: 'Foreground GPS Location',
            technicalTags: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            description:
              'Precise and approximate GPS coordinates captured solely at the moment an officer initiates and submits an active site inspection to validate asset/ward geofence compliance.',
            retentionOrNote: 'No background location collection when closed or idle.',
          },
          {
            title: 'Camera & Inspection Evidence',
            technicalTags: ['CAMERA'],
            description:
              'On-site inspection photographs captured directly by the officer as visual proof of facility condition, hygiene, or civil work progress.',
            retentionOrNote: 'Linked to the specific asset inspection record and archived securely.',
          },
          {
            title: 'Inspection Reports & Checklist Data',
            technicalTags: ['Ratings', 'Checklists', 'Timestamps'],
            description:
              'Officer-submitted facility condition ratings, structured checklist responses, field remarks, bilingual AI summary notes, and submission timestamps.',
            retentionOrNote: 'Retained as part of official municipal governance records.',
          },
        ],
      },
      onDeviceAi: {
        number: '04',
        title: 'On-Device AI Processing',
        lead: 'To protect privacy and ensure reliable operation even in low-connectivity field zones, visual analysis runs directly on the officer’s handset.',
        points: [
          {
            title: 'Embedded LiteRT (TensorFlow Lite) Execution',
            detail:
              'Inspection photographs are analyzed locally on the mobile device using embedded LiteRT models to assist officers with facility condition assessment.',
          },
          {
            title: 'Bilingual Structured Summaries',
            detail:
              'On-device inference assists in generating structured inspection notes in both English and Tamil, reducing manual field typing errors.',
          },
          {
            title: 'No Continuous Camera Streaming',
            detail:
              'Raw continuous camera frames or live video feeds are never streamed or uploaded to external AI servers. Only the final officer-approved evidence photo, structured summary text, and confidence metrics are transmitted.',
          },
        ],
        transmissionSummary:
          'Transmitted payload: Final approved evidence image + structured bilingual summary + confidence metrics. Raw video streams are never transmitted.',
      },
      infrastructure: {
        number: '05',
        title: 'How We Use & Store Data (Third-Party Infrastructure)',
        lead: 'TCC Inspection relies on vetted cloud and institutional infrastructure solely to operate municipal inspection workflows.',
        partners: [
          {
            provider: 'Google Firebase',
            service: 'Firebase Authentication & Cloud Firestore',
            purpose:
              'Verifies official officer sign-in credentials and performs authoritative role, zone, and ward profile lookups.',
          },
          {
            provider: 'Supabase',
            service: 'PostgreSQL Database & Object Storage',
            purpose:
              'Stores the municipal asset registry, daily inspection assignments, single-device session verification records, submitted inspection reports, and delivers silent over-the-air (OTA) web bundle updates.',
          },
          {
            provider: 'Google Apps Script & Google Drive',
            service: 'TCC Managed Archival Workspace',
            purpose:
              'Provides structured, secure archival storage of uploaded field inspection evidence photographs linked to official asset records.',
          },
        ],
        zeroSellingTitle: 'Zero Data Selling · Zero Advertising',
        zeroSellingBody:
          'Tiruchirappalli City Corporation never sells, rents, trades, or shares officer profiles, location coordinates, or inspection photographs with advertisers, marketing agencies, or third-party data brokers.',
      },
      security: {
        number: '06',
        title: 'Data Security & Retention',
        lead: 'Technical and administrative safeguards protect all official records in transit and at rest.',
        controls: [
          {
            title: 'Encrypted Transport (HTTPS / TLS)',
            detail:
              'All network communications between the TCC Inspection app, Firebase, Supabase, and archival endpoints use industry-standard HTTPS/TLS encryption.',
          },
          {
            title: 'Token-Based Auth & Role-Based Access',
            detail:
              'Every API request requires valid authentication tokens, with server-enforced jurisdiction boundaries restricting officers to their authorized zones and wards.',
          },
          {
            title: 'Single-Device Enforcement',
            detail:
              'Zone 1–5 field sessions are cryptographically bound to the registered device identifier to prevent unauthorized credential sharing.',
          },
        ],
        retentionTitle: 'Data Retention Policy',
        retentionBody:
          'Transient daily inspection assignment logs are periodically pruned after their operational retention window closes. Official municipal asset audit trails, inspection reports, and officer inspection cycle records are preserved in accordance with Tamil Nadu municipal governance and public accountability mandates.',
      },
      faq: {
        title: 'Compliance & Operational Clarifications',
        items: [
          {
            question: 'Does the app track my location after duty hours or when closed?',
            answer:
              'No. Location is requested solely in the foreground while an inspection screen is open to verify asset geofence proximity. No background location service runs when the app is closed or idle.',
          },
          {
            question: 'Can members of the general public create an account?',
            answer:
              'No. TCC Inspection has no public sign-up flow. Accounts are provisioned exclusively by authorized Tiruchirappalli City Corporation administrators for municipal officers.',
          },
          {
            question: 'How are inspection photos handled by the on-device AI?',
            answer:
              'Photos are processed locally on your device using embedded LiteRT models. Only the final inspection photo you submit and the structured summary text are sent to TCC servers.',
          },
        ],
      },
      contact: {
        number: '07',
        title: 'Account Access, Corrections & Contact',
        lead: 'Because all accounts are official government credentials managed by Tiruchirappalli City Corporation, officers cannot self-delete institutional audit records from within the app.',
        accountManagementNote:
          'Authorized officers requiring profile corrections, zone/ward reassignments, single-device session resets, or account deactivation/deletion upon transfer or retirement should submit an official request to the TCC IT & Administration Cell.',
        card: {
          organizationLabel: 'Organization',
          organizationValue: 'Tiruchirappalli City Corporation',
          wingLabel: 'Administering Wing',
          wingValue: 'IT & Engineering Wing (Administration Cell)',
          addressLabel: 'Official Address',
          addressValue: 'Bharathidasan Salai, Cantonment, Tiruchirappalli – 620001, Tamil Nadu, India',
          emailLabel: 'Official Support Email',
          emailValue: 'itcell-support@trichycorporation.gov.in',
          emailPlaceholderNote: 'Placeholder — replace with final verified TCC IT Cell email before Play Store publishing',
          helplineLabel: 'Official IT Helpline',
          helplineValue: '+91-431-241XXXX (Ext. IT Cell)',
          helplinePlaceholderNote: 'Placeholder — insert final official extension/desk number before publishing',
          packageLabel: 'Application Package ID',
          packageValue: 'gov.tn.trichycorp',
        },
      },
    },
    footer: {
      copyright: '© 2026 Tiruchirappalli City Corporation, Government of Tamil Nadu. All rights reserved.',
      motto: 'எங்கள் பணி தங்களுக்கே · Service to Citizens',
      complianceNote: 'Official Privacy Policy for TCC Inspection (gov.tn.trichycorp)',
    },
  },
  ta: {
    meta: {
      pageTitle: 'TCC Inspection — தனியுரிமைக் கொள்கை | திருச்சிராப்பள்ளி மாநகராட்சி',
      appTitle: 'TCC Inspection',
      headerBrand: 'திருச்சி மாநகராட்சி ஆய்வு — தனியுரிமைக் கொள்கை',
      packageId: 'gov.tn.trichycorp',
      effectiveDateLabel: 'நடைமுறைத் தேதி',
      effectiveDateValue: 'நவம்பர் 2026',
      jurisdiction: 'திருச்சிராப்பள்ளி, தமிழ்நாடு, இந்தியா',
      printButton: 'அச்சிடு / PDF சேமி',
      backToTop: 'மேலே செல்ல',
      readingNotice: 'அதிகாரப்பூர்வ தரவுப் பாதுகாப்பு மற்றும் Google Play இணக்க அறிவிப்பு',
    },
    navLinks: [
      { id: 'overview', label: 'அறிமுகம்' },
      { id: 'permissions', label: 'அனுமதிகள்' },
      { id: 'data-collected', label: 'சேகரிக்கும் தரவு' },
      { id: 'on-device-ai', label: 'சாதன AI' },
      { id: 'contact', label: 'தொடர்பு' },
    ],
    hero: {
      governmentLabel: 'தமிழ்நாடு அரசு',
      corporationLabel: 'திருச்சிராப்பள்ளி மாநகராட்சி',
      title: 'TCC Inspection செயலிக்கான தனியுரிமைக் கொள்கை',
      subtitle:
        'திருச்சிராப்பள்ளி மாநகராட்சி (TCC) அலுவலர்களுக்கான நகர்ப்புற உள்கட்டமைப்பு கள ஆய்வு மொபைல் செயலியின் (gov.tn.trichycorp) அதிகாரப்பூர்வ தனியுரிமை மற்றும் தரவுப் பாதுகாப்புக் கொள்கை.',
      metadataItems: [
        'நடைமுறைத் தேதி: நவம்பர் 2026',
        'தொகுப்பு: gov.tn.trichycorp',
        'மண்டலம் 1–5 அலுவல் தளம்',
        'விளம்பரமற்றது · பொதுப் பதிவு இல்லை',
      ],
      primaryAction: 'அச்சிடு / PDF சேமி',
      secondaryAction: 'அனுமதி அட்டவணை காண்க',
    },
    tocTitle: 'கொள்கைப் பிரிவுகள்',
    toc: [
      { id: 'overview', number: '01', label: 'அறிமுகம் & வரம்பு' },
      { id: 'permissions', number: '02', label: 'சாதன அனுமதிகள்' },
      { id: 'data-collected', number: '03', label: 'சேகரிக்கும் தரவுகள்' },
      { id: 'on-device-ai', number: '04', label: 'சாதன வழி AI' },
      { id: 'infrastructure', number: '05', label: 'சேமிப்பு & கட்டமைப்பு' },
      { id: 'security', number: '06', label: 'பாதுகாப்பு & தக்கவைப்பு' },
      { id: 'contact', number: '07', label: 'அணுகல் & தொடர்பு' },
    ],
    sections: {
      overview: {
        number: '01',
        title: 'செயலி அறிமுகம் மற்றும் பயன்பாட்டு வரம்பு',
        lead: 'TCC Inspection என்பது தமிழ்நாட்டின் திருச்சிராப்பள்ளி மாநகராட்சி (TCC) அங்கீகரிக்கப்பட்ட அலுவலர்களின் உள் பயன்பாட்டிற்காக மட்டுமே உருவாக்கப்பட்ட நகர்ப்புற உள்கட்டமைப்பு கள ஆய்வுத் தளமாகும்.',
        authorizedRolesTitle: 'அங்கீகரிக்கப்பட்ட மாநகராட்சி அலுவலர்கள்',
        authorizedRoles: [
          'ஆணையர் (Commissioner)',
          'நகரப் பொறியாளர் (City Engineer)',
          'செயற்பொறியாளர்கள் (Executive Engineers)',
          'உதவி செயற்பொறியாளர்கள் (Assistant Executive Engineers)',
          'உதவிப் பொறியாளர்கள் (Assistant Engineers)',
          'இளநிலைப் பொறியாளர்கள் (Junior Engineers)',
          'தொழில்நுட்ப உதவியாளர்கள் (Technical Assistants)',
        ],
        zonesTitle: 'மண்டலம் 1 முதல் 5 வரையிலான மாநகராட்சி எல்லை',
        zonesDescription:
          'திருச்சிராப்பள்ளி மாநகராட்சியின் மண்டலம் 1 முதல் 5 வரை உள்ள அனைத்து வார்டுகளிலும் கீழ்க்காணும் பதினாறு வகையான மாநகராட்சி சொத்துக்கள் மற்றும் பொது வசதிகளை ஆய்வு செய்ய அலுவலர்கள் இச்செயலியைப் பயன்படுத்துகின்றனர்:',
        assetCategoriesTitle: 'ஆய்வு செய்யப்படும் மாநகராட்சி சொத்து வகைகள்',
        assetCategories: [
          'காலை உணவுத் திட்டப் பள்ளிகள் (PKBS)',
          'பொது மற்றும் சமுதாயக் கழிப்பறைகள்',
          'பூங்காக்கள் மற்றும் திறந்தவெளிப் பகுதிகள்',
          'மேல்நிலை நீர்த்தேக்கத் தொட்டிகள் (OHT)',
          'பாதாள சாக்கடை நீரேற்று நிலையங்கள் (UGD)',
          'மாநகராட்சி சந்தைகள்',
          'பேருந்து நிழற்குடைகள்',
          'மயான பூமிகள்',
          'நகர்ப்புற நலவாழ்வு மையங்கள்',
          'குழந்தைகள் வளர்ச்சி மையங்கள் (ICDS)',
          'பொது விநியோக / நியாய விலைக் கடைகள்',
          'பொது நூலகங்கள்',
          'உடற்பயிற்சிக் கூடங்கள்',
          'அம்மா உணவகங்கள்',
          'மாநகராட்சி கட்டடங்கள்',
          'நடைபெற்று வரும் வளர்ச்சிப் பணிகள்',
        ],
        restrictionNoticeTitle: 'அலுவல் பயன்பாட்டிற்கு மட்டுமே (வணிக நோக்கமற்றது)',
        restrictionNoticeBody:
          'இச்செயலி மாநகராட்சி நிர்வாகப் பணிகளுக்கு மட்டுமே உரியது. பொதுமக்கள் சுயமாகப் பதிவு செய்யும் வசதியோ, விளம்பரங்களோ, அல்லது செயலிக்குள் கட்டண கொள்முதலோ (In-App Purchases) கிடையாது.',
      },
      permissions: {
        number: '02',
        title: 'Android சாதன அனுமதிகள் வெளிப்படைத்தன்மை',
        lead: 'கள ஆய்வின்போது அலுவலரின் நேரடி வருகையை உறுதிப்படுத்தவும், புகைப்பட ஆதாரங்களைப் பதிவு செய்யவும் மிக அவசியமான Android அனுமதிகள் மட்டுமே கோரப்படுகின்றன.',
        headers: {
          permission: 'Android அனுமதி',
          whyNeeded: 'ஏன் தேவைப்படுகிறது',
          whenAccessed: 'எப்போது பயன்படுத்தப்படுகிறது',
        },
        rows: [
          {
            permission: 'கேமரா (Camera)',
            manifestKey: 'android.permission.CAMERA',
            whyNeeded:
              'கள ஆய்வின்போது மாநகராட்சி சொத்தின் தற்போதைய நிலையை புகைப்பட ஆதாரமாகப் பதிவு செய்யவும், சாதனத்திற்குள்ளேயே உள்ள AI பகுப்பாய்வுக்குப் படத்தை வழங்கவும் பயன்படுகிறது.',
            whenAccessed:
              'செயலில் உள்ள ஆய்வின்போது அலுவலர் ஆய்வு கேமராவைத் திறக்கும் தருணத்தில் மட்டுமே அணுகப்படும்.',
            scopeLabel: 'ஆய்வின்போது மட்டும்',
          },
          {
            permission: 'துல்லிய & தோராய இருப்பிடம்',
            manifestKey: 'ACCESS_FINE_LOCATION · ACCESS_COARSE_LOCATION',
            whyNeeded:
              'ஆய்வு செய்யும் அலுவலர் ஒதுக்கப்பட்ட சொத்து அல்லது வார்டின் புவி-எல்லைக்குள் (Geofence) நேரில் இருப்பதை உறுதிப்படுத்தி, சரிபார்க்கப்பட்ட ஆயத்தொலைவுகளைப் பதிவு செய்ய உதவுகிறது.',
            whenAccessed:
              'ஆய்வுப் பக்கம் திறந்திருக்கும்போது முன்புறத்தில் (Foreground) மட்டுமே பெறப்படும். செயலி மூடப்பட்டிருக்கும்போது ஒருபோதும் கண்காணிக்கப்படாது.',
            scopeLabel: 'முன்புறத்தில் மட்டும்',
          },
          {
            permission: 'இணையம் & பிணைய நிலை',
            manifestKey: 'INTERNET · ACCESS_NETWORK_STATE',
            whyNeeded:
              'அலுவலர் உள்நுழைவு சரிபார்ப்பு, ஒற்றைச் சாதன அமர்வு உறுதிப்படுத்தல், ஆய்வு அறிக்கைகள் ஒத்திசைவு மற்றும் பாதுகாப்பான OTA செயலி புதுப்பிப்புகளுக்குப் பயன்படுகிறது.',
            whenAccessed:
              'உள்நுழையும்போதும், வார்டு சொத்து விவரங்களைப் பெறும்போதும், ஆய்வு அறிக்கையைச் சமர்ப்பிக்கும்போதும் மட்டுமே பயன்படும்.',
            scopeLabel: 'மறைகுறியாக்கப்பட்ட ஒத்திசைவு',
          },
        ],
        backgroundLocationCalloutTitle: 'பின்னணி இருப்பிடக் கண்காணிப்பு இல்லை',
        backgroundLocationCalloutBody:
          'TCC Inspection செயலி ACCESS_BACKGROUND_LOCATION அனுமதியைக் கோருவதில்லை. செயலி மூடப்பட்டாலோ அல்லது செயலற்ற நிலையில் இருந்தாலோ அலுவலரின் இருப்பிடம் ஒருபோதும் கண்காணிக்கப்படாது.',
      },
      dataCollected: {
        number: '03',
        title: 'நாம் சேகரிக்கும் தகவல்கள்',
        lead: 'சேகரிக்கப்படும் அனைத்துத் தரவுகளும் மாநகராட்சி சொத்துத் தணிக்கை, அலுவல் பொறுப்புடைமை மற்றும் ஒற்றைச் சாதனப் பாதுகாப்பு ஆகியவற்றுக்கு மட்டுமே உட்பட்டவை.',
        categories: [
          {
            title: 'அலுவல் கணக்கு மற்றும் சுயவிவரத் தகவல்கள்',
            technicalTags: ['Cloud Firestore', 'Supabase PostgreSQL'],
            description:
              'திருச்சிராப்பள்ளி மாநகராட்சி நிர்வாகத்தால் ஒதுக்கீடு செய்யப்படும் அலுவலரின் பெயர், பயனர்பெயர், பதவி, அலுவல் கைபேசி எண், ஒதுக்கப்பட்ட மண்டலம் மற்றும் வார்டு எண்கள்.',
            retentionOrNote: 'மாநகராட்சி நிர்வாகத்தால் மட்டுமே உருவாக்கப்பட்டு நிர்வகிக்கப்படுகிறது.',
          },
          {
            title: 'சாதன அடையாளம் & ஒற்றைச் சாதன அமர்வுத் தரவு',
            technicalTags: ['device_id', 'device_label', 'session_token'],
            description:
              'மண்டலம் 1–5 கள அலுவலர்களுக்கான ஒற்றைச் சாதனக் கொள்கையை (Single-Device Policy) நடைமுறைப்படுத்தவும், ஒரே நேரத்தில் பல சாதனங்களில் உள்நுழைவதையோ போலி ஆய்வுகளையோ தடுக்கவும் சாதன அடையாள எண் (device_id), சாதனப் பெயர் மற்றும் அமர்வு டோக்கன் சேகரிக்கப்படுகிறது.',
            retentionOrNote: 'அலுவல் பணி நிலைக்கு ஏற்ப TCC IT பிரிவால் மீட்டமைக்க இயலும்.',
          },
          {
            title: 'முன்புற GPS இருப்பிடத் தரவு',
            technicalTags: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            description:
              'அலுவலர் நேரடிக் கள ஆய்வைத் தொடங்கிச் சமர்ப்பிக்கும்போது மட்டும் சொத்து/வார்டு புவி-எல்லையை உறுதிப்படுத்த துல்லியமான GPS ஆயத்தொலைவுகள் பதிவு செய்யப்படுகின்றன.',
            retentionOrNote: 'செயலி மூடிய நிலையில் பின்னணி இருப்பிடம் சேகரிக்கப்படாது.',
          },
          {
            title: 'கேமரா மற்றும் கள ஆய்வுப் புகைப்பட ஆதாரங்கள்',
            technicalTags: ['CAMERA'],
            description:
              'வசதியின் தூய்மை, கட்டமைப்பு நிலை அல்லது வளர்ச்சிப் பணிகளின் முன்னேற்றத்தை உறுதிப்படுத்த அலுவலரால் எடுக்கப்படும் களப் புகைப்படங்கள்.',
            retentionOrNote: 'சம்பந்தப்பட்ட சொத்து ஆய்வுப் பதிவோடு இணைக்கப்பட்டு பாதுகாப்பாகச் சேமிக்கப்படும்.',
          },
          {
            title: 'ஆய்வு அறிக்கைகள் & சரிபார்ப்புப் பட்டியல் தரவு',
            technicalTags: ['மதிப்பீடுகள்', 'சரிபார்ப்புப் பட்டியல்', 'நேர முத்திரை'],
            description:
              'அலுவலர் சமர்ப்பிக்கும் வசதி மதிப்பீடுகள், சரிபார்ப்புப் பட்டியல் பதில்கள், களக் குறிப்புகள், இருமொழி AI சுருக்கங்கள் மற்றும் சமர்ப்பிப்பு நேர முத்திரைகள்.',
            retentionOrNote: 'மாநகராட்சி நிர்வாகத் தணிக்கை ஆவணங்களாகப் பராமரிக்கப்படும்.',
          },
        ],
      },
      onDeviceAi: {
        number: '04',
        title: 'சாதனத்திற்குள்ளேயே (On-Device AI) தரவுச் செயலாக்கம்',
        lead: 'தனியுரிமையைப் பாதுகாக்கவும், இணைய வேகம் குறைந்த களப் பகுதிகளிலும் விரைவாகச் செயல்படவும் படப் பகுப்பாய்வு அலுவலரின் கைபேசிக்குள்ளேயே நடைபெறுகிறது.',
        points: [
          {
            title: 'உள்ளமைக்கப்பட்ட LiteRT (TensorFlow Lite) செயலாக்கம்',
            detail:
              'ஆய்வுப் புகைப்படங்கள் வெளிப்புற AI சர்வர்களுக்கு நேரடியாக அனுப்பப்படாமல், கைபேசியில் உள்ள LiteRT மாதிரிகள் மூலம் உள்ளூரிலேயே பகுப்பாய்வு செய்யப்படுகின்றன.',
          },
          {
            title: 'ஆங்கிலம் மற்றும் தமிழ் இருமொழி சுருக்க உருவாக்கம்',
            detail:
              'சாதன வழி AI பகுப்பாய்வு தமிழ் மற்றும் ஆங்கிலத்தில் கட்டமைக்கப்பட்ட ஆய்வுச் சுருக்கங்களை உருவாக்க உதவுகிறது.',
          },
          {
            title: 'தொடர்ச்சியான கேமரா ஒளிபரப்பு இல்லை',
            detail:
              'நேரடி கேமரா வீடியோவோ அல்லது தொடர்ச்சியான பட ஓடையோ ஒருபோதும் சர்வர்களுக்கு அனுப்பப்படுவதில்லை. அலுவலர் இறுதியாக உறுதிப்படுத்திய புகைப்படம், கட்டமைக்கப்பட்ட சுருக்கம் மற்றும் நம்பகத்தன்மை அளவீடுகள் மட்டுமே அனுப்பப்படும்.',
          },
        ],
        transmissionSummary:
          'அனுப்பப்படும் தரவு: இறுதி ஆய்வுப் புகைப்படம் + இருமொழிச் சுருக்கம் + நம்பகத்தன்மை அளவீடு. நேரடி வீடியோ ஓடை அனுப்பப்படுவதில்லை.',
      },
      infrastructure: {
        number: '05',
        title: 'தரவுப் பயன்பாடு மற்றும் சேமிப்புக் கட்டமைப்பு',
        lead: 'மாநகராட்சி கள ஆய்வுப் பணிகளைத் தடையின்றி இயக்க நம்பகமான கிளவுட் சேவைகள் மட்டுமே பயன்படுத்தப்படுகின்றன.',
        partners: [
          {
            provider: 'Google Firebase',
            service: 'Firebase Authentication & Cloud Firestore',
            purpose:
              'அலுவலர்களின் உள்நுழைவு அடையாளத்தைச் சரிபார்க்கவும், அதிகாரப்பூர்வ பதவி, மண்டலம் மற்றும் வார்டு விவரங்களைப் பெறவும் பயன்படுகிறது.',
          },
          {
            provider: 'Supabase',
            service: 'PostgreSQL தரவுத்தளம் & Storage',
            purpose:
              'மாநகராட்சி சொத்துப் பதிவேடு, தினசரி ஆய்வுப் பணிகள், ஒற்றைச் சாதன அமர்வு சரிபார்ப்பு, ஆய்வு அறிக்கைகள் மற்றும் அமைதியான OTA செயலி புதுப்பிப்புகளை நிர்வகிக்கிறது.',
          },
          {
            provider: 'Google Apps Script & Google Drive',
            service: 'TCC நிர்வாக ஆவணக் காப்பகம்',
            purpose:
              'சொத்து ஆய்வுப் பதிவுகளுடன் இணைக்கப்பட்ட கள ஆய்வுப் புகைப்பட ஆதாரங்களைப் பாதுகாப்பாக ஆவணப்படுத்தப் பயன்படுகிறது.',
          },
        ],
        zeroSellingTitle: 'தரவு விற்பனை இல்லை · விளம்பரங்கள் இல்லை',
        zeroSellingBody:
          'திருச்சிராப்பள்ளி மாநகராட்சி அலுவலர்களின் சுயவிவரங்கள், இருப்பிடத் தரவுகள் அல்லது ஆய்வுப் புகைப்படங்களை விளம்பரதாரர்கள், சந்தைப்படுத்தல் நிறுவனங்கள் அல்லது மூன்றாம் தரப்பு தரவுத் தரகர்களுக்கு ஒருபோதும் விற்கவோ, வாடகைக்கு விடவோ அல்லது பகிரவோ மாட்டாது.',
      },
      security: {
        number: '06',
        title: 'தரவுப் பாதுகாப்பு மற்றும் தக்கவைப்புக் கொள்கை',
        lead: 'பரிமாற்றத்தின்போதும் சேமிப்பின்போதும் அனைத்து அரசுத் தரவுகளும் தொழில்நுட்ப மற்றும் நிர்வாகப் பாதுகாப்புகளால் காக்கப்படுகின்றன.',
        controls: [
          {
            title: 'மறைகுறியாக்கப்பட்ட பரிமாற்றம் (HTTPS / TLS)',
            detail:
              'செயலிக்கும் Firebase, Supabase மற்றும் காப்பக சேவையகங்களுக்கும் இடையிலான அனைத்துத் தரவுப் பரிமாற்றங்களும் HTTPS/TLS மூலம் முழுமையாக மறைகுறியாக்கப்படுகின்றன.',
          },
          {
            title: 'டோக்கன் அங்கீகாரம் & எல்லை கட்டுப்பாடு',
            detail:
              'அனைத்து API கோரிக்கைகளும் சரிபார்க்கப்பட்ட டோக்கன்கள் மூலம் மட்டுமே அனுமதிக்கப்பட்டு, அலுவலர்களுக்கு ஒதுக்கப்பட்ட மண்டலம்/வார்டு எல்லைகளுக்குள் கட்டுப்படுத்தப்படுகின்றன.',
          },
          {
            title: 'ஒற்றைச் சாதனப் பாதுகாப்பு',
            detail:
              'மண்டலம் 1–5 கள அமர்வுகள் பதிவு செய்யப்பட்ட சாதன அடையாளத்துடன் இணைக்கப்பட்டு அங்கீகாரமற்ற பகிர்வு தடுக்கப்படுகிறது.',
          },
        ],
        retentionTitle: 'தரவுத் தக்கவைப்பு கால அளவு',
        retentionBody:
          'தற்காலிக தினசரி ஆய்வு ஒதுக்கீட்டுப் பதிவுகள் அவற்றின் செயல்பாட்டுக் காலம் முடிந்தபின் குறிப்பிட்ட இடைவெளியில் நீக்கப்படும். அதே சமயம், அதிகாரப்பூர்வ மாநகராட்சி சொத்துத் தணிக்கை வரலாறு மற்றும் ஆய்வு சுழற்சிப் பதிவுகள் பொது நிர்வாகப் பொறுப்புடைமைக்காகப் பாதுகாக்கப்படும்.',
      },
      faq: {
        title: 'செயல்பாட்டு மற்றும் இணக்க விளக்கங்கள்',
        items: [
          {
            question: 'பணி நேரத்திற்குப் பிறகோ அல்லது செயலி மூடியிருக்கும்போதோ என் இருப்பிடம் கண்காணிக்கப்படுமா?',
            answer:
              'இல்லை. கள ஆய்வுப் பக்கம் திறந்திருக்கும்போது சொத்து புவி-எல்லையைச் சரிபார்க்க மட்டுமே முன்புறத்தில் இருப்பிடம் பெறப்படும். செயலி மூடப்பட்டாலோ செயலற்ற நிலையில் இருந்தாலோ இருப்பிடம் கண்காணிக்கப்படாது.',
          },
          {
            question: 'பொதுமக்கள் இச்செயலியில் புதிய கணக்கு தொடங்க முடியுமா?',
            answer:
              'முடியாது. இச்செயலியில் பொதுப் பதிவு வசதி இல்லை. திருச்சிராப்பள்ளி மாநகராட்சி நிர்வாகத்தால் அங்கீகரிக்கப்பட்ட அலுவலர்களுக்கு மட்டுமே கணக்குகள் வழங்கப்படுகின்றன.',
          },
          {
            question: 'சாதன வழி AI என் ஆய்வுப் புகைப்படங்களை எவ்வாறு கையாளுகிறது?',
            answer:
              'புகைப்படங்கள் உங்கள் கைபேசியில் உள்ள LiteRT மாதிரிகள் மூலம் உள்ளூரிலேயே பகுப்பாய்வு செய்யப்படுகின்றன. நீங்கள் சமர்ப்பிக்கும் இறுதிப் புகைப்படமும் சுருக்க உரையும் மட்டுமே TCC சர்வர்களுக்கு அனுப்பப்படும்.',
          },
        ],
      },
      contact: {
        number: '07',
        title: 'கணக்கு அணுகல், திருத்தங்கள் மற்றும் தொடர்பு',
        lead: 'அனைத்துக் கணக்குகளும் திருச்சிராப்பள்ளி மாநகராட்சியால் நிர்வகிக்கப்படும் அரசுப் பணி கணக்குகள் என்பதால், தணிக்கைப் பதிவுகளைச் செயலியிலிருந்து சுயமாக நீக்க இயலாது.',
        accountManagementNote:
          'சுயவிவரத் திருத்தம், மண்டலம்/வார்டு மாற்றம், ஒற்றைச் சாதன அமர்வு மீட்டமைப்பு அல்லது பணி மாறுதல்/ஓய்வு காரணமாகக் கணக்கு நீக்கம் தேவைப்படும் அலுவலர்கள் TCC தகவல் தொழில்நுட்பப் பிரிவைத் (IT Cell) தொடர்பு கொள்ளலாம்.',
        card: {
          organizationLabel: 'நிறுவனம்',
          organizationValue: 'திருச்சிராப்பள்ளி மாநகராட்சி',
          wingLabel: 'நிர்வாகப் பிரிவு',
          wingValue: 'தகவல் தொழில்நுட்பம் மற்றும் பொறியியல் பிரிவு (IT & Engineering Wing)',
          addressLabel: 'அலுவலக முகவரி',
          addressValue: 'பாரதிதாசன் சாலை, கன்டோன்மென்ட், திருச்சிராப்பள்ளி – 620001, தமிழ்நாடு, இந்தியா',
          emailLabel: 'அதிகாரப்பூர்வ மின்னஞ்சல்',
          emailValue: 'itcell-support@trichycorporation.gov.in',
          emailPlaceholderNote: 'மாதிரி முகவரி — Play Store வெளியீட்டிற்கு முன் சரிபார்க்கப்பட்ட TCC IT Cell மின்னஞ்சலை இடவும்',
          helplineLabel: 'அதிகாரப்பூர்வ IT உதவி எண்',
          helplineValue: '+91-431-241XXXX (IT பிரிவு)',
          helplinePlaceholderNote: 'மாதிரி எண் — வெளியீட்டிற்கு முன் அதிகாரப்பூர்வ தொலைபேசி எண்ணை இடவும்',
          packageLabel: 'செயலித் தொகுப்பு எண்',
          packageValue: 'gov.tn.trichycorp',
        },
      },
    },
    footer: {
      copyright: '© 2026 திருச்சிராப்பள்ளி மாநகராட்சி, தமிழ்நாடு அரசு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      motto: 'எங்கள் பணி தங்களுக்கே · மக்களுக்கான சேவை',
      complianceNote: 'TCC Inspection (gov.tn.trichycorp) செயலியின் அதிகாரப்பூர்வ தனியுரிமைக் கொள்கை',
    },
  },
};
