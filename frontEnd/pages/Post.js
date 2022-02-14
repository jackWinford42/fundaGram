import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Api from './Api.js';
import { Card, Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid';

export default function Post({data, setUpdate, update}) {
  const [liked, setLiked] = useState(false);
  const [formData, setFormData] = useState({
    comment:""
  });

  const thumbColor = () => {
    setLiked(!liked)
    like();
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await Api.writeComment({comment: formData.comment, id: data._id, prevComments: data.comments}) 
    setUpdate(!update);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  async function like() {
    const newNum = liked ? data.likes - 1 : data.likes + 1;
    await Api.likePost({id: data._id, newNum: newNum});
    setUpdate(!update);
  }

  return (
    <Card className={styles.post}>
      <Card.Img alt={data.comment} src={data.url} width="400" height="400"/>
      <Card.Body>
        <span>{data.description}</span><br></br>
        <div className={styles.likeSpan}>
          {liked ? (<FontAwesomeIcon className={styles.likedThumb} icon={faThumbsUp} onClick={thumbColor}/>) :
          (<FontAwesomeIcon className={styles.thumb} icon={faThumbsUp} onClick={thumbColor}/>)}     
          <span className={styles.likeCount}>{data.likes}</span>
        </div><br></br>
        {data.location ? (<span>Location: {data.location}</span>) : null }
        <div>
          <h4>Comments</h4>
          {data.comments.map(comment => <p key={uuidv4()}>{comment}</p>)}
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              className="form-control form-control-md"
              name="comment"
              placeholder="write a comment..."
              value={formData.comment}
              onChange={handleChange}
            />
            <Button onClick={handleSubmit}>
              Share
            </Button>
          </form>
        </div>
      </Card.Body>
    </Card>
  )
}
