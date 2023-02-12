import { Image, Box } from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
// data - breakdown
// img,
// alt_img,
// title,
// price,
// link

export function ProductCardRows({ products, rowTitle, bg }) {
    // console.log(bg, " background color");
    let heading_color = bg !== undefined ? "white" : "black";
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                margin: "30px auto",
                padding: "5px 5px 60px 5px",
                // backgroundColor: "red",
            }}
        >
            <div
                style={{
                    margin: "5px auto 5px auto",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "35%",
                }}
            >
                <div
                    style={{
                        background: heading_color,
                        height: "2px",
                        width: "15%",
                    }}
                ></div>
                <h1
                    style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        color: heading_color,
                    }}
                >
                    {rowTitle}
                </h1>
                <div
                    style={{
                        background: heading_color,
                        height: "2px",
                        width: "15%",
                    }}
                ></div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "62%",
                    margin: "auto",
                    marginTop: "10px",
                }}
            >
                {products?.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "30%",
                                borderRadius: "20px",
                                border: "2px black",
                                margin: " 10px 10px",
                                backgroundColor: "white",
                                padding: "20px",
                            }}
                        >
                            <Image
                                src={elem.img}
                                alt={elem.title}
                                style={{
                                    width: "150px",
                                    height: "200px",
                                    borderRadius: "10px",
                                    margin: "auto",
                                }}
                                onMouseOver={(event) => {
                                    event.target.src = elem.alt_img;
                                }}
                                onMouseOut={(event) => {
                                    event.target.src = elem.img;
                                }}
                            />
                            <p> {elem.title} </p>
                            <p> $ {elem.price}</p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    marginTop: "50px",
                                    marginBottom: "1px",
                                }}
                            >
                                <button
                                    style={{
                                        border: "1px solid",
                                        borderRadius: "10px",
                                        padding: "7px",
                                        margin: "auto",
                                    }}
                                >
                                    <BsHeart />
                                </button>

                                <button
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        margin: "auto 10px",
                                        width: "200px",
                                    }}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
