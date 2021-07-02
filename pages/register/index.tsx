import { title } from 'process'
import React from 'react'
import Register from '../../components/molecules/register'

const index = () => {
   
    return (
        <>
            <Register />
        </>
    )
}

index.layout = "UnAuthenticatedLayout"

export default index
