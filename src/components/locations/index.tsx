'use client'

import { Button, Card, Layout } from 'antd'

import Header from '@/components/assets/header'
import Footer from '@/components/assets/footer'
import Content from '@/components/assets/content'

import styles from '@/components/assets/index.module.css'
import Link from 'next/link'

const Locations = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Card
          cover={<img src='/img/une-escale-a-treignac/salon.jpg' alt='' />}
          className={styles.locationCard}
          actions={[
            <Link key='lien' href='/locations/une-escale-a-treignac'>
              <Button type='primary'>Ouvrir l'annonce</Button>
            </Link>,
          ]}
        >
          <Card.Meta
            title='Une Escale à Treignac'
            description={<>Maison 2 chambre, 4 lits, 1 salle de bain</>}
          />
        </Card>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Locations
