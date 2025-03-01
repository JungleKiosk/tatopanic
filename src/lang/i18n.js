import { createI18n } from "vue-i18n";

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      skill: "Skill"
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
    },
    skill: {
      title: "Skill",
    }
  },
  it: {
    navbar: {
      home: "Home",
      about: "About",
      skill: "Skill"
    },
    home: {
      title: "Tatopanic",
    },
    jumbo: {
      title: "Ciao, sono ...",
      txt: "IAEBCIYVEUCYVicbkhbkbiiVIYGVIYLSBAIWEBFIBibiyvgyivcweihf",
      boxbtn: "btn",
    },
    about: {
      title: "Chi siamo",
    },
    skill: {
      title: "Skill",
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