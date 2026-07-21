"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, Layout, Masonry, Tooltip } from "antd";
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
} from "@ant-design/icons";

import Header from "@/components/assets/header";
import Content from "@/components/assets/content";
import Footer from "@/components/assets/footer";

import ForkFilled from "@/components/assets/icons/fork";
import BeachFilled from "@/components/assets/icons/beach";

import { useI18n } from "@/i18n/provider";
import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";

import styles from "@/components/assets/index.module.css";

import activites, { Activite } from "@/defs/activites";

const shuffle = (array: unknown[]) => {
  let i = array.length;
  while (--i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
};

shuffle(activites);

const itemRender = (
  { data }: { data: Activite["data"] },
  locale: Locale,
  t: Dictionary,
) => {
  const tooltips = t.activites.tooltips;
  const actions = [];
  if (data.link)
    actions.push(
      <Link key="link" href={data.link} target="_blank">
        <LinkOutlined />
      </Link>,
    );
  if (data.facebook)
    actions.push(
      <Link key="facebook" href={data.facebook} target="_blank">
        <FacebookFilled />
      </Link>,
    );
  if (data.instagram)
    actions.push(
      <Link key="instagram" href={data.instagram} target="_blank">
        <InstagramFilled />
      </Link>,
    );
  if (data.tiktok)
    actions.push(
      <Link key="tiktok" href={data.tiktok} target="_blank">
        <TikTokFilled />
      </Link>,
    );
  if (data.maps)
    actions.push(
      <Link key="maps" href={data.maps} target="_blank">
        <SendOutlined />
      </Link>,
    );

  let cover = undefined;
  if (data.img)
    cover = (
      <Image
        src={data.img}
        alt=""
        width={500}
        height={500}
        style={{ height: "auto" }}
        loading="eager"
      />
    );

  const avatar = [];
  if (data.type.includes("adresse"))
    avatar.push(
      <Tooltip key="adresse" title={tooltips.adresse}>
        <ShopFilled />
      </Tooltip>,
    );
  if (data.type.includes("randonnee"))
    avatar.push(
      <Tooltip key="randonnee" title={tooltips.randonnee}>
        <NodeIndexOutlined />
      </Tooltip>,
    );
  if (data.type.includes("gastronomie"))
    avatar.push(
      <Tooltip key="gastronomie" title={tooltips.gastronomie}>
        <ForkFilled />
      </Tooltip>,
    );
  if (data.type.includes("exterieur"))
    avatar.push(
      <Tooltip key="exterieur" title={tooltips.exterieur}>
        <BeachFilled />
      </Tooltip>,
    );
  if (data.type.includes("sante"))
    avatar.push(
      <Tooltip key="sante" title={tooltips.sante}>
        <HeartFilled />
      </Tooltip>,
    );
  if (data.type.includes("bien-etre"))
    avatar.push(
      <Tooltip key="bien-etre" title={tooltips["bien-etre"]}>
        <SmileOutlined />
      </Tooltip>,
    );

  return (
    <Card actions={actions} cover={cover}>
      <Card.Meta
        avatar={avatar}
        title={data.label}
        description={data.description?.[locale]}
      />
    </Card>
  );
};

const Activites = () => {
  const { locale, t } = useI18n();

  return (
    <Layout className={styles.layout}>
      <Header />
      <Content>
        <Masonry
          columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}
          gutter={{ xs: 8, sm: 12, md: 16, lg: 32 }}
          items={activites}
          itemRender={(d) => itemRender(d, locale, t)}
        />
        <div className={styles.marginTop}>
          {t.activites.addUsPrefix}
          <Link href="mailto:contact@treignac-sur-vezere.fr">
            {t.activites.addUsLink}
          </Link>
          {t.activites.addUsSuffix}
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Activites;
