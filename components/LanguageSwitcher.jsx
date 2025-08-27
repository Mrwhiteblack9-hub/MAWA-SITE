import Link from 'next/link'

export default function LanguageSwitcher({ currentLang }) {
  const languages = [
    { code: 'fr', name: '🇫🇷' },
    { code: 'en', name: '🇬🇧' },
    { code: 'zh', name: '🇨🇳' },
  ]

  return (
    <div className="flex items-center gap-2 bg-[color:var(--mawa-card)] border border-white/10 rounded-full p-1">
      {languages.map((l) => (
        <Link key={l.code} href={`/${l.code}`} className={`w-8 h-8 rounded-full grid place-items-center text-sm transition-colors ${currentLang === l.code ? 'bg-[color:var(--mawa-blue)] text-black font-semibold' : 'hover:bg-white/10'}`}>
          {l.name}
        </Link>
      ))}
    </div>
  )
}
