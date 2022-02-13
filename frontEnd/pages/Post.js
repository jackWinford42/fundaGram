import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Post({data}) {

  return (
    <div className={styles.container}>
      <img alt={data.comment} src={data.url} width="400" height="400"/>
      <span>{data.comment}</span>
      {data.location ? (<span>{data.location}</span>) : null }
    </div>
  )
}
