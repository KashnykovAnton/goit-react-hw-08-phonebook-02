import styles from 'Pages/HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome in Phonebook</h1>
      <p className={styles.text}>
        Dear costumer, here you can save your contacts and edit them.
      </p>
      <p className={styles.text}>I think you will enjoy using this site!</p>
    </div>
  );
}
