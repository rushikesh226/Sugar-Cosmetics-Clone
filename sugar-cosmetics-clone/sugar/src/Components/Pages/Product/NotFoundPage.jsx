import { Image } from "@chakra-ui/react";
import React from "react";

function NotFoundPage() {
  return (
    <div style={{backgroundColor:"black"}}>
      <Image
        src={
          "https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
        }
        width={"70%"}
        margin={"auto"}
        height={"520px"}
      />
    </div>
  );
}

export default NotFoundPage;
