export default function TokenomicsSection({ dict = {} }) {
  const percentages = dict?.percentages || { liquidity: '78%', vested: '2%', migrating: '20%' }
  const params = dict?.params || { supply: 'Supply: 1,000,000,000', decimals: 'Decimals: 9', mint: 'Mint authority: renounced', lock: 'LP lock: 12 months', tax: 'Tax: 2%' }

  return (
    <section id="tokenomics" className="py-16">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6">{dict?.title ?? 'Tokenomics'}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">{dict?.distribution_title ?? 'Distribution'}</h3>
            <ul className="mt-4 text-white/80 space-y-2">
              <li>Liquidity (DEX): <strong>{percentages.liquidity}</strong></li>
              <li>Vested: <strong>{percentages.vested}</strong></li>
              <li>Migrating supply: <strong>{percentages.migrating}</strong></li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold">{dict?.params_title ?? 'MAWA token parameters'}</h3>
            <ul className="mt-4 text-white/80 space-y-2">
              <li>{params.supply}</li>
              <li>{params.decimals}</li>
              <li>{params.mint}</li>
              <li>{params.lock}</li>
              <li>{params.tax}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
