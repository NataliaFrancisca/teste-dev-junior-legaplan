'use client';
import { createContext, ReactNode, useState } from "react";

interface DialogFormContextType {
    visibility: boolean;
    setVisibility: (isOpen: boolean) => void;
}

export const DialogFormContext = createContext<DialogFormContextType>({
    visibility: false,
    setVisibility: () => {}
});

export const DialogFormContextProvider = ({children}: {children: ReactNode}) => {
    const [visibility, setVisibility] = useState(false);
    
    return(
        <DialogFormContext.Provider value={{visibility, setVisibility}}>
            {children}
        </DialogFormContext.Provider>
    )
}