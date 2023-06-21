import Image from 'next/image'
import logo from "../public/logo.svg"
import menu from "../public/icon-menu.svg"

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center bg-red-500 h-28 px-12">
        <div>
          <Image src={logo} alt="Logo" width={50} height={50}/>
        </div>
        <div>
          <Image src={menu} alt="Menu" width={50} height={50} />
        </div>
      </nav>
      <main>
        <div>
          <Image />
        </div>
      </main>
    </div>
  )
}
