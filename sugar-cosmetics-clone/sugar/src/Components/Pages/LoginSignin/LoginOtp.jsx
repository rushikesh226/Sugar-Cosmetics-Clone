import React from 'react'
import styles from"./Login.module.css";

export default function LoginOtp({rightSideLayout}) {
  return (
    <>
      <div className={styles.offerHead}>FREE Matte Attack Transferproof Lipstick on a spend of Rs.999</div>
      <div className={styles.background}> </div>
        <div className={styles.container}>
         <div className={styles.img_left}>
            <img
                className={styles.image}
                src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
                alt='img'
            />
            </div>

{rightSideLayout()}
</div>
    </>
  )
}
