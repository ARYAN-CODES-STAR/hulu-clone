import {
  // BadgeCheckIcon,
  // CollectionIcon,
  HomeIcon,
  // LightningBoltIcon,
  // SearchIcon,
  // UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="">
        <div>
            <HeaderItem 
                        title="HOME"
                        Icon={HomeIcon}/>
        </div>
        <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        />
        {/* <h1>this is</h1> */}
            {/* https://www.hulu.com/ */}
            {/* https://links.papareact.com/ua6 */}
    </header>
  )
}

export default Header;



// npm install @heroicons/react
// instsall to use heroicons for icons