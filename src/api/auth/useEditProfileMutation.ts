import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'

export interface IEditProfile {
  first_name?: string
  last_name?: string
}

export interface EditProfileResponse {
  detail: string
}

const editProfileQuery = async (dto: IEditProfile) => {
  const { data } = await jwtAxios.post<EditProfileResponse>(`/account/edit_profile/`, dto)
  return data
}

export const useEditProfile = () => {
  return useMutation((dto: IEditProfile) => editProfileQuery(dto))
}
