import i18n from '../lib/i18n'

export interface ILanguage {
  activeLanguage: string
  availableLanguages: {
    key: string
    value: string
  }[]
}

const { t } = i18n

const languageMap = {
  ru: t`Русский`,
  uz: t`O'zbekcha`,
  cr: t`Узбекча`,
}

export const getLanguageProps: () => ILanguage = () => {
  // @ts-ignore
  const activeLanguage = languageMap?.[i18n.language]!

  const availableLanguages = Object.entries(languageMap)
    .filter(([key, value]) => key !== i18n.language)
    .reduce<Record<string, string>[]>((prev, [key, value]) => {
      const language = {
        key,
        value,
      }
      prev.push(language)
      return prev
    }, [])

  return {
    activeLanguage,
    availableLanguages,
  }
}
