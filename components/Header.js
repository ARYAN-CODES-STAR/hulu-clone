import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-left justify-evenly max-w-2xl ">
            <HeaderItem 
                 title="HOME"
                  Icon={HomeIcon}/>
            <HeaderItem 
                 title="TRENDING"
                  Icon={LightningBoltIcon}/>
            <HeaderItem 
                 title="VERIFIED"
                  Icon={BadgeCheckIcon}/>
            <HeaderItem 
                 title="COLLECTIONS"
                  Icon={CollectionIcon}/>
            <HeaderItem 
                 title="SEARCH"
                  Icon={SearchIcon}/>
            <HeaderItem 
                 title="ACCOUNT"
                  Icon={UserIcon}/>
              
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