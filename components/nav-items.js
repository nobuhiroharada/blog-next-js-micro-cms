import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as Scroll } from 'react-scroll'

export default function Navitems() {
  const [activeNav, setActiveNav] = useState('#top')
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'top',
    },
    {
      id: 2,
      link: 'experience',
    },
    {
      id: 3,
      link: 'blog',
    },
  ]
  return (
    <>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={
              activeNav === '#' + link
                ? 'px-4 cursor-pointer capitalize text-slate-800  hover:text-slate-800 duration-200'
                : 'px-4 cursor-pointer capitalize text-slate-400  hover:text-slate-800 duration-200'
            }
          >
            <Scroll
              href={`#${link}`}
              onClick={() => setActiveNav('#' + link)}
              to={link}
              smooth
              duration={500}
              offset={-120}
            >
              {link}
            </Scroll>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-50">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={
                activeNav === '#' + link
                  ? 'px-4 cursor-pointer capitalize py-6 text-4xl text-slate-800'
                  : 'px-4 cursor-pointer capitalize py-6 text-4xl text-slate-400'
              }
            >
              <Scroll
                onClick={() => (setNav(!nav), setActiveNav('#' + link))}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Scroll>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
