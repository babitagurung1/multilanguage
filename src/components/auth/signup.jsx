import { useTranslation } from "react-i18next"
import "./style.css"
import Languageswitcher from "../language/language"

const Signup=()=>{
const {t}=useTranslation()
    return(
        <>
        <section className="auth_outer">
        <div className="header_container">
            <Languageswitcher/>
        </div>
        <div className="signup_wrapper">
        <div className="signup_outer">
            <div className="form-group">
                <label htmlFor="">{t("travelContent.formdata.username")}</label>
                <input type="text" className="form-control mt-2"/>
            </div>
            <div className="form-group">
                <label htmlFor="">{t("travelContent.formdata.email")}</label>
                <input type="text" className="form-control mt-2"/>
            </div>
            <div className="form-group">
                <label>{t("travelContent.formdata.password")}</label>
                <input type="password" className="form-control mt-2"/>
            </div>
            <div className="sign_up_outer">
            <button className="create_btn signup_btn mt-4">{t('createAccount')}</button>

            </div>
        
        </div>

        </div>

        </section>
        </>
    )
}
export default Signup