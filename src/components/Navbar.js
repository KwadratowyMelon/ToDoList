import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TaskContext } from '../contexts/TaskContext'


const Navbar = () => {
    const {tasks} = useContext(TaskContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <nav className="mx-2 my-4 rounded-md" style={{ background: theme.ui, color: theme.syntax }}>
            <h1 className="text-bold text-3xl ">Task List</h1>
            <p>currently you have {tasks.length} tasks on Your task list</p>
        </nav>
    );
}

 
export default Navbar;