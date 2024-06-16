import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../component/About.css'
import { useLocation } from "react-router-dom";
import TodoList from "../component/TodoList/TodoList";

const About = () => {
    const location = useLocation()
    console.log(location)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    const getName = (e) => {
        setName(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        if (name && password) {
            const record = { name: name, password: password }
            setData([...data, record])
            setName('')
            setPassword('')
        }
        else {
            alert("plz enter the data")
        }
    }
    // todo code
    return (
        <>
            <h1>pathname:{location.pathname.replace('/', '')}</h1>
            <h2>React Form</h2>
            <Form onSubmit={submit}>
                <Form.Group >
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" value={name} onChange={getName} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={getPassword} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="form-value">
                <h2>{data.map((item) => item.name)}</h2>
                <h2>{data.map((item) => item.password)}</h2>
            </div>
            <TodoList/>

        </>
    );
}
export default About;