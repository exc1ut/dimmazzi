import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { IAddress } from './IAddress.interface'

export const useAddAdressMutation = () => {
  return useMutation((data: Omit<IAddress, 'id'>) => jwtAxios.post('/account/address/', data))
}
