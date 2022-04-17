import { ComponentStory, Meta, Story } from '@storybook/react'

import { MealModalCard, MealModalCardProps } from './MealModalCard'

import { Button } from '@chakra-ui/react'

import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { FC, useEffect } from 'react'
import { MealCardProps } from '../MealCard'
import { JsonLd } from 'next-seo/lib/jsonld/jsonld'

const meta: Meta = {
  title: 'Components/MealModalCard',
  component: MealModalCard,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: ComponentStory<FC<MealModalCardProps>> = (props) => {
  const modal = useModal(MealModalCard)

  const handleClick = async () => {
    const newUser = await modal.show(props)
    alert(JSON.stringify(newUser, null, 2))
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

Default.args = {
  image:
    'https://www.bora.com/fileadmin/website_content/Erleben/Cooking/55_Team_Edition/Rezeptbilder/55_TeamEdition_Canada_Halloumi-Burger.jpg',
  price: 30000,
  title: 'Ovqat nomi',
  types: ['Mini', 'Big'],
}
