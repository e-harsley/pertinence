import Head from "next/head";
import React from 'react'
import Link from "next/link";
import Header from '../../components/molecules/header'
import Sidebar from '../../components/atoms/sidebar'
import { motion } from 'framer-motion';

const Index = ({children}) => {
    return (
        <div>
            <Header />
            <div className='grid grid-col-1 xl:grid-cols-4 gap-5 mt-10 pb-10'>
                <div className="col-span-1 xl:z-50">
                   <Sidebar /> 
                </div>
                <div className='col-span-1 xl:col-start-2 xl:col-span-4'>
                    
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Index


 