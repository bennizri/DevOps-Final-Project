import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';


const TripScreen = () => {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [opinion, setOpinion] = useState('');
    const [items, setItems] = useState([]);
    const REACT_APP_URL = process.env.REACT_APP_URL;
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/get-all-items`);
            const data = response.data;
            setItems(data);

        } catch (error) {
            console.error('Error fetching data from the backend:', error);

        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'title') {
            setPlace(value);
        } else if (name === 'opinion') {
            setOpinion(value);
        }
    };

    const handleClick = async () => {
        console.log("insert to add");
        const dataToSend = { name, place, opinion }; // Collect all the data here
        try {
            const response = await axios.post(`http://localhost:5000/add-variable`, dataToSend);
            if (name.trim() !== '') {
                setItems([...items, name]);
                setName('');
                setPlace('');
                setOpinion('');
                fetchData();
            }
        } catch (error) {
            console.error('Error inserting variable:', error);
            // Handle error as needed...
        }

    };

    const handleDelete = async (index) => {
        try {
            console.log("click on delete!!!")
            const itemToDelete = items[index].opinion; // Use 'content' property as the item ID
            await axios.delete(`http://localhost:5000/delete-item/${itemToDelete}`);
            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            setItems(updatedItems);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="container">
            <h1>Welcome to Travels Forum:</h1>
            <h3>you can write your recommendations and see others!</h3>
            <Form>
                <div className="form-column">
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="title">
                        <Form.Label>Place:</Form.Label>
                        <Form.Control type="text" name="title" value={place} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="opinion">
                        <Form.Label>Opinion:</Form.Label>
                        <Form.Control type="text" name="opinion" value={opinion} onChange={handleChange} />
                    </Form.Group>
                </div>
                <br></br>

                <Button className="delete-button" variant="danger" onClick={handleClick}>Add</Button>

            </Form>

            <div>
                <br></br>
                {items.map((item, index) => (
                    <Card key={index} className="card">
                        <Card.Body className="card-body">
                            <Card.Text className="card-text">
                                Name: {item.author}
                                <br />
                                Title: {item.title}
                                <br />
                                Opinion: {item.opinion}
                            </Card.Text>
                            <Button
                                className="delete-button"
                                variant="danger"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default TripScreen