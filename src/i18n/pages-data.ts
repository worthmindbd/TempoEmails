import type { Locale } from './languages';
import { SITE_CONFIG } from '../lib/config';

export interface AboutFeatureItem {
  title: string;
  desc: string;
}

/**
 * Icon name (see `src/components/ui/Icon.astro`) for each entry of
 * `AboutPageData.features`, in order. Icons are presentation, not copy,
 * so they live here once instead of per-locale.
 */
export const ABOUT_FEATURE_ICONS = [
  'zap',
  'inbox',
  'smartphone',
  'globe',
  'shield',
] as const;

export interface AboutPrincipleItem {
  label: string;
  desc: string;
}

export interface AboutPageData {
  lead: string;
  story: string;
  quote: string;
  whyHeading: string;
  whyP1: string;
  whyP2: string;
  features: AboutFeatureItem[];
  principlesHeading: string;
  principles: AboutPrincipleItem[];
  questionsHeading: string;
  questionsLead: string;
  contactPageLink: string;
}

export interface ContactChannelItem {
  title: string;
  desc: string;
  email: string;
  copyLabel: string;
}

export interface ContactFaqItem {
  q: string;
  a: string;
  list?: string[];
}

export interface ContactResourceItem {
  badge: string;
  title: string;
  desc: string;
  slug: string;
}

export interface ContactLegalItem {
  label: string;
  desc: string;
  slug: string;
}

export interface ContactPageData {
  lead: string;
  responseTime: string;
  channelsHeading: string;
  channelsSub: string;
  channels: ContactChannelItem[];
  faqHeading: string;
  faqSub: string;
  faqs: ContactFaqItem[];
  resourcesHeading: string;
  resourcesSub: string;
  resources: ContactResourceItem[];
  bugReportHeading: string;
  bugReportIntro: string;
  bugReportPoints: string[];
  legalHeading: string;
  legalIntro: string;
  legalLinks: ContactLegalItem[];
}

