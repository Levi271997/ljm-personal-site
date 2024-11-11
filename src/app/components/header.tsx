//'use client'

import React from 'react';

import ControlledIcons from './icons';
import SocialsLinks from './Socials';
import { useEffect, useRef } from 'react';
import {useMenuContext} from '../contexts/menucontext';
import Link from 'next/link';


export default function Header(){

  const {menuClicked, setMenuClicked} = useMenuContext();

  
    const headerRef = useRef<HTMLElement>(null); 

    useEffect(() => {
      // Ensure this runs only on the client side
      if (typeof window !== 'undefined') {
        let prevScrollPos = window.scrollY;
  
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          const headerElement = headerRef.current;
  
          if (!headerElement) return;
  
          // Add or remove the 'scrolled' class based on scroll position
          if (currentScrollPos > 0) {
            headerElement.classList.add('scrolled');
          } else {
            headerElement.classList.remove('scrolled');
          }
  
          // Show/hide header based on scroll direction
          if (prevScrollPos > currentScrollPos) {
            headerElement.style.transform = 'translateY(0)';
          } else {
            headerElement.style.transform = 'translateY(-200px)';
          }
  
          prevScrollPos = currentScrollPos;
        };
  
        const handleLoad = () => {
          const scrollPos = window.scrollY;
          const siteheader = headerRef.current;
  
          if (siteheader) {
            if (scrollPos > 0) {
              siteheader.classList.add('scrolled');
            } else {
              siteheader.classList.remove('scrolled');
            }
          }
        };
  
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleLoad);
  
        // Cleanup function
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('load', handleLoad);
        };
      }
    }, []);
  
    // useEffect(() => { 
    //   let prevScrollPos = window.scrollY; 
    
    //   const handleScroll = () => { 
    //     const currentScrollPos = window.scrollY; 
    //     const headerElement = headerRef.current; 
    //     if (!headerElement) { 
    //       return; 
    //     } 
     
    //     if(headerElement){
    //       if(currentScrollPos > 0){
    //         headerElement.classList.add('scrolled');
    //       }else{
    //         headerElement.classList.remove('scrolled');
    //       }

    //         if (prevScrollPos > currentScrollPos) { 
    //             headerElement.style.transform = "translateY(0)"; 
    //         } else { 
    //             headerElement.style.transform = "translateY(-200px)"; 
    //         } 
    //           prevScrollPos = currentScrollPos; 
    //     }

    //   } 
    //   window.addEventListener('scroll', handleScroll) 
    
    //   return () => { 
    //     window.removeEventListener('scroll', handleScroll) 
        
    //   } 

    // }, []); 


    // window.addEventListener("load", () =>{
    //   const scrollPos = window.scrollY; 
    //   const siteheader = headerRef.current; 

    // if(siteheader){
    //   if(scrollPos > 0){
    //     siteheader.classList.add('scrolled');
    //   }else{
    //     siteheader.classList.remove('scrolled');
    //   }
    // }
    // });

   

    // const handleAnchorClick = (anchor:any) => () => { 
    //     const id = `${anchor}-section`; 
    //     const element = document.getElementById(id); 
    //     if (element) { 
    //       element.scrollIntoView({ 
    //         behavior: "smooth", 
    //         block: "start", 
    //       }); 
    //     } 
    //   }; 


    const handleMenuClick=()=>{
          setMenuClicked(!menuClicked);
      }

    return(
        <header className="w-full px-[20px] fixed top-0 left-0 right-0 translate-y-0 transition-all duration-300 ease-in-out z-20 "  ref={headerRef}>
            <div className="max-w-pagewidth m-auto">
                <div className="flex justify-between items-center pt-[43px] headerbox transition-all duration-300 ease-in-out">
                    <div className='text-[32px] flex items-center gap-5'>
                      
                      <button onClick={handleMenuClick} className='socialBox bg-clr-4EE1A0 hidden text-clr-151515 rounded p-1 md:flex'>
                       <ControlledIcons 
                            IconName="Bars"
                            width={30} 
                            height={30}
                        />
                       </button>
                      <Link href="/">LviJn</Link>
                    </div>
                  
                    <div className='flex items-center gap-5'>
                       <div className='hidden md:block'>
                          <SocialsLinks/>
                       </div>
                        <button onClick={handleMenuClick} className='socialBox bg-clr-4EE1A0 flex text-clr-151515 rounded p-1 md:hidden'>
                          <ControlledIcons 
                                IconName="Bars"
                                width={30} 
                                height={30}
                            />
                       </button>
                    </div>
                </div>
            </div>
        </header>
    )
}


