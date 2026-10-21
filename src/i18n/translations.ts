import type { Locale } from './languages';

export interface FeatureItem {
  title: string;
  description: string;
}

export interface UseCaseItem {
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    features: string;
    howItWorks: string;
    faq: string;
    blog: string;
    about: string;
    contact: string;
    history: string;
    selectLanguage: string;
  };
  hero: {
    chips: string[];
    worksWith: string;
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
  };
  addressBar: {
    tempEmailLabel: string;
    liveBadge: string;
    copyAddress: string;
    copiedAddress: string;
    refreshTooltip: string;
    customTooltip: string;
    qrTooltip: string;
    changeTooltip: string;
    deleteTooltip: string;
    accessTooltip: string;
    refreshLabel: string;
    customLabel: string;
    qrLabel: string;
    accessLabel: string;
    changeLabel: string;
    deleteLabel: string;
    switchProviderTooltip: string;
  };
  inboxList: {
    title: string;
    emptyTitle: string;
    emptyDesc: string;
    autoChecking: string;
    clickToView: string;
    unreadBadge: string;
    unreadEmail: string;
    unreadEmails: string;
    totalEmail: string;
    totalEmails: string;
  };
  emailDetail: {
    noMessageTitle: string;
    noMessageDesc: string;
    loading: string;
    backToInbox: string;
    htmlTab: string;
    textTab: string;
    downloadTooltip: string;
    deleteTooltip: string;
    otpDetected: string;
    copyOtp: string;
    copiedOtp: string;
    verifyLink: string;
    openLink: string;
    toLabel: string;
    noSubject: string;
    defaultSender: string;
    defaultDate: string;
  };
  customModal: {
    domainsFailed: string;
    title: string;
    desc: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    domainLabel: string;
    loadingDomains: string;
    preview: string;
    cancel: string;
    create: string;
  };
  accessModal: {
    title: string;
    credentialsDesc: string;
    addressLabel: string;
    passwordLabel: string;
    showPassword: string;
    hidePassword: string;
    copyPassword: string;
    copyLogin: string;
    noPasswordPublic: string;
    noPasswordExpiring: string;
    noPasswordMock: string;
    loginTitle: string;
    loginDesc: string;
    loginButton: string;
  };
  qrModal: {
    unavailable: string;
    title: string;
    desc: string;
    copyLink: string;
    copiedLink: string;
    close: string;
  };
  historyDrawer: {
    title: string;
    desc: string;
    activeInbox: string;
    savedStorage: string;
    emptyTitle: string;
    emptyDesc: string;
    clearAll: string;
    removeInbox: string;
    confirmClearTitle: string;
    confirmClearDesc: string;
  };
  confirmModal: {
    cancel: string;
    confirm: string;
    deleteInboxTitle: string;
    deleteInboxDesc: string;
    changeAddressTitle: string;
    changeAddressDesc: string;
    deleteMessageTitle: string;
    deleteMessageDesc: string;
  };
  cookieConsent: {
    title: string;
    desc: string;
    privacyPolicy: string;
    essentialOnly: string;
    acceptAll: string;
  };
  toasts: {
    soundEnabled: string;
    soundMuted: string;
    initFailed: string;
    messageDeleted: string;
    switchedTo: string;
    generatedNew: string;
    mailboxDeleted: string;
    customCreated: string;
    customFailed: string;
    providerSwitched: string;
    historyCleared: string;
    copiedToClipboard: string;
    copyFailed: string;
    otpCopied: string;
    loadMessageFailed: string;
    mockFallback: string;
    legacyInboxGone: string;
    passwordCopied: string;
    loginCopied: string;
    loginFailed: string;
    loginUnavailable: string;
    inboxAuthLost: string;
    inboxExpired: string;
  };
  relativeTime: {
    justNow: string;
    yesterday: string;
    secondsAgo: string;
    minutesAgo: string;
    hoursAgo: string;
    daysAgo: string;
  };
  useCases: {
    badge: string;
    title: string;
    subtitle: string;
    items: UseCaseItem[];
  };
  otpShowcase: {
    badge: string;
    title: string;
    subtitle: string;
    tag1: string;
    tag2: string;
    tag3: string;
    previewBadge: string;
    previewDetected: string;
    previewCode: string;
    previewCopy: string;
    previewFrom: string;
    previewSubj: string;
    previewTime: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    brandDesc: string;
    quickLinks: string;
    instantInbox: string;
    company: string;
    legal: string;
    privacyPolicy: string;
    termsOfService: string;
    disclaimer: string;
    allRightsReserved: string;
  };
  a11y: {
    skipToContent: string;
    toggleTheme: string;
    toggleSound: string;
    toggleMenu: string;
    dismissToast: string;
    changeLanguage: string;
  };
  common: {
    onThisPage: string;
    close: string;
    home: string;
    blog: string;
    backToHome: string;
    allArticles: string;
    readArticle: string;
    all: string;
    guide: string;
    architecture: string;
    privacy: string;
    security: string;
    copy: string;
    copied: string;
    copyEmailToast: string;
    copyFailedToast: string;
    pageNotFoundBadge: string;
    pageNotFoundTitle: string;
    pageExpired: string;
    pageNotFoundDesc: string;
    goToHomepage: string;
    readOurBlog: string;
    translationNotice: string;
  };
  pages: {
    about: {
      title: string;
      description: string;
      heading: string;
      subheading: string;
    };
    contact: {
      title: string;
      description: string;
      heading: string;
      subheading: string;
    };
    blog: {
      title: string;
      description: string;
      heading: string;
      subheading: string;
      faqHeading: string;
      relatedHeading: string;
    };
    privacy: {
      title: string;
      description: string;
      heading: string;
    };
    terms: {
      title: string;
      description: string;
      heading: string;
    };
    disclaimer: {
      title: string;
      description: string;
      heading: string;
    };
  };
}

