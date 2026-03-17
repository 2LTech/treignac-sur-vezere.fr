import { Layout } from 'antd'

import styles from './index.module.css'

export interface Props {
  children: any
}

const Content: React.FunctionComponent<Props> = ({ children }) => {
  return <Layout.Content className={styles.content}>{children}</Layout.Content>
}

export default Content
