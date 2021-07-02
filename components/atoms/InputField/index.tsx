import * as myModule  from 'react-icons/fa';
import styles from '../../../styles/input.module.css'

interface InputRequirement {
    onChange: () => void
    textType: string;
    iconLeft?:any,
    iconRight?:string,
    style?:string,
    value:string,
    labelName?:string,
    error?:string,
    name?:string
}

const index = ({
    onChange,
    textType,
    iconLeft,
    iconRight,
    style,
    value,
    labelName,
    error,
    name,
}:InputRequirement) => {
    
    return (
        <div className={styles.inputContainer}>
           {labelName && <label className={`capitalize' ${styles.label}`}>{labelName}</label>}
            <div className={styles.inputWrapper}>
                {
                    iconLeft && (
                        <div className={styles.inputIconWrapper}>
                            <span className={styles.inputIcon}
                                > 
                                <myModule.FaLock />
                            </span>
                        </div>
                    )
                }
                
                <input
                    type={textType}
                    onChange={onChange}
                    value={value}
                    name={name}
                    className={`${styles.inputText} ${style}`}
                    placeholder="Password"
                />
                <div className={styles.inputIconWrapper}>
                    <span className={styles.inputIcon}>
                        {iconLeft}
                    </span>
                </div>
          </div>
        </div>
    )
}

export default index
