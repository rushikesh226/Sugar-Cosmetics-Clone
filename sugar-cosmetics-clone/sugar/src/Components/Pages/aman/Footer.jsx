import "./Footer.css";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { RiTumblrFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export function Footer() {
    const iconStyling = {
        borderRadius: "10px",
        backgroundColor: "rgb(150,150,150)",
        color: "black",
        width: "25px",
        height: "25px",
        padding: "4px",
    };
    return (
        <div className="footer_wrapper">
            <div className="footer_row1_image">
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a0171386484043.5d9b430750fd5.jpg"
                    alt="sugar cosmetics logo"
                />
            </div>
            <div className="footer_row2_icons_wrapper">
                <div className="footer_row2_icons">
                    <FaFacebookF style={iconStyling} />
                    <AiOutlineTwitter style={iconStyling} />
                    <RiTumblrFill style={iconStyling} />
                    <BsInstagram style={iconStyling} />
                    <SiGmail style={iconStyling} />
                    <BsPinterest style={iconStyling} />
                    <AiFillYoutube style={iconStyling} />
                </div>
            </div>
            <hr></hr>
            <div className="footer_row3_conditions_wrapper">
                <div className="footer_row3_conditions">
                    <div>Store</div>
                    <div>Terms & Conditions</div>
                    <div>FAQs</div>
                    <div>Returns</div>
                    <div>About us</div>
                </div>
            </div>
            <hr></hr>
            <div className="fotter_row4_getintouch_wrapper">
                <h1 className="fotter_row4_getintouch_title">GET IN TOUCH</h1>
                <div className="fotter_row4_getintouch_divs">
                    <div className="fotter_row4_getintouch_textbox">
                        <h3>Call us at</h3>
                        <p>
                            1800-209-9933 <br></br> Monday to Friday : 9 AM to 7
                            PM
                        </p>
                    </div>
                    <div className="fotter_row4_getintouch_textbox">
                        <h3>support</h3>
                        <p>hello@sugarcosmetics.com</p>
                    </div>
                    <div className="fotter_row4_getintouch_textbox">
                        <h3>careers</h3>
                        <p>We're hiring!</p>
                    </div>
                    <div className="fotter_row4_getintouch_textbox">
                        <h3>press & media</h3>
                        <p>pr@sugarcosmetics.com</p>
                    </div>
                    <div className="fotter_row4_getintouch_textbox">
                        <h3>influencer collab</h3>
                        <p>Join Us</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer_row5_btns_wrapper">
                <div className="footer_row5_btns">
                    <div className="footer_row5_btns_txt">
                        <h1>GET THE SUGAR APP TODAY</h1>
                        <p>Tap into a better shopping experience.</p>
                    </div>
                    <button className="footer_row5_btns_btn1">
                        <FaGooglePlay style={{ width: "50px" }} />
                        <div className="footer_row5_btns_btn1_txt">
                            <span>Get in on</span>
                            <br></br>
                            <span>Google Play</span>
                        </div>
                    </button>
                    <button className="footer_row5_btns_btn2">
                        <BsApple style={{ width: "50px" }} />
                        <div className="footer_row5_btns_btn2_txt">
                            <span>Download on the</span>
                            <br></br>
                            <span>App store</span>
                        </div>
                    </button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
