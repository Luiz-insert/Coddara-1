import React from 'react' 
import Header from '../HomePage/Header'
import Banner_01 from '../HomePage/Banner_01'
import Partners from '../HomePage/Partners'
import Card from '../HomePage/Card'
import Card2 from '../HomePage/Card2'
import Card3 from '../HomePage/Card3'
import styles from './styles.module.css'

import spaLogo from '../../assets/spa_logo.svg'
import monitor from '../../assets/spa_monitor.svg'
import notebook from '../../assets/spa_notebook.svg'
import smartphone from '../../assets/spa_smartphone.svg'

import services from '../../assets/group_services.png'
import creditCard from '../../assets/credit.svg'
import imgRoute from '../../assets/img_aux_route.svg'
import imgApi from '../../assets/img_aux_api.svg'
import lock from '../../assets/Lock.svg'
import check_small from '../../assets/check_small.svg'

import srv1 from '../../assets/srv1.svg'
import srv2 from '../../assets/srv2.svg'
import srv3 from '../../assets/srv3.png'
import srv4 from '../../assets/srv4.svg'

import logo_partner_01 from '../../assets/exemploLogo.png'
import logo_partner_02 from '../../assets/exemploLogo2.png'
import logo_partner_03 from '../../assets/exemploLogo3.png'

import ceo from '../../assets/group_CEO.svg'


export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner_01 />
      <Partners props={
        {
          logo1: logo_partner_01,
          logo2: logo_partner_02,
          logo3: logo_partner_03,
        }
      }/>
      <Card props={
        {
          title: 'SPA Lab',
          description: 'Desenvolvimento de LandPages extraordinárias, com singularidade em cada detalhe!',
          description2: '* Compativel com diferentes resoluções garantido responsividade e consistência nas animações',
          imageSpaLogo: spaLogo,
          imageMonitor: monitor,
          imageNotebook: notebook,
          imageSmartphone: smartphone,
        }
      } />
      <Card2 props={
        {
          title1: 'Integração com sistemas de transação populares',
          title2: 'Estilos unicos e personalizados',
          title3: 'Interações e conexões inteligentes com serviços de terceiros',
          image1: creditCard,
          image2: services,
          image3: smartphone,
          image4: imgRoute,
          image5: imgApi,

          imageSrv1: srv1,
          imageSrv2: srv2,
          imageSrv3: srv3,
          imageSrv4: srv4,

          titleSrv1: 'Gateway de pagamento do Mercado Pago',
          titleSrv2: 'Gateway de pagamento da Stripe',
          titleSrv3: 'Gateway de pagamento do PayPal',
          titleSrv4: 'Gateway de pagamento do PagSeguro',
        }
      } />
      <Card3 props={
        {
          title1: 'Segurança e alcance otimizado',
          title2: 'Https://seudominio.com',
          image1: lock,
          image2: check_small,
          label1: 'Certificado SSL',
          label2: 'Dominio personalizado',
          label3: 'Backup em casos de erros graves',
          label4: 'Algoritmo para otimizar o SEO',

          imageCEO: ceo,
          titleCeo: 'Painel de controle com monitoramento de tráfego e desempenho da página',
        }
      } />
      <div className={styles.content}></div>
    </div>
  )
}

