import { Image } from "@chakra-ui/react";

export function PictureCardRow({ arr, rowTitle }) {
    return (
        <div style={{ margin: "50px" }}>
            <div
                style={{
                    margin: "50px auto 40px auto",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "35%",
                }}
            >
                <div
                    style={{
                        background: "black",
                        height: "2px",
                        width: "15%",
                    }}
                ></div>
                <h1
                    style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        color: "black",
                    }}
                >
                    {rowTitle}
                </h1>
                <div
                    style={{
                        background: "black",
                        height: "2px",
                        width: "15%",
                    }}
                ></div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                    margin: "auto",
                }}
            >
                {arr?.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                borderRadius: "20px",
                                margin: "auto 10px",
                            }}
                        >
                            <Image
                                src={elem.image}
                                alt={elem.title}
                                style={{ borderRadius: "30px" }}
                            ></Image>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
