interface Props {
  title: string
}

export default function ProductCard({ title }: Props) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-lg">{title}</h3>
    </div>
  )
}
