const LoginRegister = () => {
    return(<>
    <section className="login-reister">
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-6">
                  <form action="" className="mx-4">
                    <h2 className="mb-5">ورود</h2>
                    <div className="mb-4">
                    <label for="login-email" className="form-label">ایمیل</label>
                    <input type="text" className="form-control" id="login-email" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-4">
                    <label for="login-password" className="form-label">کلمه عبور</label>
                     <input type="password" className="form-control" id="login-password"/>
                    </div>
                    <button type="submit" className="btn btn-lg">ورود</button>
                  </form>
                </div>
                <div className="col-md-6">
                <form action="" className="mx-4">
                    <h2 className="mb-5">ثبت نام</h2>
                    <div className="mb-4">
                    <label for="username" className="form-label">نام کاربری</label>
                    <input type="text" className="form-control" id="username" placeholder="mohammad01"/>
                    </div>
                    <div className="mb-4">
                    <label for="register-email" className="form-label">ایمیل</label>
                    <input type="text" className="form-control" id="register-email" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-4">
                     <label for="register-password" className="form-label">کلمه عبور</label>
                     <input type="password" className="form-control" id="register-password"/>
                    </div>
                    <button type="submit" className="btn btn-lg">عضویت</button>
                  </form>
                </div>
            </div>
        </div>
    </section>
    </>)
}

export default LoginRegister;