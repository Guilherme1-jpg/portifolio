import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { languageDetector, languageDetectorOptions } from './lang-detector'

const resources = {
  en: {
    translation: {
       "Olá, meu nome é": "Hello, my name is",
       "Desenvolvedor Fullstack": "Fullstack Developer",
       "Desenvolvedor FullStack há mais de 4 anos,": "FullStack developer for over 4 years,",
       "focado em entregar qualidade e software de mais alta qualidade.":"focused on delivering the highest quality software.",
       "Desejo passar uma boa": "I want to make a good",
       "impressão": "impression",
       "Sou Desenvolvedor Fullstack": "I'm FullStack Developer",
       "Olá! Sou um desenvolvedor Full Stack com mais de 4 anos de ": "Hi, I'm a Full Stack developer with over 4 years' experience in the field ",
       "experiência, especializado em criar soluções digitais inovadoras.": "experience, specialized in creating innovative digital solutions.",
       "Ao longo da minha carreira, participei ativamente em equipes ": "Throughout my career, I have actively participated in teams ",
       "multidisciplinares, entregando projetos que superaram expectativas.": "multidisciplinary, delivering projects that exceeded expectations.",
       "Minha paixão pela tecnologia e dedicação em acompanhar as últimas ": "My passion for technology and dedication to keeping up with the latest trends ensure that I am always ready",
       "tendências garantem que eu esteja sempre pronto ": "trends ensure that I'm always ready",
       "para enfrentar novos desafios e contribuir para o sucesso dos ": "to face new challenges and contribute to the success of the projects in which I am involved.",
       "projetos em que estou envolvido.": "projects I'm involved in."
      },
  },

  pt: {
    translation: {
      "Olá, meu nome é":"Olá, meu nome é",
      "Desenvolvedor Fullstack": "Desenvolvedor Fullstack",
      "Desenvolvedor FullStack há mais de 4 anos,": "Desenvolvedor FullStack há mais de 4 anos,",
      "focado em entregar qualidade e software de mais alta qualidade.":"focado em entregar qualidade e software de mais alta qualidade.",
      "Desejo passar uma boa": "Desejo passar uma boa",
      "impressão": "impressão",
      "Sou Desenvolvedor Fullstack": "Sou Desenvolvedor Fullstack",
      "Olá! Sou um desenvolvedor Full Stack com mais de 4 anos de ": "Olá! Sou um desenvolvedor Full Stack com mais de 4 anos de ",
      "experiência, especializado em criar soluções digitais inovadoras.": "experiência, especializado em criar soluções digitais inovadoras.",
      "Ao longo da minha carreira, participei ativamente em equipes ": "Ao longo da minha carreira, participei ativamente em equipes ",
      "multidisciplinares, entregando projetos que superaram expectativas.": "multidisciplinares, entregando projetos que superaram expectativas.",
      "Minha paixão pela tecnologia e dedicação em acompanhar as últimas ": "Minha paixão pela tecnologia e dedicação em acompanhar as últimas ",
      "tendências garantem que eu esteja sempre pronto ": "tendências garantem que eu esteja sempre pronto ",
      "para enfrentar novos desafios e contribuir para o sucesso dos ": "para enfrentar novos desafios e contribuir para o sucesso dos ",
      "projetos em que estou envolvido.": "projetos em que estou envolvido."
    }
  }
}
i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
      detection: languageDetectorOptions,
      resources,
      fallbackLng: ["pt", "en"],

      interpolation: {
        escapeValue: false,
      }
    })

export default i18n;