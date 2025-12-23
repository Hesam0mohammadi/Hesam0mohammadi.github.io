import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import {
  navItems,
  quickQuestion,
  wallets,
  pointsActions,
  rewards,
  events,
  experiences,
  groupGift,
  suggestions,
  importantPeople,
} from './data/mockData'
import './App.css'

const Icon = ({ name, className = '' }) => {
  const base = 'w-5 h-5'
  switch (name) {
    case 'home':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m4 10 8-6 8 6v8.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5V10Z" />
        </svg>
      )
    case 'bolt':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m7.5 13.5 4-9m-4 9H13m-1.5 5.5 4-9m-4 9H17" />
        </svg>
      )
    case 'wallet':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="14" rx="3" strokeWidth="1.8" />
          <path strokeWidth="1.8" strokeLinecap="round" d="M15 12h5v4h-5z" />
        </svg>
      )
    case 'medal':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="9" r="4" strokeWidth="1.8" />
          <path strokeWidth="1.8" strokeLinecap="round" d="M9 13 7 21l5-2 5 2-2-8" />
        </svg>
      )
    case 'calendar':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth="1.8" />
          <path strokeWidth="1.8" strokeLinecap="round" d="M3 10h18M9 3v4M15 3v4" />
        </svg>
      )
    case 'chat':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 17.5 3.5 21l3.5-2h9a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 2 2.8Z" />
        </svg>
      )
    case 'group':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3" strokeWidth="1.8" />
          <circle cx="17" cy="10" r="3" strokeWidth="1.8" />
          <path strokeWidth="1.8" strokeLinecap="round" d="M3 18c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4m9 0c0-2.2-1.8-4-4-4h-.5" />
        </svg>
      )
    case 'game':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="8" rx="4" strokeWidth="1.8" />
          <path strokeWidth="1.8" strokeLinecap="round" d="M8 12h-2m1-1v2m9-1.5v0m2 0v0" />
        </svg>
      )
    case 'gift':
      return (
        <svg className={`${base} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="8" width="16" height="12" rx="2" strokeWidth="1.8" />
          <path strokeWidth="1.8" strokeLinecap="round" d="M12 4c-.5-1-1.7-2-3-2-1.7 0-3 1.3-3 3 0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2 0-1.7-1.3-3-3-3-1.3 0-2.5 1-3 2m-4 0c.5-1 1.7-2 3-2" />
          <path strokeWidth="1.8" d="M12 20V4" />
        </svg>
      )
    default:
      return null
  }
}

const Chip = ({ children, tone = 'default' }) => {
  const map = {
    default: 'bg-surface-light text-gray-700',
    green: 'bg-emerald-50 text-emerald-700',
    orange: 'bg-orange-50 text-orange-700',
    blue: 'bg-sky-50 text-sky-700',
    rose: 'bg-rose-50 text-rose-700',
    purple: 'bg-purple-50 text-purple-700',
    gray: 'bg-gray-100 text-gray-700',
  }
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${map[tone] || map.default}`}>{children}</span>
}

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-card border border-surface-border ${className}`}>{children}</div>
)

const TopBar = () => (
  <header className="flex items-center justify-between py-4 px-6 border-b border-surface-border bg-white/70 backdrop-blur">
    <div className="flex items-center gap-3 text-brand-purple font-semibold text-lg">
      <Icon name="gift" className="text-brand-purple" />
      <span>کتابچه هدیه</span>
    </div>
    <div className="flex items-center gap-4 text-sm">
      <span className="text-amber-600 font-semibold">۱۲۵۰ امتیاز</span>
      <button className="relative text-gray-600">
        <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] rounded-full px-1.5">3</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.8" strokeLinecap="round" d="M10 4a2 2 0 1 1 4 0v1a7 7 0 0 1 4 6v2l1 2H5l1-2v-2a7 7 0 0 1 4-6Z" />
        </svg>
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft">ورود</button>
    </div>
  </header>
)

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <aside className="w-60 shrink-0 border-l border-surface-border bg-white/70 backdrop-blur px-2 py-4">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.path
          return (
            <NavLink
              key={item.key}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                active ? 'bg-purple-50 text-brand-purple' : 'text-gray-700 hover:bg-purple-50/70'
              }`}
            >
              <Icon name={item.icon} className={active ? 'text-brand-purple' : 'text-gray-500'} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

