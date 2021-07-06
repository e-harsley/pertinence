import Head from "next/head";
import React from 'react'
import Link from "next/link";
import Header from '../../components/molecules/header'

const Index = ({children}) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Index

