import Head from 'next/head'
import Link from 'next/link'

export default function Catalog() {
  const products = [
    { id: 1, title: 'Станок 1' },
    { id: 2, title: 'Станок 2' },
  ]
  return (
    <div className="p-4 space-y-4">
      <Head>
        <title>Каталог - Станкосоюз</title>
      </Head>
      <h1 className="text-xl font-bold">Каталог</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/product/${p.id}`} className="underline text-accent">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
