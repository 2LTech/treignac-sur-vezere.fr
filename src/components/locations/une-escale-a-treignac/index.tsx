'use client'

import { Carousel, Layout, Typography } from 'antd'
import Script from 'next/script'

import Header from '@/components/assets/header'
import Footer from '@/components/assets/footer'
import Content from '@/components/assets/content'

import styles from '@/components/assets/index.module.css'
import locationsStyles from '../index.module.css'
import images from './images'

const UneEscaleATreignac = () => {
  return (
    <Layout className={styles.layout}>
      <Script async src='https://www.airbnb.fr/embeddable/airbnb_jssdk' />
      <Header />
      <Content>
        <Typography.Title level={2}>Une Escale à Treignac</Typography.Title>
        <div className={locationsStyles.head}>
          <div>
            <Typography>
              <Typography.Paragraph>
                Venez profiter en famille ou entre amis de ce fabuleux logement
                qui offre de bons moments en perspective.
              </Typography.Paragraph>
              <Typography.Paragraph>
                Rez-de-chaussée spacieux comprenant cuisine, salon, salle a
                manger ainsi qu'un espace buanderie/toilettes.
              </Typography.Paragraph>
              <Typography.Paragraph>
                À l'étage 2 grandes chambres et une salle d'eau.
              </Typography.Paragraph>
              <Typography.Paragraph>
                Extérieur avec terrasse et stationnement pour un véhicule.
              </Typography.Paragraph>
              <Typography.Paragraph>
                Proximité immédiate du centre-ville, accès au commerces à pied,
                tout en étant dans une rue paisible peu passante.
              </Typography.Paragraph>
            </Typography>

            <Carousel
              arrows
              autoplay={{ dotDuration: true }}
              dots={{ className: styles.carouselDots }}
              className={styles.carousel}
            >
              {images.map((image) => (
                <div key={image.key} className='figure'>
                  <img src={image.src} alt={image.label} />
                  <div className='figcaption'>{image.label}</div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className={locationsStyles.airBnB}>
            <div
              className='airbnb-embed-frame'
              data-id='1634794174622461433'
              data-view='home'
              data-hide-price='true'
              style={{ width: '450px', height: '300px', margin: 'auto' }}
            >
              <a
                href='https://www.airbnb.fr/rooms/1634794174622461433?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget'
                rel='nofollow'
              >
                Voir sur Airbnb
              </a>
              <a
                href='https://www.airbnb.fr/rooms/1634794174622461433?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget'
                rel='nofollow'
              >
                Hébergement · Treignac · ★Nouveau · 2 chambres · 4 lits ·
                1&nbsp;salle de bain
              </a>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}

export default UneEscaleATreignac
