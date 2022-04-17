import NiceModal from '@ebay/nice-modal-react'

export const Providers: React.FC = ({ children }) => {
  return <NiceModal.Provider>{children}</NiceModal.Provider>
}
