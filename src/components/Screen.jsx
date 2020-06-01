import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useScreen } from '../context/ScreenContext'
import axios from 'axios';

const Screen = () => {
   const screen = useScreen();
   const [password, setPassword] = useState('');
   const fetchPassword = () => {
       axios.get('http://localhost:3001/password')
      .then(res => setPassword(res.data.password))
      .catch(error => console.log(error)
      ) 
      
   }
   const checkPassword = () => {
      if(screen.numbers === password){
         screen.setColors('success')
         clearScreen('Sold!');
         window.location = "http://migers.digital";
         
         
      }else {
         clearScreen('Wrong');
         screen.setAttemps(screen.attemps + 1);
         screen.setColors('wrong');

         
      }
   }
   useEffect(() => {
      fetchPassword();
   }, [])

   useEffect(() => {
      if( screen.numbers.length === 4 ){
         checkPassword();
         
      }
      
   }, [screen.numbers]);

   const clearScreen = (message) => {;
      
      screen.setBlock(true)
      screen.setNumbers(message)
      setTimeout(() => {
         screen.setNumbers('')

         if(screen.attemps < 3) {
            screen.setBlock(false)
         }
         screen.setColors('normal') 
         
         
      }, 1000);
   }
      
   const replaceNumbersToPassword = (numbers) => {
     
      if(numbers.length <= 1){
         return numbers
      }
      
      if(numbers === 'Wrong') return numbers
      if(numbers === 'Sold!') return numbers
      if(numbers === 'Blocked') return numbers
     
      const chars = numbers.split('');
      const pass = chars.slice(0, -1);
      console.log(numbers.charAt(numbers.length -1));
       
      return pass.map(number => number.replace(number, '*')).join('') + numbers.charAt(numbers.length -1)
   }

   return <Input disabled maxLength="4" defaultValue={replaceNumbersToPassword(screen.numbers)} />;
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
