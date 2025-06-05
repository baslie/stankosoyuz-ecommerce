import Head from 'next/head'

export default function Cart() {
  return (
    <div className="p-4 space-y-4">
      <Head>
        <title>Корзина - Станкосоюз</title>
      </Head>
      <h1 className="text-xl font-bold">Корзина</h1>
      <p>Корзина пока пуста.</p>
    </div>
  )
}
