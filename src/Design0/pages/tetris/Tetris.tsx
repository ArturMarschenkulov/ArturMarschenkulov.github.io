import React from 'react';
import styled from 'styled-components';



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
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  }
  toHEX8(): string {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}${this.a.toString(16)}`;
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



function toRGB(color: string): string {

  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  return `${r}, ${g}, ${b}`;
}



enum TetrominoType {
  I,
  J,
  L,
  O,
  S,
  T,
  Z,
  Empty
}


function toColor(type: TetrominoType): RGBAColor {
  switch (type) {
    case TetrominoType.I:
      return new RGBAColor(0, 0, 255); // blue
    case TetrominoType.J:
      return new RGBAColor(255, 0, 0); // red
    case TetrominoType.L:
      return new RGBAColor(0, 255, 0); // green
    case TetrominoType.O:
      return new RGBAColor(255, 255, 0); // yellow
    case TetrominoType.S:
      return new RGBAColor(255, 0, 255); // purple
    case TetrominoType.T:
      return new RGBAColor(0, 255, 255); // cyan
    case TetrominoType.Z:
      return new RGBAColor(255, 255, 255); // white
    default: return new RGBAColor(50, 50, 50); // grey
  }
}


// type CellProps = {
//   type: TetrominoType;
//   size: number;
// }
// function Cell(props: CellProps): JSX.Element {
//   let color = toColor(props.type);
//   color.a = 0.5;

//   let color_0 = color.copy();
//   color_0.a = 200.0;
//   let color_1 = color.copy();
//   color_1.a = 10.0;

//   const ScCell = styled.div<CellProps>`
//     z-index: 6;
//     width: ${props.size}px;
//     height: ${props.size}px;
//     background: ${color.toRGBA()};
//     border: 4px solid;
//     border-bottom-color: ${color_0.toRGBA()};
//     border-right-color: ${color.toRGBA()};
//     border-top-color: ${color.toRGBA()};
//     border-left-color: ${color_1.toRGBA()};
//   `;
//   return (
//     <ScCell 
//       type={props.type}
//       size={props.size}
//     />
//   );
// }
// class Tetromino {
//   type: TetrominoType = TetrominoType.I;
//   color: string = "";
//   //cells: Cell[] = [];

// }

type CellProps = {
  size: number;
}

function Cell(props: CellProps): JSX.Element {
  const size = props.size;

  const ScCell = styled('div', "kk")`
    width: ${size}px;
    height: ${size}px;
    width: auto;
    background: #ffffff21;
  `;
  return (
    <ScCell />
  );
}

function Board(): JSX.Element {

  const tetrominoSize = 30; // in pixels

  const boardWidth = 10;
  const boardHeight = 24;

  const gapSize = 1;


  const ScBoard = styled.div`
    display: grid;
    grid-gap: ${gapSize}px;
    grid-template-columns: repeat(${boardWidth}, ${tetrominoSize}px);
    grid-template-rows: repeat(${boardHeight}, ${tetrominoSize}px);
    width: ${(boardWidth * tetrominoSize) + gapSize * (boardWidth - 1)}px;
    height: ${(boardHeight * tetrominoSize) + gapSize * (boardHeight - 1)}px;
    background: #000000;
    z-index: 5;
    border: 1px solid #777;
  `;



  const cells: JSX.Element[] = [];
  for (let i = 0; i < boardWidth * boardHeight; i++) {
    cells.push(<Cell size={30} />);
  }
  return (
    <ScBoard>
      {cells}
    </ScBoard>
  );
}


export default function Tetris() {


  const [gameState, setGameState] = React.useState(0);
  const ScTetrisBody = styled.div`
    padding: 10px;
    color: #2c2828;
    //background-color: #2f2f2f;
    font-size: calc(10px + 2vmin);
  `;
  return (
    <ScTetrisBody>
      <header>
        Tetris
      </header>
      <Board/>
    </ScTetrisBody>   
  );
}