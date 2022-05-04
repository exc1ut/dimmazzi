import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { OrderListItem } from '../../ui/cards/OrderListItem'
import { TabButton } from '../../ui/features/TabButton'
import { PageMotion } from '../../ui/PageMotion'

interface OrderListProps {}

export default ({}) => {
  const { t } = useTranslation()
  const [tabState, setTabState] = useState<'rigth' | 'left'>('left')
  const router = useRouter()

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
          {new Array(4).fill(null).map((v) => (
            <Box w="full" cursor={'pointer'} onClick={() => router.push('/order/123432142')}>
              <OrderListItem
                date={new Date().toLocaleDateString()}
                orderId={123432142}
                price={23423}
                status={'finished'}
              />
            </Box>
          ))}
        </VStack>
      </Container>
    </PageMotion>
  )
}
