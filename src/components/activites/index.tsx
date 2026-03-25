'use client'

import Link from 'next/link'
import { Card, Layout, Masonry, Tooltip } from 'antd'
import {
  FacebookFilled,
  HeartFilled,
  InstagramFilled,
  LinkOutlined,
  NodeIndexOutlined,
  SendOutlined,
  ShopFilled,
  SmileOutlined,
  TikTokFilled,
} from '@ant-design/icons'

import Header from '@/components/assets/header'
import Content from '@/components/assets/content'
import Footer from '@/components/assets/footer'

import ForkFilled from '@/components/assets/icons/fork'
import BeachFilled from '@/components/assets/icons/beach'

import styles from '@/components/assets/index.module.css'

import activites, { Activite } from '@/defs/activites'

const shuffle = (array: any[]) => {
  let i = array.length
  while (--i > 0) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }
}

shuffle(activites)

const itemRender = ({ data }: { data: Activite['data'] }) => {
  const actions = []
  if (data.link)
    actions.push(
      <Link key='link' href={data.link} target='_blank'>
        <LinkOutlined />
      </Link>,
    )
  if (data.facebook)
    actions.push(
      <Link key='facebook' href={data.facebook} target='_blank'>
        <FacebookFilled />
      </Link>,
    )
  if (data.instagram)
    actions.push(
      <Link key='instagram' href={data.instagram} target='_blank'>
        <InstagramFilled />
      </Link>,
    )
  if (data.tiktok)
    actions.push(
      <Link key='tiktok' href={data.tiktok} target='_blank'>
        <TikTokFilled />
      </Link>,
    )
  if (data.maps)
    actions.push(
      <Link key='maps' href={data.maps} target='_blank'>
        <SendOutlined />
      </Link>,
    )

  let cover = undefined
  if (data.img) cover = <img src={data.img} alt='' />

  let avatar = []
  if (data.type.includes('adresse'))
    avatar.push(
      <Tooltip key='adresse' title='Adresse Utile'>
        <ShopFilled />
      </Tooltip>,
    )
  if (data.type.includes('randonnee'))
    avatar.push(
      <Tooltip key='randonnee' title='Randonnée'>
        <NodeIndexOutlined />
      </Tooltip>,
    )
  if (data.type.includes('gastronomie'))
    avatar.push(
      <Tooltip key='gastronomie' title='Gastronomie'>
        <ForkFilled />
      </Tooltip>,
    )
  if (data.type.includes('exterieur'))
    avatar.push(
      <Tooltip key='exterieur' title='Activité extérieure'>
        <BeachFilled />
      </Tooltip>,
    )
  if (data.type.includes('sante'))
    avatar.push(
      <Tooltip key='sante' title='Santé'>
        <HeartFilled />
      </Tooltip>,
    )
  if (data.type.includes('bien-etre'))
    avatar.push(
      <Tooltip key='bien-etre' title='Bien-être'>
        <SmileOutlined />
      </Tooltip>,
    )

  return (
    <Card actions={actions} cover={cover}>
      <Card.Meta
        avatar={avatar}
        title={data.label}
        description={data.description}
      />
    </Card>
  )
}

const Activites = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
          gutter={{ xs: 8, sm: 12, md: 16, lg: 32 }}
          items={activites}
          itemRender={itemRender}
        />
        <div className={styles.marginTop}>
          On vous a oublié ? Envoyez-nous un{' '}
          <Link href='mailto:contact@treignac-sur-vezere.fr'>email</Link>.
        </div>
      </Content>

      <Footer />
    </Layout>
  )
}

export default Activites
