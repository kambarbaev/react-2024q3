import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <section className={styles['error']}>
      <h2 className={styles['title']}>SOMETHING WENT WRONG</h2>
      <h3 className={styles['subtitle']}>PLEASE RELOAD THE PAGE!</h3>
    </section>
  );
}

export default ErrorPage;
