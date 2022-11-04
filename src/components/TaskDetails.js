import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext'
import { ThemeContext } from '../contexts/ThemeContext';


const TaskDetails = ({ task }) => {
    const {isLightTheme, light, dark} =  useContext(ThemeContext);
    const { removeTask } = useContext(TaskContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <li className="p-4 mx-auto my-4 rounded-lg hover:bg-red-500" style={{background: theme.ui, color: theme.syntax }} onClick={() => {removeTask(task.id)}}>
            <div className="font-bold text-xl">{task.title}</div>
            <div className="break-normal inline-block min-w-min">{task.description}</div>
        </li>
     );
}
 
export default TaskDetails;