(function () {
  'use strict';

  var SLIDESHOW_SECONDS = 4;
  var KEN_BURNS = true;

  var SLIDES = [
    { src: 'assets/hero-volleyball-v2.jpg', altKey: 'altHero' },
    { src: 'assets/about-stretch-v2.jpg', altKey: 'altStretch' },
  ];

  var ICONS = {
    iconPerson: 'assets/icon-person-v2.svg',
    iconHandHeart: 'assets/icon-handheart-v2.svg',
    iconDryNeedling: 'assets/icon-dryneedling-v2.png',
    iconVenus: 'assets/icon-venus-v2.svg',
    iconSprout: 'assets/icon-sprout-v2.svg',
  };
  var SERVICES_BASE = [
    { id: 'physio', iconRes: 'iconPerson' },
    { id: 'soft-tissue', iconRes: 'iconHandHeart' },
    { id: 'dry-needling', iconRes: 'iconDryNeedling' },
    { id: 'pelvic', iconRes: 'iconVenus' },
    { id: 'wellness', iconRes: 'iconSprout' },
  ];

  var PRICES_BASE = [
    { accPrice: '$55', privatePrice: '$80' },
    { accPrice: '$45', privatePrice: '$80' },
    { accPrice: '$50', privatePrice: '$75' },
    { accPrice: '$40', privatePrice: '$75' },
    { accPrice: '$60', privatePrice: '$150' },
  ];

  var I18N = {
    en: {
      htmlLang: 'en',
      docTitle: 'Halo Health Physio · Christchurch, NZ',
      t: {
        navHome: 'Home', navServices: 'Services', navAbout: 'About', navPrices: 'Prices', navBook: 'Book now',
        menuLabel: 'Menu',
        heroEyebrow: 'Physiotherapy · Christchurch, NZ',
        heroTitle1: 'Your Journey', heroTitle2: 'Our Support.',
        heroBody1: 'Your friendly neighbourhood physio, dedicated to helping you move better, feel stronger and achieve your goals.',
        heroBody2: "Whatever stage you're at, we'll be with you every step of the way.",
        bookAppointment: 'Book an appointment',
        heroCalm2: 'No referral needed — ACC and private clients welcome.',
        aboutSummary: "Founder and lead physiotherapist — Otago-trained, acupuncture-certified, lead physio for the NZ Men's Volleyball team. Consultations in English and Mandarin.",
        whatWeDo: 'What we do',
        learnMore: 'Learn more →',
        notSureTitle: 'Not sure where to start?',
        notSureBody: "Book a first assessment and we'll build your plan together.",
        bookNow: 'Book now',
        whyEyebrow: 'Why choose this clinic',
        whyTitle: 'Why choose Halo Health Physio?',
        whyP1: "Choosing a physiotherapist is about more than finding someone to treat an injury — it's about finding someone you trust to guide your recovery. At Halo Health Physio, you'll receive one-on-one care in a welcoming environment where your concerns are heard, your goals matter, and your treatment is never rushed.",
        whyP2: 'We combine thorough assessment with hands-on treatment, and a personalised rehabilitation plan, so you can move confidently and get back to doing what you love.',
        readStory: "Read Diana's story →",
        kindWordsEyebrow: 'Kind words', kindWordsTitle: 'Feeling better, together',
        tQuote1: 'After my third surgery, my hand therapist referred me to Halo Health. We identified the real source of my back and shoulder pain, fixed it, and encouraged me into the gym with a trainer. My day-to-day pain and quality of life have changed completely.',
        tDetail1: 'Christchurch City',
        tQuote2: "The most thorough, unhurried physio I've ever seen. I finally understand my own body.",
        tDetail2: 'Private client',
        tQuote3: 'Wonderful pelvic health care after my second baby. Kind, calm and so reassuring.',
        tDetail3: 'Post-natal client',
        tQuote4: 'I have recommended Diana to a number of family members and friends over the years and they have all benefited greatly from her skill, care, and expertise. I wouldn’t hesitate to recommend her to anyone looking for a knowledgeable, professional, and highly skilled practitioner.',
        tQuote5: 'I can’t recommend Diana highly enough. She has helped me through numerous injuries over the years and, most recently, played a huge role in getting me into the best possible position heading into surgery. She is an absolute wealth of knowledge, incredibly thorough, and genuinely cares about getting the best outcome for her clients. Diana is an absolutely incredible physio who I wouldn’t hesitate to recommend to anyone.',
        ctaTitle: 'Ready to feel better?',
        ctaBody: "Book online in under a minute. No referral needed — we'll take care of the rest.",
        servicesEyebrow: 'Our services', servicesTitle: 'Treatment Options',
        book: 'Book',
        faqEyebrow: 'Good to know', faqTitle: 'Questions, answered',
        aboutEyebrow: 'Meet Diana Chen',
        aboutP1: "My name is Diana, founder and lead physiotherapist of Halo Health Physio. I graduated from the University of Otago in 2016 with a Bachelor of Physiotherapy, and since then I've been committed to helping people move better, recover confidently, and get back to doing what they love. Whether you're recovering from an injury, managing persistent pain, returning to sport, or seeking pelvic health support, my goal is to create an individualised treatment plan that fits your lifestyle and goals.",
        aboutP2: "Continued learning has always been a priority for me. I'm one of only a small number of physiotherapists in New Zealand certified in Selective Functional Movement Assessment (SFMA), allowing me to assess complex movement patterns and identify the true source of pain or dysfunction. I also hold a Postgraduate Certificate in Acupuncture and have completed further training in women's pelvic health, enabling me to provide evidence-based care across a broad range of musculoskeletal and pelvic health conditions.",
        aboutP3: "Sport has been a significant part of my career. I've had the privilege of working with athletes from recreational to elite levels, including serving as lead physiotherapist for the New Zealand Men's Volleyball team. I've also worked alongside athletes competing in badminton, ice hockey, football, netball, professional arm wrestling and Brazilian Jiu-Jitsu, giving me a strong understanding of the physical demands of different sports and the importance of returning to performance safely.",
        aboutP4: "As a fluent Mandarin speaker, I'm proud to offer physiotherapy consultations in both English and Mandarin, helping ensure patients can communicate comfortably and confidently throughout their rehabilitation.",
        bookWithDiana: 'Book with Diana',
        locationLabel: 'Location', getDirections: 'Get directions →',
        credsEyebrow: 'Qualified & registered', credsTitle: 'Care you can trust',
        pricesEyebrow: 'Pricing', pricesTitle: 'Current prices',
        pricesNote: 'Injured in an accident? Your visit can be covered by ACC — we can lodge the claim for you, with no extra paperwork. Non-accident concerns are welcome as private appointments, with transparent pricing and no hidden fees.',
        accLabel: 'ACC', privateLabel: 'Private',
        bookingEyebrow: 'Book an appointment', bookingTitle: "Let's get you moving",
        bookingSub: 'No referral required · ACC & private welcome',
        bookOnline: 'Book online with Cliniko →',
        stepsEyebrow: 'How it works', stepsTitle: 'Three steps to your appointment',
        step1: '1. Click "Book online" above',
        step2: '2. Choose a time and fill in your details',
        step3: '3. Diana will confirm your appointment within one business day',
        contactEyebrow: 'Contact', contactTitle: 'Get in touch',
        contactBadge: 'English & Mandarin consultations available',
        footExplore: 'Explore', footVisit: 'Visit', footContact: 'Contact & how to book',
        footTagline: 'One-on-one physiotherapy in Christchurch. Move well. Feel well. Live well.',
        footCopyright: '© 2026 Halo Health · ACC & private clients welcome · No referral required',
        altSlide: 'Halo Health Physio',
        altHero: "Diana Chen with the New Zealand Men's Volleyball team",
        altStretch: "Diana Chen leading a stretching session with the New Zealand Men's Volleyball team",
      },
      services: [
        { title: 'Physiotherapy',
          short: 'One-on-one assessment and hands-on treatment to get you moving well again.',
          long: 'Thorough one-on-one assessment and hands-on treatment for injury, pain and recovery — with a clear plan to get you back to what you love.' },
        { title: 'Soft Tissue Release',
          short: 'Targeted hands-on work to ease tension, restore movement and speed recovery.',
          long: 'Focused soft tissue and massage techniques to release tight, overloaded muscles, calm pain and restore healthy movement.' },
        { title: 'Dry Needling',
          short: 'Fine-needle therapy to release trigger points and calm stubborn pain.',
          long: 'Evidence-based dry needling to release trigger points, reduce muscle tension and support faster recovery alongside your treatment plan.' },
        { title: 'Pelvic Health',
          short: 'Sensitive, private care for pre- and post-natal recovery and pelvic concerns.',
          long: 'Discreet, one-on-one pelvic health physiotherapy for pregnancy, post-natal recovery, and bladder or pelvic-floor concerns.' },
        { title: 'Rehab & Wellness',
          short: 'Rehabilitation and strength programming to keep you well for the long run.',
          long: 'Progressive rehabilitation and strength & conditioning programming so you stay strong, resilient and moving well well beyond recovery.' },
      ],
      faqs: [
        { q: 'Do I need a referral?', a: 'No referral is required. You can book directly, and if you have an injury we can lodge your ACC claim for you at your first visit.' },
        { q: 'Do you see ACC clients?', a: 'Yes — we welcome both ACC and private clients. We can lodge new ACC claims directly, so there is no extra paperwork for you.' },
        { q: 'Can my physio refer me to a specialist?', a: 'Yes, if deemed appropriate, we can send for X-rays + ultrasound scans and then refer to specialists for further imaging.' },
        { q: 'Do you speak languages other than English?', a: 'Yes. Diana speaks both English and Mandarin.' },
        { q: 'What should I wear to my appointment?', a: 'Comfortable clothing that allows easy access to the injury site.' },
      ],
      credentials: [
        'Registered Physiotherapist',
        'Postgraduate Certificate in Acupuncture',
        'Dry Needling Certified',
        "Women's Pelvic Health trained",
        'English & Mandarin speaking',
        'ACC registered provider',
        "NZ Men's Volleyball Team Physio",
      ],
      prices: [
        { title: 'Initial Assessment', duration: '45–60 min' },
        { title: 'Follow-up Physiotherapy', duration: '30 min' },
        { title: 'Student / Senior Initial Assessment', duration: '45–60 min' },
        { title: 'Student / Senior Follow-up', duration: '30 min' },
        { title: 'Pelvic Health Consult', duration: '45 min' },
      ],
    },

    'zh-Hant': {
      htmlLang: 'zh-Hant',
      docTitle: 'Halo Health 物理治療 · 基督城',
      t: {
        navHome: '首頁', navServices: '服務項目', navAbout: '關於我們', navPrices: '收費', navBook: '立即預約',
        menuLabel: '選單',
        heroEyebrow: '物理治療 · 紐西蘭基督城',
        heroTitle1: '康復路上', heroTitle2: '與您同行。',
        heroBody1: '我們是您身邊親切可靠的物理治療師，致力於幫助您改善動作、增強體能、達成目標。',
        heroBody2: '無論您正處於康復的哪個階段，我們都會陪您走好每一步。',
        bookAppointment: '預約看診',
        heroCalm2: '無需醫生轉介 — 歡迎 ACC 與自費客戶。',
        aboutSummary: '創辦人兼主治物理治療師 — 畢業於奧塔哥大學，持針灸認證，曾任紐西蘭男子排球隊首席物理治療師。提供中英文雙語看診。',
        whatWeDo: '我們的服務',
        learnMore: '了解更多 →',
        notSureTitle: '不知道從何開始？',
        notSureBody: '預約初次評估，我們一起為您量身打造治療計劃。',
        bookNow: '立即預約',
        whyEyebrow: '為什麼選擇我們',
        whyTitle: '為什麼選擇 Halo Health 物理治療？',
        whyP1: '選擇物理治療師，不只是找人治療傷痛，更是找一位值得信賴、能引導您走向康復的夥伴。在 Halo Health，您將在親切自在的環境中獲得一對一照護：您的顧慮有人傾聽，您的目標備受重視，治療更不會匆促了事。',
        whyP2: '我們結合全面評估、手法治療與量身打造的康復計劃，助您重拾自信步伐，重返熱愛的生活。',
        readStory: '閱讀 Diana 的故事 →',
        kindWordsEyebrow: '客戶心聲', kindWordsTitle: '他們的康復故事',
        tQuote1: '第三次手術後，我的手部治療師把我轉介到 Halo Health。我們找出了背部和肩膀疼痛的真正根源並徹底解決，她還鼓勵我跟著教練進健身房訓練。現在我的日常疼痛和生活品質完全不一樣了。',
        tDetail1: '基督城市區',
        tQuote2: '這是我看過最仔細、最有耐心的物理治療師，我終於真正了解自己的身體。',
        tDetail2: '自費客戶',
        tQuote3: '生完第二胎後在這裡接受骨盆底護理，體驗非常好。親切、沉穩，讓人特別安心。',
        tDetail3: '產後客戶',
        tQuote4: 'I have recommended Diana to a number of family members and friends over the years and they have all benefited greatly from her skill, care, and expertise. I wouldn’t hesitate to recommend her to anyone looking for a knowledgeable, professional, and highly skilled practitioner.',
        tQuote5: 'I can’t recommend Diana highly enough. She has helped me through numerous injuries over the years and, most recently, played a huge role in getting me into the best possible position heading into surgery. She is an absolute wealth of knowledge, incredibly thorough, and genuinely cares about getting the best outcome for her clients. Diana is an absolutely incredible physio who I wouldn’t hesitate to recommend to anyone.',
        ctaTitle: '準備好告別疼痛了嗎？',
        ctaBody: '線上預約不到一分鐘，無需醫生轉介，其餘的交給我們。',
        servicesEyebrow: '服務項目', servicesTitle: '治療項目',
        book: '預約',
        faqEyebrow: '溫馨提示', faqTitle: '常見問題',
        aboutEyebrow: '認識 Diana Chen',
        aboutP1: '我是 Diana，Halo Health 物理治療診所的創辦人與主治物理治療師。2016 年我畢業於奧塔哥大學（University of Otago）物理治療系，此後一直致力於幫助大家改善動作、安心康復、重返熱愛的生活。無論您是傷後復原、飽受長期疼痛困擾、希望重返運動場，還是需要骨盆底健康支援，我都會為您量身打造貼合生活方式與目標的治療方案。',
        aboutP2: '持續進修一直是我最重視的事。我是紐西蘭少數取得「選擇性功能動作評估」（SFMA）認證的物理治療師之一，能夠分析複雜的動作模式，找出疼痛或功能障礙的真正根源。我同時持有針灸研究生證書，並完成婦女骨盆底健康的進階培訓，能為各類肌肉骨骼與骨盆底問題提供實證照護。',
        aboutP3: '運動是我職業生涯中很重要的一部分。我有幸服務過從業餘到精英級別的運動員，包括擔任紐西蘭男子排球隊的首席物理治療師，也曾與羽毛球、冰上曲棍球、足球、籃網球、職業腕力和巴西柔術等項目的選手合作，深知不同運動的身體需求，以及安全重返賽場的重要性。',
        aboutP4: '作為一名能說流利中文的物理治療師，我很樂意用英文或中文（國語）為您看診，讓您在整個康復過程中溝通無礙、安心自在。',
        bookWithDiana: '預約 Diana',
        locationLabel: '診所位置', getDirections: '查看地圖 →',
        credsEyebrow: '專業資格與註冊', credsTitle: '值得信賴的專業照護',
        pricesEyebrow: '收費', pricesTitle: '收費標準',
        pricesNote: '因意外受傷？您可使用 ACC（意外事故賠償）補助就診，我們會直接為您申報，無需任何額外手續。非意外相關的問題也歡迎自費就診，收費透明，絕無隱藏費用。',
        accLabel: 'ACC', privateLabel: '自費',
        bookingEyebrow: '預約看診', bookingTitle: '開始您的康復之旅',
        bookingSub: '無需轉介 · 歡迎 ACC 與自費客戶',
        bookOnline: '透過 Cliniko 線上預約 →',
        stepsEyebrow: '如何預約', stepsTitle: '三步完成預約',
        step1: '1. 點擊上方「線上預約」按鈕',
        step2: '2. 選擇時間並填寫您的資料',
        step3: '3. Diana 將於一個工作日內與您確認',
        contactEyebrow: '聯絡方式', contactTitle: '聯絡我們',
        contactBadge: '您可以用中文與我們聯絡',
        footExplore: '探索', footVisit: '診所資訊', footContact: '聯絡我們與預約方式',
        footTagline: '基督城一對一物理治療。活動自如，身心舒暢，樂享生活。',
        footCopyright: '© 2026 Halo Health · 歡迎 ACC 與自費客戶 · 無需轉介',
        altSlide: 'Halo Health 物理治療診所',
        altHero: 'Diana Chen 與紐西蘭男子排球隊',
        altStretch: 'Diana Chen 帶領紐西蘭男子排球隊進行伸展訓練',
      },
      services: [
        { title: '物理治療',
          short: '一對一評估與手法治療，助您恢復自如活動。',
          long: '完整的一對一評估與手法治療，針對傷痛與康復需求制定清晰的治療計劃，助您早日重返熱愛的生活。' },
        { title: '軟組織鬆解',
          short: '針對性手法放鬆緊繃肌肉，舒緩疼痛、加速復原。',
          long: '專業的軟組織按摩與放鬆手法，釋放緊繃過勞的肌肉，緩解疼痛，找回健康自然的動作模式。' },
        { title: '乾針治療',
          short: '細針鬆解激痛點，有效緩解頑固疼痛。',
          long: '以實證為基礎的乾針療法，精準鬆解激痛點、降低肌肉張力，配合整體治療計劃加快康復進度。' },
        { title: '骨盆底健康',
          short: '貼心私密的孕期與產後骨盆底照護。',
          long: '私密安心的一對一骨盆底物理治療，涵蓋孕期不適、產後修復，以及膀胱與骨盆底相關困擾。' },
        { title: '康復與體能訓練',
          short: '循序漸進的復健與肌力訓練，讓健康長久相伴。',
          long: '循序漸進的康復與肌力體能訓練，讓您在復原之後依然強健有力、活動自如。' },
      ],
      faqs: [
        { q: '需要醫生轉介嗎？', a: '不需要，您可以直接預約。若是意外受傷，初診時我們還可以協助您現場提交 ACC 申請。' },
        { q: '你們接受 ACC 客戶嗎？', a: '當然。我們歡迎 ACC 與自費客戶，並可直接為您提交新的 ACC 申請，無需任何額外手續。' },
        { q: '可以幫我轉介專科醫生嗎？', a: '可以。如有需要，我們可為您安排 X 光與超音波檢查，並轉介專科醫師作進一步診治。' },
        { q: '除了英文，還能用什麼語言溝通？', a: 'Diana 能說流利的英文與中文（國語），歡迎用您最自在的語言與她溝通。' },
        { q: '就診時該穿什麼？', a: '穿著舒適、方便露出治療部位的衣物即可。' },
      ],
      credentials: [
        '註冊物理治療師',
        '針灸研究生證書',
        '乾針治療認證',
        '婦女骨盆底健康培訓',
        '中英雙語服務',
        'ACC 註冊治療機構',
        '紐西蘭男子排球隊物理治療師',
      ],
      prices: [
        { title: '初次評估', duration: '45–60 分鐘' },
        { title: '複診物理治療', duration: '30 分鐘' },
        { title: '學生／長者初次評估', duration: '45–60 分鐘' },
        { title: '學生／長者複診', duration: '30 分鐘' },
        { title: '骨盆底健康諮詢', duration: '45 分鐘' },
      ],
    },

    'zh-Hans': {
      htmlLang: 'zh-Hans',
      docTitle: 'Halo Health 物理治疗 · 基督城',
      t: {
        navHome: '首页', navServices: '服务项目', navAbout: '关于我们', navPrices: '收费', navBook: '立即预约',
        menuLabel: '菜单',
        heroEyebrow: '物理治疗 · 新西兰基督城',
        heroTitle1: '康复路上', heroTitle2: '与您同行。',
        heroBody1: '我们是您身边贴心可靠的物理治疗师，致力于帮助您改善动作、增强体能、达成目标。',
        heroBody2: '无论您正处于康复的哪个阶段，我们都会陪您走好每一步。',
        bookAppointment: '预约就诊',
        heroCalm2: '无需医生转介 — 欢迎 ACC 与自费客户。',
        aboutSummary: '创始人兼主治物理治疗师 — 毕业于奥塔哥大学，持针灸认证，曾任新西兰男子排球队首席物理治疗师。提供中英文双语看诊。',
        whatWeDo: '我们的服务',
        learnMore: '了解更多 →',
        notSureTitle: '不知道从何开始？',
        notSureBody: '预约初次评估，我们一起为您量身定制治疗方案。',
        bookNow: '立即预约',
        whyEyebrow: '为什么选择我们',
        whyTitle: '为什么选择 Halo Health 物理治疗？',
        whyP1: '选择物理治疗师，不只是找人治疗伤痛，更是找一位值得信赖、能引导您走向康复的伙伴。在 Halo Health，您将在亲切自在的环境中获得一对一照护：您的顾虑有人倾听，您的目标备受重视，治疗更不会匆忙了事。',
        whyP2: '我们结合全面评估、手法治疗与量身定制的康复方案，助您重拾自信步伐，重返热爱的生活。',
        readStory: '阅读 Diana 的故事 →',
        kindWordsEyebrow: '客户心声', kindWordsTitle: '他们的康复故事',
        tQuote1: '第三次手术后，我的手部治疗师把我转介到 Halo Health。我们找出了背部和肩膀疼痛的真正根源并彻底解决，她还鼓励我跟着教练进健身房训练。现在我的日常疼痛和生活质量完全不一样了。',
        tDetail1: '基督城市区',
        tQuote2: '这是我看过最仔细、最有耐心的物理治疗师，我终于真正了解自己的身体。',
        tDetail2: '自费客户',
        tQuote3: '生完二宝后在这里做盆底修复，体验非常好。亲切、沉稳，让人特别安心。',
        tDetail3: '产后客户',
        tQuote4: 'I have recommended Diana to a number of family members and friends over the years and they have all benefited greatly from her skill, care, and expertise. I wouldn’t hesitate to recommend her to anyone looking for a knowledgeable, professional, and highly skilled practitioner.',
        tQuote5: 'I can’t recommend Diana highly enough. She has helped me through numerous injuries over the years and, most recently, played a huge role in getting me into the best possible position heading into surgery. She is an absolute wealth of knowledge, incredibly thorough, and genuinely cares about getting the best outcome for her clients. Diana is an absolutely incredible physio who I wouldn’t hesitate to recommend to anyone.',
        ctaTitle: '准备好告别疼痛了吗？',
        ctaBody: '在线预约不到一分钟，无需医生转介，其余的交给我们。',
        servicesEyebrow: '服务项目', servicesTitle: '治疗项目',
        book: '预约',
        faqEyebrow: '温馨提示', faqTitle: '常见问题',
        aboutEyebrow: '认识 Diana Chen',
        aboutP1: '我是 Diana，Halo Health 物理治疗诊所的创始人和主治物理治疗师。2016 年我毕业于奥塔哥大学（University of Otago）物理治疗专业，此后一直致力于帮助大家改善动作、安心康复、重返热爱的生活。无论您是伤后恢复、饱受慢性疼痛困扰、希望重返运动场，还是需要盆底健康支持，我都会为您量身定制贴合生活方式与目标的治疗方案。',
        aboutP2: '持续进修一直是我最重视的事。我是新西兰少数取得"选择性功能动作评估"（SFMA）认证的物理治疗师之一，能够分析复杂的动作模式，找出疼痛或功能障碍的真正根源。我同时持有针灸研究生证书，并完成了女性盆底健康的进阶培训，能为各类肌肉骨骼与盆底问题提供循证照护。',
        aboutP3: '运动是我职业生涯中很重要的一部分。我有幸服务过从业余到精英级别的运动员，包括担任新西兰男子排球队的首席物理治疗师，也曾与羽毛球、冰球、足球、无挡板篮球（Netball）、职业掰手腕和巴西柔术等项目的选手合作，深知不同运动的身体需求，以及安全重返赛场的重要性。',
        aboutP4: '作为一名能说流利普通话的物理治疗师，我很乐意用英文或中文为您看诊，让您在整个康复过程中沟通无碍、安心自在。',
        bookWithDiana: '预约 Diana',
        locationLabel: '诊所位置', getDirections: '查看地图 →',
        credsEyebrow: '专业资格与注册', credsTitle: '值得信赖的专业照护',
        pricesEyebrow: '收费', pricesTitle: '收费标准',
        pricesNote: '因意外受伤？您可使用 ACC（意外事故赔偿）补助就诊，我们会直接为您申报，无需任何额外手续。非意外相关的问题也欢迎自费就诊，收费透明，绝无隐藏费用。',
        accLabel: 'ACC', privateLabel: '自费',
        bookingEyebrow: '预约就诊', bookingTitle: '开始您的康复之旅',
        bookingSub: '无需转介 · 欢迎 ACC 与自费客户',
        bookOnline: '通过 Cliniko 在线预约 →',
        stepsEyebrow: '如何预约', stepsTitle: '三步完成预约',
        step1: '1. 点击上方"在线预约"按钮',
        step2: '2. 选择时间并填写您的信息',
        step3: '3. Diana 将在一个工作日内与您确认',
        contactEyebrow: '联系方式', contactTitle: '联系我们',
        contactBadge: '您可以用中文联系我们',
        footExplore: '探索', footVisit: '诊所信息', footContact: '联系我们与预约方式',
        footTagline: '基督城一对一物理治疗。活动自如，身心舒畅，乐享生活。',
        footCopyright: '© 2026 Halo Health · 欢迎 ACC 与自费客户 · 无需转介',
        altSlide: 'Halo Health 物理治疗诊所',
        altHero: 'Diana Chen 与新西兰男子排球队',
        altStretch: 'Diana Chen 带领新西兰男子排球队进行伸展训练',
      },
      services: [
        { title: '物理治疗',
          short: '一对一评估与手法治疗，助您恢复自如活动。',
          long: '完整的一对一评估与手法治疗，针对伤痛与康复需求制定清晰的治疗方案，助您早日重返热爱的生活。' },
        { title: '软组织松解',
          short: '针对性手法放松紧绷肌肉，舒缓疼痛、加速恢复。',
          long: '专业的软组织按摩与放松手法，释放紧绷过劳的肌肉，缓解疼痛，找回健康自然的动作模式。' },
        { title: '干针治疗',
          short: '细针松解激痛点，有效缓解顽固疼痛。',
          long: '以循证为基础的干针疗法，精准松解激痛点、降低肌肉张力，配合整体治疗方案加快康复进度。' },
        { title: '盆底健康',
          short: '贴心私密的孕期与产后盆底照护。',
          long: '私密安心的一对一盆底物理治疗，涵盖孕期不适、产后修复，以及膀胱与盆底相关困扰。' },
        { title: '康复与体能训练',
          short: '循序渐进的康复与力量训练，让健康长久相伴。',
          long: '循序渐进的康复与力量体能训练，让您在恢复之后依然强健有力、活动自如。' },
      ],
      faqs: [
        { q: '需要医生转介吗？', a: '不需要，您可以直接预约。若是意外受伤，初诊时我们还可以协助您现场提交 ACC 申请。' },
        { q: '你们接受 ACC 客户吗？', a: '当然。我们欢迎 ACC 与自费客户，并可直接为您提交新的 ACC 申请，无需任何额外手续。' },
        { q: '可以帮我转介专科医生吗？', a: '可以。如有需要，我们可为您安排 X 光与超声波检查，并转介专科医生作进一步诊治。' },
        { q: '除了英文，还能用什么语言沟通？', a: 'Diana 能说流利的英文和中文（普通话），欢迎用您最自在的语言与她沟通。' },
        { q: '就诊时该穿什么？', a: '穿着舒适、方便露出治疗部位的衣物即可。' },
      ],
      credentials: [
        '注册物理治疗师',
        '针灸研究生证书',
        '干针治疗认证',
        '女性盆底健康培训',
        '中英双语服务',
        'ACC 注册治疗机构',
        '新西兰男子排球队物理治疗师',
      ],
      prices: [
        { title: '初次评估', duration: '45–60 分钟' },
        { title: '复诊物理治疗', duration: '30 分钟' },
        { title: '学生／老年人初次评估', duration: '45–60 分钟' },
        { title: '学生／老年人复诊', duration: '30 分钟' },
        { title: '盆底健康咨询', duration: '45 分钟' },
      ],
    },
  };

  var LANG_KEY = 'halo-lang';

  function detectLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) { }
    var prefs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'en'];
    for (var i = 0; i < prefs.length; i++) {
      var l = String(prefs[i]).toLowerCase();
      if (l.indexOf('zh') === 0) {
        if (l.indexOf('hant') !== -1 || l.indexOf('-tw') !== -1 || l.indexOf('-hk') !== -1 || l.indexOf('-mo') !== -1) return 'zh-Hant';
        return 'zh-Hans';
      }
      if (l.indexOf('en') === 0) return 'en';
    }
    return 'en';
  }

  var state = {
    page: 'home',
    lang: detectLang(),
    slide: 0,
    review: 0,
    openFaq: 0,
    menuOpen: false,
  };

  function setState(patch) {
    var next = typeof patch === 'function' ? patch(state) : patch;
    for (var k in next) state[k] = next[k];
    render();
  }

  var timer = null;
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
      setState(function (s) {
        return { slide: (s.slide + 1) % SLIDES.length, review: (s.review + 1) % 2 };
      });
    }, SLIDESHOW_SECONDS * 1000);
  }

  function go(page) {
    return function () {
      setState({ page: page, openFaq: 0, menuOpen: false });
      try { window.scrollTo(0, 0); } catch (e) { }
    };
  }

  var actions = {
    'go-home': go('home'),
    'go-services': go('services'),
    'go-about': go('about'),
    'go-prices': go('prices'),
    'go-contact': go('booking'),
    'go-booking': function () {
      setState({ menuOpen: false });
      window.open('https://halo-health-limited.au5.cliniko.com/bookings', '_blank', 'noopener');
    },
    'toggle-menu': function () {
      setState(function (s) { return { menuOpen: !s.menuOpen }; });
    },
    'prev-slide': function () {
      setState(function (s) { return { slide: (s.slide - 1 + SLIDES.length) % SLIDES.length }; });
    },
    'next-slide': function () {
      setState(function (s) { return { slide: (s.slide + 1) % SLIDES.length }; });
    },
  };

  function setLang(code) {
    try { localStorage.setItem(LANG_KEY, code); } catch (e) { }
    setState({ lang: code });
  }

  function el(sel) { return document.querySelector(sel); }
  function els(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function renderServices(L) {
    var container = el('#services-list');
    container.innerHTML = '';
    SERVICES_BASE.forEach(function (base, i) {
      var s = L.services[i];
      var row = document.createElement('div');
      row.className = 'svc-row';
      row.style.cssText = 'display: grid; grid-template-columns: auto 1fr auto; gap: 30px; align-items: center; padding: 28px 32px; background: #fff; border: 1px solid #F3D6DC; border-radius: 18px;';
      var iconWrap = document.createElement('div');
      iconWrap.style.cssText = 'width: 68px; height: 68px; border-radius: 50%; border: 1.5px solid #C28D97; display: flex; align-items: center; justify-content: center;';
      var icon = document.createElement('span');
      icon.style.cssText = 'display: block; width: 30px; height: 30px; background-image: url("' + (ICONS[base.iconRes] || '') + '"); background-size: contain; background-repeat: no-repeat; background-position: center;';
      iconWrap.appendChild(icon);
      var textWrap = document.createElement('div');
      var h3 = document.createElement('h3');
      h3.style.cssText = 'font-family: var(--fd); font-weight: 500; font-size: 27px; color: #333; margin: 0 0 6px;';
      h3.textContent = s.title;
      var p = document.createElement('p');
      p.style.cssText = 'font-size: 14px; color: #8A8A8A; line-height: 1.7; margin: 0; max-width: 540px;';
      p.textContent = s.long;
      textWrap.appendChild(h3);
      textWrap.appendChild(p);
      var btn = document.createElement('button');
      btn.className = 'book-btn book-charcoal';
      btn.style.cssText = 'border-radius: 999px; padding: 12px 24px; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;';
      btn.innerHTML = '<span>' + L.t.book + '</span><span class="bb-arrow">→</span>';
      btn.addEventListener('click', actions['go-booking']);
      row.appendChild(iconWrap);
      row.appendChild(textWrap);
      row.appendChild(btn);
      container.appendChild(row);
    });
  }

  function renderFaqs(L) {
    var container = el('#faq-list');
    container.innerHTML = '';
    L.faqs.forEach(function (f, i) {
      var open = state.openFaq === i;
      var row = document.createElement('div');
      row.style.cssText = 'border-bottom: 1px solid #E6E6E6;';
      var btn = document.createElement('button');
      btn.style.cssText = 'width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; background: none; border: none; cursor: pointer; padding: 20px 4px; text-align: left;';
      btn.innerHTML =
        '<span style="font-family: var(--fd); font-size: 21px; font-weight: 500; color: #333;">' + f.q + '</span>' +
        '<span style="font-family: var(--fd); font-size: 26px; color: #C28D97; transform: rotate(' + (open ? 90 : 0) + 'deg); transition: transform 0.25s ease; flex-shrink: 0;">›</span>';
      btn.addEventListener('click', function () {
        setState({ openFaq: open ? -1 : i });
      });
      var body = document.createElement('div');
      body.style.cssText = 'font-size: 14px; line-height: 1.8; color: #8A8A8A; max-height: ' + (open ? '240px' : '0px') + '; overflow: hidden; opacity: ' + (open ? 1 : 0) + '; transition: max-height 0.35s ease, opacity 0.3s ease; padding-bottom: ' + (open ? '20px' : '0px') + '; max-width: 640px;';
      body.textContent = f.a;
      row.appendChild(btn);
      row.appendChild(body);
      container.appendChild(row);
    });
  }

  function renderCredentials(L) {
    var container = el('#credentials-list');
    container.innerHTML = '';
    L.credentials.forEach(function (c) {
      var span = document.createElement('span');
      span.style.cssText = 'border: 1.5px solid #DCA9B2; color: #A66E7B; border-radius: 999px; padding: 9px 20px; font-size: 12px; font-weight: 600; letter-spacing: 0.08em;';
      span.textContent = c;
      container.appendChild(span);
    });
  }

  function renderPrices(L) {
    var container = el('#prices-list');
    container.innerHTML = '';
    L.prices.forEach(function (p, i) {
      var base = PRICES_BASE[i];
      var row = document.createElement('div');
      row.style.cssText = 'display: flex; justify-content: space-between; align-items: center; gap: 16px 24px; flex-wrap: wrap; padding: 24px 30px; background: #fff; border: 1px solid #F3D6DC; border-radius: 18px;';
      row.innerHTML =
        '<div style="flex: 1 1 220px;">' +
          '<div style="font-family: var(--fd); font-weight: 500; font-size: 22px; color: #333; margin-bottom: 3px;">' + p.title + '</div>' +
          '<div style="font-size: 13px; color: #8A8A8A;">' + p.duration + '</div>' +
        '</div>' +
        '<div style="display: flex; gap: 32px; flex-wrap: wrap;">' +
          '<div class="price-col" data-label="' + L.t.accLabel + '" style="width: 80px; text-align: center;"><span style="font-family: var(--fd); font-size: 26px; color: #A66E7B; white-space: nowrap;">' + base.accPrice + '</span></div>' +
          '<div class="price-col" data-label="' + L.t.privateLabel + '" style="width: 80px; text-align: center;"><span style="font-family: var(--fd); font-size: 26px; color: #A66E7B; white-space: nowrap;">' + base.privatePrice + '</span></div>' +
        '</div>';
      container.appendChild(row);
    });
  }

  function renderSlideshow(L) {
    SLIDES.forEach(function (sl, i) {
      var node = el('#slide-' + i);
      var active = i === state.slide;
      node.style.opacity = active ? 1 : 0;
      node.style.zIndex = active ? 2 : 1;
      node.style.transform = KEN_BURNS ? (active ? 'scale(1.06)' : 'scale(1)') : 'none';
      node.setAttribute('aria-label', L.t[sl.altKey] || '');
    });
    var dotsContainer = el('#slide-dots');
    dotsContainer.innerHTML = '';
    SLIDES.forEach(function (sl, i) {
      var active = i === state.slide;
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Go to photo');
      dot.style.cssText = 'width: ' + (active ? '22px' : '8px') + '; height: 8px; border-radius: 999px; border: none; cursor: pointer; padding: 0; background: ' + (active ? '#C28D97' : 'rgba(252,250,250,0.75)') + '; transition: width 0.3s ease, background 0.3s ease;';
      dot.addEventListener('click', function () { setState({ slide: i }); });
      dotsContainer.appendChild(dot);
    });
  }

  function renderReviews() {
    for (var i = 0; i < 2; i++) {
      var node = el('#review-' + i);
      node.style.opacity = i === state.review ? 1 : 0;
    }
  }

  function renderLangButtons() {
    els('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === state.lang;
      btn.style.background = 'none';
      btn.style.border = 'none';
      btn.style.cursor = 'pointer';
      btn.style.fontFamily = 'var(--fb)';
      btn.style.fontSize = '11px';
      btn.style.fontWeight = '600';
      btn.style.letterSpacing = '0.08em';
      btn.style.padding = '0 0 3px';
      btn.style.whiteSpace = 'nowrap';
      btn.style.color = active ? '#F8ECEE' : '#DCA9B2';
      btn.style.borderBottom = active ? '1.5px solid #C28D97' : '1.5px solid transparent';
    });
  }

  function renderMenu() {
    var open = state.menuOpen;
    var toggle = el('#menu-toggle');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    el('#burger-top').style.cssText = 'display: block; width: 21px; height: 2px; border-radius: 2px; background: #F8ECEE; transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), opacity 0.18s ease; transform: ' + (open ? 'translateY(6px) rotate(45deg)' : 'none') + ';';
    el('#burger-mid').style.cssText = 'display: block; width: 21px; height: 2px; border-radius: 2px; background: #F8ECEE; transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), opacity 0.18s ease; opacity: ' + (open ? 0 : 1) + ';';
    el('#burger-bot').style.cssText = 'display: block; width: 21px; height: 2px; border-radius: 2px; background: #F8ECEE; transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), opacity 0.18s ease; transform: ' + (open ? 'translateY(-6px) rotate(-45deg)' : 'none') + ';';
    var menu = el('#halo-menu');
    menu.style.opacity = open ? 1 : 0;
    menu.style.visibility = open ? 'visible' : 'hidden';
    menu.style.pointerEvents = open ? 'auto' : 'none';
    menu.style.transform = open ? 'translateY(0)' : 'translateY(-10px)';
  }

  function renderNavActive() {
    els('[data-nav]').forEach(function (btn) {
      btn.setAttribute('data-active', btn.getAttribute('data-nav') === state.page ? 'true' : 'false');
    });
  }

  function renderPages() {
    els('[data-page]').forEach(function (pageEl) {
      pageEl.style.display = pageEl.getAttribute('data-page') === state.page ? '' : 'none';
    });
  }

  function renderI18nText(L) {
    els('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (L.t[key] != null) node.textContent = L.t[key];
    });
  }

  function renderHeroLines(L) {
    var lines = [L.t.heroCalm1, L.t.heroCalm2].filter(function (s) { return typeof s === 'string' && s.trim(); });
    var container = el('#hero-lines');
    container.innerHTML = '';
    lines.forEach(function (ln) {
      var span = document.createElement('span');
      span.style.display = 'block';
      span.textContent = ln;
      container.appendChild(span);
    });
  }

  function render() {
    var lang = I18N[state.lang] ? state.lang : 'en';
    var L = I18N[lang];
    try {
      document.documentElement.lang = L.htmlLang;
      document.title = L.docTitle;
    } catch (e) { }

    renderI18nText(L);
    renderHeroLines(L);
    renderServices(L);
    renderFaqs(L);
    renderCredentials(L);
    renderPrices(L);
    renderSlideshow(L);
    renderReviews();
    renderLangButtons();
    renderMenu();
    renderNavActive();
    renderPages();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
      var target = e.target.closest('[data-action]');
      if (!target) return;
      var action = target.getAttribute('data-action');
      if (action === 'set-lang') {
        setLang(target.getAttribute('data-lang'));
        return;
      }
      if (actions[action]) {
        e.preventDefault();
        actions[action]();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setState({ menuOpen: false });
    });
    document.addEventListener('click', function (e) {
      if (!state.menuOpen) return;
      if (e.target && e.target.closest && e.target.closest('.site-header')) return;
      setState({ menuOpen: false });
    });

    render();
    startTimer();
  });
})();
