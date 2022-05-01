import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'

export interface EditPhoneNumber {
  phone_number: string
  code: string
}

export const useEditPhoneNumber = () => {
  return useMutation((data: EditPhoneNumber) => jwtAxios.post('/account/edit_phone_number/', data))
}
