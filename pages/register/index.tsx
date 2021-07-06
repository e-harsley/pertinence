import { title } from 'process'
import React from 'react'
import RegisterUi from '../../components/molecules/register'
import UseForm from '../../components/bond/RegisterBond'
const Index = () => {
   
    return (
        <>
            <RegisterUi form ={UseForm()} />
        </>
    )
}

Index.layout = "UnAuthenticatedLayout"

export default Index
