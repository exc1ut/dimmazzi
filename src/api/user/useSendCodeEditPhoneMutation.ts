import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'

export interface SendCodeEditNumber {
  phone_number: string
}

export const useSendCodeEditPhoneMutation = () => {
  return useMutation((data: SendCodeEditNumber) =>
    jwtAxios.post('/sms/send_code_for_edit_phone_number/', data)
  )
}
