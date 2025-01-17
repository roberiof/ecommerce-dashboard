import React from "react";

import { CardProps } from "./types";

const Home: React.FC<CardProps> = ({
  color = "#4e5d66",
  width = 35,
  height = 35
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40 39.999"
    >
      <g id="home" transform="translate(0 0)" opacity="0.6">
        <rect
          id="Retângulo_182"
          data-name="Retângulo 182"
          width="40"
          height="39.999"
          rx="6"
          transform="translate(0 0)"
          fill={color}
          opacity="0"
        />
        <g
          id="Grupo_859"
          data-name="Grupo 859"
          transform="translate(11.43 9.912)"
        >
          <path
            id="Caminho_1410"
            data-name="Caminho 1410"
            d="M229,68.773v2.206a.9.9,0,0,1-1.8,0V68.937a.408.408,0,0,0,.008-.165.579.579,0,0,0-.049-.186.4.4,0,0,0-.088-.181l-6.256-6.332a.547.547,0,0,0-.761,0l-6.25,6.32a.542.542,0,0,0-.117.209,1.075,1.075,0,0,0-.029.33v7.35a.971.971,0,0,0,.972.966h8.445a.9.9,0,1,1,0,1.8h-8.445a2.769,2.769,0,0,1-2.769-2.762v-7.5a2.377,2.377,0,0,1,.556-1.516c.041-.053.083-.1.117-.14l6.268-6.338a2.3,2.3,0,0,1,3.26,0l4.887,4.945,1.534,1.569A2.293,2.293,0,0,1,229,68.773Z"
            transform="translate(-211.867 -60.111)"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default Home;
