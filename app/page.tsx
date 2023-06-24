import Image from 'next/image'
import logo from "../public/logo.svg"
import menu from "../public/icon-menu.svg"
import mobileMainImg from "../public/mainImg.jpg"
import mobileRetro from "../public/image-retro-pcs.jpg"
import mobileGaming from "../public/image-gaming-growth.jpg"
import mobileLaptop from "../public/image-top-laptops.jpg"

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-28 px-12">
        <div>
          <Image src={logo} alt="Logo" width={50} height={50}/>
        </div>
        <div>
          <Image src={menu} alt="Menu" width={50} height={50} />
        </div>
      </nav>
      <main className=" px-12">
        <div className="h-full w-full flex justify-center items-center">
        <Image
            src={mobileMainImg}
            height={500}
            width={500}
            objectFit="cover"
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
          <button className="bg-red-500 text-white px-10 py-4 font-semibold mt-8" style={{letterSpacing: '0.4rem'}}>READ MORE</button>
        </div>
        <section className="mt-20">
  <div className="grid gap-10 justify-center items-center">
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="aspect-w-7 aspect-h-4">
        <Image
          src={mobileRetro}
          alt="A old computer"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-gray-400 text-3xl">01</h2>
        <h3 className="font-extrabold text-xl mt-4">Reviving Retro PCs</h3>
        <p className="leading-6 text-md text-gray-500 mt-4">What happens when old PCs are given modern upgrades?</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="aspect-w-7 aspect-h-4">
        <Image
          src={mobileLaptop}
          alt="A old computer"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-gray-400 text-3xl">02</h2>
        <h3 className="font-extrabold text-xl mt-4">Top 10 Laptops of 2022</h3>
        <p className="leading-6 text-md text-gray-500 mt-4">Our best picks for various needs and budgets.</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="aspect-w-7 aspect-h-4">
        <Image
          src={mobileGaming}
          alt="A old computer"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-gray-400 text-3xl">03</h2>
        <h3 className="font-extrabold text-xl mt-4">The Growth of Gaming</h3>
        <p className="leading-6 text-md text-gray-500 mt-4">How the pandemic has sparked fresh opportunities</p>
      </div>
    </div>
  </div>
</section>



      </main>
    </div>
  )
}
