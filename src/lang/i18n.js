import { createI18n } from "vue-i18n";

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About"
    },
    home: {
      title: "Tatopanic",
    },
    jumbo: {
      title: "Hi, I'm",
      txt: "IAEBCIYVEUCYVicbkhbkbiiVIYGVIYLSBAIWEBFIBibiyvgyivcweihf",
      boxbtn: "btn",
    },
    about: {
      title: "About",
    }
  },
  it: {
    navbar: {
      home: "Home",
      about: "About"
    },
    home: {
      title: "Home",
    },
    jumbo: {
      title: "Ciao, sono ...",
      txt: "IAEBCIYVEUCYVicbkhbkbiiVIYGVIYLSBAIWEBFIBibiyvgyivcweihf",
      boxbtn: "btn",
    },
    about: {
      title: "Chi siamo",
    }
  },
};


const userLocale = localStorage.getItem("language");
const locale = userLocale && ['en', 'it'].includes(userLocale) ? userLocale : 'en';

const i18n = createI18n({
  legacy: false, // Usa API Composition se necessario
  locale: locale, // Lingua principale
  fallbackLocale: "en", // Se una chiave manca, usa l'inglese
  messages,
});

export default i18n;