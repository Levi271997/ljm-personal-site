import ControlledIcons from "./icons"


const socialLinks = [
    {
        icon : "github",
        link: "https://github.com/Levi271997"
    },
    {
        icon : "linkedin",
        link: "https://www.linkedin.com/in/levi-jan-martinez-002b7b145/"
    },
    {
        icon : "whatsapp",
        link: "https://api.whatsapp.com/send?phone=+639677015147"
    },
    {
        icon : "frontendmentor",
        link: "https://www.frontendmentor.io/profile/Levi271997"
    },
    {
        icon : "FreeCodeCamp",
        link: "https://www.freecodecamp.org/fcce3131031-2fd0-4c08-92cb-429754d5d596"
    },
    {
        icon : "CodePen",
        link: "https://codepen.io/jannex27"
    },
    
]

const SocialsLinks = ()=>{


    return(
        <div className='flex gap-5 flex-wrap'>
        {
            socialLinks.map(({icon, link}) => (
                <a key={link} href={link} className="text-white hover:text-clr-4EE1A0 transition-all duration-150 ease-out socialBox">
                    <ControlledIcons 
                    IconName={icon}
                    width={25} 
                    height={25 }
                />
                </a>
            ))
        }
        </div>
    )
    
}

export default SocialsLinks

 const SideSoc = ()=>{
 return (
    <div className="flex items-center flex-wrap gap-5">
    {
        socialLinks.map(({icon, link}) => (
            <a key={link} href={link} target="_blank" className="text-clr-4EE1A0 hover:text-clr-4EE1A0 bg-clr-151515 transition-all duration-150 ease-out socialBox w-10 h-10 flex justify-center items-center rounded-sm socialBox p-2">
                <ControlledIcons 
                IconName={icon}
                width={25} 
                height={25 }
            />
            </a>
        ))
    }
    </div>
 )
}

export {SideSoc}