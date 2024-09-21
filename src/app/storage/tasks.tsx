'use server';
import { cookies } from "next/headers";
import { ETaskType, TStorageTasks, TTask } from "../utils/types";

const ONE_YEAR = 365 * 24 * 60 * 60;
const STORAGE_TASKS = "tasks";

export async function getTasks(){
    const cookie = cookies().get(STORAGE_TASKS);

    if(cookie && cookie.value){
        return JSON.parse(cookie.value) as TStorageTasks;
    }

    return null;
}

export async function saveTasks(task: TTask, type: ETaskType){
    const tasks = await getTasks();

    if(tasks){
        let updated: TStorageTasks = {
            checked: [],
            unchecked: []
        };

        if(type == ETaskType.UNCHECKED){
            const unchecked = [...tasks.unchecked, task];
            const checked = tasks.checked.filter((taskfilter) => taskfilter.id !== task.id);

            updated = {
                checked: [...checked],
                unchecked: [...unchecked]
            }
        }

        if(type == ETaskType.CHECKED){
            const unchecked = tasks.unchecked.filter((taskfilter) => taskfilter.id !== task.id);
            const checked = [...tasks.checked, task];

            updated = {
                checked: [...checked],
                unchecked: [...unchecked]
            }
        }

        cookies().set(STORAGE_TASKS, JSON.stringify(updated), {maxAge: ONE_YEAR});
    }
}

export async function deleteTask(task: TTask, type: ETaskType){
    const tasks = await getTasks();

    if(tasks){
        const updated = {
            checked: [...tasks.checked],
            unchecked: [...tasks.unchecked]
        }

        if(type === ETaskType.UNCHECKED){
            const updatedUnchecked = tasks.unchecked.filter((taskFilter) => taskFilter.id !== task.id);
            updated.unchecked = [...updatedUnchecked]
        }
      
        if(type === ETaskType.CHECKED){
            const updatedChecked = tasks.checked.filter((taskFilter) => taskFilter.id !== task.id);
            updated.checked = [...updatedChecked];
        }

        cookies().set(STORAGE_TASKS, JSON.stringify(updated), {maxAge: ONE_YEAR});
    }
}