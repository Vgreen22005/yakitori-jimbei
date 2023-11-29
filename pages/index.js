import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import navbar from '../styles/navbar.module.css';
import { CartProvider } from '../pages/cartContext';

export default function Home() {
  return (
    <CartProvider>
    {/*container for page*/}
    <div className={styles.container}>

      {/*page header below */}
      <Head>
        <title>Yakitori Jimbei</title>
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
        </ul>
      </nav>


      <main>
        <h1 className={styles.title}>
          Yakitori Jimbei
        </h1>
        <Image
          src="/images/octopus.jpeg"
          height={600}
          width={800}
          alt="Octopus Dish"
        />
        <p className={styles.description}>
          Sushi, small plates, and more!
        </p>

        <div className={styles.grid}>
          <Link href="/menu" className={styles.card}>
            <h3>Menu &rarr;</h3>
            <p>Start your order here.</p>
          </Link>
        </div>
      </main>


      <footer>
        <p>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </p>

        <p>
          All icons are by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        footer p {
          padding: 1rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </CartProvider>
  );
}

