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
      "description": "Free temp mail with a disposable email address ready as soon as the page loads. Receive OTP verification codes and activation links without giving out your real email.",
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
      "chips": ["No sign-up","OTP codes highlighted","Receive-only"],
      "worksWith": "Works with",
      "badge": "Free temp mail, no sign-up",
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
      "emptyDesc": "Copy the address above and use it in a signup form. The inbox checks for new mail every 10 seconds.",
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
      "desc": "Pick a username and a domain. If a site rejects one domain, try another.",
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
      "desc": "Scan with your phone camera to get this address onto your phone, for example to sign up in a mobile app. Mail sent to it still shows up here.",
      "copyLink": "Copy Address",
      "copiedLink": "Copied!",
      "close": "Close",
      "unavailable": "QR code unavailable — check your connection and try again."
    },
    "historyDrawer": {
      "title": "Recent Inboxes",
      "desc": "Addresses you've used recently. They're saved in this browser only.",
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
      "deleteInboxDesc": "This removes the address and its saved messages from this browser and creates a new one. You can only reopen it later if it has a password and you saved it.",
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
      "generatedNew": "New address created.",
      "mailboxDeleted": "Inbox removed. A new address is ready.",
      "customCreated": "Created custom inbox: {address}",
      "customFailed": "Failed to create inbox. Please try a different username.",
      "providerSwitched": "Switched active provider to {provider}",
      "historyCleared": "Saved inboxes cleared from this browser.",
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
      "title": "Where People Use It",
      "subtitle": "Common signups where a throwaway address makes more sense than your real one.",
      "items": [
        {
          "category": "AI & Software Trials",
          "badge": "ChatGPT & SaaS",
          "title": "Temp Mail for ChatGPT & Free Trials",
          "description": "Sign up for AI tools, developer APIs and SaaS trials without putting your main address on their marketing lists.",
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
          "description": "Make a second gaming profile, join a Discord server or claim a beta key without linking it to your main inbox.",
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
          "description": "Register on forums and community sites, or get past the email gate on a whitepaper or PDF download, without sharing your real address.",
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
          "description": "Test the signup, confirmation and password-reset emails your own app sends. Create several addresses to sign up as different test users.",
          "tags": [
            "Signup Flow QA",
            "Transactional Email",
            "Auth Verification",
            "Multiple Test Users"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Verification Codes",
      "title": "Receive OTP verification codes",
      "subtitle": "When an email contains a 4–8 digit code or a verification link, TempoEmails shows it above the message with a copy button, so you don't have to scroll through the template to find it.",
      "tag1": "4 to 8-Digit OTPs",
      "tag2": "Verification Links",
      "tag3": "One-Click Copy",
      "previewBadge": "Inbox Preview",
      "previewDetected": "Auto-Detected",
      "previewCode": "Verification Code",
      "previewCopy": "Copy",
      "previewFrom": "From: Security Team",
      "previewSubj": "Your one-time verification code is 593821",
      "previewTime": "Just now"
    },
    "features": {
      "badge": "Features",
      "title": "What the Inbox Does",
      "subtitle": "A receive-only inbox in your browser, backed by several public temp-mail providers.",
      "items": [
        {
          "title": "Free Disposable Temp Mail Generator",
          "description": "An address is created when the page loads. Use it for signups you don't want tied to your real inbox, so the newsletters and promotions that follow go somewhere you can walk away from."
        },
        {
          "title": "Automatic OTP & Code Extractor",
          "description": "Verification codes and confirmation links are picked out of each email and shown with a copy button."
        },
        {
          "title": "No Sign-Up Required",
          "description": "You never create an account with us. Mail.tm and Mail.gw inboxes come with a generated password so you can reopen them later. Other providers' inboxes have no password, so anyone who knows the address can read them."
        },
        {
          "title": "QR Code for Your Phone",
          "description": "Scan the QR code to get the address onto your phone, handy for signing up in a mobile app. Mail sent to it still shows up in this browser."
        },
        {
          "title": "Live Auto-Refreshing Inbox",
          "description": "The inbox checks for new mail every 10 seconds and can play a short sound when something arrives. You can also refresh by hand."
        },
        {
          "title": "Recent Inbox History",
          "description": "Up to 25 recent addresses are kept in this browser. Switch back to one to check for a late email; messages you already received stay cached."
        }
      ]
    },
    "howItWorks": {
      "badge": "How It Works",
      "title": "How Disposable Email Works in 4 Steps",
      "subtitle": "Nothing to install and no form to fill in.",
      "step1Title": "1. Copy Your Free Address",
      "step1Desc": "An address from one of our mail providers is ready when the page loads. Copy it with one click.",
      "step2Title": "2. Use in Any Signup Form",
      "step2Desc": "Use it wherever a site asks for an email: a signup form, a free trial, a download.",
      "step3Title": "3. Get the Code",
      "step3Desc": "New mail shows up within about 10 seconds of reaching the provider. Codes and confirmation links are shown at the top with a copy button.",
      "step4Title": "4. Delete or Move On",
      "step4Desc": "Delete the inbox or make a new address when you're done. Any marketing that follows goes to the throwaway address, not your real one."
    },
    "faq": {
      "badge": "Common Questions",
      "title": "Frequently Asked Questions",
      "subtitle": "Short answers about how the inbox works.",
      "q1": "What is temp mail and how does a disposable temporary email work?",
      "a1": "Temp mail (also called disposable or burner email) is an address you can use right away without signing up for anything. Mail sent to it shows up on this page. It's meant for signups and verification emails you don't want in your personal inbox.",
      "q2": "Can I use TempoEmails as a 10 minute mail for OTP verification codes?",
      "a2": "Yes. When an email contains a 4–8 digit code or a confirmation link, it's shown above the message with a copy button. The inbox checks for new mail every 10 seconds, so a code usually appears shortly after the site sends it.",
      "q3": "Can I use temporary email for Discord, ChatGPT, Telegram, or Steam?",
      "a3": "Often, yes. Some services block known disposable domains. If nothing arrives after a minute or two, click \"New Email\" or \"Custom\" to get an address on a different domain and try again.",
      "q4": "Can I send outbound emails from TempoEmails?",
      "a4": "No. The inbox is receive-only: you can read, download and delete messages, but you can't send or reply from the address.",
      "q5": "Can I choose my own custom temp mail username and domain?",
      "a5": "Yes. Click \"Custom\", type a username and pick one of the domains currently offered by Mail.tm, Mail.gw, Inboxes or Guerrilla Mail. If the name is taken, try another.",
      "q6": "Is it free, and who can read my messages?",
      "a6": "It's free and there's nothing to register. Messages are held by the provider that hosts the address and cached in your browser. Mail.tm and Mail.gw inboxes are protected by a password (see \"Access\"); Inboxes, Guerrilla Mail and TempMail.lol addresses can be read by anyone who knows them. Don't use a temporary address for anything sensitive."
    },
    "cta": {
      "title": "Your inbox is already live.",
      "subtitle": "Nothing to sign up for. Copy the address and new mail shows up here. Mail.tm and Mail.gw inboxes also get a password, so you can reopen them later.",
      "button": "Open my inbox"
    },
    "footer": {
      "brandDesc": "Free disposable email for signups and verification codes. Receive-only, with no account to create.",
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
      "pageNotFoundDesc": "This page doesn't exist, a bit like an expired temporary address. Your inbox is still on the homepage.",
      "goToHomepage": "Go to Homepage",
      "readOurBlog": "Read Our Blog",
      "translationNotice": "This article is currently displayed in English. Full translation is in progress."
    },
    "pages": {
      "about": {
        "title": "About TempoEmails — Free Temp Mail & Disposable Email",
        "description": "Why we built TempoEmails: a free temp mail site that puts several public disposable-mail providers behind one inbox, with automatic OTP detection.",
        "heading": "Why We Built TempoEmails",
        "subheading": "A simple temporary inbox for signups you don't want in your real email."
      },
      "contact": {
        "title": "Contact TempoEmails Support & Temp Mail Assistance",
        "description": "Contact TempoEmails about bugs, delivery problems, abuse reports, partnerships or feedback.",
        "heading": "Contact TempoEmails Support",
        "subheading": "Have a question, spotted a bug, or need help? Reach out to us."
      },
      "blog": {
        "title": "Temp Mail, Privacy & Online Security Blog — TempoEmails",
        "description": "Guides on temp mail, disposable email, OTP verification codes and keeping your main inbox private.",
        "heading": "Privacy & Security Guides",
        "subheading": "Practical guides on avoiding spam, managing online accounts, and protecting your primary email address.",
        "faqHeading": "Frequently Asked Questions",
        "relatedHeading": "Related Guides"
      },
      "privacy": {
        "title": "Privacy Policy — TempoEmails",
        "description": "How TempoEmails handles data: what the mail providers store, what stays in your browser, server logs, cookies and ads.",
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
      "description": "Correo temporal gratis con una dirección desechable lista en cuanto carga la página. Recibe códigos OTP y enlaces de activación sin dar tu correo real.",
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
      "chips": ["Sin registro","Códigos OTP resaltados","Solo recepción"],
      "worksWith": "Funciona con",
      "badge": "Correo temporal gratis, sin registro",
      "titleLine1": "Correo Temporal Gratis.",
      "titleLine2": "Email Desechable en Segundos.",
      "subtitle": "Genera al instante una dirección de correo temporal desechable. Recibe códigos de verificación OTP y enlaces de activación."
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
      "emptyDesc": "Copia la dirección de arriba y úsala en un formulario de registro. La bandeja busca correo nuevo cada 10 segundos.",
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
      "desc": "Elige un nombre de usuario y un dominio. Si un sitio rechaza un dominio, prueba con otro.",
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
      "desc": "Escanéalo con la cámara del móvil para llevar esta dirección a tu teléfono, por ejemplo para registrarte en una app. El correo seguirá llegando aquí.",
      "copyLink": "Copiar dirección",
      "copiedLink": "¡Copiada!",
      "close": "Cerrar",
      "unavailable": "Código QR no disponible: revisa tu conexión e inténtalo de nuevo."
    },
    "historyDrawer": {
      "title": "Buzones Recientes",
      "desc": "Direcciones que has usado hace poco. Solo se guardan en este navegador.",
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
      "deleteInboxDesc": "Se eliminarán la dirección y sus mensajes guardados de este navegador y se creará una nueva. Solo podrás volver a abrirla si tiene contraseña y la guardaste.",
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
      "generatedNew": "Nueva dirección creada.",
      "mailboxDeleted": "Bandeja eliminada. Ya tienes una dirección nueva.",
      "customCreated": "Buzón personalizado creado: {address}",
      "customFailed": "Error al crear el buzón. Prueba con otro nombre de usuario.",
      "providerSwitched": "Proveedor activo cambiado a {provider}",
      "historyCleared": "Bandejas guardadas borradas de este navegador.",
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
      "title": "Dónde se usa",
      "subtitle": "Registros habituales en los que una dirección desechable tiene más sentido que la tuya.",
      "items": [
        {
          "category": "Pruebas de IA y Software",
          "badge": "ChatGPT y SaaS",
          "title": "Correo Temporal para ChatGPT y Pruebas Gratuitas",
          "description": "Regístrate en herramientas de IA, APIs para desarrolladores y pruebas de SaaS sin que tu dirección principal acabe en sus listas de marketing.",
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
          "description": "Crea un segundo perfil de juego, únete a un servidor de Discord o consigue una clave beta sin vincularlo a tu correo principal.",
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
          "description": "Regístrate en foros y comunidades, o descarga un whitepaper o PDF que pide un correo, sin compartir tu dirección real.",
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
          "description": "Prueba los correos de registro, confirmación y cambio de contraseña que envía tu propia app. Crea varias direcciones para registrarte como distintos usuarios de prueba.",
          "tags": [
            "QA Flujo Registro",
            "Correo transaccional",
            "Verificación Auth",
            "Varios usuarios de prueba"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Códigos de verificación",
      "title": "Recibe códigos OTP de verificación al instante en tu email temporal.",
      "subtitle": "Cuando un correo incluye un código de 4 a 8 dígitos o un enlace de verificación, TempoEmails lo muestra encima del mensaje con un botón para copiarlo, sin tener que buscarlo en la plantilla.",
      "tag1": "Códigos OTP de 4 a 8 Dígitos",
      "tag2": "Enlaces de verificación",
      "tag3": "Copiar con un clic",
      "previewBadge": "Vista Previa",
      "previewDetected": "Detectado Automáticamente",
      "previewCode": "Código de Verificación",
      "previewCopy": "Copiar",
      "previewFrom": "De: Equipo de Seguridad",
      "previewSubj": "Su código de verificación único es 593821",
      "previewTime": "Ahora mismo"
    },
    "features": {
      "badge": "Funciones",
      "title": "Qué hace la bandeja",
      "subtitle": "Una bandeja de solo recepción en tu navegador, respaldada por varios proveedores públicos de correo temporal.",
      "items": [
        {
          "title": "Generador de Correo Temporal Gratuito",
          "description": "La dirección se crea al cargar la página. Úsala en registros que no quieras vincular a tu correo real, para que los boletines y promociones posteriores lleguen a un sitio que puedes abandonar."
        },
        {
          "title": "Extractor Automático de OTP y Códigos",
          "description": "Los códigos de verificación y los enlaces de confirmación se extraen de cada correo y se muestran con un botón para copiarlos."
        },
        {
          "title": "Sin registro",
          "description": "Nunca creas una cuenta con nosotros. Las bandejas de Mail.tm y Mail.gw incluyen una contraseña generada para volver a abrirlas más tarde. Las de otros proveedores no tienen contraseña: cualquiera que conozca la dirección puede leerlas."
        },
        {
          "title": "Código QR para el móvil",
          "description": "Escanea el código QR para llevar la dirección a tu teléfono, útil para registrarte en una app. El correo seguirá llegando a este navegador."
        },
        {
          "title": "Bandeja de Entrada con Auto-Actualización en Vivo",
          "description": "La bandeja busca correo nuevo cada 10 segundos y puede sonar un aviso cuando llega algo. También puedes actualizar a mano."
        },
        {
          "title": "Historial de bandejas",
          "description": "Se guardan hasta 25 direcciones recientes en este navegador. Vuelve a una para revisar un correo que llegó tarde; los mensajes ya recibidos siguen guardados."
        }
      ]
    },
    "howItWorks": {
      "badge": "Cómo funciona",
      "title": "Cómo Funciona el Correo Temporal en 4 Pasos",
      "subtitle": "Nada que instalar ni formularios que rellenar.",
      "step1Title": "1. Copia tu Dirección Gratuita",
      "step1Desc": "Al cargar la página ya tienes una dirección de uno de nuestros proveedores de correo. Cópiala con un clic.",
      "step2Title": "2. Úsala en Cualquier Registro",
      "step2Desc": "Úsala donde un sitio pida un correo: un registro, una prueba gratuita, una descarga.",
      "step3Title": "3. Recibe el código",
      "step3Desc": "El correo nuevo aparece unos 10 segundos después de llegar al proveedor. Los códigos y enlaces de confirmación se muestran arriba con un botón para copiarlos.",
      "step4Title": "4. Elimínala o sigue",
      "step4Desc": "Cuando termines, elimina la bandeja o crea una dirección nueva. El marketing que llegue después irá a la dirección desechable, no a la tuya."
    },
    "faq": {
      "badge": "Preguntas Frecuentes",
      "title": "Preguntas Frecuentes",
      "subtitle": "Respuestas breves sobre cómo funciona la bandeja.",
      "q1": "¿Qué es el correo temporal y cómo funciona un email desechable?",
      "a1": "El correo temporal (también llamado desechable) es una dirección que puedes usar al instante sin registrarte en nada. Lo que se envía a ella aparece en esta página. Sirve para registros y correos de verificación que no quieres en tu bandeja personal.",
      "q2": "¿Puedo usar TempoEmails para códigos de verificación OTP?",
      "a2": "Sí. Cuando un correo incluye un código de 4 a 8 dígitos o un enlace de confirmación, se muestra encima del mensaje con un botón para copiarlo. La bandeja busca correo nuevo cada 10 segundos, así que el código suele aparecer poco después de que el sitio lo envíe.",
      "q3": "¿Funciona en Discord, ChatGPT, Telegram o Steam?",
      "a3": "A menudo sí. Algunos servicios bloquean dominios desechables conocidos. Si no llega nada en uno o dos minutos, pulsa \"Nuevo correo\" o \"Personalizar\" para obtener una dirección en otro dominio y vuelve a intentarlo.",
      "q4": "¿Puedo enviar correos salientes desde TempoEmails?",
      "a4": "No. La bandeja es solo de recepción: puedes leer, descargar y eliminar mensajes, pero no enviar ni responder desde la dirección.",
      "q5": "¿Puedo elegir mi propio nombre de usuario y dominio?",
      "a5": "Sí. Pulsa \"Personalizar\", escribe un nombre de usuario y elige uno de los dominios que ofrecen ahora Mail.tm, Mail.gw, Inboxes o Guerrilla Mail. Si el nombre ya está ocupado, prueba otro.",
      "q6": "¿Es gratis y quién puede leer mis mensajes?",
      "a6": "Es gratis y no hay nada que registrar. Los mensajes los guarda el proveedor de la dirección y se almacenan en caché en tu navegador. Las bandejas de Mail.tm y Mail.gw están protegidas con contraseña (ver \"Acceso\"); las direcciones de Inboxes, Guerrilla Mail y TempMail.lol las puede leer cualquiera que las conozca. No uses una dirección temporal para nada delicado."
    },
    "cta": {
      "title": "Tu bandeja ya está activa.",
      "subtitle": "No hay que registrarse. Copia la dirección y el correo nuevo aparecerá aquí. Las bandejas de Mail.tm y Mail.gw tienen además contraseña para volver a abrirlas más tarde.",
      "button": "Abrir mi bandeja"
    },
    "footer": {
      "brandDesc": "Correo desechable gratis para registros y códigos de verificación. Solo recepción y sin cuentas que crear.",
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
      "pageNotFoundDesc": "Esta página no existe, como una dirección temporal caducada. Tu bandeja sigue en la página de inicio.",
      "goToHomepage": "Ir a la Página Principal",
      "readOurBlog": "Leer Nuestro Blog",
      "translationNotice": "Este artículo se muestra actualmente en inglés. La traducción completa está en proceso."
    },
    "pages": {
      "about": {
        "title": "Sobre TempoEmails — Correo temporal y desechable gratis",
        "description": "Por qué creamos TempoEmails: un sitio de correo temporal gratis que reúne varios proveedores públicos de correo desechable en una sola bandeja, con detección automática de OTP.",
        "heading": "Por Qué Creamos TempoEmails",
        "subheading": "Una bandeja temporal sencilla para registros que no quieres en tu correo real."
      },
      "contact": {
        "title": "Contacto y Soporte de TempoEmails",
        "description": "Contacta con TempoEmails sobre errores, problemas de entrega, denuncias de abuso, colaboraciones o sugerencias.",
        "heading": "Contacto y Soporte",
        "subheading": "¿Tiene alguna pregunta, detectó un error o necesita ayuda? Póngase en contacto con nosotros."
      },
      "blog": {
        "title": "Blog de Privacidad, Seguridad y Correo Temporal — TempoEmails",
        "description": "Guías sobre correo temporal, correo desechable, códigos OTP y cómo mantener privada tu bandeja principal.",
        "heading": "Guías de Privacidad y Seguridad",
        "subheading": "Consejos prácticos para evitar el spam, gestionar cuentas online y proteger su correo principal.",
        "faqHeading": "Preguntas frecuentes",
        "relatedHeading": "Guías relacionadas"
      },
      "privacy": {
        "title": "Política de Privacidad — TempoEmails",
        "description": "Cómo trata los datos TempoEmails: qué guardan los proveedores de correo, qué queda en tu navegador, registros del servidor, cookies y anuncios.",
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
      "description": "E-mail temporário grátis com um endereço descartável pronto assim que a página carrega. Receba códigos OTP e links de ativação sem informar seu e-mail real.",
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
      "chips": ["Sem cadastro","Códigos OTP em destaque","Só recebimento"],
      "worksWith": "Funciona com",
      "badge": "E-mail temporário grátis, sem cadastro",
      "titleLine1": "Email Temporário Grátis.",
      "titleLine2": "Email Descartável em Segundos.",
      "subtitle": "Gere um endereço de email temporário e descartável em um clique. Receba códigos OTP e links de ativação."
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
      "emptyDesc": "Copie o endereço acima e use-o em um formulário de cadastro. A caixa verifica novos e-mails a cada 10 segundos.",
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
      "desc": "Escolha um nome de usuário e um domínio. Se um site recusar um domínio, tente outro.",
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
      "desc": "Escaneie com a câmera do celular para levar este endereço ao telefone, por exemplo para se cadastrar em um app. Os e-mails continuam chegando aqui.",
      "copyLink": "Copiar endereço",
      "copiedLink": "Copiado!",
      "close": "Fechar",
      "unavailable": "QR code indisponível — verifique sua conexão e tente novamente."
    },
    "historyDrawer": {
      "title": "Emails Recentes",
      "desc": "Endereços que você usou recentemente. Ficam salvos apenas neste navegador.",
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
      "deleteInboxDesc": "O endereço e as mensagens salvas serão removidos deste navegador e um novo será criado. Você só poderá reabri-lo se ele tiver senha e você a tiver guardado.",
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
      "generatedNew": "Novo endereço criado.",
      "mailboxDeleted": "Caixa removida. Um novo endereço está pronto.",
      "customCreated": "Email personalizado criado: {address}",
      "customFailed": "Falha ao criar email. Tente outro nome de usuário.",
      "providerSwitched": "Provedor ativo alternado para {provider}",
      "historyCleared": "Caixas salvas apagadas deste navegador.",
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
      "title": "Onde as pessoas usam",
      "subtitle": "Cadastros comuns em que um endereço descartável faz mais sentido do que o seu real.",
      "items": [
        {
          "category": "Testes de IA e Software",
          "badge": "ChatGPT e SaaS",
          "title": "E-mail Temporário para ChatGPT e Testes Grátis",
          "description": "Cadastre-se em ferramentas de IA, APIs para desenvolvedores e testes de SaaS sem colocar seu endereço principal nas listas de marketing deles.",
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
          "description": "Crie um segundo perfil de jogo, entre em um servidor do Discord ou resgate uma chave beta sem vincular ao seu e-mail principal.",
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
          "description": "Cadastre-se em fóruns e comunidades, ou baixe um whitepaper ou PDF que pede e-mail, sem informar seu endereço real.",
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
          "description": "Teste os e-mails de cadastro, confirmação e redefinição de senha que o seu próprio app envia. Crie vários endereços para se cadastrar como usuários de teste diferentes.",
          "tags": [
            "QA Fluxo Cadastro",
            "E-mail transacional",
            "Verificação Auth",
            "Vários usuários de teste"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Códigos de verificação",
      "title": "Receba códigos OTP de verificação instantaneamente no email temporário.",
      "subtitle": "Quando um e-mail traz um código de 4 a 8 dígitos ou um link de verificação, o TempoEmails mostra isso acima da mensagem com um botão de copiar, sem você precisar procurar no meio do modelo.",
      "tag1": "Códigos OTP de 4 a 8 Dígitos",
      "tag2": "Links de verificação",
      "tag3": "Copiar com um clique",
      "previewBadge": "Prévia da Caixa",
      "previewDetected": "Detectado Automaticamente",
      "previewCode": "Código de Verificação",
      "previewCopy": "Copiar",
      "previewFrom": "De: Equipe de Segurança",
      "previewSubj": "Seu código de verificação único é 593821",
      "previewTime": "Agora mesmo"
    },
    "features": {
      "badge": "Recursos",
      "title": "O que a caixa faz",
      "subtitle": "Uma caixa só de recebimento no seu navegador, apoiada por vários provedores públicos de e-mail temporário.",
      "items": [
        {
          "title": "Gerador de E-mail Temporário Grátis",
          "description": "O endereço é criado quando a página carrega. Use-o em cadastros que você não quer ligar ao seu e-mail real, para que as newsletters e promoções que vierem depois caiam num lugar que você pode abandonar."
        },
        {
          "title": "Extrator Automático de OTP e Códigos",
          "description": "Códigos de verificação e links de confirmação são extraídos de cada e-mail e exibidos com um botão de copiar."
        },
        {
          "title": "Sem cadastro",
          "description": "Você nunca cria uma conta conosco. As caixas do Mail.tm e do Mail.gw vêm com uma senha gerada para você reabri-las depois. As de outros provedores não têm senha: qualquer pessoa que saiba o endereço pode lê-las."
        },
        {
          "title": "QR code para o celular",
          "description": "Escaneie o QR code para levar o endereço ao telefone, útil para se cadastrar em um app. Os e-mails continuam chegando neste navegador."
        },
        {
          "title": "Caixa de Entrada com Atualização em Tempo Real",
          "description": "A caixa verifica novos e-mails a cada 10 segundos e pode tocar um som curto quando algo chega. Você também pode atualizar manualmente."
        },
        {
          "title": "Histórico de caixas",
          "description": "Até 25 endereços recentes ficam salvos neste navegador. Volte a um deles para conferir um e-mail atrasado; as mensagens já recebidas continuam guardadas."
        }
      ]
    },
    "howItWorks": {
      "badge": "Como funciona",
      "title": "Como Funciona o Email Temporário em 4 Passos",
      "subtitle": "Nada para instalar e nenhum formulário para preencher.",
      "step1Title": "1. Copie seu Endereço Grátis",
      "step1Desc": "Um endereço de um dos nossos provedores de e-mail fica pronto quando a página carrega. Copie com um clique.",
      "step2Title": "2. Use em Cadastros",
      "step2Desc": "Use-o onde um site pedir e-mail: um cadastro, um teste grátis, um download.",
      "step3Title": "3. Receba o código",
      "step3Desc": "Novos e-mails aparecem cerca de 10 segundos depois de chegarem ao provedor. Códigos e links de confirmação aparecem no topo com um botão de copiar.",
      "step4Title": "4. Apague ou siga em frente",
      "step4Desc": "Quando terminar, apague a caixa ou crie um novo endereço. O marketing que vier depois vai para o endereço descartável, não para o seu."
    },
    "faq": {
      "badge": "Dúvidas Comuns",
      "title": "Perguntas Frequentes",
      "subtitle": "Respostas curtas sobre como a caixa funciona.",
      "q1": "O que é email temporário e como funciona?",
      "a1": "E-mail temporário (também chamado de descartável) é um endereço que você pode usar na hora, sem se cadastrar em nada. O que for enviado para ele aparece nesta página. Serve para cadastros e e-mails de verificação que você não quer na sua caixa pessoal.",
      "q2": "Posso usar o TempoEmails para receber códigos OTP?",
      "a2": "Sim. Quando um e-mail traz um código de 4 a 8 dígitos ou um link de confirmação, ele aparece acima da mensagem com um botão de copiar. A caixa verifica novos e-mails a cada 10 segundos, então o código costuma aparecer pouco depois de o site enviá-lo.",
      "q3": "Funciona para Discord, ChatGPT, Telegram ou Steam?",
      "a3": "Muitas vezes, sim. Alguns serviços bloqueiam domínios descartáveis conhecidos. Se nada chegar em um ou dois minutos, clique em \"Novo email\" ou \"Personalizar\" para obter um endereço em outro domínio e tente de novo.",
      "q4": "Posso enviar mensagens a partir do TempoEmails?",
      "a4": "Não. A caixa é só de recebimento: você pode ler, baixar e apagar mensagens, mas não pode enviar nem responder a partir do endereço.",
      "q5": "Posso escolher um nome de usuário personalizado?",
      "a5": "Sim. Clique em \"Personalizar\", digite um nome de usuário e escolha um dos domínios oferecidos no momento pelo Mail.tm, Mail.gw, Inboxes ou Guerrilla Mail. Se o nome já estiver em uso, tente outro.",
      "q6": "É grátis? Quem pode ler minhas mensagens?",
      "a6": "É grátis e não há nada para cadastrar. As mensagens ficam com o provedor do endereço e em cache no seu navegador. As caixas do Mail.tm e do Mail.gw são protegidas por senha (veja \"Acesso\"); endereços do Inboxes, Guerrilla Mail e TempMail.lol podem ser lidos por qualquer pessoa que os conheça. Não use um endereço temporário para nada sensível."
    },
    "cta": {
      "title": "Sua caixa de entrada já está ativa.",
      "subtitle": "Não precisa se cadastrar. Copie o endereço e os novos e-mails aparecem aqui. As caixas do Mail.tm e do Mail.gw também ganham uma senha para você reabri-las depois.",
      "button": "Abrir minha caixa"
    },
    "footer": {
      "brandDesc": "E-mail descartável grátis para cadastros e códigos de verificação. Só recebimento, sem conta para criar.",
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
      "pageNotFoundDesc": "Esta página não existe, como um endereço temporário expirado. Sua caixa continua na página inicial.",
      "goToHomepage": "Ir para a Página Inicial",
      "readOurBlog": "Ler Nosso Blog",
      "translationNotice": "Este artigo está atualmente em inglês. A tradução completa está em andamento."
    },
    "pages": {
      "about": {
        "title": "Sobre o TempoEmails — E-mail temporário e descartável grátis",
        "description": "Por que criamos o TempoEmails: um site de e-mail temporário grátis que reúne vários provedores públicos de e-mail descartável em uma só caixa, com detecção automática de OTP.",
        "heading": "Por Que Criamos o TempoEmails",
        "subheading": "Uma caixa temporária simples para cadastros que você não quer no seu e-mail real."
      },
      "contact": {
        "title": "Contato e Suporte do TempoEmails",
        "description": "Fale com o TempoEmails sobre bugs, problemas de entrega, denúncias de abuso, parcerias ou sugestões.",
        "heading": "Contato e Suporte",
        "subheading": "Tem alguma dúvida, encontrou um erro ou precisa de ajuda? Fale conosco."
      },
      "blog": {
        "title": "Blog de Privacidade, Segurança e E-mail Temporário — TempoEmails",
        "description": "Guias sobre e-mail temporário, e-mail descartável, códigos OTP e como manter sua caixa principal privada.",
        "heading": "Guias de Privacidade e Segurança",
        "subheading": "Dicas práticas para evitar spam, gerenciar contas online e proteger seu e-mail principal.",
        "faqHeading": "Perguntas frequentes",
        "relatedHeading": "Guias relacionados"
      },
      "privacy": {
        "title": "Política de Privacidade — TempoEmails",
        "description": "Como o TempoEmails trata dados: o que os provedores de e-mail guardam, o que fica no seu navegador, logs do servidor, cookies e anúncios.",
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
      "description": "Email temporaire gratuit avec une adresse jetable prête dès le chargement de la page. Recevez codes OTP et liens d’activation sans donner votre vraie adresse.",
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
      "chips": ["Sans inscription","Codes OTP mis en avant","Réception seule"],
      "worksWith": "Compatible avec",
      "badge": "Email temporaire gratuit, sans inscription",
      "titleLine1": "Email Temporaire Gratuit.",
      "titleLine2": "Email Jetable en Quelques Secondes.",
      "subtitle": "Générez une adresse email temporaire jetable en un clic. Recevez vos codes de vérification OTP et liens d’activation."
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
      "emptyDesc": "Copiez l’adresse ci-dessus et utilisez-la dans un formulaire d’inscription. La boîte vérifie les nouveaux messages toutes les 10 secondes.",
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
      "desc": "Choisissez un nom d’utilisateur et un domaine. Si un site refuse un domaine, essayez-en un autre.",
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
      "desc": "Scannez avec l’appareil photo de votre téléphone pour y récupérer cette adresse, par exemple pour vous inscrire dans une application. Les messages continuent d’arriver ici.",
      "copyLink": "Copier l’adresse",
      "copiedLink": "Copiée !",
      "close": "Fermer",
      "unavailable": "QR code indisponible — vérifiez votre connexion et réessayez."
    },
    "historyDrawer": {
      "title": "Boîtes Récentes",
      "desc": "Les adresses utilisées récemment. Elles ne sont enregistrées que dans ce navigateur.",
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
      "deleteInboxDesc": "L’adresse et ses messages enregistrés seront retirés de ce navigateur et une nouvelle sera créée. Vous ne pourrez la rouvrir que si elle a un mot de passe et que vous l’avez noté.",
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
      "generatedNew": "Nouvelle adresse créée.",
      "mailboxDeleted": "Boîte supprimée. Une nouvelle adresse est prête.",
      "customCreated": "Boîte personnalisée créée : {address}",
      "customFailed": "Échec de la création. Essayez un autre identifiant.",
      "providerSwitched": "Fournisseur actif basculé sur {provider}",
      "historyCleared": "Boîtes enregistrées effacées de ce navigateur.",
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
      "title": "À quoi elle sert",
      "subtitle": "Des inscriptions courantes où une adresse jetable a plus de sens que la vôtre.",
      "items": [
        {
          "category": "Essais IA & Logiciels",
          "badge": "ChatGPT & SaaS",
          "title": "E-mail Temporaire pour ChatGPT et Essais Gratuits",
          "description": "Inscrivez-vous à des outils d’IA, des API pour développeurs et des essais SaaS sans que votre adresse principale finisse dans leurs listes marketing.",
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
          "description": "Créez un second profil de joueur, rejoignez un serveur Discord ou récupérez une clé bêta sans le lier à votre boîte principale.",
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
          "description": "Inscrivez-vous sur des forums et des communautés, ou téléchargez un livre blanc ou un PDF qui demande un email, sans donner votre vraie adresse.",
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
          "description": "Testez les emails d’inscription, de confirmation et de réinitialisation de mot de passe envoyés par votre application. Créez plusieurs adresses pour vous inscrire comme différents utilisateurs de test.",
          "tags": [
            "QA Inscription",
            "Email transactionnel",
            "Vérification Auth",
            "Plusieurs utilisateurs test"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Codes de vérification",
      "title": "Recevez instantanément vos codes OTP sur un email jetable.",
      "subtitle": "Quand un email contient un code de 4 à 8 chiffres ou un lien de vérification, TempoEmails l’affiche au-dessus du message avec un bouton de copie, sans avoir à le chercher dans le modèle.",
      "tag1": "Codes OTP de 4 à 8 Chiffres",
      "tag2": "Liens de vérification",
      "tag3": "Copie en un clic",
      "previewBadge": "Aperçu Boîte",
      "previewDetected": "Détecté Automatiquement",
      "previewCode": "Code de Vérification",
      "previewCopy": "Copier",
      "previewFrom": "De : Équipe Sécurité",
      "previewSubj": "Votre code de vérification unique est 593821",
      "previewTime": "À l'instant"
    },
    "features": {
      "badge": "Fonctionnalités",
      "title": "Ce que fait la boîte",
      "subtitle": "Une boîte de réception seule dans votre navigateur, adossée à plusieurs fournisseurs publics d’email temporaire.",
      "items": [
        {
          "title": "Générateur d'E-mail Temporaire Gratuit",
          "description": "L’adresse est créée au chargement de la page. Utilisez-la pour les inscriptions que vous ne voulez pas lier à votre vraie boîte : les newsletters et promotions qui suivent arriveront à un endroit que vous pouvez abandonner."
        },
        {
          "title": "Extracteur Automatique d'OTP et de Codes",
          "description": "Les codes de vérification et les liens de confirmation sont repérés dans chaque email et affichés avec un bouton de copie."
        },
        {
          "title": "Sans inscription",
          "description": "Vous ne créez jamais de compte chez nous. Les boîtes Mail.tm et Mail.gw ont un mot de passe généré pour les rouvrir plus tard. Celles des autres fournisseurs n’en ont pas : toute personne qui connaît l’adresse peut les lire."
        },
        {
          "title": "QR code pour votre téléphone",
          "description": "Scannez le QR code pour récupérer l’adresse sur votre téléphone, pratique pour s’inscrire dans une application. Les messages arrivent toujours dans ce navigateur."
        },
        {
          "title": "Boîte de Réception avec Rafraîchissement en Direct",
          "description": "La boîte vérifie les nouveaux messages toutes les 10 secondes et peut émettre un court son à leur arrivée. Vous pouvez aussi actualiser à la main."
        },
        {
          "title": "Historique des boîtes",
          "description": "Jusqu’à 25 adresses récentes sont conservées dans ce navigateur. Revenez à l’une d’elles pour un email arrivé en retard ; les messages déjà reçus restent en cache."
        }
      ]
    },
    "howItWorks": {
      "badge": "Fonctionnement",
      "title": "Comment Fonctionne l’Email Temporaire en 4 Étapes",
      "subtitle": "Rien à installer, aucun formulaire à remplir.",
      "step1Title": "1. Copiez votre Adresse Gratuite",
      "step1Desc": "Une adresse fournie par l’un de nos fournisseurs de messagerie est prête au chargement de la page. Copiez-la en un clic.",
      "step2Title": "2. Utilisez-la pour vos Inscriptions",
      "step2Desc": "Utilisez-la partout où un site demande un email : inscription, essai gratuit, téléchargement.",
      "step3Title": "3. Récupérez le code",
      "step3Desc": "Les nouveaux messages apparaissent environ 10 secondes après leur arrivée chez le fournisseur. Codes et liens de confirmation s’affichent en haut avec un bouton de copie.",
      "step4Title": "4. Supprimez ou passez à autre chose",
      "step4Desc": "Une fois terminé, supprimez la boîte ou créez une nouvelle adresse. Le marketing qui suit ira à l’adresse jetable, pas à la vôtre."
    },
    "faq": {
      "badge": "Questions Fréquentes",
      "title": "Foire Aux Questions",
      "subtitle": "Des réponses courtes sur le fonctionnement de la boîte.",
      "q1": "Qu’est-ce qu’un email temporaire et comment fonctionne-t-il ?",
      "a1": "Un email temporaire (ou jetable) est une adresse utilisable immédiatement, sans s’inscrire nulle part. Ce qui y est envoyé s’affiche sur cette page. Elle sert aux inscriptions et aux emails de vérification que vous ne voulez pas dans votre boîte personnelle.",
      "q2": "Puis-je utiliser TempoEmails pour recevoir des codes OTP ?",
      "a2": "Oui. Quand un email contient un code de 4 à 8 chiffres ou un lien de confirmation, il s’affiche au-dessus du message avec un bouton de copie. La boîte vérifie les nouveaux messages toutes les 10 secondes ; le code apparaît donc en général peu après l’envoi par le site.",
      "q3": "Est-il compatible avec Discord, ChatGPT, Telegram ou Steam ?",
      "a3": "Souvent, oui. Certains services bloquent les domaines jetables connus. Si rien n’arrive au bout d’une ou deux minutes, cliquez sur « Nouvel email » ou « Personnaliser » pour obtenir une adresse sur un autre domaine, puis réessayez.",
      "q4": "Puis-je envoyer des e-mails avec TempoEmails ?",
      "a4": "Non. La boîte fonctionne en réception seule : vous pouvez lire, télécharger et supprimer des messages, mais pas envoyer ni répondre depuis l’adresse.",
      "q5": "Puis-je choisir un identifiant personnalisé ?",
      "a5": "Oui. Cliquez sur « Personnaliser », saisissez un nom d’utilisateur et choisissez l’un des domaines proposés en ce moment par Mail.tm, Mail.gw, Inboxes ou Guerrilla Mail. Si le nom est déjà pris, essayez-en un autre.",
      "q6": "Est-ce gratuit, et qui peut lire mes messages ?",
      "a6": "C’est gratuit et il n’y a rien à créer. Les messages sont conservés par le fournisseur de l’adresse et mis en cache dans votre navigateur. Les boîtes Mail.tm et Mail.gw sont protégées par un mot de passe (voir « Accès ») ; les adresses Inboxes, Guerrilla Mail et TempMail.lol peuvent être lues par quiconque les connaît. N’utilisez pas d’adresse temporaire pour quoi que ce soit de sensible."
    },
    "cta": {
      "title": "Votre boîte est déjà active.",
      "subtitle": "Aucune inscription. Copiez l’adresse et les nouveaux messages s’afficheront ici. Les boîtes Mail.tm et Mail.gw ont aussi un mot de passe pour les rouvrir plus tard.",
      "button": "Ouvrir ma boîte"
    },
    "footer": {
      "brandDesc": "Email jetable gratuit pour les inscriptions et les codes de vérification. Réception seule, sans compte à créer.",
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
      "pageNotFoundDesc": "Cette page n’existe pas, un peu comme une adresse temporaire expirée. Votre boîte est toujours sur la page d’accueil.",
      "goToHomepage": "Retourner à l'Accueil",
      "readOurBlog": "Lire Notre Blog",
      "translationNotice": "Cet article est actuellement affiché en anglais. La traduction complète est en cours."
    },
    "pages": {
      "about": {
        "title": "À propos de TempoEmails — Email temporaire et jetable gratuit",
        "description": "Pourquoi nous avons créé TempoEmails : un site d’email temporaire gratuit qui réunit plusieurs fournisseurs publics d’email jetable dans une seule boîte, avec détection automatique des OTP.",
        "heading": "Pourquoi Nous Avons Créé TempoEmails",
        "subheading": "Une boîte temporaire simple pour les inscriptions que vous ne voulez pas dans votre vraie messagerie."
      },
      "contact": {
        "title": "Contact & Support TempoEmails",
        "description": "Contactez TempoEmails pour un bug, un problème de réception, un signalement d’abus, un partenariat ou une suggestion.",
        "heading": "Contact & Assistance",
        "subheading": "Une question, un problème ou une suggestion ? Contactez-nous."
      },
      "blog": {
        "title": "Blog Confidentialité, Sécurité & E-mail Jetable — TempoEmails",
        "description": "Guides sur l’email temporaire, l’email jetable, les codes OTP et la protection de votre boîte principale.",
        "heading": "Guides Confidentialité & Sécurité",
        "subheading": "Conseils pratiques pour éviter le spam, gérer vos comptes en ligne et protéger votre adresse principale.",
        "faqHeading": "Questions fréquentes",
        "relatedHeading": "Guides associés"
      },
      "privacy": {
        "title": "Politique de Confidentialité — TempoEmails",
        "description": "Comment TempoEmails traite les données : ce que stockent les fournisseurs de messagerie, ce qui reste dans votre navigateur, journaux serveur, cookies et publicités.",
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
      "description": "Kostenlose Wegwerf-E-Mail mit einer temporären Adresse, die beim Laden der Seite bereitsteht. OTP-Codes und Aktivierungslinks empfangen, ohne Ihre echte E-Mail anzugeben.",
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
      "chips": ["Ohne Anmeldung","OTP-Codes hervorgehoben","Nur Empfang"],
      "worksWith": "Funktioniert mit",
      "badge": "Kostenlose Temp-Mail ohne Anmeldung",
      "titleLine1": "Kostenlose Temporäre Email.",
      "titleLine2": "Wegwerf-Email in Sekunden.",
      "subtitle": "Erstelle mit einem Klick eine Wegwerf-Email-Adresse. Empfange Bestätigungscodes, OTPs und Aktivierungslinks."
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
      "emptyDesc": "Kopieren Sie die Adresse oben und verwenden Sie sie in einem Anmeldeformular. Das Postfach sucht alle 10 Sekunden nach neuer Post.",
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
      "desc": "Wählen Sie einen Benutzernamen und eine Domain. Lehnt eine Website die Domain ab, versuchen Sie eine andere.",
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
      "desc": "Mit der Handykamera scannen, um diese Adresse auf Ihr Telefon zu holen, etwa für die Anmeldung in einer App. Die Post kommt weiterhin hier an.",
      "copyLink": "Adresse kopieren",
      "copiedLink": "Kopiert!",
      "close": "Schließen",
      "unavailable": "QR-Code nicht verfügbar — bitte Verbindung prüfen und erneut versuchen."
    },
    "historyDrawer": {
      "title": "Letzte Postfächer",
      "desc": "Zuletzt verwendete Adressen. Sie werden nur in diesem Browser gespeichert.",
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
      "deleteInboxDesc": "Die Adresse und ihre gespeicherten Nachrichten werden aus diesem Browser entfernt, und eine neue wird erstellt. Wieder öffnen können Sie sie nur, wenn sie ein Passwort hat und Sie es gespeichert haben.",
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
      "generatedNew": "Neue Adresse erstellt.",
      "mailboxDeleted": "Postfach entfernt. Eine neue Adresse ist bereit.",
      "customCreated": "Wunsch-Postfach erstellt: {address}",
      "customFailed": "Erstellung fehlgeschlagen. Bitte anderen Namen wählen.",
      "providerSwitched": "Aktiver Mail-Provider gewechselt zu {provider}",
      "historyCleared": "Gespeicherte Postfächer aus diesem Browser gelöscht.",
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
      "title": "Wofür man es nutzt",
      "subtitle": "Typische Anmeldungen, bei denen eine Wegwerfadresse sinnvoller ist als Ihre echte.",
      "items": [
        {
          "category": "KI- & Software-Testphasen",
          "badge": "ChatGPT & SaaS",
          "title": "Wegwerf-E-Mail für ChatGPT & Testversionen",
          "description": "Melden Sie sich bei KI-Tools, Entwickler-APIs und SaaS-Testversionen an, ohne dass Ihre Hauptadresse auf deren Marketinglisten landet.",
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
          "description": "Legen Sie ein zweites Gaming-Profil an, treten Sie einem Discord-Server bei oder holen Sie sich einen Beta-Key, ohne es mit Ihrem Hauptpostfach zu verknüpfen.",
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
          "description": "Registrieren Sie sich in Foren und Communitys oder laden Sie ein Whitepaper oder PDF herunter, das eine E-Mail verlangt, ohne Ihre echte Adresse preiszugeben.",
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
          "description": "Testen Sie die Anmelde-, Bestätigungs- und Passwort-Reset-Mails Ihrer eigenen App. Erstellen Sie mehrere Adressen, um sich als verschiedene Testnutzer anzumelden.",
          "tags": [
            "Registrierungs-QA",
            "Transaktions-E-Mails",
            "Auth-Prüfung",
            "Mehrere Testnutzer"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Bestätigungscodes",
      "title": "Erhalte OTP-Bestätigungscodes sofort in deiner Wegwerf-Email.",
      "subtitle": "Enthält eine E-Mail einen 4- bis 8-stelligen Code oder einen Bestätigungslink, zeigt TempoEmails ihn über der Nachricht mit einer Kopieren-Schaltfläche an. Sie müssen ihn also nicht im Template suchen.",
      "tag1": "4- bis 8-stellige OTPs",
      "tag2": "Bestätigungslinks",
      "tag3": "Kopieren mit einem Klick",
      "previewBadge": "Postfach Vorschau",
      "previewDetected": "Automatisch Erkannt",
      "previewCode": "Bestätigungscode",
      "previewCopy": "Kopieren",
      "previewFrom": "Von: Sicherheitsteam",
      "previewSubj": "Ihr einmaliger Bestätigungscode lautet 593821",
      "previewTime": "Gerade eben"
    },
    "features": {
      "badge": "Funktionen",
      "title": "Was das Postfach kann",
      "subtitle": "Ein reines Empfangspostfach im Browser, gestützt auf mehrere öffentliche Temp-Mail-Anbieter.",
      "items": [
        {
          "title": "Kostenloser Wegwerf-E-Mail-Generator",
          "description": "Die Adresse wird beim Laden der Seite erstellt. Nutzen Sie sie für Anmeldungen, die nicht an Ihr echtes Postfach gebunden sein sollen. Newsletter und Werbung, die danach kommen, landen dort, wo Sie sie einfach zurücklassen können."
        },
        {
          "title": "Automatische OTP- & Code-Erkennung",
          "description": "Bestätigungscodes und -links werden aus jeder E-Mail herausgesucht und mit einer Kopieren-Schaltfläche angezeigt."
        },
        {
          "title": "Keine Anmeldung nötig",
          "description": "Sie legen bei uns nie ein Konto an. Postfächer von Mail.tm und Mail.gw erhalten ein generiertes Passwort, mit dem Sie sie später wieder öffnen können. Postfächer anderer Anbieter haben kein Passwort: Wer die Adresse kennt, kann sie lesen."
        },
        {
          "title": "QR-Code fürs Handy",
          "description": "Scannen Sie den QR-Code, um die Adresse aufs Telefon zu holen, praktisch für die Anmeldung in einer App. Die Post kommt weiterhin in diesem Browser an."
        },
        {
          "title": "Automatisch aktualisierender Live-Posteingang",
          "description": "Das Postfach sucht alle 10 Sekunden nach neuer Post und kann bei Eingang einen kurzen Ton abspielen. Sie können auch manuell aktualisieren."
        },
        {
          "title": "Verlauf der Postfächer",
          "description": "Bis zu 25 zuletzt genutzte Adressen bleiben in diesem Browser gespeichert. Wechseln Sie zurück, um nach einer verspäteten E-Mail zu sehen; bereits empfangene Nachrichten bleiben im Cache."
        }
      ]
    },
    "howItWorks": {
      "badge": "So funktioniert es",
      "title": "So Funktioniert Wegwerf-Email in 4 Schritten",
      "subtitle": "Nichts zu installieren, kein Formular auszufüllen.",
      "step1Title": "1. Kostenlose Adresse Kopieren",
      "step1Desc": "Beim Laden der Seite steht eine Adresse von einem unserer Mail-Anbieter bereit. Mit einem Klick kopieren.",
      "step2Title": "2. Bei Beliebigen Diensten Nutzen",
      "step2Desc": "Verwenden Sie sie überall, wo eine Website eine E-Mail verlangt: Anmeldung, Testversion, Download.",
      "step3Title": "3. Code abholen",
      "step3Desc": "Neue Post erscheint etwa 10 Sekunden, nachdem sie beim Anbieter eingegangen ist. Codes und Bestätigungslinks stehen oben mit einer Kopieren-Schaltfläche.",
      "step4Title": "4. Löschen oder weiterziehen",
      "step4Desc": "Löschen Sie das Postfach oder erstellen Sie eine neue Adresse, wenn Sie fertig sind. Werbung, die danach kommt, geht an die Wegwerfadresse, nicht an Ihre echte."
    },
    "faq": {
      "badge": "Häufige Fragen",
      "title": "Häufig Gestellte Fragen",
      "subtitle": "Kurze Antworten dazu, wie das Postfach funktioniert.",
      "q1": "Was ist eine Wegwerf-Email und wie funktioniert sie?",
      "a1": "Eine Temp-Mail (auch Wegwerf-E-Mail) ist eine Adresse, die Sie sofort nutzen können, ohne sich irgendwo anzumelden. Was an sie geschickt wird, erscheint auf dieser Seite. Gedacht ist sie für Anmeldungen und Bestätigungsmails, die Sie nicht im persönlichen Postfach haben wollen.",
      "q2": "Kann ich TempoEmails für OTP-Codes nutzen?",
      "a2": "Ja. Enthält eine E-Mail einen 4- bis 8-stelligen Code oder einen Bestätigungslink, wird er über der Nachricht mit einer Kopieren-Schaltfläche angezeigt. Das Postfach sucht alle 10 Sekunden nach neuer Post, der Code erscheint also meist kurz nachdem die Website ihn verschickt hat.",
      "q3": "Funktioniert es mit Discord, ChatGPT, Telegram oder Steam?",
      "a3": "Oft ja. Manche Dienste sperren bekannte Wegwerf-Domains. Kommt nach ein, zwei Minuten nichts an, klicken Sie auf „Neue Adresse“ oder „Anpassen“, um eine Adresse auf einer anderen Domain zu erhalten, und versuchen Sie es erneut.",
      "q4": "Kann ich von TempoEmails aus Emails versenden?",
      "a4": "Nein. Das Postfach ist ein reines Empfangspostfach: Sie können Nachrichten lesen, herunterladen und löschen, aber nicht von der Adresse senden oder antworten.",
      "q5": "Kann ich eine eigene Wunsch-Email wählen?",
      "a5": "Ja. Klicken Sie auf „Anpassen“, geben Sie einen Benutzernamen ein und wählen Sie eine der Domains, die Mail.tm, Mail.gw, Inboxes oder Guerrilla Mail gerade anbieten. Ist der Name vergeben, versuchen Sie einen anderen.",
      "q6": "Ist es kostenlos, und wer kann meine Nachrichten lesen?",
      "a6": "Es ist kostenlos, und Sie müssen nichts registrieren. Die Nachrichten liegen beim Anbieter der Adresse und im Cache Ihres Browsers. Postfächer von Mail.tm und Mail.gw sind passwortgeschützt (siehe „Zugang“); Adressen von Inboxes, Guerrilla Mail und TempMail.lol kann jeder lesen, der sie kennt. Verwenden Sie eine temporäre Adresse nicht für Vertrauliches."
    },
    "cta": {
      "title": "Ihr Postfach ist schon aktiv.",
      "subtitle": "Keine Anmeldung nötig. Adresse kopieren, neue Post erscheint hier. Postfächer von Mail.tm und Mail.gw erhalten zusätzlich ein Passwort, damit Sie sie später wieder öffnen können.",
      "button": "Mein Postfach öffnen"
    },
    "footer": {
      "brandDesc": "Kostenlose Wegwerf-E-Mail für Anmeldungen und Bestätigungscodes. Nur Empfang, ohne Konto.",
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
      "pageNotFoundDesc": "Diese Seite gibt es nicht, ähnlich wie eine abgelaufene Wegwerfadresse. Ihr Postfach finden Sie weiterhin auf der Startseite.",
      "goToHomepage": "Zur Startseite",
      "readOurBlog": "Blog lesen",
      "translationNotice": "Dieser Artikel wird derzeit auf Englisch angezeigt. Die vollständige Übersetzung ist in Arbeit."
    },
    "pages": {
      "about": {
        "title": "Über TempoEmails — Kostenlose Temp-Mail & Wegwerf-E-Mail",
        "description": "Warum wir TempoEmails gebaut haben: eine kostenlose Temp-Mail-Seite, die mehrere öffentliche Wegwerf-Mail-Anbieter in einem Postfach zusammenführt, mit automatischer OTP-Erkennung.",
        "heading": "Warum wir TempoEmails entwickelt haben",
        "subheading": "Ein einfaches temporäres Postfach für Anmeldungen, die nicht in Ihre echte E-Mail gehören."
      },
      "contact": {
        "title": "TempoEmails Kontakt & Support",
        "description": "Kontaktieren Sie TempoEmails zu Fehlern, Zustellproblemen, Missbrauchsmeldungen, Partnerschaften oder Feedback.",
        "heading": "Kontakt & Support",
        "subheading": "Haben Sie eine Frage, einen Fehler gefunden oder benötigen Sie Hilfe? Schreiben Sie uns."
      },
      "blog": {
        "title": "Datenschutz-, Sicherheits- & Wegwerf-E-Mail-Blog — TempoEmails",
        "description": "Ratgeber zu Temp-Mail, Wegwerf-E-Mail, OTP-Codes und dazu, wie Ihr Hauptpostfach privat bleibt.",
        "heading": "Datenschutz- & Sicherheitsleitfäden",
        "subheading": "Praktische Anleitungen zur Vermeidung von Spam, Verwaltung von Online-Konten und Schutz Ihrer Hauptadresse.",
        "faqHeading": "Häufig gestellte Fragen",
        "relatedHeading": "Weitere Leitfäden"
      },
      "privacy": {
        "title": "Datenschutzerklärung — TempoEmails",
        "description": "Wie TempoEmails mit Daten umgeht: was die Mail-Anbieter speichern, was in Ihrem Browser bleibt, Server-Logs, Cookies und Werbung.",
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
      "description": "ページを開くとすぐに使える無料の捨てメールアドレス。本当のメールアドレスを教えずに、OTP認証コードや有効化リンクを受信できます。",
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
      "chips": ["登録不要","OTPコードを強調表示","受信専用"],
      "worksWith": "対応サービス",
      "badge": "登録不要の無料捨てメール",
      "titleLine1": "無料捨てメアド。",
      "titleLine2": "数秒で使い捨てアドレス作成。",
      "subtitle": "ワンクリックで使い捨てメールアドレスを発行。登録時の認証コードや確認メールを受信できます。"
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
      "emptyDesc": "上のアドレスをコピーして登録フォームに入力してください。受信箱は10秒ごとに新着メールを確認します。",
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
      "desc": "ユーザー名とドメインを選んでください。サイトにドメインを拒否された場合は、別のドメインをお試しください。",
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
      "desc": "スマートフォンのカメラで読み取ると、このアドレスをスマホに送れます。アプリでの登録などに便利です。メールは引き続きこの画面に届きます。",
      "copyLink": "アドレスをコピー",
      "copiedLink": "コピーしました",
      "close": "閉じる",
      "unavailable": "QRコードを生成できません。接続を確認して再試行してください。"
    },
    "historyDrawer": {
      "title": "最近のアドレス履歴",
      "desc": "最近使ったアドレスです。このブラウザにのみ保存されます。",
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
      "deleteInboxDesc": "このアドレスと保存済みメッセージをこのブラウザから削除し、新しいアドレスを作成します。後で開き直せるのは、パスワード付きのアドレスでそのパスワードを控えている場合だけです。",
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
      "generatedNew": "新しいアドレスを作成しました。",
      "mailboxDeleted": "受信箱を削除しました。新しいアドレスを用意しました。",
      "customCreated": "カスタムアドレスを作成しました: {address}",
      "customFailed": "作成に失敗しました。別のユーザー名をお試しください。",
      "providerSwitched": "プロバイダを切り替えました: {provider}",
      "historyCleared": "保存した受信箱をこのブラウザから消去しました。",
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
      "title": "主な使い道",
      "subtitle": "本当のアドレスより使い捨てアドレスのほうが向いている、よくある登録の場面です。",
      "items": [
        {
          "category": "AI & ソフトウェアお試し",
          "badge": "ChatGPT & SaaS",
          "title": "ChatGPTや無料体験向けの捨てメアド",
          "description": "AIツール、開発者向けAPI、SaaSの無料トライアルに登録しても、メインのアドレスがマーケティングリストに載りません。",
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
          "description": "ゲーム用のサブプロフィール作成、Discordサーバーへの参加、ベータキーの受け取りを、メインの受信箱と結び付けずに行えます。",
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
          "description": "フォーラムやコミュニティへの登録、メールアドレスの入力が必要なホワイトペーパーやPDFのダウンロードに、本当のアドレスを使わずに済みます。",
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
          "description": "自分のアプリが送る登録・確認・パスワード再設定のメールをテストできます。複数のアドレスを作れば、別々のテストユーザーとして登録できます。",
          "tags": [
            "登録フローQA",
            "トランザクションメール",
            "Auth認証",
            "複数のテストユーザー"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "認証コード",
      "title": "届いたメールの認証コードを瞬時に抽出。",
      "subtitle": "メールに4〜8桁のコードや認証リンクが含まれていると、TempoEmailsがメッセージの上にコピーボタン付きで表示します。テンプレートの中から探す必要はありません。",
      "tag1": "4〜8桁の確認コード",
      "tag2": "認証リンク",
      "tag3": "ワンクリックでコピー",
      "previewBadge": "受信プレビュー",
      "previewDetected": "自動検出完了",
      "previewCode": "認証コード",
      "previewCopy": "コピー",
      "previewFrom": "差出人: セキュリティチーム",
      "previewSubj": "ワンタイム認証コードは 593821 です",
      "previewTime": "たった今"
    },
    "features": {
      "badge": "機能",
      "title": "受信箱でできること",
      "subtitle": "複数の公開捨てメールサービスを利用した、ブラウザで使う受信専用の受信箱です。",
      "items": [
        {
          "title": "無料の使い捨て捨てメアド生成",
          "description": "ページを開くとアドレスが作成されます。本当の受信箱と結び付けたくない登録に使えば、その後に届くニュースレターや宣伝メールはいつでも手放せる場所に届きます。"
        },
        {
          "title": "自動OTP・認証コード抽出",
          "description": "各メールから認証コードや確認リンクを抜き出し、コピーボタン付きで表示します。"
        },
        {
          "title": "登録不要",
          "description": "当サイトでアカウントを作る必要はありません。Mail.tmとMail.gwの受信箱には自動生成されたパスワードがあり、後で開き直せます。その他のサービスの受信箱にはパスワードがなく、アドレスを知っている人なら誰でも読めます。"
        },
        {
          "title": "スマホ用QRコード",
          "description": "QRコードを読み取るとアドレスをスマホに送れるので、アプリでの登録に便利です。メールは引き続きこのブラウザに届きます。"
        },
        {
          "title": "自動更新ライブ受信トレイ",
          "description": "受信箱は10秒ごとに新着メールを確認し、届いたときに短い通知音を鳴らすこともできます。手動で更新することもできます。"
        },
        {
          "title": "受信箱の履歴",
          "description": "最近使ったアドレスを最大25件このブラウザに保存します。遅れて届くメールを確認したいときは切り替えて戻れます。受信済みのメッセージはキャッシュに残ります。"
        }
      ]
    },
    "howItWorks": {
      "badge": "使い方",
      "title": "捨てメアドの使い方（4ステップ）",
      "subtitle": "インストールもフォーム入力も不要です。",
      "step1Title": "1. 無料アドレスをコピー",
      "step1Desc": "ページを開くと、提携メールサービスのアドレスが用意されます。ワンクリックでコピーできます。",
      "step2Title": "2. 登録フォームに入力",
      "step2Desc": "登録フォーム、無料トライアル、ダウンロードなど、メールアドレスを求められる場所で使えます。",
      "step3Title": "3. コードを受け取る",
      "step3Desc": "新着メールはメールサービスに届いてから約10秒で表示されます。コードや確認リンクはコピーボタン付きで上部に表示されます。",
      "step4Title": "4. 削除して終了",
      "step4Desc": "使い終わったら受信箱を削除するか、新しいアドレスを作成します。その後の宣伝メールは使い捨てアドレスに届き、本当のアドレスには届きません。"
    },
    "faq": {
      "badge": "FAQ",
      "title": "よくある質問",
      "subtitle": "受信箱の仕組みについての簡単な回答です。",
      "q1": "捨てメアド（使い捨てメール）とは何ですか？",
      "a1": "捨てメール（使い捨てメール）は、何にも登録せずにすぐ使えるメールアドレスです。送られたメールはこのページに表示されます。個人の受信箱に入れたくない登録や認証メールのためのものです。",
      "q2": "会員登録時の確認コード受信に使えますか？",
      "a2": "はい。メールに4〜8桁のコードや確認リンクが含まれていると、メッセージの上にコピーボタン付きで表示されます。受信箱は10秒ごとに新着を確認するため、サイトが送信してから間もなくコードが表示されます。",
      "q3": "DiscordやChatGPT、Steamなどでも使えますか？",
      "a3": "多くの場合は使えます。ただし、既知の捨てメールドメインをブロックするサービスもあります。1〜2分待っても届かない場合は、「再生成」または「カスタム」で別のドメインのアドレスを取得して、もう一度お試しください。",
      "q4": "TempoEmailsからメールの送信はできますか？",
      "a4": "いいえ。受信専用です。メッセージの閲覧、ダウンロード、削除はできますが、このアドレスから送信や返信はできません。",
      "q5": "自分の好きなユーザー名を選べますか？",
      "a5": "はい。「カスタム」をクリックしてユーザー名を入力し、Mail.tm、Mail.gw、Inboxes、Guerrilla Mailが現在提供しているドメインから選んでください。名前が使用済みの場合は別の名前をお試しください。",
      "q6": "無料ですか？ メッセージは誰が読めますか？",
      "a6": "無料で、登録も不要です。メッセージはアドレスを提供するメールサービスに保管され、ブラウザにもキャッシュされます。Mail.tmとMail.gwの受信箱はパスワードで保護されています（「パスワード」ボタンから確認できます）。Inboxes、Guerrilla Mail、TempMail.lolのアドレスは、アドレスを知っている人なら誰でも読めます。重要な用途には使わないでください。"
    },
    "cta": {
      "title": "受信箱はすでに稼働中です。",
      "subtitle": "登録は不要です。アドレスをコピーすれば、新着メールがここに表示されます。Mail.tmとMail.gwの受信箱にはパスワードもあり、後で開き直せます。",
      "button": "受信箱を開く"
    },
    "footer": {
      "brandDesc": "登録や認証コードの受信に使える無料の捨てメール。受信専用で、アカウント作成は不要です。",
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
      "pageNotFoundDesc": "このページは存在しません。期限切れの捨てメールアドレスのようなものです。受信箱はトップページにあります。",
      "goToHomepage": "トップページへ",
      "readOurBlog": "ブログを読む",
      "translationNotice": "この記事は現在英語で表示されています。全編翻訳を進めています。"
    },
    "pages": {
      "about": {
        "title": "TempoEmailsについて — 無料の捨てメール・使い捨てメール",
        "description": "TempoEmailsを作った理由：複数の公開捨てメールサービスをひとつの受信箱にまとめ、OTPを自動検出する無料の捨てメールサイトです。",
        "heading": "TempoEmails 開発の理由",
        "subheading": "本当のメールに入れたくない登録のための、シンプルな一時受信箱。"
      },
      "contact": {
        "title": "TempoEmails お問い合わせ & サポート",
        "description": "不具合、メールが届かない問題、不正利用の報告、提携、ご意見などはTempoEmailsまでご連絡ください。",
        "heading": "お問い合わせ & サポート",
        "subheading": "ご質問、不具合の報告、サポートが必要な場合はお気軽にお問い合わせください。"
      },
      "blog": {
        "title": "プライバシー・セキュリティ & 捨てメアド ブログ — TempoEmails",
        "description": "捨てメール、使い捨てメール、OTP認証コード、メインの受信箱を守る方法についてのガイド。",
        "heading": "プライバシー & セキュリティ ガイド",
        "subheading": "スパム対策、アカウント管理、メインアドレスの保護に役立つ実践的アドバイス。",
        "faqHeading": "よくある質問",
        "relatedHeading": "関連ガイド"
      },
      "privacy": {
        "title": "プライバシーポリシー — TempoEmails",
        "description": "TempoEmailsのデータの扱い：メールサービスが保存するもの、ブラウザに残るもの、サーバーログ、Cookie、広告について。",
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
      "description": "بريد مؤقت مجاني بعنوان مؤقت جاهز فور تحميل الصفحة. استقبل رموز التحقق OTP وروابط التفعيل دون مشاركة بريدك الحقيقي.",
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
      "chips": ["بدون تسجيل","إبراز رموز OTP","للاستقبال فقط"],
      "worksWith": "يعمل مع",
      "badge": "بريد مؤقت مجاني بدون تسجيل",
      "titleLine1": "بريد مؤقت مجاني.",
      "titleLine2": "إيميل وهمي في ثوانٍ معدودة.",
      "subtitle": "أنشئ عنوان بريد إلكتروني مؤقت بنقرة واحدة. استقبل رموز التحقق OTP وروابط التفعيل."
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
      "emptyDesc": "انسخ العنوان أعلاه واستخدمه في نموذج التسجيل. يتحقق الصندوق من الرسائل الجديدة كل 10 ثوانٍ.",
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
      "desc": "اختر اسم مستخدم ونطاقًا. إذا رفض موقع ما أحد النطاقات، فجرّب نطاقًا آخر.",
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
      "desc": "امسح الرمز بكاميرا هاتفك لنقل هذا العنوان إلى الهاتف، مثلًا للتسجيل في تطبيق. ستظل الرسائل تصل إلى هنا.",
      "copyLink": "نسخ العنوان",
      "copiedLink": "تم النسخ!",
      "close": "إغلاق",
      "unavailable": "رمز QR غير متاح — تحقق من اتصالك وأعد المحاولة."
    },
    "historyDrawer": {
      "title": "الصناديق السابقة",
      "desc": "العناوين التي استخدمتها مؤخرًا. تُحفظ في هذا المتصفح فقط.",
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
      "deleteInboxDesc": "سيُزال العنوان ورسائله المحفوظة من هذا المتصفح ويُنشأ عنوان جديد. لن تتمكن من فتحه لاحقًا إلا إذا كانت له كلمة مرور واحتفظت بها.",
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
      "generatedNew": "تم إنشاء عنوان جديد.",
      "mailboxDeleted": "تمت إزالة الصندوق. عنوان جديد جاهز.",
      "customCreated": "تم إنشاء البريد المخصص: {address}",
      "customFailed": "فشل الإنشاء. يرجى تجربة اسم مستخدم آخر.",
      "providerSwitched": "تم تغيير مزود الخدمة إلى {provider}",
      "historyCleared": "تم مسح الصناديق المحفوظة من هذا المتصفح.",
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
      "title": "أين يستخدمه الناس",
      "subtitle": "حالات تسجيل شائعة يكون فيها العنوان المؤقت أنسب من عنوانك الحقيقي.",
      "items": [
        {
          "category": "تجارب الذكاء الاصطناعي والبرامج",
          "badge": "ChatGPT و SaaS",
          "title": "بريد مؤقت لـ ChatGPT والتجارب المجانية",
          "description": "سجّل في أدوات الذكاء الاصطناعي وواجهات API للمطورين وتجارب SaaS دون أن يدخل عنوانك الرئيسي في قوائمهم التسويقية.",
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
          "description": "أنشئ ملفًا ثانيًا للألعاب أو انضم إلى خادم Discord أو احصل على مفتاح نسخة تجريبية دون ربطه ببريدك الرئيسي.",
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
          "description": "سجّل في المنتديات والمجتمعات، أو نزّل ورقة بيضاء أو ملف PDF يطلب بريدًا إلكترونيًا، دون مشاركة عنوانك الحقيقي.",
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
          "description": "اختبر رسائل التسجيل والتأكيد وإعادة تعيين كلمة المرور التي يرسلها تطبيقك. أنشئ عدة عناوين للتسجيل كمستخدمين تجريبيين مختلفين.",
          "tags": [
            "اختبار التسجيل",
            "رسائل المعاملات",
            "التحقق من الدخول",
            "عدة مستخدمين تجريبيين"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "رموز التحقق",
      "title": "استقبل رموز التحقق OTP فوراً عبر البريد المؤقت.",
      "subtitle": "عندما تحتوي الرسالة على رمز من 4 إلى 8 أرقام أو رابط تحقق، يعرضه TempoEmails فوق الرسالة مع زر نسخ، فلا تحتاج إلى البحث عنه داخل القالب.",
      "tag1": "رموز OTP من 4 إلى 8 أرقام",
      "tag2": "روابط التحقق",
      "tag3": "نسخ بنقرة واحدة",
      "previewBadge": "معاينة الصندوق",
      "previewDetected": "تم الكشف تلقائياً",
      "previewCode": "رمز التحقق",
      "previewCopy": "نسخ",
      "previewFrom": "من: فريق الأمان",
      "previewSubj": "رمز التحقق لمرة واحدة الخاص بك هو 593821",
      "previewTime": "الآن"
    },
    "features": {
      "badge": "الميزات",
      "title": "ما الذي يفعله الصندوق",
      "subtitle": "صندوق للاستقبال فقط في متصفحك، يعتمد على عدة مزودين عامين للبريد المؤقت.",
      "items": [
        {
          "title": "مولد بريد مؤقت مجاني",
          "description": "يُنشأ العنوان عند تحميل الصفحة. استخدمه في عمليات التسجيل التي لا تريد ربطها ببريدك الحقيقي، فتصل النشرات والعروض اللاحقة إلى مكان يمكنك تركه."
        },
        {
          "title": "مستخرج تلقائي لرموز OTP",
          "description": "تُستخرج رموز التحقق وروابط التأكيد من كل رسالة وتُعرض مع زر نسخ."
        },
        {
          "title": "بدون تسجيل",
          "description": "لا تنشئ حسابًا لدينا أبدًا. صناديق Mail.tm وMail.gw تأتي بكلمة مرور مُولّدة لتعيد فتحها لاحقًا. أما صناديق المزودين الآخرين فبلا كلمة مرور، ويمكن لأي شخص يعرف العنوان قراءتها."
        },
        {
          "title": "رمز QR للهاتف",
          "description": "امسح رمز QR لنقل العنوان إلى هاتفك، وهذا مفيد للتسجيل في تطبيق. ستظل الرسائل تصل إلى هذا المتصفح."
        },
        {
          "title": "صندوق بريد مباشر بتحديث تلقائي",
          "description": "يتحقق الصندوق من الرسائل الجديدة كل 10 ثوانٍ ويمكنه تشغيل صوت قصير عند وصول رسالة. ويمكنك التحديث يدويًا أيضًا."
        },
        {
          "title": "سجل الصناديق",
          "description": "يُحفظ حتى 25 عنوانًا حديثًا في هذا المتصفح. عُد إلى أحدها للتحقق من رسالة متأخرة؛ وتبقى الرسائل المستلمة محفوظة."
        }
      ]
    },
    "howItWorks": {
      "badge": "طريقة العمل",
      "title": "كيف يعمل البريد المؤقت في 4 خطوات",
      "subtitle": "لا شيء لتثبيته ولا نموذج لملئه.",
      "step1Title": "1. انسخ بريدك المجاني",
      "step1Desc": "يكون عنوان من أحد مزودي البريد لدينا جاهزًا عند تحميل الصفحة. انسخه بنقرة واحدة.",
      "step2Title": "2. استخدمه في أي موقع",
      "step2Desc": "استخدمه أينما طلب موقع بريدًا إلكترونيًا: نموذج تسجيل أو تجربة مجانية أو تنزيل.",
      "step3Title": "3. استلم الرمز",
      "step3Desc": "تظهر الرسائل الجديدة بعد نحو 10 ثوانٍ من وصولها إلى المزود. وتُعرض الرموز وروابط التأكيد في الأعلى مع زر نسخ.",
      "step4Title": "4. احذفه أو تابع",
      "step4Desc": "عند الانتهاء احذف الصندوق أو أنشئ عنوانًا جديدًا. أي رسائل تسويقية لاحقة تذهب إلى العنوان المؤقت، لا إلى عنوانك الحقيقي."
    },
    "faq": {
      "badge": "الأسئلة الشائعة",
      "title": "الأسئلة الأكثر تداولاً",
      "subtitle": "إجابات قصيرة عن طريقة عمل الصندوق.",
      "q1": "ما هو البريد المؤقت وكيف يعمل؟",
      "a1": "البريد المؤقت (أو البريد المهمل) عنوان يمكنك استخدامه فورًا دون التسجيل في أي شيء. تظهر الرسائل المرسلة إليه في هذه الصفحة. وهو مخصص لعمليات التسجيل ورسائل التحقق التي لا تريدها في بريدك الشخصي.",
      "q2": "هل يمكن استخدامه لتلقي أكواد التحقق OTP؟",
      "a2": "نعم. عندما تحتوي الرسالة على رمز من 4 إلى 8 أرقام أو رابط تأكيد، يُعرض فوق الرسالة مع زر نسخ. يتحقق الصندوق من الرسائل الجديدة كل 10 ثوانٍ، لذا يظهر الرمز عادةً بعد وقت قصير من إرساله.",
      "q3": "هل يعمل مع Discord أو ChatGPT أو Telegram؟",
      "a3": "غالبًا نعم. بعض الخدمات تحظر نطاقات البريد المؤقت المعروفة. إذا لم يصل شيء خلال دقيقة أو دقيقتين، فاضغط «بريد جديد» أو «اسم مخصص» للحصول على عنوان على نطاق آخر ثم حاول مجددًا.",
      "q4": "هل يمكنني إرسال رسائل من خلال TempoEmails؟",
      "a4": "لا. الصندوق للاستقبال فقط: يمكنك قراءة الرسائل وتنزيلها وحذفها، لكن لا يمكنك الإرسال أو الرد من العنوان.",
      "q5": "هل يمكنني اختيار اسم مستخدم مخصص؟",
      "a5": "نعم. اضغط «اسم مخصص» واكتب اسم مستخدم واختر أحد النطاقات التي يوفرها حاليًا Mail.tm أو Mail.gw أو Inboxes أو Guerrilla Mail. إذا كان الاسم مستخدمًا، فجرّب اسمًا آخر.",
      "q6": "هل الخدمة مجانية، ومن يمكنه قراءة رسائلي؟",
      "a6": "الخدمة مجانية ولا يوجد ما تسجّل فيه. تُحفظ الرسائل لدى المزود الذي يستضيف العنوان وتُخزَّن مؤقتًا في متصفحك. صناديق Mail.tm وMail.gw محمية بكلمة مرور (انظر «الدخول»)، أما عناوين Inboxes وGuerrilla Mail وTempMail.lol فيمكن لأي شخص يعرفها قراءتها. لا تستخدم عنوانًا مؤقتًا لأي شيء حساس."
    },
    "cta": {
      "title": "صندوق بريدك جاهز بالفعل.",
      "subtitle": "لا حاجة إلى التسجيل. انسخ العنوان وستظهر الرسائل الجديدة هنا. وتحصل صناديق Mail.tm وMail.gw أيضًا على كلمة مرور لتعيد فتحها لاحقًا.",
      "button": "افتح صندوقي"
    },
    "footer": {
      "brandDesc": "بريد مؤقت مجاني للتسجيل ورموز التحقق. للاستقبال فقط، دون إنشاء حساب.",
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
      "pageNotFoundDesc": "هذه الصفحة غير موجودة، مثل عنوان مؤقت انتهت صلاحيته. صندوق بريدك ما زال في الصفحة الرئيسية.",
      "goToHomepage": "الانتقال للصفحة الرئيسية",
      "readOurBlog": "قراءة المدونة",
      "translationNotice": "هذا المقال معروض حاليًا باللغة الإنجليزية. الترجمة الكاملة قيد التنفيذ."
    },
    "pages": {
      "about": {
        "title": "عن TempoEmails — بريد مؤقت مجاني",
        "description": "لماذا أنشأنا TempoEmails: موقع بريد مؤقت مجاني يجمع عدة مزودين عامين للبريد المؤقت في صندوق واحد، مع اكتشاف تلقائي لرموز OTP.",
        "heading": "لماذا طورنا TempoEmails",
        "subheading": "صندوق مؤقت بسيط لعمليات التسجيل التي لا تريدها في بريدك الحقيقي."
      },
      "contact": {
        "title": "اتصل بنا ودعم TempoEmails",
        "description": "تواصل مع TempoEmails بشأن الأخطاء أو مشكلات وصول الرسائل أو بلاغات إساءة الاستخدام أو الشراكات أو الملاحظات.",
        "heading": "الاتصال والدعم الفني",
        "subheading": "هل لديك سؤال أو لاحظت خطأ أو تحتاج لمساعدة؟ تواصل معنا."
      },
      "blog": {
        "title": "مدونة الخصوصية والأمان والبريد المؤقت — TempoEmails",
        "description": "أدلة عن البريد المؤقت ورموز التحقق OTP والحفاظ على خصوصية بريدك الرئيسي.",
        "heading": "أدلة الخصوصية والأمان",
        "subheading": "إرشادات عملية لتجنب البريد العشوائي وإدارة الحسابات وحماية بريدك الشخصي.",
        "faqHeading": "الأسئلة الشائعة",
        "relatedHeading": "أدلة ذات صلة"
      },
      "privacy": {
        "title": "سياسة الخصوصية — TempoEmails",
        "description": "كيف يتعامل TempoEmails مع البيانات: ما يحفظه مزودو البريد، وما يبقى في متصفحك، وسجلات الخادم، وملفات تعريف الارتباط والإعلانات.",
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
      "description": "Email sementara gratis dengan alamat sekali pakai yang siap begitu halaman dimuat. Terima kode OTP dan tautan aktivasi tanpa memberikan email asli Anda.",
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
      "chips": ["Tanpa daftar","Kode OTP disorot","Hanya menerima"],
      "worksWith": "Kompatibel dengan",
      "badge": "Email sementara gratis, tanpa daftar",
      "titleLine1": "Email Sementara Gratis.",
      "titleLine2": "Email Sekali Pakai dalam Hitungan Detik.",
      "subtitle": "Buat alamat email sementara sekali pakai dalam satu klik. Terima kode verifikasi OTP dan tautan aktivasi."
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
      "emptyDesc": "Salin alamat di atas dan gunakan di formulir pendaftaran. Kotak masuk memeriksa email baru setiap 10 detik.",
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
      "desc": "Pilih nama pengguna dan domain. Jika sebuah situs menolak satu domain, coba domain lain.",
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
      "desc": "Pindai dengan kamera ponsel untuk memindahkan alamat ini ke ponsel Anda, misalnya untuk mendaftar di aplikasi. Email tetap masuk ke sini.",
      "copyLink": "Salin Alamat",
      "copiedLink": "Tersalin!",
      "close": "Tutup",
      "unavailable": "Kode QR tidak tersedia — periksa koneksi Anda lalu coba lagi."
    },
    "historyDrawer": {
      "title": "Riwayat Email",
      "desc": "Alamat yang baru-baru ini Anda gunakan. Hanya tersimpan di browser ini.",
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
      "deleteInboxDesc": "Alamat ini dan pesan tersimpannya akan dihapus dari browser ini, lalu alamat baru dibuat. Anda hanya bisa membukanya lagi jika alamat itu punya kata sandi dan Anda menyimpannya.",
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
      "generatedNew": "Alamat baru dibuat.",
      "mailboxDeleted": "Kotak masuk dihapus. Alamat baru sudah siap.",
      "customCreated": "Email kustom dibuat: {address}",
      "customFailed": "Gagal membuat email. Silakan coba username lain.",
      "providerSwitched": "Penyedia email aktif diubah ke {provider}",
      "historyCleared": "Kotak masuk tersimpan dihapus dari browser ini.",
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
      "title": "Dipakai untuk apa",
      "subtitle": "Pendaftaran umum yang lebih cocok memakai alamat sekali pakai daripada alamat asli Anda.",
      "items": [
        {
          "category": "Uji Coba AI & Perangkat Lunak",
          "badge": "ChatGPT & SaaS",
          "title": "Email Sementara untuk ChatGPT & Uji Coba Gratis",
          "description": "Daftar ke alat AI, API pengembang, dan uji coba SaaS tanpa membuat alamat utama Anda masuk ke daftar pemasaran mereka.",
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
          "description": "Buat profil game kedua, gabung ke server Discord, atau klaim kunci beta tanpa mengaitkannya ke kotak masuk utama Anda.",
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
          "description": "Daftar di forum dan komunitas, atau unduh whitepaper atau PDF yang meminta email, tanpa membagikan alamat asli Anda.",
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
          "description": "Uji email pendaftaran, konfirmasi, dan reset kata sandi yang dikirim aplikasi Anda sendiri. Buat beberapa alamat untuk mendaftar sebagai pengguna uji yang berbeda.",
          "tags": [
            "QA Pendaftaran",
            "Email Transaksional",
            "Verifikasi Auth",
            "Beberapa Pengguna Uji"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "Kode Verifikasi",
      "title": "Terima kode OTP verifikasi secara instan di email sementara.",
      "subtitle": "Jika email berisi kode 4–8 digit atau tautan verifikasi, TempoEmails menampilkannya di atas pesan dengan tombol salin, jadi Anda tidak perlu mencarinya di dalam template.",
      "tag1": "4 sampai 8 Digit Kode OTP",
      "tag2": "Tautan Verifikasi",
      "tag3": "Salin Sekali Klik",
      "previewBadge": "Pratinjau Email",
      "previewDetected": "Otomatis Terdeteksi",
      "previewCode": "Kode Verifikasi",
      "previewCopy": "Salin",
      "previewFrom": "Dari: Tim Keamanan",
      "previewSubj": "Kode verifikasi sekali pakai Anda adalah 593821",
      "previewTime": "Baru saja"
    },
    "features": {
      "badge": "Fitur",
      "title": "Apa yang dilakukan kotak masuk",
      "subtitle": "Kotak masuk khusus menerima di browser Anda, didukung beberapa penyedia email sementara publik.",
      "items": [
        {
          "title": "Generator Email Sementara Gratis",
          "description": "Alamat dibuat saat halaman dimuat. Gunakan untuk pendaftaran yang tidak ingin Anda kaitkan dengan kotak masuk asli, sehingga newsletter dan promosi berikutnya masuk ke tempat yang bisa Anda tinggalkan."
        },
        {
          "title": "Ekstraktor Otomatis OTP & Kode",
          "description": "Kode verifikasi dan tautan konfirmasi diambil dari setiap email dan ditampilkan dengan tombol salin."
        },
        {
          "title": "Tanpa Pendaftaran",
          "description": "Anda tidak pernah membuat akun di tempat kami. Kotak masuk Mail.tm dan Mail.gw dilengkapi kata sandi yang dibuat otomatis agar bisa dibuka lagi nanti. Kotak masuk penyedia lain tidak punya kata sandi, jadi siapa pun yang tahu alamatnya bisa membacanya."
        },
        {
          "title": "Kode QR untuk Ponsel",
          "description": "Pindai kode QR untuk memindahkan alamat ke ponsel, berguna untuk mendaftar di aplikasi. Email tetap masuk ke browser ini."
        },
        {
          "title": "Kotak Masuk Live Auto-Refresh",
          "description": "Kotak masuk memeriksa email baru setiap 10 detik dan bisa memutar suara singkat saat ada pesan masuk. Anda juga bisa menyegarkan secara manual."
        },
        {
          "title": "Riwayat Kotak Masuk",
          "description": "Hingga 25 alamat terbaru disimpan di browser ini. Beralih kembali ke salah satunya untuk memeriksa email yang terlambat; pesan yang sudah diterima tetap tersimpan."
        }
      ]
    },
    "howItWorks": {
      "badge": "Cara Kerja",
      "title": "Cara Kerja Email Sementara dalam 4 Langkah",
      "subtitle": "Tidak ada yang perlu dipasang dan tidak ada formulir untuk diisi.",
      "step1Title": "1. Salin Alamat Gratis Anda",
      "step1Desc": "Alamat dari salah satu penyedia email kami sudah siap saat halaman dimuat. Salin dengan sekali klik.",
      "step2Title": "2. Gunakan untuk Pendaftaran",
      "step2Desc": "Gunakan di mana pun situs meminta email: formulir pendaftaran, uji coba gratis, unduhan.",
      "step3Title": "3. Ambil Kodenya",
      "step3Desc": "Email baru muncul sekitar 10 detik setelah sampai di penyedia. Kode dan tautan konfirmasi ditampilkan di atas dengan tombol salin.",
      "step4Title": "4. Hapus atau Lanjutkan",
      "step4Desc": "Setelah selesai, hapus kotak masuk atau buat alamat baru. Email pemasaran berikutnya masuk ke alamat sekali pakai, bukan ke alamat asli Anda."
    },
    "faq": {
      "badge": "Pertanyaan Umum",
      "title": "Pertanyaan yang Sering Diajukan",
      "subtitle": "Jawaban singkat tentang cara kerja kotak masuk.",
      "q1": "Apa itu email sementara dan bagaimana cara kerjanya?",
      "a1": "Email sementara (disebut juga email sekali pakai) adalah alamat yang bisa langsung Anda gunakan tanpa mendaftar apa pun. Email yang dikirim ke alamat itu muncul di halaman ini. Gunanya untuk pendaftaran dan email verifikasi yang tidak ingin Anda terima di kotak masuk pribadi.",
      "q2": "Apakah bisa digunakan untuk menerima kode OTP?",
      "a2": "Ya. Jika email berisi kode 4–8 digit atau tautan konfirmasi, kode itu ditampilkan di atas pesan dengan tombol salin. Kotak masuk memeriksa email baru setiap 10 detik, jadi kode biasanya muncul tak lama setelah situs mengirimnya.",
      "q3": "Apakah bisa untuk Discord, ChatGPT, Telegram, atau Steam?",
      "a3": "Sering kali bisa. Beberapa layanan memblokir domain email sekali pakai yang dikenal. Jika tidak ada yang masuk setelah satu atau dua menit, klik \"Email Baru\" atau \"Kustom\" untuk mendapatkan alamat di domain lain, lalu coba lagi.",
      "q4": "Bisakah mengirim email keluar dari TempoEmails?",
      "a4": "Tidak. Kotak masuk ini hanya untuk menerima: Anda bisa membaca, mengunduh, dan menghapus pesan, tetapi tidak bisa mengirim atau membalas dari alamat ini.",
      "q5": "Bisakah saya memilih username sendiri?",
      "a5": "Ya. Klik \"Kustom\", ketik nama pengguna, lalu pilih salah satu domain yang saat ini disediakan Mail.tm, Mail.gw, Inboxes, atau Guerrilla Mail. Jika nama sudah dipakai, coba nama lain.",
      "q6": "Apakah gratis, dan siapa yang bisa membaca pesan saya?",
      "a6": "Gratis dan tidak ada yang perlu didaftarkan. Pesan disimpan oleh penyedia alamat tersebut dan di-cache di browser Anda. Kotak masuk Mail.tm dan Mail.gw dilindungi kata sandi (lihat \"Sandi\"); alamat Inboxes, Guerrilla Mail, dan TempMail.lol bisa dibaca siapa pun yang mengetahuinya. Jangan gunakan alamat sementara untuk hal yang sensitif."
    },
    "cta": {
      "title": "Kotak masuk Anda sudah aktif.",
      "subtitle": "Tidak perlu mendaftar. Salin alamatnya dan email baru akan muncul di sini. Kotak masuk Mail.tm dan Mail.gw juga mendapat kata sandi agar bisa dibuka lagi nanti.",
      "button": "Buka kotak masuk"
    },
    "footer": {
      "brandDesc": "Email sekali pakai gratis untuk pendaftaran dan kode verifikasi. Hanya menerima, tanpa perlu membuat akun.",
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
      "pageNotFoundDesc": "Halaman ini tidak ada, mirip alamat sementara yang sudah kedaluwarsa. Kotak masuk Anda masih ada di beranda.",
      "goToHomepage": "Kembali ke Beranda",
      "readOurBlog": "Baca Blog Kami",
      "translationNotice": "Artikel ini saat ini ditampilkan dalam bahasa Inggris. Terjemahan lengkap sedang diproses."
    },
    "pages": {
      "about": {
        "title": "Tentang TempoEmails — Email Sementara & Sekali Pakai Gratis",
        "description": "Mengapa kami membuat TempoEmails: situs email sementara gratis yang menyatukan beberapa penyedia email sekali pakai publik dalam satu kotak masuk, dengan deteksi OTP otomatis.",
        "heading": "Mengapa Kami Membangun TempoEmails",
        "subheading": "Kotak masuk sementara yang sederhana untuk pendaftaran yang tidak ingin Anda simpan di email asli."
      },
      "contact": {
        "title": "Kontak & Bantuan TempoEmails",
        "description": "Hubungi TempoEmails tentang bug, masalah pengiriman email, laporan penyalahgunaan, kemitraan, atau masukan.",
        "heading": "Kontak & Bantuan",
        "subheading": "Punya pertanyaan, menemukan bug, atau butuh bantuan? Hubungi kami."
      },
      "blog": {
        "title": "Blog Privasi, Keamanan & Email Sementara — TempoEmails",
        "description": "Panduan tentang email sementara, email sekali pakai, kode OTP, dan cara menjaga kotak masuk utama tetap privat.",
        "heading": "Panduan Privasi & Keamanan",
        "subheading": "Tips praktis menghindari spam, mengelola akun online, dan melindungi email utama Anda.",
        "faqHeading": "Pertanyaan yang sering diajukan",
        "relatedHeading": "Panduan terkait"
      },
      "privacy": {
        "title": "Kebijakan Privasi — TempoEmails",
        "description": "Cara TempoEmails menangani data: apa yang disimpan penyedia email, apa yang tetap di browser Anda, log server, cookie, dan iklan.",
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
