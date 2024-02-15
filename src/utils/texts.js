export const Tech = ({ t }) => {
  return (
    <h1>
      <ul>
        <li>{t("Set 2020 - Ago 2022")}</li>
        <br/>
        <li>
          {t('Desenvolvimento e manutenção de aplicações WEB, utilizando ReactJs,')}
          <br />
          {t('NodeJs, postgresql, typeORM e praticas de injeção de dependência e SOLID.')}
        </li>
        <li>{t('Elaboração de protótipos utilizando Figma')}</li>
        <li>{t('Auxilio em manutenção de sites em Wordpress')}</li>
        <li>{t('Elaboração de documentações das aplicações')}</li>
        <li>{t('Controle e versionamento utilizando Git')}</li>
        <li>{t('Integração de APIs')}</li>
        <li>{t('Utilização de docker nas aplicações')}</li>
      </ul>
    </h1>
  );
};

export const Yank = ({ t }) => {
  return (
    <h1>
      <ul>
        <li>{t("Ago 2022 - Abr 2023")}</li>
        <br/>
        <li>{t('Elaboração de protótipos e documentação.')}</li>
        <li>{t('Controle de versionamento Git/Bitbucket.')}</li>
        <li>{t('Contrução e Gerenciamento de ambiente com PM2 e Nginx')}</li>
        <li>{t('Orquestração com Docker e Kubernetes')}</li>
        <li>{t('Desenvolvimento de marketplace/e-commerce')}</li>
        <li>{t('Utilização de Vue 2 e 3, NodeJs, mongoDB e mongoose')}</li>
        <li>{t('Elaboração de ciclos de pagamentos com Stripe')}</li>
        <li>
          {t('Elaboração de APIs com node v16, com integrações com gateways de pagamento')}
        </li>
        <li>{t('Integração de APIs')}</li>
      </ul>
    </h1>
  );
};

export const Vik = ({ t }) => {
  return (
    <h1>
      <ul>
        <li>{t("Mai 2023 - Nov 2023")}</li>
        <br/>
        <li>
          {t(
            'Utilização de Nodejs, Typescript, Nestjs, ReactJs, PostgreSql, PrismaORM e javascript.'
          )}
        </li>
        <li>{t('Desenvolvimento Front end e Back end.')}</li>
        <li>{t('Controle de versionamento via Git e Jira.')}</li>
        <li>{t('Orquestração via Docker, Kubernetes.')}</li>
        <li>{t('Utilização de AWS, EC2, Fargate')}</li>
        <li>{t('Elaboração de Microsserviços')}</li>
        <li>{t('Elaboração de protótipos utilizando Figma e elaboração de UX e UI.')}</li>
        <li>{t('Integração entre back end e front end via API ́s.')}</li>
        <li>
          {t(
            'Utilização dos conceitos de Clean code, SOLID, DDD, TDD e Microsserviços.'
          )}
        </li>
        <li>{t('Analise e Revisão de código.')}</li>
      </ul>
    </h1>
  );
};