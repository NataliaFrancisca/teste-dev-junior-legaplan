import { DialogFormContext } from "@/app/context/DialogFormContext";
import { saveUserName } from "@/app/storage/storage";
import { FormEvent, useContext, useEffect, useRef, useState } from "react"

export const useDialogFormHandler = () => {
    const [userName, setUserName] = useState<null | string>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { setIsOpen } = useContext(DialogFormContext);

    const onSubmitForm = async(e: FormEvent) => {
        e.preventDefault();

        if(userName){
            await saveUserName(userName);
        }

        setIsOpen(false);
    }

    useEffect(() => {
        if(dialogRef.current){
            dialogRef.current.showModal();
        }
    },[]);

    return { dialogRef, setUserName, onSubmitForm }
}