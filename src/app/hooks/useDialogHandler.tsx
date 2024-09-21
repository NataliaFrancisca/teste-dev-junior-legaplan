import { useEffect, useRef } from "react"

export const useDialogHandler = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(dialogRef.current){
            dialogRef.current.showModal();
        }
    },[]);

    return { dialogRef }
}