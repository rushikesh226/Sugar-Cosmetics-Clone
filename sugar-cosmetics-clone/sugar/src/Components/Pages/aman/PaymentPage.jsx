import { useSelector } from "react-redux";
import "./PaymentPage.css";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useToast,
} from "@chakra-ui/react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { SiMastercard, SiAmericanexpress } from "react-icons/si";
import { SlPaypal } from "react-icons/sl";
import { RiVisaLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router";
import { PaymentPopover } from "../aman/Success_Popover";

export const PaymentPage = () => {
    const navigate = useNavigate();
    const [paymentState, setPaymentState] = useState(false);

    let cart_arr = useSelector((store) => store.cartReducer.cart);

    let [cardDetails, setCardDetails] = useState({
        card_num: "",
        card_name: "",
        card_cvv: "",
        card_exp: "",
    });

    let total = 0;
    total = cart_arr.reduce((acc, current) => {
        return acc + +current.price;
    }, 0);

    console.log(total, "thisis toal");

    const toast = useToast();
    let handleClick = () => {
        toast({
            title: "Your Order Number : 231 is placed",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        setTimeout(() => {
            navigate("/");
        }, 4000);
    };

    return (
        <div className="pp_wrapper">
            <div className="pp_left">
                <div className="pp_left_price_wrapper">
                    <h1 className="pp_left_price_txt">PRICE DETAILS</h1>
                    <div className="pp_left_price_deets_box">
                        <div className="pp_left_price_deets_box_row1">
                            <p>
                                Subtotal <i>(inclucive of taxes)</i>
                            </p>
                            <p>₹ {total}.00</p>
                        </div>
                        <div className="pp_left_price_deets_box_row2">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr></hr>
                        <div className="pp_left_price_deets_box_row3">
                            <h1>Total</h1>
                            <h1>₹ {total}.00</h1>
                        </div>
                    </div>
                </div>
                <div className="pp_left_cart_wrapper">
                    <h1 className="pp_left_cart_txt">CART SUMMARY</h1>
                    {/* <div className="pp_left_cart_summary_box">
                        {cart_products?.map((elem) => {
                            return (
                                <div style={{ backgroundColor: "teal" }}>
                                    <div>
                                        <img src={elem.image} />
                                        <div>
                                            <p>{elem.title}</p>
                                            <p>$ {elem.price}</p>
                                        </div>
                                        <p>Qty : {elem.quantity}</p>
                                    </div>
                                    <hr></hr>
                                </div>
                            );
                        })}
                    </div> */}

                    {/* ---------------------- */}
                    <div className="cart_main_left_cart_summary_box">
                        {cart_arr.map((elem, index) => {
                            return (
                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            margin: "10px auto",
                                            alignItems: "center",
                                            textAlign: "left",
                                            padding: "5px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                // backgroundColor: "red",
                                                marginRight: "15px",
                                            }}
                                        >
                                            <img
                                                src={elem.image}
                                                alt="image"
                                                style={{
                                                    width: "30px",
                                                }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                // backgroundColor: "red",
                                                marginRight: "15px",
                                                width: "500px",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: "small",
                                                    fontWeight: "400",
                                                }}
                                            >
                                                {elem.title}
                                            </p>
                                            <p
                                                style={{
                                                    fontSize: "medium",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                ₹ {elem.price}
                                            </p>
                                        </div>
                                        {/* 
                                        <div
                                            style={{
                                                // backgroundColor: "red",
                                                marginRight: "15px",
                                            }}
                                        >
                                            <MdDelete
                                                size={30}
                                                onClick={console.log("yes")}
                                            />
                                        </div> */}

                                        <div
                                            style={{
                                                // backgroundColor: "red",
                                                marginRight: "1px",
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                                width: "100px",
                                            }}
                                        >
                                            <button>Qty : 1</button>
                                        </div>
                                    </div>

                                    <hr></hr>
                                </div>
                            );
                        })}
                    </div>

                    {/* --------------------- */}
                </div>
            </div>
            <div className="pp_right">
                <div className="pp_right_payment_wrapper">
                    <h1 className="pp_right_payment_txt">PAYMENT METHOD</h1>
                    <div className="pp_right_payment_box">
                        <Tabs isFitted variant="enclosed">
                            <TabList>
                                <Tab
                                    _selected={{
                                        color: "black",
                                        bg: "teal",
                                    }}
                                >
                                    CARD
                                </Tab>
                                <Tab
                                    _selected={{
                                        color: "black",
                                        bg: "teal",
                                    }}
                                >
                                    UPI ID
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div className="pp_right_card_contents_wrapper">
                                        <div className="pp_right_card_contents_row1">
                                            <BsFillCreditCardFill size={30} />
                                            <span>Credit/ Debit Card</span>
                                        </div>
                                        <div className="pp_right_card_contents_row2">
                                            <span>We accept</span>
                                            <span>
                                                {" "}
                                                <RiVisaLine size={30} />
                                            </span>
                                            <span>
                                                {" "}
                                                <SiMastercard size={30} />
                                            </span>
                                            <span>
                                                {" "}
                                                <SiAmericanexpress size={20} />
                                            </span>
                                            <span>
                                                {" "}
                                                <SlPaypal size={20} />
                                            </span>
                                        </div>
                                        <div className="pp_right_card_contents_row3">
                                            <input
                                                placeholder="Card Number *"
                                                onChange={(e) => {
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        card_num:
                                                            e.target.value,
                                                    });
                                                }}
                                            ></input>
                                        </div>
                                        <div className="pp_right_card_contents_row4">
                                            <input
                                                placeholder="Card Holder Name *"
                                                onChange={(e) => {
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        card_name:
                                                            e.target.value,
                                                    });
                                                }}
                                            ></input>
                                        </div>
                                        <div className="pp_right_card_contents_row5">
                                            <input
                                                placeholder="Expiry (MM/YY) *"
                                                onChange={(e) => {
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        card_exp:
                                                            e.target.value,
                                                    });
                                                }}
                                            ></input>
                                            <input
                                                placeholder="CVV *"
                                                type="password"
                                                onChange={(e) => {
                                                    setCardDetails({
                                                        ...cardDetails,
                                                        card_cvv:
                                                            e.target.value,
                                                    });
                                                }}
                                            ></input>
                                        </div>
                                        <div className="pp_right_card_contents_row6">
                                            <button
                                                className="pp_right_card_contents_row6_btn"
                                                onClick={handleClick}
                                            >
                                                PROCEED TO PAY
                                            </button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div></div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};
