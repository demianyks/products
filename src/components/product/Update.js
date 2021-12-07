import React, {useState, useEffect} from 'react';
import {Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';

export default function Update() {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [count, setCount] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [comment, setComment] = useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('name'));
        setImage(localStorage.getItem('image'));
        setCount(localStorage.getItem('count'));
        setWidth(localStorage.getItem('width'));
        setHeight(localStorage.getItem('height'));
        setWeight(localStorage.getItem('weight'));
        setComment(localStorage.getItem('comment'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://61af958e3e2aba0017c49443.mockapi.io/fakeData/${id}`, {
            name, image, count, width, height, weight, comment
        }).then(() => {
            history('/')
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input placeholder='imageUrl' value={image} onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Count</label>
                    <input placeholder='Count' value={count} onChange={(e) => setCount(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Size</label>
                    <input placeholder='Width' value={width} onChange={(e) => setWidth(e.target.value)}/>
                    <input placeholder='Height' value={height} onChange={(e) => setHeight(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='Weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Comment</label>
                    <input placeholder='Comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                <Button type='button'><Link to='/read'>Cancel</Link></Button>
            </Form>
        </div>
    )
}