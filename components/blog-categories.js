import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function BlogCategories({ categories }) {
  return (
    <div className="mt-4">
      <h3 className="text-slate-600 bg-slate-200 font-bold p-2 rounded-md">
        カテゴリ
      </h3>
      <ul className="">
        {categories.map(({ name, slug }) => (
          <li key={slug} className="mt-3">
            <Link href={`/blog/category/${slug}`}>
              <a className="text-slate-400 hover:text-slate-800">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
