import { useRouter } from 'next/router'
import Head from 'next/head'

export default function ProductPage() {
  const { query } = useRouter()
  const { id } = query
  return (
    <div className="p-4 space-y-4">
      <Head>
        <title>Товар {id} - Станкосоюз</title>
      </Head>
      <h1 className="text-xl font-bold">Товар {id}</h1>
      <p>Описание товара {id}</p>
    </div>
  )
}
