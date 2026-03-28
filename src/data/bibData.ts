export type Lang = "ge" | "en";

export interface HeroSlide {
  title: string;
  subtitle: string;
}

export interface ProductAccordionItem {
  title: string;
  desc: string;
  bullets: string[];
  slug: string;
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
  date?: string;
  author?: string;
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
      cta: "შეთავაზების მოთხოვნა",
      langToggle: "EN",
      home: "მთავარი",
    },
    companyDropdown: [
      { label: "ჩვენს შესახებ", slug: "about" },
      { label: "მისია", slug: "mission" },
      { label: "გუნდი", slug: "team" },
      { label: "რატომ ბროკერი", slug: "why-broker" },
    ],
    productsDropdown: [
      { label: "ავტოდაზღვევა", slug: "auto-insurance" },
      { label: "ქონების დაზღვევა", slug: "property-insurance" },
      { label: "სამოგზაურო დაზღვევა", slug: "travel-insurance" },
      { label: "ჯანმრთელობის დაზღვევა", slug: "health-insurance" },
      { label: "ტვირთის დაზღვევა", slug: "cargo-insurance" },
    ],
    heroSlides: [
      { title: "შედეგი სწორ გადაწყვეტილებაშია", subtitle: "მარტივად მიიღეთ ბროკერის პროფესიული კონსულტაცია. შეადარეთ სხვადასხვა სადაზღვევო კომპანიის შეთავაზებები." },
      { title: "საიმედო დაცვა ბიზნესისთვის", subtitle: "ჩვენი პროფესიონალთა გუნდი იზრუნებს თქვენს ფინანსურ რისკებზე საუკეთესო პირობებით." },
      { title: "საუკეთესო კორპორატიული დაზღვევა", subtitle: "ჩვენ დაგეხმარებით შეარჩიოთ ყველაზე ოპტიმალური სადაზღვევო პაკეტი და დაზოგოთ დრო." },
      { title: "მშვიდი და უსაფრთხო მომავალი", subtitle: "ინდივიდუალური მიდგომა თითოეულ კლიენტთან და მუდმივი მხარდაჭერა სადაზღვევო შემთხვევისას." },
      { title: "გამოცდილება რომელსაც ენდობით", subtitle: "მრავალწლიანი გამოცდილება ქართულ სადაზღვევო ბაზარზე თქვენი კომფორტისთვის." },
      { title: "სწორი არჩევანი — საიმედო დაცვა", subtitle: "BIB გთავაზობთ სრულ სადაზღვევო კონსულტაციას და ზარალის პროცესის მართვას ბოლომდე." },
    ],
    heroCtaPrimary: "შეთავაზების მოთხოვნა",
    heroCtaSecondary: "გაიგეთ მეტი ↓",
    servicesTitle: "ჩვენი სერვისები",
    servicesSubheading: "ექსპერტიზა დაზღვევაში, რისკების მართვასა და ზარალის რეგულირებაში",
    services: [
      { num: "01", title: "კონსულტაცია", body: "რისკების შეფასება და ბაზრის ანალიზი" },
      { num: "02", title: "განთავსება", body: "სადაზღვევო შეთავაზებების შედარება და ოპტიმალური პირობების მოძიება" },
      { num: "03", title: "ზარალის მართვა", body: "ანაზღაურების პროცესის სრული მართვა და კომუნიკაცია" },
      { num: "04", title: "გადაზღვევა", body: "რისკების გადანაწილება საერთაშორისო ბაზრებზე" },
    ],
    productsTitle: "ჩვენი პროდუქტები",
    productAccordion: [
      {
        title: "ავტოდაზღვევა",
        desc: "იცავს ავტომობილს ფინანსური დანაკარგებისგან ავტოსაგზაო შემთხვევის, დაზიანების ან ქურდობის შემთხვევაში.",
        bullets: ["ავტოსაგზაო შემთხვევა", "ქურდობა", "ხანძარი", "სტიქიური მოვლენები"],
        slug: "auto-insurance",
      },
      {
        title: "ქონების დაზღვევა",
        desc: "იცავს გაუთვალისწინებელი მოვლენებით გამოწვეული ფინანსური ზარალისგან.",
        bullets: ["შენობა-ნაგებობები", "ოფისები", "საწარმოო ინფრასტრუქტურა", "ფართო რისკი"],
        slug: "property-insurance",
      },
      {
        title: "სამოგზაურო დაზღვევა",
        desc: "ფინანსური დაცვა მოგზაურობის დროს წარმოქმნილი გაუთვალისწინებელი შემთხვევებისგან.",
        bullets: ["სამედიცინო ხარჯები", "გადაუდებელი დახმარება", "ბარგის დაკარგვა", "ნებისმიერი ქვეყანა"],
        slug: "travel-insurance",
      },
      {
        title: "ჯანმრთელობის დაზღვევა",
        desc: "ფინანსური დაცვა სამედიცინო მომსახურების ხარჯებისგან.",
        bullets: ["ამბულატორიული", "სტაციონარი", "ოპერაციები", "მედიკამენტები"],
        slug: "health-insurance",
      },
      {
        title: "ტვირთის დაზღვევა",
        desc: "ფინანსური დაცვა ტვირთის ტრანსპორტირებისას წარმოქმნილი რისკებისგან.",
        bullets: ["დაზიანება", "დაკარგვა", "სტიქიური მოვლენები", "საერთაშორისო"],
        slug: "cargo-insurance",
      },
    ],
    productCtaLabel: "მოითხოვე შეთავაზება",
    partnersTitle: "პარტნიორი წამყვანი სადაზღვეო კომპანიები",
    partners: ["Aldagi", "Imedi L", "TBC Insurance", "ARDI", "Irao", "Unison", "GPI", "Alfa"],
    clientsTitle: "კომპანიები რომლებსაც სჯერათ ჩვენი",
    clients: ["Bene Group", "Bene Comport", "Bene Exclusive", "Kairos", "Dagi", "Albioni", "Wizer"],
    ctaSectionTitle: "შეთავაზების მოთხოვნა",
    ctaSectionSubtitle: "დაგვიკავშირდით — ჩვენ მიგიყვანთ სწორ გადაწყვეტამდე",
    blogTitle: "ბლოგი / სიახლეები",
    blogSubtitle: "გაეცანით სასარგებლო ინფორმაციას დაზღვევის, რისკების მართვისა და სადაზღვევო გადაწყვეტილებების შესახებ.",
    formLabels: {
      name: "სახელი",
      phone: "ტელეფონი",
      message: "შეტყობინება",
      consent: "ვეთანხმები, რომ ჩემი მონაცემები გამოყენებულ იქნას ჩემთან დასაკავშირებლად",
      submit: "გაგზავნა →",
      success: "✅ თქვენი შეტყობინება მიღებულია. მალე დაგიკავშირდებით.",
      fillForm: "შეავსე ფორმა",
      requestConsultation: "მოითხოვეთ კონსულტაცია",
      required: "სავალდებულო ველი",
      insuranceType: "აირჩიეთ სადაზღვევო შეთავაზება",
      insuranceTypePlaceholder: "— აირჩიეთ —",
    },
    footerAbout: "Bene Insurance Brokerage — დამოუკიდებელი სადაზღვევო საბროკერო კომპანია, რომელიც ეხმარება კლიენტებს შერჩეონ საუკეთესო დაზღვევა.",
    footerQuickLinks: [
      { label: "ჩვენს შესახებ", slug: "about" },
      { label: "მისია", slug: "mission" },
      { label: "გუნდი", slug: "team" },
      { label: "რატომ ბროკერი", slug: "why-broker" },
      { label: "ბლოგი", slug: "blog" },
    ],
    footerProducts: [
      { label: "ავტოდაზღვევა", slug: "auto-insurance" },
      { label: "ქონების დაზღვევა", slug: "property-insurance" },
      { label: "სამოგზაურო დაზღვევა", slug: "travel-insurance" },
      { label: "ჯანმრთელობის დაზღვევა", slug: "health-insurance" },
      { label: "ტვირთის დაზღვევა", slug: "cargo-insurance" },
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
    breadcrumbs: { home: "მთავარი", products: "პროდუქტები", company: "კომპანია", blog: "ბლოგი/სიახლეები" },
    accordionLabels: { covers: "რას აზღვევს", features: "ძირითადი მახასიათებლები", consider: "რა უნდა გავითვალისწინოთ" },
    relatedTitle: "დაკავშირებული პროდუქტები",
    pages: {
      about: {
        title: "ჩვენს შესახებ",
        hero: "BIB | Bene Insurance Brokerage — დამოუკიდებელი სადაზღვევო საბროკერო კომპანია",
        body: "BIB | Bene Insurance Brokerage — დამოუკიდებელი სადაზღვევო საბროკერო კომპანია, დაარსებული 2026 წელს, რომელიც ოპერირებს Bene Group-ის მხარდაჭერით. ჩვენ არ წარმოვადგენთ არცერთი კონკრეტული სადაზღვევო კომპანიის ინტერესს — ვმუშაობთ მრავალ პარტნიორთან გამჭვირვალე პირობებში. ჩვენი გუნდი აერთიანებს ბიზნეს სფეროში 22-წლიან გამოცდილებას. ვადარებთ ბაზარზე არსებულ შეთავაზებებს, ვხსნით პირობებს და კლიენტს ვთავაზობთ ერთ საკონტაქტო სადაზღვევო მრჩეველს. ზარალის შემთხვევაში ვმართავთ ანაზღაურების პროცესს სრულად.",
        cta: "მოითხოვე შეთავაზება",
      },
      mission: {
        title: "მისია",
        body: "ჩვენი მისიაა კლიენტებს შევთავაზოთ მაღალი ხარისხის სადაზღვევო საბროკერო მომსახურება, რომელიც დაფუძნებულია პროფესიონალიზმზე, გამჭვირვალობასა და კლიენტის ინტერესების პრიორიტეტულობაზე.",
      },
      team: {
        title: "გუნდი",
        body: "BIB — Bene Insurance Brokerage ოპერირებს სტრატეგიული პარტნიორის Bene Group-ის მხარდაჭერით. კომპანიის პარტნიორები აერთიანებენ 22-წლიან პროფესიულ გამოცდილებას ბანკინგსა და დაზღვევაში, მათ შორის გაყიდვებისა და კორპორატიული კლიენტების მართვის მიმართულებით. ჩვენი გუნდი მუშაობს იმისთვის, რომ თითოეული კლიენტი მიიღოს საუკეთესო მომსახურება და პროფესიული მხარდაჭერა.",
      },
      "why-broker": {
        title: "რატომ სადაზღვევო ბროკერი",
        body: "სადაზღვევო ბროკერი არის დამოუკიდებელი პროფესიონალი, რომელიც მუშაობს კლიენტის ინტერესებისთვის და არა სადაზღვევო კომპანიისთვის. ბროკერი შეისწავლის თქვენს საჭიროებებს, შეადარებს სხვადასხვა კომპანიის შეთავაზებებს და შეგირჩევთ ოპტიმალურ პროდუქტს საუკეთესო ფასად.",
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
        cta: "მოითხოვე შეთავაზება",
      },
      "property-insurance": {
        title: "ქონების დაზღვევა",
        intro: "ქონების დაზღვევა იცავს თქვენს უძრავ და მოძრავ ქონებას ხანძრის, სტიქიური უბედურების, ქურდობის და სხვა რისკებისგან.",
        covers: ["ხანძარი და აფეთქება", "სტიქიური მოვლენები (მიწისძვრა, წყალდიდობა)", "ქურდობა და ვანდალიზმი", "წყლის დაზიანება"],
        features: ["საცხოვრებელი და კომერციული ქონების დაზღვევა", "მოძრავი ქონების დაფარვა", "ბიზნეს-შეფერხების დაზღვევა", "ინდივიდუალური პირობები"],
        consider: ["ქონების რეალური ღირებულება", "რისკების გეოგრაფია", "ფრანშიზის ოდენობა", "დამატებითი დაფარვები"],
        cta: "მოითხოვე შეთავაზება",
      },
      "travel-insurance": {
        title: "სამოგზაურო დაზღვევა",
        intro: "სამოგზაურო დაზღვევა უზრუნველყოფს თქვენს დაცვას მოგზაურობისას — სამედიცინო ხარჯების, ბარგის დაკარგვის და მოგზაურობის გაუქმების შემთხვევაში.",
        covers: ["სამედიცინო ხარჯები საზღვარგარეთ", "სამედიცინო ევაკუაცია", "ბარგის დაკარგვა ან დაგვიანება", "მოგზაურობის გაუქმება ან შეფერხება"],
        features: ["მსოფლიოს ნებისმიერ ქვეყანაში მოქმედება", "24/7 საგანგებო დახმარების ხაზი", "სწრაფი პოლისის გაფორმება ონლაინ", "ოჯახური და ჯგუფური ფასდაკლებები"],
        consider: ["მოგზაურობის მიმართულება და ხანგრძლივობა", "სამედიცინო დაფარვის ლიმიტი", "სპორტული აქტივობების დაფარვა", "არსებული ჯანმრთელობის მდგომარეობა"],
        cta: "მოითხოვე შეთავაზება",
      },
      "health-insurance": {
        title: "ჯანმრთელობის დაზღვევა",
        intro: "ჯანმრთელობის დაზღვევა უზრუნველყოფს სამედიცინო ხარჯების დაფარვას და ხელმისაწვდომ ჯანდაცვას თქვენთვის და თქვენი ოჯახისთვის.",
        covers: ["ამბულატორიული მკურნალობა", "სტაციონარული მკურნალობა და ქირურგია", "მედიკამენტების ხარჯები", "პროფილაქტიკური გამოკვლევები"],
        features: ["ინდივიდუალური და კორპორატიული პროგრამები", "ფართო სამედიცინო ქსელი", "სტომატოლოგიური და ოფთალმოლოგიური დაფარვა", "ონლაინ კონსულტაცია"],
        consider: ["ასაკობრივი შეზღუდვები", "წინასწარ არსებული დაავადებები", "ლოდინის პერიოდები", "წლიური ლიმიტები"],
        cta: "მოითხოვე შეთავაზება",
      },
      "cargo-insurance": {
        title: "ტვირთის დაზღვევა",
        intro: "ტვირთის დაზღვევა იცავს თქვენს საქონელს ტრანსპორტირებისას — საზღვაო, საჰაერო, სახმელეთო ან მულტიმოდალური გადაზიდვისას.",
        covers: ["ტვირთის ფიზიკური დაზიანება", "ტვირთის სრული დაკარგვა", "სტიქიური მოვლენებით გამოწვეული ზარალი", "ქურდობა ტრანზიტის დროს"],
        features: ["ყველა ტიპის ტრანსპორტირების დაფარვა", "საერთაშორისო და შიდა გადაზიდვები", "მოქნილი დაფარვის პირობები", "სწრაფი ზარალის რეგულირება"],
        consider: ["ტვირთის ტიპი და ღირებულება", "ტრანსპორტირების მარშრუტი", "შეფუთვის სტანდარტები", "ICC პირობები (A, B, C)"],
        cta: "მოითხოვე შეთავაზება",
      },
      "additional-insurance": {
        title: "დამატებითი დაზღვევები",
        body: "BIB გთავაზობთ სხვადასხვა სპეციალიზებულ სადაზღვევო პროდუქტს თქვენი ბიზნესის უნიკალური საჭიროებებისთვის.",
        subcategories: [
          "პასუხისმგებლობის დაზღვევა",
          "ბიზნესისა და ინფრასტრუქტურის დაზღვევა",
          "ფინანსური და სპეციალური რისკების დაზღვევა",
          "ტრანსპორტისა და ლოგისტიკის სფეროს დაზღვევა",
          "სპეციალიზებული დაზღვევები",
        ],
      },
      "blog-1": { title: "რატომ არის დაზღვევა მნიშვნელოვანი?", date: "15 მარტი, 2026", author: "BIB Team", body: "დაზღვევა წარმოადგენს ფინანსური დაცვის ერთ-ერთ ყველაზე ეფექტურ ინსტრუმენტს. იგი გეხმარებათ გაუთვალისწინებელი ხარჯების მართვაში და უზრუნველყოფს ფინანსურ სტაბილურობას კრიზისულ სიტუაციებში." },
      "blog-2": { title: "რა არის სადაზღვევო ბროკერი?", date: "18 მარტი, 2026", author: "BIB Team", body: "სადაზღვევო ბროკერი არის ლიცენზირებული პროფესიონალი, რომელიც მუშაობს კლიენტის ინტერესებისთვის. ბროკერი არ წარმოადგენს კონკრეტულ სადაზღვევო კომპანიას — ის დამოუკიდებლად შეისწავლის ბაზარს, ადარებს შეთავაზებებს და შეგირჩევთ ოპტიმალურ პროდუქტს." },
      "blog-3": { title: "როგორ ავირჩიოთ სწორი სადაზღვევო პოლისი?", date: "22 მარტი, 2026", author: "BIB Team", body: "სწორი სადაზღვევო პოლისის არჩევა მოითხოვს რამდენიმე ფაქტორის გათვალისწინებას. პირველ რიგში, განსაზღვრეთ რისკები, რომლებისგანაც გსურთ დაცვა." },
      "blog-4": { title: "ბიზნეს დაზღვევის მნიშვნელობა", date: "25 მარტი, 2026", author: "BIB Team", body: "ნებისმიერი ბიზნესი ექვემდებარება სხვადასხვა რისკს — ქონების დაზიანება, თანამშრომლების ჯანმრთელობის პრობლემები, მესამე პირის მიმართ პასუხისმგებლობა." },
      "blog-5": { title: "სამოგზაურო დაზღვევის სახეობები", date: "1 აპრილი, 2026", author: "BIB Team", body: "სამოგზაურო დაზღვევა რამდენიმე ტიპად იყოფა: სამედიცინო დაზღვევა, ბარგის დაზღვევა და მოგზაურობის გაუქმების დაზღვევა." },
      "blog-6": { title: "ქონების დაზღვევა: რა უნდა იცოდეთ", date: "5 აპრილი, 2026", author: "BIB Team", body: "ქონების დაზღვევა ერთ-ერთი ყველაზე გავრცელებული სადაზღვევო პროდუქტია. იგი იცავს თქვენს სახლს, ბინას ან კომერციულ ფართს სხვადასხვა რისკებისგან." },
      "blog-7": { title: "სადაზღვევო ტერმინოლოგია მარტივად", date: "10 აპრილი, 2026", author: "BIB Team", body: "სადაზღვევო პოლისი — ხელშეკრულება. პრემია — თანხა დაზღვევისთვის. ფრანშიზა — ზარალის ნაწილი. დაფარვა — რისკების ჩამონათვალი. გამონაკლისი — არდაფარული სიტუაციები." },
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
      { label: "Why Broker", slug: "why-broker" },
    ],
    productsDropdown: [
      { label: "Auto Insurance", slug: "auto-insurance" },
      { label: "Property Insurance", slug: "property-insurance" },
      { label: "Travel Insurance", slug: "travel-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Cargo Insurance", slug: "cargo-insurance" },
    ],
    heroSlides: [
      { title: "The Result is in the Right Decision", subtitle: "Get professional broker consultation. Compare offers from different insurance companies." },
      { title: "Reliable Protection for Business", subtitle: "Our professional team will take care of your financial risks with the best conditions." },
      { title: "Best Corporate Insurance", subtitle: "We will help you choose the most optimal insurance package and save time." },
      { title: "Peaceful and Secure Future", subtitle: "Individual approach to each client and constant support during insurance events." },
      { title: "Experience You Can Trust", subtitle: "Years of experience in the Georgian insurance market for your comfort." },
      { title: "Right Choice — Reliable Protection", subtitle: "BIB offers full insurance consultation and loss process management." },
    ],
    heroCtaPrimary: "Request Quote",
    heroCtaSecondary: "Learn more ↓",
    servicesTitle: "Our Services",
    servicesSubheading: "Expertise in insurance, risk management and loss adjustment",
    services: [
      { num: "01", title: "Consultation", body: "Risk assessment and market analysis" },
      { num: "02", title: "Placement", body: "Comparing insurance offers and finding optimal conditions" },
      { num: "03", title: "Loss Management", body: "Full management and communication of the compensation process" },
      { num: "04", title: "Reinsurance", body: "Risk distribution across international markets" },
    ],
    productsTitle: "Our Products",
    productAccordion: [
      { title: "Auto Insurance", desc: "Protects vehicles from financial losses in case of traffic accidents, damage or theft.", bullets: ["Traffic accidents", "Theft", "Fire", "Natural disasters"], slug: "auto-insurance" },
      { title: "Property Insurance", desc: "Protects against financial losses caused by unforeseen events.", bullets: ["Buildings", "Offices", "Industrial infrastructure", "Broad risk"], slug: "property-insurance" },
      { title: "Travel Insurance", desc: "Financial protection from unforeseen events during travel.", bullets: ["Medical expenses", "Emergency assistance", "Lost luggage", "Any country"], slug: "travel-insurance" },
      { title: "Health Insurance", desc: "Financial protection from medical service costs.", bullets: ["Outpatient", "Inpatient", "Surgery", "Medications"], slug: "health-insurance" },
      { title: "Cargo Insurance", desc: "Financial protection from risks during cargo transportation.", bullets: ["Damage", "Loss", "Natural disasters", "International"], slug: "cargo-insurance" },
    ],
    productCtaLabel: "Request Quote",
    partnersTitle: "Leading Insurance Partner Companies",
    partners: ["Aldagi", "Imedi L", "TBC Insurance", "ARDI", "Irao", "Unison", "GPI", "Alfa"],
    clientsTitle: "Companies That Trust Us",
    clients: ["Bene Group", "Bene Comport", "Bene Exclusive", "Kairos", "Dagi", "Albioni", "Wizer"],
    ctaSectionTitle: "Request a Quote",
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
      fillForm: "Fill Form",
      requestConsultation: "Request Consultation",
      required: "Required field",
      insuranceType: "Choose insurance type",
      insuranceTypePlaceholder: "— Choose —",
    },
    footerAbout: "Bene Insurance Brokerage — an independent insurance brokerage company helping clients choose the best insurance.",
    footerQuickLinks: [
      { label: "About Us", slug: "about" },
      { label: "Mission", slug: "mission" },
      { label: "Team", slug: "team" },
      { label: "Why Broker", slug: "why-broker" },
      { label: "Blog", slug: "blog" },
    ],
    footerProducts: [
      { label: "Auto Insurance", slug: "auto-insurance" },
      { label: "Property Insurance", slug: "property-insurance" },
      { label: "Travel Insurance", slug: "travel-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Cargo Insurance", slug: "cargo-insurance" },
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
    breadcrumbs: { home: "Home", products: "Products", company: "Company", blog: "Blog/News" },
    accordionLabels: { covers: "What it covers", features: "Key features", consider: "What to consider" },
    relatedTitle: "Related Products",
    pages: {
      about: {
        title: "About Us",
        hero: "BIB | Bene Insurance Brokerage — Independent Insurance Brokerage Company",
        body: "BIB | Bene Insurance Brokerage is an independent insurance brokerage company, founded in 2026, operating with the support of Bene Group. We don't represent any specific insurance company — we work with multiple partners transparently. Our team brings 22 years of business experience.",
        cta: "Request a Quote",
      },
      mission: { title: "Mission", body: "Our mission is to offer high-quality insurance brokerage services based on professionalism, transparency and prioritizing client interests." },
      team: { title: "Team", body: "BIB — Bene Insurance Brokerage operates with the support of strategic partner Bene Group. The company's partners bring 22 years of professional experience in banking and insurance." },
      "why-broker": { title: "Why Insurance Broker", body: "An insurance broker is an independent professional who works for the client's interests, not the insurance company's. The broker studies your needs, compares offers and selects the optimal product at the best price." },
      "auto-insurance": {
        title: "Auto Insurance",
        intro: "Auto insurance protects your vehicle from financial losses that may be caused by traffic accidents, damage, theft or other unforeseen events. Insurance ensures your vehicle's repair or loss compensation according to policy terms.",
        covers: ["Damage from traffic accidents", "Vehicle theft or hijacking", "Fire, explosion and other accidental risks", "Natural disasters (wind, hail, flood, etc.)"],
        features: ["Full or partial vehicle insurance", "Third party liability coverage", "Quick damage assessment and compensation", "Additional services (towing, roadside assistance, etc.)"],
        consider: ["Policy terms and exclusions", "Deductible (excess) terms", "Coverage territory", "Vehicle value and insurance amount"],
        cta: "Request a Quote",
      },
      "property-insurance": {
        title: "Property Insurance",
        intro: "Property insurance protects your real and movable property from fire, natural disasters, theft and other risks.",
        covers: ["Fire and explosion", "Natural disasters (earthquake, flood)", "Theft and vandalism", "Water damage"],
        features: ["Residential and commercial property insurance", "Movable property coverage", "Business interruption insurance", "Individual terms"],
        consider: ["Real property value", "Risk geography", "Deductible amount", "Additional coverages"],
        cta: "Request a Quote",
      },
      "travel-insurance": {
        title: "Travel Insurance",
        intro: "Travel insurance ensures your protection during travel — covering medical expenses, lost luggage and trip cancellation.",
        covers: ["Medical expenses abroad", "Medical evacuation", "Lost or delayed luggage", "Trip cancellation or delay"],
        features: ["Worldwide coverage", "24/7 emergency helpline", "Quick online policy issuance", "Family and group discounts"],
        consider: ["Travel destination and duration", "Medical coverage limit", "Sports activities coverage", "Pre-existing health conditions"],
        cta: "Request a Quote",
      },
      "health-insurance": {
        title: "Health Insurance",
        intro: "Health insurance covers medical expenses and ensures accessible healthcare for you and your family.",
        covers: ["Outpatient treatment", "Inpatient treatment and surgery", "Medication expenses", "Preventive examinations"],
        features: ["Individual and corporate programs", "Wide medical network", "Dental and ophthalmological coverage", "Online consultation"],
        consider: ["Age restrictions", "Pre-existing conditions", "Waiting periods", "Annual limits"],
        cta: "Request a Quote",
      },
      "cargo-insurance": {
        title: "Cargo Insurance",
        intro: "Cargo insurance protects your goods during transportation — sea, air, land or multimodal shipping.",
        covers: ["Physical damage to cargo", "Total loss of cargo", "Damage from natural disasters", "Theft during transit"],
        features: ["Coverage for all transport types", "International and domestic shipments", "Flexible coverage terms", "Quick loss adjustment"],
        consider: ["Cargo type and value", "Transportation route", "Packaging standards", "ICC terms (A, B, C)"],
        cta: "Request a Quote",
      },
      "additional-insurance": {
        title: "Additional Insurance",
        body: "BIB offers various specialized insurance products for your business's unique needs.",
        subcategories: ["Liability Insurance", "Business and Infrastructure Insurance", "Financial and Special Risk Insurance", "Transport and Logistics Insurance", "Specialized Insurance"],
      },
      "blog-1": { title: "Why is Insurance Important?", date: "March 15, 2026", author: "BIB Team", body: "Insurance is one of the most effective financial protection tools. It helps manage unforeseen expenses and ensures financial stability in crisis situations." },
      "blog-2": { title: "What is an Insurance Broker?", date: "March 18, 2026", author: "BIB Team", body: "An insurance broker is a licensed professional who works for the client's interests. The broker independently studies the market, compares offers and selects the optimal product." },
      "blog-3": { title: "How to Choose the Right Insurance Policy?", date: "March 22, 2026", author: "BIB Team", body: "Choosing the right insurance policy requires considering several factors. First, identify the risks you want protection from." },
      "blog-4": { title: "Importance of Business Insurance", date: "March 25, 2026", author: "BIB Team", body: "Any business is subject to various risks — property damage, employee health issues, third-party liability." },
      "blog-5": { title: "Types of Travel Insurance", date: "April 1, 2026", author: "BIB Team", body: "Travel insurance is divided into several types: medical insurance, luggage insurance and trip cancellation insurance." },
      "blog-6": { title: "Property Insurance: What You Need to Know", date: "April 5, 2026", author: "BIB Team", body: "Property insurance is one of the most common insurance products. It protects your home, apartment or commercial space from various risks." },
      "blog-7": { title: "Insurance Terminology Made Simple", date: "April 10, 2026", author: "BIB Team", body: "Insurance policy — a contract. Premium — the amount for insurance. Deductible — the portion you pay. Coverage — the list of risks. Exclusion — uncovered situations." },
    },
  },
};

export default BIB_DATA;
