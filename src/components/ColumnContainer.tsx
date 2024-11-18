import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../types"
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";
interface Props {
    column: Column;
    createTask: (columnId: Id) => void;
    updateTask: (id:Id,content:string) => void;
    deleteTask: (id:Id) => void;
    tasks: Task[];
}

function ColumnContainer(props: Props) {
    const { column,createTask, tasks , deleteTask, updateTask} = props;

    const [editMode, setEditMode] = useState(false);

    const taskIds = useMemo(() => {
        return tasks.map(task => task.id)}, [tasks]);

    const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
        useSortable({
            id: column.id,
            data: {
                type: "Column",
                column,
            },
            disabled: editMode
        });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging) {
        return <div ref={setNodeRef}
            style={style}
            className="
    bg-columnBackgroundColor
    opacity-60
    border-2
    border-white-500
    w-[350px]
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col
    "></div>
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="
    bg-columnBackgroundColor
    w-[350px]
    h-[500px]
    max-h-[500px]
    rounded-md
    flex
    flex-col
    "
        >
            {/* Column title */}
            <div
                {...attributes}
                {...listeners}
                onClick={() => {
                    setEditMode(true)
                }}
                className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4
        flex
        items-center
        justify-between
        ">
                <div className="flex gap-2">
                    <div className="
        flex
        justify-center
        items-center
        bg-columnBackgroundColor
        px-2
        py-1
        text-sm
        rounded-full
        ">
                        {column.id}
                    </div>
                    {!editMode && column.title}
                  
                </div>
              
            </div>

            <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
                <SortableContext items={taskIds}>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
                ))}
                </SortableContext>
            </div>
            <button
                className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4
            border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
                onClick={() => createTask(column.id)}>
                <PlusIcon />
                Add Task
            </button>
        </div>
    );
}

export default ColumnContainer