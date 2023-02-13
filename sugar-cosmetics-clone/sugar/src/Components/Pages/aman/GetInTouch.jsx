import "./GetInTouch.css";

export const GetInTouch = () => {
    return (
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
                    Get the latest beauty tips straight to your inbox. Can’t
                    wait to connect!
                </p>

                <div className="down_div_stayintouch_inputbox">
                    <input placeholder="Enter Email"></input>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};
