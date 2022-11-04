import React, { useContext, useState } from 'react';
import {TaskContext} from '../contexts/TaskContext'

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, description);
        setTitle('');
        setDescription('');
    }
    return ( 
        <form className="mx-8 my-3 p-3" onSubmit={handleSubmit}>
            <input className="my-1" type="text" placeholder="task topic" value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <textarea className="input my-1 h-20" type="text" placeholder="task description..." value={description}
                onChange={(e) => setDescription(e.target.value)} required />
            <input className="my-1 w-auto" type="submit" value="add task" />
        </form>
     );
}
 
export default TaskForm;