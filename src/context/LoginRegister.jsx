import { useState } from "react";
import { loginUser, RegisterUser } from "../services/services";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useFormik } from 'formik';
import Login from "../components/pages/Login";
import { context } from "./context";
import Register from "../components/pages/Register";

const LoginRegister = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [regsterPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const notifySuccess = () => toast.success("عملیات با موفقیت انجام شد !",{position: toast.POSITION.BOTTOM_RIGHT});
    const notifyError = () => toast.error("عملیات با شکست مواجه شد",{position: toast.POSITION.BOTTOM_RIGHT});
    const handleRegister = (values) => {
      // e.preventDefault();
      let user = {
        email: values.registerEmail,
        password: values.registerPassword,
        name : values.username,
      }
      RegisterUser(user).then(data => {notifySuccess();setRegisterUsername("");setRegisterEmail("");setRegisterPassword("")}).catch(err => {notifyError();setRegisterUsername("");setRegisterEmail("");setRegisterPassword("")})
    }

    const handleLogin = (e) => {
      e.preventDefault();
      let formdata = new FormData();
      formdata.append("grant_type", "password");
      formdata.append("username", loginUsername);
      formdata.append("password", loginPassword);
      loginUser(formdata).then(data => {notifySuccess();setLoginUsername("");setLoginPassword("")}).catch(err => {notifyError();setLoginUsername("");setLoginPassword("")});
    }


    // formik
    const validate = values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'پر کردن این فیلد الزامی میباشد';
      } else if (values.username.length < 4) {
        errors.username = 'نام کاربری باید بیش از 4 کاراکتر باشد';
      }
    
      if (!values.registerPassword) {
        errors.registerPassword = 'پر کردن این فیلد الزامی میباشد';
      } else if (values.registerPassword.length < 6) {
        errors.registerPassword = 'کلمه عبور باید بیشتر از 6 حرف باشد';
      }
    
      if (!values.registerEmail) {
        errors.registerEmail = 'پر کردن این فیلد الزامی میباشد';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.registerEmail)) {
        errors.registerEmail = 'ایمیل وارد شده نامعتبر میباشد';
      }
    
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        username: '',
        registerEmail: '',
        registerPassword: '',
      },
      validate,
      onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        handleRegister(values);
      },
    });

    return(<context.Provider value={{
      loginUsername,
      setLoginUsername,
      loginPassword,
      setLoginPassword,
      handleLogin,
      formik
    }}>
    <section className="login-reister">
        <div className="container">
            <div className="row d-flex">
            <ToastContainer />
                <div className="col-md-6">
                  <Login/>
                </div>
                <div className="col-md-6">
               <Register/>
                </div>
            </div>
        </div>
    </section>
    </context.Provider>)
}

export default LoginRegister;