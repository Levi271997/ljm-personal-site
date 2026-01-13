import Image, { StaticImageData } from "next/image";
import aemorphimage from '../images/aemorph-ss.jpg';
import bruinsmaimage from '../images/bruinsma-ss.jpg';
import dnvbuilkimage from '../images/dnvbulk-ss.jpg';
import epicimage from '../images/epicvisibility-ss.jpg';
import jonesdental from '../images/jonesdental-ss.jpg';
import kevindam from '../images/kevindam-ss.jpg';
import patientgrowth from '../images/patientgrowth-ss.jpg';
import proppursuit from '../images/propertypursuit-ss.jpg';
import rejuve from '../images/rejuve-ss.jpg';
import sme from '../images/smecentre-ss.jpg';
import trill from '../images/trill-ss.jpg';
import Link from "next/link";


const Projects = ()=>{



    return(
        <section className="project-section px-5 pb-[80px] sm:pb-[100px] md:pb-[139px] bg-[#151515]">
            <div className="max-w-pagewidth mx-auto">

                <div className="flex justify-between items-center pt-12 mb-10 md:mb-20">
                    <h2 className="text-[40px] sm:text-[60px] md:text-[88px] leading-none tracking-[-2.5px]">Projects</h2>
                    <a href="https://api.whatsapp.com/send?phone=+639677015147" target="_blank" className="block uppercase btn">contact me</a>
                </div>      

              <ProjectGrid limit ={6}/>
            </div>
        </section>
    )
}

export default Projects;

type projectProps = {
    limit?:number,
}
export const ProjectGrid:React.FC<projectProps>=({ limit })=>{

    
    const projectsdetails = [
        {
            imageUrl: rejuve,
            projectTitle: 'Rejuve Cosmetics',
            projectUrl:'https://rejuvecosmetix.com.au/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: aemorphimage,
            projectTitle: 'Aemorph',
            projectUrl:'https://aemorph.com/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: dnvbuilkimage,
            projectTitle: 'DNV Bulk',
            projectUrl:'https://dnvbulk.com/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: trill,
            projectTitle: 'Trill Electrical',
            projectUrl:'https://qhs.c22.myftpupload.com/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: sme,
            projectTitle: 'SME Center',
            projectUrl:'https://smecentresidev.wpenginepowered.com/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: jonesdental,
            projectTitle: 'Jones Dental',
            projectUrl:'https://jonesdental.com.au/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: kevindam,
            projectTitle: 'KevinDam',
            projectUrl:'https://kevindam.com/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: patientgrowth,
            projectTitle: 'PatientGrowth',
            projectUrl:'https://patientgrowth.co/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: proppursuit,
            projectTitle: 'Property Pursuit',
            projectUrl:'https://sg.propertypursuit.co/',
            githubUrl:'',
            techstack: ["wordpress" ,"acf", "html", "css","sass", "webpack", "javascript"]
        },
        {
            imageUrl: epicimage,
            projectTitle: 'Epic Visibility',
            projectUrl:'https://epicdevsite.info/2023-EpicVisibility/',
            githubUrl:'',
            techstack: ["wordpress" , "html", "css"]
        },
        {
            imageUrl: bruinsmaimage,
            projectTitle: 'Bruinsma Grasstrees',
            projectUrl:'https://bruinsmagrasstrees.com.au/',
            githubUrl:'',
            techstack: ["wordpress" , "html", "css"]
        }
    ]
    
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-16">
                {
                    projectsdetails.slice(0, limit ).map(({imageUrl, projectTitle, projectUrl, techstack, githubUrl }) =>(
                    
                        <ProjectCards key={projectTitle} imageUrl={imageUrl} projecturl= {projectUrl} projecttitle={projectTitle} techstach={techstack} githuburl={githubUrl}/>
                    
                    ))
                }
            </div>
            {
                limit ?
                 <div className="uppercase mt-[66px] flex justify-center">
                    <Link href="/portfolio" className=" btn uppercase">View All Portfolio</Link>
                 </div> 
                 :''
            }
        </>
    ) 
}


type CardsComponents = {
    imageUrl:StaticImageData,
    projecttitle:string,
    techstach:string[],
    projecturl:string,
    githuburl:string,
}

export const ProjectCards:React.FC<CardsComponents> = ({imageUrl, projecttitle, techstach, projecturl, githuburl})=>{
    return(
        <div className="card-box">
           <div className="projectCardBox relative group">
                <Image 
                        src={imageUrl}
                        alt="portfolio"
                        width={500}
                        height={500}
                        className="w-full h-[270px] sm:h-[300px] md:h-[350px] lg:[500px] object-cover object-top"
                    />
                   <div className="absolute left-0 top-0 bg-[rgba(0,0,0,0.75)] w-full h-full z-10  justify-center items-center opacity-0 invisible hoverBlock transition-all duration-300 ease-in-out hidden md:flex flex-col gap-5">
                        <a href={projecturl} target="_blank" className="block uppercase btn">View Site</a>
                        {githuburl ? <a href={projecturl} target="_blank" className="block uppercase btn">View Github</a> : ''}
                        
                    </div> 
           </div>
            <p className="text-2xl leading-8 font-bold uppercase mt-5 mb-2 text-white">{projecttitle}</p>
            <div className="tech-stack flex gap-4 flex-wrap">
                {techstach.map((stack, index) => (
                    <p key={index} className="tech-item text-lg font-medium leading-7 text-clr-D9D9D9 uppercase ">
                        {stack}
                    </p>
                ))}
            </div>
            <div className="flex gap-8 mt-5 md:hidden">
            <a href="#" className="block uppercase btn text-[16px]">View Site</a>
            {githuburl ?   <a href="#" className="block uppercase btn text-[16px]">View Github</a> : ''}
            </div>
        </div>
    )
}
