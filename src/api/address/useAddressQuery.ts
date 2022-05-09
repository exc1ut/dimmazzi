import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { IPagination } from '../IPagination.interface'
import { queryKeys } from '../queryKeys'
import { IAddress } from './IAddress.interface'

const fetcher = async () => {
  const { data } = await jwtAxios.get<IPagination<IAddress>>('/account/address/')
  return data
}

export const useAddressQuery = () => {
  return useQuery(queryKeys.addressList, fetcher)
}
