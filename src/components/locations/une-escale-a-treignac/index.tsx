'use client'

import Carousel from 'antd/es/carousel'
import Layout from 'antd/es/layout'
import Typography from 'antd/es/typography'
import Script from 'next/script'

import Header from '@/components/assets/header'
import Footer from '@/components/assets/footer'
import Content from '@/components/assets/content'

import { useI18n } from '@/i18n/provider'

import styles from '@/components/assets/index.module.css'
import locationsStyles from '../index.module.css'
import images from './images'

const UneEscaleATreignac = () => {
  const { locale, t } = useI18n()

  return (
    <Layout className={styles.layout}>
      <Script async src='https://www.airbnb.fr/embeddable/airbnb_jssdk' />
      <Header />
      <Content>
        <Typography.Title level={2}>{t.escale.title}</Typography.Title>
        <div className={locationsStyles.head}>
          <div>
            <Typography>
              {t.escale.paragraphs.map((paragraph) => (
                <Typography.Paragraph key={paragraph}>
                  {paragraph}
                </Typography.Paragraph>
              ))}
            </Typography>

            <Carousel
              arrows
              autoplay={{ dotDuration: true }}
              dots={{ className: styles.carouselDots }}
              className={styles.carousel}
            >
              {images.map((image) => (
                <div key={image.key} className='figure'>
                  <img src={image.src} alt={image.label[locale]} />
                  <div className='figcaption'>{image.label[locale]}</div>
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
                {t.escale.airbnbView}
              </a>
              <a
                href='https://www.airbnb.fr/rooms/1634794174622461433?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget'
                rel='nofollow'
              >
                {t.escale.airbnbSummary}
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
