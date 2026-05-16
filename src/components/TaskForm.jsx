import { useState } from 'react'

function TaskForm({addTask}){
    const [text, setText] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        if (text!=""){
            addTask(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Введите задачу" 
            value = {text}
            onChange={(e) => setText(e.target.value)}
            className='enterTask'
            />
            <button type="submit" className='addTask'>Добавить</button>
        </form>
    )
}

export default TaskForm