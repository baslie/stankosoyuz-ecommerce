import Head from 'next/head'

export default function About() {
  return (
    <div className="p-4 space-y-4">
      <Head>
        <title>О компании - Станкосоюз</title>
      </Head>
      <h1 className="text-xl font-bold">О компании</h1>
      <p>Мы работаем в Томске с 1995 года.</p>
    </div>
  )
}
