import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Post from './Post.js'
import Api from './Api.js'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function getPosts() {
      try {
        let cursor = await Api.fetchPosts();
        //cursor = await cursor.toArray();
        console.log(cursor)
        setPosts(cursor)
      } catch (err) {
        console.error("getPosts: issue loading posts collection", err);
      }
    }
    setLoading(true);
    getPosts()
    setLoading(false);
  }, [update])

  return (
    <div className={styles.container}>
      <Head>
        <title>FundaGram</title>
        <meta name="description" content="An Instagram clone project by Jack"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topnav}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/Profile"><a>Profile</a></Link>
          <Link href="/MakePost"><a>Make A Post</a></Link>
        </div>
        <div>
          {posts ? (posts.map(post => <Post data={post} setUpdate={setUpdate} update={update} key={post._id}/>)) : 
          <span>Nobody has posted anything or the database is inaccessible</span>}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
