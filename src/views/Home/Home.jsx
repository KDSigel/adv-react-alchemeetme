import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'
import { useUser } from '../../Context/UserContext'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useUser()

  console.log(user)

  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  if (loading) return <h1>Loading...</h1>
  return <Profile />
}

export default Home
