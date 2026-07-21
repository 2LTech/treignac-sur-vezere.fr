"use client";

import { Fragment } from "react";
import Link from "next/link";
import Layout from "antd/es/layout";

import Footer from "@/components/assets/footer";
import Header from "@/components/assets/header";
import Content from "@/components/assets/content";

import { useI18n } from "@/i18n/provider";

import styles from "@/components/assets/index.module.css";

// Factual company information (not translated)
const OWNER = "SCI GARNOTEL TREIGNAC";
const COMPANY_ID = "SCI GARNOTEL TREIGNAC 1 (SGT1)";
const ADDRESS = "1 AVENUE BEL AIR 19260 TREIGNAC";
const SIREN = "994 064 467";
const OWNER_CONTACT = "contact@treignac-sur-vezere.fr 07 43 10 28 86";
const PUBLICATION_DIRECTOR = "2LTech";
const PUBLICATION_DIRECTOR_CONTACT = "contact@2ltech.fr";
const HOST =
  "Nordnet - 245 Boulevard de Tournai (5ème étage) - CS 20458 - 59664 VILLENEUVE D'ASCQ CEDEX - Téléphone : 3420";
const ATTRIBUTION_URL =
  "https://commons.wikimedia.org/wiki/File:Bruy%C3%A8re_sur_les_Mon%C3%A9di%C3%A8res.jpg";

const Legal = () => {
  const { t } = useI18n();
  const { edition, ip, liability, cnil, cookies, law } = t.legal;

  return (
    <Layout className={styles.layout}>
      <Header />

      <Content>
        <h1>{edition.title}</h1>
        <p>{edition.intro}</p>
        <p>
          {edition.ownerLabel} {OWNER}
        </p>
        <ul>
          <li>
            {edition.contactLabel} {OWNER_CONTACT}
          </li>
          <li>
            {edition.addressLabel} {ADDRESS}
          </li>
        </ul>
        <p>
          {edition.companyIdLabel} {COMPANY_ID}
        </p>
        <ul>
          <li>
            {edition.sirenLabel} {SIREN}
          </li>
          <li>
            {edition.postalAddressLabel} {ADDRESS}
          </li>
        </ul>
        <p>
          {edition.publicationDirectorLabel} {PUBLICATION_DIRECTOR}
        </p>
        <ul>
          <li>
            {edition.contactLabel} {PUBLICATION_DIRECTOR_CONTACT}
          </li>
          <li>
            {edition.hostLabel} {HOST}
          </li>
        </ul>

        <h1>{ip.title}</h1>
        <Link href={ATTRIBUTION_URL} target="_blank">
          {ip.attributionLink}
        </Link>
        <p>
          {ip.paragraphs.map((paragraph, index) => (
            <Fragment key={paragraph}>
              {index > 0 && <br />}
              {paragraph}
            </Fragment>
          ))}
        </p>

        <h1>{liability.title}</h1>
        <p>
          {liability.paragraphs.map((paragraph, index) => (
            <Fragment key={paragraph}>
              {index > 0 && <br />}
              {paragraph}
            </Fragment>
          ))}
        </p>

        <h1>{cnil.title}</h1>
        <p>{cnil.paragraph}</p>

        <h1>{cookies.title}</h1>
        <p>
          {cookies.paragraphs.map((paragraph, index) => (
            <Fragment key={paragraph}>
              {index > 0 && <br />}
              {paragraph}
            </Fragment>
          ))}
        </p>

        <h1>{law.title}</h1>
        <p>{law.paragraph}</p>
      </Content>

      <Footer />
    </Layout>
  );
};

export default Legal;
