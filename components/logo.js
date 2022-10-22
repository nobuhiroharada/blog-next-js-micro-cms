import Link from 'next/link'
import { siteMeta } from 'lib/constants'

export default function Logo() {
  return (
    <Link href="/">
      <a className="text-2xl font-bold">{siteMeta.siteTitle}</a>
    </Link>
  )
}
