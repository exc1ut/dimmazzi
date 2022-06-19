import '@testing-library/react/dont-cleanup-after-each'
import { useModal } from '@ebay/nice-modal-react'
import { render } from '../../../../lib/testing-library'
import { NameForm } from './NameForm'
import {
  cleanup,
  screen,
  waitFor,
  act,
  getByRole,
  findByTestId,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NiceModal from '@ebay/nice-modal-react'
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { server } from '../../../../mocks/server'
import { rest } from 'msw'

// const NameFormModal = NiceModal.create(() => {
//   const modal = NiceModal.useModal()
//   return <p data-testid="name-container">asd</p>
// })

const WithModal = () => {
  const modal = NiceModal.useModal()

  return (
    <Modal isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <AnimatePresence exitBeforeEnter>
          <NameForm />
        </AnimatePresence>
      </ModalContent>
    </Modal>
  )
}

describe('NameForm', () => {
  beforeAll(() => {
    render(<NiceModal.Provider />)
    const NameFormModal = NiceModal.create(WithModal)
    act(() => {
      NiceModal.show(NameFormModal)
    })
  })

  afterAll(() => {
    cleanup()
  })

  it('should be on the screen', async () => {
    expect(screen.getByTestId('name-container')).toBeInTheDocument()
  })

  it('button should be disabled', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled()
  })

  it('should write text', async () => {
    const nameInput = screen.getByTestId('name')
    const surnameInput = screen.getByPlaceholderText('Surname')

    await userEvent.type(nameInput, 'name')
    await userEvent.type(surnameInput, 'surname')

    expect(nameInput).toHaveValue('name')
    expect(surnameInput).toHaveValue('surname')
  })

  it('button should not be disabled', () => {
    expect(screen.getByRole('button', { name: /submit/i })).not.toBeDisabled()
  })

  it('button should be disabled while submitting', async () => {
    const button = screen.getByRole('button', { name: /submit/i })

    await userEvent.click(button)

    expect(button).toBeDisabled()
  })

  it('should disappear', async () => {
    const container = await screen.findByTestId('name-container')
    await waitForElementToBeRemoved(container)
    expect(container).not.toBeInTheDocument()
  })
})
