import React from 'react'
import InputField from '../../atoms/InputField'
import CustomButton from '../../../components/atoms/Button'

const index = () => {
    return (
        <div className='w-4/5 flex flex-col justify-center ml-14 h-screen'>
            <h1 className=" font-light leading-6 text-4xl">Register</h1>
            <div className="w-full">
                <div className="grid grid-cols-2 gap-5">
                <div className=''>
           
            <InputField
            value={""}
            name="username"
            textType='text'
            iconRight='dd'
            labelName='username'
            style={['w-5/5'].join(' ')}
            onChange={() => {console.log("hek");
        }}
             />
        </div>
         <div>
            <InputField
            value={ ""}
            name="password"
            textType='password'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Password'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
                </div>
                <div>
            <InputField
            value={ ""}
            name="password"
            textType='password'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Password'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
        <div>
            <InputField
            value={ ""}
            name="password"
            textType='password'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Password'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
        <div>
            <InputField
            value={ ""}
            name="password"
            textType='password'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Password'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
        <CustomButton  title="login" styleClass={['py-4', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} base={true} />

            </div>
        </div>
       
    )
}

export default index
