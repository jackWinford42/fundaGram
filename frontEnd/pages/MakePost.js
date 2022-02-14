import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Api from './Api.js'
import { Button } from 'react-bootstrap';
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function MakePost() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    url:"",
    description:"",
    location:""
  });
  const [errors, setErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    //send the form data to app's function for creating posts
    const res = await Api.post(formData)

    console.log(res);
    router.push('/Home');
  }

  // Update form data to reflect change in form fields
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div className="MakePost">
      <div className={styles.topnav}>
        <Link href="/Home"><a>Home</a></Link>
        <Link href="/MakePost"><a>Make A Post</a></Link>
      </div>
      <div className={styles.main}>
        <form className="form-inline" onSubmit={handleSubmit}>
          <label>Image Url:</label>
          <input
            className="form-control form-control-md"
            name="url"
            placeholder="http://example.jpg"
            value={formData.url}
            onChange={handleChange}
          />
          <label>Description:</label>
          <input
            className="form-control form-control-md"
            name="description"
            placeholder="Check it out!"
            value={formData.description}
            onChange={handleChange}
          />
          <label>Location:</label>
          <input
            className="form-control form-control-md"
            name="location"
            placeholder="123 Whitehouse st."
            value={formData.location}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>
            Post It!
          </Button>
        </form>
      </div>
    </div>
  )
}
