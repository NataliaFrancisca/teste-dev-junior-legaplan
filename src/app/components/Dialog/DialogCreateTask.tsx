'use client';
import { FormEvent, useContext, useState } from "react";

import { useDialogHandler } from "../../hooks/useDialogHandler";
import { DialogFormContext } from "@/app/context/DialogFormContext";

import Dialog from "../Dialog/Dialog";
import { saveTasks } from "@/app/storage/tasks";
import { ETaskType } from "@/app/utils/types";

const DialogCreateTask = () => {
    const { dialogRef } = useDialogHandler();
    const { setVisibility } = useContext(DialogFormContext);

    const [task, setTask] = useState<null | string>(null);

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault();

        if(task){
            const new_task = {   
                id: Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100),
                value: task
            }

            await saveTasks(new_task, ETaskType.UNCHECKED);
        }

        setVisibility(false);
    }
 
    return(
        <Dialog 
            ref={dialogRef}
            onSubmit={onSubmit}
            label="Título:"
            legend="Nova tarefa"
            input={{
                required: false,
                placeholder: "Digite",
                max: 50,
                min: 2,
                action: setTask
            }}

            buttons={{
                cancelDialog: {
                    message: "Cancelar",
                    action: () => setVisibility(false)
                },
                submitDialog: {
                    message: "Adicionar",
                    color: "btn__blue"
                }
            }}
        />
    )
}

export default DialogCreateTask;