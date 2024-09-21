'use client';
import { FormEvent, useState } from "react";

import { useDialogHandler } from "../../hooks/useDialogHandler";
import { initializeStorage, setUserName } from "@/app/storage/storage";

import Dialog from "../Dialog/Dialog";

const DialogUserName = () => {
    const { dialogRef } = useDialogHandler();
    const [name, setName] = useState<null | string>(null);

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault();

        if(name){
            await setUserName(name);
            await initializeStorage();
        }
    }

    return(
        <Dialog 
            ref={dialogRef}
            onSubmit={onSubmit}
            label="Digite seu nome:"
            legend="Para prosseguir, digite seu nome"
            input={{
                required: true,
                placeholder: "Digite",
                max: 10,
                min: 2,
                action: setName
            }}

            buttons={{
                submitDialog: {
                    message: "Iniciar",
                    color: "btn__blue"
                }
            }}
        />
    )
};

export default DialogUserName;