const QuickPage = () => (
  <div className="space-y-4">
    <Card className="p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">مرحله {quickQuestion.step} از {quickQuestion.totalSteps}</p>
          <h2 className="text-xl font-bold text-gray-800 mt-1">حالت سریع ۳ دقیقه</h2>
          <p className="text-sm text-gray-500">فقط ۳ سوال - یک هدیه عالی</p>
        </div>
        <div className="text-3xl text-orange-500">
          <Icon name="bolt" />
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-orange-400 rounded-full" style={{ width: `${quickQuestion.progress}%` }} />
        </div>
        <div className="flex gap-2 mt-2 text-sm">
          <Chip tone="gray">زمان و بودجه</Chip>
          <Chip tone="gray">مناسبت</Chip>
          <Chip tone="purple">شخصیت گیرنده</Chip>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <h3 className="text-md font-semibold text-gray-800">{quickQuestion.question}</h3>
        <div className="space-y-2">
          {quickQuestion.options.map((opt) => (
            <div key={opt.label} className="border border-surface-border rounded-xl px-4 py-3 bg-white hover:border-purple-200 transition flex items-center gap-3">
              <span className="text-gray-800 font-semibold">{opt.label}</span>
              <span className="text-gray-500 text-sm">{opt.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full mt-6 bg-gray-700 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">مرحله بعد</button>
    </Card>
  </div>
)

const WalletPage = () => (
  <div className="space-y-4">
    <div className="grid md:grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-purple-600 text-2xl flex justify-center mb-1"><Icon name="group" /></div>
        <p className="text-sm text-gray-600">تعداد کیف پول فعال</p>
        <p className="text-lg font-bold text-purple-700">۲ کیف پول</p>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-emerald-600 text-2xl flex justify-center mb-1">↑</div>
        <p className="text-sm text-gray-600">در انتظار تایید</p>
        <p className="text-lg font-bold text-emerald-700">۵۰,۰۰۰ تومان</p>
      </Card>
      <Card className="p-4 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <p className="text-sm">کل موجودی کیف پول‌ها</p>
        <p className="text-xl font-bold">۳۷۰,۰۰۰ تومان</p>
      </Card>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {wallets.map((w) => (
        <Card key={w.name} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-600">
              <Icon name="wallet" />
              <span className="font-semibold text-gray-800">{w.name}</span>
            </div>
            <span className="text-sm text-gray-500">{w.history}</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-lg font-bold text-purple-700">{w.balance}</div>
          {w.pending && <p className="mt-2 text-sm text-amber-600">در انتظار: {w.pending}</p>}
          <div className="mt-4 flex gap-3">
            <button className="flex-1 border border-surface-border rounded-lg py-2 text-gray-700 hover:bg-gray-50">برداشت</button>
            <button className="flex-1 border border-purple-200 rounded-lg py-2 text-purple-700 hover:bg-purple-50">شارژ</button>
          </div>
        </Card>
      ))}
    </div>
    <Card className="p-4 bg-indigo-50 text-indigo-800">
      <div className="flex items-center gap-2 text-indigo-700 font-semibold"><Icon name="gift" /> کیف پول چیست؟</div>
      <ul className="mt-2 text-sm text-indigo-700 space-y-1 list-disc pr-5">
        <li>به جای خرید مستقیم هدیه، می‌توانید کیف پول فرد را شارژ کنید.</li>
        <li>اعضای گروه می‌توانند به صورت جمعی کیف پول را شارژ کنند.</li>
        <li>گیرنده هدیه کنترل کامل بر مبلغ دارد.</li>
      </ul>
    </Card>
  </div>
)

const PointsPage = () => (
  <div className="space-y-6">
    <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm">امتیاز شما</p>
          <p className="text-3xl font-bold">۱,۲۵۰ امتیاز</p>
          <p className="text-sm mt-1">پیشرفت تا سطح طلایی</p>
        </div>
        <Icon name="medal" className="w-8 h-8" />
      </div>
      <div className="mt-4 h-2 bg-white/30 rounded-full">
        <div className="h-full bg-white rounded-full" style={{ width: '63%' }} />
      </div>
      <p className="text-sm mt-1">۶۳٪</p>
    </Card>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">روش‌های کسب امتیاز</h3>
      <div className="grid md:grid-cols-3 gap-3">
        {pointsActions.map((item) => (
          <Card key={item.title} className="p-4 flex items-start gap-3">
            <Chip tone="purple">{item.points} امتیاز</Chip>
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">فروشگاه جوایز</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {rewards.map((reward) => (
          <Card key={reward.title} className="overflow-hidden">
            <div className={`h-32 bg-gradient-to-r ${reward.color} flex items-center justify-center text-white text-3xl`}>
              <Icon name="gift" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">{reward.title}</p>
                <p className="text-sm text-purple-600">{reward.cost}</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-black text-white text-sm">دریافت</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
)

const CalendarPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-800">تقویم رویدادها</h3>
      <button className="px-4 py-2 rounded-lg bg-black text-white text-sm">افزودن رویداد</button>
    </div>
    <div className="grid md:grid-cols-2 gap-3">
      {events.slice(0, 2).map((ev) => (
        <Card key={ev.title} className="p-4 flex items-center gap-3">
          <Chip tone={ev.tone}>{ev.remaining}</Chip>
          <div>
            <p className="font-semibold text-gray-800">{ev.title} - {ev.type}</p>
            <p className="text-sm text-gray-500">{ev.date}</p>
          </div>
        </Card>
      ))}
    </div>
    <div className="grid md:grid-cols-3 gap-3">
      {events.map((ev) => (
        <Card key={`${ev.title}-${ev.type}`} className="p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Chip tone={ev.tone}>{ev.remaining}</Chip>
          </div>
          <p className="text-gray-800 font-semibold">{ev.title}</p>
          <p className="text-sm text-gray-500">{ev.type}</p>
          <p className="text-xs text-gray-400">{ev.date}</p>
        </Card>
      ))}
    </div>
    <Card className="p-4 bg-purple-50 text-purple-800">
      <div className="font-semibold mb-2">نکته: یادآوری‌های هوشمند</div>
      <ul className="list-disc pr-5 text-sm space-y-1">
        <li>یک هفته قبل از هر رویداد، یادآوری دریافت می‌کنید.</li>
        <li>پیشنهادهای هدیه براساس رویدادها ارائه می‌شود.</li>
      </ul>
    </Card>
  </div>
)

const ExperiencesPage = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-4 gap-3">
      {[
        { label: 'مفید بود', value: 156, tone: 'yellow' },
        { label: 'ناموفق', value: 2, tone: 'red' },
        { label: 'موفق', value: 3, tone: 'green' },
        { label: 'کل تجربیات', value: 5, tone: 'blue' },
      ].map((item) => (
        <Card key={item.label} className="p-4 text-center">
          <p className="text-2xl font-bold text-gray-800">{item.value}</p>
          <p className="text-sm text-gray-500">{item.label}</p>
        </Card>
      ))}
    </div>
    <div className="flex gap-2 text-sm">
      <Chip tone="gray">همه</Chip>
      <Chip tone="green">موفق</Chip>
      <Chip tone="orange">ناموفق</Chip>
    </div>
    <div className="space-y-3">
      {experiences.map((exp) => (
        <Card key={exp.title} className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Chip tone={exp.status === 'success' ? 'green' : 'rose'}>{exp.status === 'success' ? 'موفق' : 'ناموفق'}</Chip>
              <span className="font-semibold text-gray-800">{exp.title}</span>
            </div>
            <span className="text-sm text-gray-500">{exp.time}</span>
          </div>
          <p className="mt-3 text-gray-700 leading-7">{exp.body}</p>
          <div className="flex items-center gap-2 mt-3">
            {exp.tags.map((tag) => (
              <Chip key={tag} tone="gray">#{tag}</Chip>
            ))}
          </div>
          <div className="mt-3 text-sm text-gray-500">مفید بود ({exp.likes})</div>
        </Card>
      ))}
    </div>
  </div>
)

const GroupGiftPage = () => (
  <div className="space-y-5">
    <div className="grid md:grid-cols-3 gap-3">
      <Card className="p-4 text-center">
        <div className="text-2xl text-purple-600 mb-1">$</div>
        <p className="text-sm text-gray-500">مشارکت شما</p>
        <p className="text-lg font-bold text-gray-800">۲۰۰,۰۰۰</p>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl text-green-600 mb-1">🎁</div>
        <p className="text-sm text-gray-500">هدیه تکمیل شده</p>
        <p className="text-lg font-bold text-gray-800">۱</p>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl text-purple-600 mb-1">👥</div>
        <p className="text-sm text-gray-500">گروه فعال</p>
        <p className="text-lg font-bold text-gray-800">۳</p>
      </Card>
    </div>
    <Card className="p-5">
      <div className="flex items-center justify-between">
      <div>
          <p className="text-sm text-gray-500">مهلت: {groupGift.deadline}</p>
          <p className="text-lg font-bold text-gray-800">{groupGift.title}</p>
          <p className="text-sm text-gray-600">{groupGift.product} · {groupGift.price}</p>
        </div>
        <div className="w-20 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-500 text-xl">⌚</div>
      </div>
      <div className="mt-4 text-sm text-gray-600">پیشرفت جمع‌آوری</div>
      <div className="h-2 bg-gray-100 rounded-full mt-2">
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" style={{ width: `${groupGift.progress}%` }} />
      </div>
      <p className="text-sm text-gray-500 mt-1">{groupGift.progress}% تکمیل شده</p>
      <div className="mt-4 space-y-2">
        {groupGift.contributors.map((c) => (
          <div key={c.name} className="flex items-center justify-between text-sm">
            <span className="text-gray-700">{c.name}</span>
            <span className="text-gray-500">{c.amount} تومان</span>
            <span className={`text-xs px-2 py-1 rounded-full ${c.status === 'paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
              {c.status === 'paid' ? 'پرداخت شد' : 'منتظر'}
            </span>
          </div>
        ))}
      </div>
    </Card>
  </div>
)

const GamesPage = () => (
  <div className="space-y-5">
    <Card className="p-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">بازی‌ها و چالش‌ها</p>
        <Icon name="game" />
      </div>
      <p className="mt-2 text-sm">با انجام چالش‌ها و بازی‌ها، امتیاز کسب کنید و به جوایز برسید.</p>
    </Card>
    <div className="grid md:grid-cols-2 gap-3">
      <Card className="p-4 border-purple-200">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-gray-800">چالش هفتگی</p>
          <Chip tone="purple">+100 امتیاز</Chip>
        </div>
        <p className="text-sm text-gray-600">سه هدیه انتخاب کنید و در وییش لیست‌ها ذخیره کنید</p>
        <div className="h-2 bg-gray-100 rounded-full mt-3">
          <div className="h-full bg-black rounded-full" style={{ width: '33%' }} />
        </div>
        <button className="mt-4 px-4 py-2 rounded-lg bg-black text-white text-sm">ادامه</button>
      </Card>
      <Card className="p-4 border-blue-200">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-gray-800">چالش روزانه</p>
          <Chip tone="orange">+25 امتیاز</Chip>
        </div>
        <p className="text-sm text-gray-600">یک نفر را به لیست خود اضافه کنید</p>
        <div className="h-2 bg-gray-100 rounded-full mt-3">
          <div className="h-full bg-sky-500 rounded-full" style={{ width: '20%' }} />
        </div>
        <button className="mt-4 px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-200 text-sm">شروع</button>
      </Card>
    </div>
    <div className="grid md:grid-cols-3 gap-3">
      {[
        { title: 'دعوت', progress: '1/3', reward: '+300 امتیاز', days: '33 روز مانده', color: 'emerald' },
        { title: 'تابستانی', progress: '2/5', reward: '+500 امتیاز', days: '18 روز مانده', color: 'amber' },
        { title: 'عشق', progress: '0/3', reward: 'به زودی', days: '۴ روز مانده', color: 'gray' },
      ].map((c) => (
        <Card key={c.title} className="p-4">
          <p className="font-semibold text-gray-800">{c.title}</p>
          <p className="text-sm text-gray-500">پیشرفت: {c.progress}</p>
          <div className="h-2 bg-gray-100 rounded-full mt-3">
            <div className={`h-full rounded-full ${c.color === 'emerald' ? 'bg-emerald-500' : c.color === 'amber' ? 'bg-amber-500' : 'bg-gray-400'}`} style={{ width: c.color === 'gray' ? '0%' : c.color === 'emerald' ? '33%' : '40%' }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-gray-600">{c.reward}</span>
            <span className="text-gray-500">{c.days}</span>
          </div>
        </Card>
      ))}
    </div>
  </div>
)

const HomePage = () => (
  <div className="space-y-6">
    <Card className="p-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">خوش آمدید! 👋</p>
        <Icon name="gift" />
      </div>
      <p className="mt-2 text-sm">امروز ۲۰ امتیاز کسب کرده‌اید. همین الان یک هدیه انتخاب کنید و امتیاز بگیرید!</p>
    </Card>
    <Card className="p-4 border-blue-100 bg-white/80">
      <div className="flex items-center gap-3 text-blue-700 font-semibold">
        <Icon name="gift" />
        <span>صفحه ورود نمایشی</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">برای مشاهده صفحه ورود حرفه‌ای، روی دکمه "ورود" در بالای صفحه کلیک کنید. نیازی به اتصال واقعی نیست.</p>
      <div className="flex gap-2 mt-3">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">ورود</button>
        <button className="px-4 py-2 rounded-lg border border-blue-200 text-blue-700 text-sm">مشاهده صفحه لنڈینگ</button>
      </div>
    </Card>
    <div className="grid md:grid-cols-3 gap-3">
      <Card className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
          <Icon name="group" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">هدیه گروهی</p>
          <p className="text-sm text-gray-500">با دوستان هماهنگ کن</p>
        </div>
      </Card>
      <Card className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center">💡</div>
        <div>
          <p className="font-semibold text-gray-800">هدیه‌سازی خلاقانه</p>
          <p className="text-sm text-gray-500">از چیزهای موجود بساز</p>
        </div>
      </Card>
      <Card className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
          <Icon name="bolt" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">حالت سریع ۳ دقیقه</p>
          <p className="text-sm text-gray-500">یک هدیه سریع پیدا کن</p>
        </div>
      </Card>
    </div>
    <section className="grid md:grid-cols-2 gap-4">
      {suggestions.map((s) => (
        <Card key={s.name} className="p-4">
          <div className="flex items-center justify-between">
            <Chip tone="green">{s.match} تطابق</Chip>
            <Chip tone="purple">{s.tag}</Chip>
          </div>
          <p className="mt-3 font-semibold text-gray-800">{s.name}</p>
          <p className="text-sm text-purple-700 mt-1">{s.price}</p>
          <button className="mt-3 px-4 py-2 rounded-lg bg-black text-white text-sm">مشاهده</button>
        </Card>
      ))}
    </section>
    <section>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">افراد مهم شما</h3>
      <div className="grid md:grid-cols-3 gap-3">
        {importantPeople.map((p) => (
          <Card key={p.name} className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-800">{p.name}</p>
              <p className="text-sm text-gray-500">{p.relation}</p>
            </div>
            <Chip tone="orange">{p.event}</Chip>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((tag) => (
                <Chip key={tag} tone="gray">{tag}</Chip>
              ))}
            </div>
            {p.wallet && <p className="text-sm text-emerald-600">کیف پول: {p.wallet}</p>}
          </Card>
        ))}
      </div>
    </section>
  </div>
)

const Layout = () => (
  <div className="min-h-screen bg-transparent">
    <TopBar />
    <div className="flex">
      <main className="flex-1 px-6 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quick" element={<QuickPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/group" element={<GroupGiftPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </main>
      <Sidebar />
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
