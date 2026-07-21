"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import {
  ApiTwoTone,
  CompassTwoTone,
  GlobalOutlined,
  HomeTwoTone,
  setTwoToneColor,
} from "@ant-design/icons";

import theme from "@/defs/theme";
import liens from "@/defs/liens";

import { locales, localeLabels } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

import useMobile from "../isMobile";

import styles from "./index.module.css";

/**
 * Header
 * @returns Header
 */
const Header = () => {
  // Two-tone icons color
  setTwoToneColor(theme.token.colorPrimary);

  // Is mobile
  const { isMobile } = useMobile();

  // I18n
  const { locale, t, href } = useI18n();

  // Current path
  const pathname = usePathname();

  // Switch the current path to another locale
  const swapLocale = useMemo(() => {
    return (target: string) => {
      const parts = pathname.split("/");
      parts[1] = target;
      return parts.join("/") || `/${target}`;
    };
  }, [pathname]);

  // Items
  const items = useMemo(
    () => [
      {
        key: "home",
        label: <Link href={href("/")}>{t.nav.home}</Link>,
        icon: <HomeTwoTone />,
      },
      {
        key: "activites",
        label: <Link href={href("/activites")}>{t.nav.activites}</Link>,
        icon: <CompassTwoTone />,
      },
      {
        key: "locations",
        label: <Link href={href("/locations")}>{t.nav.locations}</Link>,
        icon: <HomeTwoTone />,
      },
      {
        key: "liens",
        label: t.nav.liens,
        icon: <ApiTwoTone />,
        popupOffset: isMobile ? [-150, 35] : undefined,
        children: liens.map((lien) => ({
          key: lien.key,
          label: (
            <Link href={lien.url} target="_blank">
              {lien.label}
            </Link>
          ),
        })),
      },
      {
        key: "language",
        label: localeLabels[locale],
        icon: <GlobalOutlined />,
        popupOffset: isMobile ? [-100, 35] : undefined,
        children: locales.map((target) => ({
          key: target,
          label: <Link href={swapLocale(target)}>{localeLabels[target]}</Link>,
        })),
      },
    ],
    [isMobile, locale, t, href, swapLocale],
  );

  /**
   * Render
   */
  return (
    <Layout.Header className={styles.header}>
      <Menu mode="horizontal" className={styles.menu} items={items} />
      <Link href={href("/")} className={styles.title}>
        <Image src="/img/logo.png" width={64} height={64} alt="" />
        <span style={{ color: theme?.token?.colorPrimary }}>
          Treignac-sur-Vézère
        </span>
      </Link>
    </Layout.Header>
  );
};

export default Header;
