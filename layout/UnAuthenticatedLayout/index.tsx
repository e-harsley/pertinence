import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const index = ({children}) => {
    const router = useRouter()
    var imageDisplay
    if(router.pathname === '/login'){
        imageDisplay = <Image src='/assets/login.png' objectFit='cover' className="custom-img" layout="fill" alt="Picture of the author" />
    }else if(router.pathname === '/register'){
         imageDisplay = <Image src='/assets/signup.png' objectFit='cover' className="custom-img" layout="fill" alt="Picture of the author" />
    }
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className="col-span-1">
                    {children}
                </div>
                <div className='w-full unset-img h-screen'>
                    {imageDisplay}
                </div>
            </div>
        </div>
    )
}

export default index
            