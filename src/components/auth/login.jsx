import { useTranslation } from "react-i18next"
import Languageswitcher from "../language/language"

const Login=()=>{
const {t} =useTranslation()
    return(
        <>
        <section className="auth_outer">
        <div className="header_container">
            <Languageswitcher/>
        </div>
        <div className="signup_wrapper">
        <div className="signup_outer">
        <div className="form-group">
        <label>{t("travelContent.formdata.username")}</label>
        <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
        <label>{t("travelContent.formdata.password")}</label>
        <input type="password" className="form-control"/>
        </div>
        <div className="sign_up_outer mt-3">
        <button className="signup_btn create_btn ">Login</button>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
export default Login