import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from 'antd'

import styles from './index.module.css'

/**
 * Footer
 * @returns Footer
 */
const Footer = () => {
  // Year
  const year = useMemo(() => new Date().getFullYear(), [])

  /**
   * Render
   */
  return (
    <Layout.Footer className={styles.footer}>
      <Link href='/mentions-legales'>Mentions légales</Link>
      <div>{year}&copy; Tous droits réservés</div>
      <div>
        Conçu avec{' '}
        <Image
          src='/img/footer/heart.svg'
          alt='amour'
          className={styles.heart}
          width={14}
          height={14}
        />{' '}
        par{' '}
        <Link href='https://2ltech.fr/' target='_blank'>
          2LTech
        </Link>
      </div>
    </Layout.Footer>
  )
}

export default Footer