export const ABOUT_PAGE_CONTENT: Record<Locale, AboutPageData> = {
  en: {
    lead: "You shouldn't have to hand over your personal email address just to read an article, try out a new app, download a file, or claim a one-time discount.",
    story: "We built TempoEmails because your real inbox deserves protection. When you share your primary email with every service you encounter online, you end up on marketing lists, get tracked across websites, and risk having your credentials leaked in third-party data breaches.",
    quote: "TempoEmails gives you a fast, disposable burner inbox in one click. Receive your verification code, activate your account, and move on — leaving zero spam behind.",
    whyHeading: "Why We Built TempoEmails",
    whyP1: "Most temporary email sites on the web are frustrating to use. They are covered in intrusive ads, take forever to refresh, use blacklisted domains that get rejected by signup forms, or make you scroll through long, messy email templates just to find a single 6-digit confirmation code.",
    whyP2: "We wanted something better: a clean, fast, privacy-first tool that just works.",
    features: [
      {
        title: "Automatic Code Detection",
        desc: "No more searching through long promotional emails. TempoEmails automatically detects 4-to-8 digit OTP codes and activation links, pinning them to the top with a one-click copy button.",
      },
      {
        title: "Live Auto-Refreshing Inbox",
        desc: "Incoming emails land in your browser within seconds. The inbox updates automatically every 10 seconds, so you don't have to keep clicking refresh.",
      },
      {
        title: "Mobile QR Code Scanner",
        desc: "Need to sign up on your phone while browsing on your computer? Scan the QR code on your screen to open or copy your active temporary inbox on mobile instantly.",
      },
      {
        title: "Active Domain Pool",
        desc: "We maintain multiple deliverable domain names. If a particular site blocks one domain, simply click 'Change' or 'Custom' to switch to another active domain.",
      },
      {
        title: "Zero Logs & Total Anonymity",
        desc: "We don't log your personal identity or track your activity. Your messages live temporarily in memory and are permanently purged when your session ends.",
      },
    ],
    principlesHeading: "Our Privacy Principles",
    principles: [
      {
        label: "No registration required",
        desc: "We never ask for your real name, phone number, personal email, or password.",
      },
      {
        label: "Temporary by design",
        desc: "Messages are automatically deleted after their short lifespan expires. Once deleted, they are gone forever.",
      },
      {
        label: "100% free",
        desc: "Privacy shouldn't be a paid privilege. TempoEmails is completely free with no limits on how many emails you can receive.",
      },
      {
        label: "Great for developers & QA",
        desc: "Perfect for testing signup flows, password resets, and automated notification pipelines.",
      },
    ],
    questionsHeading: "Questions or Feedback?",
    questionsLead: "We're always looking for ways to improve TempoEmails. If you have feature suggestions, questions, or need support, check out our",
    contactPageLink: "Contact page",
  },
  es: {
    lead: "No debería tener que entregar su dirección de correo personal solo para leer un artículo, probar una nueva aplicación, descargar un archivo o aprovechar un descuento.",
    story: "Creamos TempoEmails porque su bandeja de entrada real merece protección. Compartir su correo principal con cada sitio en línea provoca listas de spam, rastreo publicitario masivo y el riesgo de que sus contraseñas se filtren en brechas de datos.",
    quote: "TempoEmails le ofrece una bandeja de entrada temporal desechable en un solo clic. Reciba su código de verificación, active su cuenta y continúe, sin dejar rastro de spam.",
    whyHeading: "¿Por qué creamos TempoEmails?",
    whyP1: "La mayoría de los sitios de correo temporal son frustrantes: están saturados de anuncios invasivos, tardan una eternidad en actualizarse, usan dominios bloqueados o le obligan a buscar un código de 6 dígitos entre plantillas interminables.",
    whyP2: "Queríamos algo infinitamente superior: una herramienta limpia, ultrarrápida, centrada en la privacidad y que simplemente funcione.",
    features: [
      {
        title: "Detección automática de códigos OTP",
        desc: "Olvídese de buscar entre correos promocionales extensos. TempoEmails detecta automáticamente códigos de 4 a 8 dígitos y enlaces de activación, fijándolos en la parte superior con un botón de copia inmediata.",
      },
      {
        title: "Bandeja en tiempo real y auto-actualizada",
        desc: "Los correos entrantes aparecen en su pantalla en segundos. La bandeja se actualiza automáticamente cada 10 segundos sin necesidad de recargar la página.",
      },
      {
        title: "Escáner de código QR para móviles",
        desc: "¿Necesita registrarse en el móvil mientras navega en su ordenador? Escanee el código QR en pantalla para abrir o copiar su dirección temporal al instante.",
      },
      {
        title: "Grupo de dominios activos en rotación",
        desc: "Mantenemos múltiples dominios de alta entregabilidad. Si un sitio web bloquea un dominio, pulse 'Cambiar' o 'Personalizado' para alternar a otro dominio activo.",
      },
      {
        title: "Cero registros y anonimato absoluto",
        desc: "No registramos su identidad personal ni rastreamos su navegación. Sus mensajes se procesan en memoria volátil y se eliminan permanentemente al cerrar la sesión.",
      },
    ],
    principlesHeading: "Nuestros principios de privacidad",
    principles: [
      {
        label: "Sin registro previo",
        desc: "Nunca solicitamos su nombre real, número de teléfono, correo personal ni contraseñas.",
      },
      {
        label: "Efímero por diseño",
        desc: "Los mensajes se eliminan automáticamente tras expirar su breve ciclo de vida. Una vez borrados, desaparecen para siempre.",
      },
      {
        label: "100% gratuito",
        desc: "La privacidad no debe ser un privilegio de pago. TempoEmails es completamente gratis y sin límite en la cantidad de correos a recibir.",
      },
      {
        label: "Ideal para desarrolladores y QA",
        desc: "Perfecto para verificar flujos de registro, restablecimiento de contraseñas y automatización de pruebas de software.",
      },
    ],
    questionsHeading: "¿Preguntas o sugerencias?",
    questionsLead: "Siempre buscamos formas de perfeccionar TempoEmails. Si tiene sugerencias, dudas o necesita soporte, consulte nuestra",
    contactPageLink: "página de Contacto",
  },
  pt: {
    lead: "Você não deveria ter que entregar seu endereço de email pessoal apenas para ler um artigo, testar um novo app, baixar um arquivo ou resgatar um desconto.",
    story: "Criamos o TempoEmails porque sua caixa de entrada principal merece total proteção. Compartilhar seu email pessoal em qualquer formulário resulta em listas de spam, monitoramento constante e riscos de vazamento em brechas de segurança.",
    quote: "O TempoEmails fornece uma caixa de entrada temporária e descartável com apenas um clique. Receba seu código de validação, ative sua conta e siga em frente — com zero spam.",
    whyHeading: "Por que criamos o TempoEmails",
    whyP1: "A maioria dos serviços de email temporário é frustrante: repleta de anúncios invasivos, lentidão para carregar mensagens, domínios bloqueados em cadastros ou a obrigação de caçar um simples código de 6 dígitos em emails imensos.",
    whyP2: "Queríamos algo muito melhor: uma ferramenta limpa, ágil, com foco absoluto na privacidade e que simplesmente funcione.",
    features: [
      {
        title: "Detecção Automática de Códigos OTP",
        desc: "Chega de garimpar códigos em emails longos. O TempoEmails localiza instantaneamente códigos de 4 a 8 dígitos e links de ativação, fixando-os no topo com um botão de cópia em um clique.",
      },
      {
        title: "Caixa em Tempo Real com Auto-Refresh",
        desc: "Mensagens recebidas surgem na sua tela em poucos segundos. A caixa atualiza a cada 10 segundos sem que você precise clicar em recarregar.",
      },
      {
        title: "Leitor de QR Code para Celular",
        desc: "Precisa concluir um cadastro no celular enquanto navega no computador? Escaneie o QR Code na tela para abrir ou copiar sua caixa descartável no smartphone.",
      },
      {
        title: "Conjunto de Domínios Ativos",
        desc: "Mantemos múltiplos domínios limpos em rotação contínua. Caso um site rejeite um domínio, basta clicar em 'Mudar' ou 'Personalizar' para usar outro domínio funcional.",
      },
      {
        title: "Zero Logs e Anonimato Total",
        desc: "Não rastreamos seu IP nem registramos dados pessoais. Os emails ficam temporariamente na memória e são destruídos permanentemente após a expiração.",
      },
    ],
    principlesHeading: "Nossos Princípios de Privacidade",
    principles: [
      {
        label: "Nenhum cadastro necessário",
        desc: "Nunca solicitamos seu nome real, telefone, email pessoal ou criação de senha.",
      },
      {
        label: "Descartável por concepção",
        desc: "Os emails são eliminados automaticamente assim que seu tempo de vida expira. Depois de apagados, somem para sempre.",
      },
      {
        label: "100% gratuito",
        desc: "Privacidade não deve ser um recurso pago. O TempoEmails é gratuito e sem limites de recebimento de mensagens.",
      },
      {
        label: "Perfeito para Desenvolvedores e QA",
        desc: "Excelente para testes automatizados de cadastro, recuperação de senhas e validação de notificações.",
      },
    ],
    questionsHeading: "Dúvidas ou Sugestões?",
    questionsLead: "Estamos sempre aprimorando o TempoEmails. Se você tiver sugestões, dúvidas ou precisar de ajuda, acesse nossa",
    contactPageLink: "página de Contato",
  },
  fr: {
    lead: "Vous ne devriez pas avoir à divulguer votre adresse email personnelle simplement pour lire un article, tester une application, télécharger un fichier ou profiter d'une offre.",
    story: "Nous avons conçu TempoEmails pour protéger votre véritable boîte de réception. Donner votre email principal sur chaque site web vous expose aux listes de diffusion marketing, au profilage commercial et aux fuites de données confidentielles.",
    quote: "TempoEmails met à votre disposition une boîte éphémère et jetable en un seul clic. Réceptionnez votre code de validation, confirmez votre compte et passez à autre chose — sans laisser la moindre trace de spam.",
    whyHeading: "Pourquoi nous avons créé TempoEmails",
    whyP1: "La plupart des services d'emails temporaires sont pénibles : surchargés de publicités intrusives, lents à s'actualiser, utilisant des domaines blacklistés ou vous obligeant à fouiller de longs courriels pour trouver un code à 6 chiffres.",
    whyP2: "Nous voulions proposer une expérience irréprochable : un outil épuré, ultra-rapide, respectueux de votre vie privée et d'une simplicité absolue.",
    features: [
      {
        title: "Détection automatique des codes OTP",
        desc: "Fini la recherche fastidieuse dans des courriels interminables. TempoEmails extrait automatiquement les codes à 4-8 chiffres et les liens d'activation en tête de message avec copie en un clic.",
      },
      {
        title: "Boîte en temps réel avec auto-actualisation",
        desc: "Vos courriels s'affichent instantanément en quelques secondes. L'inbox se rafraîchit automatiquement toutes les 10 secondes sans aucune action manuelle.",
      },
      {
        title: "Scanner QR Code pour mobile",
        desc: "Besoin de vous inscrire sur mobile depuis votre poste fixe ? Flashez le QR code affiché à l'écran pour récupérer ou ouvrir votre boîte temporaire sur smartphone.",
      },
      {
        title: "Pool de domaines actifs diversifiés",
        desc: "Nous maintenons une variété de noms de domaines fiables. Si un site web refuse un domaine particulier, cliquez sur 'Changer' ou 'Personnalisé' pour en choisir un autre.",
      },
      {
        title: "Zéro journalisation et anonymat complet",
        desc: "Nous ne conservons aucun journal d'activité ni empreinte personnelle. Vos messages sont traités en mémoire vive et effacés définitivement à l'expiration.",
      },
    ],
    principlesHeading: "Nos principes fondamentaux de confidentialité",
    principles: [
      {
        label: "Aucune inscription demandée",
        desc: "Nous ne vous demanderons jamais votre vrai nom, numéro de téléphone, email personnel ou mot de passe.",
      },
      {
        label: "Éphémère par nature",
        desc: "Les messages sont détruits de façon irréversible à l'issue de leur durée de vie. Une fois supprimés, ils ne peuvent plus être récupérés.",
      },
      {
        label: "100% gratuit",
        desc: "La protection de la vie privée ne doit pas être payante. TempoEmails est entièrement libre d'accès sans quota sur les messages reçus.",
      },
      {
        label: "Conçu pour développeurs et testeurs QA",
        desc: "Idéal pour vérifier des tunnels d'inscription, des flux de réinitialisation de mot de passe et des notifications d'API.",
      },
    ],
    questionsHeading: "Questions ou remarques ?",
    questionsLead: "Nous sommes constamment à l'écoute de vos retours pour perfectionner TempoEmails. Si vous avez des questions ou souhaitez nous contacter, consultez notre",
    contactPageLink: "page Contact",
  },
  de: {
    lead: "Sie sollten niemals Ihre persönliche E-Mail-Adresse preisgeben müssen, nur um einen Artikel zu lesen, eine App zu testen oder eine Datei herunterzuladen.",
    story: "Wir haben TempoEmails entwickelt, weil Ihr primäres Postfach optimalen Schutz verdient. Wer seine echte E-Mail überall angibt, landet auf dubiosen Marketinglisten, wird quer durchs Netz verfolgt und riskiert Datenlecks.",
    quote: "TempoEmails bietet Ihnen mit nur einem Klick ein sofort einsatzbereites Wegwerf-Postfach. Bestätigungscode empfangen, Konto aktivieren und fertig — ganz ohne Spam-Nachwirkungen.",
    whyHeading: "Warum wir TempoEmails ins Leben gerufen haben",
    whyP1: "Klassische Wegwerf-E-Mail-Dienste sind oft frustrierend: überladen mit aufdringlicher Werbung, quälend langsam beim Empfang, mit gesperrten Domains oder unübersichtlichen E-Mail-Vorlagen, in denen man ewig nach Bestätigungscodes sucht.",
    whyP2: "Wir wollten eine echte Alternative schaffen: ein sauberes, blitzschnelles und datenschutzorientiertes Tool, das reibungslos funktioniert.",
    features: [
      {
        title: "Automatische OTP-Code-Erkennung",
        desc: "Kein mühsames Durchsuchen langer Werbe-Mails mehr: TempoEmails filtert 4- bis 8-stellige Verifizierungscodes und Aktivierungslinks automatisch heraus und platziert sie mit Ein-Klick-Kopierbutton ganz oben.",
      },
      {
        title: "Echtzeit-Postfach mit automatischer Aktualisierung",
        desc: "Eingehende E-Mails treffen innerhalb von Sekunden ein. Der Posteingang aktualisiert sich alle 10 Sekunden vollautomatisch ohne manuelles Neuladen.",
      },
      {
        title: "Mobiler QR-Code-Scanner",
        desc: "Sie möchten sich am Smartphone registrieren, während Sie am Computer arbeiten? Scannen Sie einfach den QR-Code, um das Postfach sofort mobil zu öffnen.",
      },
      {
        title: "Vielfältiger Pool aktiver Domains",
        desc: "Wir pflegen mehrere vertrauenswürdige Domainnamen. Blockiert ein Anbieter eine bestimmte Domain, wechseln Sie mit 'Ändern' oder 'Benutzerdefiniert' sekundenschnell zu einer alternativen Domain.",
      },
      {
        title: "Keine Protokollierung & maximale Anonymität",
        desc: "Wir erfassen keine Identitätsdaten und kein Nutzerverhalten. Alle Nachrichten verbleiben ausschließlich im flüchtigen Speicher und werden nach Ablauf unwiderruflich gelöscht.",
      },
    ],
    principlesHeading: "Unsere Datenschutz-Grundsätze",
    principles: [
      {
        label: "Keine Registrierung erforderlich",
        desc: "Wir verlangen niemals Ihren Namen, Ihre Handynummer, private E-Mail-Adresse oder Passwörter.",
      },
      {
        label: "Konsequent temporär konzipiert",
        desc: "Nachrichten werden nach Ablauf der Lebensdauer automatisch restlos entfernt. Gelöscht bedeutet für immer gelöscht.",
      },
      {
        label: "100% kostenlos",
        desc: "Datenschutz ist ein Grundrecht und kein Luxusgut. TempoEmails steht Ihnen ohne Einschränkung bei der E-Mail-Anzahl gratis zur Verfügung.",
      },
      {
        label: "Hervorragend für Entwickler und QA",
        desc: "Optimal zum Testen von Registrierungsabläufen, Passwort-Rücksetzungen und automatisierten Benachrichtigungen.",
      },
    ],
    questionsHeading: "Fragen oder Anregungen?",
    questionsLead: "Wir arbeiten kontinuierlich an Verbesserungen für TempoEmails. Bei Anmerkungen, Feedback oder Fragen besuchen Sie unsere",
    contactPageLink: "Kontaktseite",
  },
  ja: {
    lead: "単に記事を読んだり、新しいアプリを試したり、ファイルをダウンロードするために、大切な個人用メールアドレスを差し出す必要はありません。",
    story: "私たちは本物の受信トレイを守るために TempoEmails を開発しました。あらゆるウェブサイトに普段のアドレスを登録すると、迷惑メールリストに登録され、ネット上で行動を追跡され、情報漏洩に巻き込まれるリスクが高まります。",
    quote: "TempoEmails はワンクリックで高速な使い捨てメールボックスを提供します。認証コードを受け取り、アカウントを有効化したらそのまま離脱 — 迷惑メールは一切残りません。",
    whyHeading: "TempoEmails を開発した理由",
    whyP1: "多くの使い捨てメールサイトは使いづらくストレスがたまります。過剰な広告に覆われ、更新が極端に遅く、登録フォームで拒否されるブロック済みドメインが使われていたり、メール内を探し回らないと6桁のコードが見つかりません。",
    whyP2: "私たちはもっと優れた体験を求めました。清潔で高速、プライバシー第一で確実に動作するツールです。",
    features: [
      {
        title: "認証コード（OTP）の自動検出",
        desc: "長いプロモーションメールからコードを探し出す手間はありません。4〜8桁のOTPコードと有効化リンクを自動検出し、最上部にワンクリックコピーボタン付きで固定表示します。",
      },
      {
        title: "リアルタイム自動更新インボックス",
        desc: "届いたメールは数秒で画面に反映されます。10秒ごとに自動更新されるため、何度も再読み込みボタンを押す必要はありません。",
      },
      {
        title: "モバイル用 QR コードリーダー連携",
        desc: "パソコンを見ながらスマホ側で新規登録したい場合も、画面上のQRコードを読み取るだけでモバイル端末から瞬時にメールボックスを利用できます。",
      },
      {
        title: "ローテーション稼働する有効ドメインプール",
        desc: "到達率の高い複数のドメインを運用しています。特定のサイトでドメインが弾かれた場合は、「変更」または「カスタム」ですぐに別のアドレスへ切り替え可能です。",
      },
      {
        title: "ログ完全不保持・完全匿名性",
        desc: "個人情報や利用状況を記録することは一切ありません。受信メッセージは揮発性メモリに一時保管され、セッション終了後に完全消去されます。",
      },
    ],
    principlesHeading: "プライバシーに関する私たちの信条",
    principles: [
      {
        label: "会員登録は一切不要",
        desc: "本名、電話番号、個人メールアドレス、パスワードの入力を求めることはありません。",
      },
      {
        label: "設計段階からの完全使い捨て",
        desc: "設定された有効期限が切れるとメッセージは自動的に消去され、復元することは不可能です。",
      },
      {
        label: "完全無料",
        desc: "プライバシーは有料の特権であってはなりません。TempoEmails は受信通数の上限なしで完全無料でご利用いただけます。",
      },
      {
        label: "開発者やQAテストにも最適",
        desc: "サインアップ処理、パスワード再発行、自動通知パイプラインの動作検証に最適です。",
      },
    ],
    questionsHeading: "ご質問・フィードバック",
    questionsLead: "私たちは常に TempoEmails の改善に取り組んでいます。機能のご要望、ご質問、サポートが必要な場合は、こちらの",
    contactPageLink: "お問い合わせページ",
  },
  ar: {
    lead: "لا يجب أن تضطر إلى تقديم عنوان بريدك الشخصي فقط لقراءة مقال، أو تجربة تطبيق جديد، أو تنزيل ملف، أو الاستفادة من خصم مؤقت.",
    story: "لقد بنينا TempoEmails لأن صندوق بريدك الحقيقي يستحق الحماية الكاملة. إن مشاركة بريدك الأساسي مع كل موقع تقابله يعرضك لرسائل مزعجة لا تنتهي، وتتبع نشاطك، وخطر تسريب بياناتك.",
    quote: "يمنحك TempoEmails صندوق بريد مؤقت وسريع بنقرة زر واحدة. استلم رمز التحقق، وفعّل حسابك، وانتقل إلى عملك — دون أن تترك وراءك أي رسائل مزعجة.",
    whyHeading: "لماذا قمنا بإنشاء TempoEmails؟",
    whyP1: "معظم مواقع البريد المؤقت على الإنترنت محبطة في الاستخدام: مليئة بالإعلانات المزعجة، وبطيئة في التحديث، وتستخدم نطاقات محظورة ترفضها نماذج التسجيل، أو تجبرك على التمرير داخل رسائل طويلة للبحث عن رمز من 6 أرقام.",
    whyP2: "أردنا تقديم حل أفضل بكثير: أداة نظيفة، وفائقة السرعة، وتضع الخصوصية أولاً وتعمل بكفاءة تامة.",
    features: [
      {
        title: "استخراج تلقائي لرموز التحقق (OTP)",
        desc: "لا داعي للبحث داخل الرسائل الطويلة. يتعرف TempoEmails تلقائياً على رموز التحقق المكونة من 4 إلى 8 أرقام وروابط التفعيل، ويثبتها في الأعلى مع زر نسخ فوري.",
      },
      {
        title: "صندوق بريد مباشر يتحدث تلقائياً",
        desc: "تصل الرسائل الواردة إلى متصفحك في غضون ثوانٍ. يتم تحديث الصندوق تلقائياً كل 10 ثوانٍ دون الحاجة للنقر المتكرر على زر التحديث.",
      },
      {
        title: "رمز QR للمسح عبر الهاتف المحمول",
        desc: "هل تحتاج إلى التسجيل عبر هاتفك أثناء التصفح من جهاز الكمبيوتر؟ امسح رمز QR المعروض على شاشتك لفتح بريدك المؤقت على الهاتف فوراً.",
      },
      {
        title: "مجموعة نطاقات نشطة وموثوقة",
        desc: "نحافظ على نطاقات متعددة عالية التسليم. إذا قام موقع معين بحظر نطاق ما، ما عليك سوى النقر على 'تغيير' أو 'مخصص' للتبديل إلى نطاق نشط آخر.",
      },
      {
        title: "انعدام السجلات والسرية التامة",
        desc: "نحن لا نسجل هويتك الشخصية ولا نتتبع نشاطك على الإطلاق. تبقى رسائلك مؤقتاً في الذاكرة وتُحذف نهائياً بمجرد انتهاء جلستك.",
      },
    ],
    principlesHeading: "مبادئ الخصوصية لدينا",
    principles: [
      {
        label: "لا يتطلب أي تسجيل",
        desc: "لن نطلب منك أبداً اسمك الحقيقي، أو رقم هاتفك، أو بريدك الشخصي، أو إنشاء كلمة مرور.",
      },
      {
        label: "مؤقت بطبيعته وتصميمه",
        desc: "تُحذف الرسائل تلقائياً بعد انقضاء مدتها المحددة. وبمجرد حذفها، تختفي إلى الأبد ولا يمكن استرجاعها.",
      },
      {
        label: "مجاني 100%",
        desc: "الخصوصية حق أصيل وليست امتيازاً مدفوعاً. TempoEmails مجاني تماماً دون أي قيود على عدد الرسائل التي تستقبلها.",
      },
      {
        label: "مثالي للمطورين وفرق اختبار الجودة",
        desc: "أداة ممتازة لاختبار تدفقات التسجيل، وإعادة تعيين كلمات المرور، واختبار الإشعارات الآلية.",
      },
    ],
    questionsHeading: "أسئلة أو استفسارات؟",
    questionsLead: "نحن نسعى دائماً لتحسين TempoEmails وتطويره. إذا كان لديك أي اقتراحات أو استفسارات أو تحتاج إلى مساعدة، تفضل بزيارة",
    contactPageLink: "صفحة التواصل معنا",
  },
  id: {
    lead: "Anda tidak seharusnya menyerahkan alamat email pribadi hanya untuk membaca artikel, mencoba aplikasi baru, mengunduh file, atau menikmati promo diskon.",
    story: "Kami menciptakan TempoEmails karena kotak masuk utama Anda berhak mendapatkan perlindungan sejati. Membagikan email utama di setiap situs daring membuat Anda terjerat daftar spam, pelacakan iklan, dan ancaman kebocoran data.",
    quote: "TempoEmails memberi Anda kotak masuk sementara sekali pakai hanya dalam satu klik. Dapatkan kode verifikasi, aktifkan akun Anda, dan lanjutkan aktivitas — bebas dari timbunan spam.",
    whyHeading: "Mengapa Kami Membangun TempoEmails",
    whyP1: "Sebagian besar situs email sementara sangat menyebalkan: dipenuhi iklan yang mengganggu, pembaruan pesan yang lelet, memakai domain yang sudah diblokir, atau memaksa Anda mencari kode 6 digit di dalam template email yang ruwet.",
    whyP2: "Kami ingin sesuatu yang jauh lebih unggul: layanan yang bersih, super cepat, mengutamakan privasi, dan bekerja tanpa kendala.",
    features: [
      {
        title: "Deteksi Otomatis Kode OTP",
        desc: "Tidak perlu lagi menyusuri pesan promosi yang panjang. TempoEmails secara pintar mendeteksi kode OTP 4-8 digit dan tautan aktivasi, menyematkannya di bagian atas dengan tombol salin instan.",
      },
      {
        title: "Kotak Masuk Waktu Nyata Auto-Refresh",
        desc: "Email yang masuk akan muncul di layar peramban Anda dalam hitungan detik. Kotak masuk diperbarui otomatis setiap 10 detik tanpa perlu memuat ulang secara manual.",
      },
      {
        title: "Pemindai QR Code Ponsel",
        desc: "Perlu mendaftar lewat ponsel saat membuka laptop? Pindai kode QR di layar untuk membuka atau menyalin kotak masuk aktif Anda di smartphone seketika.",
      },
      {
        title: "Kumpulan Domain Aktif Berkualitas",
        desc: "Kami menjaga rotasi beberapa nama domain bereputasi baik. Jika suatu situs menolak domain tertentu, cukup klik 'Ganti' atau 'Kustom' untuk beralih ke domain aktif lainnya.",
      },
      {
        title: "Nol Log & Anonimitas Total",
        desc: "Kami tidak mencatat identitas pribadi maupun rekam jejak aktivitas Anda. Pesan hanya disimpan sementara di memori dan dihapus tuntas begitu sesi berakhir.",
      },
    ],
    principlesHeading: "Prinsip Privasi Kami",
    principles: [
      {
        label: "Tanpa Registrasi Akun",
        desc: "Kami tidak pernah meminta nama asli, nomor telepon, alamat email pribadi, atau kata sandi Anda.",
      },
      {
        label: "Sementara Sejak Awal",
        desc: "Pesan dihapus otomatis begitu masa aktifnya berakhir. Setelah terhapus, data hilang permanen dan tak dapat dipulihkan.",
      },
      {
        label: "100% Gratis",
        desc: "Privasi adalah hak dasar, bukan kemewahan berbayar. TempoEmails sepenuhnya gratis tanpa batasan jumlah email yang diterima.",
      },
      {
        label: "Sangat Cocok untuk Pengembang & QA",
        desc: "Sempurna untuk pengujian alur pendaftaran, reset sandi, dan validasi notifikasi otomatis pada sistem perangkat lunak.",
      },
    ],
    questionsHeading: "Ada Pertanyaan atau Masukan?",
    questionsLead: "Kami selalu berusaha menyempurnakan TempoEmails. Jika Anda memiliki saran fitur, pertanyaan, atau butuh bantuan, silakan kunjungi",
    contactPageLink: "halaman Kontak",
  },
};

