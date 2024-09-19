import { saveUserName } from "@/app/storage/storage";
import { FormEvent, useEffect, useRef, useState } from "react"

export const useDialogFormHandler = () => {
    const [userName, setUserName] = useState<null | string>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const onSubmitForm = async(e: FormEvent) => {
        e.preventDefault();

        if(userName){
            await saveUserName(userName);
        }
    }

    useEffect(() => {
        if(dialogRef.current){
            dialogRef.current.showModal();
        }
    },[]);

    return { dialogRef, setUserName, onSubmitForm }
}