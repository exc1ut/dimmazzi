import { Box, chakra, VStack } from "@chakra-ui/react";
import * as React from "react";
import { Steps, Step, useSteps } from "chakra-ui-steps"
import { StepIcon } from "../../../img/icons/Icons";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type OrderProgressProps = {}

export const OrderProgress: React.FC<OrderProgressProps> = ({ }) => {
  const steps = ["Buyurtma qabul qilindi", "Buyurtma tayyorlanmoqda (40 daq.)", "Buyurtma kurerga topshirildi", "Buyurtma yetkazib berildi"]
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0
  });

  return (
    <Box w="100%">
      <VStack w="100%">
        <Steps activeStep={activeStep} onClickStep={(step: number) => setStep(step)} orientation="vertical" colorScheme="red">
          {steps.map((step, index) => (<Step label={step} icon={StepIcon}>{""}</Step>))}
        </Steps>
      </VStack>

    </Box>
  );
};