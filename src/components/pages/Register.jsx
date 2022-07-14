import { useContext } from "react";
import { context } from "../../context/context";


const Register = () => {
    const {
        formik
    } = useContext(context);
    return(<>
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
    </>)
}

export default Register;