export const CONTACT_PAGE_CONTENT: Record<Locale, ContactPageData> = {
  en: {
    lead: "Have a question about TempoEmails, spotted a bug, or want to suggest a feature? Pick the channel below that best fits your needs, and we'll get back to you.",
    responseTime: "Response time: We check incoming messages daily and typically respond within 24 to 48 hours (Monday–Friday, UTC).",
    channelsHeading: "Direct Contact Channels",
    channelsSub: "Choose the right email for faster assistance:",
    channels: [
      {
        title: "Technical Support & Bugs",
        desc: "Report inbox delivery issues, UI rendering glitches, or unexpected connectivity errors.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copy",
      },
      {
        title: "General Inquiries",
        desc: "Questions about our temporary email features, user feedback, and general questions.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copy",
      },
      {
        title: "Business & Partnerships",
        desc: "Advertising inquiries, domain integrations, commercial licensing, and developer API requests.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copy",
      },
      {
        title: "Abuse & Legal Reports",
        desc: "Report terms violations, spam originators, phishing attempts, or DMCA compliance notices.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copy",
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqSub: "You might find quick answers to your questions below:",
    faqs: [
      {
        q: "Why didn't my verification email or OTP arrive?",
        a: "Most verification messages arrive in your TempoEmails inbox within 2 to 5 seconds. If you haven't received an expected message:",
        list: [
          "Some services introduce a 1–2 minute sending delay before sending confirmation codes.",
          "Certain websites block specific disposable email domains. Click 'Change' or 'Custom' on the homepage to switch to a different domain.",
          "Double-check that the address was copied and pasted correctly into the signup form.",
        ],
      },
      {
        q: "Can I send emails from TempoEmails?",
        a: "No. TempoEmails is receive-only. Blocking outbound mail ensures our domains stay off spam blocklists so your verification emails arrive without issues.",
      },
      {
        q: "Can I recover a deleted or expired temporary mailbox?",
        a: "No. Under our strict zero-retention privacy policy, once an inbox is deleted or expires, all message contents are permanently purged. We do not keep backups or archives.",
      },
      {
        q: "How do I report abuse, phishing, or send a DMCA notice?",
        a: `Please email ${SITE_CONFIG.emails.abuse} with message headers, URLs, and details for quick resolution.`,
      },
    ],
    resourcesHeading: "Helpful Guides & Educational Resources",
    resourcesSub: "Learn more about how disposable emails operate, how OTP extraction works, and best practices for online privacy:",
    resources: [
      {
        badge: "Guide",
        title: "Understanding OTP Verification Codes",
        desc: "How automated OTP parsers detect 4-8 digit verification tokens.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Architecture",
        title: "How Temporary Email Works",
        desc: "Under the hood of MX records, inboxes, and automatic purging.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privacy",
        title: "How Disposable Email Protects Privacy",
        desc: "Preventing data harvesting, cross-site profiling, and spam traps.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Security",
        title: "Email Privacy Best Practices",
        desc: "Actionable steps to safeguard your primary email address.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Tips for Submitting Bug Reports",
    bugReportIntro: `When sending technical bug reports to ${SITE_CONFIG.emails.support}, including the following details helps our engineering team diagnose issues quickly:`,
    bugReportPoints: [
      "Your browser name and version (e.g., Chrome 132, Firefox 135, Safari iOS).",
      "Your operating system (e.g., macOS Sonoma, Windows 11, Ubuntu 24.04, Android 15).",
      `The specific disposable domain you were using (e.g., @${SITE_CONFIG.domain}).`,
      "A brief summary of what occurred versus what was expected.",
      "Security Notice: Never include passwords, recovery keys, or sensitive personal data in your email.",
    ],
    legalHeading: "Legal and Policy Inquiries",
    legalIntro: "For regulatory compliance, privacy policies, and terms of service documentation:",
    legalLinks: [
      {
        label: "Privacy Policy",
        desc: "Data handling, cookies, and user rights.",
        slug: "/privacy-policy/",
      },
      {
        label: "Terms of Service",
        desc: "Terms of use and acceptable activity.",
        slug: "/terms-of-service/",
      },
      {
        label: "Disclaimer",
        desc: "Service limitations and warranties.",
        slug: "/disclaimer/",
      },
    ],
  },
  es: {
    lead: "¿Tiene alguna duda sobre TempoEmails, encontró un error o desea sugerir una función? Elija el canal a continuación y nos pondremos en contacto.",
    responseTime: "Tiempo de respuesta: Revisamos los mensajes a diario y solemos responder en 24 a 48 horas (lunes a viernes, UTC).",
    channelsHeading: "Canales de contacto directo",
    channelsSub: "Seleccione el correo correspondiente para una atención más rápida:",
    channels: [
      {
        title: "Soporte técnico y errores",
        desc: "Reporte problemas de entrega en buzón, fallos visuales de interfaz o errores de conexión inesperados.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copiar",
      },
      {
        title: "Consultas generales",
        desc: "Preguntas sobre nuestras funciones de correo temporal, comentarios de usuarios y dudas generales.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copiar",
      },
      {
        title: "Negocios y alianzas",
        desc: "Consultas publicitarias, integraciones de dominios, licencias comerciales y acceso a API.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copiar",
      },
      {
        title: "Reportes de abuso y legal",
        desc: "Reporte infracciones a los términos, spam, intentos de phishing o notificaciones DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copiar",
      },
    ],
    faqHeading: "Preguntas frecuentes",
    faqSub: "Quizás encuentre respuestas rápidas a sus dudas a continuación:",
    faqs: [
      {
        q: "¿Por qué no llegó mi correo de verificación o código OTP?",
        a: "La mayoría de los mensajes de verificación llegan a TempoEmails en 2 a 5 segundos. Si tarda en llegar:",
        list: [
          "Algunos servicios aplican un retraso voluntario de 1 a 2 minutos antes de emitir códigos.",
          "Ciertas webs bloquean dominios desechables. Haga clic en 'Cambiar' o 'Personalizado' en la portada para alternar de dominio.",
          "Verifique haber copiado y pegado la dirección de correo con exactitud en el formulario.",
        ],
      },
      {
        q: "¿Puedo enviar correos salientes desde TempoEmails?",
        a: "No. TempoEmails es exclusivamente de recepción. Bloquear envíos salientes evita el spam y garantiza que nuestros dominios nunca caigan en listas negras.",
      },
      {
        q: "¿Puedo recuperar una bandeja temporal eliminada o expirada?",
        a: "No. Bajo nuestra estricta política de retención cero, una vez eliminado o expirado el buzón, todos los mensajes se destruyen de memoria sin copias de seguridad.",
      },
      {
        q: "¿Cómo reporto abusos, phishing o envío avisos DMCA?",
        a: `Escriba a nuestro equipo en ${SITE_CONFIG.emails.abuse} con encabezados de mensajes, URLs y detalles relevantes para una acción inmediata.`,
      },
    ],
    resourcesHeading: "Guías útiles y recursos educativos",
    resourcesSub: "Conozca cómo operan los correos desechables, cómo se extraen los códigos OTP y consejos de privacidad:",
    resources: [
      {
        badge: "Guía",
        title: "Entendiendo los códigos OTP",
        desc: "Cómo los analizadores automáticos detectan códigos de verificación de 4 a 8 dígitos.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Arquitectura",
        title: "Cómo funciona el correo temporal",
        desc: "Detrás de escena: registros MX, buzones dinámicos y destrucción de datos.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privacidad",
        title: "Cómo el correo desechable defiende su privacidad",
        desc: "Evitando el rastreo de perfiles y los riesgos de filtración masiva.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Seguridad",
        title: "Mejores prácticas de privacidad en email",
        desc: "Pasos prácticos para salvaguardar su buzón principal de correo.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Consejos para reportar errores",
    bugReportIntro: `Al enviar reportes técnicos a ${SITE_CONFIG.emails.support}, incluir estos datos agiliza el diagnóstico de nuestros ingenieros:`,
    bugReportPoints: [
      "Nombre y versión de su navegador (ej. Chrome 132, Firefox 135, Safari iOS).",
      "Sistema operativo (ej. macOS Sonoma, Windows 11, Ubuntu 24.04, Android 15).",
      `El dominio temporal exacto que estaba utilizando (ej. @${SITE_CONFIG.domain}).`,
      "Un resumen claro de lo ocurrido frente a lo que esperaba que sucediera.",
      "Aviso de seguridad: Jamás incluya contraseñas ni datos sensibles en su correo.",
    ],
    legalHeading: "Documentación legal y políticas",
    legalIntro: "Para cumplimiento normativo, política de privacidad y condiciones de uso:",
    legalLinks: [
      {
        label: "Política de Privacidad",
        desc: "Tratamiento de datos, cookies y derechos de los usuarios.",
        slug: "/privacy-policy/",
      },
      {
        label: "Términos de Servicio",
        desc: "Condiciones de uso y actividades permitidas.",
        slug: "/terms-of-service/",
      },
      {
        label: "Descargo de Responsabilidad",
        desc: "Limitaciones del servicio y garantías.",
        slug: "/disclaimer/",
      },
    ],
  },
  pt: {
    lead: "Tem alguma dúvida sobre o TempoEmails, encontrou um bug ou quer sugerir uma novidade? Escolha o canal abaixo e responderemos prontamente.",
    responseTime: "Tempo de resposta: Verificamos mensagens diariamente e respondemos entre 24 e 48 horas úteis (segunda a sexta, UTC).",
    channelsHeading: "Canais Diretos de Contato",
    channelsSub: "Selecione o canal adequado para um atendimento mais ágil:",
    channels: [
      {
        title: "Suporte Técnico & Bugs",
        desc: "Relate problemas no recebimento de mensagens, falhas de interface ou erros de conexão.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copiar",
      },
      {
        title: "Dúvidas Gerais",
        desc: "Perguntas sobre o funcionamento do email temporário, feedbacks e sugestões.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copiar",
      },
      {
        title: "Parcerias & Comercial",
        desc: "Propostas publicitárias, integração de domínios, licenças comerciais e acesso a API.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copiar",
      },
      {
        title: "Abuso & Jurídico",
        desc: "Comunique violações de termos, spammers, phishing ou avisos DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copiar",
      },
    ],
    faqHeading: "Perguntas Frequentes",
    faqSub: "Encontre respostas rápidas para as dúvidas mais comuns:",
    faqs: [
      {
        q: "Por que meu email de verificação ou OTP não chegou?",
        a: "A maioria das mensagens chega ao TempoEmails em 2 a 5 segundos. Caso atrase:",
        list: [
          "Alguns serviços aplicam filas com delay de 1 a 2 minutos para despachar códigos.",
          "Certas plataformas bloqueiam domínios temporários. Clique em 'Mudar' ou 'Personalizar' na tela inicial para testar outro domínio.",
          "Certifique-se de que o endereço foi colado de forma idêntica no formulário de cadastro.",
        ],
      },
      {
        q: "Posso enviar emails a partir do TempoEmails?",
        a: "Não. O TempoEmails é estritamente para recebimento. O bloqueio de envios garante que nossos domínios fiquem sempre fora de listas de spam.",
      },
      {
        q: "É possível recuperar uma caixa temporária excluída?",
        a: "Não. Com nossa política de zero retenção, mensagens excluídas ou expiradas são destruídas da memória de modo definitivo sem qualquer backup.",
      },
      {
        q: "Como denunciar abusos, phishing ou enviar avisos DMCA?",
        a: `Escreva para ${SITE_CONFIG.emails.abuse} informando cabeçalhos, URLs e detalhes para resolução imediata.`,
      },
    ],
    resourcesHeading: "Guias Educativos & Recursos Úteis",
    resourcesSub: "Descubra como operam os emails descartáveis, a captura de OTPs e boas práticas de segurança:",
    resources: [
      {
        badge: "Guia",
        title: "Entendendo os Códigos OTP",
        desc: "Como identificadores automáticos capturam tokens de 4 a 8 dígitos.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Arquitetura",
        title: "Como Funciona o Email Temporário",
        desc: "Por dentro dos registros MX, caixas voláteis e purga automática.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privacidade",
        title: "Como o Email Descartável Protege Seus Dados",
        desc: "Blindagem contra rastreadores digitais e vazamento de contas.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Segurança",
        title: "Boas Práticas de Privacidade no Email",
        desc: "Passos essenciais para proteger seu endereço de email principal.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Dicas para Enviar Relatórios de Bugs",
    bugReportIntro: `Ao enviar relatos de erros para ${SITE_CONFIG.emails.support}, inclua estes detalhes para agilizar a análise:`,
    bugReportPoints: [
      "Navegador utilizado e sua versão (ex.: Chrome 132, Firefox 135, Safari iOS).",
      "Sistema operacional (ex.: macOS Sonoma, Windows 11, Ubuntu 24.04, Android 15).",
      `O domínio temporário específico que estava em uso (ex.: @${SITE_CONFIG.domain}).`,
      "Descrição resumida do que aconteceu em comparação ao esperado.",
      "Aviso de Segurança: Nunca envie senhas ou dados sigilosos por email.",
    ],
    legalHeading: "Documentação Jurídica & Políticas",
    legalIntro: "Para conformidade, políticas de privacidade e termos de uso:",
    legalLinks: [
      {
        label: "Política de Privacidade",
        desc: "Tratamento de dados, cookies e direitos do usuário.",
        slug: "/privacy-policy/",
      },
      {
        label: "Termos de Serviço",
        desc: "Termos de uso e diretrizes de atividades aceitáveis.",
        slug: "/terms-of-service/",
      },
      {
        label: "Aviso Legal (Disclaimer)",
        desc: "Limitações de responsabilidade e garantias do serviço.",
        slug: "/disclaimer/",
      },
    ],
  },
  fr: {
    lead: "Une question sur TempoEmails, un bug à signaler ou une fonctionnalité à suggérer ? Choisissez le canal adapté et notre équipe vous répondra au plus vite.",
    responseTime: "Délai de réponse : Nous traitons les demandes chaque jour et répondons sous 24 à 48 heures (du lundi au vendredi, UTC).",
    channelsHeading: "Canaux de contact direct",
    channelsSub: "Sélectionnez l'adresse appropriée pour un traitement accéléré :",
    channels: [
      {
        title: "Support technique & Bugs",
        desc: "Signalez les soucis de réception, les anomalies d'affichage ou les erreurs de connexion.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copier",
      },
      {
        title: "Renseignements généraux",
        desc: "Questions sur le fonctionnement de nos boîtes éphémères, retours d'expérience et remarques.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copier",
      },
      {
        title: "Partenariats & Professionnels",
        desc: "Demandes publicitaires, intégration de domaines, licences commerciales et API développeur.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copier",
      },
      {
        title: "Abus & Affaires juridiques",
        desc: "Signalez les manquements aux conditions d'utilisation, le spam, les fraudes ou les avis DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copier",
      },
    ],
    faqHeading: "Foire aux questions",
    faqSub: "Vous trouverez sans doute ici la réponse à vos interrogations :",
    faqs: [
      {
        q: "Pourquoi mon code de confirmation ou email OTP n'arrive-t-il pas ?",
        a: "La majorité des courriels s'affichent en 2 à 5 secondes. En cas de retard :",
        list: [
          "Certains services imposent un délai d'envoi de 1 à 2 minutes avant d'expédier un code.",
          "Des sites bloquent certains domaines éphémères. Cliquez sur 'Changer' ou 'Personnalisé' pour utiliser un autre domaine.",
          "Vérifiez que l'adresse a été copiée et collée sans espace ni faute de frappe.",
        ],
      },
      {
        q: "Puis-je envoyer des emails depuis TempoEmails ?",
        a: "Non. TempoEmails fonctionne exclusivement en réception pour préserver la réputation de nos serveurs contre tout spam sortant.",
      },
      {
        q: "Puis-je restaurer une boîte temporaire supprimée ou expirée ?",
        a: "Non. Conformément à notre politique stricte de zéro rétention, dès qu'une boîte expire, l'ensemble des données est définitivement effacé de la mémoire.",
      },
      {
        q: "Comment signaler un abus ou envoyer une notification DMCA ?",
        a: `Envoyez un courriel à ${SITE_CONFIG.emails.abuse} avec les en-têtes et les détails pour une intervention immédiate.`,
      },
    ],
    resourcesHeading: "Guides pratiques & Documentation",
    resourcesSub: "Approfondissez le fonctionnement des emails jetables, la détection des OTP et les conseils de sécurité :",
    resources: [
      {
        badge: "Guide",
        title: "Comprendre les codes de vérification OTP",
        desc: "Comment les algorithmes détectent automatiquement les jetons de 4 à 8 chiffres.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Architecture",
        title: "Fonctionnement technique de l'email temporaire",
        desc: "Plongée dans les enregistrements MX, les flux de données et la purge sans log.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Confidentialité",
        title: "Protéger sa vie privée avec un email jetable",
        desc: "Faites barrage à l'exploitation commerciale de vos données personnelles.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Sécurité",
        title: "Bonnes pratiques pour la sécurité de vos emails",
        desc: "Conseils opérationnels pour préserver votre boîte mail principale.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Recommandations pour vos signalements de bugs",
    bugReportIntro: `Lors de l'envoi d'un rapport technique à ${SITE_CONFIG.emails.support}, merci d'inclure ces précisions :`,
    bugReportPoints: [
      "Nom et numéro de version de votre navigateur (ex. Chrome 132, Firefox 135, Safari iOS).",
      "Système d'exploitation (ex. macOS Sonoma, Windows 11, Ubuntu 24.04, Android 15).",
      `Le nom du domaine temporaire utilisé (ex. @${SITE_CONFIG.domain}).`,
      "Un résumé clair du comportement constaté comparé au résultat attendu.",
      "Consigne de sécurité : N'incluez jamais de mots de passe ni d'informations confidentielles.",
    ],
    legalHeading: "Mentions légales & Politiques",
    legalIntro: "Pour consulter nos engagements de conformité et règles d'utilisation :",
    legalLinks: [
      {
        label: "Politique de Confidentialité",
        desc: "Gestion des données, cookies et droits des utilisateurs.",
        slug: "/privacy-policy/",
      },
      {
        label: "Conditions d'Utilisation",
        desc: "Modalités d'accès et règles d'usage de la plateforme.",
        slug: "/terms-of-service/",
      },
      {
        label: "Clause de Non-Responsabilité",
        desc: "Limites de responsabilité et garanties du service.",
        slug: "/disclaimer/",
      },
    ],
  },
  de: {
    lead: "Haben Sie Fragen zu TempoEmails, einen Fehler entdeckt oder einen Funktionswunsch? Wählen Sie die passende Kontaktmöglichkeit unten aus.",
    responseTime: "Reaktionszeit: Wir prüfen Anfragen täglich und antworten gewöhnlich innerhalb von 24 bis 48 Stunden (Montag–Freitag, UTC).",
    channelsHeading: "Direkte Kontaktkanäle",
    channelsSub: "Wählen Sie die passende E-Mail-Adresse für schnellere Unterstützung:",
    channels: [
      {
        title: "Technischer Support & Fehler",
        desc: "Melden Sie Zustellprobleme, Darstellungsfehler der Benutzeroberfläche oder Verbindungsabbrüche.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Kopieren",
      },
      {
        title: "Allgemeine Anfragen",
        desc: "Fragen zu unseren Funktionen, Feedback zur Plattform und allgemeine Mitteilungen.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Kopieren",
      },
      {
        title: "Geschäftliches & Partnerschaften",
        desc: "Werbeanfragen, Domain-Integrationen, kommerzielle Lizenzen und Entwickler-APIs.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Kopieren",
      },
      {
        title: "Missbrauch & Rechtliches",
        desc: "Melden Sie Verstöße gegen die Nutzungsbedingungen, Spam, Phishing oder DMCA-Hinweise.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Kopieren",
      },
    ],
    faqHeading: "Häufig gestellte Fragen (FAQ)",
    faqSub: "Möglicherweise finden Sie hier bereits eine zügige Antwort auf Ihre Frage:",
    faqs: [
      {
        q: "Warum ist meine Bestätigungs-E-Mail oder der OTP-Code nicht angekommen?",
        a: "Die meisten E-Mails treffen innerhalb von 2 bis 5 Sekunden bei TempoEmails ein. Falls es länger dauert:",
        list: [
          "Manche Anbieter verzögern den Versand von Bestätigungscodes bewusst um 1 bis 2 Minuten.",
          "Einige Websites blockieren bestimmte Wegwerf-Domains. Nutzen Sie 'Ändern' oder 'Benutzerdefiniert', um die Domain zu wechseln.",
          "Stellen Sie sicher, dass die E-Mail-Adresse ohne Leerzeichen exakt ins Formular eingefügt wurde.",
        ],
      },
      {
        q: "Kann ich von TempoEmails aus E-Mails versenden?",
        a: "Nein. TempoEmails empfängt ausschließlich. Das Unterbinden des ausgehenden Versands schützt unsere Domains vor Spam-Blacklists.",
      },
      {
        q: "Kann ein gelöschtes oder abgelaufenes Postfach wiederhergestellt werden?",
        a: "Nein. Nach unserer strikten Null-Speicherungs-Richtlinie werden abgelaufene Postfächer und Nachrichten sofort unwiderruflich aus dem Speicher entfernt.",
      },
      {
        q: "Wie melde ich Missbrauch oder reiche eine DMCA-Beschwerde ein?",
        a: `Bitte wenden Sie sich mit E-Mail-Headern und Details direkt an ${SITE_CONFIG.emails.abuse} für eine rasche Prüfung.`,
      },
    ],
    resourcesHeading: "Hilfreiche Leitfäden & Wissen",
    resourcesSub: "Erfahren Sie mehr über die Funktionsweise temporärer E-Mails und den Schutz Ihrer Privatsphäre:",
    resources: [
      {
        badge: "Leitfaden",
        title: "OTP-Verifizierungscodes verstehen",
        desc: "Wie automatische Parser 4- bis 8-stellige Sicherheitscodes erfassen.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Architektur",
        title: "Wie temporäre E-Mails funktionieren",
        desc: "Technischer Einblick in MX-Records, flüchtige Speicher und automatische Löschung.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Datenschutz",
        title: "Privatsphäre schützen mit Wegwerf-E-Mails",
        desc: "Effektiver Schutz vor Datensammlern, Tracking und Spam-Listen.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Sicherheit",
        title: "E-Mail-Sicherheit Best Practices",
        desc: "Konkrete Schritte zur Absicherung Ihres Haupt-E-Mail-Postfachs.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Hinweise für Fehlerberichte",
    bugReportIntro: `Wenn Sie technische Fehler an ${SITE_CONFIG.emails.support} senden, helfen uns diese Angaben bei der schnellen Analyse:`,
    bugReportPoints: [
      "Browsername und Versionsnummer (z. B. Chrome 132, Firefox 135, Safari iOS).",
      "Betriebssystem (z. B. macOS Sonoma, Windows 11, Ubuntu 24.04, Android 15).",
      `Die verwendete temporäre Domain (z. B. @${SITE_CONFIG.domain}).`,
      "Kurze Zusammenfassung: Was ist passiert und was war das erwartete Verhalten?",
      "Sicherheitshinweis: Übermitteln Sie niemals Passwörter oder sensible Daten per E-Mail.",
    ],
    legalHeading: "Rechtliche Dokumentation",
    legalIntro: "Hier finden Sie unsere Nutzungsbedingungen und Datenschutzhinweise:",
    legalLinks: [
      {
        label: "Datenschutzerklärung",
        desc: "Datenverarbeitung, Cookies und Ihre Rechte.",
        slug: "/privacy-policy/",
      },
      {
        label: "Nutzungsbedingungen",
        desc: "Rechtliche Rahmenbedingungen und zulässige Nutzung.",
        slug: "/terms-of-service/",
      },
      {
        label: "Haftungsausschluss (Disclaimer)",
        desc: "Grenzen der Gewährleistung und Haftung.",
        slug: "/disclaimer/",
      },
    ],
  },
  ar: {
    lead: "هل لديك استفسار حول TempoEmails، أو واجهت مشكلة تقنية، أو ترغب في اقتراح ميزة جديدة؟ اختر القناة المناسبة أدناه وسيسعدنا الرد عليك.",
    responseTime: "وقت الرد: نراجع الرسائل الواردة يومياً ونرد عادةً في غضون 24 إلى 48 ساعة (من الإثنين إلى الجمعة، بتوقيت UTC).",
    channelsHeading: "قنوات التواصل المباشرة",
    channelsSub: "اختر البريد المناسب للحصول على مساعدة أسرع:",
    channels: [
      {
        title: "الدعم التقني والإبلاغ عن الأخطاء",
        desc: "الإبلاغ عن مشاكل وصول الرسائل، أو أخطاء واجهة المستخدم، أو تعطل الاتصال.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "نسخ",
      },
      {
        title: "الاستفسارات العامة والملاحظات",
        desc: "أسئلة حول مزايا البريد المؤقت، ومقترحات التحسين، والملاحظات العامة.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "نسخ",
      },
      {
        title: "الأعمال والشراكات",
        desc: "استفسارات الإعلانات، وتكامل النطاقات، والتراخيص التجارية، وواجهات برمجة التطبيقات (API).",
        email: SITE_CONFIG.emails.business,
        copyLabel: "نسخ",
      },
      {
        title: "إساءة الاستخدام والتقارير القانونية",
        desc: "الإبلاغ عن انتهاكات الشروط، أو الرسائل الاحتيالية، أو إشعارات DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "نسخ",
      },
    ],
    faqHeading: "الأسئلة الشائعة",
    faqSub: "قد تجد إجابة سريعة على سؤالك أدناه:",
    faqs: [
      {
        q: "لماذا لم تصل رسالة التأكيد أو رمز التحقق (OTP)؟",
        a: "تصل معظم الرسائل إلى صندوق TempoEmails في غضون 2 إلى 5 ثوانٍ. وإذا تأخرت:",
        list: [
          "تطبق بعض المواقع تأخيراً متعمداً مدته دقيقة إلى دقيقتين قبل إرسال الرموز.",
          "قد تحظر بعض المواقع نطاقات معينة. انقر على 'تغيير' أو 'مخصص' في الصفحة الرئيسية للتبديل إلى نطاق آخر.",
          "تأكد من نسخ العنوان ولصقه بدقة في نموذج التسجيل بدون مسافات إضافية.",
        ],
      },
      {
        q: "هل يمكنني إرسال رسائل من TempoEmails؟",
        a: "لا. يقتصر TempoEmails على الاستقبال فقط، وذلك لحماية نطاقاتنا من القوائم السوداء وضمان وصول رسائل التفعيل الخاصة بك بدون عوائق.",
      },
      {
        q: "هل يمكنني استعادة صندوق بريد مؤقت محذوف أو منتهي الصلاحية؟",
        a: "لا. بموجب سياستنا الصارمة لعدم الاحتفاظ بالبيانات، تُحذف جميع محتويات الرسائل نهائياً من الذاكرة دون أي نسخ احتياطية.",
      },
      {
        q: "كيف أبلغ عن إساءة استخدام أو إرسال إشعار DMCA؟",
        a: `يرجى مراسلتنا على ${SITE_CONFIG.emails.abuse} مع إرفاق الترويسات والروابط والتفاصيل لاتخاذ إجراء فوري.`,
      },
    ],
    resourcesHeading: "أدلة مفيدة ومصادر تعليمية",
    resourcesSub: "تعرف أكثر على كيفية عمل البريد المؤقت، واستخراج رموز التحقق، وأفضل ممارسات الخصوصية:",
    resources: [
      {
        badge: "دليل",
        title: "دليل فهم رموز التحقق OTP",
        desc: "كيف تلتقط أدوات التحليل الآلية الرموز من 4 إلى 8 أرقام.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "الهندسة التقنية",
        title: "كيف يعمل البريد المؤقت خلف الكواليس",
        desc: "سجلات MX، والصناديق اللحظية، والتدمير الذاتي للبيانات.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "الخصوصية",
        title: "كيف يحمي البريد المؤقت بياناتك الشخصية",
        desc: "منع التتبع الإعلاني وتقليل مخاطر اختراق البيانات.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "الأمان",
        title: "أفضل ممارسات أمان البريد الإلكتروني",
        desc: "إرشادات عملية للحفاظ على أمان بريدك الشخصي.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "نصائح لتقديم تقارير الأخطاء التقنية",
    bugReportIntro: `عند إرسال تقرير خطأ تقني إلى ${SITE_CONFIG.emails.support}، نرجو تضمين هذه التفاصيل لمساعدتنا على حل المشكلة بسرعة:`,
    bugReportPoints: [
      "اسم المتصفح وإصداره (مثل Chrome 132 أو Firefox 135 أو Safari iOS).",
      "نظام التشغيل (مثل macOS Sonoma أو Windows 11 أو Ubuntu 24.04 أو Android 15).",
      `النطاق المؤقت المستخدم تحديداً (مثل @${SITE_CONFIG.domain}).`,
      "ملخص موجز لما حدث مقارنة بما كان متوقعاً.",
      "إشعار أمني: لا ترسل أبداً كلمات المرور أو أي بيانات شخصية حساسة في رسالتك.",
    ],
    legalHeading: "الشروط والسياسات القانونية",
    legalIntro: "للاطلاع على التزامات الخصوصية والشروط والأحكام الكاملة:",
    legalLinks: [
      {
        label: "سياسة الخصوصية",
        desc: "معالجة البيانات، وملفات تعريف الارتباط، وحقوق المستخدمين.",
        slug: "/privacy-policy/",
      },
      {
        label: "شروط الخدمة",
        desc: "قواعد استخدام الخدمة والأنشطة المحظورة.",
        slug: "/terms-of-service/",
      },
      {
        label: "إخلاء المسؤولية",
        desc: "حدود الخدمة والضمانات القانونية.",
        slug: "/disclaimer/",
      },
    ],
  },
  id: {
    lead: "Punya pertanyaan tentang TempoEmails, menemukan bug, atau ingin menyarankan fitur baru? Pilih saluran di bawah ini dan kami akan segera merespons.",
    responseTime: "Waktu respons: Kami memeriksa pesan setiap hari dan biasanya membalas dalam 24 hingga 48 jam kerja (Senin–Jumat, UTC).",
    channelsHeading: "Saluran Kontak Langsung",
    channelsSub: "Pilih email yang sesuai untuk bantuan lebih cepat:",
    channels: [
      {
        title: "Dukungan Teknis & Bug",
        desc: "Laporkan masalah pengiriman inbox, gangguan tampilan antarmuka, atau galat koneksi tak terduga.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Salin",
      },
      {
        title: "Pertanyaan Umum",
        desc: "Pertanyaan seputar fitur email sementara kami, masukan pengguna, dan saran pengembangan.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Salin",
      },
      {
        title: "Bisnis & Kemitraan",
        desc: "Penawaran iklan, integrasi domain, lisensi komersial, dan permohonan API pengembang.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Salin",
      },
      {
        title: "Penyalahgunaan & Laporan Hukum",
        desc: "Laporkan pelanggaran ketentuan, penyebar spam, indikasi phishing, atau pemberitahuan DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Salin",
      },
    ],
    faqHeading: "Pertanyaan yang Sering Diajukan (FAQ)",
    faqSub: "Anda mungkin menemukan jawaban cepat untuk pertanyaan Anda di bawah ini:",
    faqs: [
      {
        q: "Mengapa email verifikasi atau kode OTP saya belum tiba?",
        a: "Sebagian besar email verifikasi sampai di kotak masuk TempoEmails dalam 2 hingga 5 detik. Jika tertunda:",
        list: [
          "Beberapa layanan sengaja menerapkan jeda 1–2 menit sebelum mengirimkan kode konfirmasi.",
          "Situs tertentu memblokir domain sementara. Klik 'Ganti' atau 'Kustom' di beranda untuk beralih ke domain lain.",
          "Pastikan alamat email telah disalin dan ditempel dengan akurat tanpa spasi tambahan.",
        ],
      },
      {
        q: "Bisakah saya mengirim email keluar dari TempoEmails?",
        a: "Tidak. TempoEmails hanya untuk menerima pesan. Mematikan fitur kirim email memastikan domain kami bebas dari daftar hitam spam.",
      },
      {
        q: "Bisakah memulihkan kotak masuk sementara yang telah dihapus?",
        a: "Tidak bisa. Berdasarkan kebijakan tanpa retensi kami, begitu kotak masuk kedaluwarsa atau dihapus, semua isi pesan dimusnahkan permanen dari memori.",
      },
      {
        q: "Bagaimana cara melaporkan penyalahgunaan atau mengirim surat DMCA?",
        a: `Silakan hubungi tim kepatuhan kami di ${SITE_CONFIG.emails.abuse} beserta header pesan, tautan terkait, dan rincian masalah.`,
      },
    ],
    resourcesHeading: "Panduan Bermanfaat & Sumber Belajar",
    resourcesSub: "Pelajari lebih lanjut tentang cara kerja email sekali pakai, ekstraksi OTP, dan kiat menjaga privasi online:",
    resources: [
      {
        badge: "Panduan",
        title: "Memahami Kode Verifikasi OTP",
        desc: "Cara parser otomatis mendeteksi kode verifikasi 4-8 digit.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Arsitektur",
        title: "Cara Kerja Email Sementara",
        desc: "Di balik layar perutean MX record, kotak masuk cepat, dan pembersihan otomatis.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privasi",
        title: "Bagaimana Email Sementara Melindungi Privasi Anda",
        desc: "Mencegah pelacakan data lintas situs dan bahaya kebocoran sandi.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Keamanan",
        title: "Praktik Privasi Email Terbaik",
        desc: "Langkah nyata menjaga kotak masuk email utama Anda tetap aman.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Tips Mengirim Laporan Bug",
    bugReportIntro: `Saat mengirimkan laporan teknis ke ${SITE_CONFIG.emails.support}, menyertakan detail berikut akan mempercepat analisis tim kami:`,
    bugReportPoints: [
      "Nama dan versi peramban Anda (misalnya Chrome 132, Firefox 135, Safari iOS).",
      "Sistem operasi yang digunakan (misalnya macOS Sonoma, Windows 11, Ubuntu 24.04, Android 15).",
      `Domain sementara spesifik yang sedang dipakai (misalnya @${SITE_CONFIG.domain}).`,
      "Ulasan singkat mengenai apa yang terjadi dibandingkan apa yang diharapkan.",
      "Pemberitahuan Keamanan: Jangan pernah mencantumkan kata sandi atau data pribadi sensitif dalam email.",
    ],
    legalHeading: "Dokumentasi Hukum & Kebijakan",
    legalIntro: "Untuk kepatuhan hukum, kebijakan privasi, dan ketentuan layanan:",
    legalLinks: [
      {
        label: "Kebijakan Privasi",
        desc: "Pengelolaan data, cookies, dan hak pengguna.",
        slug: "/privacy-policy/",
      },
      {
        label: "Ketentuan Layanan",
        desc: "Ketentuan pemakaian dan batasan aktivitas.",
        slug: "/terms-of-service/",
      },
      {
        label: "Penyangkalan (Disclaimer)",
        desc: "Batasan layanan dan klausul jaminan.",
        slug: "/disclaimer/",
      },
    ],
  },
};

export function getAboutPageData(locale: Locale): AboutPageData {
  return ABOUT_PAGE_CONTENT[locale] || ABOUT_PAGE_CONTENT.en;
}

export function getContactPageData(locale: Locale): ContactPageData {
  return CONTACT_PAGE_CONTENT[locale] || CONTACT_PAGE_CONTENT.en;
}
