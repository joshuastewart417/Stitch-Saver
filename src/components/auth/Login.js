import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"


export const Login = ({setAuthUser}) => {
    const email = useRef()
    const name = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/stitchform")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Welcome to Stitch Saver!</h1>
                    <h2>Please sign in below</h2>
                    <fieldset>
                        <label htmlFor="inputName"> Name: </label>
                        <input ref={name} type="name"
                            id="name"
                            className="form-control"
                            placeholder="Full name"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email: </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                        <button className="signin_btn" type="submit">
                            Sign in
                        </button>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register as a new user?</Link>
            </section>
        </main>
    )
}