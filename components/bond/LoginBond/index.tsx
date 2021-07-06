import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/Provider";
// import { useHistory } from "react-router-dom";
import { login } from '../../../context/actions/auth/login';




const Index = () => {
    const [form, setForm] = useState({email:'', password:''});
    let globalContext =useContext(GlobalContext)
    // const { authDispatch, authState: { auth: { loading, error, data }} }= globalContext
    
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        // setAuthDispatch(globalContext['authDispatch'])
    }, [])

    const onSubmit = (e) => {
        console.log(form)
        // login(form)(authDispatch);
    }
    
    return { form, onChange, onSubmit};
}

export default Index

// export default ({InputName}) => {
//   const [form, setForm] = useState({username, password}: InputName);

//   const history = useHistory();

// //   const {
// //     authDispatch,
// //     authState: {
// //       auth: { loading, error, data },
// //     },
// //   } = useContext(GlobalContext);


//   const onChange = (e, { name, value }) => {
//     setForm({ ...form, [name]: value });
//   };


//   const loginFormValid = !form.username?.length || !form.password?.length;

//   const onSubmit = () => {
//     // register(form)(authDispatch);

//     login(form)(authDispatch);
//   };

//   useEffect(() => {
//     if (data) {
//       if (data.user) {
//         history.push("/");
//       }
//     }
//   }, [data]);

//   return { form, onChange, loading, error, loginFormValid, onSubmit };
// };
