import { createI18n } from "vue-i18n";

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      skill: "Skill",
      gallery: "Gallery",
      sections: "Sections"
    },
    home: {
      title: "Tatopanic",
      subtitle: "Test IT lang ",
    },
    about: {
      title: "About",
      subtitle: "Test IT lang ",
    },
    skill: {
      title: "Skill",
      subtitle: "Test IT lang ",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Test IT lang ",
    }
  },
  it: {
    navbar: {
      home: "Home",
      about: "About",
      skill: "Skill",
      gallery: "Gallery",
      sections: "Sections"
    },
    home: {
      title: "Tatopanic",
      subtitle: "Test EN lang ",
    },
    about: {
      title: "Chi siamo",
      subtitle: "Test EN lang ",
    },
    skill: {
      title: "Skill",
      subtitle: "Test EN lang ",
    },
    gallery: {
      title: "Galleria",
      subtitle: "Test IT lang ",
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