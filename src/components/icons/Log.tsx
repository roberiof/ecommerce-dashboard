import React from "react";

import { CardProps } from "./types";

const Log: React.FC<CardProps> = ({
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
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Retângulo_6098"
            data-name="Retângulo 6098"
            width="28"
            height="20.814"
            transform="translate(-2 -2)"
            fill={color}
            stroke={color}
            strokeWidth="0.5"
          />
        </clipPath>
      </defs>
      <g id="log" transform="translate(-124.305 -110.779)" opacity="0.6">
        <rect
          id="Retângulo_3288"
          data-name="Retângulo 3288"
          width="40"
          height="39.999"
          transform="translate(124.305 110.779)"
          fill={color}
          opacity="0"
        />
        <g
          id="Grupo_7916"
          data-name="Grupo 7916"
          transform="translate(132.305 122.778)"
        >
          <g
            id="Grupo_7916-2"
            data-name="Grupo 7916"
            clipPath="url(#clip-path)"
          >
            <path
              id="Caminho_8722"
              data-name="Caminho 8722"
              d="M4.558,16.814H4.221c-.051-.01-.1-.025-.155-.029a2.371,2.371,0,0,1-1.844-1.109,4.013,4.013,0,0,1-.571-1.538c-.039-.219.012-.2-.24-.216a1.594,1.594,0,0,1-.779-.22A1.363,1.363,0,0,1,0,12.487Q0,7.807,0,3.126,0,2.713.012,2.3a3.452,3.452,0,0,1,.035-.464A2.078,2.078,0,0,1,1.894.055,9.263,9.263,0,0,1,3.015,0Q8.211,0,13.408,0a3.949,3.949,0,0,1,.519.035,2.118,2.118,0,0,1,1.823,1.711,4.956,4.956,0,0,1,.059.984c0,.047,0,.095,0,.161.236,0,.462,0,.689,0,.562,0,1.125.012,1.687.015a2.525,2.525,0,0,1,.83.123,1.962,1.962,0,0,1,1.1,1q.656,1.251,1.311,2.5a.737.737,0,0,0,.372.349c.261.112.521.223.78.339a5.878,5.878,0,0,1,.724.341A1.251,1.251,0,0,1,24,8.758c0,.035,0,.07,0,.1q0,1.924,0,3.849a.371.371,0,0,1-.019.142,4.628,4.628,0,0,1-.215.465.9.9,0,0,1-.543.437,3.777,3.777,0,0,1-.884.15c-.114,0-.229,0-.347,0-.023.188-.043.36-.066.532a2.753,2.753,0,0,1-2.2,2.313c-.131.024-.262.043-.393.064h-.257c-.127-.017-.254-.032-.38-.052a2.783,2.783,0,0,1-2.274-2.382c-.017-.148-.035-.3-.053-.451H7.314a.642.642,0,0,1-.064,0c-.05-.005-.068.014-.073.067-.016.176-.035.352-.061.526a2.759,2.759,0,0,1-2.188,2.229l-.369.063m10.108-3.956c0-.031,0-.054,0-.078q0-1.072.008-2.145c0-.541.005-1.082.005-1.623q0-2.619-.005-5.239,0-.671,0-1.342a1.333,1.333,0,0,0-.143-.651,1.265,1.265,0,0,0-1.2-.681q-5.558,0-11.116,0H2.2A1.075,1.075,0,0,0,1.068,2.133c-.025.29-.014.583-.014.875,0,1.414.007,2.828.007,4.242q0,2.262-.005,4.523c0,.019,0,.038,0,.056,0,.265.008.53.016.795a.179.179,0,0,0,.116.186,1.169,1.169,0,0,0,.615.018.221.221,0,0,0,.1-.068,1.119,1.119,0,0,0,.116-.162A2.638,2.638,0,0,1,3.26,11.48a2.871,2.871,0,0,1,1.249-.211,2.6,2.6,0,0,1,1.5.509,2.752,2.752,0,0,1,.749.86.4.4,0,0,0,.387.223c.094,0,.187,0,.281,0h7.236Zm1.146.021c.213,0,.413,0,.613,0a.388.388,0,0,0,.368-.211,2.691,2.691,0,0,1,2.533-1.385,2.473,2.473,0,0,1,1.725.748c.151.151.28.323.417.487a.9.9,0,0,0,.775.364c.126-.007.251-.019.377-.021.217,0,.266-.086.282-.287,0-.021,0-.043,0-.064,0-.222,0-.444.005-.666q0-1.225,0-2.45c0-.171,0-.343,0-.514a.436.436,0,0,0-.283-.435l-.089-.037A10.019,10.019,0,0,1,20.9,7.559a1.414,1.414,0,0,1-.468-.529q-.674-1.29-1.357-2.576a.724.724,0,0,0-.6-.4c-.25-.02-.5-.024-.754-.027-.581-.007-1.162-.008-1.744-.011-.137,0-.178.039-.177.176,0,.305,0,.61.005.916q0,1.374.005,2.747,0,2.43,0,4.861v.166m3.36-.509a1.7,1.7,0,1,0,1.688,1.715,1.706,1.706,0,0,0-1.688-1.715M2.717,14.076a1.692,1.692,0,1,0,1.7-1.706,1.705,1.705,0,0,0-1.7,1.706"
              transform="translate(0 0)"
              fill={color}
              stroke={color}
              strokeWidth="0.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Log;
