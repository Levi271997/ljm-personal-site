'use client'

// import Image from "next/image";
// import localFont from "next/font/local";
//import Header from "./components/header";
// import Banner from "./components/Banner";
// import LangListBox from "./components/LangListBox";
// import Projects from "./components/Projects";
//import ContactSection from "./components/Contact";
//import Footer from "./components/Footer";
//import MenuSidebar from "./components/MenuSidebar";
//import { useState } from "react";
import  {MenuContextProvider }  from './contexts/menucontext';
///import {useMenuContext} from './contexts/menucontext';
import Link from "next/link";

export default function NotFound() {
 // const {menuClicked, setMenuClicked} = useMenuContext();

  return (
    <MenuContextProvider>
    <div className="relative">
     
     {/* <MenuSidebar/> */}
     
      <main>
        {/* <MenuContext.Provider value={menuClicked}>
              <Header/>
            </MenuContext.Provider> */}
      
    
      {/* <Header/> */}
      <section className="px-5">
        <div className="max-w-pagewidth mx-auto">
            <div className="pt-48 flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl sm:text-5xl md:text-7xl">Oops, Sorry that page didn't exist</h2>
                <p className="text-center text-2xl mt-16">You may want to go back to home</p>
                <Link href="/" className=" btn mt-9 uppercase">go to home</Link>
            </div>
        </div>
      </section>
      </main>
      
    </div>
    </MenuContextProvider>
  );
}
