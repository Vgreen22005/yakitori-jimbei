import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import navbar from '../styles/navbar.module.css';
import React from 'react'
import { useState } from 'react'

export default function Menu() {
  var menuItems = [
    { id: '1', name: 'octopus', price: 15, count: 0 },
    { id: '2', name: 'donut', price: 8, count: 0 },
    { id: '3', name: 'brulee', price: 8, count: 0 },
    { id: '4', name: 'flounder', price: 21, count: 0 },
    { id: '5', name: 'snapper', price: 28, count: 0 },
    { id: '6', name: 'sushi', price: 21, count: 0 }
  ];
  let octopus = ['octopus', "15"]
  let donut = ["dounut", "8"]
  let brulee = ["brulee", "8"]
  let flounder = ["flounder", "21"]
  let snapper = ["snapper", "28"]
  let sushi = ["sushi", "21"]

  let [total, setTotal] = useState(0);

  function countUpdate(menuName) {
    menuItems.forEach((menuItems) => {
      if (menuName === menuItems.name) {
        menuItems.count = menuItems.count + 1;
        setTotal(total + menuItems.price);
      }
    })
  }

  function CartRender(menuName) {
    return(
      
      menuItems.map((menuItems) => {
            <>
              <p>{menuItems.name}</p>
              <p>{menuItems.price}</p>
              <p>{menuItems.count}</p>
            </>
      })
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Yakitori jimbei | Menu</title>
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
        <h1 className={styles.title}> Menu </h1>

        <h1> Main </h1>


        <button style={styles.button} onClick={() => countUpdate("octopus")}>
          <div className={styles.card}>
            <h3>Octopus &rarr;</h3>
            <Image
              src="/images/octopus.jpeg"
              height={150}
              width={200}
              alt="Octopus Dish"
            />
            <p>Steamed optopus | blood orange | thai basil coulis | heirloom cherry tomato</p>
            <p>price: {octopus}</p>
          </div>
        </button>


        <button style={styles.button} onClick={() => countUpdate("sushi")}>
          <div className={styles.card}>
            <h3>Sushi &rarr;</h3>
            <Image
              src="/images/sushi.jpeg"
              height={225}
              width={190}
              alt="Octopus Dish"
            />
            <p>spicy tuna roll | spicy salmon roll | chive | wasabi creme | micro greens</p>
            <p>price: {sushi}</p>
          </div>
        </button>


        <button style={styles.button} onClick={() => countUpdate("snapper")}>
          <div className={styles.card}>
            <h3>Snapper &rarr;</h3>
            <Image
              src="/images/snapper.jpeg"
              height={200}
              width={200}
              alt="grilled red snapper dish"
            />
            <p>Grilled Red Snapper | thai chilies | cilantro | lemongrass | spring onion</p>
            <p>price: {snapper}</p>
          </div>
        </button>


        <button style={styles.button} onClick={() => countUpdate("flounder")}>
          <div className={styles.card}>
            <h3>Flounder &rarr;</h3>
            <Image
              src="/images/flounder.jpeg"
              height={150}
              width={200}
              alt="pan roasted flounder"
            />
            <p>Seared flouder | fingerling Potato | thai basil coulis | heirloom cherry tomato</p>
            <p>price: {flounder}</p>
          </div>
        </button>


        <h1>Dessert</h1>


        <button style={styles.button} onClick={() => countUpdate("brulee")}>
          <div className={styles.card}>
            <h3>Green Tea Creme Brulee &rarr;</h3>
            <Image
              src="/images/brulee.jpeg"
              height={150}
              width={200}
              alt="green tes creme brulee"
            />
            <p>Green tea creme brulee | fresh berries | sugar glazed mint | whipped cream</p>
            <p>price: {brulee}</p>
          </div>
        </button>


        <button style={styles.button} onClick={() => countUpdate("donut")}>
          <div className={styles.card}>
            <h3>House Donuts &rarr;</h3>
            <Image
              src="/images/donuts.jpeg"
              height={200}
              width={200}
              alt="Octopus Dish"
            />
            <p>House made donuts | confection sugar | roasted pear | matcha honey glaze</p>
            <p>price: {donut}</p>
          </div>
        </button>
      </main>

      {/*The checkout cart section */}
      <h1 className={styles.title}> Cart </h1>

      <div className={styles.card}>
        <h3>Checkout &rarr;</h3>
        <CartRender />
        <p>Total Price: ${total}</p>
      </div>

      <footer>
        <p>
          <Link href="/"> Back to home</Link>
        </p>

        <p>
          All icons are by <a target="_blank" href="https://icons8.com">Icons8.com</a>
        </p>
        <p>Food images are personal images taken by myself </p>
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
        button {
          background: #FFFFFF;
          border: none;
        }
    `}</style>
    </div>
  )
}