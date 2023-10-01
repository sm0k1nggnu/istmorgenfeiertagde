import { Footer } from './components/Footer/Footer'
import { Headline } from './components/Headline'
import { Holidays } from './components/Holidays'
import { Menu } from './components/Menu'
import styles from './styles/styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <div className="container">
        <Headline />
        <Holidays variant="a" />
      </div>
      <Footer />
    </main>
  )
}
