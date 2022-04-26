export const Input = {
  baseStyle: {
    field: {
      padding: '12px 16px',
      border: '1px solid dark.100',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeigth: 400,
      color: 'premium_dark.input',
      borderRadius: '20px',
      _placeholder: {
        color: 'premium_dark.600',
        fontSize: '16x',
        lineheight: '24px',
        fontWeigth: 400,
      },
      _invalid: {
        borderColor: 'premium_red.1000',
      },
    },
  },
  variants: {
    outline: {
      field: {
        height: '48px',
        _focus: {
          outline: 'none',
          borderColor: 'premium_dark.1000',
          border: '2px solid',
          boxShadow: 'none',
        },
      },
    },
    box: {
      field: {
        maxLength: '1',
        width: '48px',
        height: '48px',
        padding: '10px 10px',
        borderColor: 'premium_dark.100',
        border: '1px solid',
        _focus: {
          outline: 'none',
          borderColor: 'premium_dark.1000',
          border: '2px solid',
          boxShadow: 'none',
        },
      },
    },
  },
}
