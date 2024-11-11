import Image from "next/image";
import selfpic from '../images/self-pic.png';

const Banner = () =>{
    return(
        <section className="homebanner w-full px-5">
            <div className="max-w-pagewidth mx-auto">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="basis-24 md:basis-[709px] w-full mr-[-39px] z-[1] pt-10 md:pt-[202px] flex flex-col items-center md:items-start">
                    <h1 className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[72px] text-center md:text-left leading-none tracking-[-2.5px]">Nice to meet you! <br /> I&apos;m <span className="marked-heading relative">Levi.</span></h1>
                        <p className="mt-[37px] max-w-[445px] text-center md:text-left">Based in the Philippines, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                        <div className="flex gap-5">
                            <a href="https://api.whatsapp.com/send?phone=+639677015147" target="_blank" className="block uppercase mt-[66px] btn">Contact me</a>
                            <a href="https://calendly.com/levijanmartz27/30min" target="_blank" className="block uppercase mt-[66px] btn">Book a call</a>
                        </div>
                    </div>
                    <div className="bg-clr-242424 flex items-end h-[450px] sm:h-[600px] md:h-[566px] lg:h-[720px] w-full md:w-[445px] justify-center">
                        <Image src={selfpic} alt="levi" width={445} height={620} className="grayscale"/>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white mt-10 mb-10 md:mt-[65px] md:mb-[72px] inline-block"></div>
            </div>
        </section>
    )

}

export default Banner;