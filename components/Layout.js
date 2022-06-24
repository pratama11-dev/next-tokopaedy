import Head from 'next/head'
import Header from './Header'

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Tokopaedy V3':'Tokopaedy V3'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
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
