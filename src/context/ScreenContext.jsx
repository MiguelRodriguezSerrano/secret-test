import React, {useState, useContext, createContext} from 'react';

const ScreenContext = createContext(undefined);

const ScreenProvider = ({children}) => {
    const [numbers, setNumbers] = useState('');
    const [block, setBlock] = useState(false);
    const [attemps, setAttemps] = useState(1);
    return(
    <ScreenContext.Provider value={{numbers, setNumbers, block, setBlock, attemps, setAttemps}}>{children}</ScreenContext.Provider>
    )

}  

const useScreen = () => useContext(ScreenContext);

export {ScreenProvider, useScreen};