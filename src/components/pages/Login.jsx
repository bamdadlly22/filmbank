import { useContext } from "react";
import { context } from "../../context/context";


const Login = () => {
    const {
        loginUsername,
        setLoginUsername,
        loginPassword,
        setLoginPassword,
        handleLogin
    } = useContext(context);
    return(<>
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
                    <button type="submit" onClick={(loginUsername !== "" && loginPassword !== "") ? e => handleLogin(e) : e => e.preventDefault(e) } className="btn btn-lg">ورود</button>
        </form>
    </>)
}

export default Login;