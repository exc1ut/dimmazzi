import { Box, Button, Container, Divider, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { useTranslation } from 'react-i18next'
import { IAddress } from '../../api/address/IAddress.interface'
import { useAddressQuery } from '../../api/address/useAddressQuery'
import { useDeleteAdressMutation } from '../../api/address/useDeleteAdressMutation'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { Map } from '../../ui/Map'
import { PageMotion } from '../../ui/PageMotion'
import { AddressItem } from './AddressItem'

interface AddressProps {}

export const Address: React.FC<AddressProps> = ({}) => {
  const { t } = useTranslation()
  const { data, isLoading, isSuccess, refetch } = useAddressQuery()
  const deleteMutation = useDeleteAdressMutation()
  const mapModal = useModal(Map)

  const breadCrumb: BreadCrumb[] = [
    {
      label: t`Asosiy sahifa`,
      link: '/',
    },
    {
      label: t`Manzillar ro’yxati`,
      link: '/address',
    },
  ]

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  const handleAddAddress = async () => {
    const res = await mapModal.show()
    refetch()
  }

  const handleDeleteAddress = (id: number) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  const handleUpdateAddress = async (address: IAddress) => {
    const res = await mapModal.show({
      address,
    })
    refetch()
  }

  return (
    <PageMotion>
      <Box>
        <AppBreadCrumb items={breadCrumb} />
        <Container py={6} maxW={'container.sm'}>
          <Text fontWeight={700} fontSize={'3xl'}>{t`Manzillar ro’yxati`}</Text>
          <VStack divider={<Divider />} spacing={2} py={4} w="full">
            {data.results.map((v) => (
              <AddressItem
                onDelete={() => handleDeleteAddress(v.id)}
                onEdit={() => handleUpdateAddress(v)}
                name={v.place_name}
              />
            ))}
          </VStack>
          <Button
            onClick={handleAddAddress}
            my={6}
            w="full"
            size="lg"
            variant={'outline'}
          >{t`Yangi manzil qo'shish`}</Button>
        </Container>
      </Box>
    </PageMotion>
  )
}

export default Address
