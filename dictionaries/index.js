import 'server-only'

const dicts = {
  en: () => import('../public/locales/en/common.json').then(m => m),
  fr: () => import('../public/locales/fr/common.json').then(m => m),
  zh: () => import('../public/locales/zh/common.json').then(m => m),
}

export const getDictionary = async (locale) => {
  const fn = dicts[locale] || dicts['fr']
  const mod = await fn()
  // some bundlers place default property, normalize:
  return mod.default ? mod.default : mod
}
