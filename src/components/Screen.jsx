import React, {useState} from "react";
import styled from "@emotion/styled";
import { useScreen } from '../context/ScreenContext'

const Screen = () => {
   const screen = useScreen();
   return <Input type="" maxLength="4" defaultValue={screen.numbers}/>;
};

const Input = styled.input`
   background: none;

   width: 200px;
   height: 30px;
   border: none;
   text-align: center;
   letter-spacing: 5px;
   font-size: 2em;
   color: #888;
   padding: 10px;
   &:focus {
      outline: none;
   }
`;

export default Screen;
