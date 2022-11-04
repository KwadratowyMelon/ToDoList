import '../index.css';

import { supabase } from '../supabaseClient'

import Navbar from '../components/Navbar'
import TaskList from '../components/TaskList'
import ThemeContextProvider from '../contexts/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'
import TaskContextProvider from '../contexts/TaskContext'
import TaskForm from '../components/TaskForm'


export default function TasksPage() {

  return(
    <div>
      <div className="w-full flex mb-5 h-15 bg-gray-500 rounded-md">
          <p className="ml-1 py-3 font-bold">
            Hi, user. Below is your task list, add new or delete finished tasks.
          </p>
          <button
            type="button"
            className="button m-2 w-15 ml-auto"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      <div className="max-w-full p-6 my-5 mx-24 text-center">
        <ThemeContextProvider>
          {/* <TaskContextProvider> */}
            <Navbar/>
            <TaskList/>
            <TaskForm/>
          {/* </TaskContextProvider> */}
          <ThemeToggle/> 
        </ThemeContextProvider>
      </div>
    </div>

  ); 
}