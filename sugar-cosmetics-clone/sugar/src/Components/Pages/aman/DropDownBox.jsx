export function DropDownBox({ contents, left_offset }) {
    // contents : title - > indivudual lists contents
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
                top: "155px",
                left: { left_offset },
                overflow: "hidden",
                width: "fit-content",
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                textTransform: "uppercase",
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
                                {elem.contentArr.map((e) => {
                                    return (
                                        <li
                                            style={{
                                                display: "flexbox",
                                                margin: "5px 0px",
                                            }}
                                        >
                                            {" "}
                                            {e}{" "}
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
