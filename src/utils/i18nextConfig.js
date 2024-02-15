import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageDetector, languageDetectorOptions } from './lang-detector';

const resources = {
  en: {
    translation: {
      "Olá, meu nome é": "Hello, my name is",
      "Desenvolvedor Fullstack": "Fullstack Developer",
      "Desenvolvedor FullStack há mais de 4 anos,": "FullStack developer for over 4 years,",
      "focado em entregar qualidade e software de mais alta qualidade.": "focused on delivering the highest quality software.",
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
      "projetos em que estou envolvido.": "projects I'm involved in.",
      "Experiências Profissionais": "Professional Experience",
      "Desenvolvimento e manutenção de aplicações WEB, utilizando ReactJs,": "Development and maintenance of web applications using ReactJs,",
      "NodeJs, postgresql, typeORM e praticas de injeção de dependência e SOLID.": "NodeJs, postgresql, typeORM and dependency injection practices and SOLID.",
      "Elaboração de protótipos utilizando Figma": "Prototyping using Figma",
      "Auxilio em manutenção de sites em Wordpress": "Help with maintenance of Wordpress sites",
      "Elaboração de documentações das aplicações": "Preparation of application documentation",
      "Controle e versionamento utilizando Git": "Control and versioning using Git",
      "Elaboração de protótipos e documentação.": "Prototyping and documentation.",
      "Controle de versionamento Git/Bitbucket.": "Git/Bitbucket version control.",
      "Contrução e Gerenciamento de ambiente com PM2 e Nginx": "Building and managing environment with PM2 and Nginx",
      "Orquestração com Docker e Kubernetes": "Orchestration with Docker and Kubernetes",
      "Desenvolvimento de marketplace/e-commerce": "Development of marketplace/e-commerce",
      "Utilização de Vue 2 e 3, NodeJs, mongoDB e mongoose": "Using Vue 2 and 3, NodeJs, mongoDB, and mongoose",
      "Elaboração de ciclos de pagamentos com Stripe": "Designing payment cycles with Stripe",
      "Elaboração de APIs com node v16, com integrações com gateways de pagamento": "Building APIs with node v16, integrating with payment gateways",
      "Integração de APIs": "API integration",
      "Utilização de docker nas aplicações": "Using Docker in applications",
      "Utilização de Nodejs, Typescript, Nestjs, ReactJs, PostgreSql, PrismaORM e javascript.": "Using Nodejs, Typescript, Nestjs, ReactJs, PostgreSql, PrismaORM, and javascript.",
      "Desenvolvimento Front end e Back end.": "Front-end and Back-end development.",
      "Controle de versionamento via Git e Jira.": "Version control via Git and Jira.",
      "Orquestração via Docker, Kubernetes.": "Orchestration via Docker, Kubernetes.",
      "Utilização de AWS, EC2, Fargate": "Using AWS, EC2, Fargate",
      "Elaboração de Microsserviços": "Designing Microservices",
      "Elaboração de protótipos utilizando Figma e elaboração de UX e UI.": "Prototyping using Figma and designing UX/UI.",
      "Integração entre back end e front end via API ́s.": "Integration between back-end and front-end via APIs.",
      "Utilização dos conceitos de Clean code, SOLID, DDD, TDD e Microsserviços.": "Using concepts of Clean code, SOLID, DDD, TDD, and Microservices.",
      "Analise e Revisão de código.": "Code analysis and review.",
      "Ao longo da minha carreira profissional, adquiri uma sólida experiência em diversas linguagens de programação.": "Throughout my professional career, I have acquired solid experience in various programming languages",
      "Minha jornada no desenvolvimento de software abrange um conjunto diversificado de tecnologias,": "My journey in software development covers a diverse range of technologies,",
      "permitindo-me enfrentar desafios complexos e contribuir para o sucesso de projetos.": "allowing me to face complex challenges and contribute to the success of projects.",
      "Usando recursos da aws como o rekognition, foi criado uma api para ": "Using aws resources such as rekognition, an api was created for",
      "analisar imagens e fazer o reconhecimento dos elementos da cena.": "analyzing images and recognizing scene elements.",
      "Contato": "Contact",
      "No momento, estou procurando me juntar a uma equipe para agregar":"At the moment, I'm looking to join a team to add",
      "com os meus conhecimentos e assim construir aplicações de": "with my knowledge and thus build",
      "qualidade e eficiência.": "quality and efficiency.",
      "Set 2020 - Ago 2022": "Sep 2020 - Aug 2022",
      "Ago 2022 - Abr 2023": "Aug 2022 - Apr 2023",
      "Mai 2023 - Nov 2023": "May 2023 - Nov 2023"
    },
  },

  pt: {
    translation: {
      "Olá, meu nome é": "Olá, meu nome é",
      "Desenvolvedor Fullstack": "Desenvolvedor Fullstack",
      "Desenvolvedor FullStack há mais de 4 anos,": "Desenvolvedor FullStack há mais de 4 anos,",
      "focado em entregar qualidade e software de mais alta qualidade.": "focado em entregar qualidade e software de mais alta qualidade.",
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
      "projetos em que estou envolvido.": "projetos em que estou envolvido.",
      "Experiências Profissionais": "Experiências Profissionais",
      "NodeJs, postgresql, typeORM e praticas de injeção de dependência e SOLID.": "NodeJs, postgresql, typeORM e praticas de injeção de dependência e SOLID.",
      "Elaboração de protótipos utilizando Figma": "Elaboração de protótipos utilizando Figma",
      "Auxilio em manutenção de sites em Wordpress": "Auxilio em manutenção de sites em Wordpress",
      "Elaboração de documentações das aplicações": "Elaboração de documentações das aplicações",
      "Controle e versionamento utilizando Git": "Controle e versionamento utilizando Git",
      "Elaboração de protótipos e documentação.": "Prototipagem e documentação.",
      "Controle de versionamento Git/Bitbucket.": "Controle de versão Git/Bitbucket.",
      "Contrução e Gerenciamento de ambiente com PM2 e Nginx": "Construção e gerenciamento de ambiente com PM2 e Nginx",
      "Orquestração com Docker e Kubernetes": "Orquestração com Docker e Kubernetes",
      "Desenvolvimento de marketplace/e-commerce": "Desenvolvimento de marketplace/e-commerce",
      "Utilização de Vue 2 e 3, NodeJs, mongoDB e mongoose": "Utilização de Vue 2 e 3, NodeJs, mongoDB e mongoose",
      "Elaboração de ciclos de pagamentos com Stripe": "Elaboração de ciclos de pagamento com Stripe",
      "Elaboração de APIs com node v16, com integrações com gateways de pagamento": "Construção de APIs com node v16, integrando com gateways de pagamento",
      "Integração de APIs": "Integração de APIs",
      "Utilização de docker nas aplicações": "Utilização de Docker nas aplicações",
      "Utilização de Nodejs, Typescript, Nestjs, ReactJs, PostgreSql, PrismaORM e javascript.": "Utilização de Nodejs, Typescript, Nestjs, ReactJs, PostgreSql, PrismaORM e javascript.",
      "Desenvolvimento Front end e Back end.": "Desenvolvimento Front-end e Back-end.",
      "Controle de versionamento via Git e Jira.": "Controle de versão via Git e Jira.",
      "Orquestração via Docker, Kubernetes.": "Orquestração via Docker, Kubernetes.",
      "Utilização de AWS, EC2, Fargate": "Utilização de AWS, EC2, Fargate",
      "Elaboração de Microsserviços": "Elaboração de Microsserviços",
      "Elaboração de protótipos utilizando Figma e elaboração de UX e UI.": "Prototipagem utilizando Figma e design de UX/UI.",
      "Integração entre back end e front end via API ́s.": "Integração entre back-end e front-end via APIs.",
      "Utilização dos conceitos de Clean code, SOLID, DDD, TDD e Microsserviços.": "Utilização dos conceitos de Clean code, SOLID, DDD, TDD e Microsserviços.",
      "Analise e Revisão de código.": "Análise e revisão de código.",
      "Ao longo da minha carreira profissional, adquiri uma sólida experiência em diversas linguagens de programação.": "Ao longo da minha carreira profissional, adquiri uma sólida experiência em diversas linguagens de programação.",
     "Minha jornada no desenvolvimento de software abrange um conjunto diversificado de tecnologias," : "Minha jornada no desenvolvimento de software abrange um conjunto diversificado de tecnologias,",
      "permitindo-me enfrentar desafios complexos e contribuir para o sucesso de projetos.": "permitindo-me enfrentar desafios complexos e contribuir para o sucesso de projetos.",
      "Usando recursos da aws como o rekognition, foi criado uma api para ": "Usando recursos da aws como o rekognition, foi criado uma api para ",
      "analisar imagens e fazer o reconhecimento dos elementos da cena.": "analisar imagens e fazer o reconhecimento dos elementos da cena.",
      "Contato": "Contato",
      "No momento, estou procurando me juntar a uma equipe para agregar": "No momento, estou procurando me juntar a uma equipe para agregar",
      "com os meus conhecimentos e assim construir aplicações de": "com os meus conhecimentos e assim construir aplicações de",
      "qualidade e eficiência.": "qualidade e eficiência.",
      "Set 2020 - Ago 2022": "Set 2020 - Ago 2022",
      "Ago 2022 - Abr 2023": "Ago 2022 - Abr 2023",
      "Mai 2023 - Nov 2023":  "Mai 2023 - Nov 2023",
    }
  }
};

i18n.use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: languageDetectorOptions,
    resources,
    fallbackLng: ['pt', 'en'],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
