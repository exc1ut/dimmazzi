import { useMapStore } from '@/ui/Map/useMapStore'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useAddressQuery } from '../../../api/address/useAddressQuery'
import { AuthModal } from '../../../modules/auth/auth/AuthModal'
import { useLocation } from '../../../stores/useLocation'
import { Map } from '../../Map'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export const Header = () => {
  const [isLessThanLg] = useMediaQuery('(max-width: 512px)')
  const authModal = useModal(AuthModal)
  const locationModal = useModal(Map)
  const { data } = useAddressQuery()
  const { setStore } = useLocation()
  const { i18n, t } = useTranslation()
  // const { setMapIsOpen } = useMapStore()

  const handleAuth = async () => {
    await authModal.show()
    const lastAddress = data?.results?.at(-1)
    if (lastAddress) {
      setStore((state) => ({ ...state, ...lastAddress }))
    } else {
      await locationModal.show()
      // setMapIsOpen(true)
    }
  }

  const handleLocation = () => {
    locationModal.show()

  }

  return (
    <Box borderBottomWidth={1} borderColor={'dark.10'} py={4}>
      {isLessThanLg ? (
        <MobileHeader handleLocation={handleLocation} handleAuth={handleAuth} />
      ) : (
        <DesktopHeader handleAuth={handleAuth} handleLocation={handleLocation} />
      )}
    </Box>
  )
}
