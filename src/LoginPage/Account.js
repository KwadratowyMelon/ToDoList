import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import TasksPage from '../TasksPage/TasksPage'
import TaskContextProvider from '../contexts/TaskContext'

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  const getProfile = async () => {
    try {
      setLoading(true)
      const { user } = session

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()


      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div aria-live="polite">
      {loading ? (
        'Saving ...'
      ) : (
        <TaskContextProvider session={session}>
          <TasksPage/>
        </TaskContextProvider> 
      )}
      
    </div>
  )
}

export default Account