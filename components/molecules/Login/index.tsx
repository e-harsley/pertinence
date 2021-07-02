import React from 'react'
import InputField from '../../atoms/InputField'
import * as icons  from 'react-icons/fa';
import CustomButton from '../../../components/atoms/Button'
import styles from '../../../styles/login.module.css'

const index = ({
    form: { onChange, form, onSubmit },
}) => {
    return (
        <div className="flex h-screen w-full items-center justify-center flex-col">
        <div>
            <h1 className={styles.formTitle}>Log in <br />to continue</h1>
        </div>
        <div className='w-3/5'>
           <div>
            <InputField
            value={form.username || ""}
            name="username"
            textType='text'
            iconRight='dd'
            labelName='username'
            style={['w-5/5'].join(' ')}
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
        <div className="flex justify-center">
        <CustomButton onClick={onSubmit} title="login" styleClass={['py-4', 'px-8', 'capitalize', 'rounded-sm'].join(' ')} base={true} />

        </div>
        </div>
        
        </div>
    )
}

export default index
