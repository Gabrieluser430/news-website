import Image from 'next/image'
import logo from "../public/logo.svg"
import menu from "../public/icon-menu.svg"
import mobileMainImg from "../public/mainImg.jpg"
import mobileRetro from "../public/image-retro-pcs.jpg"

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
        <section className="mt-20 bg-blue-950 p-6">
          <h2 className="text-4xl font-semibold text-yellow-500">New</h2>
          <div>
            <div className="text-gray-200 mt-8 border-b-2 border-gray-400 pb-10">
              <h3 className="font-semibold text-2xl">Hydrogen VS Electric Cars</h3>
              <p className="text-gray-300 mt-2 leading-8">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="text-gray-200 mt-8 border-b-2 border-gray-400 pb-10">
              <h3 className="font-semibold text-2xl">The Downsides of AI Artistry</h3>
              <p className="text-gray-300 mt-2 leading-8">What are the possible adverse effects of 
              on-demand AI image generation?</p>
            </div>
            <div className="text-gray-200 mt-8 pb-2">
              <h3 className="font-semibold text-2xl">Is VC Funding Drying up?</h3>
              <p className="text-gray-300 mt-2 leading-8">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div>
            <div className="flex justify-center items-center">
              <div className="h-full"  style={{height: "150px", width: "200px"}}>
                <Image
                  src={mobileRetro}

                  alt="A old computer"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h2 className="font-semibold text-gray-400 text-3xl">01</h2>
                <h3 className=" font-extrabold text-xl mt-4">Reviving Retro PCs</h3>
                <p className="leading-6 text-md text-gray-500 mt-4">What happens when old PCs are given modern upgrades?</p>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
