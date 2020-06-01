import React, {useState, useContext, createContext} from 'react';

const ScreenContext = createContext(undefined);

const ScreenProvider = ({children}) => {
    const [numbers, setNumbers] = useState('');
    const [block, setBlock] = useState(false);
    
    return(
    <ScreenContext.Provider value={{numbers, setNumbers, block, setBlock}}>{children}</ScreenContext.Provider>
    )

}  

const useScreen = () => useContext(ScreenContext);

export {ScreenProvider, useScreen};