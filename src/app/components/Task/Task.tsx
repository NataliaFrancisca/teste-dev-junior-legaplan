import Image from "next/image";

import { TTaskProps } from "@/app/utils/types";
import { useTaskHandler } from "./useTaskHandler";

import DialogDeleteTask from "../Dialog/DialogDeleteTask";

const Task = (props: TTaskProps) => {
    const { checked, task, actionCheck } = props;
    const { visibility, actionDeleteTask, showDialogDeleteTask } = useTaskHandler(task, checked);
  
    return(
        <article className="component__task">     
            {visibility && <DialogDeleteTask actionDeleteTask={actionDeleteTask} />}

            <div className="custom__input-checkbox">
                <input 
                    type="checkbox" 
                    value={task.value}
                    id={`checkbox-${task.value}`} 
                    checked={checked} 
                    onChange={() => actionCheck(task)} 
                />

                <label className="input__task" htmlFor={`checkbox-${task.value}`} >
                    {task.value}
                </label>
            </div>
            
            <Image 
                src="trash.svg" 
                alt="trash icon" 
                height={24} 
                width={24} 
                onClick={showDialogDeleteTask} 
            />
        </article>
    )
}

export default Task;