import React from 'react'
import LoginUI from '../../components/molecules/Login'
import UseForm from '../../components/bond/LoginBond'

function Index() {
    return (
        <><LoginUI form={UseForm()} /></>
    )
}

Index.layout = "UnAuthenticatedLayout"

export default Index
