import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';


const TaskList = () => {
    const {isLightTheme, light, dark} =  useContext(ThemeContext);
    const { tasks } = useContext(TaskContext);
    const theme = isLightTheme ? light : dark;
    return tasks.length ? ( 
        <div className="p-7 mb-5 rounded-xl" style={{color: theme.syntax, background: theme.bg}}>
            <ul className="p-7 list-none">
                {tasks.map(task => {
                    return (
                        <TaskDetails task={task} key={task.id}/>
                    ) 
                })}
            </ul>
        </div>
     ): (
        <div className="p-7 m-2 rounded-md" style={{background: theme.ui }}>
            nothing to do :(
        </div>
    );
}
 

 
export default TaskList;