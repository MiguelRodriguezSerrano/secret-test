import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import ButtonsPad from "../components/ButtonsPad";
import Screen from "../components/Screen";
import { useScreen } from "../context/ScreenContext";

const Main = () => {
   const screen = useScreen();
   return (

      <Container theme={screen.theme[screen.colors]}>
         <p>Enter your password</p>
         <Screen />
         <ButtonsPad />
      </Container>

   );
};

const Container  = styled.div`
   background: #ebecf0;
   width: 20em;
   min-width: 320px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 1em;
   border-radius: 16px;
   box-shadow: 20px 20px 60px ${props => props.theme.darkShadow}, -20px -20px 60px ${props => props.theme.lightShadow};
   margin: auto;
   color: rgba(54, 54, 54);
`;
export default Main;
