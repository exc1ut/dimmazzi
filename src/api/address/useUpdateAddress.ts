import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { IAddress } from './IAddress.interface'

export const useUpdateAdressMutation = () => {
  return useMutation(({ id, ...rest }: IAddress) => jwtAxios.put(`/account/address/${id}/`, rest))
}
