import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AuthForm = (props) => {
    const [isSingUp, setSingUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setSingUpFalse = () => {
        setSingUp(false)
    }

    const setSingUpFales = () => {
        setSingUp(true)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const register = () => {
        if (localStorage.getItem('users') === null) {
            localStorage.setItem('users', JSON.stringify([]))
        }

        const users = JSON.parse(localStorage.getItem('users'));
        console.log('Register', email, password)
        const user = {
            email,
            password
        }

        const userExists = users.some((existedUser) => existedUser.email === user.email)

        if (!userExists) {
            users.push(user);
            localStorage.setItem('user', JSON.stringify(users))
        } else {
        }
    }





    const login = () => {
        console.log('Login')
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (isSingUp) {
            register()
        } else {
            login()
        }
    }

    return (
        <div className='w-100'>
            <h1>{isSingUp ? "Registration" : "Login"}</h1>
            <Form onSubmit={handlesubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control value={email} onChange={handleChangeEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
          </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={handleChangePassword}  type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
        </Button>
            </Form>
            <p> If you already have a password, please <Button variant="link" onClick={setSingUpFalse}>Log In</Button></p>
        </div>
    )
}

export default AuthForm;