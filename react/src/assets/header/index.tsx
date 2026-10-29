import styles from './styles.module.css';

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header(props: HeaderProps) {
  console.log(props);
  const { children } = props;

  return (<h1 className={styles.header}>{children}</h1>);
}