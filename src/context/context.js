import { createContext } from "react";


export const context = createContext({
    registerUsername:"",
    setRegisterUsername: () => {},
    registerEmail: "",
    setRegisterEmail: () => {},
    regsterPassword:"",
    setRegisterPassword: () => {},
    loginUsername:"",
    setLoginUsername: () => {},
    loginPassword:"",
    setLoginPassword:() => {},
    notifySuccess: () => {},
    notifyError: () => {},
    handleLogin: () => {},
    handleRegister: () => {},
    validate: () => {},
    formik:{},

})