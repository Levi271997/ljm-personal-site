import { link } from "fs";

const LangListBox = () => {

    const langs = [
        {
            name:'HTML',
            desc: '7 years experience'
        },
        {
            name:'CSS',
            desc: '7 years experience'
        },
        {
            name:'Javascript',
            desc: '2 years experience'
        },
        {
            name:'Wordpress',
            desc: '3 years experience'
        },
        {
            name:'React',
            desc: '1 years experience'
        },
        {
            name:'Sass',
            desc: '1 years experience'
        },
    ]

    return (
       <section className="langsection px-5">
            <div className="max-w-pagewidth mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[20px] md:gap-y-[58px] pb-12 md:pb-36 border-b md:border-none">
                {
                    langs.map(({name,desc}) =>{
                        return(
                            <div key={name} className="langlist-grid-box relative cursor-pointer border border-clr-4EE1A0 p-2 md:border-none md:p-0">
                                <p className="text-2xl md:text-5xl font-bold mb-0 md:mb-3.5 z-10 relative">{name}</p>
                                <p className="z-10 relative text-xs sm:text-lg md:text-lg">{desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
       </section>
    )
}

export default LangListBox;