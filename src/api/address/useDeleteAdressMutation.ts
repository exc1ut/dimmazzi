import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'

export const useDeleteAdressMutation = () => {
  return useMutation((addressId: number) => jwtAxios.delete(`/account/address/${addressId}/`))
}
