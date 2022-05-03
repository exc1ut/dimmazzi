import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { useAuth } from '../../stores/useAuth'
import { queryKeys } from '../queryKeys'

export interface IMe {
  phone_number: string
  first_name: string
  last_name: string
}

export const fetchCurrentuser = async () => {
  const { data } = await jwtAxios.get<IMe>('/account/me/')
  return data
}

export const useCurrentUser = () => {
  const { isAuthenticated } = useAuth()
  return useQuery([queryKeys.currentUser], fetchCurrentuser, {
    enabled: isAuthenticated,
  })
}
