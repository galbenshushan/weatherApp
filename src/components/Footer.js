import { useSelector } from "react-redux"
import React from "react";
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.css"

const Footer = () => {
    const themeSlice = useSelector(state => state.theme)

    const lineStyles = { color: themeSlice === 'dark' ? null : 'rgb(64, 168, 216)' }

    return (
        <>
            <div className="footer-design" style={{ backgroundColor: themeSlice === 'dark' ? null : '#9fdefc' }} >
                <div className="footer-copyright text-center">
                    <div className="after-footer-icons">
                        <a style={lineStyles} href="https://www.facebook.com/galbenshushan1996"><BsFacebook className="footer-icon" /></a>
                        <a style={lineStyles} href="https://www.instagram.com/_gal_ben_shushan/"><BsInstagram className="footer-icon" /></a>
                        <a style={lineStyles} href="https://www.linkedin.com/in/gal-ben-shushan-6253b8212/"><BsLinkedin className="footer-icon" /></a>
                        <a style={lineStyles} href="mailto:galbenshushan5@gmail.com"> <BsGoogle className="footer-icon" /></a>
                    </div>
                    <a className="after-footer-copyright" href="https://galbenshushan.herokuapp.com/" style={{ color: "white" }}>
                        <h2 style={lineStyles}>
                            &copy; {new Date().getFullYear()} Copyright: Gal Ben-Shushan.
                        </h2>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Footer;

