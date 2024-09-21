
import { saveTasks } from "@/app/storage/tasks";
import { ETaskType, TStorageTasks, TTask } from "@/app/utils/types";
import { useEffect, useState } from "react"

export const useTasksHandler = (storageTasks: TStorageTasks) => {
    const [uncheckTasks, setUncheckTasks] = useState<TTask[]>([]);
    const [checkedTasks, setCheckedTasks] = useState<TTask[]>([]);

    useEffect(() => {
        setUncheckTasks([...storageTasks.unchecked]);
        setCheckedTasks([...storageTasks.checked]);
    },[storageTasks]);

    const onCheck = async(task: TTask) => {
        await saveTasks(task, ETaskType.CHECKED);
    }

    const onUncheck = async(task: TTask) => {
        await saveTasks(task, ETaskType.UNCHECKED);
    }

    return { uncheckTasks, checkedTasks, onCheck, onUncheck }
}