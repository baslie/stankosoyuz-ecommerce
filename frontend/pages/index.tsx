import Head from 'next/head'
import Link from 'next/link'
import CategorySlider from '../components/CategorySlider'
import ProductList from '../components/ProductList'

export default function Home() {
  const categories = ['Дерево', 'Металл']
  const products = [
    { id: 1, title: 'Станок 1' },
    { id: 2, title: 'Станок 2' }
  ]

  return (
    <div className="p-4 space-y-4">
      <Head>
        <title>Станкосоюз - промышленное оборудование</title>
        <meta name="description" content="Деревообрабатывающие и металлорежущие станки в Томске" />
      </Head>
      <h1 className="text-2xl font-bold text-primary">Станкосоюз</h1>
      <CategorySlider categories={categories} />
      <ProductList products={products} />
      <div className="space-x-4">
        <Link href="/catalog" className="text-accent underline">Каталог</Link>
        <Link href="/about" className="text-accent underline">О компании</Link>
      </div>
    </div>
  )
}
