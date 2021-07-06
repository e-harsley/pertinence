import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from "../../../context/Provider";
import { register } from "../../../context/actions/auth/register";
import { ToastProvider, useToasts } from 'react-toast-notifications';


const index = () => {
    const { addToast } = useToasts();
    
    const [form, setForm] = useState({first_name: '', last_name:'',email:'', password:'', confirm_password:'', phone:'', referrer:''})
    const { authDispatch, authState: { auth: { loading, error, data }} } = useContext(GlobalContext);
    const [passwordMatchCheck, setpasswordMatchCheck] = useState('')
    const [validateEmailInput, setvalidateEmailInput] = useState('')
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if(form.password !== form.confirm_password){
            setpasswordMatchCheck("Passwords do not match")
        }else{
            setpasswordMatchCheck('')
        }
      }, [form]);
      useEffect(() => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(form.email){
           if (re.test(form.email) ) {
            setvalidateEmailInput('')
        }
        else {
            setvalidateEmailInput('Invalid Email')
        } 
        }
        
      }, [form]);

      useEffect(() => {
        if (data) {
          console.log(data);
          addToast('Saved Successfully', { appearance: 'success' });
        }
      }, [data]);

      useEffect(() => {
        if (error) {
          console.log(data);
          addToast('Saved Successfully', { appearance: 'error' });
        }
      }, [data]);
    

    const onSubmit = (e) => {
        register(form)(authDispatch);
    }

    const registerFormValid =
    !form.first_name?.length ||
    !form.last_name?.length ||
    !form.email?.length ||
    !form.password?.length ||
    !form.phone?.length ||
    !form.confirm_password?.length || 
    form.password !== form.confirm_password

    return { form, onChange, loading,onSubmit, registerFormValid,  validateEmailInput,  passwordMatchCheck};
}

export default index
