import { title } from 'process'
import React from 'react'

interface ButtonRequirement {
    title: string,
    secondary?: false,
    primary?: false,
    neutral?:false,
    base?:boolean
    disabled?:false,
    loading?:false,
    onClick?:() => void,
    styleClass?: string,
    
}

const index = ({title,
    secondary,
    primary,
    neutral,
    disabled,
    base,
    loading,
    onClick,
    styleClass}:ButtonRequirement) => {
    
    var buttonColor= ''

    if(secondary){
        buttonColor   = 'bg-white text-green_secondary'
    }else if(primary){
         buttonColor = 'bg-green_primary text-white'
    }else if(neutral){
         buttonColor = 'bg-gray_default text-white'
    }else if(base){
         buttonColor = 'bg-black text-white'
    }

    return (
        <div>
            <button onClick={onClick} className={`${buttonColor} ${styleClass}`}>{title && title}</button>
        </div>
    )
}

export default index
