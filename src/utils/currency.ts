export const currencyFormatter = new Intl.NumberFormat('uz-UZ', {
  style: 'currency',
  currency: 'UZS',
  maximumFractionDigits: 0,
  // currencyDisplay: '',
})

export const formatCurrency = (currency: number) => {
  return currencyFormatter.format(currency).replace('UZS', '').trim()
}
