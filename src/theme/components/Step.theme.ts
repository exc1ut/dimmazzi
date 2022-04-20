import { StepsStyleConfig } from 'chakra-ui-steps'
import { none } from 'ramda'

export const Steps: any = {
  ...StepsStyleConfig,

  baseStyle: (props: any) => ({
    ...StepsStyleConfig.baseStyle(props),
    connector: {
      ...StepsStyleConfig.baseStyle(props).connector,
      marginTop: '0px',
      marginBottom: '0px',
      height: '1.7rem',
      minHeight: '1.6rem',
      borderColor: '#A1A8B6',
    },
    step: {
      ...StepsStyleConfig.baseStyle(props).step,
      fontSize: '1.0625rem',
      '&[aria-disabled=false]': {
        color: 'premium_dark.1000',
      },
      '&[aria-disabled=true]': {
        color: 'premium_dark.600',
      },
    },
    stepIconContainer: {
      ...StepsStyleConfig.baseStyle(props).stepIconContainer,
      width: '20px',
      height: '20px',
      backgroundColor: props.activeStep ? 'white' : 'transparent',
      border: '2px solid #B8BDC8',
      borderColor: 'premium_dark.300',
      margin: '0px',
      '&[aria-current=step]': {
        backgroundColor: 'white',

        _before: {
          display: 'block',
          borderRadius: '50%',
          width: '70%',
          height: '70%',
          content: '""',
          backgroundColor: 'premium_red.1000',
        },
      },
    },
    stepContainer: {
      ...StepsStyleConfig.baseStyle(props).label,
      fontWeight: 500,
      color: 'inherit',
      height: '20px',
      display: 'flex',
    },
    label: {
      ...StepsStyleConfig.baseStyle(props).label,
      lineHeight: '20px',
      fontSize: 'inherit',
      color: 'inherit',
      marginLeft: '.75rem',
      fontWeight: 'inherit',
      opacity: none,
    },
    labelContainer: {
      ...StepsStyleConfig.baseStyle(props).labelContainer,
      fontWeight: 'inherit',
      '&[aria-current=step]': {
        fontWeight: 700,
        fontSize: '1.0625rem',
        color: 'premium_dark.1000',
      },
    },
    icon: {
      ...StepsStyleConfig.baseStyle(props).icon,
      width: '8px',
      height: '8px',
    },
  }),
  sizes: (props: any) => ({
    ...StepsStyleConfig.sizes,
    xl: {
      stepIconContainer: {
        ...StepsStyleConfig.sizes.sm.stepIconContainer,
        width: '12px',
        height: '12px',
        border: '1px solid',
        borderColor: 'premium_dark.300',
      },
    },
    sm: {
      stepIconContainer: {
        ...StepsStyleConfig.sizes.sm.stepIconContainer,
        width: '12px',
        height: '12px',
        border: '1px solid',
        borderColor: 'premium_dark.300',
      },
    },
    md: {
      stepIconContainer: {
        ...StepsStyleConfig.sizes.sm.stepIconContainer,
        width: '12px',
        height: '12px',
        border: '1px solid',
        borderColor: 'premium_dark.300',
      },
    },
    lg: {
      stepIconContainer: {
        ...StepsStyleConfig.sizes.sm.stepIconContainer,
        width: '8px',
        height: '8px',
        border: '1px solid',
        borderColor: 'premium_dark.100',
      },
    },
  }),
}
