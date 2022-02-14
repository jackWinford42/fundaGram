import React, { useState } from "react";
import Api from "./Api.js";
import { useRouter } from "next/router";
import { Button, Card } from "react-bootstrap";
import styles from '../styles/Home.module.css'

/** log in form for getting the username, password a user.
 *  On submit a callback function from app is called to authenticate 
 * the user with the values from the form.
 */
function LoginForm({ login }) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username:"",
    password:""
  });
  const [errors, setErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    //send the form data to app's login function
    const res = await Api.login(formData)

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
            id="bottomInput"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button className="authButton" onClick={handleSubmit}>
            log in
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
