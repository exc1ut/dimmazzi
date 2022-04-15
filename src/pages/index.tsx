import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()

  return (
    <>
      <>{t`sample`}</>
      <>{t('sample')}</>
    </>
  )
}

export default Index
