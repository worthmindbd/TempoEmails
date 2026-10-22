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
    story: "Every signup puts your address on another marketing list, and every company that stores it is one more place it can leak from. TempoEmails gives you a separate address for those signups, so your real inbox stays out of it.",
    quote: "Open the page, copy the address, get your code and move on.",
    whyHeading: "Why We Built TempoEmails",
    whyP1: "Most temp mail sites are hard to use. They're covered in ads, refresh slowly, offer domains that signup forms already reject, and make you dig through a long email template to find a six-digit code.",
    whyP2: "TempoEmails doesn't run its own mail servers. It creates inboxes at established public temp-mail providers (Mail.tm, Mail.gw, Inboxes, TempMail.lol and Guerrilla Mail) and shows them in one clean inbox. If one provider is down, the next one is used.",
    features: [
      {
        title: "Automatic Code Detection",
        desc: "TempoEmails looks for 4–8 digit codes and verification links in each email and shows them above the message with a copy button.",
      },
      {
        title: "Auto-Refreshing Inbox",
        desc: "The inbox checks for new mail every 10 seconds, so you don't have to keep clicking refresh.",
      },
      {
        title: "QR Code for Your Phone",
        desc: "Signing up on your phone while the inbox is open on your computer? Scan the QR code to get the address onto your phone.",
      },
      {
        title: "Several Providers and Domains",
        desc: "Addresses come from several providers, each with its own domains. If a site rejects one, click 'New Email' or 'Custom' to switch to another.",
      },
      {
        title: "Passwords Where Providers Offer Them",
        desc: "Mail.tm and Mail.gw inboxes come with a password, shown under Access. Use it to open the same inbox later in another browser or on another device.",
      },
    ],
    principlesHeading: "Our Privacy Principles",
    principles: [
      {
        label: "No registration",
        desc: "We never ask for your name, phone number, personal email or a password of your own.",
      },
      {
        label: "We don't keep your mail",
        desc: "Messages are stored by the provider that hosts the address and cached in your browser until you delete the inbox. How long the provider keeps them is up to the provider; TempMail.lol inboxes, for example, expire after about an hour.",
      },
      {
        label: "Free",
        desc: "TempoEmails is free to use. It's supported by ads, which load only if you accept cookies.",
      },
      {
        label: "Not for anything important",
        desc: "Some inboxes can be read by anyone who knows the address. Use TempoEmails for signups and testing, never for banking, work or account recovery.",
      },
    ],
    questionsHeading: "Questions or Feedback?",
    questionsLead: "If you have a suggestion, a question or a bug to report, see our",
    contactPageLink: "Contact page",
  },
  es: {
    lead: "No debería tener que entregar su dirección de correo personal solo para leer un artículo, probar una nueva aplicación, descargar un archivo o aprovechar un descuento.",
    story: "Cada registro añade su dirección a otra lista de marketing, y cada empresa que la guarda es un sitio más desde el que puede filtrarse. TempoEmails le da una dirección aparte para esos registros, de modo que su bandeja real queda al margen.",
    quote: "Abra la página, copie la dirección, reciba su código y siga con lo suyo.",
    whyHeading: "¿Por qué creamos TempoEmails?",
    whyP1: "La mayoría de los sitios de correo temporal son incómodos: están llenos de anuncios, se actualizan despacio, ofrecen dominios que los formularios ya rechazan y le obligan a buscar un código de 6 dígitos en una plantilla larguísima.",
    whyP2: "TempoEmails no tiene servidores de correo propios. Crea bandejas en proveedores públicos de correo temporal conocidos (Mail.tm, Mail.gw, Inboxes, TempMail.lol y Guerrilla Mail) y las muestra en una sola bandeja. Si un proveedor no responde, se usa el siguiente.",
    features: [
      {
        title: "Detección automática de códigos",
        desc: "TempoEmails busca códigos de 4 a 8 dígitos y enlaces de verificación en cada correo y los muestra encima del mensaje con un botón para copiarlos.",
      },
      {
        title: "Bandeja que se actualiza sola",
        desc: "La bandeja busca correo nuevo cada 10 segundos, así no tiene que pulsar actualizar una y otra vez.",
      },
      {
        title: "Código QR para el móvil",
        desc: "¿Se registra desde el móvil con la bandeja abierta en el ordenador? Escanee el código QR para llevar la dirección al teléfono.",
      },
      {
        title: "Varios proveedores y dominios",
        desc: "Las direcciones vienen de varios proveedores, cada uno con sus propios dominios. Si un sitio rechaza uno, pulse 'Nuevo correo' o 'Personalizar' para cambiar a otro.",
      },
      {
        title: "Contraseña cuando el proveedor la ofrece",
        desc: "Las bandejas de Mail.tm y Mail.gw incluyen una contraseña, visible en Acceso. Con ella puede abrir la misma bandeja más tarde en otro navegador o dispositivo.",
      },
    ],
    principlesHeading: "Nuestros principios de privacidad",
    principles: [
      {
        label: "Sin registro",
        desc: "Nunca le pedimos su nombre, teléfono, correo personal ni una contraseña propia.",
      },
      {
        label: "No guardamos su correo",
        desc: "Los mensajes los guarda el proveedor de la dirección y se almacenan en caché en su navegador hasta que elimine la bandeja. Cuánto tiempo los conserva depende del proveedor; las bandejas de TempMail.lol, por ejemplo, caducan al cabo de una hora aproximadamente.",
      },
      {
        label: "Gratis",
        desc: "TempoEmails es gratuito. Se financia con anuncios, que solo se cargan si acepta las cookies.",
      },
      {
        label: "No para nada importante",
        desc: "Algunas bandejas las puede leer cualquiera que conozca la dirección. Use TempoEmails para registros y pruebas, nunca para bancos, trabajo o recuperación de cuentas.",
      },
    ],
    questionsHeading: "¿Preguntas o sugerencias?",
    questionsLead: "Si tiene una sugerencia, una pregunta o un error que comunicar, visite nuestra",
    contactPageLink: "página de Contacto",
  },
  pt: {
    lead: "Você não deveria ter que entregar seu endereço de email pessoal apenas para ler um artigo, testar um novo app, baixar um arquivo ou resgatar um desconto.",
    story: "Cada cadastro coloca seu endereço em mais uma lista de marketing, e cada empresa que o guarda é mais um lugar de onde ele pode vazar. O TempoEmails oferece um endereço separado para esses cadastros, e sua caixa real fica de fora.",
    quote: "Abra a página, copie o endereço, receba o código e siga em frente.",
    whyHeading: "Por que criamos o TempoEmails",
    whyP1: "A maioria dos sites de e-mail temporário é difícil de usar: cheios de anúncios, lentos para atualizar, com domínios que os formulários já recusam, e você ainda precisa procurar um código de 6 dígitos no meio de um modelo enorme.",
    whyP2: "O TempoEmails não tem servidores de e-mail próprios. Ele cria caixas em provedores públicos de e-mail temporário conhecidos (Mail.tm, Mail.gw, Inboxes, TempMail.lol e Guerrilla Mail) e mostra tudo em uma só caixa. Se um provedor estiver fora do ar, o próximo é usado.",
    features: [
      {
        title: "Detecção automática de códigos",
        desc: "O TempoEmails procura códigos de 4 a 8 dígitos e links de verificação em cada e-mail e os mostra acima da mensagem com um botão de copiar.",
      },
      {
        title: "Caixa com atualização automática",
        desc: "A caixa verifica novos e-mails a cada 10 segundos, então você não precisa ficar clicando em atualizar.",
      },
      {
        title: "QR code para o celular",
        desc: "Vai se cadastrar pelo celular com a caixa aberta no computador? Escaneie o QR code para levar o endereço ao telefone.",
      },
      {
        title: "Vários provedores e domínios",
        desc: "Os endereços vêm de vários provedores, cada um com seus domínios. Se um site recusar um deles, clique em 'Novo email' ou 'Personalizar' para trocar.",
      },
      {
        title: "Senha quando o provedor oferece",
        desc: "As caixas do Mail.tm e do Mail.gw vêm com uma senha, exibida em Acesso. Com ela você abre a mesma caixa depois em outro navegador ou aparelho.",
      },
    ],
    principlesHeading: "Nossos Princípios de Privacidade",
    principles: [
      {
        label: "Sem cadastro",
        desc: "Nunca pedimos seu nome, telefone, e-mail pessoal ou uma senha sua.",
      },
      {
        label: "Não guardamos seus e-mails",
        desc: "As mensagens ficam com o provedor do endereço e em cache no seu navegador até você apagar a caixa. Por quanto tempo o provedor as mantém depende dele; as caixas do TempMail.lol, por exemplo, expiram em cerca de uma hora.",
      },
      {
        label: "Grátis",
        desc: "O TempoEmails é gratuito. Ele é mantido por anúncios, que só carregam se você aceitar os cookies.",
      },
      {
        label: "Não use para nada importante",
        desc: "Algumas caixas podem ser lidas por qualquer pessoa que saiba o endereço. Use o TempoEmails para cadastros e testes, nunca para banco, trabalho ou recuperação de contas.",
      },
    ],
    questionsHeading: "Dúvidas ou Sugestões?",
    questionsLead: "Se você tem uma sugestão, uma dúvida ou um bug para relatar, veja nossa",
    contactPageLink: "página de Contato",
  },
  fr: {
    lead: "Vous ne devriez pas avoir à divulguer votre adresse email personnelle simplement pour lire un article, tester une application, télécharger un fichier ou profiter d'une offre.",
    story: "Chaque inscription ajoute votre adresse à une liste marketing de plus, et chaque entreprise qui la stocke est un endroit de plus d’où elle peut fuiter. TempoEmails vous donne une adresse à part pour ces inscriptions, et votre vraie boîte reste en dehors.",
    quote: "Ouvrez la page, copiez l’adresse, récupérez votre code et passez à autre chose.",
    whyHeading: "Pourquoi nous avons créé TempoEmails",
    whyP1: "La plupart des sites d’email temporaire sont pénibles : couverts de publicités, lents à se rafraîchir, avec des domaines que les formulaires refusent déjà, et il faut fouiller un long modèle d’email pour trouver un code à 6 chiffres.",
    whyP2: "TempoEmails n’exploite pas ses propres serveurs de messagerie. Il crée des boîtes chez des fournisseurs publics d’email temporaire reconnus (Mail.tm, Mail.gw, Inboxes, TempMail.lol et Guerrilla Mail) et les affiche dans une seule boîte. Si un fournisseur est indisponible, le suivant prend le relais.",
    features: [
      {
        title: "Détection automatique des codes",
        desc: "TempoEmails repère les codes de 4 à 8 chiffres et les liens de vérification dans chaque email et les affiche au-dessus du message avec un bouton de copie.",
      },
      {
        title: "Boîte actualisée automatiquement",
        desc: "La boîte vérifie les nouveaux messages toutes les 10 secondes : inutile de cliquer sans cesse sur actualiser.",
      },
      {
        title: "QR code pour votre téléphone",
        desc: "Vous vous inscrivez sur votre téléphone pendant que la boîte est ouverte sur l’ordinateur ? Scannez le QR code pour y récupérer l’adresse.",
      },
      {
        title: "Plusieurs fournisseurs et domaines",
        desc: "Les adresses viennent de plusieurs fournisseurs, chacun avec ses domaines. Si un site en refuse un, cliquez sur « Nouvel email » ou « Personnaliser » pour changer.",
      },
      {
        title: "Un mot de passe quand le fournisseur le permet",
        desc: "Les boîtes Mail.tm et Mail.gw ont un mot de passe, visible sous Accès. Il permet de rouvrir la même boîte plus tard dans un autre navigateur ou sur un autre appareil.",
      },
    ],
    principlesHeading: "Nos principes fondamentaux de confidentialité",
    principles: [
      {
        label: "Sans inscription",
        desc: "Nous ne demandons jamais votre nom, votre téléphone, votre email personnel ni un mot de passe à vous.",
      },
      {
        label: "Nous ne gardons pas vos messages",
        desc: "Les messages sont conservés par le fournisseur de l’adresse et mis en cache dans votre navigateur jusqu’à ce que vous supprimiez la boîte. Leur durée de conservation dépend du fournisseur ; les boîtes TempMail.lol, par exemple, expirent au bout d’une heure environ.",
      },
      {
        label: "Gratuit",
        desc: "TempoEmails est gratuit. Il est financé par des publicités, qui ne se chargent que si vous acceptez les cookies.",
      },
      {
        label: "Pas pour l’essentiel",
        desc: "Certaines boîtes peuvent être lues par toute personne qui connaît l’adresse. Utilisez TempoEmails pour des inscriptions et des tests, jamais pour la banque, le travail ou la récupération de comptes.",
      },
    ],
    questionsHeading: "Questions ou remarques ?",
    questionsLead: "Pour une suggestion, une question ou un bug à signaler, consultez notre",
    contactPageLink: "page Contact",
  },
  de: {
    lead: "Sie sollten niemals Ihre persönliche E-Mail-Adresse preisgeben müssen, nur um einen Artikel zu lesen, eine App zu testen oder eine Datei herunterzuladen.",
    story: "Jede Anmeldung setzt Ihre Adresse auf eine weitere Marketingliste, und jedes Unternehmen, das sie speichert, ist eine Stelle mehr, an der sie durchsickern kann. TempoEmails gibt Ihnen für solche Anmeldungen eine eigene Adresse, damit Ihr echtes Postfach außen vor bleibt.",
    quote: "Seite öffnen, Adresse kopieren, Code abholen, weitermachen.",
    whyHeading: "Warum wir TempoEmails ins Leben gerufen haben",
    whyP1: "Die meisten Temp-Mail-Seiten sind mühsam: voller Werbung, langsam beim Aktualisieren, mit Domains, die Anmeldeformulare längst ablehnen, und den sechsstelligen Code muss man in einem langen E-Mail-Template suchen.",
    whyP2: "TempoEmails betreibt keine eigenen Mailserver. Es legt Postfächer bei bekannten öffentlichen Temp-Mail-Anbietern an (Mail.tm, Mail.gw, Inboxes, TempMail.lol und Guerrilla Mail) und zeigt sie in einem Postfach an. Fällt ein Anbieter aus, wird der nächste genutzt.",
    features: [
      {
        title: "Automatische Code-Erkennung",
        desc: "TempoEmails sucht in jeder E-Mail nach 4- bis 8-stelligen Codes und Bestätigungslinks und zeigt sie über der Nachricht mit einer Kopieren-Schaltfläche an.",
      },
      {
        title: "Postfach aktualisiert sich selbst",
        desc: "Das Postfach sucht alle 10 Sekunden nach neuer Post, Sie müssen also nicht ständig auf Aktualisieren klicken.",
      },
      {
        title: "QR-Code fürs Handy",
        desc: "Sie melden sich am Handy an, während das Postfach am Computer offen ist? Scannen Sie den QR-Code, um die Adresse aufs Telefon zu holen.",
      },
      {
        title: "Mehrere Anbieter und Domains",
        desc: "Die Adressen stammen von mehreren Anbietern mit jeweils eigenen Domains. Lehnt eine Website eine ab, klicken Sie auf „Neue Adresse“ oder „Anpassen“, um zu wechseln.",
      },
      {
        title: "Passwort, wo der Anbieter eins hat",
        desc: "Postfächer von Mail.tm und Mail.gw haben ein Passwort, das unter „Zugang“ angezeigt wird. Damit öffnen Sie dasselbe Postfach später in einem anderen Browser oder auf einem anderen Gerät.",
      },
    ],
    principlesHeading: "Unsere Datenschutz-Grundsätze",
    principles: [
      {
        label: "Keine Registrierung",
        desc: "Wir fragen nie nach Ihrem Namen, Ihrer Telefonnummer, Ihrer privaten E-Mail oder einem eigenen Passwort.",
      },
      {
        label: "Wir speichern Ihre Post nicht",
        desc: "Nachrichten liegen beim Anbieter der Adresse und im Cache Ihres Browsers, bis Sie das Postfach löschen. Wie lange der Anbieter sie aufbewahrt, entscheidet er selbst; Postfächer von TempMail.lol laufen zum Beispiel nach etwa einer Stunde ab.",
      },
      {
        label: "Kostenlos",
        desc: "TempoEmails ist kostenlos. Finanziert wird es durch Werbung, die nur geladen wird, wenn Sie Cookies zustimmen.",
      },
      {
        label: "Nicht für Wichtiges",
        desc: "Manche Postfächer kann jeder lesen, der die Adresse kennt. Nutzen Sie TempoEmails für Anmeldungen und Tests, nie für Bank, Arbeit oder Kontowiederherstellung.",
      },
    ],
    questionsHeading: "Fragen oder Anregungen?",
    questionsLead: "Wenn Sie einen Vorschlag, eine Frage oder einen Fehler melden möchten, besuchen Sie unsere",
    contactPageLink: "Kontaktseite",
  },
  ja: {
    lead: "単に記事を読んだり、新しいアプリを試したり、ファイルをダウンロードするために、大切な個人用メールアドレスを差し出す必要はありません。",
    story: "登録するたびにアドレスは新たなマーケティングリストに載り、それを保存する企業が増えるほど漏えいの可能性も増えます。TempoEmailsはそうした登録用に別のアドレスを用意し、本当の受信箱を巻き込まないようにします。",
    quote: "ページを開き、アドレスをコピーし、コードを受け取ったら、それで終わりです。",
    whyHeading: "TempoEmails を開発した理由",
    whyP1: "多くの捨てメールサイトは使いにくいものです。広告だらけで更新が遅く、登録フォームですでに拒否されるドメインが使われ、6桁のコードを見つけるために長いメールを探し回る必要があります。",
    whyP2: "TempoEmailsは独自のメールサーバーを運用していません。実績のある公開捨てメールサービス（Mail.tm、Mail.gw、Inboxes、TempMail.lol、Guerrilla Mail）で受信箱を作成し、ひとつの画面に表示します。あるサービスが停止していれば、次のサービスが使われます。",
    features: [
      {
        title: "認証コードの自動検出",
        desc: "各メールから4〜8桁のコードや認証リンクを探し、メッセージの上にコピーボタン付きで表示します。",
      },
      {
        title: "自動更新の受信箱",
        desc: "受信箱は10秒ごとに新着メールを確認するので、何度も更新ボタンを押す必要はありません。",
      },
      {
        title: "スマホ用QRコード",
        desc: "パソコンで受信箱を開いたまま、スマホで登録したいときは、QRコードを読み取ればアドレスをスマホに送れます。",
      },
      {
        title: "複数のサービスとドメイン",
        desc: "アドレスは複数のサービスから提供され、それぞれ独自のドメインを持っています。サイトにドメインを拒否されたら、「再生成」または「カスタム」で切り替えてください。",
      },
      {
        title: "パスワード付きの受信箱",
        desc: "Mail.tmとMail.gwの受信箱にはパスワードがあり、「パスワード」ボタンから確認できます。これを使えば、別のブラウザや端末から同じ受信箱を後で開けます。",
      },
    ],
    principlesHeading: "プライバシーに関する私たちの信条",
    principles: [
      {
        label: "登録不要",
        desc: "名前、電話番号、個人のメールアドレス、独自のパスワードを求めることはありません。",
      },
      {
        label: "メールを保管しません",
        desc: "メッセージはアドレスを提供するサービスに保管され、受信箱を削除するまでブラウザにキャッシュされます。保管期間はサービスによって異なり、たとえばTempMail.lolの受信箱は約1時間で期限切れになります。",
      },
      {
        label: "無料",
        desc: "TempoEmailsは無料です。運営費は広告でまかなっており、広告はCookieに同意した場合にのみ読み込まれます。",
      },
      {
        label: "重要な用途には使わない",
        desc: "受信箱によっては、アドレスを知っている人なら誰でも読めます。登録やテストに使い、銀行、仕事、アカウント復旧には使わないでください。",
      },
    ],
    questionsHeading: "ご質問・フィードバック",
    questionsLead: "ご提案、ご質問、不具合の報告は、こちらの",
    contactPageLink: "お問い合わせページ",
  },
  ar: {
    lead: "لا يجب أن تضطر إلى تقديم عنوان بريدك الشخصي فقط لقراءة مقال، أو تجربة تطبيق جديد، أو تنزيل ملف، أو الاستفادة من خصم مؤقت.",
    story: "كل تسجيل يضيف عنوانك إلى قائمة تسويقية أخرى، وكل شركة تخزنه هي مكان إضافي قد يتسرب منه. يمنحك TempoEmails عنوانًا منفصلًا لهذه التسجيلات، فيبقى بريدك الحقيقي بعيدًا عنها.",
    quote: "افتح الصفحة، انسخ العنوان، استلم الرمز، وتابع.",
    whyHeading: "لماذا قمنا بإنشاء TempoEmails؟",
    whyP1: "معظم مواقع البريد المؤقت مزعجة: مليئة بالإعلانات، بطيئة في التحديث، تقدم نطاقات ترفضها نماذج التسجيل أصلًا، وتجبرك على البحث عن رمز من 6 أرقام داخل قالب طويل.",
    whyP2: "لا يشغّل TempoEmails خوادم بريد خاصة به. بل ينشئ صناديق لدى مزودين عامين معروفين للبريد المؤقت (Mail.tm وMail.gw وInboxes وTempMail.lol وGuerrilla Mail) ويعرضها في صندوق واحد. وإذا تعطل أحد المزودين يُستخدم التالي.",
    features: [
      {
        title: "اكتشاف تلقائي للرموز",
        desc: "يبحث TempoEmails في كل رسالة عن رموز من 4 إلى 8 أرقام وروابط تحقق، ويعرضها فوق الرسالة مع زر نسخ.",
      },
      {
        title: "صندوق يتحدث تلقائيًا",
        desc: "يتحقق الصندوق من الرسائل الجديدة كل 10 ثوانٍ، فلا تحتاج إلى الضغط على التحديث مرارًا.",
      },
      {
        title: "رمز QR للهاتف",
        desc: "تسجّل من هاتفك والصندوق مفتوح على الكمبيوتر؟ امسح رمز QR لنقل العنوان إلى الهاتف.",
      },
      {
        title: "عدة مزودين ونطاقات",
        desc: "تأتي العناوين من عدة مزودين لكل منهم نطاقاته. إذا رفض موقع أحدها، فاضغط «بريد جديد» أو «اسم مخصص» للتبديل.",
      },
      {
        title: "كلمة مرور حين يوفرها المزود",
        desc: "صناديق Mail.tm وMail.gw تأتي بكلمة مرور تظهر في «الدخول». استخدمها لفتح الصندوق نفسه لاحقًا من متصفح أو جهاز آخر.",
      },
    ],
    principlesHeading: "مبادئ الخصوصية لدينا",
    principles: [
      {
        label: "بدون تسجيل",
        desc: "لا نطلب أبدًا اسمك أو رقم هاتفك أو بريدك الشخصي أو كلمة مرور خاصة بك.",
      },
      {
        label: "لا نحتفظ ببريدك",
        desc: "تُحفظ الرسائل لدى المزود الذي يستضيف العنوان وتُخزَّن مؤقتًا في متصفحك حتى تحذف الصندوق. مدة احتفاظ المزود بها تعود إليه؛ فصناديق TempMail.lol مثلًا تنتهي بعد نحو ساعة.",
      },
      {
        label: "مجاني",
        desc: "TempoEmails مجاني، ويُموَّل بالإعلانات التي لا تُحمَّل إلا إذا وافقت على ملفات تعريف الارتباط.",
      },
      {
        label: "ليس لأي شيء مهم",
        desc: "بعض الصناديق يمكن لأي شخص يعرف العنوان قراءتها. استخدم TempoEmails للتسجيل والاختبار، وليس للبنوك أو العمل أو استعادة الحسابات.",
      },
    ],
    questionsHeading: "أسئلة أو استفسارات؟",
    questionsLead: "إذا كان لديك اقتراح أو سؤال أو خطأ تريد الإبلاغ عنه، فزر",
    contactPageLink: "صفحة التواصل معنا",
  },
  id: {
    lead: "Anda tidak seharusnya menyerahkan alamat email pribadi hanya untuk membaca artikel, mencoba aplikasi baru, mengunduh file, atau menikmati promo diskon.",
    story: "Setiap pendaftaran menaruh alamat Anda di daftar pemasaran baru, dan setiap perusahaan yang menyimpannya menambah satu tempat lagi yang bisa bocor. TempoEmails memberi Anda alamat terpisah untuk pendaftaran semacam itu, sehingga kotak masuk asli Anda tidak ikut terlibat.",
    quote: "Buka halaman, salin alamat, ambil kodenya, lalu lanjutkan.",
    whyHeading: "Mengapa Kami Membangun TempoEmails",
    whyP1: "Kebanyakan situs email sementara merepotkan: penuh iklan, lambat diperbarui, memakai domain yang sudah ditolak formulir pendaftaran, dan Anda harus mencari kode 6 digit di dalam template email yang panjang.",
    whyP2: "TempoEmails tidak menjalankan server email sendiri. Kami membuat kotak masuk di penyedia email sementara publik yang sudah dikenal (Mail.tm, Mail.gw, Inboxes, TempMail.lol, dan Guerrilla Mail) lalu menampilkannya dalam satu kotak masuk. Jika satu penyedia sedang bermasalah, penyedia berikutnya dipakai.",
    features: [
      {
        title: "Deteksi Kode Otomatis",
        desc: "TempoEmails mencari kode 4–8 digit dan tautan verifikasi di setiap email, lalu menampilkannya di atas pesan dengan tombol salin.",
      },
      {
        title: "Kotak Masuk Diperbarui Otomatis",
        desc: "Kotak masuk memeriksa email baru setiap 10 detik, jadi Anda tidak perlu terus menekan tombol segarkan.",
      },
      {
        title: "Kode QR untuk Ponsel",
        desc: "Mendaftar lewat ponsel sementara kotak masuk terbuka di komputer? Pindai kode QR untuk memindahkan alamat ke ponsel.",
      },
      {
        title: "Beberapa Penyedia dan Domain",
        desc: "Alamat berasal dari beberapa penyedia, masing-masing dengan domainnya sendiri. Jika situs menolak satu domain, klik 'Email Baru' atau 'Kustom' untuk berganti.",
      },
      {
        title: "Kata Sandi Jika Penyedia Menyediakannya",
        desc: "Kotak masuk Mail.tm dan Mail.gw dilengkapi kata sandi yang terlihat di menu Sandi. Gunakan untuk membuka kotak masuk yang sama nanti di browser atau perangkat lain.",
      },
    ],
    principlesHeading: "Prinsip Privasi Kami",
    principles: [
      {
        label: "Tanpa Pendaftaran",
        desc: "Kami tidak pernah meminta nama, nomor telepon, email pribadi, atau kata sandi milik Anda.",
      },
      {
        label: "Kami Tidak Menyimpan Email Anda",
        desc: "Pesan disimpan oleh penyedia alamat tersebut dan di-cache di browser Anda sampai Anda menghapus kotak masuk. Lama penyimpanannya tergantung penyedia; kotak masuk TempMail.lol, misalnya, kedaluwarsa setelah sekitar satu jam.",
      },
      {
        label: "Gratis",
        desc: "TempoEmails gratis. Biayanya ditopang iklan, yang hanya dimuat jika Anda menyetujui cookie.",
      },
      {
        label: "Bukan untuk Hal Penting",
        desc: "Beberapa kotak masuk bisa dibaca siapa pun yang tahu alamatnya. Gunakan TempoEmails untuk pendaftaran dan pengujian, jangan untuk bank, pekerjaan, atau pemulihan akun.",
      },
    ],
    questionsHeading: "Ada Pertanyaan atau Masukan?",
    questionsLead: "Jika Anda punya saran, pertanyaan, atau bug yang ingin dilaporkan, kunjungi",
    contactPageLink: "halaman Kontak",
  },
};

