'use client'

import Image from 'next/image'
import logo from "../public/logo.svg"
import menu from "../public/icon-menu.svg"
import mobileMainImg from "../public/mainImg.jpg"
import mobileRetro from "../public/image-retro-pcs.jpg"
import mobileGaming from "../public/image-gaming-growth.jpg"
import mobileLaptop from "../public/image-top-laptops.jpg"
import {useEffect, useState} from "react"

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-28 px-6 lg:px-44 md:px-32">
        <div>
          <Image src={logo} alt="Logo" width={50} height={50}/>
        </div>
        {windowWidth < 1000 ? (
          <div>
          <Image src={menu} alt="Menu" width={50} height={50} />
          </div>
        ) : (
          <div className=" w-96 flex flex-row justify-between text-gray-500 font-medium">
            <a>Home</a>
            <a>New</a>
            <a>Popular</a>
            <a>Trending</a>
            <a>Categories</a>
          </div>
        )
      }
      </nav>

      <main className=" px-6">
        <div className="h-full w-full flex justify-center items-center">
        <Image
            src={mobileMainImg}
            height={500}
            width={500}
            alt="carousel"
        />
        </div>
        <div>
          <h1 className="font-bold text-5xl mt-8">The Bright Future of Web 3.0?</h1>
          <p className="text-gray-700 text-lg mt-8 leading-8">
            We dive into the next evolution of the web that claims to
            put the power of the platforms back into the hands of the people.
            But is it really fulfillings its promise?
          </p>
          <button className=" bg-button-color text-white px-10 py-4 font-semibold mt-8" style={{letterSpacing: '0.4rem'}}>READ MORE</button>
        </div>

        <section className="mt-20 ">
          <div className=" px-8 pt-8 pb-2 bg-container-color">
              <h2 className=" text-new-color font-bold text-4xl ">New</h2>
          </div>
          <div className=" bg-container-color text-letter-color grid grid-rows-3 gap-y-8 px-8 pt-8">
            <div className=" flex flex-col border-b-2 border-gray-600 pb-10">
              <h2 className=" text-gray-200 font-bold text-2xl">Hydrogen VS Electric Cars</h2>
              <p className=" text-gray-400 text-lg mt-2">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className=" flex flex-col border-b-2 border-gray-600 pb-10">
              <h2 className=" text-gray-200 font-bold text-2xl">The Downsides of AI Artistry</h2>
              <p className=" text-gray-400 text-lg mt-2">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className=" flex flex-col">
              <h2 className=" text-gray-200 font-bold text-2xl">Is VC Funding Drying Up?</h2>
              <p className=" text-gray-400 text-lg mt-2">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
        <div className="grid grid-cols-1 gap-y-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 aspect-w-7 aspect-h-4 ">
              <Image
                src={mobileRetro}
                alt="A old computer"
                className="object-contain"
              />
            </div>
            <div className="col-span-2 px-4 flex flex-col justify-between">
              <h2 className="text-4xl font-extrabold text-gray-500">01</h2>
              <h3 className="text-xl font-extrabold">Reviving Retro PCs</h3>
              <p className="text-lg text-gray-500">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 aspect-w-7 aspect-h-4 ">
              <Image
                src={mobileLaptop}
                alt="A old computer"
                className="object-contain"
              />
            </div>
            <div className="col-span-2 px-4 flex flex-col justify-between">
              <h2 className="text-4xl font-extrabold text-gray-500">02</h2>
              <h3 className="text-xl font-extrabold">Top 10 Laptops of 2022</h3>
              <p className="text-lg text-gray-500">Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 aspect-w-7 aspect-h-4 ">
              <Image
                src={mobileGaming}
                alt="A old computer"
                className="object-contain"
              />
            </div>
            <div className="col-span-2 px-4 flex flex-col justify-between">
              <h2 className="text-4xl font-extrabold text-gray-500">04</h2>
              <h3 className="text-xl font-extrabold">The Growth of Gaming</h3>
              <p className="text-lg text-gray-500">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>

        </section>
      </main>
    </div>
  )
}
