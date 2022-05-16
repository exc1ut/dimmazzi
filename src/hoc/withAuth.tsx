import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../stores/useAuth'

export const withAuth = (Component: React.ComponentType) => () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/')
    }
  }, [])

  return <Component />
}
