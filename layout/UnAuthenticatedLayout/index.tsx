import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Index = ({children}) => {
    const router = useRouter()
    var imageDisplay
    if(router.pathname === '/login'){
        imageDisplay = <Image src='/assets/login.png' objectFit='cover' className="custom-img" layout="fill" alt="Picture of the author" />
    }else if(router.pathname === '/register'){
         imageDisplay = <Image src='/assets/signup.png' objectFit='cover' className="custom-img" layout="fill" alt="Picture of the author" />
    }
    return (
        <div>
            <div className='grid grid-rows-3 h-screen xl:grid-cols-2'>
                <div className="col-span-1 xl:col-start-1  row-span-2">
                    {children}
                </div>
                <div className='w-full row-start-1 xl:col-start-2  unset-img xl:h-screen'>
                    {imageDisplay}
                </div>
            </div>
        </div>
    )
}

export default Index
            