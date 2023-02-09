import React, { useEffect, useState } from "react";
import styles from "./Otp.module.css";
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import Timer from "./Timer";


const  Otp = () => {
    const [username,setUserName] = useState("")
    const [validate,setValidate] = useState(false)
    const handleSubmit = ()=>{
        if(!validate){
            alert("OTP is 1234")
        }
        else{
            alert("Already logged in")
        }

    }

const handleReset = () =>{

 
}
if(username.length ===4 && !validate){
if(username==="1234"){
    setValidate(true)
    alert("Login Sucessfull!");
}

 else
 alert("Wrong otp");

}
// console.log(username)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_left}>
          <img
            className={styles.image}
            src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          />
        </div>
        <div className={styles.img_right}>
          <div className={styles.hi_image}>
            <img src="https://media.sugarcosmetics.com/upload/Hi!.png" />
          </div>
          <div>
            <h3>Login/Sign Up Using Phone</h3>
          </div>
          <div className={styles.input_box}>
          
            <div><input className={styles.input_item} type="text" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter OTP"/></div>
            
          </div>
          <div className={styles.text}>
          <p>Didn’t get the OTP?<span className={styles.resend} onClick={handleReset}> Resend now <Timer /></span></p> 
            Registering for this site allows you to
            access your order status and history. Just fill in the above
            fields, and we'll get a new account set up for you in no time. We
            will only ask you for information necessary to make the purchase
            process faster and easier.

          </div>
          <div>
    <button className={styles.otp_btn} onClick={handleSubmit}> {validate ? "Validated" : "SEND ME OTP"} </button>
        </div>
            <hr className={styles.dotted_line}/>
      </div>
    </div>
    </>
  );
};

export default Otp;