export const CONTACT_PAGE_CONTENT: Record<Locale, ContactPageData> = {
  en: {
    lead: "Have a question about TempoEmails, found a bug or want to suggest a feature? Pick the address below that fits best.",
    responseTime: "We usually reply within one to two business days.",
    channelsHeading: "Direct Contact Channels",
    channelsSub: "Writing to the right address gets you a faster answer:",
    channels: [
      {
        title: "Technical Support & Bugs",
        desc: "Mail not arriving, display problems or errors in the inbox.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copy",
      },
      {
        title: "General Inquiries",
        desc: "Questions about how TempoEmails works, and general feedback.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copy",
      },
      {
        title: "Business & Partnerships",
        desc: "Advertising and partnership inquiries.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copy",
      },
      {
        title: "Abuse & Legal Reports",
        desc: "Report misuse of the service or phishing, or send a DMCA notice.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copy",
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqSub: "Quick answers to common questions:",
    faqs: [
      {
        q: "Why didn't my verification email or OTP arrive?",
        a: "Most verification emails show up within a minute; the inbox checks for new mail every 10 seconds. If yours hasn't arrived:",
        list: [
          "Some services wait a minute or two before sending the code.",
          "Some sites block known disposable domains. Click 'New Email' or 'Custom' on the homepage to get an address on a different domain.",
          "Check that the address was copied into the signup form correctly.",
          "TempMail.lol addresses expire after about an hour. If yours has expired, create a new one.",
        ],
      },
      {
        q: "Can I send emails from TempoEmails?",
        a: "No. TempoEmails is receive-only: you can read, download and delete messages, but you can't send or reply.",
      },
      {
        q: "Can I get back an inbox I deleted or that expired?",
        a: "Only Mail.tm and Mail.gw inboxes can be reopened, using the password shown under Access (choose 'Open an existing inbox' in that dialog), and only while the provider still has the inbox. We don't keep copies of messages, so mail that is gone from the provider and from your browser can't be recovered.",
      },
      {
        q: "How do I report abuse, phishing, or send a DMCA notice?",
        a: `Email ${SITE_CONFIG.emails.abuse} with the message headers, the URLs involved and any other details.`,
      },
    ],
    resourcesHeading: "Guides",
    resourcesSub: "More on how disposable email works and how to keep your main inbox private:",
    resources: [
      {
        badge: "Guide",
        title: "Understanding OTP Verification Codes",
        desc: "How verification codes work and how TempoEmails spots them in an email.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Guide",
        title: "How Temporary Email Works",
        desc: "Where TempoEmails gets its addresses and how mail reaches your browser.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privacy",
        title: "How Disposable Email Protects Privacy",
        desc: "How a separate address limits tracking, data sharing and spam.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Security",
        title: "Email Privacy Best Practices",
        desc: "Practical steps to protect your primary email address.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Tips for Bug Reports",
    bugReportIntro: `When you email ${SITE_CONFIG.emails.support} about a bug, these details help us find the problem quickly:`,
    bugReportPoints: [
      "Your browser and version (for example Chrome 132, Firefox 135, Safari on iOS).",
      "Your operating system (for example macOS, Windows 11, Android 15).",
      "The domain of the address you were using (the part after the @).",
      "What happened, and what you expected to happen.",
      "Please don't include passwords or personal data in your email.",
    ],
    legalHeading: "Legal and Policy Questions",
    legalIntro: "Our policies:",
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
    lead: "¿Tiene una pregunta sobre TempoEmails, encontró un error o quiere sugerir una función? Elija la dirección que mejor encaje.",
    responseTime: "Solemos responder en uno o dos días laborables.",
    channelsHeading: "Canales de contacto directo",
    channelsSub: "Escribir a la dirección adecuada le dará una respuesta más rápida:",
    channels: [
      {
        title: "Soporte técnico y errores",
        desc: "Correos que no llegan, problemas de visualización o errores en la bandeja.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copiar",
      },
      {
        title: "Consultas generales",
        desc: "Preguntas sobre cómo funciona TempoEmails y comentarios generales.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copiar",
      },
      {
        title: "Negocios y alianzas",
        desc: "Consultas sobre publicidad y colaboraciones.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copiar",
      },
      {
        title: "Reportes de abuso y legal",
        desc: "Denuncie usos indebidos del servicio o phishing, o envíe un aviso DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copiar",
      },
    ],
    faqHeading: "Preguntas frecuentes",
    faqSub: "Respuestas rápidas a preguntas habituales:",
    faqs: [
      {
        q: "¿Por qué no llegó mi correo de verificación o código OTP?",
        a: "La mayoría de los correos de verificación aparecen en menos de un minuto; la bandeja busca correo nuevo cada 10 segundos. Si el suyo no ha llegado:",
        list: [
          "Algunos servicios esperan uno o dos minutos antes de enviar el código.",
          "Algunos sitios bloquean dominios desechables conocidos. Pulse 'Nuevo correo' o 'Personalizar' en la página de inicio para obtener una dirección en otro dominio.",
          "Compruebe que copió bien la dirección en el formulario de registro.",
          "Las direcciones de TempMail.lol caducan al cabo de una hora aproximadamente. Si la suya caducó, cree una nueva.",
        ],
      },
      {
        q: "¿Puedo enviar correos salientes desde TempoEmails?",
        a: "No. TempoEmails es solo de recepción: puede leer, descargar y eliminar mensajes, pero no enviar ni responder.",
      },
      {
        q: "¿Puedo recuperar una bandeja eliminada o caducada?",
        a: "Solo se pueden volver a abrir las bandejas de Mail.tm y Mail.gw, con la contraseña que aparece en Acceso (elija 'Abrir un buzón existente' en ese diálogo), y solo mientras el proveedor conserve la bandeja. No guardamos copias de los mensajes, así que el correo que ya no está ni en el proveedor ni en su navegador no se puede recuperar.",
      },
      {
        q: "¿Cómo reporto abusos, phishing o envío avisos DMCA?",
        a: `Escriba a ${SITE_CONFIG.emails.abuse} con los encabezados del mensaje, las URL implicadas y cualquier otro detalle.`,
      },
    ],
    resourcesHeading: "Guías",
    resourcesSub: "Más sobre cómo funciona el correo desechable y cómo mantener privada su bandeja principal:",
    resources: [
      {
        badge: "Guía",
        title: "Entendiendo los códigos OTP",
        desc: "Cómo funcionan los códigos de verificación y cómo los detecta TempoEmails en un correo.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Guía",
        title: "Cómo funciona el correo temporal",
        desc: "De dónde saca TempoEmails sus direcciones y cómo llega el correo a su navegador.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privacidad",
        title: "Cómo el correo desechable defiende su privacidad",
        desc: "Cómo una dirección aparte limita el rastreo, la cesión de datos y el spam.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Seguridad",
        title: "Mejores prácticas de privacidad en email",
        desc: "Pasos prácticos para proteger su dirección principal.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Consejos para comunicar errores",
    bugReportIntro: `Si escribe a ${SITE_CONFIG.emails.support} por un error, estos datos nos ayudan a encontrarlo rápido:`,
    bugReportPoints: [
      "Su navegador y versión (por ejemplo Chrome 132, Firefox 135, Safari en iOS).",
      "Su sistema operativo (por ejemplo macOS, Windows 11, Android 15).",
      "El dominio de la dirección que usaba (lo que va después de la @).",
      "Qué ocurrió y qué esperaba que ocurriera.",
      "No incluya contraseñas ni datos personales en su correo.",
    ],
    legalHeading: "Cuestiones legales y políticas",
    legalIntro: "Nuestras políticas:",
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
    lead: "Tem uma dúvida sobre o TempoEmails, encontrou um bug ou quer sugerir um recurso? Escolha o endereço que melhor se encaixa.",
    responseTime: "Costumamos responder em um ou dois dias úteis.",
    channelsHeading: "Canais Diretos de Contato",
    channelsSub: "Escrever para o endereço certo garante uma resposta mais rápida:",
    channels: [
      {
        title: "Suporte Técnico & Bugs",
        desc: "E-mails que não chegam, problemas de exibição ou erros na caixa.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copiar",
      },
      {
        title: "Dúvidas Gerais",
        desc: "Dúvidas sobre como o TempoEmails funciona e comentários em geral.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copiar",
      },
      {
        title: "Parcerias & Comercial",
        desc: "Contatos sobre publicidade e parcerias.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copiar",
      },
      {
        title: "Abuso & Jurídico",
        desc: "Denuncie uso indevido do serviço ou phishing, ou envie uma notificação DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copiar",
      },
    ],
    faqHeading: "Perguntas Frequentes",
    faqSub: "Respostas rápidas para dúvidas comuns:",
    faqs: [
      {
        q: "Por que meu email de verificação ou OTP não chegou?",
        a: "A maioria dos e-mails de verificação aparece em menos de um minuto; a caixa verifica novos e-mails a cada 10 segundos. Se o seu não chegou:",
        list: [
          "Alguns serviços esperam um ou dois minutos antes de enviar o código.",
          "Alguns sites bloqueiam domínios descartáveis conhecidos. Clique em 'Novo email' ou 'Personalizar' na página inicial para obter um endereço em outro domínio.",
          "Confira se o endereço foi copiado corretamente no formulário de cadastro.",
          "Endereços do TempMail.lol expiram em cerca de uma hora. Se o seu expirou, crie um novo.",
        ],
      },
      {
        q: "Posso enviar emails a partir do TempoEmails?",
        a: "Não. O TempoEmails é só de recebimento: você pode ler, baixar e apagar mensagens, mas não pode enviar nem responder.",
      },
      {
        q: "Posso recuperar uma caixa que apaguei ou que expirou?",
        a: "Só as caixas do Mail.tm e do Mail.gw podem ser reabertas, com a senha exibida em Acesso (escolha 'Abrir uma caixa de entrada existente' nessa janela), e apenas enquanto o provedor ainda tiver a caixa. Não guardamos cópias das mensagens, então e-mails que já não estão no provedor nem no seu navegador não podem ser recuperados.",
      },
      {
        q: "Como denunciar abusos, phishing ou enviar avisos DMCA?",
        a: `Envie um e-mail para ${SITE_CONFIG.emails.abuse} com os cabeçalhos da mensagem, as URLs envolvidas e outros detalhes.`,
      },
    ],
    resourcesHeading: "Guias",
    resourcesSub: "Mais sobre como o e-mail descartável funciona e como manter sua caixa principal privada:",
    resources: [
      {
        badge: "Guia",
        title: "Entendendo os Códigos OTP",
        desc: "Como funcionam os códigos de verificação e como o TempoEmails os encontra em um e-mail.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Guia",
        title: "Como Funciona o Email Temporário",
        desc: "De onde o TempoEmails tira seus endereços e como os e-mails chegam ao seu navegador.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privacidade",
        title: "Como o Email Descartável Protege Seus Dados",
        desc: "Como um endereço separado limita rastreamento, compartilhamento de dados e spam.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Segurança",
        title: "Boas Práticas de Privacidade no Email",
        desc: "Passos práticos para proteger seu endereço principal.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Dicas para relatar bugs",
    bugReportIntro: `Ao escrever para ${SITE_CONFIG.emails.support} sobre um bug, estes detalhes nos ajudam a encontrar o problema rapidamente:`,
    bugReportPoints: [
      "Seu navegador e versão (por exemplo Chrome 132, Firefox 135, Safari no iOS).",
      "Seu sistema operacional (por exemplo macOS, Windows 11, Android 15).",
      "O domínio do endereço que você usava (a parte depois do @).",
      "O que aconteceu e o que você esperava que acontecesse.",
      "Não inclua senhas nem dados pessoais no seu e-mail.",
    ],
    legalHeading: "Questões legais e políticas",
    legalIntro: "Nossas políticas:",
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
    lead: "Une question sur TempoEmails, un bug ou une idée de fonctionnalité ? Choisissez l’adresse qui correspond le mieux.",
    responseTime: "Nous répondons généralement sous un à deux jours ouvrés.",
    channelsHeading: "Canaux de contact direct",
    channelsSub: "Écrire à la bonne adresse vous permet d’obtenir une réponse plus vite :",
    channels: [
      {
        title: "Support technique & Bugs",
        desc: "Messages qui n’arrivent pas, problèmes d’affichage ou erreurs dans la boîte.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Copier",
      },
      {
        title: "Renseignements généraux",
        desc: "Questions sur le fonctionnement de TempoEmails et retours en général.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Copier",
      },
      {
        title: "Partenariats & Professionnels",
        desc: "Demandes concernant la publicité et les partenariats.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Copier",
      },
      {
        title: "Abus & Affaires juridiques",
        desc: "Signalez un usage abusif du service ou du phishing, ou envoyez une notification DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Copier",
      },
    ],
    faqHeading: "Foire aux questions",
    faqSub: "Des réponses rapides aux questions fréquentes :",
    faqs: [
      {
        q: "Pourquoi mon code de confirmation ou email OTP n'arrive-t-il pas ?",
        a: "La plupart des emails de vérification arrivent en moins d’une minute ; la boîte vérifie les nouveaux messages toutes les 10 secondes. Si le vôtre n’est pas arrivé :",
        list: [
          "Certains services attendent une ou deux minutes avant d’envoyer le code.",
          "Certains sites bloquent les domaines jetables connus. Cliquez sur « Nouvel email » ou « Personnaliser » sur la page d’accueil pour obtenir une adresse sur un autre domaine.",
          "Vérifiez que l’adresse a été correctement copiée dans le formulaire d’inscription.",
          "Les adresses TempMail.lol expirent au bout d’une heure environ. Si la vôtre a expiré, créez-en une nouvelle.",
        ],
      },
      {
        q: "Puis-je envoyer des emails depuis TempoEmails ?",
        a: "Non. TempoEmails fonctionne en réception seule : vous pouvez lire, télécharger et supprimer des messages, mais pas envoyer ni répondre.",
      },
      {
        q: "Puis-je récupérer une boîte supprimée ou expirée ?",
        a: "Seules les boîtes Mail.tm et Mail.gw peuvent être rouvertes, avec le mot de passe affiché sous Accès (choisissez « Ouvrir une boîte existante » dans cette fenêtre), et seulement tant que le fournisseur conserve la boîte. Nous ne gardons pas de copie des messages : un email qui n’est plus ni chez le fournisseur ni dans votre navigateur ne peut pas être récupéré.",
      },
      {
        q: "Comment signaler un abus ou envoyer une notification DMCA ?",
        a: `Écrivez à ${SITE_CONFIG.emails.abuse} en joignant les en-têtes du message, les URL concernées et tout autre détail utile.`,
      },
    ],
    resourcesHeading: "Guides",
    resourcesSub: "Pour en savoir plus sur l’email jetable et sur la protection de votre boîte principale :",
    resources: [
      {
        badge: "Guide",
        title: "Comprendre les codes de vérification OTP",
        desc: "Comment fonctionnent les codes de vérification et comment TempoEmails les repère dans un email.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Guide",
        title: "Fonctionnement technique de l'email temporaire",
        desc: "D’où viennent les adresses de TempoEmails et comment les messages arrivent dans votre navigateur.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Confidentialité",
        title: "Protéger sa vie privée avec un email jetable",
        desc: "Comment une adresse à part limite le pistage, le partage de données et le spam.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Sécurité",
        title: "Bonnes pratiques pour la sécurité de vos emails",
        desc: "Des mesures concrètes pour protéger votre adresse principale.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Conseils pour signaler un bug",
    bugReportIntro: `Quand vous écrivez à ${SITE_CONFIG.emails.support} au sujet d’un bug, ces informations nous aident à trouver le problème rapidement :`,
    bugReportPoints: [
      "Votre navigateur et sa version (par exemple Chrome 132, Firefox 135, Safari sur iOS).",
      "Votre système d’exploitation (par exemple macOS, Windows 11, Android 15).",
      "Le domaine de l’adresse utilisée (la partie après le @).",
      "Ce qui s’est passé et ce que vous attendiez.",
      "N’incluez ni mot de passe ni données personnelles dans votre message.",
    ],
    legalHeading: "Questions juridiques et politiques",
    legalIntro: "Nos politiques :",
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
    lead: "Sie haben eine Frage zu TempoEmails, einen Fehler gefunden oder eine Idee für eine Funktion? Wählen Sie die passende Adresse.",
    responseTime: "Wir antworten in der Regel innerhalb von ein bis zwei Werktagen.",
    channelsHeading: "Direkte Kontaktkanäle",
    channelsSub: "An die richtige Adresse geschrieben, bekommen Sie schneller eine Antwort:",
    channels: [
      {
        title: "Technischer Support & Fehler",
        desc: "Post kommt nicht an, Darstellungsprobleme oder Fehler im Postfach.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Kopieren",
      },
      {
        title: "Allgemeine Anfragen",
        desc: "Fragen dazu, wie TempoEmails funktioniert, und allgemeines Feedback.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Kopieren",
      },
      {
        title: "Geschäftliches & Partnerschaften",
        desc: "Anfragen zu Werbung und Partnerschaften.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Kopieren",
      },
      {
        title: "Missbrauch & Rechtliches",
        desc: "Melden Sie Missbrauch des Dienstes oder Phishing, oder senden Sie eine DMCA-Mitteilung.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Kopieren",
      },
    ],
    faqHeading: "Häufig gestellte Fragen (FAQ)",
    faqSub: "Kurze Antworten auf häufige Fragen:",
    faqs: [
      {
        q: "Warum ist meine Bestätigungs-E-Mail oder der OTP-Code nicht angekommen?",
        a: "Die meisten Bestätigungsmails erscheinen innerhalb einer Minute; das Postfach sucht alle 10 Sekunden nach neuer Post. Falls Ihre nicht angekommen ist:",
        list: [
          "Manche Dienste warten ein, zwei Minuten, bevor sie den Code senden.",
          "Manche Websites sperren bekannte Wegwerf-Domains. Klicken Sie auf der Startseite auf „Neue Adresse“ oder „Anpassen“, um eine Adresse auf einer anderen Domain zu erhalten.",
          "Prüfen Sie, ob die Adresse richtig ins Anmeldeformular kopiert wurde.",
          "Adressen von TempMail.lol laufen nach etwa einer Stunde ab. Ist Ihre abgelaufen, erstellen Sie eine neue.",
        ],
      },
      {
        q: "Kann ich von TempoEmails aus E-Mails versenden?",
        a: "Nein. TempoEmails ist ein reines Empfangspostfach: Sie können Nachrichten lesen, herunterladen und löschen, aber nicht senden oder antworten.",
      },
      {
        q: "Kann ich ein gelöschtes oder abgelaufenes Postfach zurückholen?",
        a: "Nur Postfächer von Mail.tm und Mail.gw lassen sich wieder öffnen, mit dem Passwort unter „Zugang“ (dort „Bestehendes Postfach öffnen“ wählen), und nur solange der Anbieter das Postfach noch hat. Wir speichern keine Kopien von Nachrichten. Was weder beim Anbieter noch in Ihrem Browser liegt, lässt sich nicht wiederherstellen.",
      },
      {
        q: "Wie melde ich Missbrauch oder reiche eine DMCA-Beschwerde ein?",
        a: `Schreiben Sie an ${SITE_CONFIG.emails.abuse} und fügen Sie die Header der Nachricht, die betroffenen URLs und weitere Details bei.`,
      },
    ],
    resourcesHeading: "Ratgeber",
    resourcesSub: "Mehr dazu, wie Wegwerf-E-Mail funktioniert und wie Ihr Hauptpostfach privat bleibt:",
    resources: [
      {
        badge: "Leitfaden",
        title: "OTP-Verifizierungscodes verstehen",
        desc: "Wie Bestätigungscodes funktionieren und wie TempoEmails sie in einer E-Mail findet.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Ratgeber",
        title: "Wie temporäre E-Mails funktionieren",
        desc: "Woher TempoEmails seine Adressen bekommt und wie die Post in Ihren Browser gelangt.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Datenschutz",
        title: "Privatsphäre schützen mit Wegwerf-E-Mails",
        desc: "Wie eine separate Adresse Tracking, Datenweitergabe und Spam begrenzt.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Sicherheit",
        title: "E-Mail-Sicherheit Best Practices",
        desc: "Praktische Schritte zum Schutz Ihrer Hauptadresse.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Tipps für Fehlerberichte",
    bugReportIntro: `Wenn Sie ${SITE_CONFIG.emails.support} wegen eines Fehlers schreiben, helfen uns diese Angaben, ihn schnell zu finden:`,
    bugReportPoints: [
      "Ihr Browser und die Version (zum Beispiel Chrome 132, Firefox 135, Safari unter iOS).",
      "Ihr Betriebssystem (zum Beispiel macOS, Windows 11, Android 15).",
      "Die Domain der verwendeten Adresse (der Teil nach dem @).",
      "Was passiert ist und was Sie erwartet hatten.",
      "Bitte schicken Sie keine Passwörter oder persönlichen Daten mit.",
    ],
    legalHeading: "Rechtliches und Richtlinien",
    legalIntro: "Unsere Richtlinien:",
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
    lead: "لديك سؤال عن TempoEmails، أو وجدت خطأ، أو تريد اقتراح ميزة؟ اختر العنوان الأنسب أدناه.",
    responseTime: "نرد عادةً خلال يوم إلى يومي عمل.",
    channelsHeading: "قنوات التواصل المباشرة",
    channelsSub: "الكتابة إلى العنوان الصحيح تمنحك ردًا أسرع:",
    channels: [
      {
        title: "الدعم التقني والإبلاغ عن الأخطاء",
        desc: "رسائل لا تصل، أو مشكلات في العرض، أو أخطاء في الصندوق.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "نسخ",
      },
      {
        title: "الاستفسارات العامة والملاحظات",
        desc: "أسئلة عن طريقة عمل TempoEmails وملاحظات عامة.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "نسخ",
      },
      {
        title: "الأعمال والشراكات",
        desc: "استفسارات الإعلانات والشراكات.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "نسخ",
      },
      {
        title: "إساءة الاستخدام والتقارير القانونية",
        desc: "أبلغ عن إساءة استخدام الخدمة أو التصيد الاحتيالي، أو أرسل إشعار DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "نسخ",
      },
    ],
    faqHeading: "الأسئلة الشائعة",
    faqSub: "إجابات سريعة عن الأسئلة الشائعة:",
    faqs: [
      {
        q: "لماذا لم تصل رسالة التأكيد أو رمز التحقق (OTP)؟",
        a: "تظهر معظم رسائل التحقق خلال دقيقة، إذ يتحقق الصندوق من الرسائل الجديدة كل 10 ثوانٍ. إذا لم تصل رسالتك:",
        list: [
          "بعض الخدمات تنتظر دقيقة أو دقيقتين قبل إرسال الرمز.",
          "بعض المواقع تحظر نطاقات البريد المؤقت المعروفة. اضغط «بريد جديد» أو «اسم مخصص» في الصفحة الرئيسية للحصول على عنوان على نطاق آخر.",
          "تأكد من نسخ العنوان بشكل صحيح في نموذج التسجيل.",
          "تنتهي عناوين TempMail.lol بعد نحو ساعة. إذا انتهى عنوانك، فأنشئ عنوانًا جديدًا.",
        ],
      },
      {
        q: "هل يمكنني إرسال رسائل من TempoEmails؟",
        a: "لا. TempoEmails للاستقبال فقط: يمكنك قراءة الرسائل وتنزيلها وحذفها، لكن لا يمكنك الإرسال أو الرد.",
      },
      {
        q: "هل يمكنني استعادة صندوق حذفته أو انتهت صلاحيته؟",
        a: "يمكن إعادة فتح صناديق Mail.tm وMail.gw فقط، باستخدام كلمة المرور الظاهرة في «الدخول» (اختر «فتح صندوق بريد موجود» في تلك النافذة)، وما دام المزود محتفظًا بالصندوق. لا نحتفظ بنسخ من الرسائل، لذا لا يمكن استعادة بريد لم يعد موجودًا لدى المزود ولا في متصفحك.",
      },
      {
        q: "كيف أبلغ عن إساءة استخدام أو إرسال إشعار DMCA؟",
        a: `راسل ${SITE_CONFIG.emails.abuse} مع ترويسات الرسالة والروابط المعنية وأي تفاصيل أخرى.`,
      },
    ],
    resourcesHeading: "أدلة",
    resourcesSub: "المزيد عن طريقة عمل البريد المؤقت وكيف تحافظ على خصوصية بريدك الرئيسي:",
    resources: [
      {
        badge: "دليل",
        title: "دليل فهم رموز التحقق OTP",
        desc: "كيف تعمل رموز التحقق وكيف يكتشفها TempoEmails داخل الرسالة.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "دليل",
        title: "كيف يعمل البريد المؤقت خلف الكواليس",
        desc: "من أين يحصل TempoEmails على عناوينه وكيف يصل البريد إلى متصفحك.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "الخصوصية",
        title: "كيف يحمي البريد المؤقت بياناتك الشخصية",
        desc: "كيف يحد عنوان منفصل من التتبع ومشاركة البيانات والرسائل المزعجة.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "الأمان",
        title: "أفضل ممارسات أمان البريد الإلكتروني",
        desc: "خطوات عملية لحماية عنوانك الرئيسي.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "نصائح للإبلاغ عن الأخطاء",
    bugReportIntro: `عند مراسلة ${SITE_CONFIG.emails.support} بشأن خطأ، تساعدنا هذه التفاصيل في العثور عليه بسرعة:`,
    bugReportPoints: [
      "المتصفح وإصداره (مثل Chrome 132 أو Firefox 135 أو Safari على iOS).",
      "نظام التشغيل (مثل macOS أو Windows 11 أو Android 15).",
      "نطاق العنوان الذي كنت تستخدمه (الجزء بعد @).",
      "ما الذي حدث وما الذي كنت تتوقعه.",
      "لا تُرفق كلمات مرور أو بيانات شخصية في رسالتك.",
    ],
    legalHeading: "المسائل القانونية والسياسات",
    legalIntro: "سياساتنا:",
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
    lead: "Punya pertanyaan tentang TempoEmails, menemukan bug, atau ingin mengusulkan fitur? Pilih alamat yang paling sesuai di bawah.",
    responseTime: "Kami biasanya membalas dalam satu sampai dua hari kerja.",
    channelsHeading: "Saluran Kontak Langsung",
    channelsSub: "Menulis ke alamat yang tepat membuat Anda lebih cepat mendapat jawaban:",
    channels: [
      {
        title: "Dukungan Teknis & Bug",
        desc: "Email tidak masuk, masalah tampilan, atau error di kotak masuk.",
        email: SITE_CONFIG.emails.support,
        copyLabel: "Salin",
      },
      {
        title: "Pertanyaan Umum",
        desc: "Pertanyaan tentang cara kerja TempoEmails dan masukan umum.",
        email: SITE_CONFIG.emails.contact,
        copyLabel: "Salin",
      },
      {
        title: "Bisnis & Kemitraan",
        desc: "Pertanyaan seputar iklan dan kemitraan.",
        email: SITE_CONFIG.emails.business,
        copyLabel: "Salin",
      },
      {
        title: "Penyalahgunaan & Laporan Hukum",
        desc: "Laporkan penyalahgunaan layanan atau phishing, atau kirim pemberitahuan DMCA.",
        email: SITE_CONFIG.emails.abuse,
        copyLabel: "Salin",
      },
    ],
    faqHeading: "Pertanyaan yang Sering Diajukan (FAQ)",
    faqSub: "Jawaban singkat untuk pertanyaan umum:",
    faqs: [
      {
        q: "Mengapa email verifikasi atau kode OTP saya belum tiba?",
        a: "Sebagian besar email verifikasi muncul dalam waktu kurang dari satu menit; kotak masuk memeriksa email baru setiap 10 detik. Jika email Anda belum masuk:",
        list: [
          "Beberapa layanan menunggu satu atau dua menit sebelum mengirim kode.",
          "Beberapa situs memblokir domain email sekali pakai yang dikenal. Klik 'Email Baru' atau 'Kustom' di beranda untuk mendapatkan alamat di domain lain.",
          "Pastikan alamat sudah disalin dengan benar ke formulir pendaftaran.",
          "Alamat TempMail.lol kedaluwarsa setelah sekitar satu jam. Jika alamat Anda sudah kedaluwarsa, buat yang baru.",
        ],
      },
      {
        q: "Bisakah saya mengirim email keluar dari TempoEmails?",
        a: "Tidak. TempoEmails hanya untuk menerima: Anda bisa membaca, mengunduh, dan menghapus pesan, tetapi tidak bisa mengirim atau membalas.",
      },
      {
        q: "Bisakah saya memulihkan kotak masuk yang sudah dihapus atau kedaluwarsa?",
        a: "Hanya kotak masuk Mail.tm dan Mail.gw yang bisa dibuka lagi, memakai kata sandi yang terlihat di menu Sandi (pilih 'Buka kotak masuk yang ada' di dialog itu), dan hanya selama penyedia masih menyimpan kotak masuk tersebut. Kami tidak menyimpan salinan pesan, jadi email yang sudah tidak ada di penyedia maupun di browser Anda tidak bisa dipulihkan.",
      },
      {
        q: "Bagaimana cara melaporkan penyalahgunaan atau mengirim surat DMCA?",
        a: `Kirim email ke ${SITE_CONFIG.emails.abuse} beserta header pesan, URL terkait, dan detail lainnya.`,
      },
    ],
    resourcesHeading: "Panduan",
    resourcesSub: "Selengkapnya tentang cara kerja email sekali pakai dan cara menjaga kotak masuk utama tetap privat:",
    resources: [
      {
        badge: "Panduan",
        title: "Memahami Kode Verifikasi OTP",
        desc: "Cara kerja kode verifikasi dan bagaimana TempoEmails menemukannya di dalam email.",
        slug: "/blog/understanding-otp-verification-codes/",
      },
      {
        badge: "Panduan",
        title: "Cara Kerja Email Sementara",
        desc: "Dari mana TempoEmails mendapatkan alamatnya dan bagaimana email sampai ke browser Anda.",
        slug: "/blog/how-temporary-email-works/",
      },
      {
        badge: "Privasi",
        title: "Bagaimana Email Sementara Melindungi Privasi Anda",
        desc: "Bagaimana alamat terpisah membatasi pelacakan, berbagi data, dan spam.",
        slug: "/blog/how-disposable-email-protects-privacy/",
      },
      {
        badge: "Keamanan",
        title: "Praktik Privasi Email Terbaik",
        desc: "Langkah praktis untuk melindungi alamat utama Anda.",
        slug: "/blog/email-privacy-best-practices/",
      },
    ],
    bugReportHeading: "Tips Melaporkan Bug",
    bugReportIntro: `Saat mengirim email ke ${SITE_CONFIG.emails.support} tentang bug, detail berikut membantu kami menemukan masalahnya dengan cepat:`,
    bugReportPoints: [
      "Browser dan versinya (misalnya Chrome 132, Firefox 135, Safari di iOS).",
      "Sistem operasi Anda (misalnya macOS, Windows 11, Android 15).",
      "Domain alamat yang Anda gunakan (bagian setelah @).",
      "Apa yang terjadi dan apa yang Anda harapkan.",
      "Jangan sertakan kata sandi atau data pribadi dalam email Anda.",
    ],
    legalHeading: "Pertanyaan Hukum dan Kebijakan",
    legalIntro: "Kebijakan kami:",
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
