import jwtAxios from '../../services/jwtAxios'

type SmsResponse = {
  detail: string
}

export const sendSms = async (phone: string) => {
  if (phone.length !== 12) {
    throw new Error('wrong phone format')
  }

  const { data } = await jwtAxios.post<SmsResponse>('/sms/send_code/', {
    phone_number: phone,
  })

  return data
}
