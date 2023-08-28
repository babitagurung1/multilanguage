import { useTranslation } from "react-i18next"
import logo from "../../images/logo.png"
import './footer.css'
const Footer=()=>{
const {t} =useTranslation()
    return(
        <>
        <div className="footer_outer">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="d-flex">
                            <img src={logo} height="40px" width="40px" />
                            <h2 className="footer_title">{t("travel")}</h2>
                        </div>
                    <h2 className="footer_title" style={{fontSize:"22px"}}>{t("travelContent.footer.travelwithus")}</h2>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <ul>
                        <li>{t("travelContent.footer.learn")}</li>
                        <li>{t("travelContent.footer.aboutus")}</li>
                        <li>{t("travelContent.footer.privacyPolicy")}</li>
                        <li>{t("travelContent.footer.termsCondtion")}</li>
                        <li>{t("travelContent.footer.blog")}</li>
                        <li>{t("travelContent.footer.faq")}</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <ul>
                        <li>{t("travelContent.footer.connect")}</li>
                        <li><i class="fa-brands fa-facebook"></i>{t("travelContent.footer.facebook")}</li>
                        <li><i class="fa-brands fa-instagram"></i>{t("travelContent.footer.instagram")}</li>
                        <li><i class="fa-brands fa-twitter"></i>{t("travelContent.footer.twitter")}</li>
                        <li><i class="fa-brands fa-linkedin"></i>{t("travelContent.footer.linkedin")}</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <ul>
                        <li>{t("travelContent.footer.contact")}</li>
                        <li>{t("travelContent.footer.newyork")}</li>
                        <li>{t("travelContent.footer.street")}</li>
                        <li>{t("travelContent.footer.phoneNo")}</li>
                       
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer