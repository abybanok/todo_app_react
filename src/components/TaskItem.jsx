function TaskItem({task, deleteTask}) {
    return(
        <div className="rowTask">
            {task.title}
            <button onClick={() => deleteTask(task.id)} className="deleteTask">Удалить</button>
        </div>
    );
}

export default TaskItem