export const TRANSLATIONS: Record<Locale, TranslationSchema> = {
  "en": {
    "meta": {
      "title": "Temp Mail — Free Disposable Temporary Email & Fake Email Generator",
      "description": "Instant free temp mail and disposable temporary email address. Receive OTP verification codes, activation links, and burner email messages with zero spam and zero logs.",
      "keywords": "temp mail, tempmail, temporary email, disposable email, fake email, fake email generator, 10 minute mail, 10minutemail, burner email, throwaway email, trash mail, dropmail, receive otp online email, temp mail otp, temporary email for verification"
    },
    "nav": {
      "features": "Features",
      "howItWorks": "How It Works",
      "faq": "FAQ",
      "blog": "Blog",
      "about": "About",
      "contact": "Contact",
      "history": "History",
      "selectLanguage": "Language"
    },
    "hero": {
      "chips": ["No sign-up","Auto OTP detection","Zero logs"],
      "worksWith": "Works with",
      "badge": "Instant Temp Mail & 10 Minute Burner Inbox",
      "titleLine1": "Free Temp Mail.",
      "titleLine2": "Disposable Email in Seconds.",
      "subtitle": "Generate an instant disposable temporary email address. Receive signup verification codes, OTPs, and activation links."
    },
    "addressBar": {
      "tempEmailLabel": "Temporary Email",
      "liveBadge": "Live",
      "copyAddress": "Copy Address",
      "copiedAddress": "Copied!",
      "refreshTooltip": "Refresh messages (Auto-refreshes every 10s)",
      "customTooltip": "Create custom username",
      "qrTooltip": "Show QR Code for mobile",
      "changeTooltip": "Generate a new random email",
      "deleteTooltip": "Delete this mailbox",
      "accessTooltip": "Inbox login & password",
      "refreshLabel": "Refresh",
      "customLabel": "Custom",
      "qrLabel": "QR Code",
      "accessLabel": "Access",
      "changeLabel": "New Email",
      "deleteLabel": "Delete",
      "switchProviderTooltip": "Click to switch provider"
    },
    "inboxList": {
      "title": "Inbox",
      "emptyTitle": "Waiting for incoming emails...",
      "emptyDesc": "Copy your temporary address above and paste it into any signup form. New messages will appear here automatically.",
      "autoChecking": "Auto-checking active",
      "clickToView": "Click to view email details...",
      "unreadBadge": "Unread",
      "unreadEmail": "unread email",
      "unreadEmails": "unread emails",
      "totalEmail": "email",
      "totalEmails": "emails"
    },
    "emailDetail": {
      "noMessageTitle": "No message selected",
      "noMessageDesc": "Select an email from your inbox to read it and copy verification codes.",
      "loading": "Loading email...",
      "backToInbox": "Back to Inbox",
      "htmlTab": "HTML",
      "textTab": "Text",
      "downloadTooltip": "Download email",
      "deleteTooltip": "Delete this message",
      "otpDetected": "Verification Code Detected",
      "copyOtp": "Copy Code",
      "copiedOtp": "Copied!",
      "verifyLink": "Link:",
      "openLink": "Open Link",
      "toLabel": "To:",
      "noSubject": "(No Subject)",
      "defaultSender": "Sender",
      "defaultDate": "Date"
    },
    "customModal": {
      "title": "Custom Email Address",
      "desc": "Choose your preferred username and domain to create a personalized temporary inbox.",
      "usernameLabel": "Username",
      "usernamePlaceholder": "e.g. alex.signup",
      "domainLabel": "Domain",
      "loadingDomains": "Loading domains...",
      "preview": "Preview:",
      "cancel": "Cancel",
      "create": "Create Inbox",
      "domainsFailed": "Could not load domains — please try again"
    },
    "accessModal": {
      "title": "Inbox login",
      "credentialsDesc": "Save this password. With it you can open this inbox again later, in any browser or device.",
      "addressLabel": "Email address",
      "passwordLabel": "Password",
      "showPassword": "Show password",
      "hidePassword": "Hide password",
      "copyPassword": "Copy password",
      "copyLogin": "Copy address & password",
      "noPasswordPublic": "{provider} inboxes have no password: anyone who knows the address can open them.",
      "noPasswordExpiring": "TempMail.lol inboxes have no password and expire after about an hour.",
      "noPasswordMock": "This simulated inbox has no password.",
      "loginTitle": "Open an existing inbox",
      "loginDesc": "Works for Mail.tm and Mail.gw addresses.",
      "loginButton": "Open inbox"
    },
    "qrModal": {
      "title": "Mobile QR Code",
      "desc": "Scan this code with your smartphone camera to access this disposable email instantly on mobile.",
      "copyLink": "Copy Link",
      "copiedLink": "Link Copied!",
      "close": "Close",
      "unavailable": "QR code unavailable — check your connection and try again."
    },
    "historyDrawer": {
      "title": "Recent Inboxes",
      "desc": "Switch between previously active inboxes stored securely in your browser.",
      "activeInbox": "Active",
      "savedStorage": "Saved in Local Storage",
      "emptyTitle": "No saved inboxes",
      "emptyDesc": "When you create or switch temporary inboxes, your recent addresses will appear here.",
      "clearAll": "Clear All History",
      "removeInbox": "Remove from history",
      "confirmClearTitle": "Clear All History",
      "confirmClearDesc": "Are you sure you want to erase all saved inbox addresses from browser storage?"
    },
    "confirmModal": {
      "cancel": "Cancel",
      "confirm": "Confirm",
      "deleteInboxTitle": "Delete Mailbox",
      "deleteInboxDesc": "Are you sure you want to permanently delete this temporary email and all stored messages?",
      "changeAddressTitle": "Change Address",
      "changeAddressDesc": "Generate a new random temporary email address? Current messages will remain in your history.",
      "deleteMessageTitle": "Delete Message",
      "deleteMessageDesc": "Are you sure you want to permanently delete this message?"
    },
    "cookieConsent": {
      "title": "Cookie preferences",
      "desc": "We use cookies to save your settings (such as dark mode and recent inboxes) and measure site traffic. Read our",
      "privacyPolicy": "Privacy Policy",
      "essentialOnly": "Essential Only",
      "acceptAll": "Accept All"
    },
    "toasts": {
      "soundEnabled": "Sound notifications enabled",
      "soundMuted": "Sound notifications muted",
      "initFailed": "Failed to initialize mailbox. Please try refreshing.",
      "messageDeleted": "Message deleted",
      "switchedTo": "Switched to {address}",
      "generatedNew": "Generated fresh temporary inbox with new domain!",
      "mailboxDeleted": "Mailbox deleted and fresh address generated!",
      "customCreated": "Created custom inbox: {address}",
      "customFailed": "Failed to create inbox. Please try a different username.",
      "providerSwitched": "Switched active provider to {provider}",
      "historyCleared": "All saved inboxes cleared from memory.",
      "copiedToClipboard": "Copied to clipboard!",
      "copyFailed": "Failed to copy to clipboard",
      "otpCopied": "Verification code {code} copied!",
      "loadMessageFailed": "Failed to load message content.",
      "mockFallback": "All mail providers are unreachable right now — this is a simulated inbox and cannot receive real email.",
      "legacyInboxGone": "Your old 1secmail inbox ({address}) is no longer supported — created a fresh inbox instead.",
      "passwordCopied": "Password copied",
      "loginCopied": "Address and password copied",
      "loginFailed": "Wrong address or password.",
      "loginUnavailable": "Couldn't reach the mail provider. Try again in a moment.",
      "inboxAuthLost": "{address} no longer accepts its password — the provider may have deleted it.",
      "inboxExpired": "{address} has expired. Generate a new address to keep receiving mail."
    },
    "relativeTime": {
      "justNow": "Just now",
      "yesterday": "Yesterday",
      "secondsAgo": "{n}s ago",
      "minutesAgo": "{n}m ago",
      "hoursAgo": "{n}h ago",
      "daysAgo": "{n}d ago"
    },
    "useCases": {
      "badge": "Popular Services",
      "title": "Works Seamlessly Everywhere",
      "subtitle": "Use TempoEmails for instant verification on your favorite services without sacrificing privacy.",
      "items": [
        {
          "category": "AI & Software Trials",
          "badge": "ChatGPT & SaaS",
          "title": "Temp Mail for ChatGPT & Free Trials",
          "description": "Sign up for AI tools, developer APIs, and SaaS free trials without putting your primary email on perpetual promotional mailing lists.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "SaaS Free Trials"
          ]
        },
        {
          "category": "Gaming & Communities",
          "badge": "Discord & Steam",
          "title": "Disposable Email for Discord & Gaming",
          "description": "Create secondary gamer profiles, join private Discord servers, verify Steam accounts, and redeem one-time game beta keys effortlessly.",
          "tags": [
            "Discord Verification",
            "Steam Accounts",
            "Twitch Alerts",
            "Epic Games"
          ]
        },
        {
          "category": "Social Media & Messaging",
          "badge": "Telegram & Socials",
          "title": "Burner Email for Social Media & Apps",
          "description": "Keep your real email anonymous when signing up on social networks, forums, Telegram, Reddit, or downloading gated whitepapers and PDFs.",
          "tags": [
            "Telegram Signups",
            "Reddit Profiles",
            "Forum Registrations",
            "Gated Downloads"
          ]
        },
        {
          "category": "Developer & QA Testing",
          "badge": "Email API & QA",
          "title": "Fake Email Generator for Software QA",
          "description": "Test user registration workflows, verify transactional email delivery, check password reset pipelines, and simulate multiple users simultaneously.",
          "tags": [
            "Signup Flow QA",
            "Webhook Testing",
            "Auth Verification",
            "Multi-Inbox Sim"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Auto-Detected Verification Codes",
      "title": "Receive OTP verification codes",
      "subtitle": "TempoEmails automatically scans incoming messages to extract 4-to-8 digit OTP codes and one-time activation links the moment they arrive. Perfect for fast website registrations, app trials, and multi-platform account verification without email clutter.",
      "tag1": "4 to 8-Digit OTPs",
      "tag2": "1-Click Magic Links",
      "tag3": "Instant Clipboard Copy",
      "previewBadge": "Inbox Preview",
      "previewDetected": "Auto-Detected",
      "previewCode": "Verification Code",
      "previewCopy": "Copy",
      "previewFrom": "From: Security Team",
      "previewSubj": "Your one-time verification code is 593821",
      "previewTime": "Just now"
    },
    "features": {
      "badge": "Core Features",
      "title": "Engineered for Maximum Speed & Total Privacy",
      "subtitle": "Everything you need from a modern disposable email service, built with zero tracking and blazing-fast performance.",
      "items": [
        {
          "title": "Free Disposable Temp Mail Generator",
          "description": "Protect your primary email address from newsletters, marketing data brokers, spam traps, and unwanted junk mail forever."
        },
        {
          "title": "Automatic OTP & Code Extractor",
          "description": "Incoming emails are automatically parsed to highlight 4-to-8 digit verification tokens, confirmation links, and OTP codes with 1-click copy."
        },
        {
          "title": "100% Anonymous Email — Zero Logs",
          "description": "No registration, no personal tracking, and no central database. When you delete or wipe your temporary mailbox, messages vanish permanently."
        },
        {
          "title": "Desktop to Mobile QR Transfer",
          "description": "Scan the instant on-screen QR code with your mobile camera to immediately open and access your burner email address on phone or tablet."
        },
        {
          "title": "Live Auto-Refreshing Inbox",
          "description": "New emails land in real-time with automatic 10-second polling and SSE push. Never sit around manually clicking refresh again."
        },
        {
          "title": "Multi-Inbox 10 Minute Mail Switcher",
          "description": "Manage up to 8 recent burner mailboxes simultaneously from your session history drawer without losing pending verification messages."
        }
      ]
    },
    "howItWorks": {
      "badge": "Simple 4-Step Guide",
      "title": "How Disposable Email Works in 4 Steps",
      "subtitle": "From zero to verified in seconds. No complex configurations or personal details needed.",
      "step1Title": "1. Copy Your Free Address",
      "step1Desc": "We instantly generate an active, deliverable temporary email address ready to receive messages.",
      "step2Title": "2. Use in Any Signup Form",
      "step2Desc": "Paste the burner address into any app, game, forum, or software trial requiring verification.",
      "step3Title": "3. Auto-Detect OTP Codes",
      "step3Desc": "Incoming messages arrive in real-time. Our engine automatically highlights 4-8 digit OTPs and confirmation links.",
      "step4Title": "4. Self-Destruct & Forget",
      "step4Desc": "Close the tab or delete the inbox when done. No traces, no logs, and zero marketing spam in your real inbox."
    },
    "faq": {
      "badge": "Common Questions",
      "title": "Frequently Asked Questions",
      "subtitle": "Everything you need to know about disposable temp mail, OTP verification, and privacy.",
      "q1": "What is temp mail and how does a disposable temporary email work?",
      "a1": "Temp mail (also known as disposable email, burner email, or 10 minute mail) provides an instant temporary email address to receive incoming messages, activation links, and OTP verification codes without exposing your personal email address.",
      "q2": "Can I use TempoEmails as a 10 minute mail for OTP verification codes?",
      "a2": "Yes! TempoEmails features an intelligent OTP and verification code extractor. Incoming 4-to-8 digit verification tokens and magic confirmation links are automatically detected and highlighted with a 1-click copy button.",
      "q3": "Can I use temporary email for Discord, ChatGPT, Telegram, or Steam?",
      "a3": "Yes. TempoEmails works with platforms like Discord, ChatGPT, OpenAI, Telegram, Steam, Reddit, and various online trial services. If a service filters a specific domain, click \"Change\" or \"Custom\" to switch to an alternate active domain.",
      "q4": "Can I send outbound emails from TempoEmails?",
      "a4": "No. TempoEmails is strictly receive-only. Blocking outbound mail prevents spam abuses and protects our domain deliverability, ensuring your signup and verification emails arrive quickly without delay.",
      "q5": "Can I choose my own custom temp mail username and domain?",
      "a5": "Yes. Click the \"Custom\" button in the address bar to create your own custom email username and select from our available active domains.",
      "q6": "Is TempoEmails completely free with zero logs and no registration?",
      "a6": "Yes. TempoEmails is 100% free with no registration, no passwords, and zero personal logs. Your messages exist in temporary memory and are deleted automatically when you close or wipe your session."
    },
    "cta": {
      "title": "Your inbox is already live.",
      "subtitle": "No account, no password — just copy the address and go.",
      "button": "Open my inbox"
    },
    "footer": {
      "brandDesc": "Free disposable email generator. Receive verification codes and OTPs instantly while keeping your personal inbox safe from spam.",
      "quickLinks": "Quick Links",
      "instantInbox": "Instant Inbox",
      "company": "Company",
      "legal": "Legal",
      "privacyPolicy": "Privacy Policy",
      "termsOfService": "Terms of Service",
      "disclaimer": "Disclaimer",
      "allRightsReserved": "All rights reserved."
    },
    "a11y": {
      "skipToContent": "Skip to content",
      "toggleTheme": "Toggle dark mode",
      "toggleSound": "Toggle email notification sound",
      "toggleMenu": "Toggle navigation menu",
      "dismissToast": "Dismiss notification",
      "changeLanguage": "Change language, current is {lang}"
    },
    "common": {
      "onThisPage": "On this page",
      "close": "Close",
      "home": "Home",
      "blog": "Blog",
      "backToHome": "Back to Home",
      "allArticles": "All Articles",
      "readArticle": "Read article",
      "all": "All",
      "guide": "Guide",
      "architecture": "Architecture",
      "privacy": "Privacy",
      "security": "Security",
      "copy": "Copy",
      "copied": "Copied!",
      "copyEmailToast": "Copied {email} to clipboard!",
      "copyFailedToast": "Failed to copy address",
      "pageNotFoundBadge": "Page Not Found",
      "pageNotFoundTitle": "Oops, this page",
      "pageExpired": "expired.",
      "pageNotFoundDesc": "Just like a temporary email, this page has disappeared. But don't worry — your disposable inbox is still waiting for you.",
      "goToHomepage": "Go to Homepage",
      "readOurBlog": "Read Our Blog",
      "translationNotice": "This article is currently displayed in English. Full translation is in progress."
    },
    "pages": {
      "about": {
        "title": "About TempoEmails — Free Temp Mail & Disposable Email Mission",
        "description": "Why we built TempoEmails: a fast, free temp mail and disposable temporary email service with instant OTP detection, zero logs, and complete spam protection.",
        "heading": "Why We Built TempoEmails",
        "subheading": "Clean, fast, privacy-first temporary email that just works."
      },
      "contact": {
        "title": "Contact TempoEmails Support & Temp Mail Assistance",
        "description": "Get support for TempoEmails free temp mail, disposable temporary email generator, domain deliverability inquiries, developer API access, or feedback.",
        "heading": "Contact TempoEmails Support",
        "subheading": "Have a question, spotted a bug, or need help? Reach out to us."
      },
      "blog": {
        "title": "Temp Mail, Privacy & Online Security Blog — TempoEmails",
        "description": "Expert guides on free temp mail, disposable temporary email services, OTP verification codes, 10 minute mail, and digital privacy best practices.",
        "heading": "Privacy & Security Guides",
        "subheading": "Practical guides on avoiding spam, managing online accounts, and protecting your primary email address.",
        "faqHeading": "Frequently Asked Questions",
        "relatedHeading": "Related Guides"
      },
      "privacy": {
        "title": "Privacy Policy — TempoEmails",
        "description": "TempoEmails Privacy Policy: zero logs, ephemeral in-memory processing, GDPR/CCPA compliant disposable email generator with no registration required.",
        "heading": "Privacy Policy"
      },
      "terms": {
        "title": "Terms of Service — TempoEmails",
        "description": "TempoEmails Terms of Service: terms and conditions for using our free temporary disposable email service.",
        "heading": "Terms of Service"
      },
      "disclaimer": {
        "title": "Disclaimer — TempoEmails",
        "description": "TempoEmails Disclaimer: general information, fair use policies, and privacy guidelines regarding disposable and temporary email addresses.",
        "heading": "Disclaimer"
      }
    }
  },
  "es": {
    "meta": {
      "title": "Correo Temporal Gratis — Generador de Email Desechable y Falso",
      "description": "Email temporal desechable y gratuito. Recibe códigos de verificación OTP, enlaces de activación y correos electrónicos al instante sin spam ni registros.",
      "keywords": "correo temporal, email temporal, correo desechable, email desechable, correo falso, generador de correo temporal, 10 minute mail, recibir otp online, correo temporal gratis"
    },
    "nav": {
      "features": "Características",
      "howItWorks": "Cómo Funciona",
      "faq": "Preguntas",
      "blog": "Blog",
      "about": "Nosotros",
      "contact": "Contacto",
      "history": "Historial",
      "selectLanguage": "Idioma"
    },
    "hero": {
      "chips": ["Sin registro","Detección automática de OTP","Cero registros"],
      "worksWith": "Funciona con",
      "badge": "Correo Temporal Instantáneo y Buzón Desechable",
      "titleLine1": "Correo Temporal Gratis.",
      "titleLine2": "Email Desechable en Segundos.",
      "subtitle": "Genera una dirección de correo temporal desechable al instante. Recibe códigos de verificación OTP y enlaces de activación sin spam, sin registros y con total privacidad."
    },
    "addressBar": {
      "tempEmailLabel": "Correo Temporal",
      "liveBadge": "Activo",
      "copyAddress": "Copiar Dirección",
      "copiedAddress": "¡Copiado!",
      "refreshTooltip": "Actualizar mensajes (Auto-actualiza cada 10s)",
      "customTooltip": "Crear usuario personalizado",
      "qrTooltip": "Ver Código QR para móvil",
      "changeTooltip": "Generar nuevo correo aleatorio",
      "deleteTooltip": "Eliminar este buzón",
      "accessTooltip": "Acceso y contraseña del buzón",
      "refreshLabel": "Actualizar",
      "customLabel": "Personalizar",
      "qrLabel": "Código QR",
      "accessLabel": "Acceso",
      "changeLabel": "Nuevo correo",
      "deleteLabel": "Eliminar",
      "switchProviderTooltip": "Haz clic para cambiar de proveedor"
    },
    "inboxList": {
      "title": "Bandeja de Entrada",
      "emptyTitle": "Esperando correos entrantes...",
      "emptyDesc": "Copia tu dirección temporal de arriba y pégala en cualquier formulario de registro. Los nuevos mensajes aparecerán aquí automáticamente.",
      "autoChecking": "Búsqueda automática activa",
      "clickToView": "Haga clic para ver los detalles del correo...",
      "unreadBadge": "No leído",
      "unreadEmail": "correo no leído",
      "unreadEmails": "correos no leídos",
      "totalEmail": "correo",
      "totalEmails": "correos"
    },
    "emailDetail": {
      "noMessageTitle": "Ningún mensaje seleccionado",
      "noMessageDesc": "Selecciona un correo de tu bandeja para leerlo y copiar los códigos de verificación.",
      "loading": "Cargando correo...",
      "backToInbox": "Volver a Bandeja",
      "htmlTab": "HTML",
      "textTab": "Texto",
      "downloadTooltip": "Descargar correo",
      "deleteTooltip": "Eliminar este mensaje",
      "otpDetected": "Código de Verificación Detectado",
      "copyOtp": "Copiar Código",
      "copiedOtp": "¡Copiado!",
      "verifyLink": "Enlace:",
      "openLink": "Abrir Enlace",
      "toLabel": "Para:",
      "noSubject": "(Sin Asunto)",
      "defaultSender": "Remitente",
      "defaultDate": "Fecha"
    },
    "customModal": {
      "title": "Correo Personalizado",
      "desc": "Elige tu nombre de usuario y dominio preferidos para crear un buzón temporal a tu medida.",
      "usernameLabel": "Usuario",
      "usernamePlaceholder": "ej. carlos.registro",
      "domainLabel": "Dominio",
      "loadingDomains": "Cargando dominios...",
      "preview": "Vista previa:",
      "cancel": "Cancelar",
      "create": "Crear Buzón",
      "domainsFailed": "No se pudieron cargar los dominios; inténtalo de nuevo"
    },
    "accessModal": {
      "title": "Acceso al buzón",
      "credentialsDesc": "Guarda esta contraseña. Con ella podrás volver a abrir este buzón más tarde, en cualquier navegador o dispositivo.",
      "addressLabel": "Correo electrónico",
      "passwordLabel": "Contraseña",
      "showPassword": "Mostrar contraseña",
      "hidePassword": "Ocultar contraseña",
      "copyPassword": "Copiar contraseña",
      "copyLogin": "Copiar dirección y contraseña",
      "noPasswordPublic": "Los buzones de {provider} no tienen contraseña: cualquiera que conozca la dirección puede abrirlos.",
      "noPasswordExpiring": "Los buzones de TempMail.lol no tienen contraseña y caducan en aproximadamente una hora.",
      "noPasswordMock": "Este buzón simulado no tiene contraseña.",
      "loginTitle": "Abrir un buzón existente",
      "loginDesc": "Funciona con direcciones de Mail.tm y Mail.gw.",
      "loginButton": "Abrir buzón"
    },
    "qrModal": {
      "title": "Código QR Móvil",
      "desc": "Escanea este código con la cámara de tu smartphone para abrir este correo temporal en tu móvil.",
      "copyLink": "Copiar Enlace",
      "copiedLink": "¡Enlace Copiado!",
      "close": "Cerrar",
      "unavailable": "Código QR no disponible: revisa tu conexión e inténtalo de nuevo."
    },
    "historyDrawer": {
      "title": "Buzones Recientes",
      "desc": "Cambia entre tus direcciones de correo temporales anteriores guardadas en el navegador.",
      "activeInbox": "Activo",
      "savedStorage": "Guardado Localmente",
      "emptyTitle": "Sin buzones guardados",
      "emptyDesc": "Cuando crees o cambies de buzón temporal, tus direcciones recientes aparecerán aquí.",
      "clearAll": "Borrar Todo el Historial",
      "removeInbox": "Quitar del historial",
      "confirmClearTitle": "Borrar Todo el Historial",
      "confirmClearDesc": "¿Estás seguro de que deseas eliminar todas las direcciones guardadas del navegador?"
    },
    "confirmModal": {
      "cancel": "Cancelar",
      "confirm": "Confirmar",
      "deleteInboxTitle": "Eliminar Buzón",
      "deleteInboxDesc": "¿Seguro que deseas eliminar permanentemente este correo temporal y todos sus mensajes?",
      "changeAddressTitle": "Cambiar Dirección",
      "changeAddressDesc": "¿Generar una nueva dirección aleatoria? Los mensajes actuales permanecerán en tu historial.",
      "deleteMessageTitle": "Eliminar Mensaje",
      "deleteMessageDesc": "¿Seguro que deseas eliminar este mensaje de forma permanente?"
    },
    "cookieConsent": {
      "title": "Preferencias de Cookies",
      "desc": "Usamos cookies para guardar tus preferencias (como modo oscuro y buzones recientes) y medir visitas. Consulta nuestra",
      "privacyPolicy": "Política de Privacidad",
      "essentialOnly": "Solo Esenciales",
      "acceptAll": "Aceptar Todas"
    },
    "toasts": {
      "soundEnabled": "Notificaciones con sonido activadas",
      "soundMuted": "Notificaciones silenciadas",
      "initFailed": "Error al inicializar el buzón. Por favor, recarga.",
      "messageDeleted": "Mensaje eliminado",
      "switchedTo": "Cambiado a {address}",
      "generatedNew": "¡Nuevo correo temporal generado con éxito!",
      "mailboxDeleted": "¡Buzón eliminado y nueva dirección creada!",
      "customCreated": "Buzón personalizado creado: {address}",
      "customFailed": "Error al crear el buzón. Prueba con otro nombre de usuario.",
      "providerSwitched": "Proveedor activo cambiado a {provider}",
      "historyCleared": "Historial de buzones borrado.",
      "copiedToClipboard": "¡Copiado al portapapeles!",
      "copyFailed": "Error al copiar al portapapeles",
      "otpCopied": "¡Código de verificación {code} copiado!",
      "loadMessageFailed": "Error al cargar el contenido del mensaje.",
      "mockFallback": "Todos los proveedores de correo son inaccesibles en este momento: este buzón es simulado y no puede recibir correo real.",
      "legacyInboxGone": "Tu buzón antiguo de 1secmail ({address}) ya no es compatible: se creó un buzón nuevo.",
      "passwordCopied": "Contraseña copiada",
      "loginCopied": "Dirección y contraseña copiadas",
      "loginFailed": "Dirección o contraseña incorrectas.",
      "loginUnavailable": "No se pudo contactar con el proveedor de correo. Inténtalo de nuevo en un momento.",
      "inboxAuthLost": "{address} ya no acepta su contraseña; es posible que el proveedor lo haya eliminado.",
      "inboxExpired": "{address} ha caducado. Genera una dirección nueva para seguir recibiendo correo."
    },
    "relativeTime": {
      "justNow": "Ahora mismo",
      "yesterday": "Ayer",
      "secondsAgo": "hace {n}s",
      "minutesAgo": "hace {n}m",
      "hoursAgo": "hace {n}h",
      "daysAgo": "hace {n}d"
    },
    "useCases": {
      "badge": "Servicios Populares",
      "title": "Funciona Perfectamente en Todas Partes",
      "subtitle": "Usa TempoEmails para verificarte al instante en tus servicios favoritos sin comprometer tu privacidad.",
      "items": [
        {
          "category": "Pruebas de IA y Software",
          "badge": "ChatGPT y SaaS",
          "title": "Correo Temporal para ChatGPT y Pruebas Gratuitas",
          "description": "Regístrese en herramientas de IA, APIs de desarrolladores y pruebas gratuitas de SaaS sin poner su correo principal en listas promocionales.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "Pruebas SaaS"
          ]
        },
        {
          "category": "Juegos y Comunidades",
          "badge": "Discord y Steam",
          "title": "Correo Desechable para Discord y Juegos",
          "description": "Cree perfiles secundarios de jugador, únase a servidores de Discord, verifique cuentas de Steam y canjee claves beta de juegos fácilmente.",
          "tags": [
            "Verificación Discord",
            "Cuentas Steam",
            "Alertas Twitch",
            "Epic Games"
          ]
        },
        {
          "category": "Redes Sociales y Mensajería",
          "badge": "Telegram y Redes",
          "title": "Correo Efímero para Redes Sociales y Apps",
          "description": "Mantenga su correo real anónimo al registrarse en redes sociales, foros, Telegram, Reddit o al descargar documentos y PDFs.",
          "tags": [
            "Registros Telegram",
            "Perfiles Reddit",
            "Registros Foros",
            "Descargas Protegidas"
          ]
        },
        {
          "category": "Desarrollo y Pruebas QA",
          "badge": "API de Correo y QA",
          "title": "Generador de Correo Falso para QA de Software",
          "description": "Pruebe flujos de registro de usuarios, verifique entrega de correos transaccionales, valide restablecimiento de contraseñas y simule múltiples usuarios.",
          "tags": [
            "QA Flujo Registro",
            "Pruebas Webhook",
            "Verificación Auth",
            "Simulación Multi-Buzón"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Detección Automática de Códigos",
      "title": "Recibe códigos OTP de verificación al instante en tu email temporal.",
      "subtitle": "TempoEmails analiza automáticamente los mensajes entrantes para extraer códigos de 4 a 8 dígitos y enlaces de activación de un solo uso. Ideal para registros rápidos y pruebas de aplicaciones sin saturar tu correo personal.",
      "tag1": "Códigos OTP de 4 a 8 Dígitos",
      "tag2": "Enlaces Mágicos en 1 Clic",
      "tag3": "Copia Inmediata",
      "previewBadge": "Vista Previa",
      "previewDetected": "Detectado Automáticamente",
      "previewCode": "Código de Verificación",
      "previewCopy": "Copiar",
      "previewFrom": "De: Equipo de Seguridad",
      "previewSubj": "Su código de verificación único es 593821",
      "previewTime": "Ahora mismo"
    },
    "features": {
      "badge": "Funciones Principales",
      "title": "Diseñado para Máxima Velocidad y Privacidad Total",
      "subtitle": "Todo lo que necesitas de un servicio de email desechable moderno, sin rastreo y con rendimiento ultrarrápido.",
      "items": [
        {
          "title": "Generador de Correo Temporal Gratuito",
          "description": "Proteja su dirección principal de boletines, intermediarios de datos, trampas de spam y correo no deseado para siempre."
        },
        {
          "title": "Extractor Automático de OTP y Códigos",
          "description": "Los correos entrantes se analizan automáticamente para resaltar tokens de 4 a 8 dígitos, enlaces de confirmación y códigos OTP con copia en 1 clic."
        },
        {
          "title": "Correo 100% Anónimo — Cero Registros",
          "description": "Sin registro, sin rastreo personal y sin base de datos central. Al eliminar o borrar su buzón temporal, los mensajes desaparecen permanentemente."
        },
        {
          "title": "Transferencia QR de PC a Móvil",
          "description": "Escanee el código QR instantáneo en pantalla con su cámara móvil para abrir y acceder de inmediato a su correo desechable en teléfono o tableta."
        },
        {
          "title": "Bandeja de Entrada con Auto-Actualización en Vivo",
          "description": "Los nuevos correos llegan en tiempo real con sondeo automático cada 10 segundos y push SSE. No vuelva a hacer clic manualmente en actualizar."
        },
        {
          "title": "Selector Multi-Buzón de 10 Minutos",
          "description": "Administre hasta 8 buzones temporales recientes simultáneamente desde su historial de sesión sin perder mensajes de verificación pendientes."
        }
      ]
    },
    "howItWorks": {
      "badge": "Guía en 4 Pasos",
      "title": "Cómo Funciona el Correo Temporal en 4 Pasos",
      "subtitle": "De cero a verificado en segundos. Sin registros complejos ni datos personales requeridos.",
      "step1Title": "1. Copia tu Dirección Gratuita",
      "step1Desc": "Generamos instantáneamente una dirección temporal activa lista para recibir correos.",
      "step2Title": "2. Úsala en Cualquier Registro",
      "step2Desc": "Pega la dirección desechable en cualquier aplicación, juego o servicio que pida verificación.",
      "step3Title": "3. Detección Automática de OTP",
      "step3Desc": "Los mensajes llegan en tiempo real y nuestro motor destaca códigos y enlaces con un botón para copiar.",
      "step4Title": "4. Autodestrucción y Olvido",
      "step4Desc": "Cierra la pestaña o elimina el buzón al terminar. Cero spam y cero registros en tu correo personal."
    },
    "faq": {
      "badge": "Preguntas Frecuentes",
      "title": "Preguntas Frecuentes",
      "subtitle": "Todo lo que necesitas saber sobre correo temporal, verificación OTP y privacidad.",
      "q1": "¿Qué es el correo temporal y cómo funciona un email desechable?",
      "a1": "El correo temporal (también conocido como email desechable o correo de 10 minutos) te ofrece una dirección temporal inmediata para recibir mensajes, enlaces de activación y códigos OTP sin exponer tu correo personal.",
      "q2": "¿Puedo usar TempoEmails para códigos de verificación OTP?",
      "a2": "¡Sí! TempoEmails detecta de manera inteligente códigos OTP de 4 a 8 dígitos y enlaces de confirmación, mostrándolos resaltados con un botón de copiado en 1 clic.",
      "q3": "¿Funciona en Discord, ChatGPT, Telegram o Steam?",
      "a3": "Sí. TempoEmails es compatible con plataformas como Discord, ChatGPT, Telegram, Steam y pruebas de software. Si un servicio filtra un dominio, haz clic en \"Cambiar\" para probar otro dominio activo.",
      "q4": "¿Puedo enviar correos salientes desde TempoEmails?",
      "a4": "No. TempoEmails es exclusivamente de recepción para evitar abusos de spam y garantizar que tus correos de confirmación lleguen sin demoras.",
      "q5": "¿Puedo elegir mi propio nombre de usuario y dominio?",
      "a5": "Sí. Haz clic en \"Personalizar\" en la barra de dirección para elegir un usuario propio y seleccionar entre nuestros dominios activos.",
      "q6": "¿Es completamente gratis y sin registros?",
      "a6": "Sí, 100% gratis, sin contraseñas, sin registros y sin guardar registros personales."
    },
    "cta": {
      "title": "Tu bandeja ya está activa.",
      "subtitle": "Sin cuenta ni contraseña: copia la dirección y listo.",
      "button": "Abrir mi bandeja"
    },
    "footer": {
      "brandDesc": "Generador gratuito de correo temporal desechable. Recibe códigos de verificación y OTPs al instante protegiendo tu buzón personal del spam.",
      "quickLinks": "Enlaces Rápidos",
      "instantInbox": "Buzón Instantáneo",
      "company": "Empresa",
      "legal": "Legal",
      "privacyPolicy": "Política de Privacidad",
      "termsOfService": "Términos de Servicio",
      "disclaimer": "Descargo de Responsabilidad",
      "allRightsReserved": "Todos los derechos reservados."
    },
    "a11y": {
      "skipToContent": "Saltar al contenido",
      "toggleTheme": "Alternar modo oscuro",
      "toggleSound": "Activar o desactivar el sonido de las notificaciones",
      "toggleMenu": "Mostrar u ocultar el menú de navegación",
      "dismissToast": "Descartar notificación",
      "changeLanguage": "Cambiar idioma, el actual es {lang}"
    },
    "common": {
      "onThisPage": "En esta página",
      "close": "Cerrar",
      "home": "Inicio",
      "blog": "Blog",
      "backToHome": "Volver al Inicio",
      "allArticles": "Todos los Artículos",
      "readArticle": "Leer artículo",
      "all": "Todos",
      "guide": "Guía",
      "architecture": "Arquitectura",
      "privacy": "Privacidad",
      "security": "Seguridad",
      "copy": "Copiar",
      "copied": "¡Copiado!",
      "copyEmailToast": "¡{email} copiado al portapapeles!",
      "copyFailedToast": "Error al copiar la dirección",
      "pageNotFoundBadge": "Página No Encontrada",
      "pageNotFoundTitle": "Vaya, esta página",
      "pageExpired": "ha caducado.",
      "pageNotFoundDesc": "Al igual que un correo temporal, esta página ha desaparecido. Pero no se preocupe, su buzón desechable sigue esperándole.",
      "goToHomepage": "Ir a la Página Principal",
      "readOurBlog": "Leer Nuestro Blog",
      "translationNotice": "Este artículo se muestra actualmente en inglés. La traducción completa está en proceso."
    },
    "pages": {
      "about": {
        "title": "Acerca de TempoEmails — Misión de Correo Temporal Desechable y Gratuito",
        "description": "Por qué creamos TempoEmails: un servicio de correo temporal gratuito y rápido con detección de OTP, cero registros y protección contra spam.",
        "heading": "Por Qué Creamos TempoEmails",
        "subheading": "Correo temporal limpio, rápido y centrado en la privacidad que simplemente funciona."
      },
      "contact": {
        "title": "Contacto y Soporte de TempoEmails",
        "description": "Obtenga soporte para TempoEmails, correo temporal gratuito, consultas de entrega, API para desarrolladores o comentarios.",
        "heading": "Contacto y Soporte",
        "subheading": "¿Tiene alguna pregunta, detectó un error o necesita ayuda? Póngase en contacto con nosotros."
      },
      "blog": {
        "title": "Blog de Privacidad, Seguridad y Correo Temporal — TempoEmails",
        "description": "Guías de expertos sobre correo temporal gratuito, códigos OTP, correo de 10 minutos y privacidad digital.",
        "heading": "Guías de Privacidad y Seguridad",
        "subheading": "Consejos prácticos para evitar el spam, gestionar cuentas online y proteger su correo principal.",
        "faqHeading": "Preguntas frecuentes",
        "relatedHeading": "Guías relacionadas"
      },
      "privacy": {
        "title": "Política de Privacidad — TempoEmails",
        "description": "Política de privacidad de TempoEmails: cero registros, procesamiento en memoria efímero y cumplimiento con GDPR/CCPA.",
        "heading": "Política de Privacidad"
      },
      "terms": {
        "title": "Términos de Servicio — TempoEmails",
        "description": "Términos y condiciones de uso de TempoEmails para nuestro servicio de correo temporal gratuito.",
        "heading": "Términos de Servicio"
      },
      "disclaimer": {
        "title": "Descargo de Responsabilidad — TempoEmails",
        "description": "Descargo de responsabilidad de TempoEmails: uso legítimo, limitaciones y recomendaciones de seguridad.",
        "heading": "Descargo de Responsabilidad"
      }
    }
  },
  "pt": {
    "meta": {
      "title": "Email Temporário Grátis — Gerador de Email Descartável e Falso",
      "description": "Email temporário descartável e gratuito. Receba códigos de verificação OTP, links de ativação e mensagens instantâneas sem spam nem cadastros.",
      "keywords": "email temporario, email descartavel, correio temporario, email falso, gerador de email temporario, 10 minute mail, receber otp online, email temporario gratis"
    },
    "nav": {
      "features": "Recursos",
      "howItWorks": "Como Funciona",
      "faq": "Perguntas",
      "blog": "Blog",
      "about": "Sobre",
      "contact": "Contato",
      "history": "Histórico",
      "selectLanguage": "Idioma"
    },
    "hero": {
      "chips": ["Sem cadastro","Detecção automática de OTP","Zero registros"],
      "worksWith": "Funciona com",
      "badge": "Email Temporário Instantâneo e Caixa Descartável",
      "titleLine1": "Email Temporário Grátis.",
      "titleLine2": "Email Descartável em Segundos.",
      "subtitle": "Gere um endereço de email temporário e descartável em um clique. Receba códigos OTP e links de ativação com zero spam, sem logs e sem cadastro."
    },
    "addressBar": {
      "tempEmailLabel": "Email Temporário",
      "liveBadge": "Ativo",
      "copyAddress": "Copiar Endereço",
      "copiedAddress": "Copiado!",
      "refreshTooltip": "Atualizar mensagens (Auto-atualiza a cada 10s)",
      "customTooltip": "Criar nome personalizado",
      "qrTooltip": "Mostrar QR Code para celular",
      "changeTooltip": "Gerar novo email aleatório",
      "deleteTooltip": "Excluir esta caixa de entrada",
      "accessTooltip": "Acesso e senha da caixa de entrada",
      "refreshLabel": "Atualizar",
      "customLabel": "Personalizar",
      "qrLabel": "Código QR",
      "accessLabel": "Acesso",
      "changeLabel": "Novo email",
      "deleteLabel": "Excluir",
      "switchProviderTooltip": "Clique para trocar de provedor"
    },
    "inboxList": {
      "title": "Caixa de Entrada",
      "emptyTitle": "Aguardando novas mensagens...",
      "emptyDesc": "Copie seu endereço temporário acima e cole em qualquer formulário. As mensagens recebidas aparecerão aqui automaticamente.",
      "autoChecking": "Verificação automática ativa",
      "clickToView": "Clique para ver os detalhes do e-mail...",
      "unreadBadge": "Não lido",
      "unreadEmail": "e-mail não lido",
      "unreadEmails": "e-mails não lidos",
      "totalEmail": "e-mail",
      "totalEmails": "e-mails"
    },
    "emailDetail": {
      "noMessageTitle": "Nenhuma mensagem selecionada",
      "noMessageDesc": "Selecione um email da caixa de entrada para ler e copiar códigos de verificação.",
      "loading": "Carregando email...",
      "backToInbox": "Voltar para Caixa",
      "htmlTab": "HTML",
      "textTab": "Texto",
      "downloadTooltip": "Baixar email",
      "deleteTooltip": "Excluir mensagem",
      "otpDetected": "Código de Verificação Detectado",
      "copyOtp": "Copiar Código",
      "copiedOtp": "Copiado!",
      "verifyLink": "Link:",
      "openLink": "Abrir Link",
      "toLabel": "Para:",
      "noSubject": "(Sem Assunto)",
      "defaultSender": "Remetente",
      "defaultDate": "Data"
    },
    "customModal": {
      "title": "Email Personalizado",
      "desc": "Escolha seu nome de usuário e domínio favoritos para criar um email temporário personalizado.",
      "usernameLabel": "Nome de usuário",
      "usernamePlaceholder": "ex. lucas.cadastro",
      "domainLabel": "Domínio",
      "loadingDomains": "Carregando domínios...",
      "preview": "Prévia:",
      "cancel": "Cancelar",
      "create": "Criar Caixa",
      "domainsFailed": "Não foi possível carregar os domínios — tente novamente"
    },
    "accessModal": {
      "title": "Acesso à caixa de entrada",
      "credentialsDesc": "Guarde esta senha. Com ela você pode abrir esta caixa de entrada novamente depois, em qualquer navegador ou dispositivo.",
      "addressLabel": "Endereço de e-mail",
      "passwordLabel": "Senha",
      "showPassword": "Mostrar senha",
      "hidePassword": "Ocultar senha",
      "copyPassword": "Copiar senha",
      "copyLogin": "Copiar endereço e senha",
      "noPasswordPublic": "As caixas de entrada do {provider} não têm senha: qualquer pessoa que saiba o endereço pode abri-las.",
      "noPasswordExpiring": "As caixas de entrada do TempMail.lol não têm senha e expiram em cerca de uma hora.",
      "noPasswordMock": "Esta caixa de entrada simulada não tem senha.",
      "loginTitle": "Abrir uma caixa de entrada existente",
      "loginDesc": "Funciona com endereços Mail.tm e Mail.gw.",
      "loginButton": "Abrir caixa de entrada"
    },
    "qrModal": {
      "title": "QR Code para Celular",
      "desc": "Aponte a câmera do seu smartphone para abrir e usar este email temporário no celular instantaneamente.",
      "copyLink": "Copiar Link",
      "copiedLink": "Link Copiado!",
      "close": "Fechar",
      "unavailable": "QR code indisponível — verifique sua conexão e tente novamente."
    },
    "historyDrawer": {
      "title": "Emails Recentes",
      "desc": "Alterne rapidamente entre caixas de email temporárias anteriores salvas no seu navegador.",
      "activeInbox": "Ativo",
      "savedStorage": "Salvo Localmente",
      "emptyTitle": "Nenhum email salvo",
      "emptyDesc": "Quando você criar ou alternar caixas de entrada temporárias, seus endereços aparecerão aqui.",
      "clearAll": "Limpar Todo Histórico",
      "removeInbox": "Remover do histórico",
      "confirmClearTitle": "Limpar Histórico",
      "confirmClearDesc": "Tem certeza de que deseja apagar todos os endereços salvos da memória local?"
    },
    "confirmModal": {
      "cancel": "Cancelar",
      "confirm": "Confirmar",
      "deleteInboxTitle": "Excluir Caixa de Entrada",
      "deleteInboxDesc": "Deseja realmente apagar este email temporário e todas as mensagens recebidas?",
      "changeAddressTitle": "Mudar Endereço",
      "changeAddressDesc": "Gerar um novo email temporário aleatório? As mensagens atuais permanecerão no histórico.",
      "deleteMessageTitle": "Excluir Mensagem",
      "deleteMessageDesc": "Deseja excluir permanentemente esta mensagem?"
    },
    "cookieConsent": {
      "title": "Preferências de Cookies",
      "desc": "Usamos cookies para salvar suas preferências (como modo escuro e caixas recentes) e monitorar tráfego. Veja nossa",
      "privacyPolicy": "Política de Privacidade",
      "essentialOnly": "Apenas Essenciais",
      "acceptAll": "Aceitar Todos"
    },
    "toasts": {
      "soundEnabled": "Notificações sonoras ativadas",
      "soundMuted": "Notificações sonoras silenciadas",
      "initFailed": "Falha ao iniciar caixa postal. Recarregue a página.",
      "messageDeleted": "Mensagem excluída",
      "switchedTo": "Alternado para {address}",
      "generatedNew": "Novo email temporário gerado com sucesso!",
      "mailboxDeleted": "Caixa de entrada excluída e novo email gerado!",
      "customCreated": "Email personalizado criado: {address}",
      "customFailed": "Falha ao criar email. Tente outro nome de usuário.",
      "providerSwitched": "Provedor ativo alternado para {provider}",
      "historyCleared": "Histórico de emails apagado com sucesso.",
      "copiedToClipboard": "Copiado para a área de transferência!",
      "copyFailed": "Falha ao copiar",
      "otpCopied": "Código de verificação {code} copiado!",
      "loadMessageFailed": "Falha ao carregar o conteúdo da mensagem.",
      "mockFallback": "Todos os provedores de e-mail estão indisponíveis no momento — esta caixa é simulada e não recebe e-mails reais.",
      "legacyInboxGone": "Sua caixa antiga do 1secmail ({address}) não é mais compatível — criamos uma nova caixa.",
      "passwordCopied": "Senha copiada",
      "loginCopied": "Endereço e senha copiados",
      "loginFailed": "Endereço ou senha incorretos.",
      "loginUnavailable": "Não foi possível contatar o provedor de e-mail. Tente novamente em instantes.",
      "inboxAuthLost": "{address} não aceita mais a senha — o provedor pode tê-la excluído.",
      "inboxExpired": "{address} expirou. Gere um novo endereço para continuar recebendo e-mails."
    },
    "relativeTime": {
      "justNow": "Agora mesmo",
      "yesterday": "Ontem",
      "secondsAgo": "há {n}s",
      "minutesAgo": "há {n}m",
      "hoursAgo": "há {n}h",
      "daysAgo": "há {n}d"
    },
    "useCases": {
      "badge": "Serviços Populares",
      "title": "Funciona Perfeitamente em Qualquer Plataforma",
      "subtitle": "Use o TempoEmails para se cadastrar rapidamente em seus serviços favoritos com total anonimato.",
      "items": [
        {
          "category": "Testes de IA e Software",
          "badge": "ChatGPT e SaaS",
          "title": "E-mail Temporário para ChatGPT e Testes Grátis",
          "description": "Cadastre-se em ferramentas de IA, APIs de desenvolvedores e testes gratuitos de SaaS sem colocar seu e-mail principal em listas promocionais.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "Testes SaaS"
          ]
        },
        {
          "category": "Jogos e Comunidades",
          "badge": "Discord e Steam",
          "title": "E-mail Descartável para Discord e Jogos",
          "description": "Crie perfis secundários de jogos, entre em servidores privados do Discord, verifique contas da Steam e resgate chaves beta com facilidade.",
          "tags": [
            "Verificação Discord",
            "Contas Steam",
            "Alertas Twitch",
            "Epic Games"
          ]
        },
        {
          "category": "Redes Sociais e Mensagens",
          "badge": "Telegram e Redes",
          "title": "E-mail Descartável para Redes Sociais e Apps",
          "description": "Mantenha seu e-mail real anônimo ao se cadastrar em redes sociais, fóruns, Telegram, Reddit ou ao baixar materiais e PDFs.",
          "tags": [
            "Cadastros Telegram",
            "Perfis Reddit",
            "Cadastros Fóruns",
            "Downloads Protegidos"
          ]
        },
        {
          "category": "Desenvolvimento e Testes QA",
          "badge": "API de E-mail e QA",
          "title": "Gerador de E-mail Falso para QA de Software",
          "description": "Teste fluxos de cadastro de usuários, verifique entrega de e-mails transacionais, valide redefinição de senha e simule múltiplos usuários.",
          "tags": [
            "QA Fluxo Cadastro",
            "Testes Webhook",
            "Verificação Auth",
            "Simulação Multi-Caixa"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Extração Automática de Códigos",
      "title": "Receba códigos OTP de verificação instantaneamente no email temporário.",
      "subtitle": "O TempoEmails analisa mensagens recebidas para identificar códigos de 4 a 8 dígitos e links de ativação no segundo em que chegam.",
      "tag1": "Códigos OTP de 4 a 8 Dígitos",
      "tag2": "Links de 1 Clique",
      "tag3": "Cópia Imediata",
      "previewBadge": "Prévia da Caixa",
      "previewDetected": "Detectado Automaticamente",
      "previewCode": "Código de Verificação",
      "previewCopy": "Copiar",
      "previewFrom": "De: Equipe de Segurança",
      "previewSubj": "Seu código de verificação único é 593821",
      "previewTime": "Agora mesmo"
    },
    "features": {
      "badge": "Principais Recursos",
      "title": "Projetado para Velocidade Máxima e Privacidade Total",
      "subtitle": "Tudo o que você espera de um gerador de email temporário moderno, sem rastreamento e super rápido.",
      "items": [
        {
          "title": "Gerador de E-mail Temporário Grátis",
          "description": "Proteja seu endereço principal de newsletters, corretores de dados, armadilhas de spam e lixo eletrônico para sempre."
        },
        {
          "title": "Extrator Automático de OTP e Códigos",
          "description": "E-mails recebidos são analisados automaticamente para destacar tokens de 4 a 8 dígitos, links de confirmação e códigos OTP com cópia em 1 clique."
        },
        {
          "title": "E-mail 100% Anônimo — Zero Registros",
          "description": "Sem cadastro, sem rastreamento pessoal e sem banco de dados central. Ao excluir ou limpar sua caixa temporária, as mensagens somem permanentemente."
        },
        {
          "title": "Transferência QR do PC para o Celular",
          "description": "Escaneie o código QR instantâneo na tela com a câmera do celular para acessar imediatamente seu e-mail descartável no smartphone ou tablet."
        },
        {
          "title": "Caixa de Entrada com Atualização em Tempo Real",
          "description": "Novos e-mails chegam em tempo real com verificação automática a cada 10 segundos e push SSE. Nunca mais fique clicando em atualizar manualmente."
        },
        {
          "title": "Seletor Multi-Caixa de 10 Minutos",
          "description": "Gerencie até 8 caixas temporárias recentes simultaneamente pelo seu histórico de sessão sem perder mensagens de verificação pendentes."
        }
      ]
    },
    "howItWorks": {
      "badge": "Guia em 4 Passos",
      "title": "Como Funciona o Email Temporário em 4 Passos",
      "subtitle": "Da criação à verificação em segundos. Sem burocracia nem dados pessoais.",
      "step1Title": "1. Copie seu Endereço Grátis",
      "step1Desc": "Criamos na hora um email temporário ativo e pronto para receber mensagens.",
      "step2Title": "2. Use em Cadastros",
      "step2Desc": "Cole o endereço descartável em qualquer aplicativo ou site que solicite confirmação.",
      "step3Title": "3. Detecção Automática de Códigos",
      "step3Desc": "Os emails chegam em tempo real e o código de verificação é destacado com botão de copiar.",
      "step4Title": "4. Autodestruição sem Rastros",
      "step4Desc": "Feche a aba quando terminar. Zero spam e zero marketing na sua caixa postal pessoal."
    },
    "faq": {
      "badge": "Dúvidas Comuns",
      "title": "Perguntas Frequentes",
      "subtitle": "Tudo sobre email temporário, verificação OTP e proteção de privacidade.",
      "q1": "O que é email temporário e como funciona?",
      "a1": "O email temporário (descartável ou 10 minute mail) fornece um endereço imediato para receber confirmações sem expor seu email pessoal.",
      "q2": "Posso usar o TempoEmails para receber códigos OTP?",
      "a2": "Sim! O TempoEmails detecta automaticamente códigos numéricos e links de confirmação com botão de copiar em um clique.",
      "q3": "Funciona para Discord, ChatGPT, Telegram ou Steam?",
      "a3": "Sim. O TempoEmails é compatível com diversos serviços populares. Se um domínio for bloqueado, basta clicar em \"Mudar\" para gerar outro.",
      "q4": "Posso enviar mensagens a partir do TempoEmails?",
      "a4": "Não. O serviço é estritamente para recepção, o que previne spam e garante alta entregabilidade dos seus emails de ativação.",
      "q5": "Posso escolher um nome de usuário personalizado?",
      "a5": "Sim. Clique no botão \"Personalizar\" para escolher o nome e o domínio que preferir.",
      "q6": "É totalmente gratuito e sem cadastro?",
      "a6": "Sim, 100% grátis, sem senhas, sem formulários e sem registro de dados pessoais."
    },
    "cta": {
      "title": "Sua caixa de entrada já está ativa.",
      "subtitle": "Sem conta, sem senha — é só copiar o endereço.",
      "button": "Abrir minha caixa"
    },
    "footer": {
      "brandDesc": "Gerador gratuito de email descartável e temporário. Receba códigos de verificação e OTPs mantendo seu email principal longe do spam.",
      "quickLinks": "Links Rápidos",
      "instantInbox": "Caixa Instantânea",
      "company": "Empresa",
      "legal": "Legal",
      "privacyPolicy": "Política de Privacidade",
      "termsOfService": "Termos de Serviço",
      "disclaimer": "Aviso Legal",
      "allRightsReserved": "Todos os direitos reservados."
    },
    "a11y": {
      "skipToContent": "Pular para o conteúdo",
      "toggleTheme": "Alternar modo escuro",
      "toggleSound": "Ativar ou desativar o som das notificações",
      "toggleMenu": "Mostrar ou ocultar o menu de navegação",
      "dismissToast": "Dispensar notificação",
      "changeLanguage": "Mudar idioma, o atual é {lang}"
    },
    "common": {
      "onThisPage": "Nesta página",
      "close": "Fechar",
      "home": "Início",
      "blog": "Blog",
      "backToHome": "Voltar ao Início",
      "allArticles": "Todos os Artigos",
      "readArticle": "Ler artigo",
      "all": "Todos",
      "guide": "Guia",
      "architecture": "Arquitetura",
      "privacy": "Privacidade",
      "security": "Segurança",
      "copy": "Copiar",
      "copied": "Copiado!",
      "copyEmailToast": "{email} copiado para a área de transferência!",
      "copyFailedToast": "Falha ao copiar endereço",
      "pageNotFoundBadge": "Página Não Encontrada",
      "pageNotFoundTitle": "Ops, esta página",
      "pageExpired": "expirou.",
      "pageNotFoundDesc": "Assim como um e-mail temporário, esta página desapareceu. Mas não se preocupe — sua caixa de entrada descartável ainda está esperando por você.",
      "goToHomepage": "Ir para a Página Inicial",
      "readOurBlog": "Ler Nosso Blog",
      "translationNotice": "Este artigo está atualmente em inglês. A tradução completa está em andamento."
    },
    "pages": {
      "about": {
        "title": "Sobre o TempoEmails — Missão de E-mail Temporário e Descartável Gratuito",
        "description": "Por que criamos o TempoEmails: um serviço de e-mail temporário rápido e gratuito com detecção de OTP, zero registros e proteção contra spam.",
        "heading": "Por Que Criamos o TempoEmails",
        "subheading": "E-mail temporário limpo, rápido e focado em privacidade que simplesmente funciona."
      },
      "contact": {
        "title": "Contato e Suporte do TempoEmails",
        "description": "Obtenha suporte para o TempoEmails, e-mail temporário gratuito, entregabilidade de domínios, API ou envie seu feedback.",
        "heading": "Contato e Suporte",
        "subheading": "Tem alguma dúvida, encontrou um erro ou precisa de ajuda? Fale conosco."
      },
      "blog": {
        "title": "Blog de Privacidade, Segurança e E-mail Temporário — TempoEmails",
        "description": "Guias especializados sobre e-mail temporário gratuito, códigos OTP, e-mail de 10 minutos e privacidade digital.",
        "heading": "Guias de Privacidade e Segurança",
        "subheading": "Dicas práticas para evitar spam, gerenciar contas online e proteger seu e-mail principal.",
        "faqHeading": "Perguntas frequentes",
        "relatedHeading": "Guias relacionados"
      },
      "privacy": {
        "title": "Política de Privacidade — TempoEmails",
        "description": "Política de privacidade do TempoEmails: zero registros, processamento efêmero em memória e conformidade com LGPD/GDPR.",
        "heading": "Política de Privacidade"
      },
      "terms": {
        "title": "Termos de Serviço — TempoEmails",
        "description": "Termos e condições de uso do TempoEmails para nosso serviço de e-mail temporário e descartável gratuito.",
        "heading": "Termos de Serviço"
      },
      "disclaimer": {
        "title": "Isenção de Responsabilidade — TempoEmails",
        "description": "Isenção de responsabilidade do TempoEmails: diretrizes de uso, limitações e avisos de segurança.",
        "heading": "Isenção de Responsabilidade"
      }
    }
  },
  "fr": {
    "meta": {
      "title": "Email Temporaire Gratuit — Générateur d’Email Jetable & Faux Email",
      "description": "Email temporaire jetable et gratuit. Recevez des codes de vérification OTP, des liens d’activation et des e-mails instantanés sans spam ni inscription.",
      "keywords": "email temporaire, mail temporaire, email jetable, faux email, generateur email temporaire, 10 minute mail, recevoir otp en ligne, email temporaire gratuit"
    },
    "nav": {
      "features": "Fonctionnalités",
      "howItWorks": "Comment ça marche",
      "faq": "FAQ",
      "blog": "Blog",
      "about": "À propos",
      "contact": "Contact",
      "history": "Historique",
      "selectLanguage": "Langue"
    },
    "hero": {
      "chips": ["Sans inscription","Détection auto des OTP","Zéro journal"],
      "worksWith": "Compatible avec",
      "badge": "Email Temporaire Instantané & Boîte Jetable 10 Minutes",
      "titleLine1": "Email Temporaire Gratuit.",
      "titleLine2": "Email Jetable en Quelques Secondes.",
      "subtitle": "Générez une adresse email temporaire jetable en un clic. Recevez vos codes de vérification OTP et liens d’activation sans spam, sans journaux et sans inscription."
    },
    "addressBar": {
      "tempEmailLabel": "Email Temporaire",
      "liveBadge": "Actif",
      "copyAddress": "Copier l’adresse",
      "copiedAddress": "Copié !",
      "refreshTooltip": "Actualiser les messages (Auto-actualisation toutes les 10s)",
      "customTooltip": "Créer un nom d’utilisateur personnalisé",
      "qrTooltip": "Afficher le QR Code pour mobile",
      "changeTooltip": "Générer un nouvel email aléatoire",
      "deleteTooltip": "Supprimer cette boîte",
      "accessTooltip": "Identifiants de la boîte de réception",
      "refreshLabel": "Actualiser",
      "customLabel": "Personnaliser",
      "qrLabel": "Code QR",
      "accessLabel": "Accès",
      "changeLabel": "Nouvel email",
      "deleteLabel": "Supprimer",
      "switchProviderTooltip": "Cliquez pour changer de fournisseur"
    },
    "inboxList": {
      "title": "Boîte de réception",
      "emptyTitle": "En attente d’e-mails entrants...",
      "emptyDesc": "Copiez votre adresse temporaire ci-dessus et collez-la dans n’importe quel formulaire. Les messages reçus apparaîtront ici automatiquement.",
      "autoChecking": "Vérification automatique active",
      "clickToView": "Cliquez pour afficher les détails du message...",
      "unreadBadge": "Non lu",
      "unreadEmail": "e-mail non lu",
      "unreadEmails": "e-mails non lus",
      "totalEmail": "e-mail",
      "totalEmails": "e-mails"
    },
    "emailDetail": {
      "noMessageTitle": "Aucun message sélectionné",
      "noMessageDesc": "Sélectionnez un email dans votre boîte pour le lire et copier les codes de vérification.",
      "loading": "Chargement de l’e-mail...",
      "backToInbox": "Retour à la boîte",
      "htmlTab": "HTML",
      "textTab": "Texte",
      "downloadTooltip": "Télécharger l’e-mail",
      "deleteTooltip": "Supprimer ce message",
      "otpDetected": "Code de Vérification Détecté",
      "copyOtp": "Copier le Code",
      "copiedOtp": "Copié !",
      "verifyLink": "Lien :",
      "openLink": "Ouvrir le lien",
      "toLabel": "À :",
      "noSubject": "(Sans objet)",
      "defaultSender": "Expéditeur",
      "defaultDate": "Date"
    },
    "customModal": {
      "title": "Adresse Email Personnalisée",
      "desc": "Choisissez votre identifiant et votre domaine pour créer une boîte temporaire sur mesure.",
      "usernameLabel": "Identifiant",
      "usernamePlaceholder": "ex. julien.inscription",
      "domainLabel": "Domaine",
      "loadingDomains": "Chargement des domaines...",
      "preview": "Aperçu :",
      "cancel": "Annuler",
      "create": "Créer la boîte",
      "domainsFailed": "Impossible de charger les domaines — veuillez réessayer"
    },
    "accessModal": {
      "title": "Connexion à la boîte",
      "credentialsDesc": "Conservez ce mot de passe. Il vous permet de rouvrir cette boîte plus tard, depuis n'importe quel navigateur ou appareil.",
      "addressLabel": "Adresse e-mail",
      "passwordLabel": "Mot de passe",
      "showPassword": "Afficher le mot de passe",
      "hidePassword": "Masquer le mot de passe",
      "copyPassword": "Copier le mot de passe",
      "copyLogin": "Copier l'adresse et le mot de passe",
      "noPasswordPublic": "Les boîtes {provider} n'ont pas de mot de passe : toute personne connaissant l'adresse peut les ouvrir.",
      "noPasswordExpiring": "Les boîtes TempMail.lol n'ont pas de mot de passe et expirent au bout d'environ une heure.",
      "noPasswordMock": "Cette boîte simulée n'a pas de mot de passe.",
      "loginTitle": "Ouvrir une boîte existante",
      "loginDesc": "Fonctionne avec les adresses Mail.tm et Mail.gw.",
      "loginButton": "Ouvrir la boîte"
    },
    "qrModal": {
      "title": "QR Code Mobile",
      "desc": "Scannez ce code avec votre smartphone pour ouvrir cette boîte temporaire directement sur mobile.",
      "copyLink": "Copier le lien",
      "copiedLink": "Lien Copié !",
      "close": "Fermer",
      "unavailable": "QR code indisponible — vérifiez votre connexion et réessayez."
    },
    "historyDrawer": {
      "title": "Boîtes Récentes",
      "desc": "Basculez entre vos adresses temporaires précédentes stockées dans votre navigateur.",
      "activeInbox": "Actif",
      "savedStorage": "Stocké Localement",
      "emptyTitle": "Aucune boîte enregistrée",
      "emptyDesc": "Vos adresses récentes apparaîtront ici dès que vous créerez ou changerez de boîte.",
      "clearAll": "Effacer l’historique",
      "removeInbox": "Retirer de l’historique",
      "confirmClearTitle": "Effacer l’historique",
      "confirmClearDesc": "Voulez-vous vraiment supprimer toutes les adresses enregistrées dans le navigateur ?"
    },
    "confirmModal": {
      "cancel": "Annuler",
      "confirm": "Confirmer",
      "deleteInboxTitle": "Supprimer la Boîte",
      "deleteInboxDesc": "Voulez-vous supprimer définitivement cette adresse temporaire et tous ses messages ?",
      "changeAddressTitle": "Changer d’Adresse",
      "changeAddressDesc": "Générer une nouvelle adresse aléatoire ? Les messages actuels resteront dans votre historique.",
      "deleteMessageTitle": "Supprimer le Message",
      "deleteMessageDesc": "Voulez-vous supprimer définitivement ce message ?"
    },
    "cookieConsent": {
      "title": "Préférences de Cookies",
      "desc": "Nous utilisons des cookies pour conserver vos réglages (thème sombre, boîtes récentes) et analyser le trafic. Voir notre",
      "privacyPolicy": "Politique de Confidentialité",
      "essentialOnly": "Essentiels Seuls",
      "acceptAll": "Tout Accepter"
    },
    "toasts": {
      "soundEnabled": "Notifications sonores activées",
      "soundMuted": "Notifications sonores désactivées",
      "initFailed": "Échec de l’initialisation. Veuillez actualiser.",
      "messageDeleted": "Message supprimé",
      "switchedTo": "Basculé sur {address}",
      "generatedNew": "Nouvelle adresse temporaire générée !",
      "mailboxDeleted": "Boîte supprimée et nouvelle adresse créée !",
      "customCreated": "Boîte personnalisée créée : {address}",
      "customFailed": "Échec de la création. Essayez un autre identifiant.",
      "providerSwitched": "Fournisseur actif basculé sur {provider}",
      "historyCleared": "Historique des boîtes effacé.",
      "copiedToClipboard": "Copié dans le presse-papiers !",
      "copyFailed": "Échec de la copie",
      "otpCopied": "Code de vérification {code} copié !",
      "loadMessageFailed": "Impossible de charger le contenu du message.",
      "mockFallback": "Tous les fournisseurs de messagerie sont inaccessibles pour le moment — cette boîte est simulée et ne peut pas recevoir de vrais e-mails.",
      "legacyInboxGone": "Votre ancienne boîte 1secmail ({address}) n’est plus prise en charge — une nouvelle boîte a été créée.",
      "passwordCopied": "Mot de passe copié",
      "loginCopied": "Adresse et mot de passe copiés",
      "loginFailed": "Adresse ou mot de passe incorrect.",
      "loginUnavailable": "Impossible de joindre le fournisseur de messagerie. Réessayez dans un instant.",
      "inboxAuthLost": "{address} n'accepte plus son mot de passe — le fournisseur l'a peut-être supprimée.",
      "inboxExpired": "{address} a expiré. Générez une nouvelle adresse pour continuer à recevoir des e-mails."
    },
    "relativeTime": {
      "justNow": "À l’instant",
      "yesterday": "Hier",
      "secondsAgo": "il y a {n}s",
      "minutesAgo": "il y a {n}m",
      "hoursAgo": "il y a {n}h",
      "daysAgo": "il y a {n}j"
    },
    "useCases": {
      "badge": "Services Populaires",
      "title": "Fonctionne Partout Sans Encombre",
      "subtitle": "Utilisez TempoEmails pour vos validations rapides sans risquer de divulguer votre adresse personnelle.",
      "items": [
        {
          "category": "Essais IA & Logiciels",
          "badge": "ChatGPT & SaaS",
          "title": "E-mail Temporaire pour ChatGPT et Essais Gratuits",
          "description": "Inscrivez-vous aux outils d'IA, API et essais SaaS gratuits sans exposer votre adresse principale aux listes de diffusion.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "Essais SaaS"
          ]
        },
        {
          "category": "Jeux & Communautés",
          "badge": "Discord & Steam",
          "title": "E-mail Jetable pour Discord et Jeux Vidéo",
          "description": "Créez des profils secondaires, rejoignez des serveurs Discord, vérifiez vos comptes Steam et activez des clés bêta facilement.",
          "tags": [
            "Vérification Discord",
            "Comptes Steam",
            "Alertes Twitch",
            "Epic Games"
          ]
        },
        {
          "category": "Réseaux Sociaux & Messages",
          "badge": "Telegram & Réseaux",
          "title": "E-mail Éphémère pour Réseaux Sociaux et Applis",
          "description": "Gardez votre vrai e-mail anonyme lors de vos inscriptions sur les forums, Telegram, Reddit ou pour télécharger des livres blancs.",
          "tags": [
            "Inscriptions Telegram",
            "Profils Reddit",
            "Forums",
            "Téléchargements"
          ]
        },
        {
          "category": "Développement & Tests QA",
          "badge": "API E-mail & QA",
          "title": "Générateur de Faux E-mails pour Tests QA",
          "description": "Testez les parcours d'inscription, vérifiez la réception des e-mails transactionnels et simulez plusieurs comptes en parallèle.",
          "tags": [
            "QA Inscription",
            "Tests Webhooks",
            "Vérification Auth",
            "Simulation Multi-Boîtes"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Détection Automatique de Codes",
      "title": "Recevez instantanément vos codes OTP sur un email jetable.",
      "subtitle": "TempoEmails détecte automatiquement les codes de vérification de 4 à 8 chiffres et les liens d’activation dès leur réception.",
      "tag1": "Codes OTP de 4 à 8 Chiffres",
      "tag2": "Liens d’Activation en 1 Clic",
      "tag3": "Copie Immédiate",
      "previewBadge": "Aperçu Boîte",
      "previewDetected": "Détecté Automatiquement",
      "previewCode": "Code de Vérification",
      "previewCopy": "Copier",
      "previewFrom": "De : Équipe Sécurité",
      "previewSubj": "Votre code de vérification unique est 593821",
      "previewTime": "À l'instant"
    },
    "features": {
      "badge": "Points Forts",
      "title": "Conçu pour la Rapidité et la Protection Totale",
      "subtitle": "Tous les avantages d’un service d’email jetable moderne, ultra rapide et sans aucun traçage.",
      "items": [
        {
          "title": "Générateur d'E-mail Temporaire Gratuit",
          "description": "Protégez votre boîte principale contre les newsletters, les courtiers de données, les pièges à spam et les courriels indésirables."
        },
        {
          "title": "Extracteur Automatique d'OTP et de Codes",
          "description": "Les e-mails entrants sont analysés automatiquement pour mettre en évidence les codes à 4-8 chiffres et les liens magiques en 1 clic."
        },
        {
          "title": "E-mail 100% Anonyme — Zéro Journal",
          "description": "Aucune inscription, aucun traçage personnel et aucune base de données centrale. Vos messages s'effacent définitivement."
        },
        {
          "title": "Transfert QR du PC vers Mobile",
          "description": "Scannez le code QR à l'écran avec l'appareil photo de votre smartphone pour accéder instantanément à votre boîte jetable."
        },
        {
          "title": "Boîte de Réception avec Rafraîchissement en Direct",
          "description": "Les nouveaux e-mails arrivent en temps réel grâce à une vérification automatique toutes les 10 secondes et au push SSE."
        },
        {
          "title": "Sélecteur Multi-Boîtes de 10 Minutes",
          "description": "Gérez jusqu'à 8 boîtes temporaires récentes simultanément depuis votre tiroir d'historique sans perdre vos messages en attente."
        }
      ]
    },
    "howItWorks": {
      "badge": "Guide en 4 Étapes",
      "title": "Comment Fonctionne l’Email Temporaire en 4 Étapes",
      "subtitle": "Prêt et vérifié en quelques secondes, sans inscription complexe ni données personnelles.",
      "step1Title": "1. Copiez votre Adresse Gratuite",
      "step1Desc": "Nous générons instantanément une boîte jetable fonctionnelle pour recevoir des messages.",
      "step2Title": "2. Utilisez-la pour vos Inscriptions",
      "step2Desc": "Collez l’adresse sur n’importe quel site, forum ou essai gratuit demandant une confirmation.",
      "step3Title": "3. Détection Automatique d’OTP",
      "step3Desc": "Vos emails s’affichent en direct et vos codes de confirmation sont mis en évidence.",
      "step4Title": "4. Détruisez et Oubliez",
      "step4Desc": "Fermez l’onglet à la fin. Aucun spam ni publicité dans votre véritable messagerie."
    },
    "faq": {
      "badge": "Questions Fréquentes",
      "title": "Foire Aux Questions",
      "subtitle": "Tout ce qu’il faut savoir sur l’email jetable, la réception d’OTP et votre vie privée.",
      "q1": "Qu’est-ce qu’un email temporaire et comment fonctionne-t-il ?",
      "a1": "Un email temporaire (ou boîte jetable de 10 minutes) fournit une adresse instantanée pour recevoir des confirmations sans exposer votre adresse personnelle.",
      "q2": "Puis-je utiliser TempoEmails pour recevoir des codes OTP ?",
      "a2": "Oui ! TempoEmails extrait automatiquement les codes OTP et liens magiques avec un bouton de copie en 1 clic.",
      "q3": "Est-il compatible avec Discord, ChatGPT, Telegram ou Steam ?",
      "a3": "Oui. Si un domaine est filtré par un site, cliquez simplement sur \"Changer\" pour utiliser un autre domaine actif.",
      "q4": "Puis-je envoyer des e-mails avec TempoEmails ?",
      "a4": "Non. Le service est strictement en réception pour empêcher tout abus de spam et assurer une délivrabilité maximale.",
      "q5": "Puis-je choisir un identifiant personnalisé ?",
      "a5": "Oui. Cliquez sur \"Personnalisé\" pour choisir votre nom et votre domaine préféré.",
      "q6": "Est-ce totalement gratuit et sans inscription ?",
      "a6": "Oui, 100 % gratuit, sans mot de passe, sans formulaires et sans enregistrement de journaux personnels."
    },
    "cta": {
      "title": "Votre boîte est déjà active.",
      "subtitle": "Ni compte ni mot de passe : copiez l’adresse et c’est parti.",
      "button": "Ouvrir ma boîte"
    },
    "footer": {
      "brandDesc": "Générateur d’email temporaire et jetable gratuit. Recevez vos codes OTP et liens de confirmation en protégeant votre boîte personnelle.",
      "quickLinks": "Liens Rapides",
      "instantInbox": "Boîte Instantanée",
      "company": "Entreprise",
      "legal": "Légal",
      "privacyPolicy": "Politique de Confidentialité",
      "termsOfService": "Conditions d’Utilisation",
      "disclaimer": "Avertissement Légal",
      "allRightsReserved": "Tous droits réservés."
    },
    "a11y": {
      "skipToContent": "Aller au contenu",
      "toggleTheme": "Basculer le mode sombre",
      "toggleSound": "Activer ou désactiver le son des notifications",
      "toggleMenu": "Afficher ou masquer le menu de navigation",
      "dismissToast": "Fermer la notification",
      "changeLanguage": "Changer de langue, langue actuelle : {lang}"
    },
    "common": {
      "onThisPage": "Sur cette page",
      "close": "Fermer",
      "home": "Accueil",
      "blog": "Blog",
      "backToHome": "Retour à l'Accueil",
      "allArticles": "Tous les Articles",
      "readArticle": "Lire l'article",
      "all": "Tous",
      "guide": "Guide",
      "architecture": "Architecture",
      "privacy": "Confidentialité",
      "security": "Sécurité",
      "copy": "Copier",
      "copied": "Copié !",
      "copyEmailToast": "{email} copié dans le presse-papiers !",
      "copyFailedToast": "Échec de la copie de l'adresse",
      "pageNotFoundBadge": "Page Introuvable",
      "pageNotFoundTitle": "Oups, cette page a",
      "pageExpired": "expiré.",
      "pageNotFoundDesc": "Tout comme un e-mail temporaire, cette page a disparu. Ne vous inquiétez pas — votre boîte de réception jetable vous attend.",
      "goToHomepage": "Retourner à l'Accueil",
      "readOurBlog": "Lire Notre Blog",
      "translationNotice": "Cet article est actuellement affiché en anglais. La traduction complète est en cours."
    },
    "pages": {
      "about": {
        "title": "À Propos de TempoEmails — Notre Mission d'E-mail Temporaire Gratuit",
        "description": "Pourquoi nous avons créé TempoEmails : un service d'e-mail temporaire rapide, gratuit avec détection d'OTP et zéro journal.",
        "heading": "Pourquoi Nous Avons Créé TempoEmails",
        "subheading": "Un outil d'e-mail temporaire propre, rapide et respectueux de votre vie privée."
      },
      "contact": {
        "title": "Contact & Support TempoEmails",
        "description": "Contactez l'équipe TempoEmails pour une assistance, des questions sur la délivrabilité des domaines ou l'accès API.",
        "heading": "Contact & Assistance",
        "subheading": "Une question, un problème ou une suggestion ? Contactez-nous."
      },
      "blog": {
        "title": "Blog Confidentialité, Sécurité & E-mail Jetable — TempoEmails",
        "description": "Guides d'experts sur l'e-mail temporaire gratuit, les codes OTP, le mail 10 minutes et la protection de la vie privée.",
        "heading": "Guides Confidentialité & Sécurité",
        "subheading": "Conseils pratiques pour éviter le spam, gérer vos comptes en ligne et protéger votre adresse principale.",
        "faqHeading": "Questions fréquentes",
        "relatedHeading": "Guides associés"
      },
      "privacy": {
        "title": "Politique de Confidentialité — TempoEmails",
        "description": "Politique de confidentialité de TempoEmails : zéro journal, traitement éphémère en mémoire et conformité RGPD.",
        "heading": "Politique de Confidentialité"
      },
      "terms": {
        "title": "Conditions d'Utilisation — TempoEmails",
        "description": "Conditions d'utilisation du service d'e-mail jetable gratuit TempoEmails.",
        "heading": "Conditions d'Utilisation"
      },
      "disclaimer": {
        "title": "Avertissement Légal — TempoEmails",
        "description": "Avertissement légal TempoEmails : limites du service, règles d'usage équitable et conseils de sécurité.",
        "heading": "Avertissement Légal"
      }
    }
  },
  "de": {
    "meta": {
      "title": "Temporäre Email Kostenlos — Wegwerf-Email & Fake Mail Generator",
      "description": "Kostenlose temporäre Wegwerf-Email Adresse. Erhalte OTP-Bestätigungscodes, Aktivierungslinks und Nachrichten sofort ohne Spam und ohne Anmeldung.",
      "keywords": "temporäre email, wegwerf email, fake email, 10 minuten mail, wegwerfmail, temporäre mail, otp empfangen online, fake mail generator, kostenlose temporäre email"
    },
    "nav": {
      "features": "Funktionen",
      "howItWorks": "So Funktioniert Es",
      "faq": "FAQ",
      "blog": "Blog",
      "about": "Über uns",
      "contact": "Kontakt",
      "history": "Verlauf",
      "selectLanguage": "Sprache"
    },
    "hero": {
      "chips": ["Ohne Anmeldung","Automatische OTP-Erkennung","Keine Logs"],
      "worksWith": "Funktioniert mit",
      "badge": "Sofortige Wegwerf-Email & 10-Minuten-Postfach",
      "titleLine1": "Kostenlose Temporäre Email.",
      "titleLine2": "Wegwerf-Email in Sekunden.",
      "subtitle": "Erstelle mit einem Klick eine anonyme Wegwerf-Email Adresse. Empfange Bestätigungscodes, OTPs und Aktivierungslinks ohne Spam, ohne Logs und ohne Registrierung."
    },
    "addressBar": {
      "tempEmailLabel": "Temporäre Email",
      "liveBadge": "Aktiv",
      "copyAddress": "Adresse Kopieren",
      "copiedAddress": "Kopiert!",
      "refreshTooltip": "Nachrichten aktualisieren (Auto-Refresh alle 10s)",
      "customTooltip": "Wunschnamen erstellen",
      "qrTooltip": "QR-Code für Smartphone anzeigen",
      "changeTooltip": "Neue Zufallsadresse generieren",
      "deleteTooltip": "Dieses Postfach löschen",
      "accessTooltip": "Postfach-Login & Passwort",
      "refreshLabel": "Neu laden",
      "customLabel": "Anpassen",
      "qrLabel": "QR-Code",
      "accessLabel": "Zugang",
      "changeLabel": "Neue Adresse",
      "deleteLabel": "Löschen",
      "switchProviderTooltip": "Klicken, um den Provider zu wechseln"
    },
    "inboxList": {
      "title": "Posteingang",
      "emptyTitle": "Warte auf eingehende Emails...",
      "emptyDesc": "Kopiere deine obige Wegwerfadresse und füge sie in ein beliebiges Registrierungsformular ein. Neue Nachrichten erscheinen hier automatisch.",
      "autoChecking": "Automatische Prüfung aktiv",
      "clickToView": "Klicken, um E-Mail-Details anzuzeigen...",
      "unreadBadge": "Ungelesen",
      "unreadEmail": "ungelesene E-Mail",
      "unreadEmails": "ungelesene E-Mails",
      "totalEmail": "E-Mail",
      "totalEmails": "E-Mails"
    },
    "emailDetail": {
      "noMessageTitle": "Keine Nachricht ausgewählt",
      "noMessageDesc": "Wähle eine Email aus deinem Posteingang aus, um sie zu lesen und Bestätigungscodes zu kopieren.",
      "loading": "Email wird geladen...",
      "backToInbox": "Zurück zum Postfach",
      "htmlTab": "HTML",
      "textTab": "Text",
      "downloadTooltip": "Email herunterladen",
      "deleteTooltip": "Nachricht löschen",
      "otpDetected": "Bestätigungscode Erkannt",
      "copyOtp": "Code Kopieren",
      "copiedOtp": "Kopiert!",
      "verifyLink": "Link:",
      "openLink": "Link öffnen",
      "toLabel": "An:",
      "noSubject": "(Kein Betreff)",
      "defaultSender": "Absender",
      "defaultDate": "Datum"
    },
    "customModal": {
      "title": "Benutzerdefinierte Email",
      "desc": "Wähle deinen Wunschnamen und eine Domain für dein individuelles temporäres Postfach.",
      "usernameLabel": "Benutzername",
      "usernamePlaceholder": "z.B. max.anmeldung",
      "domainLabel": "Domain",
      "loadingDomains": "Lade Domains...",
      "preview": "Vorschau:",
      "cancel": "Abbrechen",
      "create": "Postfach Erstellen",
      "domainsFailed": "Domains konnten nicht geladen werden — bitte erneut versuchen"
    },
    "accessModal": {
      "title": "Postfach-Login",
      "credentialsDesc": "Speichere dieses Passwort. Damit kannst du dieses Postfach später in jedem Browser und auf jedem Gerät wieder öffnen.",
      "addressLabel": "E-Mail-Adresse",
      "passwordLabel": "Passwort",
      "showPassword": "Passwort anzeigen",
      "hidePassword": "Passwort verbergen",
      "copyPassword": "Passwort kopieren",
      "copyLogin": "Adresse & Passwort kopieren",
      "noPasswordPublic": "{provider}-Postfächer haben kein Passwort: Jeder, der die Adresse kennt, kann sie öffnen.",
      "noPasswordExpiring": "TempMail.lol-Postfächer haben kein Passwort und laufen nach etwa einer Stunde ab.",
      "noPasswordMock": "Dieses simulierte Postfach hat kein Passwort.",
      "loginTitle": "Bestehendes Postfach öffnen",
      "loginDesc": "Funktioniert mit Mail.tm- und Mail.gw-Adressen.",
      "loginButton": "Postfach öffnen"
    },
    "qrModal": {
      "title": "Smartphone QR-Code",
      "desc": "Scanne diesen Code mit der Handykamera, um diese temporäre Email sofort auf dem Smartphone zu nutzen.",
      "copyLink": "Link Kopieren",
      "copiedLink": "Link Kopiert!",
      "close": "Schließen",
      "unavailable": "QR-Code nicht verfügbar — bitte Verbindung prüfen und erneut versuchen."
    },
    "historyDrawer": {
      "title": "Letzte Postfächer",
      "desc": "Wechsle schnell zwischen früheren Adressen, die sicher in deinem Browser gespeichert sind.",
      "activeInbox": "Aktiv",
      "savedStorage": "Lokal Gespeichert",
      "emptyTitle": "Keine Postfächer gespeichert",
      "emptyDesc": "Wenn du Adressen erstellst oder wechselst, erscheinen sie hier in deinem Verlauf.",
      "clearAll": "Verlauf Löschen",
      "removeInbox": "Aus dem Verlauf entfernen",
      "confirmClearTitle": "Verlauf Löschen",
      "confirmClearDesc": "Möchtest du wirklich alle gespeicherten Adressen aus dem Browser entfernen?"
    },
    "confirmModal": {
      "cancel": "Abbrechen",
      "confirm": "Bestätigen",
      "deleteInboxTitle": "Postfach Löschen",
      "deleteInboxDesc": "Möchtest du diese temporäre Email und alle empfangenen Nachrichten unwiderruflich löschen?",
      "changeAddressTitle": "Adresse Wechseln",
      "changeAddressDesc": "Neue Zufallsadresse erstellen? Aktuelle Nachrichten bleiben in deinem Verlauf.",
      "deleteMessageTitle": "Nachricht Löschen",
      "deleteMessageDesc": "Möchtest du diese Nachricht dauerhaft löschen?"
    },
    "cookieConsent": {
      "title": "Cookie-Einstellungen",
      "desc": "Wir nutzen Cookies für deine Einstellungen (wie Dark Mode und letzte Postfächer) und Besucherstatistiken. Siehe unsere",
      "privacyPolicy": "Datenschutzerklärung",
      "essentialOnly": "Nur Notwendige",
      "acceptAll": "Alle Akzeptieren"
    },
    "toasts": {
      "soundEnabled": "Benachrichtigungston aktiviert",
      "soundMuted": "Benachrichtigungston stummgeschaltet",
      "initFailed": "Postfach konnte nicht initialisiert werden. Bitte neu laden.",
      "messageDeleted": "Nachricht gelöscht",
      "switchedTo": "Gewechselt zu {address}",
      "generatedNew": "Neues temporäres Postfach generiert!",
      "mailboxDeleted": "Postfach gelöscht und neue Adresse erstellt!",
      "customCreated": "Wunsch-Postfach erstellt: {address}",
      "customFailed": "Erstellung fehlgeschlagen. Bitte anderen Namen wählen.",
      "providerSwitched": "Aktiver Mail-Provider gewechselt zu {provider}",
      "historyCleared": "Verlauf gelöscht.",
      "copiedToClipboard": "In Zwischenablage kopiert!",
      "copyFailed": "Kopieren fehlgeschlagen",
      "otpCopied": "Bestätigungscode {code} kopiert!",
      "loadMessageFailed": "Nachrichteninhalt konnte nicht geladen werden.",
      "mockFallback": "Alle E-Mail-Anbieter sind derzeit nicht erreichbar — dieses Postfach ist simuliert und kann keine echten E-Mails empfangen.",
      "legacyInboxGone": "Ihr altes 1secmail-Postfach ({address}) wird nicht mehr unterstützt — es wurde ein neues Postfach erstellt.",
      "passwordCopied": "Passwort kopiert",
      "loginCopied": "Adresse und Passwort kopiert",
      "loginFailed": "Falsche Adresse oder falsches Passwort.",
      "loginUnavailable": "Der Mail-Anbieter ist nicht erreichbar. Versuche es gleich noch einmal.",
      "inboxAuthLost": "{address} akzeptiert das Passwort nicht mehr – der Anbieter hat das Postfach möglicherweise gelöscht.",
      "inboxExpired": "{address} ist abgelaufen. Erstelle eine neue Adresse, um weiter E-Mails zu empfangen."
    },
    "relativeTime": {
      "justNow": "Gerade eben",
      "yesterday": "Gestern",
      "secondsAgo": "vor {n}s",
      "minutesAgo": "vor {n}m",
      "hoursAgo": "vor {n}h",
      "daysAgo": "vor {n}T"
    },
    "useCases": {
      "badge": "Beliebte Dienste",
      "title": "Funktioniert Überall Einwandfrei",
      "subtitle": "Nutze TempoEmails für schnelle Verifizierungen ohne Weitergabe deiner privaten Email-Adresse.",
      "items": [
        {
          "category": "KI- & Software-Testphasen",
          "badge": "ChatGPT & SaaS",
          "title": "Wegwerf-E-Mail für ChatGPT & Testversionen",
          "description": "Melden Sie sich für KI-Tools, Entwickler-APIs und SaaS-Testversionen an, ohne Ihre Hauptadresse auf Werbelisten zu setzen.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "SaaS-Tests"
          ]
        },
        {
          "category": "Gaming & Communitys",
          "badge": "Discord & Steam",
          "title": "Temporäre E-Mail für Discord & Gaming",
          "description": "Erstellen Sie Zweitprofile, treten Sie Discord-Servern bei, verifizieren Sie Steam-Accounts und lösen Sie Beta-Keys ein.",
          "tags": [
            "Discord-Verifizierung",
            "Steam-Accounts",
            "Twitch-Alerts",
            "Epic Games"
          ]
        },
        {
          "category": "Soziale Medien & Messenger",
          "badge": "Telegram & Social",
          "title": "Brenner-E-Mail für soziale Netzwerke",
          "description": "Bleiben Sie anonym bei Anmeldungen auf Foren, Telegram, Reddit oder beim Herunterladen von Whitepapers und PDFs.",
          "tags": [
            "Telegram-Anmeldungen",
            "Reddit-Profile",
            "Foren",
            "Gated Downloads"
          ]
        },
        {
          "category": "Entwickler & QA-Tests",
          "badge": "E-Mail-API & QA",
          "title": "Fake-E-Mail-Generator für Software-QA",
          "description": "Testen Sie Registrierungsabläufe, prüfen Sie die Zustellung transaktionaler E-Mails und simulieren Sie Mehrfachnutzer.",
          "tags": [
            "Registrierungs-QA",
            "Webhook-Tests",
            "Auth-Prüfung",
            "Multi-Postfach-Sim"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Automatische Code-Erkennung",
      "title": "Erhalte OTP-Bestätigungscodes sofort in deiner Wegwerf-Email.",
      "subtitle": "TempoEmails durchsucht eingehende Emails automatisch nach 4- bis 8-stelligen OTP-Codes und Aktivierungslinks, sobald sie eintreffen.",
      "tag1": "4- bis 8-stellige OTPs",
      "tag2": "1-Klick Aktivierungslinks",
      "tag3": "Sofort Kopieren",
      "previewBadge": "Postfach Vorschau",
      "previewDetected": "Automatisch Erkannt",
      "previewCode": "Bestätigungscode",
      "previewCopy": "Kopieren",
      "previewFrom": "Von: Sicherheitsteam",
      "previewSubj": "Ihr einmaliger Bestätigungscode lautet 593821",
      "previewTime": "Gerade eben"
    },
    "features": {
      "badge": "Hauptmerkmale",
      "title": "Entwickelt für Maximale Geschwindigkeit & Absolute Privatsphäre",
      "subtitle": "Alles, was du von einem modernen Wegwerf-Email-Dienst erwartest: blitzschnell und ohne Tracking.",
      "items": [
        {
          "title": "Kostenloser Wegwerf-E-Mail-Generator",
          "description": "Schützen Sie Ihre Hauptadresse dauerhaft vor Newslettern, Datenhändlern, Spam-Fallen und unerwünschter Werbung."
        },
        {
          "title": "Automatische OTP- & Code-Erkennung",
          "description": "Eingehende E-Mails werden automatisch analysiert, um 4- bis 8-stellige Codes und Bestätigungslinks per 1-Klick hervorzuheben."
        },
        {
          "title": "100% Anonyme E-Mail — Keine Logs",
          "description": "Keine Registrierung, kein Tracking und keine zentrale Datenbank. Nach dem Löschen verschwinden alle Nachrichten unwiderruflich."
        },
        {
          "title": "Desktop-zu-Mobile QR-Übertragung",
          "description": "Scannen Sie den QR-Code auf Ihrem Bildschirm mit der Handykamera, um Ihre Wegwerfadresse sofort mobil zu öffnen."
        },
        {
          "title": "Automatisch aktualisierender Live-Posteingang",
          "description": "Neue E-Mails treffen dank 10-Sekunden-Intervall und SSE-Push in Echtzeit ein. Kein manuelles Aktualisieren nötig."
        },
        {
          "title": "Multi-Postfach 10-Minuten-Mail Switcher",
          "description": "Verwalten Sie bis zu 8 temporäre Adressen gleichzeitig im Verlauf, ohne ausstehende Bestätigungen zu verlieren."
        }
      ]
    },
    "howItWorks": {
      "badge": "4-Schritte-Anleitung",
      "title": "So Funktioniert Wegwerf-Email in 4 Schritten",
      "subtitle": "In Sekunden verifiziert. Ohne komplizierte Registrierung oder persönliche Angaben.",
      "step1Title": "1. Kostenlose Adresse Kopieren",
      "step1Desc": "Wir erstellen sofort eine aktive, empfangsbereite Wegwerf-Email-Adresse für dich.",
      "step2Title": "2. Bei Beliebigen Diensten Nutzen",
      "step2Desc": "Füge die Adresse bei Formularen, Probeabos oder Apps ein, die eine Email verlangen.",
      "step3Title": "3. Codes Automatisch Erkennen",
      "step3Desc": "Eingehende Emails landen in Echtzeit im Postfach, Codes werden direkt hervorgehoben.",
      "step4Title": "4. Schließen & Vergessen",
      "step4Desc": "Tab schließen oder Postfach löschen. Garantiert kein Spam in deinem echten Postfach."
    },
    "faq": {
      "badge": "Häufige Fragen",
      "title": "Häufig Gestellte Fragen",
      "subtitle": "Wissenswertes rund um Wegwerf-Emails, OTP-Erkennung und Datenschutz.",
      "q1": "Was ist eine Wegwerf-Email und wie funktioniert sie?",
      "a1": "Eine Wegwerf-Email (auch 10-Minuten-Mail genannt) liefert eine temporäre Adresse zum Empfang von Bestätigungen, ohne dein echtes Postfach preiszugeben.",
      "q2": "Kann ich TempoEmails für OTP-Codes nutzen?",
      "a2": "Ja! TempoEmails erkennt 4-8-stellige Codes und Bestätigungslinks automatisch mit 1-Klick-Kopierfunktion.",
      "q3": "Funktioniert es mit Discord, ChatGPT, Telegram oder Steam?",
      "a3": "Ja. Falls ein Dienst eine Domain blockiert, klicke einfach auf \"Ändern\", um eine andere Domain zu wählen.",
      "q4": "Kann ich von TempoEmails aus Emails versenden?",
      "a4": "Nein, TempoEmails ist ein reiner Empfangsdienst, um Missbrauch zu verhindern und maximale Zustellbarkeit zu sichern.",
      "q5": "Kann ich eine eigene Wunsch-Email wählen?",
      "a5": "Ja, klicke auf \"Anpassen\", um deinen Wunschnamen und eine verfügbare Domain auszuwählen.",
      "q6": "Ist TempoEmails wirklich kostenlos und ohne Registrierung?",
      "a6": "Ja, 100 % kostenlos, ohne Passwörter, ohne Anmeldung und ohne Speicherung persönlicher Daten."
    },
    "cta": {
      "title": "Ihr Postfach ist schon aktiv.",
      "subtitle": "Kein Konto, kein Passwort – Adresse kopieren und loslegen.",
      "button": "Mein Postfach öffnen"
    },
    "footer": {
      "brandDesc": "Kostenloser Generator für temporäre Wegwerf-Emails. Empfange Bestätigungscodes und halte dein privates Postfach sauber von Spam.",
      "quickLinks": "Direktlinks",
      "instantInbox": "Sofort-Postfach",
      "company": "Unternehmen",
      "legal": "Rechtliches",
      "privacyPolicy": "Datenschutz",
      "termsOfService": "Nutzungsbedingungen",
      "disclaimer": "Haftungsausschluss",
      "allRightsReserved": "Alle Rechte vorbehalten."
    },
    "a11y": {
      "skipToContent": "Zum Inhalt springen",
      "toggleTheme": "Dunkelmodus umschalten",
      "toggleSound": "Ton der Benachrichtigungen ein- oder ausschalten",
      "toggleMenu": "Navigationsmenü ein- oder ausblenden",
      "dismissToast": "Benachrichtigung schließen",
      "changeLanguage": "Sprache ändern, aktuell {lang}"
    },
    "common": {
      "onThisPage": "Auf dieser Seite",
      "close": "Schließen",
      "home": "Startseite",
      "blog": "Blog",
      "backToHome": "Zurück zur Startseite",
      "allArticles": "Alle Artikel",
      "readArticle": "Artikel lesen",
      "all": "Alle",
      "guide": "Leitfaden",
      "architecture": "Architektur",
      "privacy": "Datenschutz",
      "security": "Sicherheit",
      "copy": "Kopieren",
      "copied": "Kopiert!",
      "copyEmailToast": "{email} in die Zwischenablage kopiert!",
      "copyFailedToast": "Adresse konnte nicht kopiert werden",
      "pageNotFoundBadge": "Seite nicht gefunden",
      "pageNotFoundTitle": "Hoppla, diese Seite ist",
      "pageExpired": "abgelaufen.",
      "pageNotFoundDesc": "Genau wie eine temporäre E-Mail ist diese Seite verschwunden. Ihr Wegwerf-Posteingang wartet jedoch weiterhin auf Sie.",
      "goToHomepage": "Zur Startseite",
      "readOurBlog": "Blog lesen",
      "translationNotice": "Dieser Artikel wird derzeit auf Englisch angezeigt. Die vollständige Übersetzung ist in Arbeit."
    },
    "pages": {
      "about": {
        "title": "Über TempoEmails — Kostenlose Wegwerf-E-Mail Mission",
        "description": "Warum wir TempoEmails gebaut haben: ein schneller, kostenloser Wegwerf-E-Mail-Dienst mit OTP-Erkennung und ohne Logs.",
        "heading": "Warum wir TempoEmails entwickelt haben",
        "subheading": "Saubere, schnelle und datenschutzorientierte temporäre E-Mails, die einfach funktionieren."
      },
      "contact": {
        "title": "TempoEmails Kontakt & Support",
        "description": "Kontaktieren Sie das TempoEmails-Team bei Fragen zur Zustellbarkeit, Entwickler-APIs oder Feedback.",
        "heading": "Kontakt & Support",
        "subheading": "Haben Sie eine Frage, einen Fehler gefunden oder benötigen Sie Hilfe? Schreiben Sie uns."
      },
      "blog": {
        "title": "Datenschutz-, Sicherheits- & Wegwerf-E-Mail-Blog — TempoEmails",
        "description": "Expertenratgeber zu temporären E-Mails, OTP-Codes, 10-Minuten-Mail und digitaler Privatsphäre.",
        "heading": "Datenschutz- & Sicherheitsleitfäden",
        "subheading": "Praktische Anleitungen zur Vermeidung von Spam, Verwaltung von Online-Konten und Schutz Ihrer Hauptadresse.",
        "faqHeading": "Häufig gestellte Fragen",
        "relatedHeading": "Weitere Leitfäden"
      },
      "privacy": {
        "title": "Datenschutzerklärung — TempoEmails",
        "description": "TempoEmails Datenschutzerklärung: Keine Protokolle, flüchtige Speicherung im RAM und DSGVO-Konformität.",
        "heading": "Datenschutzerklärung"
      },
      "terms": {
        "title": "Nutzungsbedingungen — TempoEmails",
        "description": "Nutzungsbedingungen für den kostenlosen temporären E-Mail-Dienst TempoEmails.",
        "heading": "Nutzungsbedingungen"
      },
      "disclaimer": {
        "title": "Haftungsausschluss — TempoEmails",
        "description": "TempoEmails Haftungsausschluss: Nutzungsrichtlinien, Einschränkungen und Sicherheitshinweise.",
        "heading": "Haftungsausschluss"
      }
    }
  },
  "ja": {
    "meta": {
      "title": "無料捨てメアド — 使い捨てメールアドレス＆ワンタイムメール生成器",
      "description": "登録不要の無料使い捨てメールアドレス生成サービス。OTP認証コード、アクティベーションリンクを即時受信。スパムや個人情報の流出をゼロに。",
      "keywords": "捨てメアド, 使い捨てメール, 一時メール, ワンタイムメール, 捨てメール, フリーメール, otp受信, 捨て垢メール, 無料捨てメアド"
    },
    "nav": {
      "features": "特徴",
      "howItWorks": "使い方",
      "faq": "よくある質問",
      "blog": "ブログ",
      "about": "運営者情報",
      "contact": "お問い合わせ",
      "history": "履歴",
      "selectLanguage": "言語"
    },
    "hero": {
      "chips": ["登録不要","OTPを自動検出","ログなし"],
      "worksWith": "対応サービス",
      "badge": "即時発行の捨てメアド＆10分間使い捨てメール",
      "titleLine1": "無料捨てメアド。",
      "titleLine2": "数秒で使い捨てアドレス作成。",
      "subtitle": "ワンクリックで使い捨てメールアドレスを発行。スパムやログ、個人情報登録なしで認証コードや確認メールを即座に受信できます。"
    },
    "addressBar": {
      "tempEmailLabel": "一時メールアドレス",
      "liveBadge": "稼働中",
      "copyAddress": "アドレスをコピー",
      "copiedAddress": "コピー完了！",
      "refreshTooltip": "新着メール更新（10秒ごとに自動更新）",
      "customTooltip": "カスタム名を作成",
      "qrTooltip": "スマホ用QRコードを表示",
      "changeTooltip": "新しいランダムアドレスを作成",
      "deleteTooltip": "このメールボックスを削除",
      "accessTooltip": "受信箱のログイン情報とパスワード",
      "refreshLabel": "更新",
      "customLabel": "カスタム",
      "qrLabel": "QRコード",
      "accessLabel": "パスワード",
      "changeLabel": "再生成",
      "deleteLabel": "削除",
      "switchProviderTooltip": "クリックしてプロバイダを切り替え"
    },
    "inboxList": {
      "title": "受信トレイ",
      "emptyTitle": "メールの受信を待機中...",
      "emptyDesc": "上記のアドレスをコピーして登録フォームに入力してください。受信したメールはここに自動で表示されます。",
      "autoChecking": "自動受信チェック中",
      "clickToView": "クリックしてメール詳細を表示...",
      "unreadBadge": "未読",
      "unreadEmail": "件の未読メール",
      "unreadEmails": "件の未読メール",
      "totalEmail": "件のメール",
      "totalEmails": "件のメール"
    },
    "emailDetail": {
      "noMessageTitle": "メールが選択されていません",
      "noMessageDesc": "左のトレイからメールを選択すると内容の確認や認証コードのコピーができます。",
      "loading": "メールを読み込み中...",
      "backToInbox": "受信トレイに戻る",
      "htmlTab": "HTML",
      "textTab": "テキスト",
      "downloadTooltip": "メールを保存",
      "deleteTooltip": "メールを削除",
      "otpDetected": "認証コードを検出しました",
      "copyOtp": "コードをコピー",
      "copiedOtp": "コピー完了！",
      "verifyLink": "リンク：",
      "openLink": "リンクを開く",
      "toLabel": "宛先:",
      "noSubject": "(件名なし)",
      "defaultSender": "差出人",
      "defaultDate": "日時"
    },
    "customModal": {
      "title": "カスタムアドレス作成",
      "desc": "お好みのユーザー名と利用可能なドメインを選んでオリジナルの一時メールを作成できます。",
      "usernameLabel": "ユーザー名",
      "usernamePlaceholder": "例: taro.signup",
      "domainLabel": "ドメイン",
      "loadingDomains": "ドメインを読み込み中...",
      "preview": "プレビュー：",
      "cancel": "キャンセル",
      "create": "メールボックスを作成",
      "domainsFailed": "ドメインを読み込めませんでした。再試行してください"
    },
    "accessModal": {
      "title": "受信箱ログイン",
      "credentialsDesc": "このパスワードを保存してください。後から、どのブラウザや端末でもこの受信箱を開き直せます。",
      "addressLabel": "メールアドレス",
      "passwordLabel": "パスワード",
      "showPassword": "パスワードを表示",
      "hidePassword": "パスワードを隠す",
      "copyPassword": "パスワードをコピー",
      "copyLogin": "アドレスとパスワードをコピー",
      "noPasswordPublic": "{provider} の受信箱にはパスワードがありません。アドレスを知っていれば誰でも開けます。",
      "noPasswordExpiring": "TempMail.lol の受信箱にはパスワードがなく、約1時間で期限切れになります。",
      "noPasswordMock": "このシミュレーション受信箱にはパスワードがありません。",
      "loginTitle": "既存の受信箱を開く",
      "loginDesc": "Mail.tm と Mail.gw のアドレスで使えます。",
      "loginButton": "受信箱を開く"
    },
    "qrModal": {
      "title": "スマホ用QRコード",
      "desc": "スマホのカメラでスキャンすれば、スマートフォンでも同じ捨てメアドをすぐに使えます。",
      "copyLink": "リンクをコピー",
      "copiedLink": "コピーしました！",
      "close": "閉じる",
      "unavailable": "QRコードを生成できません。接続を確認して再試行してください。"
    },
    "historyDrawer": {
      "title": "最近のアドレス履歴",
      "desc": "ブラウザに一時保存された過去の捨てメアドをすばやく切り替えることができます。",
      "activeInbox": "現在使用中",
      "savedStorage": "ローカル保存済み",
      "emptyTitle": "履歴はありません",
      "emptyDesc": "アドレスを作成または切り替えると、ここに履歴が表示されます。",
      "clearAll": "履歴を全消去",
      "removeInbox": "履歴から削除",
      "confirmClearTitle": "履歴の消去",
      "confirmClearDesc": "ブラウザに保存されているすべてのアドレス履歴を削除してもよろしいですか？"
    },
    "confirmModal": {
      "cancel": "キャンセル",
      "confirm": "実行する",
      "deleteInboxTitle": "メールボックスの削除",
      "deleteInboxDesc": "このメールアドレスとすべての受信メッセージを完全に破棄しますか？",
      "changeAddressTitle": "アドレスの変更",
      "changeAddressDesc": "新しいランダムアドレスを作成しますか？現在のメールは履歴に残ります。",
      "deleteMessageTitle": "メールの削除",
      "deleteMessageDesc": "このメールを完全に削除してもよろしいですか？"
    },
    "cookieConsent": {
      "title": "Cookie の設定",
      "desc": "ダークモードやアドレス履歴の保持、アクセス解析のために Cookie を使用しています。詳しくは",
      "privacyPolicy": "プライバシーポリシー",
      "essentialOnly": "必須のみ",
      "acceptAll": "すべて同意"
    },
    "toasts": {
      "soundEnabled": "通知音をオンにしました",
      "soundMuted": "通知音をオフにしました",
      "initFailed": "初期化に失敗しました。ページを再読み込みしてください。",
      "messageDeleted": "メールを削除しました",
      "switchedTo": "切り替えました: {address}",
      "generatedNew": "新しい捨てメアドを作成しました！",
      "mailboxDeleted": "アドレスを破棄し、新しいアドレスを作成しました！",
      "customCreated": "カスタムアドレスを作成しました: {address}",
      "customFailed": "作成に失敗しました。別のユーザー名をお試しください。",
      "providerSwitched": "プロバイダを切り替えました: {provider}",
      "historyCleared": "アドレス履歴を削除しました。",
      "copiedToClipboard": "クリップボードにコピーしました！",
      "copyFailed": "コピーに失敗しました",
      "otpCopied": "認証コード {code} をコピーしました！",
      "loadMessageFailed": "メール内容の読み込みに失敗しました。",
      "mockFallback": "現在すべてのメールプロバイダーに接続できません。これはシミュレーション受信箱のため、実際のメールは受信できません。",
      "legacyInboxGone": "以前の 1secmail 受信箱（{address}）はサポート対象外のため、新しい受信箱を作成しました。",
      "passwordCopied": "パスワードをコピーしました",
      "loginCopied": "アドレスとパスワードをコピーしました",
      "loginFailed": "アドレスまたはパスワードが正しくありません。",
      "loginUnavailable": "メールプロバイダーに接続できません。しばらくしてからもう一度お試しください。",
      "inboxAuthLost": "{address} はパスワードを受け付けなくなりました。プロバイダーによって削除された可能性があります。",
      "inboxExpired": "{address} は期限切れです。メールを受信し続けるには新しいアドレスを作成してください。"
    },
    "relativeTime": {
      "justNow": "たった今",
      "yesterday": "昨日",
      "secondsAgo": "{n}秒前",
      "minutesAgo": "{n}分前",
      "hoursAgo": "{n}時間前",
      "daysAgo": "{n}日前"
    },
    "useCases": {
      "badge": "対応サービス",
      "title": "さまざまなWebサービスで安心・快適に利用可能",
      "subtitle": "本物のアドレスを教えたくない会員登録やアプリの体験利用に最適です。",
      "items": [
        {
          "category": "AI & ソフトウェアお試し",
          "badge": "ChatGPT & SaaS",
          "title": "ChatGPTや無料体験向けの捨てメアド",
          "description": "本命アドレスを広告リストに晒すことなく、AIツールや開発者API、SaaSの無料トライアルに登録できます。",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "SaaS 無料体験"
          ]
        },
        {
          "category": "ゲーム & コミュニティ",
          "badge": "Discord & Steam",
          "title": "Discordやゲーム向け使い捨てメール",
          "description": "サブアカの作成、Discordサーバーへの参加、Steamアカウントの認証、ベータキーの受け取りが簡単に行えます。",
          "tags": [
            "Discord認証",
            "Steamアカウント",
            "Twitch通知",
            "Epic Games"
          ]
        },
        {
          "category": "SNS & メッセージアプリ",
          "badge": "Telegram & SNS",
          "title": "SNSやアプリ用の匿名バーナーメール",
          "description": "SNS、掲示板、Telegram、Redditへの登録や資料ダウンロード時に本名アドレスの匿名性を保ちます。",
          "tags": [
            "Telegram登録",
            "Redditプロファイル",
            "掲示板登録",
            "資料ダウンロード"
          ]
        },
        {
          "category": "開発者 & QAテスト",
          "badge": "メールAPI & QA",
          "title": "ソフトウェアQA向けテスト用メール生成",
          "description": "会員登録フローのテスト、トランザクションメールの到達確認、パスワード再設定テストをマルチアカウントで実施。",
          "tags": [
            "登録フローQA",
            "Webhookテスト",
            "Auth認証",
            "複数受信箱シミュレーション"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "自動認証コード解析",
      "title": "届いたメールの認証コードを瞬時に抽出。",
      "subtitle": "TempoEmailsはメールを受信した瞬間に4〜8桁のOTPコードや有効化リンクを自動解析し、ワンクリックでコピーできるように表示します。",
      "tag1": "4〜8桁の確認コード",
      "tag2": "1クリック認証リンク",
      "tag3": "ワンクリックコピー",
      "previewBadge": "受信プレビュー",
      "previewDetected": "自動検出完了",
      "previewCode": "認証コード",
      "previewCopy": "コピー",
      "previewFrom": "差出人: セキュリティチーム",
      "previewSubj": "ワンタイム認証コードは 593821 です",
      "previewTime": "たった今"
    },
    "features": {
      "badge": "主な機能",
      "title": "超高速な受信スピードと徹底したプライバシー保護",
      "subtitle": "トラッキングなし、登録なし。最もシンプルで使いやすい現代的な使い捨てメールサービス。",
      "items": [
        {
          "title": "無料の使い捨て捨てメアド生成",
          "description": "メルマガ、データブローカー、スパムトラップからあなたの本命アドレスを永久に保護します。"
        },
        {
          "title": "自動OTP・認証コード抽出",
          "description": "届いたメールを自動解析し、4〜8桁の認証コードやワンクリックリンクを瞬時に強調表示します。"
        },
        {
          "title": "100% 匿名・完全ログゼロ",
          "description": "登録不要、追跡なし、中央データベースなし。受信トレイを削除するとメールは完全に消去されます。"
        },
        {
          "title": "PCからスマホへのQR転送",
          "description": "画面のQRコードをスマホカメラで読み取るだけで、モバイルから即座に捨てメアドを利用可能です。"
        },
        {
          "title": "自動更新ライブ受信トレイ",
          "description": "10秒ごとの自動更新とSSEプッシュ技術により、新着メールがリアルタイムに届きます。手動更新は不要です。"
        },
        {
          "title": "マルチ受信箱 10分メール切替",
          "description": "履歴ドロワーから最大8件の最近の受信トレイを同時に管理でき、大切な確認メールを見失いません。"
        }
      ]
    },
    "howItWorks": {
      "badge": "簡単4ステップ",
      "title": "捨てメアドの使い方（4ステップ）",
      "subtitle": "会員登録や個人情報の入力なしで、すぐに認証コードを受け取れます。",
      "step1Title": "1. 無料アドレスをコピー",
      "step1Desc": "ページを開くだけで、受信可能な一時メールアドレスがすぐに発行されます。",
      "step2Title": "2. 登録フォームに入力",
      "step2Desc": "アプリやお試し利用など、メール確認が必要なフォームに貼り付けます。",
      "step3Title": "3. 認証コードを自動検出",
      "step3Desc": "メールがリアルタイムで届き、認証コードが大きく分かりやすく表示されます。",
      "step4Title": "4. 使い終わったら閉じるだけ",
      "step4Desc": "確認が終わればタブを閉じるだけ。本物のアドレスにスパムが届く心配は一切ありません。"
    },
    "faq": {
      "badge": "FAQ",
      "title": "よくある質問",
      "subtitle": "捨てメアドの使い方、OTPコードの受信、セキュリティについての解説。",
      "q1": "捨てメアド（使い捨てメール）とは何ですか？",
      "a1": "個人の本名アドレスを公開することなく、確認メールや認証コードを受信できる一時的な無料メールサービスです。",
      "q2": "会員登録時の確認コード受信に使えますか？",
      "a2": "はい！TempoEmailsは4〜8桁の確認コードを自動で認識し、ワンタップでコピーできます。",
      "q3": "DiscordやChatGPT、Steamなどでも使えますか？",
      "a3": "はい。もし特定のドメインが弾かれた場合は、「変更」ボタンから別のドメインに切り替えてお試しください。",
      "q4": "TempoEmailsからメールの送信はできますか？",
      "a4": "いいえ。スパム対策と安全なメール受信品質を保つため、受信専用となっています。",
      "q5": "自分の好きなユーザー名を選べますか？",
      "a5": "はい。「カスタム」ボタンをクリックすれば、希望のユーザー名とドメインを自由に選べます。",
      "q6": "本当に無料で登録も不要ですか？",
      "a6": "はい、完全無料でパスワード設定やアカウント登録も一切不要です。"
    },
    "cta": {
      "title": "受信箱はすでに稼働中です。",
      "subtitle": "アカウントもパスワードも不要。アドレスをコピーするだけ。",
      "button": "受信箱を開く"
    },
    "footer": {
      "brandDesc": "無料の使い捨てメール（捨てメアド）サービス。本物のアドレスをスパムから守り、安全に認証コードを受信。",
      "quickLinks": "リンク",
      "instantInbox": "即時メール作成",
      "company": "運営情報",
      "legal": "規約・ポリシー",
      "privacyPolicy": "プライバシーポリシー",
      "termsOfService": "利用規約",
      "disclaimer": "免責事項",
      "allRightsReserved": "無断転載を禁じます。"
    },
    "a11y": {
      "skipToContent": "本文へスキップ",
      "toggleTheme": "ダークモードを切り替える",
      "toggleSound": "通知音のオン・オフを切り替える",
      "toggleMenu": "ナビゲーションメニューの表示を切り替える",
      "dismissToast": "通知を閉じる",
      "changeLanguage": "言語を変更（現在の言語: {lang}）"
    },
    "common": {
      "onThisPage": "このページの内容",
      "close": "閉じる",
      "home": "ホーム",
      "blog": "ブログ",
      "backToHome": "ホームに戻る",
      "allArticles": "すべての記事",
      "readArticle": "記事を読む",
      "all": "すべて",
      "guide": "ガイド",
      "architecture": "技術設計",
      "privacy": "プライバシー",
      "security": "セキュリティ",
      "copy": "コピー",
      "copied": "コピー完了！",
      "copyEmailToast": "{email} をクリップボードにコピーしました！",
      "copyFailedToast": "アドレスのコピーに失敗しました",
      "pageNotFoundBadge": "ページが見つかりません",
      "pageNotFoundTitle": "お探しのページは",
      "pageExpired": "期限切れです。",
      "pageNotFoundDesc": "使い捨てメールと同様に、このページは消去されました。捨てメアドはいつでも利用可能です。",
      "goToHomepage": "トップページへ",
      "readOurBlog": "ブログを読む",
      "translationNotice": "この記事は現在英語で表示されています。全編翻訳を進めています。"
    },
    "pages": {
      "about": {
        "title": "TempoEmails について — 無料使い捨てメールの使命",
        "description": "TempoEmails の開発理念：高速、無料、OTP 自動検出、ログゼロの安全な使い捨てメールサービス。",
        "heading": "TempoEmails 開発の理由",
        "subheading": "シンプルで高速、プライバシーを最優先にした快適な捨てメアドサービス。"
      },
      "contact": {
        "title": "TempoEmails お問い合わせ & サポート",
        "description": "TempoEmails の無料捨てメアドに関するお問い合わせ、ドメイン到達性、開発者 API、ご意見はこちら。",
        "heading": "お問い合わせ & サポート",
        "subheading": "ご質問、不具合の報告、サポートが必要な場合はお気軽にお問い合わせください。"
      },
      "blog": {
        "title": "プライバシー・セキュリティ & 捨てメアド ブログ — TempoEmails",
        "description": "使い捨てメール、OTP 認証コード、10 分メール、デジタルプライバシー対策に関する専門ガイド。",
        "heading": "プライバシー & セキュリティ ガイド",
        "subheading": "スパム対策、アカウント管理、メインアドレスの保護に役立つ実践的アドバイス。",
        "faqHeading": "よくある質問",
        "relatedHeading": "関連ガイド"
      },
      "privacy": {
        "title": "プライバシーポリシー — TempoEmails",
        "description": "TempoEmails プライバシーポリシー：完全ログゼロ、一時メモリ処理、GDPR 準拠。",
        "heading": "プライバシーポリシー"
      },
      "terms": {
        "title": "利用規約 — TempoEmails",
        "description": "TempoEmails 無料使い捨てメールサービスの利用規約。",
        "heading": "利用規約"
      },
      "disclaimer": {
        "title": "免責事項 — TempoEmails",
        "description": "TempoEmails 免責事項：利用ガイドライン、制限事項、セキュリティ上の注意事項。",
        "heading": "免責事項"
      }
    }
  },
  "ar": {
    "meta": {
      "title": "بريد مؤقت مجاني — مهمل بريد إلكتروني مؤقت ومولد إيميل وهمي",
      "description": "خدمة بريد مؤقت مجانية وفورية. احصل على إيميل مهمل وهمي لاستقبال رسائل التفعيل وأكواد OTP بدون تسجيل وبلا رسائل مزعجة.",
      "keywords": "بريد مؤقت, ايميل مؤقت, مهمل, بريد مهمل, ايميل وهمي, بريد الكتروني مؤقت, 10 دقائق بريد, استقبال otp مجانا, بريد مؤقت فوري"
    },
    "nav": {
      "features": "المميزات",
      "howItWorks": "كيف يعمل",
      "faq": "الأسئلة الشائعة",
      "blog": "المدونة",
      "about": "عنا",
      "contact": "اتصل بنا",
      "history": "السجل",
      "selectLanguage": "اللغة"
    },
    "hero": {
      "chips": ["بدون تسجيل","اكتشاف تلقائي لرموز OTP","بدون سجلات"],
      "worksWith": "يعمل مع",
      "badge": "بريد إلكتروني مؤقت وفوري لمدة 10 دقائق",
      "titleLine1": "بريد مؤقت مجاني.",
      "titleLine2": "إيميل وهمي في ثوانٍ معدودة.",
      "subtitle": "أنشئ عنوان بريد إلكتروني مؤقت فوراً بنقرة واحدة. استقبل رموز التحقق OTP وروابط التفعيل بدون رسائل مزعجة وبلا تسجيل."
    },
    "addressBar": {
      "tempEmailLabel": "البريد المؤقت",
      "liveBadge": "نشط",
      "copyAddress": "نسخ العنوان",
      "copiedAddress": "تم النسخ!",
      "refreshTooltip": "تحديث الرسائل (تحديث تلقائي كل 10 ثوانٍ)",
      "customTooltip": "إنشاء اسم مستخدم مخصص",
      "qrTooltip": "إظهار رمز QR للهاتف",
      "changeTooltip": "توليد بريد عشوائي جديد",
      "deleteTooltip": "حذف هذا الصندوق",
      "accessTooltip": "بيانات الدخول وكلمة مرور صندوق البريد",
      "refreshLabel": "تحديث",
      "customLabel": "اسم مخصص",
      "qrLabel": "رمز QR",
      "accessLabel": "الدخول",
      "changeLabel": "بريد جديد",
      "deleteLabel": "حذف",
      "switchProviderTooltip": "انقر لتبديل مزود الخدمة"
    },
    "inboxList": {
      "title": "صندوق الوارد",
      "emptyTitle": "في انتظار الرسائل الواردة...",
      "emptyDesc": "انسخ عنوان البريد المؤقت أعلاه والصقه في أي استمارة تسجيل. ستظهر الرسائل الجديدة هنا تلقائياً.",
      "autoChecking": "الفحص التلقائي نشط",
      "clickToView": "انقر لعرض تفاصيل الرسالة...",
      "unreadBadge": "غير مقروءة",
      "unreadEmail": "رسالة غير مقروءة",
      "unreadEmails": "رسائل غير مقروءة",
      "totalEmail": "رسالة",
      "totalEmails": "رسائل"
    },
    "emailDetail": {
      "noMessageTitle": "لم يتم تحديد أي رسالة",
      "noMessageDesc": "اختر رسالة من صندوق الوارد لقراءتها ونسخ رموز التحقق.",
      "loading": "جاري تحميل الرسالة...",
      "backToInbox": "العودة للوارد",
      "htmlTab": "عرض HTML",
      "textTab": "نص عادي",
      "downloadTooltip": "تحميل الرسالة",
      "deleteTooltip": "حذف هذه الرسالة",
      "otpDetected": "تم اكتشاف رمز التحقق",
      "copyOtp": "نسخ الرمز",
      "copiedOtp": "تم النسخ!",
      "verifyLink": "الرابط:",
      "openLink": "فتح الرابط",
      "toLabel": "إلى:",
      "noSubject": "(بدون موضوع)",
      "defaultSender": "المرسل",
      "defaultDate": "التاريخ"
    },
    "customModal": {
      "title": "بريد إلكتروني مخصص",
      "desc": "اختر اسم المستخدم والنطاق المفضل لإنشاء صندوق بريد مؤقت خاص بك.",
      "usernameLabel": "اسم المستخدم",
      "usernamePlaceholder": "مثال: ahmed.signup",
      "domainLabel": "النطاق",
      "loadingDomains": "جاري تحميل النطاقات...",
      "preview": "معاينة:",
      "cancel": "إلغاء",
      "create": "إنشاء البريد",
      "domainsFailed": "تعذّر تحميل النطاقات — يرجى المحاولة مرة أخرى"
    },
    "accessModal": {
      "title": "الدخول إلى صندوق البريد",
      "credentialsDesc": "احفظ كلمة المرور هذه. ستتمكن بها من فتح صندوق البريد هذا لاحقًا من أي متصفح أو جهاز.",
      "addressLabel": "عنوان البريد الإلكتروني",
      "passwordLabel": "كلمة المرور",
      "showPassword": "إظهار كلمة المرور",
      "hidePassword": "إخفاء كلمة المرور",
      "copyPassword": "نسخ كلمة المرور",
      "copyLogin": "نسخ العنوان وكلمة المرور",
      "noPasswordPublic": "صناديق {provider} بلا كلمة مرور: يمكن لأي شخص يعرف العنوان فتحها.",
      "noPasswordExpiring": "صناديق TempMail.lol بلا كلمة مرور وتنتهي صلاحيتها بعد نحو ساعة.",
      "noPasswordMock": "صندوق البريد التجريبي هذا بلا كلمة مرور.",
      "loginTitle": "فتح صندوق بريد موجود",
      "loginDesc": "يعمل مع عناوين Mail.tm وMail.gw.",
      "loginButton": "فتح الصندوق"
    },
    "qrModal": {
      "title": "رمز QR للهاتف",
      "desc": "امسح الرمز بكاميرا هاتفك لفتح واستخدام هذا البريد المؤقت على الجوال فوراً.",
      "copyLink": "نسخ الرابط",
      "copiedLink": "تم نسخ الرابط!",
      "close": "إغلاق",
      "unavailable": "رمز QR غير متاح — تحقق من اتصالك وأعد المحاولة."
    },
    "historyDrawer": {
      "title": "الصناديق السابقة",
      "desc": "تنقل بسهولة بين عناوين البريد المؤقتة السابقة المحفوظة بأمان في متصفحك.",
      "activeInbox": "الحالي",
      "savedStorage": "محفوظ محلياً",
      "emptyTitle": "لا توجد صناديق سابقة",
      "emptyDesc": "عند إنشاء أو تبديل الصناديق المؤقتة، ستظهر عناوينك السابقة هنا.",
      "clearAll": "مسح كل السجل",
      "removeInbox": "إزالة من السجل",
      "confirmClearTitle": "مسح السجل",
      "confirmClearDesc": "هل أنت متأكد من رغبتك في حذف جميع العناوين السابقة من المتصفح؟"
    },
    "confirmModal": {
      "cancel": "إلغاء",
      "confirm": "تأكيد",
      "deleteInboxTitle": "حذف الصندوق",
      "deleteInboxDesc": "هل أنت متأكد من رغبتك في حذف هذا البريد وجميع الرسائل المحفوظة نهائياً؟",
      "changeAddressTitle": "تغيير العنوان",
      "changeAddressDesc": "توليد بريد عشوائي جديد؟ ستبقى الرسائل الحالية في سجلك.",
      "deleteMessageTitle": "حذف الرسالة",
      "deleteMessageDesc": "هل تريد حذف هذه الرسالة نهائياً؟"
    },
    "cookieConsent": {
      "title": "إعدادات ملفات تعريف الارتباط",
      "desc": "نستخدم ملفات تعريف الارتباط لحفظ تفضيلاتك وقياس زيارات الموقع. اطلع على",
      "privacyPolicy": "سياسة الخصوصية",
      "essentialOnly": "الضرورية فقط",
      "acceptAll": "قبول الكل"
    },
    "toasts": {
      "soundEnabled": "تم تفعيل التنبيهات الصوتية",
      "soundMuted": "تم كتم التنبيهات الصوتية",
      "initFailed": "فشل تهيئة البريد. يرجى تحديث الصفحة.",
      "messageDeleted": "تم حذف الرسالة",
      "switchedTo": "تم التبديل إلى {address}",
      "generatedNew": "تم إنشاء بريد مؤقت جديد بنجاح!",
      "mailboxDeleted": "تم حذف الصندوق وإنشاء عنوان جديد!",
      "customCreated": "تم إنشاء البريد المخصص: {address}",
      "customFailed": "فشل الإنشاء. يرجى تجربة اسم مستخدم آخر.",
      "providerSwitched": "تم تغيير مزود الخدمة إلى {provider}",
      "historyCleared": "تم مسح سجل الصناديق.",
      "copiedToClipboard": "تم النسخ إلى الحافظة!",
      "copyFailed": "فشل النسخ",
      "otpCopied": "تم نسخ رمز التحقق {code}!",
      "loadMessageFailed": "فشل تحميل محتوى الرسالة.",
      "mockFallback": "جميع مزوّدي البريد غير متاحين حاليًا — هذا صندوق محاكاة ولا يمكنه استقبال رسائل حقيقية.",
      "legacyInboxGone": "صندوق 1secmail القديم ({address}) لم يعد مدعومًا — تم إنشاء صندوق جديد.",
      "passwordCopied": "تم نسخ كلمة المرور",
      "loginCopied": "تم نسخ العنوان وكلمة المرور",
      "loginFailed": "العنوان أو كلمة المرور غير صحيحة.",
      "loginUnavailable": "تعذّر الوصول إلى مزوّد البريد. حاول مرة أخرى بعد قليل.",
      "inboxAuthLost": "لم يعد {address} يقبل كلمة المرور — ربما حذفه المزوّد.",
      "inboxExpired": "انتهت صلاحية {address}. أنشئ عنوانًا جديدًا لمواصلة استلام البريد."
    },
    "relativeTime": {
      "justNow": "الآن",
      "yesterday": "أمس",
      "secondsAgo": "منذ {n} ثانية",
      "minutesAgo": "منذ {n} دقيقة",
      "hoursAgo": "منذ {n} ساعة",
      "daysAgo": "منذ {n} يوم"
    },
    "useCases": {
      "badge": "خدمات شائعة",
      "title": "يعمل بسلاسة في كل المواقع",
      "subtitle": "استخدم TempoEmails للتسجيل الفوري وحماية بريدك الشخصي من رسائل الترويج المزعجة.",
      "items": [
        {
          "category": "تجارب الذكاء الاصطناعي والبرامج",
          "badge": "ChatGPT و SaaS",
          "title": "بريد مؤقت لـ ChatGPT والتجارب المجانية",
          "description": "سجل في أدوات الذكاء الاصطناعي وواجهات API دون تعريض بريدك الرئيسي للقوائم الترويجية.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "تجارب مجانية"
          ]
        },
        {
          "category": "الألعاب والمجتمعات",
          "badge": "Discord و Steam",
          "title": "بريد مؤقت لـ Discord والألعاب",
          "description": "أنشئ حسابات ثانوية وانضم لخوادم Discord وفعل حسابات Steam واستلم مفاتيح الألعاب بسهولة.",
          "tags": [
            "تفعيل Discord",
            "حسابات Steam",
            "تنبيهات Twitch",
            "Epic Games"
          ]
        },
        {
          "category": "التواصل الاجتماعي والرسائل",
          "badge": "Telegram والتواصل",
          "title": "بريد مؤقت لشبكات التواصل والتطبيقات",
          "description": "حافظ على سرية بريدك الحقيقي عند التسجيل في المنتديات وTelegram وReddit أو تحميل الملفات.",
          "tags": [
            "تسجيل Telegram",
            "حسابات Reddit",
            "منتديات",
            "تحميل ملفات"
          ]
        },
        {
          "category": "المطورون واختبارات الجودة QA",
          "badge": "API البريد و QA",
          "title": "مولد بريد وهمي لاختبار البرمجيات",
          "description": "اختبر تدفقات التسجيل، وتحقق من وصول الرسائل التلقائية، وجرب استعادة كلمات المرور لمستخدمين متعددين.",
          "tags": [
            "اختبار التسجيل",
            "اختبار Webhook",
            "التحقق من الدخول",
            "محاكاة صناديق"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "كشف تلقائي لأكواد التحقق",
      "title": "استقبل رموز التحقق OTP فوراً عبر البريد المؤقت.",
      "subtitle": "يقوم TempoEmails تلقائياً بفحص الرسائل الواردة واستخراج رموز التفعيل المكونة من 4 إلى 8 أرقام فور وصولها.",
      "tag1": "رموز OTP من 4 إلى 8 أرقام",
      "tag2": "روابط التفعيل بنقرة واحدة",
      "tag3": "نسخ فوري للحافظة",
      "previewBadge": "معاينة الصندوق",
      "previewDetected": "تم الكشف تلقائياً",
      "previewCode": "رمز التحقق",
      "previewCopy": "نسخ",
      "previewFrom": "من: فريق الأمان",
      "previewSubj": "رمز التحقق لمرة واحدة الخاص بك هو 593821",
      "previewTime": "الآن"
    },
    "features": {
      "badge": "المزايا الأساسية",
      "title": "مصمم لتحقيق أقصى سرعة وخصوصية كاملة",
      "subtitle": "كل ما تحتاجه من خدمة بريد مهمل عصرية، بلا تتبع وبسرعة فائقة.",
      "items": [
        {
          "title": "مولد بريد مؤقت مجاني",
          "description": "احمِ عنوان بريدك الرئيسي من النشرات البريدية وسماسرة البيانات ومصائد البريد العشوائي للأبد."
        },
        {
          "title": "مستخرج تلقائي لرموز OTP",
          "description": "يتم تحليل الرسائل الواردة تلقائيًا لإبراز رموز التحقق والروابط بنقرة زر واحدة للنسخ."
        },
        {
          "title": "بريد مجهول 100% — بدون سجلات",
          "description": "بدون تسجيل، بدون تتبع وبدون قاعدة بيانات مركزية. تُحذف الرسائل نهائيًا عند إغلاق الجلسة."
        },
        {
          "title": "نقل سريع للهاتف عبر رمز QR",
          "description": "امسح رمز QR على شاشتك بكاميرا الهاتف للوصول الفوري إلى بريدك المؤقت على الجوال."
        },
        {
          "title": "صندوق بريد مباشر بتحديث تلقائي",
          "description": "تصل الرسائل فورًا مع فحص تلقائي كل 10 ثوانٍ وتقنية دفع SSE دون الحاجة لتحديث يدوي."
        },
        {
          "title": "مبدل صناديق متعددة 10 دقائق",
          "description": "أدر ما يصل إلى 8 صناديق بريد مؤقتة في نفس الوقت من درج السجل دون فقدان رسائل التفعيل."
        }
      ]
    },
    "howItWorks": {
      "badge": "دليل من 4 خطوات",
      "title": "كيف يعمل البريد المؤقت في 4 خطوات",
      "subtitle": "جاهز للاستخدام في ثوانٍ بدون أي معلومات شخصية أو خطوات معقدة.",
      "step1Title": "1. انسخ بريدك المجاني",
      "step1Desc": "ننشئ لك عنوان بريد مؤقت فوراً وجاهز لاستقبال الرسائل.",
      "step2Title": "2. استخدمه في أي موقع",
      "step2Desc": "الصق العنوان المؤقت في أي استمارة تسجيل تطلب تأكيد البريد.",
      "step3Title": "3. استخراج تلقائي للأكواد",
      "step3Desc": "تصل الرسائل بشكل فوري، ويتم إبراز رمز التفعيل مع زر نسخ سريع.",
      "step4Title": "4. احذف الصندوق بلا أثر",
      "step4Desc": "أغلق الصفحة عند الانتهاء. لن تصل أي رسائل دعائية إلى بريدك الحقيقي."
    },
    "faq": {
      "badge": "الأسئلة الشائعة",
      "title": "الأسئلة الأكثر تداولاً",
      "subtitle": "كل ما تحتاج لمعرفته عن البريد المهمل المؤقت واستقبال أكواد التفعيل.",
      "q1": "ما هو البريد المؤقت وكيف يعمل؟",
      "a1": "البريد المؤقت (أو البريد المهمل) هو عنوان إلكتروني فوري يستقبل الرسائل وأكواد التفعيل لحماية بريدك الحقيقي من التسريب.",
      "q2": "هل يمكن استخدامه لتلقي أكواد التحقق OTP؟",
      "a2": "نعم! يتعرف نظامنا بذكاء على رموز التحقق الرقمية وروابط التفعيل ويوفر زراً لنسخها فوراً.",
      "q3": "هل يعمل مع Discord أو ChatGPT أو Telegram؟",
      "a3": "نعم. وإذا تم حظر نطاق معين، يمكنك الضغط على \"تغيير\" لاختيار نطاق نشط آخر.",
      "q4": "هل يمكنني إرسال رسائل من خلال TempoEmails؟",
      "a4": "لا. الخدمة مخصصة للاستقبال فقط لمنع إساءة الاستخدام وضمان وصول رسائل التفعيل بسرعة.",
      "q5": "هل يمكنني اختيار اسم مستخدم مخصص؟",
      "a5": "نعم، اضغط على زر \"مخصص\" لاختيار الاسم والنطاق الذي تريده.",
      "q6": "هل الخدمة مجانية تماماً وبدون تسجيل؟",
      "a6": "نعم، مجانية 100% بدون تسجيل حسابات أو كلمات سر وبلا أي سجلات لبياناتك."
    },
    "cta": {
      "title": "صندوق بريدك جاهز بالفعل.",
      "subtitle": "بدون حساب أو كلمة مرور — فقط انسخ العنوان وابدأ.",
      "button": "افتح صندوقي"
    },
    "footer": {
      "brandDesc": "خدمة بريد إلكتروني مؤقت ومجاني. استقبل أكواد التفعيل واحفظ بريدك الشخصي من الرسائل المزعجة.",
      "quickLinks": "روابط سريعة",
      "instantInbox": "بريد فوري",
      "company": "الشركة",
      "legal": "الشروط القانونية",
      "privacyPolicy": "سياسة الخصوصية",
      "termsOfService": "شروط الاستخدام",
      "disclaimer": "إخلاء المسؤولية",
      "allRightsReserved": "جميع الحقوق محفوظة."
    },
    "a11y": {
      "skipToContent": "تخطَّ إلى المحتوى",
      "toggleTheme": "تبديل الوضع الداكن",
      "toggleSound": "تشغيل أو إيقاف صوت الإشعارات",
      "toggleMenu": "إظهار أو إخفاء قائمة التنقل",
      "dismissToast": "إغلاق الإشعار",
      "changeLanguage": "تغيير اللغة، اللغة الحالية {lang}"
    },
    "common": {
      "onThisPage": "في هذه الصفحة",
      "close": "إغلاق",
      "home": "الرئيسية",
      "blog": "المدونة",
      "backToHome": "العودة للرئيسية",
      "allArticles": "جميع المقالات",
      "readArticle": "اقرأ المقال",
      "all": "الكل",
      "guide": "دليل",
      "architecture": "البنية التقنية",
      "privacy": "الخصوصية",
      "security": "الأمان",
      "copy": "نسخ",
      "copied": "تم النسخ!",
      "copyEmailToast": "تم نسخ {email} إلى الحافظة!",
      "copyFailedToast": "فشل نسخ العنوان",
      "pageNotFoundBadge": "الصفحة غير موجودة",
      "pageNotFoundTitle": "عذرًا، هذه الصفحة",
      "pageExpired": "انتهت صلاحيتها.",
      "pageNotFoundDesc": "تمامًا كالبريد المؤقت، اختفت هذه الصفحة. لكن لا تقلق — صندوق بريدك المؤقت في انتظارك.",
      "goToHomepage": "الانتقال للصفحة الرئيسية",
      "readOurBlog": "قراءة المدونة",
      "translationNotice": "هذا المقال معروض حاليًا باللغة الإنجليزية. الترجمة الكاملة قيد التنفيذ."
    },
    "pages": {
      "about": {
        "title": "عن TempoEmails — مهمتنا لتوفير بريد مؤقت مجاني وآمن",
        "description": "لماذا طورنا TempoEmails: خدمة بريد مؤقت سريعة ومجانية مع استخراج فوري لرموز OTP وحماية تامة للخصوصية.",
        "heading": "لماذا طورنا TempoEmails",
        "subheading": "بريد مؤقت نظيف، سريع، يركز على الخصوصية ويعمل بكفاءة مطلقة."
      },
      "contact": {
        "title": "اتصل بنا ودعم TempoEmails",
        "description": "احصل على الدعم لخدمة البريد المؤقت TempoEmails، واستفسارات التسليم، وواجهة API للمطورين.",
        "heading": "الاتصال والدعم الفني",
        "subheading": "هل لديك سؤال أو لاحظت خطأ أو تحتاج لمساعدة؟ تواصل معنا."
      },
      "blog": {
        "title": "مدونة الخصوصية والأمان والبريد المؤقت — TempoEmails",
        "description": "أدلة الخبراء حول البريد المؤقت المجاني، ورموز OTP، وبريد 10 دقائق وحماية الخصوصية الرقمية.",
        "heading": "أدلة الخصوصية والأمان",
        "subheading": "إرشادات عملية لتجنب البريد العشوائي وإدارة الحسابات وحماية بريدك الشخصي.",
        "faqHeading": "الأسئلة الشائعة",
        "relatedHeading": "أدلة ذات صلة"
      },
      "privacy": {
        "title": "سياسة الخصوصية — TempoEmails",
        "description": "سياسة الخصوصية لـ TempoEmails: انعدام تام للسجلات، معالجة في الذاكرة المؤقتة وتوافق مع معايير GDPR.",
        "heading": "سياسة الخصوصية"
      },
      "terms": {
        "title": "شروط الخدمة — TempoEmails",
        "description": "شروط وأحكام استخدام خدمة البريد المؤقت المجاني TempoEmails.",
        "heading": "شروط الخدمة"
      },
      "disclaimer": {
        "title": "إخلاء المسؤولية — TempoEmails",
        "description": "إخلاء المسؤولية لـ TempoEmails: سياسات الاستخدام العادل والحدود وإرشادات الأمان.",
        "heading": "إخلاء المسؤولية"
      }
    }
  },
  "id": {
    "meta": {
      "title": "Email Sementara Gratis — Generator Email Sekali Pakai & Palsu",
      "description": "Layanan email sementara sekali pakai gratis. Terima kode verifikasi OTP, tautan aktivasi, dan pesan instan tanpa spam dan tanpa daftar.",
      "keywords": "email sementara, email sekali pakai, email palsu, 10 minute mail, buat email sementara, terima otp online, generator email sementara gratis"
    },
    "nav": {
      "features": "Fitur",
      "howItWorks": "Cara Kerja",
      "faq": "FAQ",
      "blog": "Blog",
      "about": "Tentang Kami",
      "contact": "Kontak",
      "history": "Riwayat",
      "selectLanguage": "Bahasa"
    },
    "hero": {
      "chips": ["Tanpa daftar","Deteksi OTP otomatis","Tanpa log"],
      "worksWith": "Kompatibel dengan",
      "badge": "Email Sementara Cepat & Kotak Masuk 10 Menit",
      "titleLine1": "Email Sementara Gratis.",
      "titleLine2": "Email Sekali Pakai dalam Hitungan Detik.",
      "subtitle": "Buat alamat email sementara sekali pakai dalam satu klik. Terima kode verifikasi OTP dan tautan aktivasi tanpa spam, tanpa log, dan tanpa registrasi."
    },
    "addressBar": {
      "tempEmailLabel": "Email Sementara",
      "liveBadge": "Aktif",
      "copyAddress": "Salin Alamat",
      "copiedAddress": "Tersalin!",
      "refreshTooltip": "Perbarui pesan (Auto-refresh tiap 10 detik)",
      "customTooltip": "Buat nama khusus",
      "qrTooltip": "Tampilkan QR Code untuk HP",
      "changeTooltip": "Buat alamat acak baru",
      "deleteTooltip": "Hapus kotak masuk ini",
      "accessTooltip": "Login & kata sandi kotak masuk",
      "refreshLabel": "Perbarui",
      "customLabel": "Kustom",
      "qrLabel": "Kode QR",
      "accessLabel": "Sandi",
      "changeLabel": "Email Baru",
      "deleteLabel": "Hapus",
      "switchProviderTooltip": "Klik untuk mengganti penyedia"
    },
    "inboxList": {
      "title": "Kotak Masuk",
      "emptyTitle": "Menunggu pesan masuk...",
      "emptyDesc": "Salin alamat email di atas dan gunakan untuk formulir pendaftaran. Pesan masuk akan muncul di sini secara otomatis.",
      "autoChecking": "Pengecekan otomatis aktif",
      "clickToView": "Klik untuk melihat detail email...",
      "unreadBadge": "Belum dibaca",
      "unreadEmail": "email belum dibaca",
      "unreadEmails": "email belum dibaca",
      "totalEmail": "email",
      "totalEmails": "email"
    },
    "emailDetail": {
      "noMessageTitle": "Belum ada pesan yang dipilih",
      "noMessageDesc": "Pilih email dari kotak masuk untuk membaca isi dan menyalin kode verifikasi.",
      "loading": "Memuat email...",
      "backToInbox": "Kembali ke Kotak Masuk",
      "htmlTab": "HTML",
      "textTab": "Teks",
      "downloadTooltip": "Unduh email",
      "deleteTooltip": "Hapus pesan ini",
      "otpDetected": "Kode Verifikasi Terdeteksi",
      "copyOtp": "Salin Kode",
      "copiedOtp": "Tersalin!",
      "verifyLink": "Tautan:",
      "openLink": "Buka Tautan",
      "toLabel": "Kepada:",
      "noSubject": "(Tanpa Subjek)",
      "defaultSender": "Pengirim",
      "defaultDate": "Tanggal"
    },
    "customModal": {
      "title": "Email Kustom",
      "desc": "Pilih username dan domain favorit Anda untuk membuat kotak masuk sementara yang dipersonalisasi.",
      "usernameLabel": "Nama Pengguna",
      "usernamePlaceholder": "contoh: budi.daftar",
      "domainLabel": "Domain",
      "loadingDomains": "Memuat daftar domain...",
      "preview": "Pratinjau:",
      "cancel": "Batal",
      "create": "Buat Email",
      "domainsFailed": "Domain tidak dapat dimuat — silakan coba lagi"
    },
    "accessModal": {
      "title": "Login kotak masuk",
      "credentialsDesc": "Simpan kata sandi ini. Dengan kata sandi ini Anda bisa membuka kotak masuk ini lagi nanti, di browser atau perangkat mana pun.",
      "addressLabel": "Alamat email",
      "passwordLabel": "Kata sandi",
      "showPassword": "Tampilkan kata sandi",
      "hidePassword": "Sembunyikan kata sandi",
      "copyPassword": "Salin kata sandi",
      "copyLogin": "Salin alamat & kata sandi",
      "noPasswordPublic": "Kotak masuk {provider} tidak memiliki kata sandi: siapa pun yang tahu alamatnya bisa membukanya.",
      "noPasswordExpiring": "Kotak masuk TempMail.lol tidak memiliki kata sandi dan kedaluwarsa setelah sekitar satu jam.",
      "noPasswordMock": "Kotak masuk simulasi ini tidak memiliki kata sandi.",
      "loginTitle": "Buka kotak masuk yang ada",
      "loginDesc": "Berfungsi untuk alamat Mail.tm dan Mail.gw.",
      "loginButton": "Buka kotak masuk"
    },
    "qrModal": {
      "title": "QR Code Ponsel",
      "desc": "Pindai kode ini dengan kamera ponsel Anda untuk langsung membuka email sementara ini di HP.",
      "copyLink": "Salin Tautan",
      "copiedLink": "Tautan Tersalin!",
      "close": "Tutup",
      "unavailable": "Kode QR tidak tersedia — periksa koneksi Anda lalu coba lagi."
    },
    "historyDrawer": {
      "title": "Riwayat Email",
      "desc": "Beralih dengan cepat di antara email sementara yang tersimpan aman di browser Anda.",
      "activeInbox": "Sedang Aktif",
      "savedStorage": "Tersimpan di Browser",
      "emptyTitle": "Belum ada riwayat",
      "emptyDesc": "Saat Anda membuat atau mengganti email sementara, alamat Anda akan muncul di sini.",
      "clearAll": "Hapus Semua Riwayat",
      "removeInbox": "Hapus dari riwayat",
      "confirmClearTitle": "Hapus Riwayat",
      "confirmClearDesc": "Apakah Anda yakin ingin menghapus semua riwayat alamat email dari browser?"
    },
    "confirmModal": {
      "cancel": "Batal",
      "confirm": "Konfirmasi",
      "deleteInboxTitle": "Hapus Kotak Masuk",
      "deleteInboxDesc": "Apakah Anda yakin ingin menghapus email sementara ini beserta semua pesannya?",
      "changeAddressTitle": "Ganti Alamat",
      "changeAddressDesc": "Buat alamat email acak baru? Pesan saat ini akan tetap tersimpan di riwayat Anda.",
      "deleteMessageTitle": "Hapus Pesan",
      "deleteMessageDesc": "Apakah Anda yakin ingin menghapus pesan ini secara permanen?"
    },
    "cookieConsent": {
      "title": "Preferensi Cookie",
      "desc": "Kami menggunakan cookie untuk menyimpan setelan (seperti mode gelap dan riwayat email) dan memantau lalu lintas. Baca",
      "privacyPolicy": "Kebijakan Privasi",
      "essentialOnly": "Hanya yang Penting",
      "acceptAll": "Terima Semua"
    },
    "toasts": {
      "soundEnabled": "Suara notifikasi diaktifkan",
      "soundMuted": "Suara notifikasi dibisukan",
      "initFailed": "Gagal memuat kotak masuk. Silakan muat ulang halaman.",
      "messageDeleted": "Pesan berhasil dihapus",
      "switchedTo": "Beralih ke {address}",
      "generatedNew": "Email sementara baru berhasil dibuat!",
      "mailboxDeleted": "Kotak masuk dihapus dan alamat baru telah dibuat!",
      "customCreated": "Email kustom dibuat: {address}",
      "customFailed": "Gagal membuat email. Silakan coba username lain.",
      "providerSwitched": "Penyedia email aktif diubah ke {provider}",
      "historyCleared": "Semua riwayat email berhasil dibersihkan.",
      "copiedToClipboard": "Disalin ke papan klip!",
      "copyFailed": "Gagal menyalin",
      "otpCopied": "Kode verifikasi {code} berhasil disalin!",
      "loadMessageFailed": "Gagal memuat konten pesan.",
      "mockFallback": "Semua penyedia email sedang tidak dapat diakses — kotak masuk ini adalah simulasi dan tidak dapat menerima email asli.",
      "legacyInboxGone": "Kotak 1secmail lama Anda ({address}) tidak lagi didukung — kotak baru telah dibuat.",
      "passwordCopied": "Kata sandi disalin",
      "loginCopied": "Alamat dan kata sandi disalin",
      "loginFailed": "Alamat atau kata sandi salah.",
      "loginUnavailable": "Tidak dapat menghubungi penyedia email. Coba lagi sebentar lagi.",
      "inboxAuthLost": "{address} tidak lagi menerima kata sandinya — penyedia mungkin telah menghapusnya.",
      "inboxExpired": "{address} telah kedaluwarsa. Buat alamat baru untuk terus menerima email."
    },
    "relativeTime": {
      "justNow": "Baru saja",
      "yesterday": "Kemarin",
      "secondsAgo": "{n} dtk lalu",
      "minutesAgo": "{n} mnt lalu",
      "hoursAgo": "{n} jam lalu",
      "daysAgo": "{n} hr lalu"
    },
    "useCases": {
      "badge": "Layanan Populer",
      "title": "Berfungsi dengan Baik di Mana Saja",
      "subtitle": "Gunakan TempoEmails untuk verifikasi akun di situs web mana pun tanpa khawatir kebocoran data.",
      "items": [
        {
          "category": "Uji Coba AI & Perangkat Lunak",
          "badge": "ChatGPT & SaaS",
          "title": "Email Sementara untuk ChatGPT & Uji Coba Gratis",
          "description": "Daftar alat AI, API pengembang, dan uji coba SaaS gratis tanpa memasukkan email utama ke daftar promosi.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "Uji Coba SaaS"
          ]
        },
        {
          "category": "Game & Komunitas",
          "badge": "Discord & Steam",
          "title": "Email Sekali Pakai untuk Discord & Gaming",
          "description": "Buat profil game sekunder, gabung server Discord, verifikasi akun Steam, dan klaim kode beta game dengan mudah.",
          "tags": [
            "Verifikasi Discord",
            "Akun Steam",
            "Notifikasi Twitch",
            "Epic Games"
          ]
        },
        {
          "category": "Media Sosial & Pesan",
          "badge": "Telegram & Sosial",
          "title": "Email Sementara untuk Media Sosial & Aplikasi",
          "description": "Jaga anonimitas email asli Anda saat mendaftar di forum, Telegram, Reddit, atau mengunduh dokumen dan PDF.",
          "tags": [
            "Pendaftaran Telegram",
            "Profil Reddit",
            "Forum",
            "Unduhan Dokumen"
          ]
        },
        {
          "category": "Pengembang & Pengujian QA",
          "badge": "API Email & QA",
          "title": "Generator Email Palsu untuk QA Software",
          "description": "Uji alur pendaftaran pengguna, verifikasi pengiriman email transaksional, dan simulasikan banyak akun sekaligus.",
          "tags": [
            "QA Pendaftaran",
            "Pengujian Webhook",
            "Verifikasi Auth",
            "Simulasi Multi-Inbox"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Deteksi Kode Otomatis",
      "title": "Terima kode OTP verifikasi secara instan di email sementara.",
      "subtitle": "TempoEmails secara otomatis membaca pesan masuk untuk mengekstrak 4–8 digit kode verifikasi dan tautan aktivasi tepat saat email diterima.",
      "tag1": "4 sampai 8 Digit Kode OTP",
      "tag2": "1-Klik Buka Tautan",
      "tag3": "Salin Cepat ke Clipboard",
      "previewBadge": "Pratinjau Email",
      "previewDetected": "Otomatis Terdeteksi",
      "previewCode": "Kode Verifikasi",
      "previewCopy": "Salin",
      "previewFrom": "Dari: Tim Keamanan",
      "previewSubj": "Kode verifikasi sekali pakai Anda adalah 593821",
      "previewTime": "Baru saja"
    },
    "features": {
      "badge": "Fitur Unggulan",
      "title": "Dirancang untuk Kecepatan Maksimal & Privasi Menyeluruh",
      "subtitle": "Semua yang Anda butuhkan dari layanan email sementara modern, tanpa pelacakan dan super cepat.",
      "items": [
        {
          "title": "Generator Email Sementara Gratis",
          "description": "Lindungi alamat email utama Anda dari buletin, pialang data, jebakan spam, dan email sampah selamanya."
        },
        {
          "title": "Ekstraktor Otomatis OTP & Kode",
          "description": "Email masuk dipindai secara otomatis untuk menonjolkan kode OTP 4-8 digit dan tautan konfirmasi dengan 1 klik salin."
        },
        {
          "title": "100% Email Anonim — Tanpa Log",
          "description": "Tanpa registrasi, tanpa pelacakan pribadi, dan tanpa database pusat. Pesan terhapus permanen saat kotak surat dihapus."
        },
        {
          "title": "Transfer QR Desktop ke Ponsel",
          "description": "Pindai kode QR instan di layar dengan kamera ponsel untuk langsung mengakses email sementara di smartphone Anda."
        },
        {
          "title": "Kotak Masuk Live Auto-Refresh",
          "description": "Email baru mendarat real-time dengan pemeriksaan otomatis setiap 10 detik dan SSE push. Tanpa perlu refresh manual."
        },
        {
          "title": "Pengalih Multi-Kotak Masuk 10 Menit",
          "description": "Kelola hingga 8 kotak masuk sementara sekaligus melalui riwayat sesi tanpa kehilangan pesan verifikasi penting."
        }
      ]
    },
    "howItWorks": {
      "badge": "Panduan 4 Langkah",
      "title": "Cara Kerja Email Sementara dalam 4 Langkah",
      "subtitle": "Selesai diverifikasi dalam hitungan detik tanpa registrasi berbelit-belit.",
      "step1Title": "1. Salin Alamat Gratis Anda",
      "step1Desc": "Kami langsung menyiapkan alamat email sementara aktif yang siap menerima pesan.",
      "step2Title": "2. Gunakan untuk Pendaftaran",
      "step2Desc": "Tempelkan alamat sekali pakai ke formulir pendaftaran aplikasi atau situs yang Anda inginkan.",
      "step3Title": "3. Deteksi Kode Otomatis",
      "step3Desc": "Pesan masuk secara realtime dan kode OTP langsung ditonjolkan dengan tombol salin.",
      "step4Title": "4. Tutup & Lupakan",
      "step4Desc": "Tutup tab saat selesai. Tidak ada spam atau email promosi di kotak surat pribadi Anda."
    },
    "faq": {
      "badge": "Pertanyaan Umum",
      "title": "Pertanyaan yang Sering Diajukan",
      "subtitle": "Segala hal tentang email sekali pakai, deteksi kode verifikasi OTP, dan privasi data.",
      "q1": "Apa itu email sementara dan bagaimana cara kerjanya?",
      "a1": "Email sementara (juga dikenal sebagai disposable email atau 10 minute mail) menyediakan alamat email instan untuk menerima pesan verifikasi tanpa membocorkan email pribadi Anda.",
      "q2": "Apakah bisa digunakan untuk menerima kode OTP?",
      "a2": "Ya! TempoEmails memiliki pendeteksi cerdas yang otomatis menemukan kode verifikasi dan tautan aktivasi.",
      "q3": "Apakah bisa untuk Discord, ChatGPT, Telegram, atau Steam?",
      "a3": "Ya. Jika suatu layanan memblokir domain tertentu, cukup klik \"Ganti\" untuk beralih ke domain aktif lainnya.",
      "q4": "Bisakah mengirim email keluar dari TempoEmails?",
      "a4": "Tidak. Layanan ini khusus menerima email untuk mencegah penyalahgunaan spam dan menjaga pengiriman email tetap lancar.",
      "q5": "Bisakah saya memilih username sendiri?",
      "a5": "Ya. Klik tombol \"Kustom\" di bilah alamat untuk menentukan nama dan domain pilihan Anda.",
      "q6": "Apakah benar-benar gratis dan tanpa registrasi?",
      "a6": "Ya, 100% gratis tanpa password, tanpa pendaftaran, dan tanpa mencatat data pribadi Anda."
    },
    "cta": {
      "title": "Kotak masuk Anda sudah aktif.",
      "subtitle": "Tanpa akun, tanpa kata sandi — cukup salin alamatnya.",
      "button": "Buka kotak masuk"
    },
    "footer": {
      "brandDesc": "Generator email sementara sekali pakai gratis. Dapatkan kode verifikasi dan OTP instan sambil menjaga kotak masuk pribadi Anda aman dari spam.",
      "quickLinks": "Tautan Cepat",
      "instantInbox": "Kotak Masuk Instan",
      "company": "Perusahaan",
      "legal": "Hukum",
      "privacyPolicy": "Kebijakan Privasi",
      "termsOfService": "Ketentuan Layanan",
      "disclaimer": "Penafian",
      "allRightsReserved": "Hak cipta dilindungi undang-undang."
    },
    "a11y": {
      "skipToContent": "Lewati ke konten",
      "toggleTheme": "Alihkan mode gelap",
      "toggleSound": "Aktifkan atau nonaktifkan suara notifikasi",
      "toggleMenu": "Tampilkan atau sembunyikan menu navigasi",
      "dismissToast": "Tutup notifikasi",
      "changeLanguage": "Ubah bahasa, bahasa saat ini {lang}"
    },
    "common": {
      "onThisPage": "Di halaman ini",
      "close": "Tutup",
      "home": "Beranda",
      "blog": "Blog",
      "backToHome": "Kembali ke Beranda",
      "allArticles": "Semua Artikel",
      "readArticle": "Baca artikel",
      "all": "Semua",
      "guide": "Panduan",
      "architecture": "Arsitektur",
      "privacy": "Privasi",
      "security": "Keamanan",
      "copy": "Salin",
      "copied": "Tersalin!",
      "copyEmailToast": "{email} berhasil disalin ke papan klip!",
      "copyFailedToast": "Gagal menyalin alamat email",
      "pageNotFoundBadge": "Halaman Tidak Ditemukan",
      "pageNotFoundTitle": "Ups, halaman ini telah",
      "pageExpired": "kedaluwarsa.",
      "pageNotFoundDesc": "Sama seperti email sementara, halaman ini telah hilang. Jangan khawatir — kotak masuk sementara Anda masih siap digunakan.",
      "goToHomepage": "Kembali ke Beranda",
      "readOurBlog": "Baca Blog Kami",
      "translationNotice": "Artikel ini saat ini ditampilkan dalam bahasa Inggris. Terjemahan lengkap sedang diproses."
    },
    "pages": {
      "about": {
        "title": "Tentang TempoEmails — Misi Email Sementara & Sekali Pakai Gratis",
        "description": "Mengapa kami membangun TempoEmails: layanan email sementara gratis, cepat dengan deteksi OTP instan dan tanpa log.",
        "heading": "Mengapa Kami Membangun TempoEmails",
        "subheading": "Email sementara yang bersih, cepat, mengutamakan privasi, dan bekerja dengan andal."
      },
      "contact": {
        "title": "Kontak & Bantuan TempoEmails",
        "description": "Dapatkan bantuan untuk TempoEmails, email sementara gratis, keterkiriman domain, API pengembang, atau kirim masukan.",
        "heading": "Kontak & Bantuan",
        "subheading": "Punya pertanyaan, menemukan bug, atau butuh bantuan? Hubungi kami."
      },
      "blog": {
        "title": "Blog Privasi, Keamanan & Email Sementara — TempoEmails",
        "description": "Panduan ahli tentang email sementara gratis, kode verifikasi OTP, email 10 menit, dan privasi digital.",
        "heading": "Panduan Privasi & Keamanan",
        "subheading": "Tips praktis menghindari spam, mengelola akun online, dan melindungi email utama Anda.",
        "faqHeading": "Pertanyaan yang sering diajukan",
        "relatedHeading": "Panduan terkait"
      },
      "privacy": {
        "title": "Kebijakan Privasi — TempoEmails",
        "description": "Kebijakan privasi TempoEmails: tanpa log, pemrosesan memori sementara, dan kepatuhan GDPR/CCPA.",
        "heading": "Kebijakan Privasi"
      },
      "terms": {
        "title": "Syarat Layanan — TempoEmails",
        "description": "Syarat dan ketentuan penggunaan layanan email sementara sekali pakai gratis TempoEmails.",
        "heading": "Syarat Layanan"
      },
      "disclaimer": {
        "title": "Penafian — TempoEmails",
        "description": "Penafian TempoEmails: pedoman penggunaan wajar, batasan layanan, dan panduan keamanan.",
        "heading": "Penafian"
      }
    }
  }
};
