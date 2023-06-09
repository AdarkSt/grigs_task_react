import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../../store/features/todosSlice"
import _map from 'lodash/map'

export const ToDoList = () => {

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos.todos);
    
    const handleRemoveItem = (todoId) => {
        dispatch(removeTodo({id: todoId}))
    }

    return (
        <div>
            {_map(todos, todo => {
                return (
                    <div key={todo.id}>
                        <div>{todo.title}</div>
                        <div>{todo.description}</div>
                        <div>{todo.deadline}</div>
                        <div>
                            <button onClick={() => handleRemoveItem(todo.id)}>Remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}