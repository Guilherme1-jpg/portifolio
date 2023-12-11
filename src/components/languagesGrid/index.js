import Html from '../../assets/svg/html.svg'
import ReactLogo from '../../assets/svg/react.svg'
import Figma from '../../assets/svg/figma.svg'
import Javascript from '../../assets/svg/javascript.svg'
import Php from '../../assets/svg/php.svg'
import Nestjs from '../../assets/svg/nestjs.svg'
import Mongo from '../../assets/svg/mongodb.svg'
import Node from '../../assets/svg/node.svg'
import Vue from '../../assets/svg/vue.svg'
import Postgresql from '../../assets/svg/postgresql.svg'
import PrismaOrm from '../../assets/svg/prismaOrm.svg'
import Express from '../../assets/svg/express.svg'
import Aws from '../../assets/svg/awsLogo.svg'
import Typescript from '../../assets/svg/typescript.svg'
import Docker from '../../assets/svg/docker.svg'
import Kubernetes from '../../assets/svg/kubernetes.svg'
import Jest from '../../assets/svg/jest-seeklogo.com.svg'
import Oracle from '../../assets/svg/oracle.svg'

const LanguagesGrid = () => {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        <li className="">
          <img src={Html} className="me-2 md:me-4 " alt="html" />
        </li>
        <li>
          <img src={ReactLogo} className="me-2 md:me-4" alt="html" />
        </li>
        <li>
          <img src={Figma} className="me-2 md:me-4" alt="html" />
        </li>
        <li>
          <img src={Javascript} className="me-2 md:me-4" alt="html" />
        </li>
        <li>
          <img src={Php} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Nestjs} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Mongo} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Node} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Vue} className="me-2 md:me-2" alt="html" />
        </li>

        <li>
          <img src={Docker} className="me-2 md:me-2" alt="html" />
        </li>
        <li>
          <img src={Kubernetes} className="me-2 md:me-2" alt="html" />
        </li>
      </ul>

      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        <li>
          <img src={Postgresql} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Express} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={PrismaOrm} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Aws} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Typescript} className="me-2 md:me-4" alt="html" />
        </li>

        <li>
          <img src={Oracle} className="me-2 md:me-2" alt="html" />
        </li>

        <li>
          <img src={Jest} className="me-2 md:me-2" alt="html" />
        </li>
      </ul>
    </>
  )
}

export default LanguagesGrid
