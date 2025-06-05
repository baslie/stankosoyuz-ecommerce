import ProductCard from './ProductCard'

interface Product {
  id: number
  title: string
}

interface Props {
  products: Product[]
}

export default function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map(p => <ProductCard key={p.id} title={p.title} />)}
    </div>
  )
}
