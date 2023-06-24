import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <form> CREATE ACCOUNT
            <label htmlFor="name"></label>
            <input id="name" type="text" name="name" placeholder="Your Name" />
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" placeholder="Your Email" />
            <label htmlFor="password"></label>
            <input id="password" type="pass" name="password" placeholder="Password" />
            <button type="submit">SIGN UP</button>
            <p>Have already an account? <Link to='/login'>Login</Link></p>
        </form>
    )
}

export default RegisterPage;