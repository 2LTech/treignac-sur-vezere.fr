'use client'

import Link from 'next/link'
import Button from 'antd/es/button'
import Card from 'antd/es/card'
import Carousel from 'antd/es/carousel'
import Layout from 'antd/es/layout'
import Masonry from 'antd/es/masonry'
import Space from 'antd/es/space'
import Tag from 'antd/es/tag'
import Typography from 'antd/es/typography'
import {
  ArrowRightOutlined,
  CompassOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

import Header from '@/components/assets/header'
import Footer from '@/components/assets/footer'
import Content from '@/components/assets/content'

import citations, { Citation } from '@/defs/citations'
import images from '@/defs/images'

import styles from '@/components/assets/index.module.css'

const highlights = [
  {
    label: 'Code postal',
    value: '19260',
    detail: 'Corrèze, Nouvelle-Aquitaine',
  },
  {
    label: 'Paysages',
    value: 'Vézère',
    detail: 'Gorges, ponts et sentiers',
  },
  {
    label: 'Nature',
    value: 'Monédières',
    detail: 'Aux portes du plateau de Millevaches',
  },
]

const treignacCards = [
  {
    icon: <HomeOutlined />,
    title: 'Un bourg de caractère',
    text: 'Treignac mêle maisons de granit, halle ancienne, ruelles médiévales et points de vue sur la Vézère. Le village est labellisé Petite Cité de Caractère®.',
  },
  {
    icon: <CompassOutlined />,
    title: 'Entre eau et relief',
    text: 'La commune se situe au pied du massif des Monédières, dans un paysage vert de gorges, forêts, chemins de randonnée et panoramas.',
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Le lac des Bariousses',
    text: 'À quelques minutes du centre, le barrage de Treignac forme le lac des Bariousses, apprécié pour la baignade, les loisirs nautiques, la pêche et les balades.',
  },
]

const itemRender = ({ data }: { data: Citation['data'] }) => {
  return (
    <Card hoverable className={styles.citationCard}>
      <Typography className={styles.citation}>
        {data.content.map((content) => (
          <Typography.Paragraph key={content.toString()}>
            {content}
          </Typography.Paragraph>
        ))}
        <Typography.Paragraph className={styles.citationDescription}>
          <Link href={data.link.url} target='_blank'>
            {data.link.label}
          </Link>
        </Typography.Paragraph>
      </Typography>
    </Card>
  )
}

const Home = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Treignac_Panorama.jpg/1280px-Treignac_Panorama.jpg'
              alt='Panorama de Treignac-sur-Vézère'
            />
          </div>
          <div className={styles.heroContent}>
            <Space size={[8, 8]} wrap className={styles.heroTags}>
              <Tag color='success'>Corrèze</Tag>
              <Tag color='processing'>Nouvelle-Aquitaine</Tag>
            </Space>
            <Typography.Title level={1}>Treignac-sur-Vézère</Typography.Title>
            <Typography.Paragraph className={styles.heroText}>
              Une petite cité de caractère en Corrèze, posée entre les gorges de
              la Vézère, le massif des Monédières et le lac des Bariousses. Ici,
              les ruelles médiévales, les maisons de granit et les paysages du
              plateau de Millevaches donnent au village une présence à la fois
              patrimoniale et très nature.
            </Typography.Paragraph>
            <Space size={12} wrap>
              <Button
                type='primary'
                href='/activites'
                icon={<CompassOutlined />}
              >
                Explorer les activités
              </Button>
              <Button href='/locations' icon={<ArrowRightOutlined />}>
                Voir les locations
              </Button>
            </Space>
          </div>
        </section>

        <section className={styles.highlightGrid} aria-label='Repères'>
          {highlights.map((highlight) => (
            <div className={styles.highlight} key={highlight.label}>
              <span>{highlight.label}</span>
              <strong>{highlight.value}</strong>
              <small>{highlight.detail}</small>
            </div>
          ))}
        </section>

        <section className={styles.introSection}>
          <div>
            <Typography.Title level={2}>
              <Link
                href='https://www.petitescitesdecaractere.com/cites/treignac/'
                target='_blank'
              >
                Petite Cité de Caractère<sup>&reg;</sup>
              </Link>{' '}
              en Corrèze
            </Typography.Title>
            <Typography.Paragraph>
              Treignac, 19260, est une commune corrézienne de caractère où le
              patrimoine se découvre à pied : la halle, les ponts sur la Vézère,
              les chapelles, la porte Chabirande et les perspectives sur les
              toits du vieux bourg.
            </Typography.Paragraph>
          </div>
          <div className={styles.locationPill}>
            <EnvironmentOutlined />
            <span>Entre Tulle, Uzerche, sur le plateau de Millevaches</span>
          </div>
        </section>

        <Carousel
          arrows
          autoplay={{ dotDuration: true }}
          dots={{ className: styles.carouselDots }}
          draggable
          className={styles.carousel}
        >
          {images.map((image) => (
            <div key={image.key} className='figure'>
              <img src={image.src} alt={image.label} />
              <div className='figcaption'>
                {image.label}
                {' - '}
                <Link href={image.source} target='_blank'>
                  Source
                </Link>
              </div>
            </div>
          ))}
        </Carousel>

        <section className={styles.cardGrid}>
          {treignacCards.map((card) => (
            <Card key={card.title} className={styles.infoCard}>
              <div className={styles.infoIcon}>{card.icon}</div>
              <Typography.Title level={3}>{card.title}</Typography.Title>
              <Typography.Paragraph>{card.text}</Typography.Paragraph>
            </Card>
          ))}
        </section>

        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
          gutter={{ xs: 8, sm: 12, md: 16, lg: 32 }}
          items={citations}
          itemRender={itemRender}
        />
      </Content>
      <Footer />
    </Layout>
  )
}

export default Home
