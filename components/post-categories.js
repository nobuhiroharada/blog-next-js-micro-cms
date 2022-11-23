import Link from 'next/link'

export default function PostCategories({ categories }) {
  return (
    <div className="text-white mt-4">
      <ul className="flex flex-row gap-2 items-baseline">
        {categories.map(({ name, slug }) => (
          <li
            key={slug}
            className="bg-slate-400 hover:bg-slate-500 px-3 py-2 rounded-md"
          >
            <Link href={`/blog/category/${slug}`}>
              <a className="">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
