import Link from 'next/link'
import { useRouter } from 'next/router'
import { siteMeta } from 'lib/constants'
import Navitems from 'components/nav-items'

export default function Nav() {
  const router = useRouter()

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 lg:px-32 bg-slate-50 text-slate-800 fixed z-50">
      <div>
        <h1 className="text-2xl font-bold ml-2">
          <Link href="/">{siteMeta.siteTitle}</Link>
        </h1>
      </div>
      {router.pathname === '/' ? (
        <Navitems />
      ) : (
        <ul className="">
          <li className="px-4 cursor-pointer capitalize text-slate-400  hover:text-slate-800 duration-200">
            <Link href="/">Home</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
