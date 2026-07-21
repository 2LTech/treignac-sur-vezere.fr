"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Card, Layout } from "antd";

import Header from "@/components/assets/header";
import Footer from "@/components/assets/footer";
import Content from "@/components/assets/content";

import { useI18n } from "@/i18n/provider";

import styles from "@/components/assets/index.module.css";

const Locations = () => {
  const { t, href } = useI18n();

  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Card
          cover={
            <Image
              src="/img/une-escale-a-treignac/salon.jpg"
              alt=""
              width={2048}
              height={1536}
              style={{
                height: "auto",
              }}
            />
          }
          className={styles.locationCard}
          actions={[
            <Link key="lien" href={href("/locations/une-escale-a-treignac")}>
              <Button type="primary">{t.locations.openListing}</Button>
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
  );
};

export default Locations;
