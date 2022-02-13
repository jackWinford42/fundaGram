import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Api from './Api.js'
import 'reactjs-popup/dist/index.css';
import { useRouter } from "next/router";

import styles from '../styles/Home.module.css'

export default function MakePost() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    url:"",
    comment:"",
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
      <form className="form-inline" onSubmit={handleSubmit}>
        <label>Image Url:</label>
        <input
          className="form-control form-control-md"
          name="url"
          placeholder="http://example.jpg"
          value={formData.url}
          onChange={handleChange}
        />
        <label>Comment:</label>
        <input
          className="form-control form-control-md"
          name="comment"
          placeholder="I had a great day at the Whitehouse!"
          value={formData.comment}
          onChange={handleChange}
        />
        <label>Location:</label>
        <input
          className="form-control form-control-md"
          name="location"
          placeholder="123 Whitehouse rd."
          value={formData.location}
          onChange={handleChange}
        />
        <button className="authButton" onClick={handleSubmit}>
          Post It!
        </button>
      </form>
    </div>
  )
}
