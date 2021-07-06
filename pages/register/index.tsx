import { title } from 'process'
import React from 'react'
import RegisterUi from '../../components/molecules/register'
import useForm from '../../components/bond/RegisterBond'
const index = () => {
   
    return (
        <>
            <RegisterUi form ={useForm()} />
        </>
    )
}

index.layout = "UnAuthenticatedLayout"

export default index
