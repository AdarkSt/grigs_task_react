import { ToDoForm } from "../ToDoForm"
import { ToDoList } from "../ToDoList"
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/features/todosSlice"
import {v4 as uuidV4} from 'uuid'

export const ToDo = () => {

    const dispatch = useDispatch()

    const handleAddToDo = (todo) => {
        
        dispatch(addTodo({...todo, id: uuidV4()}))
    }

    return (
        <div>
            <ToDoForm onSubmit={handleAddToDo} />
            <ToDoList />
        </div>
    )
}