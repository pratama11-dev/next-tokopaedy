import Head from 'next/head'
import Header from './Header'

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Tokopaedy V3':'Tokopaedy V3'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-full">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* <header></header>
      <main>{children}</main>
      <footer></footer> */}
    </>
  )
}
