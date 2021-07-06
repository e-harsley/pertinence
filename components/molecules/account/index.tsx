import React from 'react'
import InputField from '../../atoms/InputField'
import CustomButton from '../../../components/atoms/Button'

const Index = () => {
    return (
        <div className="settingsBackground pb-10 px-5 w-full xl:w-3/5">
            <div className="grid grid-cols-2 gap-2 xl:gap-5">
                <div className='my-0'>
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
            style={['w-full', ].join(' ')}
            labelName='Password'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
                </div>
                <div className="grid grid-cols-2 gap-2 xl:gap-5">
                <div className='my-0'>
            <InputField
            value={""}
            name="username"
            textType='text'
            iconRight='dd'
            labelName='Phone Number'
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
            style={['w-full', ].join(' ')}
            labelName='Email'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
                </div>
                <div className="grid grid-cols-2 gap-2 xl:gap-5">
                <div className='my-0'>
            <InputField
            value={""}
            name="username"
            textType='text'
            iconRight='dd'
            labelName='Occupation'
            style={['w-5/5'].join(' ')}
            onChange={() => {console.log("hek");
        }}
             />
        </div>
         <div>
            <InputField
            value={ ""}
            name="select"
            textType='password'
            iconRight='dd'
            style={['w-full', ].join(' ')}
            labelName='Marital Status'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
                </div>
                <div className="grid grid-cols-2 gap-2 xl:gap-5">
                <div className='my-0'>
            <InputField
            value={""}
            name="username"
            textType='text'
            iconRight='dd'
            labelName='Address'
            style={['w-5/5'].join(' ')}
            onChange={() => {console.log("hek");
        }}
             />
        </div>
         <div>
            <InputField
            value={ ""}
            name="select"
            textType='password'
            iconRight='dd'
            style={['w-full', ].join(' ')}
            labelName='Gender'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
                </div>
                <div className="grid grid-cols-2 gap-2 xl:gap-5">
                <div className='my-0'>
            <InputField
            value={""}
            name="username"
            textType='text'
            iconRight='dd'
            labelName='Address'
            style={['w-5/5'].join(' ')}
            onChange={() => {console.log("hek");
        }}
             />
        </div>
         <div>
            <InputField
            value={ ""}
            name="select"
            textType='password'
            iconRight='dd'
            style={['w-full', ].join(' ')}
            labelName='Gender'
            onChange={() => {console.log("hek");
            }}
            />
        </div>
                </div>
                <div className="flex mt-5 justify-around">
                <CustomButton  title="Save Changes" styleClass={['py-2 px-8 w-full sm:w-auto', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} primary={true} />
                </div>
                
            </div>
    )
}

export default Index
