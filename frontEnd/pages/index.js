import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="landing" content="Greeting and buttons of sign up and log in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topnav}>
          <Link href="/Login"><a>Log In</a></Link>
          <Link href="/Signup"><a>Sign Up</a></Link>
        </div>
        <h1 className={styles.title}>
          Welcome to fundaGram!
        </h1>
        <div>
          <button>
            <Link href="/Login"><a>Log In</a></Link>
          </button>
          <button>
            <Link href="/Signup"><a>Sign Up</a></Link>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
