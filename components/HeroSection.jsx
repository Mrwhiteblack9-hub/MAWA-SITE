'use client'
import Link from 'next/link'
import Countdown from './Countdown'

export default function HeroSection({ buyUrl, lang = 'fr', dictHero = {}, banner = '/banner.svg' }) {
  const targetISO = '2025-09-13T00:00:00Z'

  // titleParts safe: accept title_parts array from JSON or fallback
  const titleParts = Array.isArray(dictHero?.title_parts) ? dictHero.title_parts : (dictHero?.title ? String(dictHero.title).split(',').map(s=>s.trim()) : ['Force','Élégance','Communauté'])
  const colors = dictHero?.colors ?? ['--mawa-blue','--mawa-white','--mawa-red']

  return (
    <section id="hero" className="grid lg:grid-cols-5 gap-8 items-center py-8">
      <div className="lg:col-span-3">
        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-xs">
          {dictHero?.tag ?? 'Mêmecoin sérieux'}
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
          MAWA —{' '}
          {titleParts.map((word,i)=>(
            <span key={i} style={{ color: `var(${colors[i] || colors[i%colors.length]})` }}>
              {word}{i < titleParts.length - 1 ? ', ' : ''}
            </span>
          ))}
        </h1>

        <p className="mt-4 text-white/80 max-w-xl">
          {dictHero?.description ?? 'MAWA — A serious memecoin with a crocodile mascot.'}
        </p>

        <div className="mt-6 flex gap-3">
          {buyUrl && <a href={buyUrl} target="_blank" rel="noreferrer" className="btn-primary">{dictHero?.buy_button ?? (lang === 'fr' ? 'Acheter sur Jupiter' : 'Buy on Jupiter')}</a>}
          <Link href={`/${lang}/tokenomics`} className="px-5 py-2 rounded-2xl border border-white/10">{dictHero?.tokenomics_btn ?? 'Tokenomics'}</Link>
        </div>

        <div className="mt-6">
          <Countdown targetISO={targetISO} />
        </div>

        <div className="mt-4 text-xs text-white/60">
          {dictHero?.contract_label ?? 'Contrat SPL'} : <span className="font-mono bg-white/5 px-2 py-1 rounded">{dictHero?.contract_value ?? 'SOON...'}</span>
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <div className="w-full max-w-sm grid place-items-center">
          {banner ? <img src={banner} alt={dictHero?.banner_alt ?? 'MAWA Banner'} className="w-full h-auto rounded-lg shadow-lg" /> : null}
        </div>
      </div>
    </section>
  )
}
