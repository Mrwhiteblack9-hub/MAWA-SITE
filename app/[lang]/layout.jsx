import '../globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getDictionary } from '../../dictionaries'

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} nav={dict.nav} buy_url={dict.buy_url} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer social={dict.social} />
      </body>
    </html>
  )
}
