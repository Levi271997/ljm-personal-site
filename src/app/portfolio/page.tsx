'use client'

import Header from "../components/header";
import { useState } from "react";
import { MenuContextProvider } from "../contexts/menucontext";
import { useMenuContext } from "../contexts/menucontext";
import MenuSidebar from "../components/MenuSidebar";
import Projects, { ProjectGrid } from "../components/Projects";
import Footer from "../components/Footer";


export default function Home() {
  const {menuClicked, setMenuClicked} = useMenuContext();

  return (
    <MenuContextProvider>
    <div className="relative">
     
     <MenuSidebar/>
     
      <main>
    
      <Header/>
      <section className="px-5 pb-10 md:pb-36 sec1">
          <div className="max-w-pagewidth mx-auto">
            <div className="pt-36">
            <h1 className="text-[40px] sm:text-[60px] md:text-[88px] leading-none tracking-[-2.5px] mb-10 md:mb-20">Projects</h1>
              <ProjectGrid/>
            </div>
          </div>
      </section>
      <Footer/>
      </main>
      
    </div>
    </MenuContextProvider>
  );
}
