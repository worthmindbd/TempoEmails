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
  qrModal: {
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
  common: {
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
      "badge": "⚡ Instant Temp Mail & 10 Minute Burner Inbox",
      "titleLine1": "Free Temp Mail.",
      "titleLine2": "Disposable Email in Seconds.",
      "subtitle": "Generate an instant disposable temporary email address. Receive signup verification codes, OTPs, and activation links with zero spam, zero logs, and no registration."
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
      "deleteTooltip": "Delete this mailbox"
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
      "openLink": "Open Link ↗",
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
      "create": "Create Inbox"
    },
    "qrModal": {
      "title": "Mobile QR Code",
      "desc": "Scan this code with your smartphone camera to access this disposable email instantly on mobile.",
      "copyLink": "Copy Link",
      "copiedLink": "Link Copied!",
      "close": "Close"
    },
    "historyDrawer": {
      "title": "Recent Inboxes",
      "desc": "Switch between previously active inboxes stored securely in your browser.",
      "activeInbox": "Active",
      "savedStorage": "Saved in Local Storage",
      "emptyTitle": "No saved inboxes",
      "emptyDesc": "When you create or switch temporary inboxes, your recent addresses will appear here.",
      "clearAll": "Clear All History",
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
      "title": "🍪 Cookie preferences",
      "desc": "We use cookies to save your settings (such as dark mode and recent inboxes) and measure site traffic. Read our",
      "privacyPolicy": "Privacy Policy",
      "essentialOnly": "Essential Only",
      "acceptAll": "Accept All"
    },
    "toasts": {
      "soundEnabled": "🔔 Sound notifications enabled",
      "soundMuted": "🔕 Sound notifications muted",
      "initFailed": "Failed to initialize mailbox. Please try refreshing.",
      "messageDeleted": "Message deleted",
      "switchedTo": "Switched to",
      "generatedNew": "Generated fresh temporary inbox with new domain!",
      "mailboxDeleted": "Mailbox deleted and fresh address generated!",
      "customCreated": "Created custom inbox",
      "customFailed": "Failed to create inbox. Please try a different username.",
      "providerSwitched": "Switched active provider to",
      "historyCleared": "All saved inboxes cleared from memory.",
      "copiedToClipboard": "Copied to clipboard!",
      "copyFailed": "Failed to copy to clipboard",
      "otpCopied": "Verification code {code} copied!",
      "loadMessageFailed": "Failed to load message content."
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
      "badge": "⚡ Auto-Detected Verification Codes",
      "title": "Receive OTP verification codes instantly on disposable email.",
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
    "common": {
      "home": "Home",
      "blog": "Blog",
      "backToHome": "Back to Home",
      "allArticles": "← All Articles",
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
        "subheading": "Practical guides on avoiding spam, managing online accounts, and protecting your primary email address."
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
      "badge": "⚡ Correo Temporal Instantáneo y Buzón Desechable",
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
      "deleteTooltip": "Eliminar este buzón"
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
      "openLink": "Abrir Enlace ↗",
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
      "create": "Crear Buzón"
    },
    "qrModal": {
      "title": "Código QR Móvil",
      "desc": "Escanea este código con la cámara de tu smartphone para abrir este correo temporal en tu móvil.",
      "copyLink": "Copiar Enlace",
      "copiedLink": "¡Enlace Copiado!",
      "close": "Cerrar"
    },
    "historyDrawer": {
      "title": "Buzones Recientes",
      "desc": "Cambia entre tus direcciones de correo temporales anteriores guardadas en el navegador.",
      "activeInbox": "Activo",
      "savedStorage": "Guardado Localmente",
      "emptyTitle": "Sin buzones guardados",
      "emptyDesc": "Cuando crees o cambies de buzón temporal, tus direcciones recientes aparecerán aquí.",
      "clearAll": "Borrar Todo el Historial",
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
      "title": "🍪 Preferencias de Cookies",
      "desc": "Usamos cookies para guardar tus preferencias (como modo oscuro y buzones recientes) y medir visitas. Consulta nuestra",
      "privacyPolicy": "Política de Privacidad",
      "essentialOnly": "Solo Esenciales",
      "acceptAll": "Aceptar Todas"
    },
    "toasts": {
      "soundEnabled": "🔔 Notificaciones con sonido activadas",
      "soundMuted": "🔕 Notificaciones silenciadas",
      "initFailed": "Error al inicializar el buzón. Por favor, recarga.",
      "messageDeleted": "Mensaje eliminado",
      "switchedTo": "Cambiado a",
      "generatedNew": "¡Nuevo correo temporal generado con éxito!",
      "mailboxDeleted": "¡Buzón eliminado y nueva dirección creada!",
      "customCreated": "Buzón personalizado creado con éxito",
      "customFailed": "Error al crear el buzón. Prueba con otro nombre de usuario.",
      "providerSwitched": "Proveedor activo cambiado a",
      "historyCleared": "Historial de buzones borrado.",
      "copiedToClipboard": "¡Copiado al portapapeles!",
      "copyFailed": "Error al copiar al portapapeles",
      "otpCopied": "¡Código de verificación {code} copiado!",
      "loadMessageFailed": "Error al cargar el contenido del mensaje."
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
      "badge": "⚡ Detección Automática de Códigos",
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
    "common": {
      "home": "Inicio",
      "blog": "Blog",
      "backToHome": "Volver al Inicio",
      "allArticles": "← Todos los Artículos",
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
        "subheading": "Consejos prácticos para evitar el spam, gestionar cuentas online y proteger su correo principal."
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
      "badge": "⚡ Email Temporário Instantâneo e Caixa Descartável",
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
      "deleteTooltip": "Excluir esta caixa de entrada"
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
      "openLink": "Abrir Link ↗",
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
      "create": "Criar Caixa"
    },
    "qrModal": {
      "title": "QR Code para Celular",
      "desc": "Aponte a câmera do seu smartphone para abrir e usar este email temporário no celular instantaneamente.",
      "copyLink": "Copiar Link",
      "copiedLink": "Link Copiado!",
      "close": "Fechar"
    },
    "historyDrawer": {
      "title": "Emails Recentes",
      "desc": "Alterne rapidamente entre caixas de email temporárias anteriores salvas no seu navegador.",
      "activeInbox": "Ativo",
      "savedStorage": "Salvo Localmente",
      "emptyTitle": "Nenhum email salvo",
      "emptyDesc": "Quando você criar ou alternar caixas de entrada temporárias, seus endereços aparecerão aqui.",
      "clearAll": "Limpar Todo Histórico",
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
      "title": "🍪 Preferências de Cookies",
      "desc": "Usamos cookies para salvar suas preferências (como modo escuro e caixas recentes) e monitorar tráfego. Veja nossa",
      "privacyPolicy": "Política de Privacidade",
      "essentialOnly": "Apenas Essenciais",
      "acceptAll": "Aceitar Todos"
    },
    "toasts": {
      "soundEnabled": "🔔 Notificações sonoras ativadas",
      "soundMuted": "🔕 Notificações sonoras silenciadas",
      "initFailed": "Falha ao iniciar caixa postal. Recarregue a página.",
      "messageDeleted": "Mensagem excluída",
      "switchedTo": "Alternado para",
      "generatedNew": "Novo email temporário gerado com sucesso!",
      "mailboxDeleted": "Caixa de entrada excluída e novo email gerado!",
      "customCreated": "Email personalizado criado com sucesso",
      "customFailed": "Falha ao criar email. Tente outro nome de usuário.",
      "providerSwitched": "Provedor ativo alternado para",
      "historyCleared": "Histórico de emails apagado com sucesso.",
      "copiedToClipboard": "Copiado para a área de transferência!",
      "copyFailed": "Falha ao copiar",
      "otpCopied": "Código de verificação {code} copiado!",
      "loadMessageFailed": "Falha ao carregar o conteúdo da mensagem."
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
      "badge": "⚡ Extração Automática de Códigos",
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
    "common": {
      "home": "Início",
      "blog": "Blog",
      "backToHome": "Voltar ao Início",
      "allArticles": "← Todos os Artigos",
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
        "subheading": "Dicas práticas para evitar spam, gerenciar contas online e proteger seu e-mail principal."
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
      "badge": "⚡ Email Temporaire Instantané & Boîte Jetable 10 Minutes",
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
      "deleteTooltip": "Supprimer cette boîte"
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
      "openLink": "Ouvrir le lien ↗",
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
      "create": "Créer la boîte"
    },
    "qrModal": {
      "title": "QR Code Mobile",
      "desc": "Scannez ce code avec votre smartphone pour ouvrir cette boîte temporaire directement sur mobile.",
      "copyLink": "Copier le lien",
      "copiedLink": "Lien Copié !",
      "close": "Fermer"
    },
    "historyDrawer": {
      "title": "Boîtes Récentes",
      "desc": "Basculez entre vos adresses temporaires précédentes stockées dans votre navigateur.",
      "activeInbox": "Actif",
      "savedStorage": "Stocké Localement",
      "emptyTitle": "Aucune boîte enregistrée",
      "emptyDesc": "Vos adresses récentes apparaîtront ici dès que vous créerez ou changerez de boîte.",
      "clearAll": "Effacer l’historique",
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
      "title": "🍪 Préférences de Cookies",
      "desc": "Nous utilisons des cookies pour conserver vos réglages (thème sombre, boîtes récentes) et analyser le trafic. Voir notre",
      "privacyPolicy": "Politique de Confidentialité",
      "essentialOnly": "Essentiels Seuls",
      "acceptAll": "Tout Accepter"
    },
    "toasts": {
      "soundEnabled": "🔔 Notifications sonores activées",
      "soundMuted": "🔕 Notifications sonores désactivées",
      "initFailed": "Échec de l’initialisation. Veuillez actualiser.",
      "messageDeleted": "Message supprimé",
      "switchedTo": "Basculé sur",
      "generatedNew": "Nouvelle adresse temporaire générée !",
      "mailboxDeleted": "Boîte supprimée et nouvelle adresse créée !",
      "customCreated": "Boîte personnalisée créée avec succès",
      "customFailed": "Échec de la création. Essayez un autre identifiant.",
      "providerSwitched": "Fournisseur actif basculé sur",
      "historyCleared": "Historique des boîtes effacé.",
      "copiedToClipboard": "Copié dans le presse-papiers !",
      "copyFailed": "Échec de la copie",
      "otpCopied": "Code de vérification {code} copié !",
      "loadMessageFailed": "Impossible de charger le contenu du message."
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
      "badge": "⚡ Détection Automatique de Codes",
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
    "common": {
      "home": "Accueil",
      "blog": "Blog",
      "backToHome": "Retour à l'Accueil",
      "allArticles": "← Tous les Articles",
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
        "subheading": "Conseils pratiques pour éviter le spam, gérer vos comptes en ligne et protéger votre adresse principale."
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
      "badge": "⚡ Sofortige Wegwerf-Email & 10-Minuten-Postfach",
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
      "deleteTooltip": "Dieses Postfach löschen"
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
      "openLink": "Link öffnen ↗",
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
      "create": "Postfach Erstellen"
    },
    "qrModal": {
      "title": "Smartphone QR-Code",
      "desc": "Scanne diesen Code mit der Handykamera, um diese temporäre Email sofort auf dem Smartphone zu nutzen.",
      "copyLink": "Link Kopieren",
      "copiedLink": "Link Kopiert!",
      "close": "Schließen"
    },
    "historyDrawer": {
      "title": "Letzte Postfächer",
      "desc": "Wechsle schnell zwischen früheren Adressen, die sicher in deinem Browser gespeichert sind.",
      "activeInbox": "Aktiv",
      "savedStorage": "Lokal Gespeichert",
      "emptyTitle": "Keine Postfächer gespeichert",
      "emptyDesc": "Wenn du Adressen erstellst oder wechselst, erscheinen sie hier in deinem Verlauf.",
      "clearAll": "Verlauf Löschen",
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
      "title": "🍪 Cookie-Einstellungen",
      "desc": "Wir nutzen Cookies für deine Einstellungen (wie Dark Mode und letzte Postfächer) und Besucherstatistiken. Siehe unsere",
      "privacyPolicy": "Datenschutzerklärung",
      "essentialOnly": "Nur Notwendige",
      "acceptAll": "Alle Akzeptieren"
    },
    "toasts": {
      "soundEnabled": "🔔 Benachrichtigungston aktiviert",
      "soundMuted": "🔕 Benachrichtigungston stummgeschaltet",
      "initFailed": "Postfach konnte nicht initialisiert werden. Bitte neu laden.",
      "messageDeleted": "Nachricht gelöscht",
      "switchedTo": "Gewechselt zu",
      "generatedNew": "Neues temporäres Postfach generiert!",
      "mailboxDeleted": "Postfach gelöscht und neue Adresse erstellt!",
      "customCreated": "Wunsch-Postfach erfolgreich erstellt",
      "customFailed": "Erstellung fehlgeschlagen. Bitte anderen Namen wählen.",
      "providerSwitched": "Aktiver Mail-Provider gewechselt zu",
      "historyCleared": "Verlauf gelöscht.",
      "copiedToClipboard": "In Zwischenablage kopiert!",
      "copyFailed": "Kopieren fehlgeschlagen",
      "otpCopied": "Bestätigungscode {code} kopiert!",
      "loadMessageFailed": "Nachrichteninhalt konnte nicht geladen werden."
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
      "badge": "⚡ Automatische Code-Erkennung",
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
    "common": {
      "home": "Startseite",
      "blog": "Blog",
      "backToHome": "Zurück zur Startseite",
      "allArticles": "← Alle Artikel",
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
        "subheading": "Praktische Anleitungen zur Vermeidung von Spam, Verwaltung von Online-Konten und Schutz Ihrer Hauptadresse."
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
  "ru": {
    "meta": {
      "title": "Временная Почта Бесплатно — Одноразовая Почта и Генератор Фейковых Email",
      "description": "Бесплатная одноразовая временная почта онлайн. Мгновенно получайте коды подтверждения OTP, ссылки активации и письма без спама и без регистрации.",
      "keywords": "временная почта, одноразовая почта, фейковая почта, анонимная почта, 10 минутная почта, получить otp онлайн, генератор временной почты, temp mail на русском"
    },
    "nav": {
      "features": "Возможности",
      "howItWorks": "Как это работает",
      "faq": "Вопросы",
      "blog": "Блог",
      "about": "О нас",
      "contact": "Контакты",
      "history": "История",
      "selectLanguage": "Язык"
    },
    "hero": {
      "badge": "⚡ Мгновенная Временная Почта и Одноразовый Ящик",
      "titleLine1": "Бесплатная Временная Почта.",
      "titleLine2": "Одноразовый Email за Секунды.",
      "subtitle": "Создайте одноразовый временный email в один клик. Получайте коды подтверждения OTP и ссылки активации без спама, логов и регистрации."
    },
    "addressBar": {
      "tempEmailLabel": "Временная Почта",
      "liveBadge": "Онлайн",
      "copyAddress": "Скопировать Адрес",
      "copiedAddress": "Скопировано!",
      "refreshTooltip": "Обновить письма (Автообновление каждые 10 сек)",
      "customTooltip": "Создать свой логин",
      "qrTooltip": "Показать QR-код для телефона",
      "changeTooltip": "Сгенерировать новый адрес",
      "deleteTooltip": "Удалить этот ящик"
    },
    "inboxList": {
      "title": "Входящие",
      "emptyTitle": "Ожидание входящих писем...",
      "emptyDesc": "Скопируйте временный адрес выше и вставьте в форму регистрации. Новые письма появятся здесь автоматически.",
      "autoChecking": "Автопроверка активна",
      "clickToView": "Нажмите, чтобы просмотреть письмо...",
      "unreadBadge": "Не прочитано",
      "unreadEmail": "непрочитанное письмо",
      "unreadEmails": "непрочитанных писем",
      "totalEmail": "письмо",
      "totalEmails": "писем"
    },
    "emailDetail": {
      "noMessageTitle": "Письмо не выбрано",
      "noMessageDesc": "Выберите письмо из списка входящих, чтобы прочитать его и скопировать коды подтверждения.",
      "loading": "Загрузка письма...",
      "backToInbox": "Назад во входящие",
      "htmlTab": "HTML",
      "textTab": "Текст",
      "downloadTooltip": "Скачать письмо",
      "deleteTooltip": "Удалить это письмо",
      "otpDetected": "Обнаружен Код Подтверждения",
      "copyOtp": "Скопировать Код",
      "copiedOtp": "Скопировано!",
      "verifyLink": "Ссылка:",
      "openLink": "Открыть ссылку ↗",
      "toLabel": "Кому:",
      "noSubject": "(Без темы)",
      "defaultSender": "Отправитель",
      "defaultDate": "Дата"
    },
    "customModal": {
      "title": "Свой Email Адрес",
      "desc": "Выберите желаемый логин и домен для создания персонализированного временного ящика.",
      "usernameLabel": "Логин",
      "usernamePlaceholder": "напр. alex.reg",
      "domainLabel": "Домен",
      "loadingDomains": "Загрузка доменов...",
      "preview": "Предпросмотр:",
      "cancel": "Отмена",
      "create": "Создать Ящик"
    },
    "qrModal": {
      "title": "QR-код для Телефона",
      "desc": "Отсканируйте код камерой смартфона, чтобы моментально открыть эту почту на мобильном устройстве.",
      "copyLink": "Скопировать Ссылку",
      "copiedLink": "Ссылка Скопирована!",
      "close": "Закрыть"
    },
    "historyDrawer": {
      "title": "Недавние Ящики",
      "desc": "Быстро переключайтесь между сохраненными в браузере временными адресами.",
      "activeInbox": "Активен",
      "savedStorage": "Сохранено локально",
      "emptyTitle": "Нет сохраненных ящиков",
      "emptyDesc": "При создании или смене временных ящиков ваши адреса появятся в этом списке.",
      "clearAll": "Очистить Историю",
      "confirmClearTitle": "Очистить Историю",
      "confirmClearDesc": "Вы уверены, что хотите удалить все сохраненные адреса из памяти браузера?"
    },
    "confirmModal": {
      "cancel": "Отмена",
      "confirm": "Подтвердить",
      "deleteInboxTitle": "Удалить Почтовый Ящик",
      "deleteInboxDesc": "Вы уверены, что хотите безвозвратно удалить этот временный email и все сообщения?",
      "changeAddressTitle": "Сменить Адрес",
      "changeAddressDesc": "Создать новый случайный email? Текущие письма останутся в вашей истории.",
      "deleteMessageTitle": "Удалить Сообщение",
      "deleteMessageDesc": "Вы уверены, что хотите навсегда удалить это сообщение?"
    },
    "cookieConsent": {
      "title": "🍪 Настройки Cookie",
      "desc": "Мы используем cookie для сохранения настроек (тема, недавние ящики) и анализа посещаемости. Читайте нашу",
      "privacyPolicy": "Политику Конфиденциальности",
      "essentialOnly": "Только Необходимые",
      "acceptAll": "Принять Все"
    },
    "toasts": {
      "soundEnabled": "🔔 Звуковые уведомления включены",
      "soundMuted": "🔕 Звуковые уведомления выключены",
      "initFailed": "Не удалось инициализировать почту. Пожалуйста, обновите страницу.",
      "messageDeleted": "Письмо удалено",
      "switchedTo": "Переключено на",
      "generatedNew": "Сгенерирован новый временный ящик!",
      "mailboxDeleted": "Ящик удален и создан новый адрес!",
      "customCreated": "Пользовательский ящик успешно создан",
      "customFailed": "Ошибка создания. Попробуйте другой логин.",
      "providerSwitched": "Активный провайдер изменен на",
      "historyCleared": "История ящиков очищена.",
      "copiedToClipboard": "Скопировано в буфер обмена!",
      "copyFailed": "Не удалось скопировать",
      "otpCopied": "Код подтверждения {code} скопирован!",
      "loadMessageFailed": "Не удалось загрузить содержимое письма."
    },
    "relativeTime": {
      "justNow": "Только что",
      "yesterday": "Вчера",
      "secondsAgo": "{n} сек назад",
      "minutesAgo": "{n} мин назад",
      "hoursAgo": "{n} ч назад",
      "daysAgo": "{n} дн назад"
    },
    "useCases": {
      "badge": "Популярные Сервисы",
      "title": "Работает Везде и Без Сбоев",
      "subtitle": "Используйте TempoEmails для быстрой верификации на сайтах, защищая основной ящик от спама.",
      "items": [
        {
          "category": "Тестирование ИИ и сервисов",
          "badge": "ChatGPT и SaaS",
          "title": "Временная почта для ChatGPT и пробных версий",
          "description": "Регистрируйтесь в сервисах ИИ, API и пробных версиях SaaS, не оставляя свой личный адрес в спам-базах.",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "Пробные SaaS"
          ]
        },
        {
          "category": "Игры и сообщества",
          "badge": "Discord и Steam",
          "title": "Одноразовая почта для Discord и игр",
          "description": "Создавайте дополнительные игровые профили, вступайте в Discord, подтверждайте Steam и получайте бета-ключи.",
          "tags": [
            "Верификация Discord",
            "Аккаунты Steam",
            "Оповещения Twitch",
            "Epic Games"
          ]
        },
        {
          "category": "Соцсети и мессенджеры",
          "badge": "Telegram и соцсети",
          "title": "Анонимная почта для соцсетей и приложений",
          "description": "Сохраняйте приватность при регистрации на форумах, в Telegram, Reddit или при скачивании полезных материалов.",
          "tags": [
            "Регистрации Telegram",
            "Профили Reddit",
            "Форумы",
            "Скачивание файлов"
          ]
        },
        {
          "category": "Разработка и тестирование QA",
          "badge": "API почты и QA",
          "title": "Генератор тестовых ящиков для тестирования",
          "description": "Тестируйте сценарии регистрации, доставку транзакционных писем и сброс паролей для множества пользователей.",
          "tags": [
            "Тестирование регистрации",
            "Тесты вебхуков",
            "Проверка Auth",
            "Мульти-ящики"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "⚡ Автоматический Поиск Кодов",
      "title": "Мгновенно получайте OTP-коды подтверждения на временную почту.",
      "subtitle": "TempoEmails моментально сканирует входящие сообщения и извлекает коды подтверждения из 4–8 цифр и ссылки активации.",
      "tag1": "Коды OTP из 4–8 Цифр",
      "tag2": "Ссылки Активации в 1 Клик",
      "tag3": "Быстрое Копирование",
      "previewBadge": "Предпросмотр",
      "previewDetected": "Обнаружено Автоматически",
      "previewCode": "Код подтверждения",
      "previewCopy": "Копировать",
      "previewFrom": "От: Служба безопасности",
      "previewSubj": "Ваш одноразовый код подтверждения: 593821",
      "previewTime": "Только что"
    },
    "features": {
      "badge": "Возможности",
      "title": "Создано для Максимальной Скорости и Полной Приватности",
      "subtitle": "Все необходимое от современной временной почты: высокая скорость и полное отсутствие слежки.",
      "items": [
        {
          "title": "Бесплатная временная почта",
          "description": "Защитите свой основной ящик от рассылок, брокеров данных, спама и нежелательных писем навсегда."
        },
        {
          "title": "Автоматическое извлечение OTP и кодов",
          "description": "Входящие письма автоматически сканируются для мгновенного выделения 4-8 значных кодов и ссылок активации."
        },
        {
          "title": "100% анонимность — без логов",
          "description": "Без регистрации, без отслеживания и без центральной базы данных. Письма удаляются навсегда."
        },
        {
          "title": "QR-перенос с ПК на телефон",
          "description": "Отсканируйте QR-код на экране камерой смартфона, чтобы мгновенно открыть временный ящик на мобильном."
        },
        {
          "title": "Живой автообновляемый ящик",
          "description": "Новые письма поступают в реальном времени с автоматической проверкой каждые 10 секунд и SSE push."
        },
        {
          "title": "Переключатель нескольких ящиков",
          "description": "Управляйте до 8 временными адресами одновременно через историю сессий без потери писем."
        }
      ]
    },
    "howItWorks": {
      "badge": "Инструкция в 4 Шага",
      "title": "Как Работает Временная Почта за 4 Шага",
      "subtitle": "От создания до подтверждения за пару секунд. Никаких паролей и персональных данных.",
      "step1Title": "1. Скопируйте Бесплатный Email",
      "step1Desc": "Мы мгновенно создаем готовый рабочий временный адрес для приема писем.",
      "step2Title": "2. Используйте при Регистрации",
      "step2Desc": "Вставьте полученный адрес на любом сайте, в приложении или онлайн-игре.",
      "step3Title": "3. Автопоиск Кодов и Ссылок",
      "step3Desc": "Письма приходят моментально, а коды подтверждения подсвечиваются кнопкой копирования.",
      "step4Title": "4. Закройте и Забудьте",
      "step4Desc": "Закройте вкладку после регистрации. Никакого спама в вашей личной почте."
    },
    "faq": {
      "badge": "Частые Вопросы",
      "title": "Часто Задаваемые Вопросы",
      "subtitle": "Все о временной почте, получении кодов OTP и безопасности данных.",
      "q1": "Что такое временная почта и как она работает?",
      "a1": "Временная почта (10 минутная почта или одноразовый email) предоставляет мгновенный адрес для получения писем без раскрытия вашего настоящего email.",
      "q2": "Можно ли использовать сервис для получения кодов OTP?",
      "a2": "Да! Наш анализатор автоматически распознает 4-8 значные коды подтверждения и ссылки активации.",
      "q3": "Работает ли почта с Discord, ChatGPT, Telegram или Steam?",
      "a3": "Да. Если какой-либо сайт отклоняет домен, просто нажмите \"Сменить\", чтобы выбрать другой активный домен.",
      "q4": "Можно ли отправлять письма через TempoEmails?",
      "a4": "Нет. Сервис работает только на прием, что защищает домены от спам-фильтров и гарантирует мгновенную доставку писем.",
      "q5": "Могу ли я выбрать свой логин и домен?",
      "a5": "Да. Нажмите \"Свой email\" в строке адреса и выберите желаемое имя.",
      "q6": "Это действительно бесплатно и без регистрации?",
      "a6": "Да, 100% бесплатно, без регистрации, паролей и сохранения персональных логов."
    },
    "footer": {
      "brandDesc": "Бесплатный генератор одноразовой временной почты. Получайте коды активации и OTP, защищая личный ящик от спама.",
      "quickLinks": "Быстрые Ссылки",
      "instantInbox": "Мгновенный Ящик",
      "company": "Компания",
      "legal": "Документы",
      "privacyPolicy": "Конфиденциальность",
      "termsOfService": "Условия Использования",
      "disclaimer": "Отказ от Ответственности",
      "allRightsReserved": "Все права защищены."
    },
    "common": {
      "home": "Главная",
      "blog": "Блог",
      "backToHome": "На главную",
      "allArticles": "← Все статьи",
      "readArticle": "Читать статью",
      "all": "Все",
      "guide": "Руководство",
      "architecture": "Архитектура",
      "privacy": "Приватность",
      "security": "Безопасность",
      "copy": "Копировать",
      "copied": "Скопировано!",
      "copyEmailToast": "{email} скопирован в буфер обмена!",
      "copyFailedToast": "Не удалось скопировать адрес",
      "pageNotFoundBadge": "Страница не найдена",
      "pageNotFoundTitle": "Увы, срок действия этой страницы",
      "pageExpired": "истёк.",
      "pageNotFoundDesc": "Как и временное письмо, эта страница исчезла. Но ваш одноразовый ящик по-прежнему готов к работе.",
      "goToHomepage": "Перейти на главную",
      "readOurBlog": "Читать наш блог",
      "translationNotice": "Эта статья в настоящее время отображается на английском языке. Полный перевод в процессе."
    },
    "pages": {
      "about": {
        "title": "О сервисе TempoEmails — Бесплатная временная одноразовая почта",
        "description": "Почему мы создали TempoEmails: быстрый и бесплатный сервис временной почты с распознаванием OTP и без логов.",
        "heading": "Почему мы создали TempoEmails",
        "subheading": "Чистый, быстрый и конфиденциальный временный ящик, который просто работает."
      },
      "contact": {
        "title": "Контакты и поддержка TempoEmails",
        "description": "Служба поддержки TempoEmails: доставка почты, запросы API для разработчиков и обратная связь.",
        "heading": "Контакты и поддержка",
        "subheading": "Есть вопрос, нашли ошибку или нужна помощь? Свяжитесь с нами."
      },
      "blog": {
        "title": "Блог о приватности, безопасности и временной почте — TempoEmails",
        "description": "Экспертные статьи об одноразовой почте, OTP кодах, почте на 10 минут и цифровой безопасности.",
        "heading": "Руководства по приватности и безопасности",
        "subheading": "Практические советы по защите от спама, управлению аккаунтами и защите основной почты."
      },
      "privacy": {
        "title": "Политика конфиденциальности — TempoEmails",
        "description": "Политика конфиденциальности TempoEmails: без логов, обработка в оперативной памяти и соответствие GDPR.",
        "heading": "Политика конфиденциальности"
      },
      "terms": {
        "title": "Условия использования — TempoEmails",
        "description": "Условия предоставления услуг бесплатной временной одноразовой почты TempoEmails.",
        "heading": "Условия использования"
      },
      "disclaimer": {
        "title": "Отказ от ответственности — TempoEmails",
        "description": "Отказ от ответственности TempoEmails: правила добросовестного использования и меры безопасности.",
        "heading": "Отказ от ответственности"
      }
    }
  },
  "zh": {
    "meta": {
      "title": "免费临时邮箱 — 10分钟一次性临时邮箱与虚假邮箱生成器",
      "description": "免费临时邮箱与一次性临时邮箱生成器。即时接收OTP验证码、账号激活链接与邮件，完全匿名，零垃圾邮件，免注册。",
      "keywords": "临时邮箱, 一次性邮箱, 10分钟邮箱, 临时邮, 临时电子邮箱, 虚假邮箱生成器, 在线接收验证码, 免费临时邮箱, temp mail 中文"
    },
    "nav": {
      "features": "核心功能",
      "howItWorks": "运作原理",
      "faq": "常见问题",
      "blog": "安全博客",
      "about": "关于我们",
      "contact": "联系我们",
      "history": "历史邮箱",
      "selectLanguage": "选择语言"
    },
    "hero": {
      "badge": "⚡ 即时临时邮箱与10分钟一次性收件箱",
      "titleLine1": "免费临时邮箱。",
      "titleLine2": "数秒内生成一次性邮箱。",
      "subtitle": "一键生成即时一次性临时电子邮箱地址。秒收验证码、OTP与激活链接，零垃圾邮件、零日志、免注册。"
    },
    "addressBar": {
      "tempEmailLabel": "临时邮箱",
      "liveBadge": "正常运行",
      "copyAddress": "复制邮箱地址",
      "copiedAddress": "已复制！",
      "refreshTooltip": "刷新邮件（每10秒自动刷新）",
      "customTooltip": "自定义邮箱前缀",
      "qrTooltip": "显示手机端二维码",
      "changeTooltip": "更换随机新邮箱",
      "deleteTooltip": "删除此邮箱"
    },
    "inboxList": {
      "title": "收件箱",
      "emptyTitle": "等待接收新邮件...",
      "emptyDesc": "复制上方的临时邮箱地址并粘贴到任意注册表单中。收到的邮件将自动显示在此处。",
      "autoChecking": "实时检测中",
      "clickToView": "点击查看邮件详情...",
      "unreadBadge": "未读",
      "unreadEmail": "封未读邮件",
      "unreadEmails": "封未读邮件",
      "totalEmail": "封邮件",
      "totalEmails": "封邮件"
    },
    "emailDetail": {
      "noMessageTitle": "未选择任何邮件",
      "noMessageDesc": "从左侧收件箱中点击邮件以查看内容并提取验证码。",
      "loading": "正在加载邮件...",
      "backToInbox": "返回收件箱",
      "htmlTab": "HTML 视图",
      "textTab": "纯文本",
      "downloadTooltip": "下载邮件",
      "deleteTooltip": "删除此邮件",
      "otpDetected": "检测到验证码",
      "copyOtp": "复制验证码",
      "copiedOtp": "已复制！",
      "verifyLink": "激活链接：",
      "openLink": "打开链接 ↗",
      "toLabel": "收件人:",
      "noSubject": "(无主题)",
      "defaultSender": "发件人",
      "defaultDate": "日期"
    },
    "customModal": {
      "title": "自定义邮箱地址",
      "desc": "自由选择您喜欢的用户名和可用域名，定制专属临时收件箱。",
      "usernameLabel": "用户名",
      "usernamePlaceholder": "例如：alex.signup",
      "domainLabel": "邮箱后缀域名",
      "loadingDomains": "正在加载域名列表...",
      "preview": "预览地址：",
      "cancel": "取消",
      "create": "立即创建"
    },
    "qrModal": {
      "title": "手机端二维码",
      "desc": "使用手机相机扫描此二维码，即可在移动端随时查看并使用当前临时邮箱。",
      "copyLink": "复制链接",
      "copiedLink": "链接已复制！",
      "close": "关闭"
    },
    "historyDrawer": {
      "title": "最近使用的邮箱",
      "desc": "在浏览器本地安全保存的历史临时邮箱之间快速切换。",
      "activeInbox": "当前使用",
      "savedStorage": "已保存在本地浏览器",
      "emptyTitle": "暂无历史邮箱",
      "emptyDesc": "当您创建或切换临时邮箱时，历史记录会自动保存在这里。",
      "clearAll": "清空所有历史",
      "confirmClearTitle": "清空历史记录",
      "confirmClearDesc": "确定要清除保存在本地浏览器中的所有历史临时邮箱吗？"
    },
    "confirmModal": {
      "cancel": "取消",
      "confirm": "确认",
      "deleteInboxTitle": "删除当前邮箱",
      "deleteInboxDesc": "您确定要彻底销毁此临时邮箱及所有已接收的邮件吗？",
      "changeAddressTitle": "更换邮箱地址",
      "changeAddressDesc": "生成新的随机临时邮箱？当前邮件仍会保留在历史记录中。",
      "deleteMessageTitle": "删除邮件",
      "deleteMessageDesc": "您确定要彻底删除该邮件吗？"
    },
    "cookieConsent": {
      "title": "🍪 Cookie 偏好设置",
      "desc": "我们使用 Cookie 储存您的个性化设置（如深色模式和历史邮箱）并统计访问量。请参阅我们的",
      "privacyPolicy": "隐私政策",
      "essentialOnly": "仅必要 Cookie",
      "acceptAll": "全部同意"
    },
    "toasts": {
      "soundEnabled": "🔔 已开启邮件提示音",
      "soundMuted": "🔕 已静音邮件提示音",
      "initFailed": "邮箱初始化失败，请尝试刷新页面。",
      "messageDeleted": "邮件已删除",
      "switchedTo": "已切换至",
      "generatedNew": "成功生成全新临时邮箱！",
      "mailboxDeleted": "旧邮箱已销毁，新邮箱已就绪！",
      "customCreated": "自定义邮箱创建成功",
      "customFailed": "创建失败，请尝试更换其他用户名。",
      "providerSwitched": "活动邮件服务已切换至",
      "historyCleared": "历史邮箱记录已全部清空。",
      "copiedToClipboard": "已成功复制到剪贴板！",
      "copyFailed": "复制失败",
      "otpCopied": "验证码 {code} 已复制！",
      "loadMessageFailed": "加载邮件内容失败。"
    },
    "relativeTime": {
      "justNow": "刚刚",
      "yesterday": "昨天",
      "secondsAgo": "{n}秒前",
      "minutesAgo": "{n}分钟前",
      "hoursAgo": "{n}小时前",
      "daysAgo": "{n}天前"
    },
    "useCases": {
      "badge": "热门适用平台",
      "title": "完美支持各类主流在线服务",
      "subtitle": "使用 TempoEmails 轻松完成各大平台的账号注册验证，彻底告别垃圾营销邮件骚扰。",
      "items": [
        {
          "category": "AI 与软件试用",
          "badge": "ChatGPT 与 SaaS",
          "title": "适用于 ChatGPT 与免费试用的临时邮箱",
          "description": "注册 AI 工具、开发者 API 和 SaaS 试用账号，无需将真实邮箱暴露在推广名单中。",
          "tags": [
            "ChatGPT / OpenAI",
            "Midjourney",
            "Claude AI",
            "SaaS 免费试用"
          ]
        },
        {
          "category": "游戏与玩家社区",
          "badge": "Discord 与 Steam",
          "title": "适用于 Discord 与游戏的一次性邮箱",
          "description": "轻松创建游戏小号、加入 Discord 服务器、验证 Steam 账号并领取游戏测试激活码。",
          "tags": [
            "Discord 验证",
            "Steam 账号",
            "Twitch 提醒",
            "Epic 游戏"
          ]
        },
        {
          "category": "社交媒体与即时通讯",
          "badge": "Telegram 与社交平台",
          "title": "用于社交网络与应用的隐私临时邮箱",
          "description": "在社交网络、论坛、Telegram、Reddit 注册或下载白皮书时隐藏您的真实邮箱。",
          "tags": [
            "Telegram 注册",
            "Reddit 账号",
            "论坛注册",
            "文档下载"
          ]
        },
        {
          "category": "开发者与 QA 测试",
          "badge": "邮件 API 与 QA",
          "title": "用于软件测试的虚假邮箱生成器",
          "description": "测试用户注册流程、验证事务性邮件送达率、测试密码重置链路并模拟多用户并发。",
          "tags": [
            "注册流程测试",
            "Webhook 测试",
            "认证核验",
            "多收件箱模拟"
          ]
        }
      ]
    },
    "otpShowcase": {
      "badge": "⚡ 智能识别验证码",
      "title": "在临时邮箱中即时提取验证码与激活链接。",
      "subtitle": "TempoEmails 会在邮件送达的第一时间自动扫描邮件内容，精准提取4-8位OTP数字验证码及确认链接，提供一键快捷复制。",
      "tag1": "4至8位数字验证码",
      "tag2": "一键直接打开激活链接",
      "tag3": "一键快捷复制",
      "previewBadge": "邮箱预览",
      "previewDetected": "自动识别",
      "previewCode": "验证码",
      "previewCopy": "复制",
      "previewFrom": "发件人: 安全团队",
      "previewSubj": "您的一次性验证码是 593821",
      "previewTime": "刚刚"
    },
    "features": {
      "badge": "平台优势",
      "title": "专为极致速度与全面隐私打造",
      "subtitle": "现代临时邮箱必备的一切功能，零追踪、秒级响应，极致轻量。",
      "items": [
        {
          "title": "免费临时邮箱生成器",
          "description": "保护您的主邮箱免受营销快讯、数据中介、垃圾邮件陷阱和骚扰邮件的困扰。"
        },
        {
          "title": "自动提取 OTP 与验证码",
          "description": "自动智能解析收到的邮件，一键高亮并复制 4 至 8 位验证码和激活链接。"
        },
        {
          "title": "100% 匿名邮件 — 零日志",
          "description": "无需注册、无个人追踪、无中心数据库。删除临时邮箱后邮件彻底销毁。"
        },
        {
          "title": "电脑到手机 QR 二维码同步",
          "description": "手机相机扫描屏幕二维码，即可在手机或平板电脑上快速打开临时邮箱。"
        },
        {
          "title": "实时自动刷新收件箱",
          "description": "10 秒自动轮询与 SSE 推送技术，新邮件实时秒级送达，无需手动反复刷新。"
        },
        {
          "title": "多邮箱 10 分钟邮件切换",
          "description": "在历史记录抽屉中同时管理多达 8 个临时邮箱，随时切换且不会遗失待处理邮件。"
        }
      ]
    },
    "howItWorks": {
      "badge": "轻松四步",
      "title": "四步搞定临时邮箱注册与验证",
      "subtitle": "数秒内完成账号注册验证，无需任何个人信息与复杂配置。",
      "step1Title": "1. 复制免费邮箱",
      "step1Desc": "系统为您即时生成可正常收信的活跃临时邮箱。",
      "step2Title": "2. 填入注册表单",
      "step2Desc": "将临时地址粘贴到任何需要邮箱验证的应用、游戏或网站中。",
      "step3Title": "3. 自动提取验证码",
      "step3Desc": "新邮件秒级推送到收件箱，系统自动提取验证码并置顶显示。",
      "step4Title": "4. 用完即弃零残留",
      "step4Desc": "完成验证后关闭页面即可，个人真实邮箱永远远离垃圾广告。"
    },
    "faq": {
      "badge": "常见疑问",
      "title": "常见问题解答",
      "subtitle": "关于临时邮箱、OTP验证码识别与隐私保护的一切解答。",
      "q1": "什么是临时邮箱？它是如何工作的？",
      "a1": "临时邮箱（又称一次性邮箱或10分钟邮箱）为您提供临时的收信地址，用于接收验证码和激活邮件，保护您的真实邮箱免遭泄露。",
      "q2": "TempoEmails 可以用来接收网站注册验证码吗？",
      "a2": "可以！TempoEmails 内置智能算法，能自动识别并提取邮件中的验证码，提供一键复制按钮。",
      "q3": "支持 Discord、ChatGPT、Telegram 或 Steam 吗？",
      "a3": "支持。如果遇到个别平台限制当前后缀，点击“更换”或“自定义”切换到其他可用域名即可。",
      "q4": "可以通过 TempoEmails 发送邮件吗？",
      "a4": "不可以。TempoEmails 仅支持接收邮件，这可防止垃圾邮件滥用，确保发信方服务器能够快速顺畅地送达验证码。",
      "q5": "可以自定义专属邮箱名字吗？",
      "a5": "可以。点击地址栏旁边的“自定义”按钮，即可自由设置用户名并挑选可用域名。",
      "q6": "使用完全免费且免注册吗？",
      "a6": "是的，100% 永久免费，无需注册账号，无需设置密码，且不会记录任何用户隐私日志。"
    },
    "footer": {
      "brandDesc": "免费一次性临时邮箱生成器。快速接收验证码与激活链接，守护您的私人邮箱免受垃圾邮件侵扰。",
      "quickLinks": "快捷链接",
      "instantInbox": "即时邮箱",
      "company": "关于我们",
      "legal": "法律与条款",
      "privacyPolicy": "隐私政策",
      "termsOfService": "服务条款",
      "disclaimer": "免责声明",
      "allRightsReserved": "保留所有权利。"
    },
    "common": {
      "home": "首页",
      "blog": "博客",
      "backToHome": "返回首页",
      "allArticles": "← 所有文章",
      "readArticle": "阅读全文",
      "all": "全部",
      "guide": "指南",
      "architecture": "技术架构",
      "privacy": "隐私保护",
      "security": "网络安全",
      "copy": "复制",
      "copied": "已复制！",
      "copyEmailToast": "{email} 已复制到剪贴板！",
      "copyFailedToast": "复制邮箱地址失败",
      "pageNotFoundBadge": "页面未找到",
      "pageNotFoundTitle": "抱歉，该页面已",
      "pageExpired": "过期。",
      "pageNotFoundDesc": "就像临时邮件一样，该页面已销毁。但别担心，您的临时收件箱仍在待命。",
      "goToHomepage": "前往首页",
      "readOurBlog": "阅读博客",
      "translationNotice": "本文目前以英文显示。完整翻译正在进行中。"
    },
    "pages": {
      "about": {
        "title": "关于 TempoEmails — 免费临时邮箱与隐私保护使命",
        "description": "为什么我们构建 TempoEmails：快速、免费的临时一次性邮箱服务，支持智能 OTP 识别和零日志保护。",
        "heading": "为什么我们构建 TempoEmails",
        "subheading": "清爽、极速、隐私优先且开箱即用的临时邮件工具。"
      },
      "contact": {
        "title": "联系与支持 — TempoEmails",
        "description": "获取 TempoEmails 免费临时邮箱技术支持、域名送达率咨询、开发者 API 或提出宝贵建议。",
        "heading": "联系与技术支持",
        "subheading": "有疑问、发现了问题或需要帮助？随时与我们联系。"
      },
      "blog": {
        "title": "隐私、安全与临时邮箱博客 — TempoEmails",
        "description": "关于免费临时邮箱、OTP 验证码提取、10 分钟邮箱与数字隐私防护的专业指南。",
        "heading": "隐私与安全指南",
        "subheading": "远离垃圾邮件、管理在线账户和保护主邮箱的实用技巧。"
      },
      "privacy": {
        "title": "隐私政策 — TempoEmails",
        "description": "TempoEmails 隐私政策：零日志记录、临时内存处理，严格遵守 GDPR/CCPA 规范。",
        "heading": "隐私政策"
      },
      "terms": {
        "title": "服务条款 — TempoEmails",
        "description": "TempoEmails 免费临时一次性邮箱服务条款与使用协议。",
        "heading": "服务条款"
      },
      "disclaimer": {
        "title": "免责声明 — TempoEmails",
        "description": "TempoEmails 免责声明：合理使用规则、服务限制与安全防范须知。",
        "heading": "免责声明"
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
      "badge": "⚡ 即時発行の捨てメアド＆10分間使い捨てメール",
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
      "deleteTooltip": "このメールボックスを削除"
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
      "openLink": "リンクを開く ↗",
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
      "create": "メールボックスを作成"
    },
    "qrModal": {
      "title": "スマホ用QRコード",
      "desc": "スマホのカメラでスキャンすれば、スマートフォンでも同じ捨てメアドをすぐに使えます。",
      "copyLink": "リンクをコピー",
      "copiedLink": "コピーしました！",
      "close": "閉じる"
    },
    "historyDrawer": {
      "title": "最近のアドレス履歴",
      "desc": "ブラウザに一時保存された過去の捨てメアドをすばやく切り替えることができます。",
      "activeInbox": "現在使用中",
      "savedStorage": "ローカル保存済み",
      "emptyTitle": "履歴はありません",
      "emptyDesc": "アドレスを作成または切り替えると、ここに履歴が表示されます。",
      "clearAll": "履歴を全消去",
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
      "title": "🍪 Cookie の設定",
      "desc": "ダークモードやアドレス履歴の保持、アクセス解析のために Cookie を使用しています。詳しくは",
      "privacyPolicy": "プライバシーポリシー",
      "essentialOnly": "必須のみ",
      "acceptAll": "すべて同意"
    },
    "toasts": {
      "soundEnabled": "🔔 通知音をオンにしました",
      "soundMuted": "🔕 通知音をオフにしました",
      "initFailed": "初期化に失敗しました。ページを再読み込みしてください。",
      "messageDeleted": "メールを削除しました",
      "switchedTo": "切り替えました:",
      "generatedNew": "新しい捨てメアドを作成しました！",
      "mailboxDeleted": "アドレスを破棄し、新しいアドレスを作成しました！",
      "customCreated": "カスタムアドレスを作成しました",
      "customFailed": "作成に失敗しました。別のユーザー名をお試しください。",
      "providerSwitched": "プロバイダを切り替えました:",
      "historyCleared": "アドレス履歴を削除しました。",
      "copiedToClipboard": "クリップボードにコピーしました！",
      "copyFailed": "コピーに失敗しました",
      "otpCopied": "認証コード {code} をコピーしました！",
      "loadMessageFailed": "メール内容の読み込みに失敗しました。"
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
      "badge": "⚡ 自動認証コード解析",
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
    "common": {
      "home": "ホーム",
      "blog": "ブログ",
      "backToHome": "ホームに戻る",
      "allArticles": "← すべての記事",
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
        "subheading": "スパム対策、アカウント管理、メインアドレスの保護に役立つ実践的アドバイス。"
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
      "badge": "⚡ بريد إلكتروني مؤقت وفوري لمدة 10 دقائق",
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
      "deleteTooltip": "حذف هذا الصندوق"
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
      "openLink": "فتح الرابط ↗",
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
      "create": "إنشاء البريد"
    },
    "qrModal": {
      "title": "رمز QR للهاتف",
      "desc": "امسح الرمز بكاميرا هاتفك لفتح واستخدام هذا البريد المؤقت على الجوال فوراً.",
      "copyLink": "نسخ الرابط",
      "copiedLink": "تم نسخ الرابط!",
      "close": "إغلاق"
    },
    "historyDrawer": {
      "title": "الصناديق السابقة",
      "desc": "تنقل بسهولة بين عناوين البريد المؤقتة السابقة المحفوظة بأمان في متصفحك.",
      "activeInbox": "الحالي",
      "savedStorage": "محفوظ محلياً",
      "emptyTitle": "لا توجد صناديق سابقة",
      "emptyDesc": "عند إنشاء أو تبديل الصناديق المؤقتة، ستظهر عناوينك السابقة هنا.",
      "clearAll": "مسح كل السجل",
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
      "title": "🍪 إعدادات ملفات تعريف الارتباط",
      "desc": "نستخدم ملفات تعريف الارتباط لحفظ تفضيلاتك وقياس زيارات الموقع. اطلع على",
      "privacyPolicy": "سياسة الخصوصية",
      "essentialOnly": "الضرورية فقط",
      "acceptAll": "قبول الكل"
    },
    "toasts": {
      "soundEnabled": "🔔 تم تفعيل التنبيهات الصوتية",
      "soundMuted": "🔕 تم كتم التنبيهات الصوتية",
      "initFailed": "فشل تهيئة البريد. يرجى تحديث الصفحة.",
      "messageDeleted": "تم حذف الرسالة",
      "switchedTo": "تم التبديل إلى",
      "generatedNew": "تم إنشاء بريد مؤقت جديد بنجاح!",
      "mailboxDeleted": "تم حذف الصندوق وإنشاء عنوان جديد!",
      "customCreated": "تم إنشاء البريد المخصص بنجاح",
      "customFailed": "فشل الإنشاء. يرجى تجربة اسم مستخدم آخر.",
      "providerSwitched": "تم تغيير مزود الخدمة إلى",
      "historyCleared": "تم مسح سجل الصناديق.",
      "copiedToClipboard": "تم النسخ إلى الحافظة!",
      "copyFailed": "فشل النسخ",
      "otpCopied": "تم نسخ رمز التحقق {code}!",
      "loadMessageFailed": "فشل تحميل محتوى الرسالة."
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
      "badge": "⚡ كشف تلقائي لأكواد التحقق",
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
    "common": {
      "home": "الرئيسية",
      "blog": "المدونة",
      "backToHome": "العودة للرئيسية",
      "allArticles": "← جميع المقالات",
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
        "subheading": "إرشادات عملية لتجنب البريد العشوائي وإدارة الحسابات وحماية بريدك الشخصي."
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
      "badge": "⚡ Email Sementara Cepat & Kotak Masuk 10 Menit",
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
      "deleteTooltip": "Hapus kotak masuk ini"
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
      "openLink": "Buka Tautan ↗",
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
      "create": "Buat Email"
    },
    "qrModal": {
      "title": "QR Code Ponsel",
      "desc": "Pindai kode ini dengan kamera ponsel Anda untuk langsung membuka email sementara ini di HP.",
      "copyLink": "Salin Tautan",
      "copiedLink": "Tautan Tersalin!",
      "close": "Tutup"
    },
    "historyDrawer": {
      "title": "Riwayat Email",
      "desc": "Beralih dengan cepat di antara email sementara yang tersimpan aman di browser Anda.",
      "activeInbox": "Sedang Aktif",
      "savedStorage": "Tersimpan di Browser",
      "emptyTitle": "Belum ada riwayat",
      "emptyDesc": "Saat Anda membuat atau mengganti email sementara, alamat Anda akan muncul di sini.",
      "clearAll": "Hapus Semua Riwayat",
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
      "title": "🍪 Preferensi Cookie",
      "desc": "Kami menggunakan cookie untuk menyimpan setelan (seperti mode gelap dan riwayat email) dan memantau lalu lintas. Baca",
      "privacyPolicy": "Kebijakan Privasi",
      "essentialOnly": "Hanya yang Penting",
      "acceptAll": "Terima Semua"
    },
    "toasts": {
      "soundEnabled": "🔔 Suara notifikasi diaktifkan",
      "soundMuted": "🔕 Suara notifikasi dibisukan",
      "initFailed": "Gagal memuat kotak masuk. Silakan muat ulang halaman.",
      "messageDeleted": "Pesan berhasil dihapus",
      "switchedTo": "Beralih ke",
      "generatedNew": "Email sementara baru berhasil dibuat!",
      "mailboxDeleted": "Kotak masuk dihapus dan alamat baru telah dibuat!",
      "customCreated": "Email kustom berhasil dibuat",
      "customFailed": "Gagal membuat email. Silakan coba username lain.",
      "providerSwitched": "Penyedia email aktif diubah ke",
      "historyCleared": "Semua riwayat email berhasil dibersihkan.",
      "copiedToClipboard": "Disalin ke papan klip!",
      "copyFailed": "Gagal menyalin",
      "otpCopied": "Kode verifikasi {code} berhasil disalin!",
      "loadMessageFailed": "Gagal memuat konten pesan."
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
      "badge": "⚡ Deteksi Kode Otomatis",
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
    "common": {
      "home": "Beranda",
      "blog": "Blog",
      "backToHome": "Kembali ke Beranda",
      "allArticles": "← Semua Artikel",
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
        "subheading": "Tips praktis menghindari spam, mengelola akun online, dan melindungi email utama Anda."
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
