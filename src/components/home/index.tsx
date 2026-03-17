'use client'

import Link from 'next/link'
import { Card, Carousel, Layout, Masonry, Typography } from 'antd'

import Header from '@/components/assets/header'
import Footer from '@/components/assets/footer'
import Content from '@/components/assets/content'

import citations, { Citation } from '@/defs/citations'
import images from '@/defs/images'

import styles from '@/components/assets/index.module.css'

const itemRender = ({ data }: { data: Citation['data'] }) => {
  return (
    <Card hoverable>
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
        <Typography.Title level={2}>
          <Link
            href='https://www.petitescitesdecaractere.com/cites/treignac/'
            target='_blank'
          >
            Petite cité de caractère<sup>&reg;</sup>
          </Link>{' '}
          en Corrèze
        </Typography.Title>

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
