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
  return (
    <ScDisplay />      
  );
}