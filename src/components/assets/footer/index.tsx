import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "antd";

import { useI18n } from "@/i18n/provider";

import styles from "./index.module.css";

/**
 * Footer
 * @returns Footer
 */
const Footer = () => {
  // I18n
  const { t, href } = useI18n();

  // Year
  const year = useMemo(() => new Date().getFullYear(), []);

  /**
   * Render
   */
  return (
    <Layout.Footer className={styles.footer}>
      <Link href={href("/mentions-legales")}>{t.footer.legal}</Link>
      <div>
        {year}&copy; {t.footer.rights}
      </div>
      <div>
        {t.footer.designedWith}{" "}
        <Image
          src="/img/footer/heart.svg"
          alt={t.footer.heartAlt}
          className={styles.heart}
          width={14}
          height={14}
        />{" "}
        {t.footer.by}{" "}
        <Link href="https://2ltech.fr/" target="_blank">
          2LTech
        </Link>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
