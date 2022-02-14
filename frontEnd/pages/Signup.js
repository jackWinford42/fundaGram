import React, { useState } from "react";
import Api from "./Api.js";
import { useRouter } from "next/router";
import { Button, Card } from "react-bootstrap";
import styles from '../styles/Home.module.css'

/** Sign up form for getting the username, password, 
 * email, and profile picture of a new user. On submit a callback function
 * from app is called to register the user with the values from the
 * form.
 */
export default function Signup({ signup }) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
    profile_pic:""
  });
  const [errors, setErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    //send the form data to app's signup function
    const res = await Api.signup(formData)

    router.push('/Home');
  }

  // Update form data to reflect change in form fields
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className={styles.center}>
        <Card className={styles.authForm}>
          <form className="form-inline" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              className="form-control form-control-md"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label>Password:</label>
            <input
              className="form-control form-control-md"
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label>Email:</label>
            <input
              className="form-control form-control-md"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Profile Picture Url:</label>
            <input
              className="form-control form-control-md"
              name="profile_pic"
              placeholder="url"
              value={formData.profile_pic}
              onChange={handleChange}
            />
            <Button onClick={handleSubmit}>
              sign up
            </Button>
          </form>
        </Card>
      </div>
  );
}
