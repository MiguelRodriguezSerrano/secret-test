import React from "react";
import styled from "@emotion/styled";
import {useScreen} from '../context/ScreenContext';

const ButtonsPad = () => {
   const numbersOfButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   const screen = useScreen();
   const handleClick = (e) => {
      e.preventDefault();
      screen.setNumbers(e.target.innerHTML);
      
   }

   return (
      <div>
         <ButtonsContainer >{ numbersOfButtons.map((numberButton) => (
            <Button value={numberButton.toString()} key={numberButton.toString()} onClick={ handleClick } >
               {numberButton}
            </Button>

   ))}   </ButtonsContainer>
      </div>
   );
};

const ButtonsContainer = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   justify-content: space-around;
   align-content: flex-end;
   margin: 2em 0;
`;
const Button = styled.button`
   border: none;
   position: relative;
   width: 2.5em;
   height: 2.5em;
   margin: 0.5em;
   border-radius: 50%;
   box-shadow: 20px 20px 60px #c8c9cc, -20px -20px 60px #ffffff;
   text-align: center;
   line-height: 2.5em;
   font-weight: 400;
   font-size: 1.8em;
   cursor: pointer;
   user-select: none;
   transition: all 0.5s ease;
   &:hover {
      color: rgba(31, 31, 31, 0.8);
   }
   &:active {
      background: rgba(31, 31, 31, 0.1);
      color: white;
   }
   &:hover:before {
      border: 2px solid rgba(31, 31, 31, 0.5);
   }
   &:before {
      content: "";
      position: absolute;
      left: -2px;
      width: 2.5em;
      height: 2.5em;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 2.5em;
      transition: all 0.5s ease;
   }
`;

export default ButtonsPad;
