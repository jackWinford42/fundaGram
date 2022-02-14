import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//THIS PAGE IS UNDER CONSTRUCTION
//The profile page would display information about the user including their picture
//and posting history.
export default function Profile() {
  const [user, setUser] = useState({});

//  useEffect(() => {
//    async function getUser() {
//      try {
//        let user = await Api.fetchUser();
//        setUser(user);
//      } catch (err) {
//        console.error("getPosts: issue loading posts collection", err);
//      }
//    }
//    getUser()
//  }, [])

  return (
    <div className="Profile">
      <div className={styles.topnav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/Profile"><a>Profile</a></Link>
        <Link href="/MakePost"><a>Make A Post</a></Link>
      </div>
      <div className={styles.main}>
        <div id="title">
          <h1>Profile Page</h1>
        </div>
        <div id="profile_content">
          <div className="row">
            <div className="col-5"> 
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><span>Display name: user.username</span></li>
                <li className="list-group-item"><span>Email: user.email</span></li>
                <li className="list-group-item">
                  <button className="btn btn-lrg btn-danger">Delete Account</button>
                </li>
              </ul>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
