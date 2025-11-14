import { useMemo } from 'react'
import { Football, Calendar, Newspaper, Users, Trophy, ArrowRight, Youtube, Twitter, Instagram, Shield } from 'lucide-react'

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-white/70 text-xs">{label}</p>
        <p className="text-white text-xl font-bold">{value}</p>
      </div>
    </div>
  )
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
      </div>
      <a href="#" className="hidden sm:inline-flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-semibold">
        View all <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}

export default function App() {
  const news = useMemo(() => ([
    {
      id: 1,
      title: 'Match Report: Liverpool secure thrilling win at Anfield',
      excerpt: 'Late drama under the lights sees the Reds take all three points in a classic night at Anfield.',
      tag: 'Club News',
      image: 'https://images.unsplash.com/photo-1666607573912-90f535b0f011?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRjaCUyMFJlcG9ydCUzQSUyMExpdmVycG9vbCUyMHNlY3VyZXxlbnwwfDB8fHwxNzYzMDkwNTA1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Inside Training: High intensity ahead of the weekend clash',
      excerpt: 'The squad were put through their paces at the AXA Training Centre as preparations continue.',
      tag: 'Inside Training',
      image: 'https://images.unsplash.com/photo-1687709645969-0fb890c168c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnNpZGUlMjBUcmFpbmluZyUzQSUyMEhpZ2glMjBpbnRlbnNpdHl8ZW58MHwwfHx8MTc2MzA5MDUwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Academy Spotlight: Young talents making waves',
      excerpt: 'A look at the next generation coming through the ranks and making their mark.',
      tag: 'Academy',
      image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200&auto=format&fit=crop'
    }
  ]), [])

  const fixtures = useMemo(() => ([
    { id: 1, date: 'Sat, Dec 7', comp: 'Premier League', home: true, opponent: 'Manchester City', venue: 'Anfield', time: '17:30' },
    { id: 2, date: 'Wed, Dec 11', comp: 'Europa League', home: false, opponent: 'Atalanta', venue: 'Gewiss Stadium', time: '20:00' },
    { id: 3, date: 'Sun, Dec 15', comp: 'Premier League', home: false, opponent: 'Chelsea', venue: 'Stamford Bridge', time: '16:30' },
  ]), [])

  const squad = useMemo(() => ([
    { name: 'Alisson Becker', pos: 'GK', number: 1 },
    { name: 'Virgil van Dijk', pos: 'CB', number: 4 },
    { name: 'Trent Alexander-Arnold', pos: 'RB', number: 66 },
    { name: 'Andrew Robertson', pos: 'LB', number: 26 },
    { name: 'Dominik Szoboszlai', pos: 'MF', number: 8 },
    { name: 'Alexis Mac Allister', pos: 'MF', number: 10 },
    { name: 'Mohamed Salah', pos: 'FW', number: 11 },
    { name: 'Diogo Jota', pos: 'FW', number: 20 },
  ]), [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Top Bar / Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-red-900/70 bg-red-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                <Football className="w-5 h-5 text-red-700" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-black tracking-wide">LIVERPOOL FC</p>
                <p className="text-white/70 text-[10px] uppercase">You'll Never Walk Alone</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-white/90">
              <a href="#news" className="hover:text-white transition-colors">News</a>
              <a href="#fixtures" className="hover:text-white transition-colors">Fixtures</a>
              <a href="#squad" className="hover:text-white transition-colors">Squad</a>
              <a href="#history" className="hover:text-white transition-colors">History</a>
              <a href="/test" className="hover:text-white transition-colors">System</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <a aria-label="Twitter" href="https://twitter.com/LFC" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><Twitter className="w-4 h-4" /></a>
              <a aria-label="Instagram" href="https://instagram.com/liverpoolfc" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><Instagram className="w-4 h-4" /></a>
              <a aria-label="YouTube" href="https://youtube.com/@LiverpoolFC" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(220,38,38,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-red-900">
                This is Anfield
              </h1>
              <p className="mt-4 text-red-800/80 text-lg">
                Official-style fan experience. Latest news, fixtures, and squad highlights — all in one place. YNWA.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <Stat icon={Trophy} label="League Titles" value="19" />
                <Stat icon={Trophy} label="European Cups" value="6" />
                <Stat icon={Shield} label="FA Cups" value="8" />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-red-200">
                <img
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop"
                  alt="Anfield Stadium"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionTitle icon={Newspaper} title="Latest News" subtitle="Headlines and features" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(item => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-red-700 bg-red-50 border border-red-100 rounded px-2 py-1">{item.tag}</span>
                <h3 className="mt-3 font-extrabold text-gray-900 leading-tight">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold text-sm">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Fixtures */}
      <section id="fixtures" className="bg-gradient-to-b from-white to-red-50/60 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Calendar} title="Upcoming Fixtures" subtitle="Dates and venues" />
          <div className="divide-y divide-gray-200 rounded-2xl overflow-hidden border border-gray-200 bg-white">
            {fixtures.map(fx => (
              <div key={fx.id} className="p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white ${fx.home ? 'bg-red-600' : 'bg-gray-700'}`}>{fx.home ? 'H' : 'A'}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{fx.opponent}</p>
                    <p className="text-gray-500 text-sm">{fx.comp} • {fx.venue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{fx.date}</p>
                  <p className="text-gray-500 text-sm">KO {fx.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Squad */}
      <section id="squad" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionTitle icon={Users} title="First Team Squad" subtitle="Key players" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {squad.map(p => (
            <div key={p.number} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-black text-2xl">{p.number}</span>
                <span className="text-xs bg-red-50 text-red-700 border border-red-100 rounded px-2 py-1 font-semibold">{p.pos}</span>
              </div>
              <div className="mt-4 aspect-[5/3] rounded-xl overflow-hidden bg-gradient-to-br from-red-100 to-white border border-gray-100" />
              <h4 className="mt-4 font-extrabold text-gray-900">{p.name}</h4>
              <button className="mt-2 inline-flex items-center gap-1 text-red-600 hover:text-red-700 text-sm font-semibold">
                View profile <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section id="history" className="bg-gradient-to-b from-white to-red-50/60 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle icon={Trophy} title="Our History" subtitle="Moments that shaped the club" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: 1892, text: 'Liverpool Football Club is founded.' },
              { year: 1977, text: 'First European Cup triumph in Rome.' },
              { year: 2005, text: 'Miracle of Istanbul – Champions of Europe.' },
            ].map((h) => (
              <div key={h.year} className="bg-white rounded-2xl border border-gray-200 p-6">
                <p className="text-red-600 font-black text-3xl">{h.year}</p>
                <p className="mt-2 text-gray-700">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Football className="w-4 h-4 text-red-700" />
              </div>
              <span className="font-semibold tracking-wide">Liverpool FC • YNWA</span>
            </div>
            <div className="flex items-center gap-3">
              <a aria-label="Twitter" href="https://twitter.com/LFC" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><Twitter className="w-4 h-4" /></a>
              <a aria-label="Instagram" href="https://instagram.com/liverpoolfc" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><Instagram className="w-4 h-4" /></a>
              <a aria-label="YouTube" href="https://youtube.com/@LiverpoolFC" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
          <p className="mt-4 text-white/70 text-sm">Unofficial fan experience for demo purposes.</p>
        </div>
      </footer>
    </div>
  )
}
