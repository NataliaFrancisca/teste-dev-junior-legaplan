import { FormEvent, RefObject } from "react"

export type TTask = {
    id: number,
    value: string
}

export type TStorageTasks = {
    checked: TTask[],
    unchecked: TTask[]
}

export enum ETaskType{
    CHECKED,
    UNCHECKED
}
  
export type TDialogInput = {
    placeholder: string,
    required: boolean,
    max: number,
    min: number,
    action: (value: string) => void
}

export type TButtons = {
    cancelDialog?: {
        message: string,
        action: () => void
    },

    submitDialog: {
        message: string,
        color: string
    }
}

export type TDialogForm = {
    ref: RefObject<HTMLDialogElement>,
    input?: TDialogInput,
    legend: string,
    label: string,
    onSubmit: (e: FormEvent) => void,
    buttons: TButtons
}

export type TTaskProps = {
    task: TTask,
    checked: boolean,
    actionCheck: (task: TTask) => void
}
