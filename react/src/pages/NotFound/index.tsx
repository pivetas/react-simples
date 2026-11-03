import { MainTemplate } from '../../templates/MainTamplate';
import styles from './styles.module.css';

export function NotFound() {
  return (
    <MainTemplate>
      <div className={styles.notFound}>
        <h2 className={styles.code}>404</h2>
        <p className={styles.text}>Página não encontrada</p>
      </div>
    </MainTemplate>
  );
}