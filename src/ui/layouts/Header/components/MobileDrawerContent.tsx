import { EditProfileModal } from '@/modules/profile'
import { useAuth } from '@/stores/useAuth'
import { Avatar, Box, Button, Center, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from 'react-query'
import { getLanguageProps } from '../../../../utils/language'
import { Cart } from './Cart'

interface MobileDrawerContentProps {
  handleAuth: () => void
  onClose: () => void
}

export const MobileDrawerContent: React.FC<MobileDrawerContentProps> = ({
  handleAuth,
  onClose,
}) => {
  const { t, i18n } = useTranslation()
  const { push } = useRouter()
  const { logout, isAuthenticated } = useAuth()
  const editProfileModal = useModal(EditProfileModal)
  const unAuthMenu = useMemo(() => {
    return [{ iconName: 'person', name: t`Login` }]
  }, [])

  const language = useMemo(getLanguageProps, [i18n.language])
  const queryClient = useQueryClient()

  const handleChangeLanguage = (name: string) => {
    i18n.changeLanguage(name)
    queryClient.invalidateQueries()
  }

  const menus = useMemo(
    () => [
      {
        iconName: 'person',
        name: t`Profile`,
      },
      {
        iconName: 'cart',
        name: t`Cart`,
        link: '/cart',
      },
      {
        iconName: 'task',
        name: t`Product history`,
        link: '/order',
      },
      {
        iconName: 'location',
        name: t`Location list`,
        link: '/address',
      },
      {
        iconName: 'heart',
        name: t`Favorite restorans`,
        link: '/restaurant/favourites/',
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
        isActive: i18n.language === 'uz',
        key: 'uz',
      },
      {
        name: 'РУ',
        isActive: i18n.language === 'ru',
        key: 'ru',
      },
      {
        name: 'УЗ',
        isActive: i18n.language === 'cr',
        key: 'cr',
      },
    ],
    [i18n.language]
  )

  const handleClick = async (menu: any) => {
    if (menu.link) {
      push(menu.link)
      onClose()
    } else if (menu.name === t`Log out`) {
      logout()
      onClose()
      console.log('logout')
    } else if (menu.name === t`Profile`) {
      await editProfileModal.show()
      onClose()
    }
  }
  //  let temp = ( <Center py={8} w={'full'}>
  //   <VStack spacing={4}>
  //     <Avatar size={'xl'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
  //     <Text fontSize={'2xl'} fontWeight={500}>
  //       Muhammaddiyor
  //     </Text>
  //     <HStack spacing={2}>
  //       <Image src="/assets/images/location.svg" width={30} height={30} />
  //       {/* <Text color={'dark.40'} fontSize={'md'}>{t`No location has entered`}</Text> */}
  //       <Text
  //         color={'dark.90'}
  //         fontSize={'md'}
  //         fontWeight={400}
  //       >{t`Urganch shahar, Mustaqillik ko‘cha, 6`}</Text>
  //     </HStack>
  //   </VStack>
  // </Center>)
  return (
    <VStack spacing={2} align="start">
      {
        <Box marginLeft="1rem" paddingY={'.5rem'}>
          {' '}
          <Image src="/assets/images/logo.svg" width={140} height={70} />{' '}
        </Box>
      }
      <Divider w="95%" alignSelf="center" />

      {/* <Divider /> */}

      <VStack w={'full'} p={2} spacing={3}>
        {isAuthenticated
          ? menus.map((menu) => (
              <>
                <Button
                  leftIcon={
                    <Image width={30} height={30} src={`/assets/images/${menu.iconName}.svg`} />
                  }
                  isFullWidth
                  justifyContent={'left'}
                  variant="ghost"
                  size={'lg'}
                  onClick={() => handleClick(menu)}
                >
                  {menu.name}
                </Button>
                <Divider w="90%" marginX={'auto'} />
              </>
            ))
          : unAuthMenu.map((item) => (
              <>
                <Button
                  pt="1rem"
                  leftIcon={
                    <Image width={30} height={30} src={`/assets/images/${item.iconName}.svg`} />
                  }
                  isFullWidth
                  justifyContent={'left'}
                  variant="ghost"
                  size={'lg'}
                  onClick={handleAuth}
                >
                  {item.name}
                </Button>
                <Divider w="90%" marginX={'auto'} />
              </>
            ))}
      </VStack>
      <HStack py={4} paddingLeft="1rem" paddingTop="2rem" justify="center" w="100%">
        {languages.map((language) => (
          <Button
            px={0}
            mx={0}
            colorScheme="premium_red"
            variant={language.isActive ? 'solid' : 'outline'}
            onClick={() => handleChangeLanguage(language.key)}
          >
            {language.name}
          </Button>
        ))}
      </HStack>
    </VStack>
  )
}
