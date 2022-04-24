import { useModal } from '@ebay/nice-modal-react'
import { ComponentStory, Meta, Story } from '@storybook/react'
import { FC, useEffect } from 'react'
import NiceModal from '@ebay/nice-modal-react'

import { Map } from './Map'
import { Button } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Components/Map',
  component: Map,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: ComponentStory<FC> = (props) => {
  const modal = useModal(Map)

  const handleClick = async () => {
    modal.show().then((info) => {
      console.log(info)
      alert(JSON.stringify(info, null, 2))
    })
  }

  useEffect(() => {
    modal.show(props)
  }, [])

  return (
    <NiceModal.Provider>
      <Button onClick={() => handleClick()}>Open</Button>
    </NiceModal.Provider>
  )
}

export const Default = Template.bind({})
Default.args = {}
