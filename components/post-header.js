import ConvertDate from './convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader({ title, publish = '' }) {
  return (
    <div className="py-5 my-8">
      <h1 className="text-5xl font-bold">{title}</h1>
      {publish && (
        <div className="text-gray-400 mt-3">
          <FontAwesomeIcon icon={faClock} size="sm" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
