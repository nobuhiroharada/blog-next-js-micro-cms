import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
  return (
    <div className="flex flex-row gap-2 items-baseline md:flex-col text-gray-500">
      <h3 className="">
        <FontAwesomeIcon icon={faFolderOpen} size="lg" />
      </h3>
      <ul className="flex flex-row gap-2 items-baseline md:flex-col">
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>
              <a className="hover:text-gray-400">{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
