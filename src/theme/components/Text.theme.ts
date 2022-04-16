export const Text = {
  variants: {
    category: {
      fontSize: '14px',
      lineheight: '20px',
      fontWeigth: 400,
      color: 'dark.60',
    },
    modal_sub: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      textAlign: 'center',
      color: 'dark.50',
    },
    modal_info: {
      fontSize: '14px',
      fontWeight: '500',
      lineheight: '20px',
      textAlign: 'center',
      color: 'dark.50',
    },
    highlighted: (props: { color: string }) => ({
      display: 'inline',
      color: props.color ? props.color : 'dark.100',
    }),
  },
}
