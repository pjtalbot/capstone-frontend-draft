import React, { useSate } from "react"
import { Link, NavLink } from "react-router-dom"
import { BrowserRouter, Route } from "react-router-dom";

const SignUpForm = () => {
    return (
        
            <div className='SignUpForm'>
                <form id="SignUp">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text"></input>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email"></input>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"></input>
                    <label htmlFor="password2">Confirm Password</label>
                    <input name="password2" type="password"></input>
                    <button>Submit</button>
                </form>
            </div>
        
    )
}

export default SignUpForm