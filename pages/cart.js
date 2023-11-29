import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import navbar from '../styles/navbar.module.css';
import menu from '../pages/menu';

export default function Cart({price}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yakitori jimbei | Cart</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <nav className={navbar.navbar}>
        <h5 className={navbar.logo}>Yakitori Jimbei</h5>
        <ul className={navbar.links}>
          <li className={navbar.navlink}>
            <Link href="/">Home</Link>
          </li>
          <li className={navbar.navlink}>
            <Link href="/menu">Menu</Link>
          </li>
          <li className={navbar.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>


      <main>


      </main>
      <p><Link href="/"> Back to home</Link></p>
    </div>

  )
}