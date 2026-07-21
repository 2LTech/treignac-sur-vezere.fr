import Layout from "antd/es/layout";

import styles from "./index.module.css";

export interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Content: React.FunctionComponent<Props> = ({ children }) => {
  return <Layout.Content className={styles.content}>{children}</Layout.Content>;
};

export default Content;
