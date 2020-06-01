import React from "react";
import styled from "@emotion/styled";
import ButtonsPad from "../components/ButtonsPad";
import Screen from "../components/Screen";
import {ScreenProvider} from '../context/ScreenContext'

const Main = () => {
   return (
      <ScreenProvider>

         <Container>
            <p>Enter your password</p>
            <Screen />
            <ButtonsPad />
         </Container>
   
      </ScreenProvider>
   );
};

const Container = styled.div`
   background: #ebecf0;
   width: 20em;
   min-width: 320px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 1em;
   border-radius: 16px;
   box-shadow: 20px 20px 60px #c8c9cc, -20px -20px 60px #ffffff;
   margin: auto;
   color: rgba(54, 54, 54);
`;
export default Main;
