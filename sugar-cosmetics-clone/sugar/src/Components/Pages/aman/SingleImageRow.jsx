import { Image } from "@chakra-ui/react";

export function SingleImageRow({ rowTitle, imgLink, imgWidth, clickLink }) {
    return (
        <div
            style={{
                margin: " 50px auto",
            }}
        >
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
                        fontSize: "18px",
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

            <Image
                style={{
                    borderRadius: "30px",
                    margin: "auto",
                    width: imgWidth,
                }}
                src={imgLink}
            />
        </div>
    );
}
