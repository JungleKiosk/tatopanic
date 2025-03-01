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
      q1: "Where?",   // AGGIUNTO
      q2: "When?",    // AGGIUNTO
      q3: "Who?",     // AGGIUNTO
      btn: "Click me"
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
      q1: "Dove?",    // AGGIUNTO
      q2: "Quando?",  // AGGIUNTO
      q3: "Chi?",     // AGGIUNTO
      btn: "Cliccami"
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