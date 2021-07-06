import React from 'react'
import CoverImage from '../../atoms/coverImage'
import Navbar from '../../atoms/navbar'
const Index = () => {
    console.log(process.env.customKey)
    return (
        <div>
            <CoverImage />
            <Navbar />
            {/* {} */}
        </div>
    )
}

export default Index
