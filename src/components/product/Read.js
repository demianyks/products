import React, {useEffect, useState} from 'react';
import {Table, Button} from 'semantic-ui-react'
import axios from "axios";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router";

export default function Read() {
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


    const onDelete = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const conf = confirm('Are you sure?');
        if (conf) {
            axios.delete(`https://61af958e3e2aba0017c49443.mockapi.io/fakeData/${id}`)
                .then(() => {
                    history('/')
                })
        }
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Count</Table.HeaderCell>
                        <Table.HeaderCell>Size</Table.HeaderCell>
                        <Table.HeaderCell>Weight</Table.HeaderCell>
                        <Table.HeaderCell>Comment</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{id}</Table.Cell>
                        <Table.Cell><img src={image} alt=""/> </Table.Cell>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{count}</Table.Cell>
                        <Table.Cell>{width + ' * ' + height}</Table.Cell>
                        <Table.Cell>{weight}</Table.Cell>
                        <Table.Cell>{comment}</Table.Cell>
                        <Link to='/update'>
                            <Table.Cell>
                                <Button>Update</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell>
                            <Button onClick={() => onDelete(id)}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Button><Link to='/'>Back</Link></Button>
        </div>
    )
}