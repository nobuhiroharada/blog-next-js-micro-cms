import Link from 'next/link'

export default function PostCategories({ categories }) {
  return (
    <div className="text-white mt-4">
      <ul className="flex flex-row gap-2 items-baseline">
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>
              <a className="bg-slate-400 hover:bg-slate-500 rounded-md px-3 py-2">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
