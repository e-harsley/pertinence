import React from 'react'
import InputField from '../../components/atoms/InputField'
import LoginUI from '../../components/molecules/Login'
import useForm from '../../components/bond/LoginBond'

function index() {
    return (
        <><LoginUI form={useForm()} /></>
    )
}

index.layout = "UnAuthenticatedLayout"

export default index
