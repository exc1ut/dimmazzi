import { Box, chakra, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { Steps, Step, useSteps } from 'chakra-ui-steps'
import { StepIcon } from '../../../img/icons/Icons'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type OrderProgressProps = {
  activeStep: number
}

export const OrderProgress: React.FC<OrderProgressProps> = ({ activeStep }) => {
  const { t } = useTranslation()
  const steps = [
    t`Buyurtma qabul qilindi`,
    t`Buyurtma tayyorlanmoqda (40 daq.)`,
    t`Buyurtma kurerga topshirildi`,
    t`Buyurtma yetkazib berildi`,
  ]
  // const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
  //   initialStep: 0
  // });

  return (
    <Box w="100%">
      <VStack w="100%">
        <Steps activeStep={activeStep + 1} orientation="vertical" colorScheme="red">
          {steps.map((step, index) => (
            <Step label={step} icon={StepIcon}>
              {''}
            </Step>
          ))}
        </Steps>
      </VStack>
    </Box>
  )
}
