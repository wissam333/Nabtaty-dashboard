import en from "./locales/en.json"
import ar from "./locales/ar.json"


export default defineI18nConfig(() => ({
    legacy: true,
    locale: useCookie('lang').value ?? 'en',
    messages: {
        en: en,
        ar: ar
    }
}))
