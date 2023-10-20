import Image from "next/image"
import logo from '../../public/logo-brand.svg'

const Navbar = () => {
  return (
       <div className="py-8">
        <Image src={logo} alt="logo" />
      </div>
  )
}

export default Navbar