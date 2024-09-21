'use client';
import { createContext, ReactNode, useState } from "react";
import { TTask } from "../utils/types";

interface DialogDeleteTaskContextType {
    taskToDelete: TTask | null;
    visibility: boolean;
    setVisibility: (isOpen: boolean) => void;
    setTaskToDelete: (value: TTask | null) => void;
}

export const DialogDeleteTaskContext = createContext<DialogDeleteTaskContextType>({
    taskToDelete: null,
    visibility: false,
    setVisibility: () => {},
    setTaskToDelete: () => {}
});

export const DialogDeleteTaskContextProvider = ({children}: {children: ReactNode}) => {
    const [taskToDelete, setTaskToDelete] = useState<TTask | null>(null);
    const [visibility, setVisibility] = useState(false);
    
    return(
        <DialogDeleteTaskContext.Provider value={{taskToDelete, visibility, setVisibility, setTaskToDelete}}>
            {children}
        </DialogDeleteTaskContext.Provider>
    )
}