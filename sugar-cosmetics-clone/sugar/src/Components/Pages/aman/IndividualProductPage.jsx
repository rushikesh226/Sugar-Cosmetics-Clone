import "./ProductPage.css";
import { IoIosArrowForward } from "react-icons/io";
import { BsShare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { MdOutlineCrueltyFree } from "react-icons/md";
import { TbTruckReturn, TbPremiumRights } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    div,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProductCardRows } from "./ProductCardRows";

// take name, price, photo and description
export default function IndividualProductPage() {
    const [ddownBtns, setddToggle] = useState([true, true, true, true, true]);

    const toggleBtn = (index) => {
        let newArr = ddownBtns.map((elem, i) => {
            if (i === index) return !elem;
            return elem;
        });
        setddToggle(newArr);
    };
    const recommended_products_arr = [
        {
            title: "Time To Shine Lip Gloss - 02 Velma Pinkley (Pink Nude)",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-time-to-shine-lip-gloss-02-velma-pinkley-pink-nude-13906016501843.jpg?v=1619116713",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-time-to-shine-lip-gloss-02-velma-pinkley-pink-nude-13906016370771.jpg?v=1645622194",
            price: 599,
            shades: 7,
            link: "https://in.sugarcosmetics.com/products/time-to-shine-lip-gloss",
        },
        {
            title: "Dual Sharpener",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dual-sharpener-11771532378195.jpg?v=1619109046",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dual-sharpener-11771532443731.jpg?v=1619109050",
            price: 99,
            shades: 1,
            link: "https://in.sugarcosmetics.com/products/dual-sharpener",
        },
        {
            title: "https://in.sugarcosmetics.com/products/9-in-1-beauty-kit",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_172725a5-b5f9-4648-869a-4c05561a1f81.jpg?v=1650023118",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/CreativeImages-Rs1999KitLaunchmain2.jpg?v=1650023118",
            price: 1999,
            shades: 3,
            link: "https://in.sugarcosmetics.com/products/9-in-1-beauty-kit",
        },
        {
            title: "",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/04_b475d6dd-c07b-43b0-9f78-c989b2fe4f6d.jpg?v=1659446263",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/SMNL.jpg?v=1659343734",
            price: 1699,
            shades: 5,
            link: "https://in.sugarcosmetics.com/products/wedding-makeup-kit",
        },
    ];

    const recently_viwed_products_arr = [
        {
            title: "Matte As Hell Crayon Lipstick - 01 Scarlett O'Hara (Red)",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_7db669dd-9541-4d04-ad5b-49653474339d.jpg?v=1640792033",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/07_176815de-58ca-4ea4-8ec3-f2fb18c620ef.jpg?v=1655718441",
            price: 849,
            shades: 23,
            link: "https://in.sugarcosmetics.com/products/matte-as-hell-crayon-lipstick",
        },
        {
            title: "Mettle Liquid Lipstick - 02 Vega (Deep Fuchsia)",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-liquid-lipstick-02-vega-deep-fuchsia-12067419553875.jpg?v=1619109886",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-liquid-lipstick-02-vega-deep-fuchsia-28122590347347.jpg?v=1619109891",
            price: 1199,
            shades: 13,
            link: "https://in.sugarcosmetics.com/products/sugar-mettle-liquid-lipstick",
        },
        {
            title: "Bling Leader Illuminating Moisturizer",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-01-gold-diggin-warm-gold-with-a-pearl-finish-13644788006995.jpg?v=1619115785",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-01-gold-diggin-warm-gold-with-a-pearl-finish-14270754291795.jpg?v=1619115788",
            price: 699,
            shades: 3,
            link: "https://in.sugarcosmetics.com/products/bling-leader-illuminating-moisturizer",
        },
        {
            title: "Arch Arrival Brow Pen - 01 Jerry Brown (Medium Brown)",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/Arch-Arrival-Brow-Pen-WBG-1-4_f1d9d432-b79a-48d6-aafe-973caddfe9e3.jpg?v=1637077536",
            alt_img:
                "https://cdn.shopify.com/s/files/1/0906/2558/products/6_9f87eb09-2853-434c-897c-e0fead2fea32.jpg?v=1657009418",
            price: 499,
            shades: 2,
            link: "https://in.sugarcosmetics.com/products/arch-arrival-brow-pen",
        },
    ];

    const mainImgUrl =
        "https://cdn.shopify.com/s/files/1/0906/2558/products/01_0363dd69-2491-44f9-b93e-3f8fd1bf47c6.jpg?v=1640964864";

    let [mainImgSrc, setMainImgSrc] = useState(mainImgUrl);
    let changeMainImageSrc = (e) => {
        setMainImgSrc(e.target.src);
    };

    return (
        <div>
            {/* navbar begins  */}

            <div
                style={{
                    backgroundColor: "black",
                    height: "130px",
                    position: "sticky",
                    top: "0px",
                    left: "0px",
                    zIndex: "1000",
                }}
            ></div>

            {/* navbar ends  */}

            <div style={{ backgroundColor: "rgb(242,242,242)" }}>
                <div
                    style={{
                        margin: "auto auto",
                        backgroundColor: "white",
                        padding: "5px",
                    }}
                >
                    <div style={{ margin: "10px 30px", fontSize: "0.9rem" }}>
                        <Breadcrumb separator={<MdArrowForwardIos />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Home</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Makeup</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">
                                    Lipstick
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href="#">
                                    <b>Matte As Hell Crayon Lipstick</b>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>

                <div
                    style={{
                        borderRadius: "20px",
                        backgroundColor: "white",
                        width: "90%",
                        margin: " 20px auto",
                        padding: "20px",
                        display: "flex",
                        justifyContent: "space-evenly",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                >
                    <div className="left_div">
                        <div className="left_div_pic_column">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0906/2558/products/01_0363dd69-2491-44f9-b93e-3f8fd1bf47c6.jpg?v=1640964864"
                                alt="pipc1"
                                className="left_div_pic_column_images"
                                onMouseOver={(e) => {
                                    changeMainImageSrc(e);
                                }}
                            ></img>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0906/2558/products/07_42f80301-2769-4749-ade5-41656d5576c3.jpg?v=1655783484"
                                alt="pipc1"
                                className="left_div_pic_column_images"
                                onMouseOver={(e) => {
                                    changeMainImageSrc(e);
                                }}
                            ></img>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0906/2558/products/08_f8570a70-9774-4d96-9f96-d9e21b3a54f4.jpg?v=1655783484"
                                alt="pipc1"
                                className="left_div_pic_column_images"
                                onMouseOver={(e) => {
                                    changeMainImageSrc(e);
                                }}
                            ></img>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0906/2558/products/03_d75ecc2e-6f27-467a-9552-33239f4173fa.jpg?v=1655783484"
                                alt="pipc1"
                                className="left_div_pic_column_images"
                                onMouseOver={(e) => {
                                    changeMainImageSrc(e);
                                }}
                            ></img>
                        </div>

                        <div className="left_div_pic_main">
                            <div className="left_div_pic_main_round_wrapper">
                                <img
                                    src={mainImgSrc}
                                    alt="main_pic"
                                    className="left_div_pic_main_round_wrapper_img"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="right_div">
                        <div className="right_div_row1_name">
                            <h1 className="right_div_row1_name_txt">
                                Matte As Hell Crayon Lipstick - 11 Elle Woods
                                (Brown Nude)
                            </h1>

                            <button className="right_div_row1_name_btn">
                                <BsShare /> Share
                            </button>
                        </div>

                        <div className="right_div_row2_wrapper">
                            <h3 className="right_div_row2_price">₹849.00</h3>
                            <button className="right_div_row2_btn">
                                FREE SHIPPING
                            </button>
                            <p className="right_div_row2_txt">
                                (T & C applicable)
                            </p>
                        </div>

                        <div className="right_div_row3_shades_wrapper">
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                            <button className="right_div_row3_shades_wrapper_btn"></button>
                        </div>

                        <div className="right_div_row4_offers_wrapper">
                            <h3 className="right_div_row4_offers_wrapper_txt">
                                AVAILABLE OFFERS!
                            </h3>
                            <ul className="right_div_row4_offers_wrapper_list">
                                <li>
                                    FREE Nothing Else Matter Longwear Lipstick +
                                    Pouch On A Spend Of Rs.799 <br />{" "}
                                    <span>Know More</span>
                                </li>
                                <li>
                                    Get BoAt Wave Call Smart Watch Worth Rs.7990
                                    On A Spend Of Rs.4999 <br />{" "}
                                    <span> Know More </span>
                                </li>
                            </ul>
                        </div>

                        <div className="right_div_row5_cart_wrapper">
                            <button className="right_div_row5_cart_wishlist_btn">
                                <FiHeart w={20} />
                            </button>

                            <button className="right_div_row5_cart_addtocart_btn">
                                ADD TO CART
                            </button>
                        </div>

                        <hr></hr>

                        <div className="right_div_row6_pincode_wrapper">
                            <input
                                placeholder="Enter Delivery Pincode"
                                className="right_div_row6_pincode_inputbox"
                            />
                            <button className="right_div_row6_pincode_btn">
                                CHECK
                            </button>
                        </div>

                        <div className="right_div_row7_features_wrapper">
                            <button className="right_div_row7_features_btn">
                                <MdOutlineCrueltyFree />
                                <span>Cruelty Free</span>
                            </button>

                            <button className="right_div_row7_features_btn">
                                <TbTruckReturn />
                                <span>Easy Return</span>
                            </button>

                            <button className="right_div_row7_features_btn">
                                <TbPremiumRights />
                                <span> Quality First</span>
                            </button>
                        </div>

                        <div className="right_div_row8_text_wrapper">
                            <details
                                onClick={() => {
                                    toggleBtn(0);
                                }}
                            >
                                <summary className="right_div_row8_text_description">
                                    <p>DESCRIPTION</p>
                                    {ddownBtns[0] === true ? (
                                        <FiChevronDown />
                                    ) : (
                                        <MdOutlineKeyboardArrowUp />
                                    )}
                                </summary>

                                <div className="right_div_row8_text_description_content">
                                    <p>
                                        Glam up your pout with our beautifully
                                        bold, incredibly long-lasting and
                                        gorgeously vivid SUGAR Matte As Hell
                                        Crayon Lipstick. This lipstick lives up
                                        to its title by providing the most
                                        smooth, silky soft matte finish!
                                    </p>
                                    <br></br>
                                    <p>
                                        Blending confident colour with desirable
                                        comfort, Matte As Hell Crayon lipstick
                                        is highly-pigmented formula that glides
                                        on comfortable and instantly reveals a
                                        weightless veil of high pigment.
                                        Enriched with lip-conditioning
                                        ingredients, this long-wear crayon
                                        lipstick keeps your lips soft and
                                        hydrated whilst helping ward against
                                        dryness. What makes it even better? It
                                        comes with a high-quality sharpener that
                                        helps keep the tip of the crayon
                                        ultra-precise for an effortless swipe
                                        every single time! Read more details
                                        about the Crayon Lipstick Sharpener
                                        here!
                                    </p>
                                    <br></br>
                                    <p>
                                        Indulge in 36 gorgeous matte lipstick
                                        shades, that can also be layered and
                                        mixed to create a totally unique lip
                                        look and add an extra dose of ‘oomph’ to
                                        your pout!
                                    </p>
                                </div>
                            </details>

                            <hr></hr>

                            <details
                                onClick={() => {
                                    toggleBtn(1);
                                }}
                            >
                                <summary className="right_div_row8_text_howtoapply">
                                    <p>HOW TO APPLY</p>
                                    {ddownBtns[1] === true ? (
                                        <FiChevronDown />
                                    ) : (
                                        <MdOutlineKeyboardArrowUp />
                                    )}
                                </summary>
                                <div className="right_div_row8_text_howtoapply_content">
                                    <ul>
                                        <li>
                                            Apply this lipstick in the center of
                                            your upper lip and follow the
                                            contours of your mouth with the
                                            precise tip
                                        </li>
                                        <li>
                                            Use the wider side of the crayon to
                                            fill in lips, all in a swipe!
                                        </li>
                                        <li>
                                            Enjoy a perfect pout for up to 10
                                            hours
                                        </li>
                                    </ul>
                                </div>
                            </details>

                            <hr></hr>

                            <details
                                onClick={() => {
                                    toggleBtn(2);
                                }}
                            >
                                <summary className="right_div_row8_text_ingredients">
                                    <p>INGREDIENTS</p>
                                    {ddownBtns[2] === true ? (
                                        <FiChevronDown />
                                    ) : (
                                        <MdOutlineKeyboardArrowUp />
                                    )}
                                </summary>

                                <div className="right_div_row8_text_ingredient_content">
                                    Isododecane, Dimethicone, Diisostearyl
                                    Malate, Synthetic Wax, Distarch Phosphate,
                                    Polybutene, Dimethicone/Vinyl Dimethicone
                                    Crosspolymer, Caprylyl Methicone,
                                    Dimethylimidazolidinone Rice Starch,
                                    Glyceryl Caprylate, Pentaerythrityl
                                    Tetra-Di-T-Butyl Hydroxyhydrocinnamate,
                                    Silica, Isoceteth - 10 May Contain: CI
                                    77491, 77492, 77499, 77891, 77019.
                                </div>
                            </details>

                            <hr></hr>

                            <details
                                onClick={() => {
                                    toggleBtn(3);
                                }}
                            >
                                <summary className="right_div_row8_text_faq">
                                    <p>COMMONLY ASKED QUESTIONS</p>
                                    {ddownBtns[3] === true ? (
                                        <FiChevronDown />
                                    ) : (
                                        <MdOutlineKeyboardArrowUp />
                                    )}
                                </summary>

                                <div className="right_div_row8_text_faq_content">
                                    <div>
                                        <p>
                                            <b>
                                                Q. How is the finish of this
                                                crayon lipstick?
                                            </b>
                                        </p>
                                        <p>
                                            <b>A.</b> This crayon lipstick is
                                            super matte yet comfortable on lips
                                            and gives you full coverage!
                                        </p>
                                    </div>
                                    <br></br>
                                    <div>
                                        <p>
                                            <b>
                                                Q. How long does the lipstick
                                                stay?
                                            </b>
                                        </p>
                                        <p>
                                            <b>A.</b> Our highly pigmented
                                            creamy matte lipstick offers
                                            high-impact colour and stays good
                                            for up to 10 to 12 hours!
                                        </p>
                                    </div>
                                    <br></br>
                                    <div>
                                        <p>
                                            <b>
                                                Q. Are there any nude lipstick
                                                shades available for everyday
                                                wear?
                                            </b>
                                        </p>
                                        <p>
                                            <b>A.</b> Absolutely! Matte As Hell
                                            Lipsticks are available in 36
                                            stunning shades and there is a lip
                                            shade for each skin tone and
                                            occasion. Our best nude lipsticks
                                            from the collection are 20 Buffy
                                            Summers (Mid-tone Warm Nude) which
                                            suits fair to medium skin tone
                                            better, 19 Emma Woodhouse (Earthy
                                            Brown) which looks gorgeous on most
                                            Indian skin tones and 18 Rosalind
                                            (Nude Rose) and 07 Viola (Mauve
                                            Nude) shades that suit medium to
                                            dusky skin tone better! Find your
                                            best nude lipstick match here.
                                        </p>
                                    </div>
                                    <br></br>
                                </div>
                            </details>

                            <hr></hr>

                            <details
                                onClick={() => {
                                    toggleBtn(4);
                                }}
                            >
                                <summary className="right_div_row8_text_review">
                                    <p>REVIEWS</p>
                                    {ddownBtns[4] === true ? (
                                        <FiChevronDown />
                                    ) : (
                                        <MdOutlineKeyboardArrowUp />
                                    )}
                                </summary>
                            </details>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------- finished left and right div upper part ---------------------------------  */}

                <ProductCardRows
                    products={recommended_products_arr}
                    rowTitle={"RECOMMENDED PRODUCTS"}
                />

                <ProductCardRows
                    products={recently_viwed_products_arr}
                    rowTitle={"SHOP FROM RECENTLY VIEWED"}
                />

                {/* -------------------------------------lets stay in touch ----------------------------------- */}

                <div>
                    <div className="down_div_recommended_products_bgwrapper">
                        <div className="down_div_stayintouch_heading">
                            <div className="line_in_the_middle"></div>
                            <h1 className="down_div_stayintouch_tagline">
                                LET'S STAY IN TOUCH
                            </h1>
                            <div className="line_in_the_middle"></div>
                        </div>

                        <p className="down_div_stayintouch_txt">
                            Get the latest beauty tips straight to your inbox.
                            Can’t wait to connect!
                        </p>

                        <div className="down_div_stayintouch_inputbox">
                            <input placeholder="Enter Email"></input>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
