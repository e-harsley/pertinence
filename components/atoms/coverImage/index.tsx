import React from 'react'
import Image from 'next/image'
import CustomButton from '../Button'
const index = () => {
    return (
        <div>
            <div className="aspect-w-1 aspect-h-1 relative unset-cover-img">
                <Image src='/assets/coverImage.png' layout="fill" objectFit="contain" className='object-fill' />
                <div className='absolute right-4 rounded xl:right-20 bottom-5 z-10 bg-current coverButton'>
                <CustomButton  title="Add Cover Photo" styleClass={['py-2 px-8 w-full sm:w-auto rounded-full', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} base={true} />
                    {/* <h1>Hello world</h1> */}
                </div>
            </div>
        </div>
    )
}

export default index
