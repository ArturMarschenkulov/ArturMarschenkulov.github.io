import styled from 'styled-components';

const ScDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${'#999'};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  `;


export default function Tetris() {
  const ScTetrisBody = styled.div`
    //margin: 0px;
    //border: 0px solid black;
    padding: 10px;
    //position: absolute;
    //height: 100%;
    //width: 100%;

    //display: flex;
    //justify-content: center;
    //justify-items: center; 
    color: #7e7e7e;
    //background-color: #2f2f2f;
    font-size: calc(10px + 2vmin);
  `;
  return (
    <ScTetrisBody>
      <header>
        Tetris
      </header>
      <ScDisplay /> 
    </ScTetrisBody>   
  );
}