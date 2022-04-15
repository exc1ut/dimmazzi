import {
  Box,
  Divider,
  HStack,
  MenuList as ChakraMenuList,
  MenuListProps as ChakraMenuListProps,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from './MenuItem'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

interface MenuListProps extends ChakraMenuListProps {}

export const MenuList: React.FC<MenuListProps> = (props) => {
  const { t } = useTranslation()
  const [isLanguageOpen, setLanguageOpen] = useState(false)

  return (
    <ChakraMenuList boxShadow="lg" {...props}>
      <MenuItem imageSrc={'/assets/images/person.svg'}>{t`Profile`}</MenuItem>
      <Divider />
      <MenuItem imageSrc={'/assets/images/task.svg'}>{t`Product history`}</MenuItem>
      <Divider />
      <MenuItem imageSrc={'/assets/images/location.svg'}>{t`Location list`}</MenuItem>
      <Divider />
      <MenuItem imageSrc={'/assets/images/heart.svg'}>{t`Favorite restorans`}</MenuItem>
      <Divider />
      <MenuItem
        imageSrc={'/assets/images/world.svg'}
        onClick={() => setLanguageOpen(!isLanguageOpen)}
        closeOnSelect={false}
      >
        <HStack w={'full'} justifyContent="space-between">
          <Text>{t`O'zbekcha`}</Text> {isLanguageOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
            <MenuItem>{t`Узбекча`}</MenuItem>
            <MenuItem>{t`Русскик`}</MenuItem>
          </Box>
        )}
      </AnimatePresence>
      <Divider />
      <MenuItem imageSrc={'/assets/images/logout.svg'}>{t`Log out`}</MenuItem>
    </ChakraMenuList>
  )
}
