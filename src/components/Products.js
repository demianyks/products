import {Table, Button} from 'semantic-ui-react'
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Products() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61af958e3e2aba0017c49443.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let {id, name, image, count, width, height, weight, comment} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('image', image);
        localStorage.setItem('count', count);
        localStorage.setItem('width', width);
        localStorage.setItem('height', height);
        localStorage.setItem('weight', weight);
        localStorage.setItem('comment', comment);

    }
    return (
        <div>
            <Table>
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
                    {APIData.map((data) => {
                        console.log(data)
                        return (
                            <Table.Row className='row'>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell><img src={data.image} alt=""/> </Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.count}</Table.Cell>
                                <Table.Cell>{data.width +' * '+ data.height}</Table.Cell>
                                <Table.Cell>{data.weight}</Table.Cell>
                                <Table.Cell>{data.comment}</Table.Cell>
                                <Table.Cell><Link to={'/read'}>
                                    <Button onClick={() => setData(data)}>==></Button>
                                </Link></Table.Cell>
                            </Table.Row>
                        )})}
                </Table.Body>
            </Table>
            <Button><Link to='/create'>Add</Link></Button>
        </div>
    )
}