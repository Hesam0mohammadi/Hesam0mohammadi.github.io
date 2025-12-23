export const navItems = [
  { key: 'home', label: 'خانه', icon: 'home', path: '/' },
  { key: 'quick', label: 'حالت سریع', icon: 'bolt', path: '/quick' },
  { key: 'wallet', label: 'کیف پول', icon: 'wallet', path: '/wallet' },
  { key: 'points', label: 'امتیازها', icon: 'medal', path: '/points' },
  { key: 'calendar', label: 'تقویم', icon: 'calendar', path: '/calendar' },
  { key: 'experiences', label: 'تجربیات', icon: 'chat', path: '/experiences' },
  { key: 'group', label: 'هدیه گروهی', icon: 'group', path: '/group' },
  { key: 'games', label: 'بازی‌ها', icon: 'game', path: '/games' },
]

export const quickQuestion = {
  step: 1,
  totalSteps: 3,
  progress: 33,
  question: 'شخصیت گیرنده هدیه چگونه است؟',
  options: [
    { label: 'خلاق و هنرمند', desc: 'علاقه به هنر، موسیقی، نقاشی' },
    { label: 'تکنولوژی‌دوست', desc: 'علاقه به گجت‌ها و تکنولوژی' },
    { label: 'ورزشکار', desc: 'فعال و علاقه‌مند به ورزش' },
    { label: 'کتابخوان', desc: 'عاشق مطالعه و یادگیری' },
    { label: 'خانه‌دوست', desc: 'علاقه به دکوراسیون و خانه‌داری' },
  ],
}

export const wallets = [
  { name: 'مادر', balance: '— تومان', pending: null, history: 'هنوز فعالیتی ندارد' },
  { name: 'یسنا', balance: '۲۵۰,۰۰۰ تومان', pending: '۵۰,۰۰۰ تومان', history: 'دریافت از ۲ نفر، ۳ روز پیش' },
  { name: 'علی', balance: '۱۲۰,۰۰۰ تومان', pending: null, history: 'برداشت ۱ هفته پیش' },
]

export const pointsActions = [
  { title: 'تکمیل پروفایل افراد', points: '+20', desc: 'افزودن اطلاعات دقیق', icon: 'check' },
  { title: 'نوشتن پیام شخصی', points: '+10', desc: 'سفارشی‌سازی هدیه', icon: 'chat' },
  { title: 'استفاده از حالت سریع', points: '+20', desc: 'خرید سریع', icon: 'bolt' },
  { title: 'اولین خرید ماه', points: '+100', desc: 'بونوس ماهانه', icon: 'calendar' },
  { title: 'خرید هدیه', points: '+50', desc: 'هر خرید موفق', icon: 'gift' },
  { title: 'نظرسنجی', points: '+15', desc: 'شرکت در نظرسنجی', icon: 'star' },
]

export const rewards = [
  { title: 'بسته‌بندی رایگان', cost: '۳۰۰ امتیاز', color: 'from-emerald-400 to-emerald-500' },
  { title: 'تخفیف ۲۰٪', cost: '۱,۰۰۰ امتیاز', color: 'from-pink-500 to-purple-500' },
  { title: 'تخفیف ۱۰٪', cost: '۵۰۰ امتیاز', color: 'from-sky-500 to-blue-500' },
  { title: 'هدیه ویژه', cost: '۱,۵۰۰ امتیاز', color: 'from-rose-400 to-rose-500' },
  { title: 'ارسال رایگان', cost: '۲۰۰ امتیاز', color: 'from-teal-400 to-cyan-500' },
  { title: 'اعتبار ۵۰ هزار تومان', cost: '۲,۰۰۰ امتیاز', color: 'from-amber-400 to-orange-400' },
]

export const events = [
  { title: 'یسنا', type: 'تولد', date: '۲۰ آذر', remaining: '۹ روز مانده', tone: 'orange' },
  { title: 'پدر', type: 'بازنشستگی', date: '۱۰ دی', remaining: '۲۹ روز مانده', tone: 'blue' },
  { title: 'علی', type: 'تولد', date: '۱۵ دی', remaining: '۳۴ روز مانده', tone: 'gray' },
  { title: 'مادر', type: 'روز مادر', date: '۲۵ اسفند', remaining: '۱۰۵ روز مانده', tone: 'purple' },
  { title: 'همسر', type: 'سالگرد ازدواج', date: '۵ بهمن', remaining: '۵۵ روز مانده', tone: 'rose' },
]

export const experiences = [
  {
    title: 'هدیه: رمان علمی تخیلی',
    tags: ['کتاب', 'تولد'],
    status: 'success',
    body: 'برای دوستم که عاشق فضا و علم است یک مجموعه رمان علمی تخیلی خریدیم. واقعا خوشحال شد و گفت بهترین هدیه‌ای بود که تا به حال گرفته!',
    likes: 24,
    time: '۵ روز پیش',
  },
  {
    title: 'هدیه: تیشرت',
    tags: ['لباس', 'تولد'],
    status: 'fail',
    body: 'فکر کردم یک تیشرت ساده می‌تونه هدیه خوبی باشه، ولی متوجه شدم که فرد سلیقه خیلی خاصی دارد. بهتر بود اول سلیقه‌اش را می‌پرسیدم.',
    likes: 8,
    time: '۱ هفته پیش',
  },
]

export const groupGift = {
  title: 'پدر - بازنشستگی',
  product: 'ساعت مچی لوکس',
  price: '۳,۰۰۰,۰۰۰ تومان',
  target: '۴,۵۰۰,۰۰۰ تومان',
  progress: 73,
  deadline: '۱۰ دی',
  contributors: [
    { name: 'شما', amount: '۵۰۰,۰۰۰', status: 'paid' },
    { name: 'برادر', amount: '۴۰۰,۰۰۰', status: 'paid' },
    { name: 'خواهر', amount: '—', status: 'pending' },
  ],
}

export const suggestions = [
  { name: 'دوره آنلاین آشپزی', match: '88%', tag: 'مادر', price: '۴۵۰,۰۰۰ تومان' },
  { name: 'مجموعه نقاشی آبرنگ', match: '95%', tag: 'یسنا', price: '۳۸۰,۰۰۰ تومان' },
]

export const importantPeople = [
  { name: 'علی', relation: 'دوست', tags: ['ورزش', 'تکنولوژی', 'بازی'], wallet: '۱۲۰,۰۰۰ تومان', event: 'تولد ۱۵ دی · ۳۴ روز مانده' },
  { name: 'مادر', relation: 'مادر', tags: ['گل', 'آشپزی', 'سفر'], event: 'روز مادر · ۴۵ روز مانده' },
  { name: 'یسنا', relation: 'دختر', tags: ['کتاب', 'هنر', 'موسیقی'], wallet: '۲۵۰,۰۰۰ تومان', event: 'تولد ۲۰ آذر · ۹ روز مانده' },
]

