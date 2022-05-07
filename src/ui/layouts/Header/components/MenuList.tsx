import {
  Box,
  Divider,
  HStack,
  MenuList as ChakraMenuList,
  MenuListProps as ChakraMenuListProps,
  Text,
} from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from './MenuItem'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useAuth } from '../../../../stores/useAuth'
import { getLanguageProps } from '../../../../utils/language'
import i18n from '../../../../lib/i18n'
import { useModal } from '@ebay/nice-modal-react'
import { EditProfileModal } from '../../../../modules/profile'
import { useRouter } from 'next/router'
import { useQueryClient } from 'react-query'

interface MenuListProps extends ChakraMenuListProps {}

export const MenuList: React.FC<MenuListProps> = (props) => {
  const { t, i18n } = useTranslation()
  const [isLanguageOpen, setLanguageOpen] = useState(false)
  const { logout } = useAuth()
  const editProfileModal = useModal(EditProfileModal)
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleLogout = () => {
    logout()
  }

  const handleChangeLanguage = (name: string) => {
    i18n.changeLanguage(name)
    queryClient.refetchQueries()
  }

  const language = useMemo(getLanguageProps, [i18n.language])

  return (
    <ChakraMenuList boxShadow="lg" {...props}>
      <MenuItem
        onClick={() => editProfileModal.show()}
        imageSrc={'/assets/images/person.svg'}
      >{t`Profile`}</MenuItem>
      <Divider />
      <MenuItem
        onClick={() => router.push('/order')}
        imageSrc={'/assets/images/task.svg'}
      >{t`Product history`}</MenuItem>
      <Divider />
      <MenuItem
        onClick={() => router.push('/address')}
        imageSrc={'/assets/images/location.svg'}
      >{t`Location list`}</MenuItem>
      <Divider />
      <MenuItem
        onClick={() => router.push('/restaurant/favourites/')}
        imageSrc={'/assets/images/heart.svg'}
      >{t`Favorite restorans`}</MenuItem>
      <Divider />
      <MenuItem
        imageSrc={'/assets/images/world.svg'}
        onClick={() => setLanguageOpen(!isLanguageOpen)}
        closeOnSelect={false}
      >
        <HStack w={'full'} justifyContent="space-between">
          <Text>{language.activeLanguage}</Text>{' '}
          {isLanguageOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </HStack>
      </MenuItem>
      <AnimatePresence exitBeforeEnter>
        {isLanguageOpen && (
          <Box
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            as={motion.div}
            zIndex={-1}
          >
            {language.availableLanguages.map((v) => (
              <MenuItem onClick={() => handleChangeLanguage(v.key)}>{v.value}</MenuItem>
            ))}

            {/* <MenuItem>{t`Русский`}</MenuItem> */}
          </Box>
        )}
      </AnimatePresence>
      <Divider />
      <MenuItem
        onClick={handleLogout}
        imageSrc={'/assets/images/logout.svg'}
      >{t`Log out`}</MenuItem>
    </ChakraMenuList>
  )
}
