export async function fetcher(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`)
  if (!res.ok) throw new Error('Ошибка загрузки')
  return res.json()
}
