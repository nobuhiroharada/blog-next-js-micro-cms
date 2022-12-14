import { FaGithub, FaFacebookF } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function SocialLeft() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/nobuhiroharada',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          facebook
          <FaFacebookF size={30} />
        </>
      ),
      href: 'https://www.facebook.com/nobuhiroharada1026',
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:nobuhiroharada@hotmail.com',
      style: 'rounded-br-md',
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume
    //       <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: '/resume.pdf',
    //   style: 'rounded-br-md',
    //   download: true,
    // },
  ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 pl-8 pr-4 ml-[-100px] duration-300 bg-slate-400 hover:ml-[-10px] hover:rounded-md hover:bg-slate-600' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
