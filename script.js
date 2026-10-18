const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const translations = {
  ru: {
    navHome: 'Главная',
    navServices: 'Услуги',
    navMasters: 'Мастера',
    navAbout: 'О студии',
    navContacts: 'Контакты',
    bookNow: 'Записаться',
    heroEyebrow: 'БАРБЕР-СТУДИЯ · КИЕВ',
    heroCopy: 'Мужские стрижки, оформление бороды и уход.',
    bookAppointment: 'Записаться на приём',
    viewServices: 'Смотреть услуги',
    heroLocation: 'КИЕВ · ПН–ВС 10:00–22:00',
    heroNote: 'Стрижки · Борода · Уход',
    servicesEyebrow: 'УСЛУГИ',
    servicesTitle: 'Услуги и цены',
    servicesIntro: 'Выбери услугу. Длительность и стоимость указаны в карточках.',
    categoryCut: 'СТРИЖКА',
    categoryBeard: 'БОРОДА',
    categoryShave: 'БРИТЬЁ',
    categoryStyle: 'УКЛАДКА',
    categoryCombo: 'КОМПЛЕКС',
    serviceHaircut: 'Мужская стрижка',
    descHaircut: 'Классические и современные формы.',
    serviceBeard: 'Коррекция бороды',
    descBeard: 'Форма, контур и уход за кожей.',
    serviceShave: 'Бритьё опасной бритвой',
    descShave: 'Горячее полотенце и классическое бритьё.',
    serviceStyling: 'Укладка',
    descStyling: 'Финишная укладка с подходящими средствами.',
    serviceCombo: 'Стрижка + борода',
    descCombo: 'Стрижка и оформление бороды за один визит.',
    minutes: 'мин',
    needHelp: 'Не знаешь, что выбрать?',
    helpChoose: 'Поможем выбрать',
    priceNote: 'Оплата в студии · Цены в гривнах',
    aboutEyebrow: 'О СТУДИИ',
    aboutTitle: 'Барбершоп в центре Киева',
    aboutCopy: 'Стрижки, оформление бороды и ежедневный уход. Работаем по записи, используем профессиональные средства и обсуждаем желаемый результат до начала стрижки.',
    valueOneTitle: 'Опытные мастера',
    valueOneCopy: 'Классические и современные техники.',
    valueTwoTitle: 'Профессиональные средства',
    valueTwoCopy: 'Подбор под тип волос и кожи.',
    valueThreeTitle: 'Удобная запись',
    valueThreeCopy: 'Выбери мастера и время онлайн.',
    mastersEyebrow: 'КОМАНДА',
    mastersTitle: 'Наши мастера',
    mastersIntro: 'Выбери мастера или оставь выбор за нами.',
    roleSenior: 'ТОП-БАРБЕР',
    roleBarber: 'БАРБЕР',
    masterAlex: 'Алексей К.',
    skillAlex: 'Классика и фейды',
    masterDanylo: 'Даниил С.',
    skillDanylo: 'Текстура и современные формы',
    masterMaksym: 'Максим Р.',
    skillMaksym: 'Борода и индивидуальные формы',
    masterIvan: 'Иван П.',
    skillIvan: 'Стрижки и укладка',
    bookingEyebrow: 'ЗАПИСЬ',
    bookingTitle: 'Запись на приём<br>в 4 шага',
    bookingCopy: 'Выбери услугу, мастера и удобное время.',
    stepService: 'Услуга',
    stepMaster: 'Мастер',
    stepDate: 'Дата и время',
    stepConfirm: 'Контакты и подтверждение',
    footerType: 'Барбер-студия · Киев',
    footerMenu: 'МЕНЮ',
    footerContacts: 'КОНТАКТЫ',
    footerSocial: 'СОЦСЕТИ',
    address: 'Киев, ул. Примерная, 12',
    hours: 'Пн–Вс · 10:00–22:00',
    demoNote: 'Концепт сайта · Данные для примера',
    stepLabel: 'ШАГ',
    back: 'Назад',
    continue: 'Продолжить',
    demoBookingNote: 'Демонстрационная форма: запись не отправляется в студию.',
    modal1Title: 'Выбери услугу',
    modal1Sub: 'Стоимость указана за один визит.',
    modal2Title: 'Выбери мастера',
    modal2Sub: 'Или выбери любого свободного мастера.',
    modal3Title: 'Выбери дату и время',
    modal4Title: 'Контактные данные',
    modal4Sub: 'Оставь номер для подтверждения записи.',
    anyMaster: 'Любой свободный мастер',
    seniorBarber: 'Топ-барбер',
    barber: 'Барбер',
    dateAvailable: 'Доступное время',
    nameLabel: 'Имя',
    namePlaceholder: 'Как к тебе обращаться?',
    phoneLabel: 'Телефон',
    phonePlaceholder: '+380 00 000 00 00',
    summaryService: 'Услуга',
    summaryMaster: 'Мастер',
    summaryDate: 'Дата и время',
    summaryPrice: 'Стоимость в студии',
    confirm: 'Подтвердить запись',
    close: 'Закрыть',
    successEyebrow: 'ДЕМО-ЗАПИСЬ СОЗДАНА',
    successTitle: 'Спасибо, {name}.',
    successText: 'Это демонстрационная заявка. Она сохранена в этом браузере, но не отправлена в студию.',
    successButton: 'Готово',
    download: 'Скачать детали записи',
    serviceError: 'Выбери услугу, чтобы продолжить.',
    masterError: 'Выбери мастера.',
    dateError: 'Выбери дату и время.',
    nameError: 'Введи имя (не менее двух символов).',
    phoneError: 'Проверь номер телефона.',
    requestId: 'Номер заявки',
    minutesLong: 'минут',
    currency: 'грн',
    bookingFileTitle: 'SnipSnap Dept. — запись',
    mon: 'ПН',
    tue: 'ВТ',
    wed: 'СР',
    thu: 'ЧТ',
    fri: 'ПТ',
    sat: 'СБ',
    sun: 'ВС'
  },
  en: {
    navHome: 'Home',
    navServices: 'Services',
    navMasters: 'Barbers',
    navAbout: 'About',
    navContacts: 'Contact',
    bookNow: 'Book now',
    heroEyebrow: 'BARBER STUDIO · KYIV',
    heroCopy: 'Men’s haircuts, beard trims and grooming.',
    bookAppointment: 'Book an appointment',
    viewServices: 'View services',
    heroLocation: 'KYIV · MON–SUN 10 AM–10 PM',
    heroNote: 'Haircuts · Beard · Grooming',
    servicesEyebrow: 'SERVICES',
    servicesTitle: 'Services & prices',
    servicesIntro: 'Choose a service. Duration and price are listed on each card.',
    categoryCut: 'HAIRCUT',
    categoryBeard: 'BEARD',
    categoryShave: 'SHAVE',
    categoryStyle: 'STYLING',
    categoryCombo: 'COMBO',
    serviceHaircut: 'Men’s haircut',
    descHaircut: 'Classic cuts and modern styles.',
    serviceBeard: 'Beard trim',
    descBeard: 'Shape, define and care for your beard.',
    serviceShave: 'Hot towel shave',
    descShave: 'A traditional shave with a hot towel.',
    serviceStyling: 'Hair styling',
    descStyling: 'Finish with products suited to your hair.',
    serviceCombo: 'Haircut + beard',
    descCombo: 'A haircut and beard trim in one visit.',
    minutes: 'min',
    needHelp: 'Not sure what to choose?',
    helpChoose: 'Help me choose',
    priceNote: 'Pay in studio · Prices in UAH',
    aboutEyebrow: 'ABOUT THE STUDIO',
    aboutTitle: 'A barbershop in central Kyiv',
    aboutCopy: 'Haircuts, beard care and everyday grooming. Appointments are scheduled in advance, professional products are used, and we agree on the look before getting started.',
    valueOneTitle: 'Experienced barbers',
    valueOneCopy: 'Classic and modern techniques.',
    valueTwoTitle: 'Professional products',
    valueTwoCopy: 'Chosen for your hair and skin.',
    valueThreeTitle: 'Easy booking',
    valueThreeCopy: 'Choose a barber and time online.',
    mastersEyebrow: 'THE TEAM',
    mastersTitle: 'Meet our barbers',
    mastersIntro: 'Pick a barber or leave the choice to us.',
    roleSenior: 'SENIOR BARBER',
    roleBarber: 'BARBER',
    masterAlex: 'Alex K.',
    skillAlex: 'Classic cuts and fades',
    masterDanylo: 'Danylo S.',
    skillDanylo: 'Texture and modern styles',
    masterMaksym: 'Maksym R.',
    skillMaksym: 'Beard work and custom styles',
    masterIvan: 'Ivan P.',
    skillIvan: 'Haircuts and styling',
    bookingEyebrow: 'BOOKING',
    bookingTitle: 'Book an appointment<br>in 4 steps',
    bookingCopy: 'Choose a service, a barber and a convenient time.',
    stepService: 'Service',
    stepMaster: 'Barber',
    stepDate: 'Date & time',
    stepConfirm: 'Contact & confirmation',
    footerType: 'Barber studio · Kyiv',
    footerMenu: 'MENU',
    footerContacts: 'CONTACT',
    footerSocial: 'FOLLOW US',
    address: '12 Prykladna St., Kyiv',
    hours: 'Mon–Sun · 10 AM–10 PM',
    demoNote: 'Website concept · Sample details',
    stepLabel: 'STEP',
    back: 'Back',
    continue: 'Continue',
    demoBookingNote: 'Demo form: this appointment is not sent to the studio.',
    modal1Title: 'Choose a service',
    modal1Sub: 'Prices are per visit.',
    modal2Title: 'Choose a barber',
    modal2Sub: 'Or choose any available barber.',
    modal3Title: 'Choose a date and time',
    modal4Title: 'Your contact details',
    modal4Sub: 'Add a phone number so the booking can be confirmed.',
    anyMaster: 'Any available barber',
    seniorBarber: 'Senior barber',
    barber: 'Barber',
    dateAvailable: 'Available times',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+380 00 000 00 00',
    summaryService: 'Service',
    summaryMaster: 'Barber',
    summaryDate: 'Date & time',
    summaryPrice: 'Pay in studio',
    confirm: 'Confirm booking',
    close: 'Close',
    successEyebrow: 'DEMO BOOKING CREATED',
    successTitle: 'Thank you, {name}.',
    successText: 'This is a demo booking. It is saved in this browser but has not been sent to the studio.',
    successButton: 'Done',
    download: 'Download booking details',
    serviceError: 'Choose a service to continue.',
    masterError: 'Choose a barber.',
    dateError: 'Choose a date and time.',
    nameError: 'Enter a name of at least two characters.',
    phoneError: 'Check the phone number.',
    requestId: 'Booking ID',
    minutesLong: 'min',
    currency: 'UAH',
    bookingFileTitle: 'SnipSnap Dept. — booking',
    mon: 'MON',
    tue: 'TUE',
    wed: 'WED',
    thu: 'THU',
    fri: 'FRI',
    sat: 'SAT',
    sun: 'SUN'
  },
  uk: {
    navHome: 'Головна',
    navServices: 'Послуги',
    navMasters: 'Майстри',
    navAbout: 'Про студію',
    navContacts: 'Контакти',
    bookNow: 'Записатися',
    heroEyebrow: 'БАРБЕР-СТУДІЯ · КИЇВ',
    heroCopy: 'Чоловічі стрижки, оформлення бороди та догляд.',
    bookAppointment: 'Записатися на прийом',
    viewServices: 'Переглянути послуги',
    heroLocation: 'КИЇВ · ПН–НД 10:00–22:00',
    heroNote: 'Стрижки · Борода · Догляд',
    servicesEyebrow: 'ПОСЛУГИ',
    servicesTitle: 'Послуги та ціни',
    servicesIntro: 'Обери послугу. Тривалість і вартість вказані на картках.',
    categoryCut: 'СТРИЖКА',
    categoryBeard: 'БОРОДА',
    categoryShave: 'ГОЛІННЯ',
    categoryStyle: 'УКЛАДАННЯ',
    categoryCombo: 'КОМПЛЕКС',
    serviceHaircut: 'Чоловіча стрижка',
    descHaircut: 'Класичні та сучасні форми.',
    serviceBeard: 'Корекція бороди',
    descBeard: 'Форма, контур і догляд за шкірою.',
    serviceShave: 'Гоління небезпечною бритвою',
    descShave: 'Гаряче рушник і класичне гоління.',
    serviceStyling: 'Укладання',
    descStyling: 'Фінальне укладання з відповідними засобами.',
    serviceCombo: 'Стрижка + борода',
    descCombo: 'Стрижка й оформлення бороди за один візит.',
    minutes: 'хв',
    needHelp: 'Не знаєш, що обрати?',
    helpChoose: 'Допоможемо обрати',
    priceNote: 'Оплата у студії · Ціни у гривнях',
    aboutEyebrow: 'ПРО СТУДІЮ',
    aboutTitle: 'Барбершоп у центрі Києва',
    aboutCopy: 'Стрижки, оформлення бороди та щоденний догляд. Працюємо за записом, використовуємо професійні засоби й обговорюємо бажаний результат до початку стрижки.',
    valueOneTitle: 'Досвідчені майстри',
    valueOneCopy: 'Класичні та сучасні техніки.',
    valueTwoTitle: 'Професійні засоби',
    valueTwoCopy: 'Підбір для волосся та шкіри.',
    valueThreeTitle: 'Зручний запис',
    valueThreeCopy: 'Обери майстра й час онлайн.',
    mastersEyebrow: 'КОМАНДА',
    mastersTitle: 'Наші майстри',
    mastersIntro: 'Обери майстра або довір вибір нам.',
    roleSenior: 'ТОП-БАРБЕР',
    roleBarber: 'БАРБЕР',
    masterAlex: 'Олексій К.',
    skillAlex: 'Класика та фейди',
    masterDanylo: 'Данило С.',
    skillDanylo: 'Текстура й сучасні форми',
    masterMaksym: 'Максим Р.',
    skillMaksym: 'Борода та індивідуальні форми',
    masterIvan: 'Іван П.',
    skillIvan: 'Стрижки й укладання',
    bookingEyebrow: 'ЗАПИС',
    bookingTitle: 'Запис на прийом<br>у 4 кроки',
    bookingCopy: 'Обери послугу, майстра та зручний час.',
    stepService: 'Послуга',
    stepMaster: 'Майстер',
    stepDate: 'Дата й час',
    stepConfirm: 'Контакти та підтвердження',
    footerType: 'Барбер-студія · Київ',
    footerMenu: 'МЕНЮ',
    footerContacts: 'КОНТАКТИ',
    footerSocial: 'СОЦМЕРЕЖІ',
    address: 'Київ, вул. Прикладна, 12',
    hours: 'Пн–Нд · 10:00–22:00',
    demoNote: 'Концепт сайту · Демонстраційні дані',
    stepLabel: 'КРОК',
    back: 'Назад',
    continue: 'Продовжити',
    demoBookingNote: 'Демонстраційна форма: запис не надсилається до студії.',
    modal1Title: 'Обери послугу',
    modal1Sub: 'Вартість вказана за один візит.',
    modal2Title: 'Обери майстра',
    modal2Sub: 'Або обери будь-якого вільного майстра.',
    modal3Title: 'Обери дату й час',
    modal4Title: 'Контактні дані',
    modal4Sub: 'Залиш номер телефону для підтвердження запису.',
    anyMaster: 'Будь-який вільний майстер',
    seniorBarber: 'Топ-барбер',
    barber: 'Барбер',
    dateAvailable: 'Вільний час',
    nameLabel: 'Ім’я',
    namePlaceholder: 'Як до тебе звертатися?',
    phoneLabel: 'Номер телефону',
    phonePlaceholder: '+380 00 000 00 00',
    summaryService: 'Послуга',
    summaryMaster: 'Майстер',
    summaryDate: 'Дата й час',
    summaryPrice: 'Вартість у студії',
    confirm: 'Підтвердити запис',
    close: 'Готово',
    successEyebrow: 'ДЕМОЗАПИС СТВОРЕНО',
    successTitle: 'Дякуємо, {name}.',
    successText: 'Це демонстраційна заявка. Її збережено в цьому браузері, але не надіслано до студії.',
    successButton: 'Готово',
    download: 'Завантажити деталі запису',
    serviceError: 'Обери послугу, щоб продовжити.',
    masterError: 'Обери майстра.',
    dateError: 'Обери дату й час.',
    nameError: 'Вкажи ім’я (щонайменше два символи).',
    phoneError: 'Перевір номер телефону.',
    requestId: 'Номер заявки',
    minutesLong: 'хв',
    currency: 'грн',
    bookingFileTitle: 'SnipSnap Dept. — запис',
    mon: 'ПН',
    tue: 'ВТ',
    wed: 'СР',
    thu: 'ЧТ',
    fri: 'ПТ',
    sat: 'СБ',
    sun: 'НД'
  }
};
const serviceDefs = [
{
  id: 'haircut',
  nameKey: 'serviceHaircut',
  descKey: 'descHaircut',
  duration: 45,
  price: 650,
  photo: 'photo-cut'
}, 
{
  id: 'beard',
  nameKey: 'serviceBeard',
  descKey: 'descBeard',
  duration: 30,
  price: 420,
  photo: 'photo-beard'
}, 
{
  id: 'shave',
  nameKey: 'serviceShave',
  descKey: 'descShave',
  duration: 45,
  price: 550,
  photo: 'photo-combo'
}, 
{
  id: 'styling',
  nameKey: 'serviceStyling',
  descKey: 'descStyling',
  duration: 30,
  price: 280,
  photo: 'photo-style'
}, 
{
  id: 'combo',
  nameKey: 'serviceCombo',
  descKey: 'descCombo',
  duration: 75,
  price: 950,
  photo: 'photo-combo2'
}
];
const masterDefs = [
{
  id: 'alex',
  nameKey: 'masterAlex',
  roleKey: 'roleSenior',
  rating: '4.9',
  reviews: 124,
  img: 'assets/masters/alex-k.jpg'
}, 
{
  id: 'danylo',
  nameKey: 'masterDanylo',
  roleKey: 'roleBarber',
  rating: '4.8',
  reviews: 98,
  img: 'assets/masters/danylo-s.jpg'
}, 
{
  id: 'maksym',
  nameKey: 'masterMaksym',
  roleKey: 'roleBarber',
  rating: '4.9',
  reviews: 87,
  img: 'assets/masters/maksym-r.jpg'
}, 
{
  id: 'ivan',
  nameKey: 'masterIvan',
  roleKey: 'roleBarber',
  rating: '4.7',
  reviews: 65,
  img: 'assets/masters/ivan-p.jpg'
}, 
{
  id: 'any',
  nameKey: 'anyMaster',
  roleKey: 'roleBarber',
  rating: '—',
  reviews: 0,
  img: ''
}
];
let locale = 'ru';
try {
  locale = localStorage.getItem('snipsnap-locale') || 'ru';
}
catch (_) {
}
if (!translations[locale]) locale = 'ru';
const state = {
  step: 1,
  service: null,
  master: null,
  date: null,
  time: null,
  name: '',
  phone: ''
};
const modal = $('#bookingModal');
const content = $('#bookingContent');
const nextBtn = $('#nextBtn');
const backBtn = $('#backBtn');
const progress = $('.progress-fill');
const stepNumber = $('#stepNumber');
let monthOffset = 0;
let toastTimer;
let completedBooking = null;
function t(key) {
  return translations[locale][key] ?? translations.ru[key] ?? key;
}
function service(id) {
  return serviceDefs.find(s => s.id === id);
}
function master(id) {
  return masterDefs.find(m => m.id === id);
}
function serviceName(id) {
  const item = service(id);
  return item ? t(item.nameKey) : '';
}
function masterName(id) {
  const item = master(id);
  return item ? (item.id === 'any' ? t('anyMaster') : t(item.nameKey)) : '';
}
function numberPrice(n) {
  return `${new Intl.NumberFormat(locale==='en'?'en-GB':locale==='uk'?'uk-UA':'ru-RU').format(n)} ₴`;
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }
  [c]));
}
function applyLocale() {
  document.documentElement.lang = locale === 'uk' ? 'uk' : locale;
  document.title = locale === 'en' ? 'SnipSnap Dept. — Barber Studio' : locale === 'uk' ? 'SnipSnap Dept. — Барбер-студія' : 'SnipSnap Dept. — Барбер-студия';
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t(key) !== undefined) el.innerHTML = t(key);
  });
  $$('[data-lang]').forEach(btn => {
    const active = btn.dataset.lang === locale;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  $$('.service-card').forEach(card => {
    const s = service(card.dataset.service);
    if (s) {
      card.setAttribute('aria-label', serviceName(s.id));
    }
  });
  $$('[data-master]').forEach(btn => {
    const m = master(btn.dataset.master);
    if (m) btn.setAttribute('aria-label', `${locale==='en'?'Choose ':locale==='uk'?'Обрати ':'Выбрать '}${masterName(m.id)}`);
  });
  if (modal.classList.contains('is-open')) {
    if (completedBooking) renderSuccess();
    else renderStep();
  }
}
$$('[data-lang]').forEach(button => button.addEventListener('click', () => {
  locale = button.dataset.lang;
  try {
    localStorage.setItem('snipsnap-locale', locale);
  }
  catch (_) {
  }
  applyLocale();
}));
const menuToggle = $('.menu-toggle');
const nav = $('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
$$('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
function openBooking(serviceId = null, masterId = null) {
  state.step = 1;
  state.service = serviceId ? service(serviceId) : null;
  state.master = masterId ? master(masterId) : null;
  state.date = null;
  state.time = null;
  state.name = '';
  state.phone = '';
  monthOffset = 0;
  completedBooking = null;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  backBtn.style.display = '';
  nextBtn.style.display = '';
  renderStep();
  setTimeout(() => $('.modal-close').focus(), 30);
}
function closeBooking() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
$$('[data-book]').forEach(button => button.addEventListener('click', () => openBooking()));
$$('[data-service]').forEach(card => {
  const action = () => openBooking(card.dataset.service);
  card.addEventListener('click', action);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  });
});
$$('[data-master]').forEach(button => button.addEventListener('click', () => openBooking(null, button.dataset.master)));
$$('[data-close]').forEach(button => button.addEventListener('click', closeBooking));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeBooking();
});
backBtn.addEventListener('click', () => {
  if (state.step > 1) {
    state.step--;
    renderStep();
  }
});
nextBtn.addEventListener('click', () => {
  if (state.step < 4) {
    if (!validateStep()) return;
    state.step++;
    renderStep();
  }
  else {
    if (!validateStep()) return;
    completedBooking = createBooking();
    renderSuccess();
  }
});
function validateStep() {
  if (state.step === 1 && !state.service) {
    showToast(t('serviceError'));
    return false;
  }
  if (state.step === 2 && !state.master) {
    showToast(t('masterError'));
    return false;
  }
  if (state.step === 3 && (!state.date || !state.time)) {
    showToast(t('dateError'));
    return false;
  }
  if (state.step === 4) {
    state.name = $('#clientName')?.value.trim() || state.name;
    state.phone = $('#clientPhone')?.value.trim() || state.phone;
    if (state.name.length < 2) {
      showToast(t('nameError'));
      $('#clientName')?.focus();
      return false;
    }
    if (state.phone.replace(/\D/g, '').length < 10) {
      showToast(t('phoneError'));
      $('#clientPhone')?.focus();
      return false;
    }
  }
  return true;
}
function renderStep() {
  completedBooking = null;
  stepNumber.textContent = String(state.step).padStart(2, '0');
  progress.style.width = `${state.step*25}%`;
  backBtn.style.display = '';
  nextBtn.style.display = '';
  backBtn.disabled = state.step === 1;
  backBtn.innerHTML = `← <span>${esc(t('back'))}</span>`;
  nextBtn.innerHTML = state.step === 4 ? `<span>${esc(t('confirm'))}</span><span>↗</span>` : `<span>${esc(t('continue'))}</span><span>→</span>`;
  if (state.step === 1) {
    content.innerHTML = `<h2 id="modalTitle">${esc(t('modal1Title'))}</h2><p class="modal-subtitle">${esc(t('modal1Sub'))}</p><div class="choice-list">${serviceDefs.map(s=>`<button class="choice ${state.service?.id===s.id?'selected':''}" data-pick-service="${s.id}"><span><strong>${esc(t(s.nameKey))}</strong><small>${s.duration} ${esc(t('minutesLong'))} · ${esc(t(s.descKey))}</small></span><span class="choice-price">${numberPrice(s.price)}</span></button>`).join('')}</div>`;
    $$('[data-pick-service]', content).forEach(button => button.addEventListener('click', () => {
      state.service = service(button.dataset.pickService);
      renderStep();
    }));
  }
  else if (state.step === 2) {
    content.innerHTML = `<h2 id="modalTitle">${esc(t('modal2Title'))}</h2><p class="modal-subtitle">${esc(t('modal2Sub'))}</p><div class="choice-list">${masterDefs.map(m=>`<button class="choice ${state.master?.id===m.id?'selected':''}" data-pick-master="${m.id}"><span class="master-choice">${m.img?`<img src="${m.img}" alt="" loading="lazy">`:''}<span><strong>${esc(masterName(m.id))}</strong><small>${esc(t(m.roleKey))}${m.id!=='any'?` · ★ ${m.rating} (${m.reviews})`:''}</small></span></span><span class="choice-price">↗</span></button>`).join('')}</div>`;
    $$('[data-pick-master]', content).forEach(button => button.addEventListener('click', () => {
      state.master = master(button.dataset.pickMaster);
      renderStep();
    }));
  }
  else if (state.step === 3) {
    content.innerHTML = `<h2 id="modalTitle">${esc(t('modal3Title'))}</h2><p class="modal-subtitle">${esc(serviceName(state.service.id))} · ${esc(masterName(state.master.id))}</p><div class="calendar"><div class="calendar-head"><button id="prevMonth" aria-label="←">←</button><strong id="monthLabel"></strong><button id="nextMonth" aria-label="→">→</button></div><div class="date-grid" id="dateGrid"></div></div><p class="eyebrow" style="margin:18px 0 10px">${esc(t('dateAvailable').toUpperCase())}</p><div class="time-grid">${['10:00','10:45','11:30','12:15','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map(time=>`<button class="time-option ${state.time===time?'selected':''}" data-time="${time}">${time}</button>`).join('')}</div>`;
    renderCalendar();
    $('#prevMonth').addEventListener('click', () => {
      if (monthOffset > 0) {
        monthOffset--;
        renderCalendar();
      }
    });
    $('#nextMonth').addEventListener('click', () => {
      monthOffset++;
      renderCalendar();
    });
    $$('[data-time]', content).forEach(button => button.addEventListener('click', () => {
      state.time = button.dataset.time;
      renderStep();
    }));
  }
  else {
    content.innerHTML = `<h2 id="modalTitle">${esc(t('modal4Title'))}</h2><p class="modal-subtitle">${esc(t('modal4Sub'))}</p><div class="field"><label for="clientName">${esc(t('nameLabel'))}</label><input id="clientName" name="name" autocomplete="name" placeholder="${esc(t('namePlaceholder'))}" value="${esc(state.name)}" required></div><div class="field"><label for="clientPhone">${esc(t('phoneLabel'))}</label><input id="clientPhone" name="tel" autocomplete="tel" type="tel" placeholder="${esc(t('phonePlaceholder'))}" value="${esc(state.phone)}" required></div><div class="summary"><div class="summary-row"><span>${esc(t('summaryService'))}</span><strong>${esc(serviceName(state.service.id))}</strong></div><div class="summary-row"><span>${esc(t('summaryMaster'))}</span><strong>${esc(masterName(state.master.id))}</strong></div><div class="summary-row"><span>${esc(t('summaryDate'))}</span><strong>${esc(formatDate(state.date))} · ${esc(state.time)}</strong></div><div class="summary-row summary-total"><span>${esc(t('summaryPrice'))}</span><strong>${numberPrice(state.service.price)}</strong></div></div>`;
    $('#clientName').addEventListener('input', event => state.name = event.target.value);
    $('#clientPhone').addEventListener('input', event => state.phone = event.target.value);
  }
}
function renderCalendar() {
  const base = new Date();
  base.setDate(1);
  base.setMonth(base.getMonth() + monthOffset);
  const dateLocale = locale === 'en' ? 'en-GB' : locale === 'uk' ? 'uk-UA' : 'ru-RU';
  $('#monthLabel').textContent = new Intl.DateTimeFormat(dateLocale, {
    month: 'long',
    year: 'numeric'
  }).format(base);
  $('#prevMonth').disabled = monthOffset === 0;
  const grid = $('#dateGrid');
  const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  grid.innerHTML = dayKeys.map(key => `<span class="date-day">${esc(t(key))}</span>`).join('');
  const offset = (base.getDay() + 6)%7;
  for (let i = 0; i < offset; i++) grid.insertAdjacentHTML('beforeend', '<span></span>');
  const days = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let day = 1; day <= days; day++) {
    const date = new Date(base.getFullYear(), base.getMonth(), day);
    const iso = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const disabled = date < today || date.getDay() === 1;
    grid.insertAdjacentHTML('beforeend', `<button class="date-option ${state.date===iso?'selected':''}" data-date="${iso}" ${disabled?'disabled':''}>${day}</button>`);
  }
  $$('[data-date]', grid).forEach(button => button.addEventListener('click', () => {
    state.date = button.dataset.date;
    renderStep();
  }));
}
function formatDate(iso) {
  if (!iso) return '';
  const dateLocale = locale === 'en' ? 'en-GB' : locale === 'uk' ? 'uk-UA' : 'ru-RU';
  return new Intl.DateTimeFormat(dateLocale, {
    day: 'numeric',
    month: 'long',
    weekday: 'short'
  }).format(new Date(`${iso}T12:00:00`));
}
function renderSuccess() {
  if (!completedBooking) return;
  stepNumber.textContent = '04';
  progress.style.width = '100%';
  backBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  content.innerHTML = `<div class="success-state"><div class="success-icon">✓</div><p class="eyebrow">${esc(t('successEyebrow'))}</p><h2 id="modalTitle">${esc(t('successTitle').replace('{name}',completedBooking.name))}</h2><p>${esc(serviceName(completedBooking.service))} · ${esc(masterName(completedBooking.master))}<br>${esc(formatDate(completedBooking.date))} · ${esc(completedBooking.time)}<br>${esc(numberPrice(completedBooking.price))}</p><p>${esc(t('successText'))}</p><button class="button button-light" id="closeSuccess">${esc(t('successButton'))} <span>✓</span></button><button class="underlined-link" id="downloadBooking" style="display:block;margin:18px auto 0">${esc(t('download'))} ↓</button></div>`;
  $('#closeSuccess').addEventListener('click', closeBooking);
  $('#downloadBooking').addEventListener('click', () => downloadBooking(completedBooking));
}
function createBooking() {
  const entry = {
    id: 'SS-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
    service: state.service.id,
    master: state.master.id,
    date: state.date,
    time: state.time,
    name: state.name,
    phone: state.phone,
    price: state.service.price,
    createdAt: new Date().toISOString()
  };
  try {
    const records = JSON.parse(localStorage.getItem('snipsnap-demo-bookings') || '[]');
    records.push(entry);
    localStorage.setItem('snipsnap-demo-bookings', JSON.stringify(records));
  }
  catch (_) {
  }
  return entry;
}
function downloadBooking(booking) {
  const lines = [t('bookingFileTitle'), `${t('requestId')}: ${booking.id}`, `${t('nameLabel')}: ${booking.name}`, `${t('phoneLabel')}: ${booking.phone}`, `${t('summaryService')}: ${serviceName(booking.service)}`, `${t('summaryMaster')}: ${masterName(booking.master)}`, `${t('summaryDate')}: ${formatDate(booking.date)} · ${booking.time}`, `${t('summaryPrice')}: ${numberPrice(booking.price)}`, t('demoBookingNote')];
  const blob = new Blob([lines.join('\n')], {
    type: 'text/plain;charset=utf-8'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `snipsnap-booking-${booking.id}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}
function showToast(message) {
  const toast = $('.toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
// The form is deliberately a front-end demo. It stores entries locally and does not send data to a server.
applyLocale();
