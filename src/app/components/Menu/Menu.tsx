import styles from './styles.module.css'

export const Menu = () => {
  return (
    <nav className={styles.nav}>
      <div>{new Date().toLocaleString() + ''}</div>
    </nav>
  )
}
