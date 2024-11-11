import {useMenuContext} from '../contexts/menucontext';
import ControlledIcons from './icons';
import {SideSoc} from './Socials';
import Link from 'next/link';

export default function MenuSidebar() {

    const {menuClicked, setMenuClicked} = useMenuContext();


    const handleCloseMenu = ()=>{
        setMenuClicked(!menuClicked);
    }

    return(
        <aside className={` absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 ${menuClicked ? 'left-0' : '-left-full'} transition-all duration-300 ease-in-out`}>
            <div className=' pl-5 pr-5 pb-5 bg-clr-4EE1A0 sidebar w-52 md:w-60 lg:w-96 h-full fixed'>
               <button className='block mt-16 ml-auto iconBox text-clr-151515 w-6 h-6 md:w-8 md:h-8' onClick={handleCloseMenu}>
                    <ControlledIcons 
                        IconName="closeX"
                        width={50} 
                        height={50}
                    />
               </button>    
                <p className='mt-24 md:mt-40 text-2xl font-bold text-clr-151515'>Menu</p>
                <ul>
                   
                    <li><Link href="/" className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal text-clr-151515 hover:text-[#f5f5f5] transition-all duration-100 ease-in-out cursor-pointer'>Home</Link></li>
                    <li><Link href="/about" className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal text-clr-151515 hover:text-[#f5f5f5] transition-all duration-100 ease-in-out cursor-pointer'>About</Link></li>
                    <li><Link href="/portfolio" className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal text-clr-151515 hover:text-[#f5f5f5] transition-all duration-100 ease-in-out cursor-pointer'>Portfolio</Link></li>
                    <li><Link href="/gallery" className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal text-clr-151515 hover:text-[#f5f5f5] transition-all duration-100 ease-in-out cursor-pointer'>Gallery</Link></li>
                    <li><Link href="/blogs" className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal text-clr-151515 hover:text-[#f5f5f5] transition-all duration-100 ease-in-out cursor-pointer'>Blogs</Link></li>
                    <li><Link href="/contact" className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal text-clr-151515 hover:text-[#f5f5f5] transition-all duration-100 ease-in-out cursor-pointer'>Contact</Link></li>
                </ul>
                <div className='block mt-4 md:hidden'>
                    <SideSoc/>
                </div>
            </div>
        </aside>
    )
}