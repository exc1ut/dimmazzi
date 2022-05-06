import { EditProfileModal } from '@/modules/profile'
import { useAuth } from '@/stores/useAuth'
import { Avatar, Button, Center, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Cart } from './Cart'

interface MobileDrawerContentProps { }

export const MobileDrawerContent: React.FC<MobileDrawerContentProps> = ({ }) => {
  const { t } = useTranslation()
  const { push } = useRouter()
  const { logout, isAuthenticated } = useAuth()
  const editProfileModal = useModal(EditProfileModal)
  const menus = useMemo(
    () => [
      {
        iconName: 'person',
        name: t`Profile`,
      },
      {
        iconName: 'cart',
        name: t`Cart`,
        link: '/cart'
      },
      {
        iconName: 'task',
        name: t`Product history`,
        link: '/order'
      },
      {
        iconName: 'location',
        name: t`Location list`,
        link: '/address'
      },
      {
        iconName: 'heart',
        name: t`Favorite restorans`,
        link: '/restaurant/favourites/'
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
      {isAuthenticated ? <Center py={8} w={'full'}>
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
      </Center> : <Image src="/assets/images/logo.svg" width={100} height={40} />}
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
              onClick={() => {
                if (menu.link) {
                  push(menu.link)
                }
                else if (menu.name === t`Log out`) {
                  logout()
                  console.log('logout');

                }
                else if (menu.name === t`Profile`) {
                  editProfileModal.show()
                }
              }}
            >
              {menu.name}
            </Button>
            <Divider />
          </>
        ))}
      </VStack>
      <HStack py={4}>
        {languages.map((language) => (
          <Button colorScheme="premium_red" variant={language.isActive ? 'solid' : 'outline'}>
            {language.name}
          </Button>
        ))}
      </HStack>
    </VStack>
  )
}
