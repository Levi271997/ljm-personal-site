import SocialsLinks from "./Socials";
import Link from "next/link";

const Footer =()=>{
    return(
        <footer className="w-full px-[20px] bg-clr-242424">
        <div className="max-w-pagewidth m-auto">
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center md:justify-between pt-10 pb-[60px] md:pt-12 md:pb-[92px] border-t-[1px] border-t-white">
                <div className='text-[32px]'>
                <Link href="/">LviJn</Link>
                </div>
                <div>
                    <SocialsLinks/>
                </div>
            </div>
        </div>
    </footer>

    )
}

export default Footer;