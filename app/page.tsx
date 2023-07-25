'use client'

import Image from 'next/image'
import logo from "../public/logo.svg"
import menu from "../public/icon-menu.svg"
import mobileMainImg from "../public/image-web-3-desktop.jpg"
import desktopMainImg from "../public/bigMainImg.jpg"
import mobileRetro from "../public/image-retro-pcs.jpg"
import mobileGaming from "../public/image-gaming-growth.jpg"
import mobileLaptop from "../public/image-top-laptops.jpg"
import {useEffect, useState} from "react"

export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [windowWidth, setWindowWidth] = useState(0)

  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-28 px-6 lg:px-44 lg:py-20">
        <div className="pl-2 cursor-pointer">
          <Image src={logo} alt="Logo" width={`${windowWidth > 1000 ? 70 : 50}`} height={50}/>
        </div>
        {windowWidth < 1300 ? (
          <div className="pr-2 cursor-pointer md:pr-12">
          <Image src={menu} alt="Menu" width={`${windowWidth > 1000 ? 70 : 50}`} height={50} />
          </div>
        ) : (
          <div className=" flex flex-row justify-between text-gray-500 font-medium lg:text-2xl lg">
            <a className="mr-8 cursor-pointer">Home</a>
            <a className="mr-8 cursor-pointer">New</a>
            <a className="mr-8 cursor-pointer">Popular</a>
            <a className="mr-8 cursor-pointer">Trending</a>
            <a className="mr-8 cursor-pointer">Categories</a>
          </div>
        )
      }
      </nav>

      <main className=" px-6 lg:px-32">
        <div className={`${windowWidth > 1000 ? "flex flex-row" : ""}`}>
          <div>
            <div className={`aspect-w-1 aspect-h-1 ${windowWidth > 1000 ? "pr-12" : ""}`}>
              <Image
                src={mobileMainImg}
                objectFit="cover"
                alt="carousel"
                className="rounded-lg"
              />
            </div>
            {windowWidth > 1000 ? (<div>
              <div>
                <h1 className="font-bold text-5xl mt-8">The Bright Future of Web 3.0?</h1>
                <p className="text-gray-700 text-lg mt-8 leading-8 pr-12">
                  We dive into the next evolution of the web that claims to
                  put the power of the platforms back into the hands of the people.
                  But is it really fulfillings its promise?
                </p>
                <button className=" bg-button-color text-white px-10 py-4 font-semibold mt-8 rounded-lg hover:bg-red-700" style={{letterSpacing: '0.4rem'}}>READ MORE</button>
              </div>
            </div>) : ""}
          </div>

          {windowWidth > 1500 ? (<div className="flex flex-col">
            <div className=" px-10 pt-8 p-2 xl:pb-8 bg-container-color">
                <h2 className=" text-new-color font-bold text-4xl xl:text-5xl">New</h2>
            </div>
            <div className=" bg-container-color text-letter-color grid grid-rows-3 gap-y-14 px-8 pt-8">
              <div className=" flex flex-col border-b-2 border-gray-600 p-2 xl:pb-8">
                <h2 className=" text-gray-200 font-bold text-3xl">Hydrogen VS Electric Cars</h2>
                <p className=" text-gray-400 text-xl mt-2">Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <div className=" flex flex-col border-b-2 border-gray-600 p-2 xl:pb-8">
                <h2 className=" text-gray-200 font-bold text-3xl">The Downsides of AI Artistry</h2>
                <p className=" text-gray-400 text-xl mt-2">What are the possible adverse effects of on-demand AI image generation?</p>
              </div>
              <div className=" flex flex-col">
                <h2 className=" text-gray-200 font-bold text-3xl">Is VC Funding Drying Up?</h2>
                <p className=" text-gray-400 text-xl mt-2">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </div>
          </div>) : ""}

        </div>

        { windowWidth < 1000 ?(<div>
          <h1 className="font-bold text-5xl mt-8">The Bright Future of Web 3.0?</h1>
          <p className="text-gray-700 text-lg mt-8 leading-8">
            We dive into the next evolution of the web that claims to
            put the power of the platforms back into the hands of the people.
            But is it really fulfillings its promise?
          </p>
          <button className=" bg-button-color text-white px-10 py-4 font-semibold mt-8 rounded-lg hover:bg-red-700" style={{letterSpacing: '0.4rem'}}>READ MORE</button>
        </div>) : ""}

        {windowWidth < 1500 ? (<section className="mt-20 md:pr-12">
          <div className=" px-8 pt-8 pb-2 bg-container-color">
              <h2 className=" text-new-color font-bold text-4xl lg:text-5xl">New</h2>
          </div>
          <div className=" bg-container-color text-letter-color grid grid-rows-3 gap-y-8 px-8 pt-8">
            <div className=" flex flex-col border-b-2 border-gray-600 pb-10">
              <h2 className=" text-gray-200 font-bold text-2xl lg:text-3xl">Hydrogen VS Electric Cars</h2>
              <p className=" text-gray-400 text-lg mt-2 lg:text-xl">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className=" flex flex-col border-b-2 border-gray-600 pb-10">
              <h2 className=" text-gray-200 font-bold text-2xl lg:text-3xl">The Downsides of AI Artistry</h2>
              <p className=" text-gray-400 text-lg mt-2 lg:text-xl">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className=" flex flex-col">
              <h2 className=" text-gray-200 font-bold text-2xl lg:text-3xl">Is VC Funding Drying Up?</h2>
              <p className=" text-gray-400 text-lg mt-2 lg:text-xl">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </section>) : ""}

        <section className="mt-20 lg:mt-24">
        <div className="flex flex-col justify-center items-center lg:flex-row">

          <div className="flex flex-col items-center justify-center shadow-lg py-12 px-4 rounded-lg mt-4 lg:mr-12">
            <div className=" ">
              <Image
                src={mobileRetro}
                alt="A old computer"
                className="object-contain rounded-lg"
              />
            </div>
            <div className="max-w-[300px] mt-6 px-4">
              <h2 className="text-4xl font-extrabold text-gray-500">01</h2>
              <h3 className="text-xl font-extrabold">Reviving Retro PCs</h3>
              <p className="text-lg text-gray-500">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center shadow-lg py-12 px-4 rounded-lg mt-4 lg:mr-12">
            <div className=" ">
              <Image
                src={mobileLaptop}
                alt="A old computer"
                className="object-contain rounded-lg"
              />
            </div>
            <div className="max-w-[300px] mt-6 px-4">
              <h2 className="text-4xl font-extrabold text-gray-500">02</h2>
              <h3 className="text-xl font-extrabold">Top 10 Laptops of 2022</h3>
              <p className="text-lg text-gray-500">Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center shadow-lg py-12 px-4 rounded-lg mt-4">
            <div className=" ">
              <Image
                src={mobileGaming}
                alt="A old computer"
                className="object-contain rounded-lg"
              />
            </div>
            <div className="max-w-[300px] mt-6 px-4">
              <h2 className="text-4xl font-extrabold text-gray-500">03</h2>
              <h3 className="text-xl font-extrabold">The Growth of Gaming</h3>
              <p className="text-lg text-gray-500">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
          </div>

        </section>
      </main>
      <footer className='flex flex-row justify-center items-center pt-32 pb-12'>
          <p className='text-black font-semibold text-center'>
            ©2023 Gabriel B. - Todos os direitos reservados.
          </p>
      </footer>
    </div>
  )
}
