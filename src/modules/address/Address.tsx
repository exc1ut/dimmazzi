import { Box, Button, Container, Divider, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { IAddress } from '../../api/address/IAddress.interface'
import { useAddressQuery } from '../../api/address/useAddressQuery'
import { useDeleteAdressMutation } from '../../api/address/useDeleteAdressMutation'
import { useLocation } from '../../stores/useLocation'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import Empty from '../../ui/features/Status/Empty'
import { Map } from '../../ui/Map'
import { PageMotion } from '../../ui/PageMotion'
import { MotionBox } from '../auth/auth/MotionBox'
import { AddressItem } from './AddressItem'
import { ConfirmDelete } from './ConfirmDelete'

interface AddressProps {}

const variants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const Address: React.FC<AddressProps> = ({}) => {
  const { t } = useTranslation()
  const { data, isLoading, isSuccess, refetch, isFetching } = useAddressQuery()
  const { setStore, reset } = useLocation()
  const deleteMutation = useDeleteAdressMutation()
  const mapModal = useModal(Map)
  const [isOpen, setIsOpen] = React.useState(false)
  const [id, setId] = React.useState<number | null>(null)
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
    const lastAddress = data.results.at(-1)
    if (lastAddress) {
      setStore({
        latitude: lastAddress.latitude,
        longitude: lastAddress.longitude,
        place_name: lastAddress.place_name,
      })
    } else {
      reset()
    }
    setId(id)
    setIsOpen(true)
  }
  const confirmDelete = () => {
    if (id)
      deleteMutation.mutate(id, {
        onSuccess: async () => {
          await refetch()
          setIsOpen(false)
        },
      })
  }

  const cancelDelete = () => {
    setId(null)
    setIsOpen(false)
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
          <VStack divider={<Divider />} spacing={2} py={6} w="full">
            {data.results.map((v, index) => (
              <motion.div
                style={{ width: '100%' }}
                variants={variants}
                transition={{ delay: index * 0.1 }}
              >
                <AddressItem
                  onDelete={() => handleDeleteAddress(v.id)}
                  onEdit={() => handleUpdateAddress(v)}
                  name={v.place_name}
                />
              </motion.div>
            ))}
            {!data.results.length && <Empty />}
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
      <ConfirmDelete
        isOpen={isOpen}
        confirmDelete={confirmDelete}
        cancelDelete={cancelDelete}
        handleClose={() => setId(null)}
        isFetching={deleteMutation.isLoading}
      />
    </PageMotion>
  )
}

export default Address
