interface Props {
  categories: string[]
}

export default function CategorySlider({ categories }: Props) {
  return (
    <div className="flex space-x-2 overflow-x-auto py-2">
      {categories.map(cat => (
        <span key={cat} className="px-4 py-2 bg-primary text-white rounded">
          {cat}
        </span>
      ))}
    </div>
  )
}
