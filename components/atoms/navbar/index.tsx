import React, {useRef,useEffect, useState} from 'react'
import { MdDashboard, MdLocalGroceryStore, MdFilterNone } from "react-icons/md";
import { FcSettings, FcCollaboration } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from 'next/link'
import {useRouter} from 'next/router'



export default function Index() {
  const router = useRouter()
    const [toggleActive, setToggleActive] = useState(false)
    const toggleButton = () => {
        setToggleActive(!toggleActive)
    }
    const listenToScroll = () => {
        var header = document.getElementById("myHeader");
        var headImage = document.getElementById('reduceImage')
        var sticky = header.offsetTop;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        console.log(winScroll);
        
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            headImage.classList.remove("reduceSticky");
          } else {
            header.classList.remove("sticky");
            headImage.classList.remove("reduceSticky");
          }
      }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
      });

    return (
        <>
        <div id="myHeader" className="hidden xl:block header bg-white shadow-sm py-4 px-10 relative">
            <div className="absolute -top-20 ml-12">
                <div id='reduceImage' className="h-40 w-40 profileImage relative">
                <Image src='/assets/login.png' layout="fill" // required
    objectFit="cover" // change to suit your needs
    className="rounded-full border-solid border-8 border-green_primary"  />
            </div>
            </div>
            
           <div className="flex justify-end list-none">
           <Link href='/'>
               <li className={router.pathname == '/' ? "activeSideBar cursor-pointer px-5 py-3" : 'sideNavLink cursor-pointer px-5 py-3'}>
                   <div className="flex items-center">
                     <MdDashboard className="mr-3" />  
                     <h1>Dashboard</h1>
                   </div>
               </li>
               </Link>
               <Link href='/market'>
               <li className={router.pathname == '/market' ? "activeSideBar cursor-pointer px-5 py-3" : 'sideNavLink cursor-pointer px-5 py-3'}>
                   <div className="flex items-center">
                     <MdLocalGroceryStore className="mr-3" />  
                     <h1>Market</h1>
                   </div>
               </li>
               </Link>
               <Link href='/course'>
               <li className={router.pathname == '/course' ? "activeSideBar cursor-pointer px-5 py-3" : 'sideNavLink cursor-pointer px-5 py-3'}>
                   <div className="flex items-center">
                     <MdFilterNone className="mr-3" />  
                     <h1>Course</h1>
                   </div>
               </li>
               </Link>
               <Link href='/settings'>
               <li className={router.pathname == '/settings' ? "activeSideBar cursor-pointer px-5 py-3" : 'sideNavLink cursor-pointer px-5 py-3'}>
                   <div className="flex items-center">
                     <FcSettings className="mr-3" />  
                     <h1>Settings</h1>
                   </div>
               </li>
               </Link>
               <Link href='/wallet'>
               <li  className={router.pathname == '/wallet' ? "activeSideBar cursor-pointer px-5 py-3" : 'sideNavLink cursor-pointer px-5 py-3'}>
                   <div className="flex items-center">
                     <GiWallet className="mr-3" />  
                     <h1>Wallet</h1>
                   </div>
               </li>
               </Link>
           </div>
        </div>
        <div className="xl:hidden z-50 bottom-0 fixed bg-white w-full">
            {
                toggleActive ? (
                    <div className='bottom_nav__menu list-none'>
                        <div className="grid grid-cols-3 ">
                           <li className="cursor-pointer px-5 py-3">
                   <div className="flex flex-col items-center">
                     <MdDashboard className="mr-3" />  
                     <h1>Dashboard</h1>
                   </div>
               </li>
               <li className="cursor-pointer px-5 py-3">
                   <div className="flex flex-col items-center">
                     <MdLocalGroceryStore className="mr-3" />  
                     <h1>Market</h1>
                   </div>
               </li>
               <li className="cursor-pointer px-5 py-3">
                   <div className="flex flex-col items-center">
                     <MdFilterNone className="mr-3" />  
                     <h1>Course</h1>
                   </div>
               </li>
               <li className="cursor-pointer px-5 py-3">
                   <div className="flex flex-col items-center">
                     <FcSettings className="mr-3" />  
                     <h1>Settings</h1>
                   </div>
               </li>
               <li className="cursor-pointer px-5 py-3">
                   <div className="flex flex-col items-center">
                     <GiWallet className="mr-3" />  
                     <h1>Wallet</h1>
                   </div>
               </li>
                   
                        </div>
               </div>
                ): <div></div>
            }
            <div className="flex p-5 justify-between">
                <h1>Pertinence Wealth Creation</h1>
                <div className="cursor-pointer" onClick={toggleButton}>
                    {!toggleActive ? (<GiHamburgerMenu />)
                    : <FaTimes />
                    }
                </div>
            </div>
            
        </div>
        </>
    )
}


