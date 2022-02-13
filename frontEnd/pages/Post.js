import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post({data}) {
  const [liked, setLiked] = useState(false);

  const thumbColor = () => {
    setLiked(!liked)
  }

  return (
    <Card className="Post">
      <Card.Img alt={data.comment} src={data.url} width="400" height="400"/>
      <Card.Body>
        <span>{data.description}</span><br></br>
        {liked ? (<FontAwesomeIcon className={styles.thumb} icon={faThumbsUp} onClick={thumbColor}/>) :
        (<FontAwesomeIcon className={styles.likedThumb} icon={faThumbsUp} onClick={thumbColor}/>)}
        {data.location ? (<span>Location: {data.location}</span>) : null }
        <div>
          <h4>Comments</h4>
          {data.comments.map(comment => {
            <span>{comment.userName}: {comment.text}</span>
          })}
        </div>
      </Card.Body>
    </Card>
  )
}
