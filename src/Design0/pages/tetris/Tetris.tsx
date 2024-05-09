import React from "react";
import styled from "styled-components";
import Board from "./components/Board";

//RGBAColor class which goes from 0 to 255
class RGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;
  constructor(r: number, g: number, b: number, a: number = 255.0) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  toHEX6(): string {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
      16
    )}`;
  }
  toHEX8(): string {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
      16
    )}${this.a.toString(16)}`;
  }
  toRGB(): string {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
  toRGBA(): string {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }

  copy(): RGBAColor {
    return new RGBAColor(this.r, this.g, this.b, this.a);
  }
}

// function toRGB(color: string): string {

//   const r = parseInt(color.substring(1, 3), 16);
//   const g = parseInt(color.substring(3, 5), 16);
//   const b = parseInt(color.substring(5, 7), 16);

//   return `${r}, ${g}, ${b}`;
// }

enum TetrominoType {
  I,
  J,
  L,
  O,
  S,
  T,
  Z,
  Empty,
}

// function toColor(type: TetrominoType): RGBAColor {
//   switch (type) {
//     case TetrominoType.I:
//       return new RGBAColor(0, 0, 255); // blue
//     case TetrominoType.J:
//       return new RGBAColor(255, 0, 0); // red
//     case TetrominoType.L:
//       return new RGBAColor(0, 255, 0); // green
//     case TetrominoType.O:
//       return new RGBAColor(255, 255, 0); // yellow
//     case TetrominoType.S:
//       return new RGBAColor(255, 0, 255); // purple
//     case TetrominoType.T:
//       return new RGBAColor(0, 255, 255); // cyan
//     case TetrominoType.Z:
//       return new RGBAColor(255, 255, 255); // white
//     default: return new RGBAColor(50, 50, 50); // grey
//   }
// }

export default function Tetris() {
  const ScTetrisBody = styled.div`
    padding: 10px;
    color: #2c2828;
    //background-color: #2f2f2f;
    font-size: calc(10px + 2vmin);
  `;
  return (
    <ScTetrisBody>
      <header>Tetris</header>
      <Board />
    </ScTetrisBody>
  );
}
