import Head from "next/head"
import Link from "next/link"
import { Button } from "react-bootstrap"
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

//A landing page with a greeting and buttons to navigate to the auth pages
export default function Landing() {
  const router = useRouter()

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
          <Button onClick={() => router.push('/Login')}>
            <a>Log In</a>
          </Button>
          <Button onClick={() => router.push('/Signup')}>
            <a>Sign Up</a>
          </Button>
        </div>
      </main>

    </div>
  )
}
