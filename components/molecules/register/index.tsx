import React from 'react'
import InputField from '../../atoms/InputField'
import CustomButton from '../../../components/atoms/Button'

const index = ({ form: { form, onChange, loading,onSubmit,passwordMatchCheck, registerFormValid, validateEmailInput  },}) => {
    
    return (
        <div className='w-full xl:w-4/5 pb-8 flex flex-col justify-center mt-7 xl:ml-14 h-full xl:h-screen'>
            <h1 className="w-4/5 mx-auto text-bold xl:font-light leading-6 text-lg xl:text-4xl mt-3">Register</h1>
            <div className="w-4/5 mx-auto">
                <div className="grid grid-cols-2 gap-2 xl:gap-5">
                <div className='my-0'>
           
            <InputField
            value={form.first_name || ""}
            name="first_name"
            textType='text'
            iconRight='dd'
            labelName='First name'
            style={['w-5/5'].join(' ')}
            onChange={onChange}
             />
        </div>
         <div>
            <InputField
            value={form.last_name || ""}
            name="last_name"
            textType='text'
            iconRight='dd'
            style={['w-full', ].join(' ')}
            labelName="Last name"
            onChange={onChange}
            />
        </div>
                </div>
                <div>
            <InputField
            value={form.email || ""}
            name="email"
            textType='email'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Email'
            onChange={onChange}
            error={validateEmailInput}
            />
        </div>
        <div>
            <InputField
            value={form.phone || ""}
            name="phone"
            textType='number'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Phone number'
            onChange={onChange}
            />
        </div>
        <div>
            <InputField
            value={form.referrer || ""}
            name="referrer"
            textType='text'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Referral code'
            onChange={onChange}
            />
        </div>
        <div>
            <InputField
            value={form.password || ""}
            name="password"
            textType='password'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Password'
            onChange={onChange}
            />
        </div>
        <div>
            <InputField
            value={form.confirm_password || ""}
            name="confirm_password"
            textType='password'
            iconRight='dd'
            style={['w-5/5', ].join(' ')}
            labelName='Confirm Password'
            onChange={onChange}
            error={passwordMatchCheck}
            />
        </div>
        <CustomButton loading={loading} onClick={onSubmit} disabled={registerFormValid || loading}  title="Register" styleClass={['py-2 px-8 mt-3 w-full sm:w-auto', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} base={true} />

            </div>
        </div>
       
    )
}

export default index
