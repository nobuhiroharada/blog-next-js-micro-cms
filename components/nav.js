import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { siteMeta } from 'lib/constants'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  const router = useRouter()

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-5 mx-auto max-w-4xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <a>
                <h2 className="text-2xl font-bold">{siteMeta.siteTitle}</h2>
              </a>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => toggleNav()}
              >
                {navIsOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              navIsOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className={
                  router.pathname == '/'
                    ? 'text-gray-400'
                    : 'hover:text-gray-400'
                }
              >
                <Link href="/">
                  <a onClick={closeNav}>Home</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == '/about'
                    ? 'text-gray-400'
                    : 'hover:text-gray-400'
                }
              >
                <Link href="/about">
                  <a onClick={closeNav}>About</a>
                </Link>
              </li>
              {/* <li
                className={
                  router.pathname == '/blog'
                    ? 'text-gray-400'
                    : 'hover:text-gray-400'
                }
              >
                <Link href="/blog">
                  <a onClick={closeNav}>Blog</a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
