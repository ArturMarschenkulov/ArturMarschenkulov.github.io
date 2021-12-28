import styled from 'styled-components';

type CellProps = {
  size: number;
}

function Cell(props: CellProps): JSX.Element {
  const ScCell = styled.div`
    width: ${props.size}px;
    height: ${props.size}px;
    width: auto;
    background: #ffffff21;
  `;
  return (
    <ScCell />
  );
}

export default function Board(): JSX.Element {

    const tetrominoSize = 30; // in pixels
  
    const boardWidth = 10;
    const boardHeight = 16;
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
      border:  4px solid #777;
      border-radius: 5px;
    `;
  
    const cells: JSX.Element[][] = [];
    for(let i = 0; i < boardHeight; i++) {
      cells[i] = [];
      for(let j = 0; j < boardWidth; j++) {
        cells[i][j] = <Cell size={tetrominoSize} />;
      }
    }
    return (
      <ScBoard>
        {cells}
      </ScBoard>
    );
  }