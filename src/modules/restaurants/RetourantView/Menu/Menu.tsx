import { Box, HStack, Button, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { useRouter } from 'next/router'
import { useRestourantDetail } from '../../../../api/restourant/useRestourantDetail'
import { Loader } from '../../../../ui/AppComponents/Loader'

interface MenuProps {}

export const Menu: React.FC<MenuProps> = ({}) => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isSuccess } = useRestourantDetail(+id!)

  if (isLoading) return <Loader />
  if (!isSuccess || data.categories.length === 0) return null

  const handleClick = (id: number) => {
    document.getElementById(`${id}`)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Box>
      <Text fontWeight={700} fontSize={'3xl'}>{t`Menyu`}</Text>
      <Box
        overflow={'scroll'}
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
        }}
      >
        <HStack minWidth={'min-content'} spacing={3} pt={6}>
          {data.categories.map((v) => (
            <Button
              borderColor="premium_red.900"
              color="premium_red.900"
              borderWidth={'2px'}
              fontWeight={500}
              variant={'outline'}
              onClick={() => handleClick(v.id)}
            >
              {v.title}
            </Button>
          ))}
        </HStack>
      </Box>
    </Box>
  )
}
