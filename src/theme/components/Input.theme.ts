export const Input = {
  baseStyle: {
    field: {
      padding: '12px 16px',
      border: '1px solid dark.10',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeigth: 400,
      color: 'dark.input',
      borderRadius: '20px',
      _placeholder: {
        color: 'dark.60',
        fontSize: '16x',
        lineheight: '24px',
        fontWeigth: 400,
      },
    },
  },
  variants: {
    outline: {
      field: {
        height: '48px',
        _focus: {
          outline: 'none',
          borderColor: 'dark.100',
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
        borderColor: 'dark.10',
        border: '1px solid',
        _focus: {
          outline: 'none',
          borderColor: 'dark.100',
          border: '2px solid',
          boxShadow: 'none',
        },
      },
    },
  },
}
