import { useState } from "react";
import { loginUser, RegisterUser } from "../../services/services";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useFormik } from 'formik';

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
      RegisterUser(user).then(data => {notifySuccess();setRegisterUsername("");setRegisterEmail("");setRegisterPassword("")}).catch(err => {notifyError();setRegisterUsername("");setRegisterEmail("");setRegisterPassword("")});
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

    return(<>
    <section className="login-reister">
        <div className="container">
            <div className="row d-flex">
            <ToastContainer />
                <div className="col-md-6">
                  <form className="mx-4">
                    <h2 className="mb-4 mb-md-5">ورود</h2>
                    <div className="mb-4">
                    <label htmlFor="login-username" className="form-label">نام کاربری</label>
                    <input type="text" value={loginUsername} onChange={e => setLoginUsername(e.target.value)} className="form-control" id="login-username" placeholder="mohammad01"/>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="login-password" className="form-label">کلمه عبور</label>
                     <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className="form-control" id="login-password"/>
                    </div>
                    <button type="submit" onClick={e => handleLogin(e)} className="btn btn-lg">ورود</button>
                  </form>
                </div>
                <div className="col-md-6">
                <form onSubmit={formik.handleSubmit} className="mx-4 register">
                    <h2 className="mb-4 mb-md-5">ثبت نام</h2>
                    <div className="mb-4">
                    <label htmlFor="username" className="form-label">نام کاربری</label>
                    {/* <input type="text" name="username" value={registerUsername} onChange={e => setRegisterUsername(e.target.value)} className="form-control" id="username" placeholder="mohammad01"/> */}
                    <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} className="form-control" id="username" placeholder="mohammad01"/>
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                    </div>
                    <div className="mb-4">
                    <label htmlFor="register-email" className="form-label">ایمیل</label>
                    {/* <input type="text" name="registerEmail" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} className="form-control" id="register-email" placeholder="name@example.com"/> */}
                    <input type="text" name="registerEmail" onChange={formik.handleChange} value={formik.values.registerEmail} className="form-control" id="register-email" placeholder="name@example.com"/>
                    {formik.errors.registerEmail ? <div>{formik.errors.registerEmail}</div> : null}

                    </div>
                    <div className="mb-4">
                     <label htmlFor="registerPassword" className="form-label">کلمه عبور</label>
                     {/* <input type="password" name="registerPassword" value={regsterPassword} onChange={e => setRegisterPassword(e.target.value)} className="form-control" id="registerPassword"/> */}
                     <input type="password" name="registerPassword" onChange={formik.handleChange} value={formik.values.registerPassword} className="form-control" id="registerPassword"/>
                     {formik.errors.registerPassword ? <div>{formik.errors.registerPassword}</div> : null}

                    </div>
                    {/* <button type="submit" onClick={e => handleRegister(e)} className="btn btn-lg">عضویت</button> */}
                    <button type="submit"  className="btn btn-lg">عضویت</button>
                  </form>
                </div>
            </div>
        </div>
    </section>
    </>)
}

export default LoginRegister;