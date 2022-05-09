import { useEffect } from 'react'
import { fetchCurrentuser, useCurrentUser } from '../api/user/useCurrentUser'
import { useAuth } from '../stores/useAuth'

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { setAuth } = useAuth()

  const init = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      const data = await fetchCurrentuser()
      if (data) {
        setAuth(true)
      }
    }
  }

  useEffect(() => {
    init()
  }, [])

  return <>{children}</>
}
