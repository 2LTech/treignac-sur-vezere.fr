"use client";

import Link from "next/link";
import Button from "antd/es/button";
import Card from "antd/es/card";
import Carousel from "antd/es/carousel";
import Layout from "antd/es/layout";
import Masonry from "antd/es/masonry";
import Space from "antd/es/space";
import Tag from "antd/es/tag";
import Typography from "antd/es/typography";
import {
  ArrowRightOutlined,
  CompassOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import Header from "@/components/assets/header";
import Footer from "@/components/assets/footer";
import Content from "@/components/assets/content";

import { useI18n } from "@/i18n/provider";
import { Locale } from "@/i18n/config";
import citations, { Citation } from "@/defs/citations";
import images from "@/defs/images";

import styles from "@/components/assets/index.module.css";

const cardIcons = [
  <HomeOutlined key="home" />,
  <CompassOutlined key="compass" />,
  <ThunderboltOutlined key="thunderbolt" />,
];

const itemRender = ({ data }: { data: Citation["data"] }, locale: Locale) => {
  return (
    <Card hoverable className={styles.citationCard}>
      <Typography className={styles.citation}>
        {data.content[locale].map((content) => (
          <Typography.Paragraph key={content.toString()}>
            {content}
          </Typography.Paragraph>
        ))}
        <Typography.Paragraph className={styles.citationDescription}>
          <Link href={data.link.url} target="_blank">
            {data.link.label}
          </Link>
        </Typography.Paragraph>
      </Typography>
    </Card>
  );
};

const Home = () => {
  const { locale, t, href } = useI18n();

  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Treignac_Panorama.jpg/1280px-Treignac_Panorama.jpg"
              alt={t.home.heroAlt}
            />
          </div>
          <div className={styles.heroContent}>
            <Space size={[8, 8]} wrap className={styles.heroTags}>
              <Tag color="success">{t.home.tags.correze}</Tag>
              <Tag color="processing">{t.home.tags.nouvelleAquitaine}</Tag>
            </Space>
            <Typography.Title level={1}>{t.home.title}</Typography.Title>
            <Typography.Paragraph className={styles.heroText}>
              {t.home.heroText}
            </Typography.Paragraph>
            <Space size={12} wrap>
              <Button
                type="primary"
                href={href("/activites")}
                icon={<CompassOutlined />}
              >
                {t.home.exploreActivities}
              </Button>
              <Button href={href("/locations")} icon={<ArrowRightOutlined />}>
                {t.home.seeLocations}
              </Button>
            </Space>
          </div>
        </section>

        <section className={styles.highlightGrid} aria-label="Treignac">
          {t.home.highlights.map((highlight) => (
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
                href="https://www.petitescitesdecaractere.com/cites/treignac/"
                target="_blank"
              >
                {t.home.introTitlePrefix}
                <sup>&reg;</sup>
              </Link>{" "}
              {t.home.introTitleSuffix}
            </Typography.Title>
            <Typography.Paragraph>{t.home.introParagraph}</Typography.Paragraph>
          </div>
          <div className={styles.locationPill}>
            <EnvironmentOutlined />
            <span>{t.home.locationPill}</span>
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
            <div key={image.key} className="figure">
              <img src={image.src} alt={image.label[locale]} />
              <div className="figcaption">
                {image.label[locale]}
                {" - "}
                <Link href={image.source} target="_blank">
                  {t.home.source}
                </Link>
              </div>
            </div>
          ))}
        </Carousel>

        <section className={styles.cardGrid}>
          {t.home.cards.map((card, index) => (
            <Card key={card.title} className={styles.infoCard}>
              <div className={styles.infoIcon}>{cardIcons[index]}</div>
              <Typography.Title level={3}>{card.title}</Typography.Title>
              <Typography.Paragraph>{card.text}</Typography.Paragraph>
            </Card>
          ))}
        </section>

        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
          gutter={{ xs: 8, sm: 12, md: 16, lg: 32 }}
          items={citations}
          itemRender={(d) => itemRender(d, locale)}
        />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Home;
