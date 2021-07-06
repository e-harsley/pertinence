import React from 'react'
import { FaFreeCodeCamp } from "react-icons/fa";
import CustomButton from '../../components/atoms/Button'

const membership = () => {
    return (
        <div className="settingsBackground p-10 px-5 w-full xl:w-4/5">
            <div className='grid grid-cols-2 gap-5'>
                <div className="rounded-sm bg-white text-lg flex p-5 justify-center flex-col text-center">
                    <FaFreeCodeCamp className='text-4xl w-auto' />
                    <h1 className=" text-2xl text-black leading-6 mt-5">Free</h1>
                    <p className="text-gray_light text-sm px-10 pt-3 font-light">Some explanation about the features accessible on the free plan</p>
                    <div className="flex mt-5 justify-around">
                <CustomButton  title="View Plan" styleClass={['py-2.5 px-5 w-auto text-sm', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} primary={true} />
                </div>
                </div>
                <div className="rounded-sm bg-white text-lg flex p-5 justify-center flex-col text-center">
                    <FaFreeCodeCamp className='text-4xl w-auto' />
                    <h1 className=" text-2xl text-black leading-6 mt-5">Free</h1>
                    <p className="text-gray_light text-sm px-10 pt-3 font-light">Some explanation about the features accessible on the free plan</p>
                    <div className="flex mt-5 justify-around">
                <CustomButton  title="View Plan" styleClass={['py-2.5 px-5 w-auto text-sm', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} primary={true} />
                </div>
                </div>
                <div className="rounded-sm bg-white text-lg flex p-5 justify-center flex-col text-center">
                    <FaFreeCodeCamp className='text-4xl w-auto' />
                    <h1 className=" text-2xl text-black leading-6 mt-5">Free</h1>
                    <p className="text-gray_light text-sm px-10 pt-3 font-light">Some explanation about the features accessible on the free plan</p>
                    <div className="flex mt-5 justify-around">
                <CustomButton  title="View Plan" styleClass={['py-2.5 px-5 w-auto text-sm', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} primary={true} />
                </div>
                </div>
                <div className="rounded-sm bg-white text-lg flex p-5 justify-center flex-col text-center">
                    <FaFreeCodeCamp className='text-4xl w-auto' />
                    <h1 className=" text-2xl text-black leading-6 mt-5">Free</h1>
                    <p className="text-gray_light text-sm px-10 pt-3 font-light">Some explanation about the features accessible on the free plan</p>
                    <div className="flex mt-5 justify-around">
                <CustomButton  title="View Plan" styleClass={['py-2.5 px-5 w-auto text-sm', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} primary={true} />
                </div>
                </div>
                
            </div>
        </div>
    )
}


membership.layout = "SettingsLayout"

export default membership
