import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export default function Create() {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [count, setCount] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [comment, setComment] = useState('');

    const postData = () => {
        axios.post(`https://61af958e3e2aba0017c49443.mockapi.io/fakeData`, {
            name,
            image,
            count,
            width,
            height,
            weight,
            comment
        }).then(() => {
            history('/')
        })
    }

    return (
        <div>
            <h1>Create</h1>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input placeholder='imageUrl' onChange={(e) => setImage(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Count</label>
                    <input placeholder='Count' onChange={(e) => setCount(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Size</label>
                    <input placeholder='Width' onChange={(e) => setWidth(e.target.value)}/>
                    <input placeholder='Height' onChange={(e) => setHeight(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='Weight' onChange={(e) => setWeight(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Comment</label>
                    <input placeholder='Comment' onChange={(e) => setComment(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
                <Button><Link to='/'>Cancel</Link></Button>
            </Form>
        </div>
    )
}