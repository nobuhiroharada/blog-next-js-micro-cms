import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul className="flex justify-between mt-14 md:mt-28">
      {prevText && prevUrl && (
        <li className="px-2">
          <Link href={prevUrl}>
            <a className="text-gray-500 hover:text-gray-400">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span className="ml-2">{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className="ml-auto px-2">
          <Link href={nextUrl}>
            <a className="text-gray-500 hover:text-gray-400">
              <span className="mr-2">{nextText}</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
