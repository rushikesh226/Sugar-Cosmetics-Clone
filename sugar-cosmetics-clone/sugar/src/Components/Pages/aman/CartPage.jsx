import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
import "./CartPage.css";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Box, Flex } from "@chakra-ui/react";
import { MdOutlineLocalOffer } from "react-icons/md";

export const CartPage = () => {
    // use selector is here
    const cart_arr = useSelector((store) => store.cartReducer.cart);
    console.log(cart_arr, "cart_arr");
    // selector ends here

    return (
        <div>
            {/* this will be navbar */}
            <div style={{ backgroundColor: "black", height: "130px" }}></div>

            {/* navbar ends here mate */}

            <div className="cart_wrapper">
                <div className="cart_breadcrumb">
                    <Breadcrumb separator=">">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div className="cart_main">
                    <div className="cart_main_left">
                        <div className="cart_main_left_bonus_wrapper">
                            <details>
                                <summary
                                    style={{
                                        textAlign: "left",
                                        fontSize: "large",
                                        fontWeight: "500",
                                    }}
                                >
                                    BONUS OFFERS
                                </summary>
                                <div className="cart_main_left_bonus_content">
                                    <div className="cart_main_left_bonus_content_individual">
                                        <img src="" alt="pic1" />
                                        <div>
                                            <p>
                                                Matte As Hell Crayon Mini
                                                Lipstick - 12 Baby Houseman
                                            </p>
                                            <p>
                                                <span>₹599</span> ₹199
                                            </p>
                                        </div>
                                        <button>ADD TO CART</button>
                                    </div>
                                    <hr></hr>
                                    <div className="cart_main_left_bonus_content_individual">
                                        <img src="" alt="pic1" />
                                        <div>
                                            <p>
                                                Matte As Hell Crayon Mini
                                                Lipstick - 12 Baby Houseman
                                            </p>
                                            <p>
                                                <span>₹599</span> ₹199
                                            </p>
                                        </div>
                                        <button>ADD TO CART</button>
                                    </div>
                                    <hr></hr>
                                </div>
                            </details>
                        </div>

                        <div className="cart_main_left_cart_wrapper">
                            <div className="cart_main_left_cart_summary_txt">
                                <h1>CART SUMMARY</h1>
                            </div>

                            <div className="cart_main_left_cart_summary_box">
                                {cart_arr.map((elem, index) => {
                                    return (
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                            }}
                                        >
                                            <p>{elem.title}</p>
                                            <img
                                                src={elem.image}
                                                alt="image"
                                                style={{ width: "30px" }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="cart_main_right">
                        <div className="cart_main_right_row1_coupan">
                            <h1 className="cart_main_right_row1_coupan_txt">
                                APPLY COUPAN
                            </h1>
                            <div className="cart_main_right_row1_coupan_discount">
                                <div className="cart_main_right_row1_input_wrapper">
                                    <input
                                        placeholder="Enter gift or discount code"
                                        className="cart_main_right_row1_input_box"
                                    ></input>
                                    <button className="cart_main_right_row1_input_btn">
                                        APPLY
                                    </button>
                                </div>
                                <hr></hr>
                                <div className="cart_main_right_row1_accordian">
                                    <Accordion allowMultiple w="100%">
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            alignItems:
                                                                "center",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <Flex
                                                            as="span"
                                                            textAlign="left"
                                                            align="center"
                                                            justify="space-between"
                                                            w="40%"
                                                            marginLeft="-10px"
                                                        >
                                                            <MdOutlineLocalOffer />
                                                            <span
                                                                style={{
                                                                    fontSize:
                                                                        "1rem",
                                                                    fontWeight:
                                                                        "450",
                                                                }}
                                                            >
                                                                View All
                                                                offers/Promos
                                                                for you!
                                                            </span>
                                                        </Flex>

                                                        <AccordionIcon />
                                                    </div>
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <div>yo</div>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="cart_main_right_row2_pd">
                            <h1 className="cart_main_right_row2_pd_txt">
                                PRODUCT DETAILS
                            </h1>
                            <div className="cart_main_right_row2_pd_box">
                                <div className="cart_main_right_row2_pd_subtotal">
                                    <div>
                                        <p>
                                            Subtotal <i>(Inclusive of Taxes)</i>
                                        </p>
                                    </div>
                                    <div>
                                        <p>9923.00</p>
                                    </div>
                                </div>

                                <div className="cart_main_right_row2_pd_shipping">
                                    <div>
                                        <p>Shipping</p>
                                    </div>
                                    <div>
                                        <p>Free</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="cart_main_right_row2_pd_total">
                                    <div>Total</div>
                                    <div>9923.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="cart_main_right_row3_wrapper">
                            <div className="cart_main_right_row3_delivery">
                                <h1 className="cart_main_right_row3_delivery_txt">
                                    DELIVERY ADDRESS
                                </h1>
                                <button>+Add New Address</button>
                            </div>
                            <div className="cart_main_right_row3_delivery_box">
                                <p className="cart_main_right_row3_delivery_box_txt">
                                    Aman Singh <br></br> <br></br>
                                    C3, GANGOTRI ENCLAVE, ANIL SUR <br></br>
                                    PATH, KADMA, NEAR VIJAYA HERITAGE, East
                                    <br></br>
                                    Singhbhum, Jharkhand, 831005 Phone Number:
                                    <br></br>
                                    8789925317<br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
