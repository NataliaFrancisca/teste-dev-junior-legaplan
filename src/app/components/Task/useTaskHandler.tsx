import { DialogDeleteTaskContext } from "@/app/context/DialogDeleteTaskContext";
import { deleteTask } from "@/app/storage/tasks";
import { ETaskType, TTask } from "@/app/utils/types";
import { useContext } from "react";

export const useTaskHandler = (task: TTask, checked: boolean) => {
    const { taskToDelete, visibility, setVisibility, setTaskToDelete } = useContext(DialogDeleteTaskContext);

    const actionDeleteTask = async() => {
        if(!taskToDelete) return;
        
        const TYPE = checked ? ETaskType.CHECKED : ETaskType.UNCHECKED;
        await deleteTask(taskToDelete, TYPE);
    }

    const showDialogDeleteTask = () => { 
        setVisibility(true); 
        setTaskToDelete(task);
    }
    
    return { visibility, actionDeleteTask, showDialogDeleteTask }
}