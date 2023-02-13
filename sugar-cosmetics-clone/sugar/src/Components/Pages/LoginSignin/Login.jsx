import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate} from "react-router-dom";
import LoginOtp from "./LoginOtp";
import { color } from "@chakra-ui/react";


const Log = () => {
    const [username,setUserName] = useState("")
    const navigator = useNavigate()
    const handleSubmit = ()=>{
            if(username.length!==10) 
            alert("Enter Valid Mobile No")  
            else navigator('/otp') 
    }

    const rightSideLayout = () => {
        return <>
              <div className={styles.img_right}>
            <div className={styles.hi_image}>
                <img src="https://media.sugarcosmetics.com/upload/Hi!.png" />
            </div>
            <div>
                <h3 className={styles.text1}>Login/Sign Up Using Phone</h3>
                <br/>
            </div>
            <div className={styles.input_box}>
                <div className={styles.input_num}>+91</div>
                <div><input className={styles.input_item} type="number" onChange={(e)=>setUserName(e.target.value)}/></div>
            </div>
            <div className={styles.text}>

                Registering for this site allows you to
                access your order status and history. Just fill in the above
                fields, and we'll get a new account set up for you in no time. We
                will only ask you for information necessary to make the purchase
                process faster and easier.

            </div>
            <div>
        <button className={styles.otp_btn} onClick={
            () => handleSubmit()}> SEND ME OTP</button>
            </div>
            <hr className={styles.dotted_line}/>
            <div className={styles.belowOtp}>
                <div>
                <input type="checkbox" checked/>
                    Get important updates on Whatsapp <span className={styles.pink}>Terms & Conditions</span>
                </div>
            </div>
            {/* LAst */}
            <hr className={styles.dotted_line}/>
            <div className={styles.belowOtp}>
                <div>
                <input type="checkbox" checked/>
                By Signing up or logging in, you agree to our <span className={styles.pink}>Terms & Conditions</span>
                </div>
            </div>
            {/* Copyright */}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={styles.copyright}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</div>
        </div>
        </>
    }


    return  <LoginOtp rightSideLayout={rightSideLayout} />

};

export default Log;