import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const index = () => {
    const router = useRouter()
    return (
        <div className="xl:z-50 xl:min-h-screen bg-white text-gray_text">
            <div className='flex justify-between xl:flex-col xl:justify-center px-4 xl:px-0 items-center  w-screen xl:w-auto'>
              <div className="list-none py-3 xl:px-5">
                <Link href='/settings'>
                    <span className={router.pathname == '/settings' ? "activeSideBar" : 'sideNavLink'}>Account</span></Link>
            </div>
            <div className="list-none py-3 xl:px-5">
            <Link href='/settings/security'>
                <span className={router.pathname == '/settings/security' ? "activeSideBar" : 'sideNavLink'}>
                    Security
                </span>
            </Link>
            </div>
            <div className="list-none py-3 xl:px-5">
            <Link href='/settings/display'>
            <span className={router.pathname == '/settings/display' ? "activeSideBar" : 'sideNavLink'}>
            Display
                </span>
            </Link>
            </div>
            <div className="list-none py-3 xl:px-5">
            <Link href='/settings/membership'>
            <span className={router.pathname == '/settings/membership' ? "activeSideBar" : 'sideNavLink'}>
            Membership
                </span>
                </Link>
            </div>  
            </div>
            
        </div>
    )
}

export default index
