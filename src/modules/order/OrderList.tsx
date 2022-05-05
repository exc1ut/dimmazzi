import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useOrderListQuery } from '../../api/order/useOrderLIstQuery'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { OrderListItem } from '../../ui/cards/OrderListItem'
import { TabButton } from '../../ui/features/TabButton'
import { PageMotion } from '../../ui/PageMotion'

interface OrderListProps {}

export default ({}) => {
  const { t } = useTranslation()
  const [tabState, setTabState] = useState<'rigth' | 'left'>('left')
  const router = useRouter()
  const { data, isLoading, isSuccess } = useOrderListQuery(
    tabState === 'left' ? 'delivery' : 'pick_up'
  )

  const breadCrumb: BreadCrumb[] = [
    {
      label: t`Asosiy sahifa`,
      link: '/',
    },
    {
      label: t`Buyurtma`,
      link: '/order',
    },
  ]

  return (
    <PageMotion>
      <Box>
        <AppBreadCrumb items={breadCrumb} />
      </Box>
      <Container maxW={'container.sm'}>
        <VStack py={6} spacing={6} alignItems={'flex-start'} w="full">
          <Text fontWeight={700} fontSize={'3xl'}>
            {t`Buyurtmalar`}
          </Text>
          <TabButton
            active={tabState}
            leftHandle={() => setTabState('left')}
            leftTab={t`Yetkazib berish`}
            rightHandle={() => setTabState('rigth')}
            rightTab={t`Olib ketish`}
          />
          {isLoading && <AppLoader />}
          {data &&
            data.results.map((v) => (
              <Box
                as={motion.div}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                w="full"
                cursor={'pointer'}
                onClick={() => router.push(`/order/${v.id}`)}
              >
                <OrderListItem
                  date={new Date(v.created_at).toLocaleDateString()}
                  orderId={v.id}
                  price={+v.total_price}
                  status={v.status === 'pending' ? 'pending' : 'finished'}
                />
              </Box>
            ))}
        </VStack>
      </Container>
    </PageMotion>
  )
}
