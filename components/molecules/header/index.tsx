import React from 'react'
import CoverImage from '../../atoms/coverImage'
import Navbar from '../../atoms/navbar'
const index = () => {
    console.log(process.env.customKey)
    return (
        <div>
            <CoverImage />
            <Navbar />
            {/* {} */}
        </div>
    )
}

export default index
