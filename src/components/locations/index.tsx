'use client'

import Button from 'antd/es/button'
import Card from 'antd/es/card'
import Layout from 'antd/es/layout'

import Header from '@/components/assets/header'
import Footer from '@/components/assets/footer'
import Content from '@/components/assets/content'

import { useI18n } from '@/i18n/provider'

import styles from '@/components/assets/index.module.css'
import Link from 'next/link'

const Locations = () => {
  const { t, href } = useI18n()

  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Card
          cover={<img src='/img/une-escale-a-treignac/salon.jpg' alt='' />}
          className={styles.locationCard}
          actions={[
            <Link key='lien' href={href('/locations/une-escale-a-treignac')}>
              <Button type='primary'>{t.locations.openListing}</Button>
            </Link>,
          ]}
        >
          <Card.Meta
            title={t.locations.cardTitle}
            description={t.locations.cardDescription}
          />
        </Card>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Locations
