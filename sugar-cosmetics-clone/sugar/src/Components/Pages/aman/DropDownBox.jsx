import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DropDownBox.css";
export function DropDownBox({ contents, left_offset, closeAllDropDownBoxes }) {
    // let [linkColor, setLinkColor] = useState("teal");
    // contents : title - > indivudual lists contents
    // link link
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                backgroundColor: "white",
                color: "black",
                margin: "0px 20px",
                position: "absolute",
                zIndex: "50000",
                top: "144px",
                left: `${left_offset}`,
                overflow: "hidden",
                width: "fit-content",
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "5px",
            }}
        >
            {contents.map((elem, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            width: "200px",
                            textAlign: "left",
                        }}
                    >
                        <h2 style={{ fontWeight: "500" }}>{elem.title}</h2>
                        <div>
                            <ul
                                style={{
                                    textAlign: "left",
                                    margin: "10px 15px",
                                    fontSize: "0.8rem",
                                    color: "teal",
                                }}
                            >
                                {elem.contentArr.map((e, i) => {
                                    return (
                                        <li
                                            key={i}
                                            style={{
                                                display: "flexbox",
                                                margin: "5px 0px",
                                            }}
                                        >
                                            <NavLink
                                                to="/products"
                                                className="linkColor"
                                                onClick={closeAllDropDownBoxes}
                                            >
                                                {e}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
