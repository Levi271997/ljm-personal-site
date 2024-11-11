'use client'

import Header from "../components/header";
//import { useState } from "react";
import { MenuContextProvider } from "../contexts/menucontext";
//import { useMenuContext } from "../contexts/menucontext";
import MenuSidebar from "../components/MenuSidebar";
import Image from "next/image";
import SelfImage from "../images/self-portrait.jpg";
import ControlledIcons from "../components/icons";
import Footer from "../components/Footer";

export default function Home() {
  //const {menuClicked, setMenuClicked} = useMenuContext();

  return (
    <MenuContextProvider>
    <div className="relative">
     
     <MenuSidebar/>
     
      <main>
    
      <Header/>
      <section className="px-5 pt-36 homebanner">
            <div className="max-w-pagewidth  mx-auto">
                <div> <h1 className="text-6xl">About Me</h1></div>
                <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-5 mt-10">
                <div className="max-w-[700px]">
  <p className="mb-2">
    As a seasoned WordPress developer, I, Levi, have taken a non-traditional path to get to where I am today. Due to financial constraints and a challenging job market, I initially took on a role as a sales assistant at a retail store. The pandemic in 2020 further exacerbated the economic downturn, making it even harder to find employment. However, after a year and a half, I seized an opportunity to join a friend&apos;s company, where I refined my web development skills, focusing on HTML and CSS to create visually appealing websites.
  </p>
  <p>
    With three years of experience under my belt, I recognized the need to upskill and adapt to the rapidly evolving tech landscape. I enrolled in a paid course on Coursera to learn React, a popular JavaScript framework developed by Meta. I was impressed by its capabilities and am now committed to becoming a front-end engineer.
  </p>
</div>


                  <Image src={SelfImage} alt="levi" width={300} height={300}/>
                </div>
            </div>
       </section>


       <section className="px-5 pt-36 langsection">
            <div className="max-w-pagewidth  mx-auto">
               <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10">Work Experience</h1>
                <div className="flex flex-col md:flex-row mt-5">
                    <div className="w-full md:w-1/2 border-r-0 md:border-r pr-0 md:pr-10">
                      <div className="pb-14 md:pb-16 border-b  alternate-block relative">
                          <p className="text-lg"><span className="font-bold text-xl">Position: </span>Wordpress Web Developer</p>
                          <p className="text-lg"><span className="font-bold text-xl">Company: </span>Aemorph</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>Oct 2023 - Current</p>
                          <div className="mt-5">
                            <p className="mb-5">As a wordpress web developer my roles are:</p> 
                            <p className="pl-8 job-roles relative mb-3">Uploading content to client websites and ensuring that all content adheres to SEO best practices to enhance search rankings.</p>
                            <p className="pl-8 job-roles relative mb-3">develop new websites based on provided designs and client feedback, with a focus on optimizing site performance for faster loading times.</p>
                            <p className="pl-8 job-roles relative mb-3">Perform maintenance to client&apos;s wordpress sites to ensure plugins and themes are up to date</p>
                            <p className="pl-8 job-roles relative">Debug errors when seen upfront</p>
                          </div>

                        <div className="absolute w-[40px] h-[40px] bottom-[-20px] right-1/2 md:right-[-60px] translate-x-1/2 md:translate-x-0  rounded-full bg-clr-D9D9D9 text-black flex items-center justify-center">
                        <ControlledIcons 
                            IconName="briefcase"
                            width={30} 
                            height={30}
                        />
                        </div>
                      </div>

                      <div className="pt-14 md:pt-16">
                      <p className="text-lg"><span className="font-bold text-xl">Position: </span>Sales Merchandiser</p>
                          <p className="text-lg"><span className="font-bold text-xl">Company: </span>Sanitary Care Products Asia Inc.</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>July 2019 - April 2021 (1 year 9 months)</p>
                          <div className="mt-5">
                            <p className="mb-5">My roles as a sales merchandiser are:</p> 
                            <p className="pl-8 job-roles relative mb-3">Refill stocks to shelves on the store</p>
                            <p className="pl-8 job-roles relative mb-3">Perform inventories to stocks both on the selling area and in the warehouse</p>
                            <p className="pl-8 job-roles relative mb-3">Assist customers with their inquiries. </p> 
                            <p className="pl-8 job-roles relative mb-3">Promote products by setting up promotional display inside the store. </p> 
                          </div>
                         
                      </div>
                     
                    </div>

                    <div className="w-full md:w-1/2 pl-0 md:pl-10">

                    <div className="mt-16 md:mt-72 pb-16 pt-16 md:pt-0 border-b border-t md:border-t-0 relative">
                        <div className="absolute w-[40px] h-[40px] top-[-20px] left-1/2  md:left-[-60px] -translate-x-1/2 md:translate-x-0 rounded-full bg-clr-D9D9D9 text-black flex items-center justify-center md:hidden">
                        <ControlledIcons 
                            IconName="briefcase"
                            width={30} 
                            height={30}
                        />
                        </div>

                          <p className="text-lg"><span className="font-bold text-xl">Position: </span>Wordpress Web Developer</p>
                          <p className="text-lg"><span className="font-bold text-xl">Company: </span>TechMyDay IT Solutions</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>April 2021 - October 2023 (2 years 6 months)</p>
                          <div className="mt-5">
                            <p className="mb-5">As a wordpress web developer my roles are:</p> 
                            <p className="pl-8 job-roles relative mb-3">Build new websites using different page builders to create visually stunning websites </p>
                            <p className="pl-8 job-roles relative mb-3">Debug errors when seen upfront</p>
                            <p className="pl-8 job-roles relative mb-3">Perform maintenance to client&apos;s wordpress sites to ensure plugins and themes are up to date</p> 
                          </div>
                          <div className="absolute w-[40px] h-[40px] bottom-[-20px] left-1/2  md:left-[-60px] -translate-x-1/2 md:translate-x-0 rounded-full bg-clr-D9D9D9 text-black flex items-center justify-center">
                        <ControlledIcons 
                            IconName="briefcase"
                            width={30} 
                            height={30}
                        />
                        </div>
                      </div>

                      <div className="pt-16">
                          <p className="text-lg"><span className="font-bold text-xl">Position: </span>Sales Merchandiser</p>
                          <p className="text-lg"><span className="font-bold text-xl">Company: </span>Procter & Gamble</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>April 2019 - July 2019 (3 months)</p>
                          <div className="mt-5">
                            <p className="mb-5">My roles as a sales merchandiser are:</p> 
                            <p className="pl-8 job-roles relative mb-3">Refill stocks to shelves on the store</p>
                            <p className="pl-8 job-roles relative mb-3">Perform inventories to stocks both on the selling area and in the warehouse</p>
                            <p className="pl-8 job-roles relative mb-3">Assist customers with their inquiries. </p> 
                            <p className="pl-8 job-roles relative mb-3">Promote products by setting up promotional display inside the store. </p> 
                          </div>
                      </div>
                    </div>

                </div>
            </div>
       </section>
      
       <section className="px-5 pb-36 pt-36 homebanner">
            <div className="max-w-pagewidth  mx-auto">
               <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10">Educational Attainment</h1>
                <div className="flex flex-col md:flex-row mt-5">
                    <div className="w-full md:w-1/2 border-r-0 md:border-r pr-0 md:pr-10">
                      <div className="pb-14 md:pb-16 border-b  alternate-block relative">
                          <p className="font-bold text-xl">Tertiary</p>
                          <p className="text-lg"><span className="font-bold text-xl">School: </span>Phinma - Cagayan de Oro College</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>June 2015 - March  2019</p>
                         

                        <div className="absolute w-[40px] h-[40px] bottom-[-20px] right-1/2 md:right-[-60px] translate-x-1/2 md:translate-x-0  rounded-full bg-clr-D9D9D9 text-black flex items-center justify-center">
                        <ControlledIcons 
                            IconName="graduation"
                            width={30} 
                            height={30}
                        />
                        </div>
                      </div>

                      <div className="pt-14 md:pt-44">
                          <p className="font-bold text-xl">Primary</p>
                          <p className="text-lg"><span className="font-bold text-xl">School: </span>Fr. William F. Masterson Elementary School</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>June 2005 - March  2011</p> 
                      </div>
                     
                    </div>

                    <div className="w-full md:w-1/2 pl-0 md:pl-10">

                    <div className="mt-16 md:mt-44 pb-16 pt-16 md:pt-0 border-b border-t md:border-t-0 relative">
                        <div className="absolute w-[40px] h-[40px] top-[-20px] left-1/2  md:left-[-60px] -translate-x-1/2 md:translate-x-0 rounded-full bg-clr-D9D9D9 text-black flex items-center justify-center md:hidden">
                        <ControlledIcons 
                            IconName="graduation"
                            width={30} 
                            height={30}
                        />
                        </div>

                          <p className="font-bold text-xl">Secondary</p>
                          <p className="text-lg"><span className="font-bold text-xl">School: </span>Lumbia National High School</p>
                          <p className="text-lg"><span className="font-bold text-xl">Duration: </span>June 2011 - March  2015</p>
                         
                          <div className="absolute w-[40px] h-[40px] bottom-[-20px] left-1/2  md:left-[-60px] -translate-x-1/2 md:translate-x-0 rounded-full bg-clr-D9D9D9 text-black flex items-center justify-center">
                        <ControlledIcons 
                            IconName="graduation"
                            width={30} 
                            height={30}
                        />
                        </div>
                      </div>

                    </div>

                </div>
            </div>
       </section>

       <Footer/>
      </main>
      
    </div>
    </MenuContextProvider>
  );
}

