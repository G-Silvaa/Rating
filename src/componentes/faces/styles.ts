import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-left: 1px;

  .face-button{
  transition: transform 0.3s ease;
  
}

.face-button:hover {
  fill: red;
}

.face-button.clicked {
  fill: red;
  transform: scale(1.2);
  
}

.face-button2{
  transition: transform 0.3s ease;
}

.face-button2:hover {
  fill: yellow;
  
}
.face-button2.clicked{
  fill: yellow;
  transform: scale(1.2);
}
.face-button3{
  transition: transform 0.3s ease;
}

.face-button3:hover {
  fill:rgb(0, 255, 0);
}

.face-button3.clicked{
  fill:rgb(0, 255, 0);
  transform: scale(1.2);
}
`;
