type CellProps = {
  size: number;
};

function Cell(props: CellProps): JSX.Element {
  return (
    <div
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
      className="bg-[#ffffff21]"
    />
  );
}

export default function Board(): JSX.Element {
  const tetrominoSize = 30; // in pixels

  const boardWidth = 10;
  const boardHeight = 16;
  const gapSize = 1;

  const cells: JSX.Element[][] = [];
  for (let i = 0; i < boardHeight; i++) {
    cells[i] = [];
    for (let j = 0; j < boardWidth; j++) {
      cells[i][j] = <Cell size={tetrominoSize} />;
    }
  }
  const boardStyle = {
    width: `${boardWidth * tetrominoSize + gapSize * (boardWidth - 1)}px`,
    height: `${boardHeight * tetrominoSize + gapSize * (boardHeight - 1)}px`,
  };
  return (
    <div
      style={boardStyle}
      className={`grid grid-cols-${boardWidth} gap-${gapSize} bg-black z-5 border-4 border-gray-700 rounded-lg`}
    >
      {cells}
    </div>
  );
}
