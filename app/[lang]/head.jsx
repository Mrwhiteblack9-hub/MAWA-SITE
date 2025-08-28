import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 12 }}>
      <Link href="/">
        {/* Utilise le chemin racine vers public/ */}
        <Image src="/logo.png" alt="MAWA — logo" width={160} height={48} priority />
      </Link>

      <nav>
        <ul style={{ display: 'flex', gap: 12, listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
