import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <form> LOGIN
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" placeholder="Your Email" />
            <label htmlFor="password"></label>
            <input id="password" type="pass" name="password" placeholder="Password" />
            <button type="submit">LOGIN</button>
            <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
        </form>
    )
}

export default LoginPage;