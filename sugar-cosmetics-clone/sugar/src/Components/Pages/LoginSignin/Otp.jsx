import React, { useEffect, useState } from "react";
import styles from "./Otp.module.css";
import Timer from "./Timer";
import LoginOtp from "./LoginOtp";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  Input,
  FormLabel,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [username, setUserName] = useState("");
  const [validate, setValidate] = useState(false);
  const navigator = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleName(e) {
    setUserName(e.target.value);
  }
  const handleSubmit = () => {
    if(username === '1234'){
      setValidate(true)
      // alert("Your are login Success!");
      onOpen()
    } else {
      alert("Already logged in");
    }
  };

  const handleReset = () => {};
  

  function BasicUsage() {
    return (
      <>
        {validate ? (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>Please fill this form below</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input
                    placeholder="First name"
                    // value={username}
                    onChange={handleName}
                  />
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="example@gmail.com" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <a href="/">
                <Button mr={3} bg="black" color="white" onClick={() => {
                  navigator('/')
                }}>
                  Sign Me Up
                </Button>
                </a>

                <Button mr={3} bg="white" color="black" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ) : (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Wrong OTP!!!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Please enter right OTP</Text>
              </ModalBody>

              <ModalFooter>
                <Button mr={3} bg="black" color="white" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </>
    );
  }

  const rightSideLayout = () => {
    return (
      <div className={styles.img_right}>
        <div className={styles.hi_image}>
          <img alt="#" src="https://media.sugarcosmetics.com/upload/Hi!.png" />
        </div>
        <div>
          <h3>Login/Sign Up Using Phone</h3>
        </div>
        <div className={styles.input_box}>
          <div>
            <input
              className={styles.input_item}
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter OTP"
            />
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Didn’t get the OTP?
            <span className={styles.resend} onClick={() => handleReset()}>
              Resend now <Timer />
            </span>
          </p>
          <br/>
          Registering for this site allows you to access your order status and
          history. Just fill in the above fields, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </div>
        <div>
        <br/>
        <br/>

          <button className={styles.otp_btn} onClick={ () =>  handleSubmit()}>
            { "Validate"}
          </button>
        </div>
        <hr className={styles.dotted_line} />
      </div>
    );
  };

  return (
    <>
      <LoginOtp rightSideLayout={rightSideLayout} />

      <BasicUsage />
    </>
  );
};

export default Otp;