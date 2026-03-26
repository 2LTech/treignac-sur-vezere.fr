import Image from 'next/image'
import Link from 'next/link'
import { Layout, Menu } from 'antd'
import {
  ApiTwoTone,
  CompassTwoTone,
  HomeTwoTone,
  setTwoToneColor,
} from '@ant-design/icons'

import theme from '@/defs/theme'
import liens from '@/defs/liens'

import styles from './index.module.css'
import { useMemo } from 'react'
import useMobile from '../isMobile'

/**
 * Header
 * @returns Header
 */
const Header = () => {
  // Two-tone icons color
  setTwoToneColor(theme?.token?.colorPrimary!)

  // Is mobile
  const { isMobile } = useMobile()

  // Items
  const items = useMemo(
    () => [
      {
        key: 'home',
        label: <Link href='/'>Accueil</Link>,
        icon: <HomeTwoTone />,
      },
      {
        key: 'activites',
        label: <Link href='/activites'>Activités</Link>,
        icon: <CompassTwoTone />,
      },
      {
        key: 'locations',
        label: <Link href='/locations'>Locations</Link>,
        icon: <HomeTwoTone />,
      },
      {
        key: 'liens',
        label: 'Liens utiles',
        icon: <ApiTwoTone />,
        popupOffset: isMobile ? [-150, 35] : undefined,
        children: liens.map((lien) => ({
          key: lien.key,
          label: (
            <Link href={lien.url} target='_blank'>
              {lien.label}
            </Link>
          ),
        })),
      },
    ],
    [isMobile],
  )

  /**
   * Render
   */
  return (
    <Layout.Header className={styles.header}>
      <Link href='/' className={styles.title}>
        <Image src='/img/logo.png' width={64} height={64} alt='' />
        <span style={{ color: theme?.token?.colorPrimary }}>
          Treignac-sur-Vézère
        </span>
      </Link>
      <Menu mode='horizontal' className={styles.menu} items={items} />
    </Layout.Header>
  )
}

export default Header
