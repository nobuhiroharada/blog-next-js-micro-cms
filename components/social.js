import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social() {
  return (
    <ul className="flex gap-6 text-2xl">
      <li>
        <a
          href="https://www.facebook.com/nobuhiroharada1026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} className="hover:text-gray-400" />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/nobuhiroharada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400" />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  )
}
