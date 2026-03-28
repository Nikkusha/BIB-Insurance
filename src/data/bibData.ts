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
      cta: "BIB შეთავაზება",
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
    heroCtaPrimary: "BIB შეთავაზება",
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
    ctaSectionTitle: "დაგვიკავშირდით",
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
        body: "BIB | Bene Insurance Brokerage — დამოუკიდებელი სადაზღვევო საბროკერო კომპანია, დაარსებული 2026 წელს, რომელიც ოპერირებს ძლიერი და ბაზარზე კარგად ცნობილი პარტნიორის — Bene Group — მხარდაჭერით. ჩვენ არ წარმოვადგენთ არცერთი კონკრეტული სადაზღვევო კომპანიის ინტერესს — ვმუშაობთ მრავალ პარტნიორთან გამჭვირვალე პირობებში.\n\nჩვენი გუნდი აერთიანებს ბიზნეს სფეროში 22-წლიან გამოცდილებას, რაც გვაძლევს ბაზრის სიღრმისეულ ცოდნას და კლიენტებისთვის პრაქტიკულ, სწორ გადაწყვეტილებებზე ორიენტაციას. ვადარებთ ბაზარზე არსებულ შეთავაზებებს, ვხსნით პირობებს და კლიენტს ვთავაზობთ ერთ საკონტაქტო სადაზღვევო მრჩეველს.\n\nზარალის შემთხვევაში ჩვენ ვმართავთ ანაზღაურების პროცესს სრულად — დოკუმენტებიდან საბოლოო შედეგამდე. ჩვენი მიზანია კლიენტებმა მიიღონ პროფესიული, საჭიროებებზე მორგებული მომსახურება.",
        cta: "BIB შეთავაზება",
      },
      mission: {
        title: "მისია",
        body: "დაზღვევა გავხადოთ მარტივი და გამჭვირვალე\nვახდენთ ბაზარზე არსებული სადაზღვევო შეთავაზებების შედარებას და ვეხმარებით კლიენტებს სწორ არჩევანში.\n\nდავიცვათ კლიენტის ინტერესები\nროგორც დამოუკიდებელი ბროკერი, ვმუშაობთ კლიენტის მხარეს და ვარჩევთ საუკეთესო გადაწყვეტილებას მისი რეალური საჭიროებების მიხედვით.\n\nგავამარტივოთ რთული პროცესები ტექნოლოგიითა და გამოცდილებით\nვაერთიანებთ პროფესიულ ცოდნასა და თანამედროვე ციფრულ პლატფორმას, რათა დაზღვევის პროცესი იყოს სწრაფი, მარტივი და ეფექტური.",
      },
      team: {
        title: "გუნდი",
        body: "სადაზღვევო საბროკერო ბენე | BIB წარმოადგენს ძლიერი პარტნიორის — Bene Group-ის — მხარდაჭერით შექმნილ სადაზღვევო საბროკერო კომპანიას. Bene Group არის ბაზარზე კარგად ცნობილი კომპანია, რომელსაც მრავალწლიანი გამოცდილება აქვს სხვადასხვა ბიზნეს მიმართულებით და რომელიც დღეს წარმატებით ავითარებს საბროკერო საქმიანობასაც.\n\nკომპანიის პარტნიორები აერთიანებენ ბიზნეს სფეროში 22-წლიან პროფესიულ გამოცდილებას, მათ შორის გაყიდვების და კორპორატიული კლიენტების მართვის მიმართულებით. ეს გამოცდილება გვაძლევს შესაძლებლობას კლიენტებს შევთავაზოთ პრაქტიკული, პროფესიული და სწორ გადაწყვეტილებებზე ორიენტირებული სადაზღვევო მომსახურება.",
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
        cta: "BIB შეთავაზება",
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
        cta: "BIB შეთავაზება",
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
        cta: "BIB შეთავაზება",
      },
      "health-insurance": {
        title: "ჯანმრთელობის დაზღვევა",
        intro: "ჯანმრთელობის დაზღვევა უზრუნველყოფს ფინანსურ დაცვას სამედიცინო მომსახურების ხარჯებისგან და გაძლევთ წვდომას ხარისხიან სამედიცინო მომსახურებაზე. პოლისი ფარავს სხვადასხვა ტიპის სამედიცინო მომსახურებას დაზღვევის პირობების შესაბამისად.",
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
        cta: "BIB შეთავაზება",
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
        cta: "BIB შეთავაზება",
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
      "blog-1": { title: "რატომ არის დაზღვევა მნიშვნელოვანი დღეს?", date: "15 მარტი, 2026", author: "BIB Team", body: "თანამედროვე სამყაროში დაზღვევა წარმოადგენს ერთ-ერთ ყველაზე მნიშვნელოვან ფინანსურ ინსტრუმენტს, რომელიც ადამიანებსა და ბიზნესებს ეხმარება გაუთვალისწინებელი რისკების მართვაში. ყოველდღიურ ცხოვრებაში შეიძლება წარმოიშვას სხვადასხვა ტიპის შემთხვევა — ავტოსაგზაო ავარია, ჯანმრთელობის პრობლემა, ქონების დაზიანება ან ბიზნესის საქმიანობის შეფერხება. ასეთ სიტუაციებში დაზღვევა უზრუნველყოფს ფინანსურ დაცვას და ამცირებს მოულოდნელი ხარჯების გავლენას.\n\nდაზღვევის მთავარი მიზანია რისკის გადანაწილება. ამის შედეგად, როგორც ფიზიკურ პირებს, ისე კომპანიებს შეუძლიათ უფრო მშვიდად დაგეგმონ საკუთარი საქმიანობა და მომავალი.\n\nბიზნესისთვის დაზღვევა განსაკუთრებით მნიშვნელოვანია, რადგან ის იცავს კომპანიას ოპერაციული რისკებისგან, უზრუნველყოფს ფინანსურ სტაბილურობას და ხელს უწყობს საქმიანობის უწყვეტობას." },
      "blog-2": { title: "რა არის სადაზღვევო ბროკერი და რა როლი აქვს?", date: "18 მარტი, 2026", author: "BIB Team", body: "სადაზღვევო ბროკერი არის დამოუკიდებელი შუამავალი კლიენტსა და სადაზღვევო კომპანიას შორის. მისი მთავარი როლი არის კლიენტის ინტერესების დაცვა და ბაზარზე არსებული სხვადასხვა სადაზღვევო შეთავაზებიდან ყველაზე შესაბამისი ვარიანტის შერჩევა.\n\nბროკერი არ წარმოადგენს კონკრეტული სადაზღვევო კომპანიის ინტერესებს. ის თანამშრომლობს რამდენიმე სადაზღვევო კომპანიასთან და კლიენტს სთავაზობს სხვადასხვა ალტერნატივას. ამის შედეგად მომხმარებელი იღებს შესაძლებლობას შეადაროს პირობები, დაფარვის მოცულობა და ფასები.\n\nგარდა პოლისის შერჩევისა, სადაზღვევო ბროკერი ხშირად მონაწილეობს ზარალის ანაზღაურების პროცესშიც, რაც მომხმარებელს აძლევს მეტ გამჭვირვალობას და პროფესიულ მხარდაჭერას." },
      "blog-3": { title: "რატომ ჯობს დაზღვევა ბროკერის მეშვეობით?", date: "25 მარტი, 2026", author: "BIB Team", body: "დაზღვევის გაფორმება ბროკერის მეშვეობით მომხმარებელს აძლევს შესაძლებლობას მიიღოს უფრო ინფორმირებული და გააზრებული გადაწყვეტილება. ბროკერი წარმოადგენს კლიენტის ინტერესებს და ეხმარება მას ბაზარზე არსებული სხვადასხვა სადაზღვევო შეთავაზების შედარებაში.\n\nბროკერის დახმარებით მომხმარებელი იღებს პროფესიულ კონსულტაციას, პირობების მარტივ განმარტებას და დახმარებას პოლისის სწორად შერჩევაში.\n\nგარდა ამისა, ბროკერი ხშირად ეხმარება კლიენტს ზარალის ანაზღაურების პროცესშიც. ასეთ შემთხვევაში მომხმარებელს ჰყავს პარტნიორი, რომელიც იცავს მის ინტერესებს სადაზღვევო კომპანიასთან ურთიერთობისას." },
      "blog-4": { title: "სადაზღვევო ბროკერის როლი თანამედროვე ბიზნესში", date: "28 მარტი, 2026", author: "BIB Team", body: "თანამედროვე ბიზნეს გარემოში კომპანიები ყოველდღიურად აწყდებიან სხვადასხვა ტიპის რისკებს — ოპერაციულ, ფინანსურ, იურიდიულ და ტექნოლოგიურ. სწორედ ამიტომ დაზღვევა და რისკების მართვა გახდა ბიზნესის სტაბილურობის ერთ-ერთი მნიშვნელოვანი კომპონენტი.\n\nსადაზღვევო ბროკერი წარმოადგენს დამოუკიდებელ პროფესიონალს, რომელიც ეხმარება კომპანიებს სწორად შეაფასონ საკუთარი რისკები და შეარჩიონ შესაბამისი სადაზღვევო გადაწყვეტები.\n\nდღეს ბევრ ქვეყანაში კომპანიების უმრავლესობა სწორედ ბროკერების მეშვეობით ახორციელებს დაზღვევას, რადგან ეს უზრუნველყოფს უფრო ობიექტურ არჩევანს, უკეთეს პირობებს და პროფესიულ კონსულტაციას." },
      "blog-5": { title: "როგორ ეხმარება ბროკერი კომპანიებს რისკების მართვაში?", date: "30 მარტი, 2026", author: "BIB Team", body: "რისკების მართვა თანამედროვე ბიზნესის ერთ-ერთი ყველაზე მნიშვნელოვანი ამოცანაა. ბროკერის ერთ-ერთი მთავარი ფუნქცია არის კომპანიის საქმიანობის ანალიზი და შესაძლო რისკების იდენტიფიცირება.\n\nბროკერი ეხმარება კომპანიებს შეიმუშაონ რისკების მართვის სტრატეგია. კორპორატიული სექტორისთვის განსაკუთრებით მნიშვნელოვანია: პასუხისმგებლობის დაზღვევა, ქონების დაზღვევა, ბიზნესის შეფერხების დაზღვევა და პროფესიული პასუხისმგებლობის დაზღვევა.\n\nბროკერის დახმარებით კომპანიები იღებენ არა მხოლოდ სადაზღვევო პროდუქტს, არამედ პროფესიულ კონსულტაციასაც." },
      "blog-6": { title: "სადაზღვევო ბროკერი vs სადაზღვევო აგენტი", date: "2 აპრილი, 2026", author: "BIB Team", body: "სადაზღვევო სფეროში ხშირად გვხვდება ორი მნიშვნელოვანი პროფესია — სადაზღვევო ბროკერი და სადაზღვევო აგენტი. მიუხედავად იმისა, რომ ორივე მონაწილეობს დაზღვევის პროცესში, მათი როლი განსხვავდება.\n\nსადაზღვევო აგენტი წარმოადგენს კონკრეტული სადაზღვევო კომპანიის წარმომადგენელს. სადაზღვევო ბროკერი კი დამოუკიდებელი შუამავალია — ის თანამშრომლობს რამდენიმე სადაზღვევო კომპანიასთან და კლიენტს სთავაზობს სხვადასხვა ალტერნატივას.\n\nსწორედ ამიტომ ბევრი ბიზნესი და ორგანიზაცია უპირატესობას ანიჭებს ბროკერის მომსახურებას." },
      "blog-7": { title: "რატომ იზრდება სადაზღვევო ბროკერების როლი მსოფლიოში?", date: "5 აპრილი, 2026", author: "BIB Team", body: "ბოლო წლებში მსოფლიოში მნიშვნელოვნად გაიზარდა სადაზღვევო ბროკერების როლი. ბევრი კომპანია და კერძო მომხმარებელი დაზღვევის არჩევისას უპირატესობას ანიჭებს დამოუკიდებელ კონსულტაციას.\n\nერთ-ერთი მთავარი მიზეზი არის სადაზღვევო ბაზრის ზრდა და პროდუქტების მრავალფეროვნება. გარდა ამისა, თანამედროვე ბიზნეს გარემოში იზრდება რისკების რაოდენობა — კიბერუსაფრთხოება, კლიმატური ცვლილებები, გლობალური ლოგისტიკური რისკები.\n\nსაერთაშორისო კვლევების მიხედვით, ბევრ განვითარებულ ქვეყანაში სადაზღვევო პოლისების დიდი ნაწილი სწორედ ბროკერების მეშვეობით გაიცემა." },
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
        body: "BIB | Bene Insurance Brokerage is an independent insurance brokerage company founded in 2026, operating with the support of a strong and well-established market partner — Bene Group. We do not represent the interests of any single insurance company; instead, we work with multiple partners on transparent terms to identify the most suitable insurance solutions for our clients.\n\nOur team brings together over 22 years of experience in finance and business sectors, providing us with deep market knowledge and a practical, solution-oriented approach for our clients. We simplify the insurance process by comparing offers, clearly explaining policy terms, and providing clients with a single insurance advisor for all their insurance needs.\n\nIn the event of a claim, we manage the entire compensation process — from documentation to the final settlement. Our goal is to ensure that clients receive professional services tailored to their specific needs.",
        cta: "BIB შეთავაზება",
      },
      mission: {
        title: "Our Mission",
        body: "Making insurance simple and transparent\nWe compare insurance offers across the market and help clients make informed decisions.\n\nTo protect our clients' interests\nAs an independent broker, we work on the client's side to identify the most suitable solutions for their needs.\n\nTo simplify complex processes through expertise and technology\nWe combine professional knowledge with a modern digital platform to deliver fast, clear, and efficient insurance services.",
      },
      team: {
        title: "Team",
        body: "BIB – Bene Insurance Brokerage operates with the support of its strategic partner — Bene Group, a well-established company with a strong presence across multiple business sectors. Building on this foundation, the company is expanding its activities into the insurance brokerage market.\n\nThe company's partners bring together 22 years of professional experience in banking and insurance, including extensive expertise in sales and corporate client management. This experience enables us to provide clients with practical, professional, and well-informed insurance solutions.",
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
        cta: "BIB შეთავაზება",
      },
      "property-insurance": {
        title: "Property Insurance",
        intro: "Property insurance protects you from financial losses caused by unexpected events. The policy provides compensation in case of damage to or destruction of the insured property, in accordance with the terms and conditions of the insurance policy.",
        covers: ["Buildings and structures", "Offices and commercial spaces", "Industrial and warehouse facilities", "Furniture, equipment, and other business assets"],
        features: ["Insurance solutions tailored to your needs", "Broad coverage options for various risks", "Comparison of offers from different insurance companies", "Professional support from policy selection to claim handling"],
        consider: ["Insured value and the actual value of the property", "Covered risks and policy exclusions", "Deductible conditions", "Security and safety measures of the property"],
        cta: "BIB შეთავაზება",
      },
      "travel-insurance": {
        title: "Travel Insurance",
        intro: "Travel insurance provides financial protection against unexpected events that may occur during a trip abroad. The policy helps cover medical expenses, emergency assistance, and other travel-related risks.",
        covers: ["Medical expenses abroad", "Emergency medical treatment", "Medical transportation and repatriation", "Loss or damage of luggage", "Trip cancellation or interruption (according to policy terms)"],
        features: ["Coverage for travel to various countries worldwide", "Short-term and long-term travel policies", "Individual and family insurance options", "24/7 international assistance service"],
        consider: ["Coverage territory", "Policy limits and coverage conditions", "Exclusions and deductible terms", "Travel duration and destination country"],
        cta: "BIB შეთავაზება",
      },
      "health-insurance": {
        title: "Health Insurance",
        intro: "Health insurance helps protect you from the financial burden of medical expenses and provides access to quality healthcare services. The policy covers various types of medical treatment according to the terms of coverage and supports timely access to necessary care.",
        covers: ["Outpatient medical services", "Inpatient hospital treatment", "Doctor consultations and diagnostic tests", "Surgical procedures and medical treatments", "Partial or full coverage of medications (according to policy terms)"],
        features: ["Individual and corporate health insurance plans", "Access to a wide network of medical providers", "Comparison of offers from different insurance companies", "Professional guidance in selecting the right policy"],
        consider: ["Coverage limits of the policy", "Co-payment conditions", "Exclusions and restrictions", "Network of healthcare providers"],
        cta: "BIB შეთავაზება",
      },
      "cargo-insurance": {
        title: "Cargo Insurance",
        intro: "Cargo insurance provides financial protection against unexpected risks that may occur during the transportation of goods. The policy covers damage, loss, or destruction of cargo during transit according to the insurance terms.",
        covers: ["Damage to cargo during transportation", "Loss or destruction of goods", "Losses resulting from transportation accidents", "Damage caused by natural disasters", "Losses during loading and unloading operations"],
        features: ["Coverage for both international and domestic shipments", "Protection for cargo transported by land, sea, or air", "Insurance conditions based on international standards", "Professional support from policy selection to claim handling"],
        consider: ["Type and value of the cargo", "Transportation route and method", "Covered risks and policy exclusions", "Packaging and transportation conditions"],
        cta: "BIB შეთავაზება",
      },
      "additional-insurance": {
        title: "Additional Insurance Solutions",
        body: "BIB offers various specialized insurance products for your business's unique needs.",
        subcategories: ["Liability Insurance", "Business and Infrastructure Insurance", "Financial and Special Risks Insurance", "Transport and Logistics Insurance", "Specialized Insurance"],
      },
      "blog-1": {
        title: "Why is Insurance Important Today?",
        date: "March 15, 2026",
        author: "BIB Team",
        body: "In the modern world, insurance is one of the most important financial tools that helps individuals and businesses manage unforeseen risks. In everyday life, various situations may occur — road accidents, health problems, property damage, or business interruptions. In such cases, insurance provides financial protection and reduces the impact of unexpected expenses.\n\nThe main purpose of insurance is risk sharing. Through insurance, it becomes possible to avoid major financial losses or significantly reduce their impact. As a result, both individuals and companies can plan their activities and future with greater confidence.\n\nInsurance is especially important for businesses because it protects companies from operational risks, ensures financial stability, and supports business continuity. That is why a properly selected insurance policy is an important financial protection mechanism.",
      },
      "blog-2": {
        title: "What is an Insurance Broker and What Role Do They Play?",
        date: "March 18, 2026",
        author: "BIB Team",
        body: "An insurance broker is an independent intermediary between the client and the insurance company. The broker's primary role is to protect the client's interests and select the most suitable option from the various insurance offers available in the market.\n\nA broker does not represent the interests of a specific insurance company. Instead, they work with multiple insurance providers and offer clients several alternatives. As a result, clients have the opportunity to compare policy conditions, coverage scope, and prices in order to make an informed decision.\n\nIn addition to selecting the policy, an insurance broker often participates in managing the entire insurance process — from initial consultation to assisting with the claims settlement process. This is why working with a broker provides greater transparency and professional support for clients.",
      },
      "blog-3": {
        title: "Why is it Better to Purchase Insurance Through a Broker?",
        date: "March 25, 2026",
        author: "BIB Team",
        body: "Purchasing insurance through a broker allows clients to make a more informed and well-considered decision. The broker represents the client's interests and helps compare different insurance offers available in the market.\n\nWith the support of a broker, clients receive professional consultation, clear explanations of policy conditions, and assistance in selecting the right insurance coverage. This is especially important when evaluating offers from several insurance companies.\n\nIn addition, brokers often assist clients during the claims settlement process. In such cases, the client has a partner who protects their interests in communication with the insurance company and helps ensure the process is handled more efficiently.",
      },
      "blog-4": {
        title: "The Role of an Insurance Broker in Modern Business",
        date: "March 28, 2026",
        author: "BIB Team",
        body: "In today's business environment, companies face various types of risks on a daily basis — operational, financial, legal, and technological. Therefore, insurance and risk management have become essential components of business stability. In this process, insurance brokers play an important role.\n\nAn insurance broker is an independent professional who helps companies assess their risks and select appropriate insurance solutions. Brokers work to protect the interests of the client rather than those of the insurance company. Their main task is to compare available market offers and select a policy that best matches the company's needs.\n\nFor businesses, particularly important types of insurance include property insurance, liability insurance, business interruption insurance, and professional liability insurance. Brokers assist companies in selecting these products and ensure that the coverage effectively protects the company's key risks.\n\nToday, in many countries, the majority of companies arrange insurance through brokers, as this approach ensures more objective choices, better terms, and professional consultation.",
      },
      "blog-5": {
        title: "How Do Brokers Help Companies Manage Risks?",
        date: "March 30, 2026",
        author: "BIB Team",
        body: "Risk management is one of the most important tasks in modern business. Companies constantly strive to reduce financial losses and protect their assets. In this process, insurance brokers often become a key partner.\n\nOne of the broker's main functions is to analyze a company's activities and identify potential risks. For example, a manufacturing company may face risks related to property damage or production interruption, while a logistics company may face risks related to cargo loss or liability.\n\nBrokers help companies develop risk management strategies that may include various types of insurance. This process involves risk assessment, comparison of insurance conditions, and selection of the most appropriate policy.\n\nFor the corporate sector, particularly important types of insurance include liability insurance, property insurance, business interruption insurance, and professional liability insurance. With the support of a broker, companies receive not only insurance products but also professional consultation, helping them manage their risks more effectively.",
      },
      "blog-6": {
        title: "Insurance Broker vs Insurance Agent – What is the Difference?",
        date: "April 2, 2026",
        author: "BIB Team",
        body: "In the insurance industry, two important professions are commonly encountered — insurance brokers and insurance agents. Although both participate in the insurance process, their roles and interests differ.\n\nAn insurance agent represents a specific insurance company. Their main task is to offer customers the insurance products of the company they represent.\n\nAn insurance broker, on the other hand, is an independent intermediary. Brokers are not tied to a single insurance company and work to protect the interests of the client. They cooperate with multiple insurance companies and provide clients with several alternatives.\n\nBecause of this difference, clients working with brokers can compare different insurance offers and choose the most suitable option. For this reason, many businesses and organizations prefer to work with brokers, as this approach provides a wider choice and professional consultation.",
      },
      "blog-7": {
        title: "Why is the Role of Insurance Brokers Growing Worldwide?",
        date: "April 5, 2026",
        author: "BIB Team",
        body: "In recent years, the role of insurance brokers has grown significantly worldwide. Many companies and individual clients prefer independent advice when choosing insurance rather than relying on the offer of a single insurance company.\n\nOne of the main reasons for this trend is the growth of the insurance market and the increasing diversity of insurance products. Today, companies can choose from many different types of coverage, which often makes decision-making more complex. This is where brokers become essential, helping clients simplify the process.\n\nIn addition, modern businesses face a growing number of risks — cybersecurity threats, climate-related risks, global logistics disruptions, and more. Under such conditions, companies require professional advice to properly assess and manage their risks.\n\nAccording to international research, in many developed countries a large portion of insurance policies are arranged through brokers. This trend is particularly visible in the corporate insurance sector.",
      },
    },
  },
};

export default BIB_DATA;
