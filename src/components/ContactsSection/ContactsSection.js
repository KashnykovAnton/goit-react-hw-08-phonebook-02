import styles from 'components/ContactsSection/ContactsSection.module.css';

export default function ContactsSection({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
