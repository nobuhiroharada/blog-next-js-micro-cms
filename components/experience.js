import Image from 'next/image'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import reactImage from '../images/react.png'
import nextjs from '../images/nextjs.png'
import github from '../images/github.png'
import tailwind from '../images/tailwind.png'

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: nextjs,
      title: 'Next JS',
      style: 'shadow-gray-400',
    },
    {
      id: 7,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
  ]

  return (
    <div name="experience" className="w-full mt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-slate-800">
        <div className="text-center mb-5">
          <p className="text-4xl font-bold border-b-2 border-slate-400 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-slate-400">
            The technoligies I&apos;ve worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-10 rounded-lg ${style}`}
            >
              <div className="w-20 mx-auto">
                <Image src={src} alt="" layout="responsive" className="" />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
