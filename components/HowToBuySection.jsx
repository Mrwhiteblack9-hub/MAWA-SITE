export default function HowToBuySection({ buyUrl, dict = {} }) {
  const steps = dict?.steps || [
    "Install a Solana wallet (Phantom).",
    "Get SOL and connect to Jupiter.",
    "Swap SOL for MAWA on Jupiter: Buy on Jupiter."
  ]

  return (
    <section id="howtobuy" className="py-12">
      <div className="card max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold">{dict?.title ?? 'How to buy'}</h3>
        <ol className="mt-3 list-decimal pl-5 text-white/80">
          {steps.map((s,i)=> <li key={i} className="mb-2">{s}</li>)}
        </ol>
      </div>
    </section>
  )
}
