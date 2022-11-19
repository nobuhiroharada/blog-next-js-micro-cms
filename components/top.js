import Image from 'next/image'
import TopImage from '../images/topImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Top() {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 mt-10 md:mt-20 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-slate-800">
            I&apos;m a web application developer
          </h2>
          <p className="text-slate-400 py-4 max-w-md">
            I have a 7 years of experience building and designing software.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="mx-auto w-2/3 md:w-full">
          <Image
            src={TopImage}
            alt=""
            layout="responsive"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}
