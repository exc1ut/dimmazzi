import { Avatar, Button, Center, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Cart } from './Cart'

interface MobileDrawerContentProps {}

export const MobileDrawerContent: React.FC<MobileDrawerContentProps> = ({}) => {
  const { t } = useTranslation()

  const menus = useMemo(
    () => [
      {
        iconName: 'person',
        name: t`Profile`,
      },
      {
        iconName: 'cart',
        name: t`Cart`,
      },
      {
        iconName: 'task',
        name: t`Product history`,
      },
      {
        iconName: 'location',
        name: t`Location list`,
      },
      {
        iconName: 'heart',
        name: t`Favorite restorans`,
      },
      {
        iconName: 'logout',
        name: t`Log out`,
      },
    ],
    []
  )

  const languages = useMemo(
    () => [
      {
        name: 'UZ',
        isActive: true,
      },
      {
        name: 'РУ',
        isActive: false,
      },
      {
        name: 'УЗ',
        isActive: false,
      },
    ],
    []
  )

  return (
    <VStack spacing={2}>
      <Center py={8} w={'full'}>
        <VStack spacing={4}>
          <Avatar size={'xl'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Text fontSize={'2xl'} fontWeight={500}>
            Muhammaddiyor
          </Text>
          <HStack spacing={2}>
            <Image src="/assets/images/location.svg" width={30} height={30} />
            {/* <Text color={'dark.40'} fontSize={'md'}>{t`No location has entered`}</Text> */}
            <Text
              color={'dark.90'}
              fontSize={'md'}
              fontWeight={400}
            >{t`Urganch shahar, Mustaqillik ko‘cha, 6`}</Text>
          </HStack>
        </VStack>
      </Center>
      <Divider />

      <Divider />

      <VStack w={'full'} p={2} spacing={3}>
        {menus.map((menu) => (
          <>
            <Button
              leftIcon={
                <Image width={30} height={30} src={`/assets/images/${menu.iconName}.svg`} />
              }
              isFullWidth
              justifyContent={'left'}
              variant="ghost"
              size={'lg'}
            >
              {menu.name}
            </Button>
            <Divider />
          </>
        ))}
      </VStack>
      <HStack py={4}>
        {languages.map((language) => (
          <Button colorScheme={language.isActive ? 'red' : undefined}>{language.name}</Button>
        ))}
      </HStack>
    </VStack>
  )
}
