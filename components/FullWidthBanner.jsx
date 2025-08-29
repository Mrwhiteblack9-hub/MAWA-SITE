export default function FullWidthBanner({ banner = '/banner.jpg', title, subtitle }) {
  return (
    <section
      className="w-full bg-black/40"
      aria-label="Bannière principale MAWA"
      style={{
        backgroundImage: `url('${banner}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 lg:py-40 flex items-center">
        <div className="bg-black/40 p-6 rounded-xl shadow-lg max-w-3xl">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="MAWA Logo" className="w-20 h-20 rounded-full object-cover border border-white/10" />
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {title ?? 'MAWA — Force, Élégance, Communauté'}
              </h1>
              {subtitle ? <p className="mt-2 text-white/80 max-w-lg">{subtitle}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}