import React from "react";

import { CardProps } from "./types";

const Service: React.FC<CardProps> = ({
  color = "#4e5d66",
  width = 40,
  height = 40
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 39.999"
    >
      <g id="services" transform="translate(-1409.836 -61.902)" opacity="0.6">
        <rect
          id="Retângulo_6870"
          data-name="Retângulo 6870"
          width="40"
          height="39.999"
          transform="translate(1409.836 61.902)"
          fill="none"
          opacity="0"
        />
        <path
          id="Caminho_8682"
          data-name="Caminho 8682"
          d="M1479.4,144.109a13,13,0,1,1,13.027,13.027A13.023,13.023,0,0,1,1479.4,144.109Zm9.8,10.995v-.538c0-1.812-.012-3.624.01-5.436a.818.818,0,0,0-.445-.807,6.861,6.861,0,0,1,.135-11.7c.326-.193.654-.4,1.049-.176s.405.594.4.984c-.006,1.327-.013,2.655.009,3.983a.855.855,0,0,0,.248.582,15.269,15.269,0,0,0,1.52,1.1.614.614,0,0,0,.545,0,12.531,12.531,0,0,0,1.43-1.044,1,1,0,0,0,.329-.646c.031-1.309.018-2.619.014-3.929,0-.4-.012-.8.405-1.035s.757,0,1.093.207a6.866,6.866,0,0,1,.084,11.676.816.816,0,0,0-.441.809c.021,1.812.01,3.624.01,5.436v.538a11.352,11.352,0,0,0,8.271-11.758,11.5,11.5,0,0,0-22.952.112A11.364,11.364,0,0,0,1489.2,155.1Zm6.751-16.536c0,1.208-.011,2.313.006,3.419a1.044,1.044,0,0,1-.479.952q-1.252.881-2.476,1.8a.9.9,0,0,1-1.219-.008c-.772-.582-1.55-1.158-2.348-1.7a1.231,1.231,0,0,1-.6-1.164c.033-1.066.01-2.134.01-3.2l-.146-.085c-.118.148-.232.3-.354.444a5.34,5.34,0,0,0,1.615,8.247,1.216,1.216,0,0,1,.756,1.261c-.028,2.1-.011,4.2-.011,6.3v.712h3.387v-.669c0-2.171.01-4.342-.007-6.513a.957.957,0,0,1,.623-1.013,3.3,3.3,0,0,0,.427-.226A5.334,5.334,0,0,0,1495.951,138.568Z"
          transform="translate(-62.56 -62.705)"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Service;