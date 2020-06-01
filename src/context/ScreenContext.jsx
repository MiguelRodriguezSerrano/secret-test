import React, {useState, useContext, createContext} from 'react';

const ScreenContext = createContext(undefined);

const ScreenProvider = ({children}) => {
    const [numbers, setNumbers] = useState('');
    return(
    <ScreenContext.Provider value={{numbers, setNumbers}}>{children}</ScreenContext.Provider>
    )

}  

const useScreen = () => useContext(ScreenContext);

export {ScreenProvider, useScreen};