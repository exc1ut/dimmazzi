import { useMutation, useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { sendSms } from './useSmsMutation'

export interface LoginType {
  is_new_user: boolean
  token: string
}

export interface LoginDto {
  phone: string
  code: string
}

export const verifyPhone = async ({ phone, code }: LoginDto) => {
  if (phone.length !== 12) {
    throw new Error('wrong phone format')
  }

  const { data } = await jwtAxios.post<LoginType>('/account/login/', {
    phone_number: phone,
    code,
  })

  return data
}

export const useLoginMutation = () => {
  return useMutation((props: LoginDto) => verifyPhone(props))
}
