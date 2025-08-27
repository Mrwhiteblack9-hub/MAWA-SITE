export default function Footer({ social = {} }) {
  return (
    <footer className="w-full border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <div>© {new Date().getFullYear()} MAWA — Not financial advice</div>
        <div className="flex gap-4">
          <a href={social.x ?? 'https://x.com'} target="_blank" rel="noreferrer" className="hover:underline">X / Twitter</a>
          <a href={social.telegram ?? 'https://t.me'} target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
          <a href="#" className="hover:underline">Discord</a>
        </div>
      </div>
    </footer>
  )
}
