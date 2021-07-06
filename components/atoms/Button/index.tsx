import { title } from 'process'
import React from 'react'

interface ButtonRequirement {
    title: string,
    secondary?: boolean,
    primary?: boolean,
    neutral?:boolean,
    base?:boolean
    disabled?:boolean,
    loading?:boolean,
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
    
    var buttonColor, buttonText

    if(secondary){
        buttonColor   = 'bg-white text-green_secondary'
    }else if(primary){
         buttonColor = 'bg-green_primary text-white'
    }else if(neutral){
         buttonColor = 'bg-gray_default text-white'
    }else if(base){
         buttonColor = 'bg-black text-white'
    }
    var titleButton = title
    if(!loading){
        buttonText = titleButton
    }
    else{
        buttonText = 
<span className='flex flex-wrap w-full space-x-4 justify-center items-center'>
                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
               Processing
                     </span>
    }
    
    return (
        <div>
            <button disabled={disabled} onClick={onClick} className={`${buttonColor} ${styleClass} disabled:opacity-50`}>
            {buttonText}
            </button>
        </div>
    )
}

export default index
