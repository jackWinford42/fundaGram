import Head from 'next/head'
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
          <Link href="/auth/Login"><a>Home</a></Link>
          <Link href="/auth/Signup"><a>Profile</a></Link>
        </div>
        <h1 className={styles.title}>
          Welcome to fundaGram!
        </h1>
        <div>
          <button>
            <Link href="/auth/Login"><a>Log In</a></Link>
          </button>
          <button>
            <Link href="/auth/Signup"><a>Sign Up</a></Link>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
