import React, {useState, useContext, createContext} from 'react';

const ScreenContext = createContext(undefined);

const ScreenProvider = ({children}) => {
    const [numbers, setNumbers] = useState('');
    const [block, setBlock] = useState(false);
    const [colors, setColors] = useState('normal');
    const [attemps, setAttemps] = useState(1);

    const theme = {
        wrong: {
            lightShadow: '#f6e3e3',
            darkShadow: '#544244'
        },
        normal: {
            lightShadow: '#ffffff',
            darkShadow: '#c8c9cc'
        },
        blocked: {
            lightShadow: '#fffee3',
            darkShadow: '#302e0c'
        },
        success: {
            lightShadow: '#e5f2e5',
            darkShadow: '#002600'
        }
    }

    return(
    <ScreenContext.Provider value={{numbers, setNumbers, block, setBlock, attemps, setAttemps, theme, colors, setColors}}>{children}</ScreenContext.Provider>
    )

}  

const useScreen = () => useContext(ScreenContext);

export {ScreenProvider, useScreen};