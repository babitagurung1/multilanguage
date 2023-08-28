
import logo from "../../images/logo.png"
import { useTranslation } from "react-i18next"
import "./home.css"
import Languageswitcher from "../language/language"
import japan_img from "../../images/japan.jpg"
import morocco_img from "../../images/morocco.jpg"
import greece_img from "../../images/greece.jpg"
import chicago_img from "../../images/chicago.jpg"
import Footer from "../footer/footer"
import { Link } from "react-router-dom"
import { useState } from "react"
// import japan_img from "../../images/japan.jpg"
const Home = () => {

    const { t } = useTranslation()
    const [show,setShow]=useState(false)
    const showHandler=()=>{
        setShow(!show)
    }
    return (
        <>
            <section className="outer_wrapper">
                <div className="Container">
                    <div className="header">
                        <div className="d-flex header_content">
                            <div>
                            <img src={logo} height="40px" width="40px" />
                            <h2>{t("travel")}</h2>
                            </div>
                            <i className="fa-solid fa-bars bar" onClick={showHandler}></i>
                        </div>
                        <div className={show ?"btn_wrapper":"btn_container"}>
                        <div className= "btn_outer">
                            <Link to="/signup"><button className="create_btn">{t("createAccount")}</button></Link>
                            <Link to="/login"><button className="login_btn create_btn ">{t("login")}</button></Link>
                            <Languageswitcher />
                        </div>
                        </div>
                        
                       
                    </div>
                    <div className="home_outer">
                        <div>
                            <h2>{t("yourtravel")}</h2>
                            <h4>{t("travelSolution")}</h4>
                            <div className="startbtn">
                                <button className="getstart_btn">{t("getstart")}</button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* travel========= */}
                <div className="travel_outer">
                    <div className="travel_inner_content">
                        <h2>{t("travelContent.travelplaces")}</h2>
                        <div className="travel_images pt-3" >
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <div className="card"  >
                                        <img  className="img" src={japan_img} class="card-img-top" alt="..."/>
                                            <div class="card-body travel_header ">
                                                <h5 className="card-title">{t("travelContent.japan")}</h5>
                                                <p className="card-text">{t("travelContent.aboutjapan")}</p>
                                                
                                            </div>
                                    </div>
                                                        
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div class="card" >
                                        <img  className="img" src={morocco_img} class="card-img-top" alt="..."/>
                                            <div className="card-body travel_header">
                                                <h5 className="card-title">{t("travelContent.morocco")}</h5>
                                                <p className="card-text">{t("travelContent.aboutmorocco")}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="card travel_container" >
                                        <img  className="img" src={greece_img} class="card-img-top" alt="..."/>
                                            <div class="card-body travel_header">
                                                <h5 className="card-title">{t("travelContent.greece")}</h5>
                                                <p className="card-text">{t("travelContent.aboutgreece")}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="card travel_container" >
                                        <img  className="img" src={chicago_img} class="card-img-top" alt="..."/>
                                            <div class="card-body travel_header">
                                                <h5 className="card-title">{t("travelContent.chicago")}</h5>
                                                <p className="card-text">{t("travelContent.aboutchicago")}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cruise */}
                <div className="cruise_outer">
                <div className="cruise_content">
                <div className="">
                <h2>{t("travelContent.cruise")}</h2>
                <h2>{t("travelContent.Adventure")}</h2>
                 <button className="getstart_btn">{t("getstart")}</button>
                 <p>{t("travelContent.cruiseContent")}</p>
                </div>

                </div>
                </div>
                {/* footer */}
                <Footer/>
            </section>
        </>
    )
}
export default Home