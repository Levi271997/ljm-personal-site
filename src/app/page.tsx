'use client'

import Image from "next/image";
import localFont from "next/font/local";
import Header from "./components/header";
import Banner from "./components/Banner";
import LangListBox from "./components/LangListBox";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import MenuSidebar from "./components/MenuSidebar";
import { useState } from "react";
import  {MenuContextProvider }  from './contexts/menucontext';
import {useMenuContext} from './contexts/menucontext';


export default function Home() {
  const {menuClicked, setMenuClicked} = useMenuContext();

  return (
    <MenuContextProvider>
    <div className="relative">
     
     <MenuSidebar/>
     
      <main>
        {/* <MenuContext.Provider value={menuClicked}>
              <Header/>
            </MenuContext.Provider> */}
      
    
      <Header/>
      <Banner/>
      <LangListBox/>
      <Projects/>
      <ContactSection/>
      <Footer/>
      </main>
      
    </div>
    </MenuContextProvider>
  );
}