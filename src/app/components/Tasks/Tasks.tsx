'use client';
import { Suspense, useContext } from "react";

import { useTasksHandler } from "./useTasksHandler";
import { DialogFormContext } from "@/app/context/DialogFormContext";
import { TStorageTasks } from "@/app/utils/types";

import DialogCreateTask from "../Dialog/DialogCreateTask";
import Loader from "../Loader/Loader";
import React from "react";

const Task = React.lazy(() => import("@/app/components/Task/Task"));

const Tasks = (props: {tasks: TStorageTasks}) => {

    const { uncheckTasks, checkedTasks, onUncheck, onCheck } = useTasksHandler(props.tasks);
    const { visibility, setVisibility } = useContext(DialogFormContext);

    return(
        <section id="component__tasks">

            {visibility && <DialogCreateTask />}

            <Suspense fallback={<Loader />}>
                <div id="container__group-tasks">
                    <div className="container__tasks">
                        <span>Suas tarefas de hoje</span>

                        {uncheckTasks.length === 0 && <p>Nenhuma tarefa para hoje</p>}

                        {uncheckTasks.map((task) => (
                            <Task 
                                task={task} 
                                key={task.id + 1} 
                                actionCheck={onCheck} 
                                checked={false} 
                            />
                        ))}
                    </div>

                    <div className="container__tasks">
                        <span>Tarefas finalizadas</span>

                        {checkedTasks.map((task) => (
                            <Task 
                                task={task} 
                                key={task.id + 1} 
                                actionCheck={onUncheck} 
                                checked={true} 
                            />
                        ))}
                    </div>
                </div>
            </Suspense>

            <button 
                className="btn__blue" 
                onClick={() => setVisibility(true)}>
                    Adicionar nova tarefa
            </button>
        </section>
    )
}


export default Tasks;