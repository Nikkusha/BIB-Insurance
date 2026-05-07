export type Lang = "ge" | "en";

export interface HeroSlide {
  title: string;
  subtitle: string;
  subtitlePrefix?: string;
  subtitleItems?: string[];
}

export interface ProductAccordionItem {
  title: string;
  desc: string;
  slug: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PageData {
  title: string;
  hero?: string;
  body?: string;
  intro?: string;
  covers?: string[];
  features?: string[];
  consider?: string[];
  cta?: string;
  subcategories?: string[];
  pageAccordion?: { title: string; content: string }[];
  date?: string;
  author?: string;
  bodyExtra?: string;
}

export interface NavData {
  company: string;
  products: string;
  blog: string;
  contact: string;
  cta: string;
  langToggle: string;
  home: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  body: string;
  bodyItems?: string[];
}

export interface LangData {
  nav: NavData;
  companyDropdown: { label: string; slug: string }[];
  productsDropdown: { label: string; slug: string }[];
  heroSlides: HeroSlide[];
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  servicesTitle: string;
  servicesSubheading: string;
  services: ServiceItem[];
  productsTitle: string;
  productAccordion: ProductAccordionItem[];
  productCtaLabel: string;
  partnersTitle: string;
  partners: string[];
  clientsTitle: string;
  clients: string[];
  ctaSectionTitle: string;
  ctaSectionSubtitle: string;
  blogTitle: string;
  blogSubtitle: string;
  formLabels: {
    name: string;
    phone: string;
    message: string;
    consent: string;
    submit: string;
    success: string;
    fillForm: string;
    requestConsultation: string;
    required: string;
    insuranceType: string;
    insuranceTypePlaceholder: string;
  };
  footerAbout: string;
  footerQuickLinks: { label: string; slug: string }[];
  footerProducts: { label: string; slug: string }[];
  footerContact: { address: string; phone: string; email: string };
  footerBottom: { privacy: string; terms: string; copyright: string };
  notFoundTitle: string;
  notFoundSubtitle: string;
  notFoundBack: string;
  contactPageTitle: string;
  faqTitle: string;
  faqSubtitle: string;
  faq: FaqItem[];
  privacyTitle: string;
  privacySections: { heading: string; body: string; items?: string[] }[];
  termsTitle: string;
  termsSections: { heading: string; body: string; items?: string[] }[];
  breadcrumbs: { home: string; products: string; company: string; blog: string };
  accordionLabels: { covers: string; features: string; consider: string };
  relatedTitle: string;
  pages: Record<string, PageData>;
}

const BIB_DATA: Record<Lang, LangData> = {
  ge: {
    nav: {
      company: "კომპანია",
      products: "პროდუქტები",
      blog: "ბლოგი/სიახლეები",
      contact: "კონტაქტი",
      cta: "დაგვიკავშირდით",
      langToggle: "EN",
      home: "მთავარი",
    },
    companyDropdown: [
      { label: "ჩვენს შესახებ", slug: "about" },
      { label: "მისია", slug: "mission" },
      { label: "გუნდი", slug: "team" },
      { label: "რატომ სადაზღვევო ბროკერი", slug: "why-broker" },
    ],
    productsDropdown: [
      { label: "ავტოდაზღვევა", slug: "auto-insurance" },
      { label: "ქონების დაზღვევა", slug: "property-insurance" },
      { label: "სამოგზაურო დაზღვევა", slug: "travel-insurance" },
      { label: "ჯანმრთელობის დაზღვევა", slug: "health-insurance" },
      { label: "ტვირთის დაზღვევა", slug: "cargo-insurance" },
      { label: "დამატებითი დაზღვევა", slug: "additional-insurance" },
    ],
    heroSlides: [
      { title: "შედეგი სწორ გადაწყვეტილებაშია", subtitle: "დაგვიკავშირდით და მარტივად:", subtitlePrefix: "დაგვიკავშირდით და მარტივად:", subtitleItems: ["მიიღეთ ბროკერის კონსულტაცია", "შეადარეთ სხვადასხვა სადაზღვევო კომპანიების შეთავაზებები", "შეიძინეთ დაზღვევა ონლაინ"] },
      { title: "საიმედო დაცვა ბიზნესისთვის", subtitle: "ჩვენი პროფესიონალთა გუნდი იზრუნებს თქვენს ფინანსურ რისკებზე საუკეთესო პირობებით." },
      { title: "საუკეთესო კორპორატიული დაზღვევა", subtitle: "ჩვენ დაგეხმარებით შეარჩიოთ ყველაზე ოპტიმალური სადაზღვევო პაკეტი და დაზოგოთ დრო." },
      { title: "მშვიდი და უსაფრთხო მომავალი", subtitle: "ინდივიდუალური მიდგომა თითოეულ კლიენტთან და მუდმივი მხარდაჭერა სადაზღვევო შემთხვევისას." },
      { title: "გამოცდილება რომელსაც ენდობით", subtitle: "მრავალწლიანი გამოცდილება ქართულ სადაზღვევო ბაზარზე თქვენი კომფორტისთვის." },
      { title: "სწორი არჩევანი — საიმედო დაცვა", subtitle: "BIB გთავაზობთ სრულ სადაზღვევო კონსულტაციას და ზარალის პროცესის მართვას ბოლომდე." },
    ],
    heroCtaPrimary: "დაგვიკავშირდით",
    heroCtaSecondary: "გაიგეთ მეტი ↓",
    servicesTitle: "ექსპერტიზა დაზღვევაში, რისკების მართვასა და ზარალის რეგულირებაში",
    servicesSubheading: "",
    services: [
      {
        num: "01",
        title: "სადაზღვევო კონსულტაცია",
        body: "",
        bodyItems: [
          "კლიენტის საქმიანობისა და შესაძლო რისკების შეფასება განსაზღვრავს შესაბამის სადაზღვევო საჭიროებებს.",
          "ბაზარზე არსებული შეთავაზებების ანალიზი და კლიენტისთვის ოპტიმალური პირობების შერჩევა.",
        ],
      },
      {
        num: "02",
        title: "მოკვლევა და განთავსება",
        body: "",
        bodyItems: [
          "სადაზღვევო კომპანიებთან მოლაპარაკება და შეთავაზებების შედარება საუკეთესო პირობების მისაღებად.",
          "რისკების დეტალური ანალიზი და ზუსტი პრეზენტაცია სადაზღვევო ბაზარზე კონკურენტული ფასის მისაღებად.",
        ],
      },
      {
        num: "03",
        title: "ზარალის მართვა",
        body: "",
        bodyItems: [
          "ზარალის დადგომისას პროცესის სრული მართვა, რაც უზრუნველყოფს დროულ და სამართლიან ანაზღაურებას.",
          "დოკუმენტაციის მომზადება და სადაზღვევო კომპანიასთან კომუნიკაციის კოორდინაცია.",
        ],
      },
      {
        num: "04",
        title: "გადაზღვევა",
        body: "",
        bodyItems: [
          "რისკების გადანაწილება საერთაშორისო გადაზღვევის ბაზრებზე ფინანსური სტაბილურობის უზრუნველსაყოფად.",
          "ოპტიმალური გადაზღვევის სტრუქტურის შერჩევა და რისკების ანალიზი.",
        ],
      },
    ],
    productsTitle: "ჩვენი პროდუქტები",
    productAccordion: [
      {
        title: "ტვირთების დაზღვევა",
        desc: "დაიცავით ტვირთი ტრანსპორტირებისას დაზიანების, დაკარგვისა და სხვა გაუთვალისწინებელი რისკებისგან.",
        slug: "cargo-insurance",
      },
      {
        title: "ინდივიდუალური ჯანმრთელობის დაზღვევა",
        desc: "მიიღეთ ხარისხიანი სამედიცინო მომსახურება და ფინანსური დაცვა ჯანმრთელობის ხარჯებისგან.",
        slug: "health-insurance",
      },
      {
        title: "ქონების დაზღვევა",
        desc: "დაიცავით საცხოვრებელი და კომერციული ქონება გაუთვალისწინებელი შემთხვევებით გამოწვეული ფინანსური ზარალისგან.",
        slug: "property-insurance",
      },
      {
        title: "სამოგზაურო დაზღვევა",
        desc: "იმოგზაურეთ მშვიდად — დაზღვევა ფარავს უცხოეთში წარმოქმნილ სამედიცინო ხარჯებს და სხვა რისკებს.",
        slug: "travel-insurance",
      },
    ],
    productCtaLabel: "მოითხოვე შეთავაზება",
    partnersTitle: "სანდო პარტნიორობა წამყვან სადაზღვეო კომპანიებთან",
    partners: ["Aldagi", "Imedi L", "TBC Insurance", "ARDI", "Irao", "Unison", "GPI", "Alfa"],
    clientsTitle: "ნდობა ბიზნესებისგან",
    clients: ["Bene Group", "Bene Comport", "Bene Exclusive", "Kairos", "Dagi", "Albioni", "Wizer"],
    ctaSectionTitle: "დატოვეთ შეტყობინება",
    ctaSectionSubtitle: "დაგვიკავშირდით — ჩვენ დაგეხმარებით საუკეთესო გადაწყვეტილების მიღებაში",
    blogTitle: "ბლოგი / სიახლეები",
    blogSubtitle: "გაეცანით სასარგებლო ინფორმაციას დაზღვევის, რისკების მართვისა და სადაზღვევო გადაწყვეტების შესახებ.",
    formLabels: {
      name: "სახელი",
      phone: "ტელეფონი",
      message: "შეტყობინება",
      consent: "ვეთანხმები ჩემი მონაცემების გამოყენებას ჩემთან დასაკავშირებლად",
      submit: "გაგზავნა →",
      success: "✅ თქვენი შეტყობინება მიღებულია. მალე დაგიკავშირდებით.",
      fillForm: "დატოვეთ შეტყობინება",
      requestConsultation: "მოითხოვეთ კონსულტაცია",
      required: "სავალდებულო ველი",
      insuranceType: "აირჩიეთ დაზღვევის ტიპი",
      insuranceTypePlaceholder: "— აირჩიეთ —",
    },
    footerAbout: "დამოუკიდებელი სადაზღვევო საბროკერო კომპანია, რომელიც ეხმარება კლიენტებს შეადარონ სხვადასხვა სადაზღვევო კომპანიის შეთავაზებები და შეარჩიონ საუკეთესო სადაზღვევო გადაწყვეტა.",
    footerQuickLinks: [
      { label: "ჩვენს შესახებ", slug: "about" },
      { label: "მისია", slug: "mission" },
      { label: "გუნდი", slug: "team" },
      { label: "რატომ სადაზღვევო ბროკერი", slug: "why-broker" },
      { label: "ბლოგი / სიახლეები", slug: "blog" },
      { label: "ხშირად დასმული კითხვები", slug: "faq" },
    ],
    footerProducts: [
      { label: "ავტოდაზღვევა", slug: "auto-insurance" },
      { label: "ქონების დაზღვევა", slug: "property-insurance" },
      { label: "სამოგზაურო დაზღვევა", slug: "travel-insurance" },
      { label: "ჯანმრთელობის დაზღვევა", slug: "health-insurance" },
      { label: "ტვირთის დაზღვევა", slug: "cargo-insurance" },
      { label: "დამატებითი დაზღვევა", slug: "additional-insurance" },
    ],
    footerContact: {
      address: "თბილისი, პ. ქავთარაძის ქ. 60",
      phone: "+995 599 89 77 85",
      email: "info@bib.com.ge",
    },
    footerBottom: {
      privacy: "კონფიდენციალურობის პოლიტიკა",
      terms: "მომსახურების პირობები",
      copyright: "© 2026 BIB | Bene Insurance Brokerage. ყველა უფლება დაცულია.",
    },
    notFoundTitle: "გვერდი ვერ მოიძებნა",
    notFoundSubtitle: "სამწუხაროდ, ეს გვერდი არ არსებობს.",
    notFoundBack: "მთავარ გვერდზე დაბრუნება",
    contactPageTitle: "კონტაქტი",
    faqTitle: "ხშირად დასმული კითხვები",
    faqSubtitle: "პასუხები ყველაზე გავრცელებულ კითხვებზე დაზღვევის შესახებ.",
    faq: [
      {
        q: "რა უპირატესობა აქვს დაზღვევის შეძენას ბროკერის მეშვეობით?",
        a: "სადაზღვევო ბროკერი მოქმედებს როგორც დამოუკიდებელი მრჩეველი, რომელიც იცავს კლიენტის ინტერესებს. ბროკერი ადარებს სხვადასხვა სადაზღვევო კომპანიის შეთავაზებებს და ეხმარება კლიენტს შეარჩიოს მის საჭიროებებზე ყველაზე მეტად მორგებული გადაწყვეტა.\n\nბროკერის დახმარებით კლიენტი იღებს პროფესიულ რეკომენდაციებს, პირობების მარტივ განმარტებას და მხარდაჭერას მთელი პროცესის განმავლობაში — პოლისის შერჩევიდან ზარალის ანაზღაურებამდე.",
      },
      {
        q: "როგორ მივიღო სადაზღვევო შეთავაზება?",
        a: "სადაზღვევო შეთავაზების მისაღებად შესაძლებელია საიტზე შესაბამისი ფორმის შევსება ან კომპანიასთან პირდაპირ დაკავშირება. მოთხოვნის მიღების შემდეგ ხდება საჭირო ინფორმაციის შეგროვება და ბაზარზე არსებული სადაზღვევო შეთავაზებების ანალიზი, რის საფუძველზეც კლიენტს ეძლევა შესაბამისი შეთავაზება.",
      },
      {
        q: "შესაძლებელია თუ არა რამდენიმე სადაზღვევო კომპანიის შეთავაზების შედარება?",
        a: "დიახ. სადაზღვევო ბროკერი თანამშრომლობს რამდენიმე სადაზღვევო კომპანიასთან და გთავაზობთ სხვადასხვა სადაზღვეოს შეთავაზებას. ეს საშუალებას აძლევს კლიენტს შეადაროს პირობები, დაფარვის მოცულობა და ფასები, რათა მიიღოს ინფორმირებული გადაწყვეტილება.",
      },
      {
        q: "ბროკერის მომსახურება დამატებით ხარჯებთან არის დაკავშირებული?",
        a: "კლიენტისთვის ბროკერის მომსახურება დამატებით ხარჯებთან არ არის დაკავშირებული. კლიენტისთვის აღნიშნული მომსახურება არის სრულიად უფასო. ბროკერის მთავარი მიზანია დაეხმაროს კლიენტს შესაბამისი სადაზღვევო გადაწყვეტის შერჩევაში.",
      },
    ],
    privacyTitle: "კონფიდენციალურობის პოლიტიკა",
    privacySections: [
      { heading: "ზოგადი ინფორმაცია", body: "კომპანია პატივს სცემს მომხმარებლის კონფიდენციალურობას და უზრუნველყოფს პერსონალური მონაცემების დაცვას მოქმედი კანონმდებლობის შესაბამისად.\n\nვებ-გვერდის გამოყენებით მომხმარებელი ადასტურებს, რომ გაეცნო და ეთანხმება წინამდებარე კონფიდენციალურობის პოლიტიკას.\n\nკომპანია ამუშავებს პერსონალურ მონაცემებს საქართველოს მოქმედი კანონმდებლობისა და საერთაშორისო სტანდარტების შესაბამისად, მათ შორის ევროპის მონაცემთა დაცვის რეგულაციის (GDPR) პრინციპების გათვალისწინებით." },
      { heading: "მონაცემთა დამმუშავებელი", body: "პერსონალური მონაცემების დამმუშავებელია:\nBene Insurance Brokerage\nთბილისი, საქართველო\nელფოსტა: info@bib.com.ge\n\nკომპანია პასუხისმგებელია მომხმარებლის პერსონალური მონაცემების უსაფრთხო დამუშავებაზე." },
      { heading: "რა მონაცემებს ვაგროვებთ", body: "ვებ-გვერდის გამოყენებისას შესაძლებელია შეგროვდეს შემდეგი კატეგორიის ინფორმაცია:", items: ["სახელი და გვარი", "ელფოსტის მისამართი", "ტელეფონის ნომერი", "პირადი ნომერი (ფიზიკური პირის შემთხვევაში)", "კომპანიის საიდენტიფიკაციო კოდი (იურიდიული პირის შემთხვევაში)", "IP მისამართი, მოწყობილობის ტიპი, ბრაუზერის ინფორმაცია, Cookies"] },
      { heading: "რატომ ვიყენებთ ამ მონაცემებს", body: "მონაცემები გამოიყენება შემდეგი მიზნებისთვის:", items: ["მომხმარებლის რეგისტრაცია და ანგარიშის მართვა", "სადაზღვევო პროდუქტებისა და მომსახურების შეთავაზება", "მომხმარებელთან კომუნიკაცია", "მომსახურების ხარისხის გაუმჯობესება", "კანონმდებლობით გათვალისწინებული ვალდებულებების შესრულება"] },
      { heading: "მონაცემების გაზიარება", body: "კომპანია შეიძლება გადასცემდეს პერსონალურ მონაცემებს მესამე პირებს მხოლოდ მომსახურების გაწევისთვის საჭიროების შემთხვევაში. ასეთი მხარეები შეიძლება იყვნენ სადაზღვევო კომპანიები, ტექნოლოგიური პროვაიდერები ან სახელმწიფო ორგანოები კანონით გათვალისწინებულ შემთხვევებში.\n\nყველა შემთხვევაში კომპანია უზრუნველყოფს მონაცემების დაცვას და კონფიდენციალურობას." },
      { heading: "მომხმარებლის უფლებები", body: "მომხმარებელს აქვს შემდეგი უფლებები:", items: ["მიიღოს ინფორმაცია მისი პერსონალური მონაცემების დამუშავების შესახებ", "მოითხოვოს მონაცემების გასწორება ან განახლება", "მოითხოვოს მონაცემების წაშლა კანონით დაშვებულ შემთხვევებში", "მოითხოვოს მონაცემების დამუშავების შეზღუდვა"] },
      { heading: "Cookies პოლიტიკა", body: "ვებ-გვერდი იყენებს Cookies ტექნოლოგიას მომხმარებლის გამოცდილების გასაუმჯობესებლად — ვებ-გვერდის ფუნქციონირების, პრეფერენციების დამახსოვრებისა და ანალიზის მიზნით. მომხმარებელს შეუძლია ნებისმიერ დროს შეცვალოს Cookies-ის პარამეტრები საკუთარი ბრაუზერის მეშვეობით." },
      { heading: "მონაცემთა უსაფრთხოება", body: "კომპანია იღებს შესაბამის ტექნიკურ და ორგანიზაციულ ზომებს პერსონალური მონაცემების დასაცავად, მათ შორის მონაცემთა დაშიფვრა, სისტემური უსაფრთხოების მექანიზმები და წვდომის კონტროლი." },
      { heading: "პოლიტიკის განახლება", body: "კომპანია იტოვებს უფლებას პერიოდულად განაახლოს კონფიდენციალურობის პოლიტიკა. განახლებული ვერსია გამოქვეყნდება ვებ-გვერდზე." },
    ],
    termsTitle: "მომსახურების პირობები",
    termsSections: [
      { heading: "ზოგადი დებულებები", body: "წინამდებარე პირობები არეგულირებს ვებ-გვერდის გამოყენებას და პლატფორმაზე ხელმისაწვდომი ინფორმაციისა და მომსახურების მიღებას.\n\nვებ-გვერდის გამოყენებით მომხმარებელი ადასტურებს, რომ გაეცნო და ეთანხმება აღნიშნულ პირობებს." },
      { heading: "პლატფორმის მიზანი", body: "ვებ-გვერდი წარმოადგენს სადაზღვევო საბროკერო პლატფორმას, რომლის მეშვეობით მომხმარებელს შეუძლია მიიღოს ინფორმაცია სადაზღვევო პროდუქტების შესახებ და მოითხოვოს შესაბამისი შეთავაზება.\n\nვებ-გვერდზე განთავსებული ინფორმაცია წარმოადგენს საინფორმაციო მასალას და არ წარმოადგენს სადაზღვევო ხელშეკრულებას." },
      { heading: "მომხმარებლის პასუხისმგებლობა", body: "მომხმარებელი პასუხისმგებელია ვებ-გვერდზე მითითებული ინფორმაციის სისწორეზე და ვალდებულია არ გამოიყენოს ვებ-გვერდი არამართლზომიერი მიზნებისთვის." },
      { heading: "პასუხისმგებლობის შეზღუდვა", body: "კომპანია არ არის პასუხისმგებელი მომხმარებლის მიერ მიღებული გადაწყვეტილებების შედეგებზე, რომლებიც ეფუძნება ვებ-გვერდზე განთავსებულ ინფორმაციას.\n\nსადაზღვევო პირობები განისაზღვრება შესაბამისი სადაზღვევო კომპანიების მიერ და დეტალურად მითითებულია სადაზღვევო ხელშეკრულებაში." },
      { heading: "პირობების ცვლილება", body: "კომპანია იტოვებს უფლებას ნებისმიერ დროს განაახლოს ან შეცვალოს მომსახურების პირობები. განახლებული პირობები გამოქვეყნდება ვებ-გვერდზე." },
      { heading: "მარეგულირებელი კანონმდებლობა", body: "წინამდებარე პირობები რეგულირდება საქართველოს კანონმდებლობით." },
    ],
    breadcrumbs: { home: "მთავარი", products: "პროდუქტები", company: "კომპანია", blog: "ბლოგი/სიახლეები" },
    accordionLabels: { covers: "რას აზღვევს", features: "ძირითადი მახასიათებლები", consider: "რა უნდა გავითვალისწინოთ" },
    relatedTitle: "დაკავშირებული პროდუქტები",
    pages: {
      about: {
        title: "ჩვენს შესახებ",
        hero: "BIB | Bene Insurance Brokerage — დამოუკიდებელი სადაზღვევო საბროკერო კომპანია",
        body: "BIB | Bene Insurance Brokerage — დამოუკიდებელი სადაზღვევო საბროკერო კომპანია, დაარსებული 2026 წელს, რომელიც ოპერირებს ძლიერი და ბაზარზე კარგად ცნობილი პარტნიორის — <a href=\"https://benegroup.ge/\" target=\"_blank\" class=\"text-primary hover:underline font-medium\">Bene Group</a> — მხარდაჭერით. ჩვენ არ წარმოვადგენთ არცერთი კონკრეტული სადაზღვევო კომპანიის ინტერესს — ვმუშაობთ მრავალ პარტნიორთან გამჭვირვალე პირობებში.\n\nჩვენი გუნდი აერთიანებს ბიზნეს სფეროში 22-წლიან გამოცდილებას, რაც გვაძლევს ბაზრის სიღრმისეულ ცოდნას და კლიენტებისთვის პრაქტიკულ, სწორ გადაწყვეტილებებზე ორიენტაციას. ვადარებთ ბაზარზე არსებულ შეთავაზებებს, ვხსნით პირობებს და კლიენტს ვთავაზობთ ერთ საკონტაქტო სადაზღვევო მრჩეველს.\n\nზარალის შემთხვევაში ჩვენ ვმართავთ ანაზღაურების პროცესს სრულად — დოკუმენტებიდან საბოლოო შედეგამდე. ჩვენი მიზანია კლიენტებმა მიიღონ პროფესიული, საჭიროებებზე მორგებული მომსახურება.",
        cta: "დაგვიკავშირდით",
      },
      mission: {
        title: "მისია",
        body: "დაზღვევა გავხადოთ მარტივი და გამჭვირვალე\nვახდენთ ბაზარზე არსებული სადაზღვევო შეთავაზებების შედარებას და ვეხმარებით კლიენტებს სწორ არჩევანში.\n\nდავიცვათ კლიენტის ინტერესები\nროგორც დამოუკიდებელი ბროკერი, ვმუშაობთ კლიენტის მხარეს და ვარჩევთ საუკეთესო გადაწყვეტილებას მისი რეალური საჭიროებების მიხედვით.\n\nგავამარტივოთ რთული პროცესები ტექნოლოგიითა და გამოცდილებით\nვაერთიანებთ პროფესიულ ცოდნასა და თანამედროვე ციფრულ პლატფორმას, რათა დაზღვევის პროცესი იყოს სწრაფი, მარტივი და ეფექტური.",
      },
      team: {
        title: "გუნდი",
        body: "სადაზღვევო საბროკერო ბენე | BIB წარმოადგენს ძლიერი პარტნიორის — <a href=\"https://benegroup.ge/\" target=\"_blank\" class=\"text-primary hover:underline font-medium\">Bene Group</a>-ის — მხარდაჭერით შექმნილ სადაზღვევო საბროკერო კომპანიას. <a href=\"https://benegroup.ge/\" target=\"_blank\" class=\"text-primary hover:underline font-medium\">Bene Group</a> არის ბაზარზე კარგად ცნობილი კომპანია, რომელსაც მრავალწლიანი გამოცდილება აქვს სხვადასხვა ბიზნეს მიმართულებით და რომელიც დღეს წარმატებით ავითარებს საბროკერო საქმიანობასაც.\n\nკომპანიის პარტნიორები აერთიანებენ ბიზნეს სფეროში 22-წლიან პროფესიულ გამოცდილებას, მათ შორის გაყიდვების და კორპორატიული კლიენტების მართვის მიმართულებით. ეს გამოცდილება გვაძლევს შესაძლებლობას კლიენტებს შევთავაზოთ პრაქტიკული, პროფესიული და სწორ გადაწყვეტილებებზე ორიენტირებული სადაზღვევო მომსახურება.",
      },
      "why-broker": {
        title: "რატომ სადაზღვევო ბროკერი",
        body: "სადაზღვევო ბროკერი წარმოადგენს დამოუკიდებელ მრჩეველს, რომელიც მუშაობს კლიენტის ინტერესების დაცვით და არა რომელიმე კონკრეტული სადაზღვევო კომპანიის სახელით. ბროკერი ადარებს სხვადასხვა სადაზღვევო კომპანიის შეთავაზებებს და ეხმარება კლიენტს შეარჩიოს მის საჭიროებებზე ყველაზე მეტად მორგებული დაზღვევის გადაწყვეტა.\n\nბროკერის დახმარებით კლიენტი იღებს პირობების მარტივ და გასაგებ ახსნას, პროფესიულ რეკომენდაციებს და ერთ საკონტაქტო პირს ყველა სადაზღვევო საკითხზე.\n\nზარალის შემთხვევაში ბროკერი მართავს ანაზღაურების პროცესს და წარმოადგენს კლიენტის ინტერესებს სადაზღვევო კომპანიასთან ურთიერთობაში. ამ გზით დაზღვევის პროცესი ხდება უფრო მარტივი, გამჭვირვალე და ეფექტური.",
      },
      "auto-insurance": {
        title: "ავტოდაზღვევა",
        intro: "ავტოდაზღვევა იცავს თქვენს ავტომობილს ფინანსური დანაკარგებისგან, რომლებიც შეიძლება გამოწვეული იყოს ავტოსაგზაო შემთხვევით, დაზიანებით, ქურდობით ან სხვა გაუთვალისწინებელი მოვლენებით. დაზღვევა უზრუნველყოფს თქვენი ავტომობილის შეკეთების ან ზარალის ანაზღაურებას დაზღვევის პირობების შესაბამისად.",
        covers: [
          "ავტოსაგზაო შემთხვევით გამოწვეულ დაზიანებას",
          "ავტომობილის ქურდობას ან გატაცებას",
          "ხანძარს, აფეთქებას და სხვა შემთხვევით რისკებს",
          "სტიქიურ მოვლენებს (ქარი, სეტყვა, წყალდიდობა და სხვ.)",
        ],
        features: [
          "ავტომობილის სრული ან ნაწილობრივი დაზღვევა",
          "მესამე პირის მიმართ პასუხისმგებლობის დაფარვის შესაძლებლობა",
          "ზარალის სწრაფი შეფასება და ანაზღაურება",
          "დამატებითი მომსახურებები (ევაკუაცია, ტექნიკური დახმარება და სხვ.)",
        ],
        consider: [
          "პოლისის პირობები და გამონაკლისები",
          "ფრანშიზის (დაკლებული თანხის) პირობები",
          "დაფარვის ტერიტორია",
          "ავტომობილის ღირებულება და დაზღვევის თანხა",
        ],
        cta: "დაგვიკავშირდით",
      },
      "property-insurance": {
        title: "ქონების დაზღვევა",
        intro: "უძრავი ქონების დაზღვევა გიცავთ გაუთვალისწინებელი მოვლენებით გამოწვეული ფინანსური ზარალისგან. დაზღვევა უზრუნველყოფს ქონების დაზიანების ან განადგურების შემთხვევაში შესაბამის ანაზღაურებას დაზღვევის პირობების მიხედვით.",
        covers: [
          "შენობა-ნაგებობებს",
          "ოფისებსა და კომერციულ ფართებს",
          "საწარმოო და სასაწყობე ინფრასტრუქტურას",
          "ავეჯს, ტექნიკას და სხვა მატერიალურ აქტივებს",
        ],
        features: [
          "ინდივიდუალური საჭიროებებზე მორგებული სადაზღვევო პირობები",
          "ფართო რისკების დაფარვის შესაძლებლობა",
          "სხვადასხვა სადაზღვევო კომპანიების შეთავაზებების შედარება",
          "პროფესიული მხარდაჭერა პოლისის შერჩევიდან ანაზღაურების პროცესამდე",
        ],
        consider: [
          "დაზღვევის თანხა და ქონების რეალური ღირებულება",
          "პოლისით დაფარული რისკები და გამონაკლისები",
          "ფრანშიზის პირობები",
          "ქონების დაცვის და უსაფრთხოების ზომები",
        ],
        cta: "დაგვიკავშირდით",
      },
      "travel-insurance": {
        title: "სამოგზაურო დაზღვევა",
        intro: "სამოგზაურო დაზღვევა უზრუნველყოფს ფინანსურ დაცვას უცხოეთში მოგზაურობის დროს წარმოქმნილი გაუთვალისწინებელი შემთხვევებისგან. პოლისი ფარავს სამედიცინო ხარჯებს, გადაუდებელ დახმარებას და სხვა რისკებს, რომლებიც შეიძლება მოგზაურობისას წარმოიშვას.",
        covers: [
          "უცხოეთში სამედიცინო ხარჯებს",
          "გადაუდებელ სამედიცინო დახმარებას",
          "სამედიცინო ტრანსპორტირებას და რეპატრიაციას",
          "ბარგის დაკარგვას ან დაზიანებას",
          "მოგზაურობის გაუქმებას ან შეფერხებას (პოლისის პირობების შესაბამისად)",
        ],
        features: [
          "მსოფლიოს სხვადასხვა ქვეყნისთვის მოქმედი დაზღვევა",
          "მოკლე და გრძელვადიანი მოგზაურობის პოლისები",
          "ინდივიდუალური და ოჯახური დაზღვევის შესაძლებლობა",
          "24/7 საერთაშორისო დახმარების სერვისი",
        ],
        consider: [
          "დაზღვევის მოქმედების ტერიტორია",
          "დაფარვის ლიმიტები და პოლისის პირობები",
          "გამონაკლისები და ფრანშიზის პირობები",
          "მოგზაურობის პერიოდი და ქვეყანა",
        ],
        cta: "დაგვიკავშირდით",
      },
      "health-insurance": {
        title: "ჯანმრთელობის დაზღვევა",
        intro: "ჯანმრთელობის დაზღვევა უზრუნველყოფს ფინანსურ დაცვას სამედიცინო მომსახურების ხარჯებისგან და გაძლევთ წვდომას ხარისხიან სამედიცინო მომსახურებაზე. პოლისი ფარავს სხვადასხვა ტიპის სამედიცინო მომსახურებას დაზღვევის პირობების შესაბამისად და უზრუნველყოფს საჭირო სამედიცინო მომსახურების დროულ მიღებას.",
        covers: [
          "ამბულატორიულ სამედიცინო მომსახურებას",
          "სტაციონარულ მკურნალობას",
          "ექიმის კონსულტაციებსა და დიაგნოსტიკურ კვლევებს",
          "ოპერაციებს და სამედიცინო პროცედურებს",
          "მედიკამენტების ნაწილობრივ ან სრულ დაფარვას (პოლისის პირობების მიხედვით)",
        ],
        features: [
          "ინდივიდუალური და კორპორატიული ჯანმრთელობის დაზღვევა",
          "სამედიცინო დაწესებულებების ფართო ქსელი",
          "სხვადასხვა სადაზღვევო კომპანიების შეთავაზებების შედარება",
          "პროფესიული კონსულტაცია და პოლისის სწორად შერჩევა",
        ],
        consider: [
          "პოლისის დაფარვის ლიმიტები",
          "მომსახურებების თანადაფინანსების პირობები",
          "გამონაკლისები და შეზღუდვები",
          "სამედიცინო დაწესებულებების ქსელი",
        ],
        cta: "დაგვიკავშირდით",
      },
      "cargo-insurance": {
        title: "ტვირთის დაზღვევა",
        intro: "ტვირთის დაზღვევა უზრუნველყოფს ფინანსურ დაცვას ტვირთის ტრანსპორტირებისას წარმოქმნილი გაუთვალისწინებელი რისკებისგან. დაზღვევა ფარავს ტვირთის დაზიანებას, დაკარგვას ან განადგურებას გადაზიდვის პროცესში, დაზღვევის პირობების შესაბამისად.",
        covers: [
          "ტვირთის დაზიანებას ტრანსპორტირების დროს",
          "ტვირთის დაკარგვას ან განადგურებას",
          "სატრანსპორტო შემთხვევებით გამოწვეულ დაზიანებას ან ზარალს",
          "სტიქიური მოვლენებით გამოწვეულ დაზიანებას",
          "დატვირთვა-გადმოტვირთვის პროცესში წარმოქმნილ ზარალს",
        ],
        features: [
          "საერთაშორისო და ადგილობრივი გადაზიდვების დაზღვევა",
          "სხვადასხვა სატრანსპორტო საშუალებით გადაზიდული ტვირთის დაფარვა (სახმელეთო, საზღვაო, საჰაერო)",
          "საერთაშორისო სადაზღვევო სტანდარტებზე დაფუძნებული პირობები",
          "პროფესიული მხარდაჭერა პოლისის შერჩევიდან ანაზღაურების პროცესამდე",
        ],
        consider: [
          "ტვირთის ტიპი და ღირებულება",
          "გადაზიდვის მარშრუტი და ტრანსპორტირების სახეობა",
          "პოლისით დაფარული რისკები და გამონაკლისები",
          "შეფუთვის და ტრანსპორტირების პირობები",
        ],
        cta: "დაგვიკავშირდით",
      },
      "additional-insurance": {
        title: "დამატებითი დაზღვევები",
        body: "BIB გთავაზობთ სხვადასხვა სპეციალიზებულ სადაზღვევო პროდუქტს თქვენი ბიზნესის უნიკალური საჭიროებებისთვის.",
        pageAccordion: [
          {
            title: "პასუხისმგებლობის დაზღვევა",
            content: "• ზოგადი სამოქალაქო პასუხისმგებლობის დაზღვევა\n\n• პროფესიული პასუხისმგებლობის დაზღვევა\n\n• პროდუქტთან დაკავშირებული პასუხისმგებლობის დაზღვევა\n\n• დამსაქმებლის პასუხისმგებლობის დაზღვევა\n\n• დირექტორთა და ხელმძღვანელ პირთა პასუხისმგებლობის დაზღვევა (D&O)\n\n• ექსპედიტორის პასუხისმგებლობის დაზღვევა\n\n• გადამზიდავის პასუხისმგებლობის დაზღვევა (CMR)\n\n• ტერმინალის პასუხისმგებლობის დაზღვევა"
          },
          {
            title: "ბიზნესისა და ინფრასტრუქტურის დაზღვევა",
            content: "• მანქანა-დანადგარების მწყობრიდან გამოსვლის დაზღვევა\n\n• ბიზნესის შეჩერებით / შეფერხებით გამოწვეული მიუღებელი შემოსავლის დაზღვევა\n\n• სამშენებლო რისკების დაზღვევა (CAR)"
          },
          {
            title: "ფინანსური და სპეციალური რისკების დაზღვევა",
            content: "• კომპლექსური საბანკო დაზღვევა (BBB)\n\n• ფინანსური გარანტიები\n\n• საბანკო გარანტიები\n\n• ტერორიზმისა და ომის რისკების დაზღვევა"
          },
          {
            title: "ტრანსპორტისა და ლოგისტიკის სფეროს დაზღვევა",
            content: "• გემის ძარის დაზღვევა (Hull & P&I)\n\n• ექსპედიტორის პასუხისმგებლობის დაზღვევა\n\n• გადამზიდავის პასუხისმგებლობის დაზღვევა (CMR)"
          },
          {
            title: "სპეციალიზებული დაზღვევები",
            content: "• სიცოცხლის დაზღვევა\n\n• უბედური შემთხვევის დაზღვევა\n\n• კრიტიკული დაავადებების დაზღვევა\n\n• აგროდაზღვევა\n\n• კლინიკური კვლევების დაზღვევა\n\n• სხვა სპეციალური რისკების დაზღვევა"
          }
        ]
      },
      "blog-1": {
        title: "რატომ არის დაზღვევა მნიშვნელოვანი დღეს?",
        date: "15 მარტი, 2026",
        author: "BIB Team",
        body: "თანამედროვე სამყაროში დაზღვევა წარმოადგენს ერთ-ერთ ყველაზე მნიშვნელოვან ფინანსურ ინსტრუმენტს, რომელიც ადამიანებსა და ბიზნესებს ეხმარება გაუთვალისწინებელი რისკების მართვაში. ყოველდღიურ ცხოვრებაში შეიძლება წარმოიშვას სხვადასხვა ტიპის შემთხვევა — ავტოსაგზაო ავარია, ჯანმრთელობის პრობლემა, ქონების დაზიანება ან ბიზნესის საქმიანობის შეფერხება. ასეთ სიტუაციებში დაზღვევა უზრუნველყოფს ფინანსურ დაცვას და ამცირებს მოულოდნელი ხარჯების გავლენას.\n\nდაზღვევის მთავარი მიზანია რისკის გადანაწილება. დაზღვევის მეშვეობით შესაძლებელი ხდება დიდი ფინანსური ზარალის თავიდან აცილება ან მისი მნიშვნელოვნად შემცირება. ამის შედეგად, როგორც ფიზიკურ პირებს, ისე კომპანიებს შეუძლიათ უფრო მშვიდად დაგეგმონ საკუთარი საქმიანობა და მომავალი.\n\nბიზნესისთვის დაზღვევა განსაკუთრებით მნიშვნელოვანია, რადგან ის იცავს კომპანიას ოპერაციული რისკებისგან, უზრუნველყოფს ფინანსურ სტაბილურობას და ხელს უწყობს საქმიანობის უწყვეტობას. სწორედ ამიტომ სწორად შერჩეული სადაზღვევო პოლისი წარმოადგენს მნიშვნელოვანი ფინანსური დაცვის მექანიზმს."
      },
      "blog-2": {
        title: "რა არის სადაზღვევო ბროკერი და რა როლი აქვს?",
        date: "18 მარტი, 2026",
        author: "BIB Team",
        body: "სადაზღვევო ბროკერი არის დამოუკიდებელი შუამავალი კლიენტსა და სადაზღვევო კომპანიას შორის. მისი მთავარი როლი არის კლიენტის ინტერესების დაცვა და ბაზარზე არსებული სხვადასხვა სადაზღვევო შეთავაზებიდან ყველაზე შესაბამისი ვარიანტის შერჩევა.",
        bodyExtra: "ბროკერი არ წარმოადგენს კონკრეტული სადაზღვევო კომპანიის ინტერესებს. ის თანამშრომლობს რამდენიმე სადაზღვევო კომპანიასთან და კლიენტს სთავაზობს სხვადასხვა ალტერნატივას. ამის შედეგად მომხმარებელი იღებს შესაძლებლობას შეადაროს პირობები, დაფარვის მოცულობა და ფასები.\n\nგარდა პოლისის შერჩევისა, სადაზღვევო ბროკერი ხშირად მონაწილეობს ზარალის ანაზღაურების პროცესშიც, რაც მომხმარებელს აძლევს მეტ გამჭვირვალობას და პროფესიულ მხარდაჭერას."
      },
      "blog-3": {
        title: "რატომ ჯობს დაზღვევა ბროკერის მეშვეობით?",
        date: "25 მარტი, 2026",
        author: "BIB Team",
        body: "დაზღვევის გაფორმება ბროკერის მეშვეობით მომხმარებელს აძლევს შესაძლებლობას მიიღოს უფრო ინფორმირებული და გააზრებული გადაწყვეტილება. ბროკერი წარმოადგენს კლიენტის ინტერესებს და ეხმარება მას ბაზარზე არსებული სხვადასხვა სადაზღვევო შეთავაზების შედარებაში.",
        bodyExtra: "ბროკერის დახმარებით მომხმარებელი იღებს პროფესიულ კონსულტაციას, პირობების მარტივ განმარტებას და დახმარებას პოლისის სწორად შერჩევაში.\n\nგარდა ამისა, ბროკერი ხშირად ეხმარება კლიენტს ზარალის ანაზღაურების პროცესშიც. ასეთ შემთხვევაში მომხმარებელს ჰყავს პარტნიორი, რომელიც იცავს მის ინტერესებს სადაზღვევო კომპანიასთან ურთიერთობისას."
      },
      "blog-4": {
        title: "სადაზღვევო ბროკერის როლი თანამედროვე ბიზნესში",
        date: "28 მარტი, 2026",
        author: "BIB Team",
        body: "თანამედროვე ბიზნეს გარემოში კომპანიები ყოველდღიურად აწყდებიან სხვადასხვა ტიპის რისკებს — ოპერაციულ, ფინანსურ, იურიდიულ და ტექნოლოგიურ. სწორედ ამიტომ დაზღვევა და რისკების მართვა გახდა ბიზნესის სტაბილურობის ერთ-ერთი მნიშვნელოვანი კომპონენტი.",
        bodyExtra: "სადაზღვევო ბროკერი წარმოადგენს დამოუკიდებელ პროფესიონალს, რომელიც ეხმარება კომპანიებს სწორად შეაფასონ საკუთარი რისკები და შეარჩიონ შესაბამისი სადაზღვევო გადაწყვეტები.\n\nდღეს ბევრ ქვეყანაში კომპანიების უმრავლესობა სწორედ ბროკერების მეშვეობით ახორციელებს დაზღვევას, რადგან ეს უზრუნველყოფს უფრო ობიექტურ არჩევანს, უკეთეს პირობებს და პროფესიულ კონსულტაციას."
      },
      "blog-5": {
        title: "როგორ ეხმარება ბროკერი კომპანიებს რისკების მართვაში?",
        date: "30 მარტი, 2026",
        author: "BIB Team",
        body: "რისკების მართვა თანამედროვე ბიზნესის ერთ-ერთი ყველაზე მნიშვნელოვანი ამოცანაა. ბროკერის ერთ-ერთი მთავარი ფუნქცია არის კომპანიის საქმიანობის ანალიზი და შესაძლო რისკების იდენტიფიცირება.",
        bodyExtra: "ბროკერი ეხმარება კომპანიებს შეიმუშაონ რისკების მართვის სტრატეგია. კორპორატიული სექტორისთვის განსაკუთრებით მნიშვნელოვანია: პასუხისმგებლობის დაზღვევა, ქონების დაზღვევა, ბიზნესის შეფერხების დაზღვევა და პროფესიული პასუხისმგებლობის დაზღვევა.\n\nბროკერის დახმარებით კომპანიები იღებენ არა მხოლოდ სადაზღვევო პროდუქტს, არამედ პროფესიულ კონსულტაციასაც."
      },
      "blog-6": {
        title: "სადაზღვევო ბროკერი vs სადაზღვევო აგენტი",
        date: "2 აპრილი, 2026",
        author: "BIB Team",
        body: "სადაზღვევო სფეროში ხშირად გვხვდება ორი მნიშვნელოვანი პროფესია — სადაზღვევო ბროკერი და სადაზღვევო აგენტი. მიუხედავად იმისა, რომ ორივე მონაწილეობს დაზღვევის პროცესში, მათი როლი განსხვავდება.",
        bodyExtra: "სადაზღვევო აგენტი წარმოადგენს კონკრეტული სადაზღვევო კომპანიის წარმომადგენელს. სადაზღვევო ბროკერი კი დამოუკიდებელი შუამავალია — ის თანამშრომლობს რამდენიმე სადაზღვევო კომპანიასთან და კლიენტს სთავაზობს სხვადასხვა ალტერნატივას.\n\nსწორედ ამიტომ ბევრი ბიზნესი და ორგანიზაცია უპირატესობას ანიჭებს ბროკერის მომსახურებას."
      },
      "blog-7": {
        title: "რატომ იზრდება სადაზღვევო ბროკერების როლი მსოფლიოში?",
        date: "5 აპრილი, 2026",
        author: "BIB Team",
        body: "ბოლო წლებში მსოფლიოში მნიშვნელოვნად გაიზარდა სადაზღვევო ბროკერების როლი. ბევრი კომპანია და კერძო მომხმარებელი დაზღვევის არჩევისას უპირატესობას ანიჭებს დამოუკიდებელ კონსულტაციას.",
        bodyExtra: "ერთ-ერთი მთავარი მიზეზი არის სადაზღვევო ბაზრის ზრდა და პროდუქტების მრავალფეროვნება. გარდა ამისა, თანამედროვე ბიზნეს გარემოში იზრდება რისკების რაოდენობა — კიბერუსაფრთხოება, კლიმატური ცვლილებები, გლობალური ლოგისტიკური რისკები.\n\nსაერთაშორისო კვლევების მიხედვით, ბევრ განვითარებულ ქვეყანაში სადაზღვევო პოლისების დიდი ნაწილი სწორედ ბროკერების მეშვეობით გაიცემა."
      },
    },
  },
  en: {
    nav: {
      company: "Company",
      products: "Products",
      blog: "Blog/News",
      contact: "Contact",
      cta: "Request Quote",
      langToggle: "GE",
      home: "Home",
    },
    companyDropdown: [
      { label: "About Us", slug: "about" },
      { label: "Mission", slug: "mission" },
      { label: "Team", slug: "team" },
      { label: "Why Insurance Broker", slug: "why-broker" },
    ],
    productsDropdown: [
      { label: "Auto Insurance", slug: "auto-insurance" },
      { label: "Property Insurance", slug: "property-insurance" },
      { label: "Travel Insurance", slug: "travel-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Cargo Insurance", slug: "cargo-insurance" },
      { label: "Additional Insurance", slug: "additional-insurance" },
    ],
    heroSlides: [
      { title: "The Result is in the Right Decision", subtitle: "Contact us and easily:", subtitlePrefix: "Contact us and easily:", subtitleItems: ["Get broker consultation", "Compare offers from different insurance companies", "Purchase insurance online"] },
      { title: "Reliable Protection for Business", subtitle: "Our professional team will take care of your financial risks with the best conditions." },
      { title: "Best Corporate Insurance", subtitle: "We will help you choose the most optimal insurance package and save time." },
      { title: "Peaceful and Secure Future", subtitle: "Individual approach to each client and constant support during insurance events." },
      { title: "Experience You Can Trust", subtitle: "Years of experience in the Georgian insurance market for your comfort." },
      { title: "Right Choice — Reliable Protection", subtitle: "BIB offers full insurance consultation and loss process management." },
    ],
    heroCtaPrimary: "Request Quote",
    heroCtaSecondary: "Learn more ↓",
    servicesTitle: "Expertise in insurance, risk management and loss adjustment",
    servicesSubheading: "",
    services: [
      {
        num: "01",
        title: "Insurance Consultation",
        body: "",
        bodyItems: [
          "Assessment of the client's operations and potential risks identifies the appropriate insurance needs.",
          "Analysis of available market offers ensures informed decision-making and a comprehensive insurance solution.",
        ],
      },
      {
        num: "02",
        title: "Negotiation & Placement",
        body: "",
        bodyItems: [
          "Negotiating with insurance companies and comparing offers ensures obtaining optimal conditions.",
          "Detailed analysis and accurate risk presentation allow for the best coverage at a competitive price.",
        ],
      },
      {
        num: "03",
        title: "Loss Management",
        body: "",
        bodyItems: [
          "Full management of the process in the event of a loss is essential for receiving compensation on time and in full.",
          "Preparation of documentation and coordination of communication with the insurance company ensures effective settlement.",
        ],
      },
      {
        num: "04",
        title: "Reinsurance",
        body: "",
        bodyItems: [
          "Reinsurance is an important mechanism for distributing risk.",
          "Risk analysis and cooperation with international markets ensures the selection of an optimal reinsurance structure and maintenance of financial stability.",
        ],
      },
    ],
    productsTitle: "Our Products",
    productAccordion: [
      { title: "Cargo Insurance", desc: "Protect your cargo from damage, loss, and other unforeseen risks during transportation.", slug: "cargo-insurance" },
      { title: "Health Insurance", desc: "Access quality medical services and financial protection from health-related expenses.", slug: "health-insurance" },
      { title: "Property Insurance", desc: "Protects against financial losses caused by unforeseen events.", slug: "property-insurance" },
      { title: "Travel Insurance", desc: "Travel with confidence — insurance covers medical expenses abroad and other travel-related risks.", slug: "travel-insurance" },
    ],
    productCtaLabel: "Request Quote",
    partnersTitle: "Leading Insurance Partner Companies",
    partners: ["Aldagi", "Imedi L", "TBC Insurance", "ARDI", "Irao", "Unison", "GPI", "Alfa"],
    clientsTitle: "Companies That Trust Us",
    clients: ["Bene Group", "Bene Comport", "Bene Exclusive", "Kairos", "Dagi", "Albioni", "Wizer"],
    ctaSectionTitle: "Leave a Message",
    ctaSectionSubtitle: "Contact us — we will guide you to the right solution",
    blogTitle: "Blog / News",
    blogSubtitle: "Explore useful information about insurance, risk management and insurance solutions.",
    formLabels: {
      name: "Name",
      phone: "Phone",
      message: "Message",
      consent: "I agree that my data will be used to contact me",
      submit: "Send →",
      success: "✅ Your message has been received. We will contact you soon.",
      fillForm: "Leave a Message",
      requestConsultation: "Request Consultation",
      required: "Required field",
      insuranceType: "Choose insurance type",
      insuranceTypePlaceholder: "— Choose —",
    },
    footerAbout: "Bene Insurance Brokerage — an independent insurance brokerage company that helps clients compare offers from various insurance companies and choose the best insurance solution.",
    footerQuickLinks: [
      { label: "About Us", slug: "about" },
      { label: "Mission", slug: "mission" },
      { label: "Team", slug: "team" },
      { label: "Why Insurance Broker", slug: "why-broker" },
      { label: "Blog / News", slug: "blog" },
      { label: "FAQ", slug: "faq" },
    ],
    footerProducts: [
      { label: "Auto Insurance", slug: "auto-insurance" },
      { label: "Property Insurance", slug: "property-insurance" },
      { label: "Travel Insurance", slug: "travel-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Cargo Insurance", slug: "cargo-insurance" },
      { label: "Additional Insurance", slug: "additional-insurance" },
    ],
    footerContact: {
      address: "Tbilisi, P. Kavtaradze St. 60",
      phone: "+995 599 89 77 85",
      email: "info@bib.com.ge",
    },
    footerBottom: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© 2026 BIB | Bene Insurance Brokerage. All rights reserved.",
    },
    notFoundTitle: "Page Not Found",
    notFoundSubtitle: "Unfortunately, this page does not exist.",
    notFoundBack: "Return to Home",
    contactPageTitle: "Contact",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to the most common questions about insurance.",
    faq: [
      {
        q: "What are the advantages of purchasing insurance through a broker?",
        a: "An insurance broker acts as an independent advisor who works in the best interests of the client. The broker compares offers from different insurance companies and helps the client choose the insurance solution that best fits their specific needs.\n\nWith the support of a broker, clients receive professional advice, clear explanations of policy terms, and assistance throughout the process — from selecting the appropriate policy to support during the claims settlement process.",
      },
      {
        q: "How can I receive an insurance quote?",
        a: "To receive an insurance quote, you can complete the relevant form on the website or contact the company directly. After receiving the request, the necessary information is collected and available insurance offers in the market are analyzed. Based on this process, the client receives an appropriate insurance proposal.",
      },
      {
        q: "Is it possible to compare offers from several insurance companies?",
        a: "Yes. An insurance broker works with multiple insurance companies and can provide offers from different insurers. This allows clients to compare terms, coverage, and pricing in order to make an informed decision and select the insurance solution that best suits their needs.",
      },
      {
        q: "Does the broker's service involve additional costs?",
        a: "The broker's services are not associated with additional costs for the client. For clients, this service is completely free of charge. The broker's main objective is to assist clients in selecting the most suitable insurance solution and to provide professional support throughout the process.",
      },
    ],
    privacyTitle: "Privacy Policy",
    privacySections: [
      { heading: "General Information", body: "The company respects the privacy of its users and ensures the protection of personal data in accordance with applicable legislation.\n\nBy using this website, the user confirms that they have read and agree to this Privacy Policy.\n\nThe company processes personal data in accordance with applicable legislation and international standards, including the principles of the General Data Protection Regulation (GDPR)." },
      { heading: "Data Controller", body: "The data controller responsible for processing personal data is:\nBene Insurance Brokerage\nTbilisi, Georgia\nEmail: info@bib.com.ge\n\nThe company is responsible for ensuring the secure processing of personal data." },
      { heading: "What Data We Collect", body: "When using the website, the following information may be collected:", items: ["First and last name", "Email address", "Telephone number", "Personal identification number (for individuals)", "Company identification code (for legal entities)", "IP address, device type, browser information, Cookies"] },
      { heading: "How We Use This Data", body: "The collected information may be used for the following purposes:", items: ["User registration and account management", "Providing insurance products and services", "Communication with users", "Improvement of services", "Compliance with legal obligations"] },
      { heading: "Data Sharing", body: "Personal data may be shared with third parties only when necessary for the provision of services. Such parties may include insurance companies, technology service providers, or government authorities when required by law.\n\nIn all cases, the company ensures appropriate data protection and confidentiality." },
      { heading: "User Rights", body: "Users have the right to:", items: ["Access information about their personal data", "Request correction or update of their data", "Request deletion of their data where permitted by law", "Request restriction of data processing"] },
      { heading: "Cookies Policy", body: "The website uses cookies to improve the user experience — for website functionality, remembering preferences, and usage analytics. Users can modify cookie settings at any time through their browser." },
      { heading: "Data Security", body: "The company implements appropriate technical and organizational measures to protect personal data, including data encryption, system security mechanisms, and access control." },
      { heading: "Policy Updates", body: "The company reserves the right to update this Privacy Policy from time to time. The updated version will be published on the website." },
    ],
    termsTitle: "Terms of Service",
    termsSections: [
      { heading: "General Provisions", body: "These Terms and Conditions govern the use of the website and the services available through the platform.\n\nBy using the website, the user confirms that they have read and agreed to these Terms and Conditions." },
      { heading: "Description of Services", body: "The website operates as an insurance brokerage platform through which users can obtain information about insurance products, compare offers, and receive related services.\n\nInformation provided on the website is for general informational purposes only and does not constitute an insurance contract." },
      { heading: "User Obligations", body: "Users agree to:", items: ["Use the website in compliance with applicable laws", "Provide accurate information", "Refrain from using the platform for unlawful purposes"] },
      { heading: "Intellectual Property", body: "All materials available on the website, including text, design, logos, and other content, are the intellectual property of the company and are protected by applicable laws." },
      { heading: "Limitation of Liability", body: "The company shall not be responsible for decisions made by users based on the information available on the website.\n\nInsurance terms and coverage are determined by the respective insurance companies and specified in the insurance contract." },
      { heading: "Changes to Terms", body: "The company reserves the right to update or modify these Terms and Conditions at any time. The updated version will be published on the website." },
      { heading: "Governing Law", body: "These Terms and Conditions are governed by the laws of Georgia." },
    ],
    breadcrumbs: { home: "Home", products: "Products", company: "Company", blog: "Blog/News" },
    accordionLabels: { covers: "What it covers", features: "Key features", consider: "What to consider" },
    relatedTitle: "Related Products",
    pages: {
      about: {
        title: "About Us",
        hero: "BIB | Bene Insurance Brokerage — Independent Insurance Brokerage Company",
        body: "BIB | Bene Insurance Brokerage is an independent insurance brokerage company founded in 2026, operating with the support of a strong and well-established market partner — <a href=\"https://benegroup.ge/\" target=\"_blank\" class=\"text-primary hover:underline font-medium\">Bene Group</a>. We do not represent the interests of any single insurance company; instead, we work with multiple partners on transparent terms to identify the most suitable insurance solutions for our clients.\n\nOur team brings together over 22 years of experience in finance and business sectors, providing us with deep market knowledge and a practical, solution-oriented approach for our clients. We simplify the insurance process by comparing offers, clearly explaining policy terms, and providing clients with a single insurance advisor for all their insurance needs.\n\nIn the event of a claim, we manage the entire compensation process — from documentation to the final settlement. Our goal is to ensure that clients receive professional services tailored to their specific needs.",
        cta: "დაგვიკავშირდით",
      },
      mission: {
        title: "Our Mission",
        body: "Making insurance simple and transparent\nWe compare insurance offers across the market and help clients make informed decisions.\n\nTo protect our clients' interests\nAs an independent broker, we work on the client's side to identify the most suitable solutions for their needs.\n\nTo simplify complex processes through expertise and technology\nWe combine professional knowledge with a modern digital platform to deliver fast, clear, and efficient insurance services.",
      },
      team: {
        title: "Team",
        body: "BIB – Bene Insurance Brokerage operates with the support of its strategic partner — <a href=\"https://benegroup.ge/\" target=\"_blank\" class=\"text-primary hover:underline font-medium\">Bene Group</a>, a well-established company with a strong presence across multiple business sectors. Building on this foundation, the company is expanding its activities into the insurance brokerage market.\n\nThe company's partners bring together 22 years of professional experience in banking and insurance, including extensive expertise in sales and corporate client management. This experience enables us to provide clients with practical, professional, and well-informed insurance solutions.",
      },
      "why-broker": {
        title: "Why an Insurance Broker",
        body: "An insurance broker acts as an independent advisor, representing the interests of the client rather than any single insurance company. Brokers compare offers from multiple insurers and help clients choose the insurance solution that best fits their needs.\n\nWith the support of a broker, clients receive clear explanations of policy conditions, professional advice, and a single point of contact for all insurance-related matters.\n\nIn the event of a claim, the broker assists in managing the compensation process and represents the client's interests when dealing with the insurance company. This makes the entire insurance experience simpler, more transparent, and more efficient.",
      },
      "auto-insurance": {
        title: "Auto Insurance",
        intro: "Auto insurance protects your vehicle from financial losses caused by accidents, damage, theft, or other unexpected events. The policy helps cover repair costs or compensation according to the terms of the insurance coverage.",
        covers: ["Damage caused by road accidents", "Vehicle theft", "Fire, explosion, or other accidental events", "Natural disasters such as storms, hail, or flooding"],
        features: ["Comprehensive or partial coverage options", "Third-party liability coverage", "Fast claim assessment and settlement", "Additional services such as towing or roadside assistance"],
        consider: ["Policy terms and exclusions", "Deductible terms", "Coverage territory", "Insured value of the vehicle"],
        cta: "დაგვიკავშირდით",
      },
      "property-insurance": {
        title: "Property Insurance",
        intro: "Property insurance protects you from financial losses caused by unexpected events. The policy provides compensation in case of damage to or destruction of the insured property, in accordance with the terms and conditions of the insurance policy.",
        covers: ["Buildings and structures", "Offices and commercial spaces", "Industrial and warehouse facilities", "Furniture, equipment, and other business assets"],
        features: ["Insurance solutions tailored to your needs", "Broad coverage options for various risks", "Comparison of offers from different insurance companies", "Professional support from policy selection to claim handling"],
        consider: ["Insured value and the actual value of the property", "Covered risks and policy exclusions", "Deductible conditions", "Security and safety measures of the property"],
        cta: "დაგვიკავშირდით",
      },
      "travel-insurance": {
        title: "Travel Insurance",
        intro: "Travel insurance provides financial protection against unexpected events that may occur during a trip abroad. The policy helps cover medical expenses, emergency assistance, and other travel-related risks.",
        covers: ["Medical expenses abroad", "Emergency medical treatment", "Medical transportation and repatriation", "Loss or damage of luggage", "Trip cancellation or interruption (according to policy terms)"],
        features: ["Coverage for travel to various countries worldwide", "Short-term and long-term travel policies", "Individual and family insurance options", "24/7 international assistance service"],
        consider: ["Coverage territory", "Policy limits and coverage conditions", "Exclusions and deductible terms", "Travel duration and destination country"],
        cta: "დაგვიკავშირდით",
      },
      "health-insurance": {
        title: "Health Insurance",
        intro: "Health insurance helps protect you from the financial burden of medical expenses and provides access to quality healthcare services. The policy covers various types of medical treatment according to the terms of coverage and supports timely access to necessary care.",
        covers: ["Outpatient medical services", "Inpatient hospital treatment", "Doctor consultations and diagnostic tests", "Surgical procedures and medical treatments", "Partial or full coverage of medications (according to policy terms)"],
        features: ["Individual and corporate health insurance plans", "Access to a wide network of medical providers", "Comparison of offers from different insurance companies", "Professional guidance in selecting the right policy"],
        consider: ["Coverage limits of the policy", "Co-payment conditions", "Exclusions and restrictions", "Network of healthcare providers"],
        cta: "დაგვიკავშირდით",
      },
      "cargo-insurance": {
        title: "Cargo Insurance",
        intro: "Cargo insurance provides financial protection against unexpected risks that may occur during the transportation of goods. The policy covers damage, loss, or destruction of cargo during transit according to the insurance terms.",
        covers: ["Damage to cargo during transportation", "Loss or destruction of goods", "Losses resulting from transportation accidents", "Damage caused by natural disasters", "Losses during loading and unloading operations"],
        features: ["Coverage for both international and domestic shipments", "Protection for cargo transported by land, sea, or air", "Insurance conditions based on international standards", "Professional support from policy selection to claim handling"],
        consider: ["Type and value of the cargo", "Transportation route and method", "Covered risks and policy exclusions", "Packaging and transportation conditions"],
        cta: "დაგვიკავშირდით",
      },
      "additional-insurance": {
        title: "Additional Insurance Solutions",
        body: "BIB offers various specialized insurance products for your business's unique needs.",
        pageAccordion: [
          {
            title: "Liability Insurance",
            content: "• General Civil Liability Insurance\n\n• Professional Liability Insurance\n\n• Product Liability Insurance\n\n• Employer's Liability Insurance\n\n• Directors and Officers Liability Insurance (D&O)\n\n• Forwarder's Liability Insurance\n\n• Carrier's Liability Insurance (CMR)\n\n• Terminal Liability Insurance"
          },
          {
            title: "Business and Infrastructure Insurance",
            content: "• Machinery Breakdown Insurance\n\n• Business Interruption Insurance\n\n• Construction All Risks Insurance (CAR)"
          },
          {
            title: "Financial and Special Risks Insurance",
            content: "• Bankers Blanket Bond (BBB)\n\n• Financial Guarantees\n\n• Bank Guarantees\n\n• Terrorism and War Risks Insurance"
          },
          {
            title: "Transport and Logistics Insurance",
            content: "• Hull & Machinery Insurance (Hull & P&I)\n\n• Forwarder's Liability Insurance\n\n• Carrier's Liability Insurance (CMR)"
          },
          {
            title: "Specialized Insurance",
            content: "• Life Insurance\n\n• Personal Accident Insurance\n\n• Critical Illness Insurance\n\n• Agro Insurance\n\n• Clinical Trials Insurance\n\n• Other Special Risks Insurance"
          }
        ]
      },
      "blog-1": {
        title: "Why is Insurance Important Today?",
        date: "March 15, 2026",
        author: "BIB Team",
        body: "In the modern world, insurance is one of the most important financial tools that helps individuals and businesses manage unforeseen risks. In everyday life, various situations may occur — road accidents, health problems, property damage, or business interruptions. In such cases, insurance provides financial protection and reduces the impact of unexpected expenses.\n\nThe main purpose of insurance is risk sharing. Through insurance, it becomes possible to avoid major financial losses or significantly reduce their impact. As a result, both individuals and companies can plan their activities and future with greater confidence.\n\nInsurance is especially important for businesses because it protects companies from operational risks, ensures financial stability, and supports business continuity. That is why a properly selected insurance policy is an important financial protection mechanism."
      },
      "blog-2": {
        title: "What is an Insurance Broker and What Role Do They Play?",
        date: "March 18, 2026",
        author: "BIB Team",
        body: "An insurance broker is an independent intermediary between the client and the insurance company. The broker's primary role is to protect the client's interests and select the most suitable option from the various insurance offers available in the market.",
        bodyExtra: "A broker does not represent the interests of a specific insurance company. Instead, they work with multiple insurance providers and offer clients several alternatives. As a result, clients have the opportunity to compare policy conditions, coverage scope, and prices in order to make an informed decision.\n\nIn addition to selecting the policy, an insurance broker often participates in managing the entire insurance process — from initial consultation to assisting with the claims settlement process. This is why working with a broker provides greater transparency and professional support for clients.",
      },
      "blog-3": {
        title: "Why is it Better to Purchase Insurance Through a Broker?",
        date: "March 25, 2026",
        author: "BIB Team",
        body: "Purchasing insurance through a broker allows clients to make a more informed and well-considered decision. The broker represents the client's interests and helps compare different insurance offers available in the market.",
        bodyExtra: "With the support of a broker, clients receive professional consultation, clear explanations of policy conditions, and assistance in selecting the right insurance coverage. This is especially important when evaluating offers from several insurance companies.\n\nIn addition, brokers often assist clients during the claims settlement process. In such cases, the client has a partner who protects their interests in communication with the insurance company and helps ensure the process is handled more efficiently.",
      },
      "blog-4": {
        title: "The Role of an Insurance Broker in Modern Business",
        date: "March 28, 2026",
        author: "BIB Team",
        body: "In today's business environment, companies face various types of risks on a daily basis — operational, financial, legal, and technological. Therefore, insurance and risk management have become essential components of business stability. In this process, insurance brokers play an important role.",
        bodyExtra: "An insurance broker is an independent professional who helps companies assess their risks and select appropriate insurance solutions. Brokers work to protect the interests of the client rather than those of the insurance company. Their main task is to compare available market offers and select a policy that best matches the company's needs.\n\nFor businesses, particularly important types of insurance include property insurance, liability insurance, business interruption insurance, and professional liability insurance. Brokers assist companies in selecting these products and ensure that the coverage effectively protects the company's key risks.\n\nToday, in many countries, the majority of companies arrange insurance through brokers, as this approach ensures more objective choices, better terms, and professional consultation.",
      },
      "blog-5": {
        title: "How Do Brokers Help Companies Manage Risks?",
        date: "March 30, 2026",
        author: "BIB Team",
        body: "Risk management is one of the most important tasks in modern business. Companies constantly strive to reduce financial losses and protect their assets. In this process, insurance brokers often become a key partner.",
        bodyExtra: "One of the broker's main functions is to analyze a company's activities and identify potential risks. For example, a manufacturing company may face risks related to property damage or production interruption, while a logistics company may face risks related to cargo loss or liability.\n\nBrokers help companies develop risk management strategies that may include various types of insurance. This process involves risk assessment, comparison of insurance conditions, and selection of the most appropriate policy.\n\nFor the corporate sector, particularly important types of insurance include liability insurance, property insurance, business interruption insurance, and professional liability insurance. With the support of a broker, companies receive not only insurance products but also professional consultation, helping them manage their risks more effectively.",
      },
      "blog-6": {
        title: "Insurance Broker vs Insurance Agent – What is the Difference?",
        date: "April 2, 2026",
        author: "BIB Team",
        body: "In the insurance industry, two important professions are commonly encountered — insurance brokers and insurance agents. Although both participate in the insurance process, their roles and interests differ.",
        bodyExtra: "An insurance agent represents a specific insurance company. Their main task is to offer customers the insurance products of the company they represent.\n\nAn insurance broker, on the other hand, is an independent intermediary. Brokers are not tied to a single insurance company and work to protect the interests of the client. They cooperate with multiple insurance companies and provide clients with several alternatives.\n\nBecause of this difference, clients working with brokers can compare different insurance offers and choose the most suitable option. For this reason, many businesses and organizations prefer to work with brokers, as this approach provides a wider choice and professional consultation.",
      },
      "blog-7": {
        title: "Why is the Role of Insurance Brokers Growing Worldwide?",
        date: "April 5, 2026",
        author: "BIB Team",
        body: "In recent years, the role of insurance brokers has grown significantly worldwide. Many companies and individual clients prefer independent advice when choosing insurance rather than relying on the offer of a single insurance company.",
        bodyExtra: "One of the main reasons for this trend is the growth of the insurance market and the increasing diversity of insurance products. Today, companies can choose from many different types of coverage, which often makes decision-making more complex. This is where brokers become essential, helping clients simplify the process.\n\nIn addition, modern businesses face a growing number of risks — cybersecurity threats, climate-related risks, global logistics disruptions, and more. Under such conditions, companies require professional advice to properly assess and manage their risks.\n\nAccording to international research, in many developed countries a large portion of insurance policies are arranged through brokers. This trend is particularly visible in the corporate insurance sector.",
      },
    },
  },
};

export default BIB_DATA;
