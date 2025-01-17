import React from "react";

import { CardProps } from "./types";

const Buy: React.FC<CardProps> = ({
  color = "#4e5d66",
  width = 35,
  height = 35
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 40"
    >
      <g id="Buy" transform="translate(8.723 9.498)" opacity="0.6">
        <path
          id="Buy-2"
          data-name="Buy"
          d="M16.676,19.895a1.667,1.667,0,1,1,1.667,1.665A1.668,1.668,0,0,1,16.676,19.895Zm-12.376,0A1.666,1.666,0,1,1,5.964,21.56,1.666,1.666,0,0,1,4.3,19.895Zm1.849-3.41a2.825,2.825,0,0,1-2.778-2.394l-.021-.18L2.344,1.926.684,1.638A.828.828,0,0,1,0,.8L.011.684A.824.824,0,0,1,.824,0h.03L.966.012l2.288.4a.824.824,0,0,1,.661.623l.02.122.258,3.082H19.7a2.277,2.277,0,0,1,1.684.733,2.305,2.305,0,0,1,.61,1.731l-.018.166-1.043,7.214a2.82,2.82,0,0,1-2.6,2.4l-.18.006ZM4.994,13.773a1.161,1.161,0,0,0,1.027,1.055l.128.007h12a1.16,1.16,0,0,0,1.121-.865l.026-.129,1.044-7.214a.651.651,0,0,0-.546-.736l-.1-.008H4.332ZM13.338,9.95a.825.825,0,0,1-.112-1.642l.112-.008h3.05A.826.826,0,0,1,16.5,9.943l-.112.007Z"
          transform="translate(0 0)"
          fill={color}
        />
        <rect
          id="Retângulo_6871"
          data-name="Retângulo 6871"
          width="40"
          height="40"
          transform="translate(-8.723 -9.498)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default Buy;
