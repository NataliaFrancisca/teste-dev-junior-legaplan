import { FormEvent, useContext } from "react";

import { DialogDeleteTaskContext } from "@/app/context/DialogDeleteTaskContext";
import { useDialogHandler } from "../../hooks/useDialogHandler";

import Dialog from "../Dialog/Dialog";

const DialogDeleteTask = (props: {actionDeleteTask: () => Promise<void>}) => {
    const { dialogRef } = useDialogHandler();
    const { setVisibility } = useContext(DialogDeleteTaskContext);
    
    const onSubmit = async(e: FormEvent) => {
        e.preventDefault();
        await props.actionDeleteTask();
        setVisibility(false);
    }

    return(
        <Dialog 
            onSubmit={onSubmit}
            ref={dialogRef}
            legend="Deletar Tarefa"
            label="Tem certeza que deseja deletar essa tarefa?"
            buttons={{
                cancelDialog: {
                    message: "Cancelar",
                    action: () => setVisibility(false)
                },
                submitDialog: {
                    color: "btn__red",
                    message: "Deletar"
                }
            }}
        />
    )
}

export default DialogDeleteTask;