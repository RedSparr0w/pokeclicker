/* eslint-disable quote-props */
enum Language {
    'de' = 'de',
    'en' = 'en',
    'es' = 'es',
    'fr' = 'fr',
    'it' = 'it',
    'ja' = 'ja',
    'ko' = 'ko',
    'zh-Hans' = 'zh-Hans',
    'zh-Hant' = 'zh-Hant',
    'ru' = 'ru',
    'tr' = 'tr',
    'nl' = 'nl',
    'pt-BR' = 'pt-BR',
}

export const LanguageNames: Record<Language, string> = {
    'de': 'Deutsch',
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'it': 'Italiano',
    'ja': '日本語',
    'ko': '한국어',
    'zh-Hans': '简体中文',
    'zh-Hant': '繁體中文',
    'ru': 'Русский',
    'tr': 'Türkçe',
    'nl': 'Nederlands',
    'pt-BR': 'Português Brasileiro',
};

export default Language;
