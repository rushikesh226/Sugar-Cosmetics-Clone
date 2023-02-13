import { useSelector } from "react-redux";
import "./PaymentPage.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { SiMastercard, SiAmericanexpress } from "react-icons/si";
import { SlPaypal } from "react-icons/sl";
import { RiVisaLine } from "react-icons/ri";

export const PaymentPage = () => {
    let cart_products = useSelector((store) => store.cartReducer.cart);

    let total = 0;
    // calulcate totoal of all products
    // total = cart_products.reduce((acc, current) => {
    //     return acc + current;
    // }, 0);

    console.log(cart_products, "cart products -------------------------------");
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
                            <p>{total}</p>
                        </div>
                        <div className="pp_left_price_deets_box_row2">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr></hr>
                        <div className="pp_left_price_deets_box_row3">
                            <h1>Total</h1>
                            <h1>{total}</h1>
                        </div>
                    </div>
                </div>
                <div className="pp_left_cart_wrapper">
                    <h1 className="pp_left_cart_txt">CART SUMMARY</h1>
                    <div className="pp_left_cart_summary_box">
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
                    </div>
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
                                            <input placeholder="Card Number *"></input>
                                        </div>
                                        <div className="pp_right_card_contents_row4">
                                            <input placeholder="Card Holder Name *"></input>
                                        </div>
                                        <div className="pp_right_card_contents_row5">
                                            <input placeholder="Expiry (MM/YY) *"></input>
                                            <input placeholder="CVV *"></input>
                                        </div>
                                        <div className="pp_right_card_contents_row6">
                                            <button className="pp_right_card_contents_row6_btn">
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
