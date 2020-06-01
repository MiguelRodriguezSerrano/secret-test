import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useScreen } from '../context/ScreenContext'

const Screen = () => {
   const screen = useScreen();
   const password = '1234';
   const [attemps, setAttemps] = useState(0);

   useEffect(() => {
      if(screen.numbers.length === 4 ){
         if(screen.numbers === password){
            success();
            window.location = "http://migers.digital";
            console.log('Pass Correct');
            
         }else {
            clearScreen();
            setAttemps(attemps + 1);

            if(attemps === 2){
               screen.setBlock(true)
               screen.setNumbers('Blocked')
            }

            console.log('Wrong!');
            
         }
      }
      
   }, [screen.numbers]);

   const clearScreen = () => {
      screen.setNumbers('Wrong')

      setTimeout(() => {
         screen.setNumbers('')
      }, 2000);
   }
   const success = () => {
      screen.setNumbers('Success')

      setTimeout(() => {
         screen.setNumbers('')
      }, 2000);
   }


   return <Input type="" disabled maxLength="4" defaultValue={screen.numbers}/>;
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
