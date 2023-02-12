import React, { useState } from "react";
import "./Navbar.css";
import { MdSearch, MdOutlineLocalOffer } from "react-icons/md";
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { DropDownBox } from "./DropDownBox";

let Navbar = () => {
    const ddContentsLips = [
        {
            title: "LIPSTICK",
            contentArr: [
                "MATTE LIPSTICK",
                "Liquid LIPSTICK",
                "crayon LIPSTICK",
                "powder LIPSTICK",
                "satin LIPSTICK",
                "bullet LIPSTICK",
                "gloss LIPSTICK",
            ],
        },
        {
            title: "LIPCARE",
            contentArr: [
                "lips balm",
                "lipstick primer & scrubs",
                "fixers & removers",
            ],
        },
        {
            title: "LIPSTICK SET & COMBOS",
            contentArr: ["lipstick set", "lipstick combos"],
        },
    ];

    const ddContentsEyes = [
        {
            title: "KOHL & KAJAL",
            contentArr: ["KOHL", "KAJAL"],
        },
        {
            title: "EYELINERS",
            contentArr: ["liquid eyeliners", "gel eyeliners", "pen eyeliners"],
        },
        {
            title: "eyebrows",
            contentArr: [
                "definer brow",
                "powder brow",
                "shaper brow",
                "pencil brow",
                "pen brow",
            ],
        },
        {
            title: "masacara",
            contentArr: ["volumizing mascara", "curl lengthening mascara"],
        },
        {
            title: "eyeshadows",
            contentArr: [
                "eyeshadow pallete",
                "jelly eyeshadow",
                "liquid eyeshadow",
            ],
        },
        {
            title: "eye value sets",
            contentArr: [],
        },
    ];

    const ddContentsFace = [
        {
            title: "foundation & bb creams",
            contentArr: ["stick foundation", "liquid foundation", "bb creams"],
        },
        {
            title: "primer",
            contentArr: ["translucent primer", "tinted primer"],
        },
        {
            title: "compact & fixers",
            contentArr: ["setting spray", "loose powder", "compact"],
        },
        {
            title: "concealers & connectors",
            contentArr: ["color corrector", "concealers"],
        },
        {
            title: "highlighter",
            contentArr: [],
        },
        {
            title: "blush",
            contentArr: [],
        },
        {
            title: "facesets & combos",
            contentArr: [],
        },
        {
            title: "palettes",
            contentArr: [],
        },
    ];

    const ddContentsSkin = [
        {
            title: "moisturizers & sunscreen",
            contentArr: ["moisturizers", "sunscreens"],
        },
        {
            title: "masks & serum",
            contentArr: ["face masks", "serums"],
        },
        {
            title: "cleansers & exfoliators",
            contentArr: ["cleaners", "exfoliators"],
        },
        {
            title: "mists & hydrating sticks",
            contentArr: ["face mists", "cooling sticks"],
        },
        {
            title: "skincare ranges",
            contentArr: ["aquaholic", "coffee culture", "cyrus got real"],
        },
        {
            title: "lip & eyecare",
            contentArr: [],
        },
        {
            title: "skincare sets & combos",
            contentArr: [],
        },
    ];
    const [dropDownBoxes, setDropDownBoxes] = useState({
        lips: false,
        eyes: false,
        face: false,
        skin: false,
    });

    let showDropDownBox = (category) => {
        setDropDownBoxes({
            ...dropDownBoxes,
            [category]: true,
        });
    };

    let collapseDropDownBox = (category) => {
        setDropDownBoxes({
            ...dropDownBoxes,
            [category]: false,
        });
    };

    return (
        <div className="navbar_wrapper">
            <div className="navbar_row1_style">
                <div>
                    <img
                        src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png"
                        alt="sugar_logo"
                        className="img_style"
                    />
                </div>

                <div>
                    <div className="navbar_search_wrapper">
                        <input
                            type="text"
                            name="search"
                            className="navbar_search_box"
                            placeholder="Try liquid lipstick"
                        ></input>

                        <div></div>

                        <button className="navbar_search_btn">
                            <BsSearch color="black" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>

                <div>
                    <button className="navbar_login_btn">
                        <FaRegUserCircle size={20} m={20} color="white" />
                        <span>Login/Register</span>
                    </button>
                </div>

                <div className="navbar_end_icons_wrapper">
                    <div className="navbar_end_icons_wishlist">
                        <FaRegHeart
                            color={"white"}
                            size="20"
                            border="3px solild white"
                        />
                    </div>
                    <div className="navbar_end_icons_cart">
                        <BsBag
                            color="white"
                            size="20"
                            border="3px solild white"
                        />
                    </div>
                    <div className="navbar_end_icons_offer">
                        <MdOutlineLocalOffer
                            color="white"
                            size="20"
                            border="3px solild white"
                        />
                    </div>
                </div>
            </div>

            <div className="navbar_row2_wrapper">
                <div className="navbar_row2_style">
                    <div className="navbar_row2_lips">
                        <div
                            onMouseOver={() => {
                                showDropDownBox("lips");
                            }}
                            onMouseOut={() => {
                                collapseDropDownBox("lips");
                            }}
                        >
                            LIPS
                        </div>

                        {dropDownBoxes.lips === true ? (
                            <DropDownBox
                                contents={ddContentsLips}
                                left_offset={"5px"}
                            />
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div className="navbar_row2_eyes">
                        <div
                            onMouseOver={() => {
                                showDropDownBox("eyes");
                            }}
                            onMouseOut={() => {
                                collapseDropDownBox("eyes");
                            }}
                        >
                            EYES
                        </div>
                        {dropDownBoxes.eyes === true ? (
                            <DropDownBox
                                contents={ddContentsEyes}
                                left_offset={"10px"}
                            />
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div className="navbar_row2_face">
                        <div
                            onMouseOver={() => {
                                showDropDownBox("face");
                            }}
                            onMouseOut={() => {
                                collapseDropDownBox("face");
                            }}
                        >
                            FACE
                        </div>
                        {dropDownBoxes.face === true ? (
                            <DropDownBox
                                contents={ddContentsFace}
                                left_offset={"00px"}
                            />
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div className="navbar_row2_skincare">
                        <div
                            onMouseOver={() => {
                                showDropDownBox("skin");
                            }}
                            onMouseOut={() => {
                                collapseDropDownBox("skin");
                            }}
                        >
                            SKINCARE
                        </div>
                        {dropDownBoxes.skin === true ? (
                            <DropDownBox
                                contents={ddContentsSkin}
                                left_offset={"00px"}
                            />
                        ) : (
                            <> </>
                        )}
                    </div>
                    <div>
                        <div>ACCESSORIES</div>
                    </div>
                    <div>
                        <div>GIFTS & KITS</div>
                    </div>
                    <div>
                        <div>BESTSELLERS</div>
                    </div>
                    <div>
                        <div>NEW LAUNCH</div>
                    </div>
                    <div>
                        <div>OFFERS</div>
                    </div>
                    <div>
                        <div>BLOG</div>
                    </div>
                    <div>
                        <div>STORIES</div>
                    </div>
                </div>
            </div>

            {/* {dropDownBoxes.lips === true ? (
                <DropDownBox contents={ddContentsLips} />
            ) : (
                <> </>
            )} */}
        </div>
    );
};

export { Navbar };