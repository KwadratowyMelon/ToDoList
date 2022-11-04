import React, { useState, createContext, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid'
import { supabase } from '../supabaseClient'

export const TaskContext = createContext();

const TaskContextProvider = (props, session) => {
  const [fetchError, setFetchError] = useState(null)
  const { user } = session
  const [tasks, setTasks] = useState([], () => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
    });
  const addTask = (title, description) => {
    setTasks([...tasks, {title, description, id: uuidv1()}]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  useEffect(() => {
    const fetchTasks = async () => {
      let { data, error } = await supabase
      .from('tasks')
      .select('title','description')
      .eq('user', user.id)
      .single()

      if (error) {
        setFetchError(error)
        console.log(fetchError)
      }
      if (data) {
        setTasks([...tasks, data])
      }
    }

    fetchTasks()
  }, [tasks])

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
 
export default TaskContextProvider;