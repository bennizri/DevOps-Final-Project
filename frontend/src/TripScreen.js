import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";

const TripScreen = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [opinion, setOpinion] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "title") {
      setPlace(value);
    } else if (name === "opinion") {
      setOpinion(value);
    }
  };

  const handleClick = () => {
    if (name.trim() !== "") {
      setItems([...items, { author: name, title: place, opinion }]);
      setName("");
      setPlace("");
      setOpinion("");
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Welcome to DEVOPS FINAL!!:</h1>

      <h3>you can write your recommendations and see others!</h3>
      <Form>
        <div className="form-column">
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label>Place:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={place}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="opinion">
            <Form.Label>Opinion:</Form.Label>
            <Form.Control
              type="text"
              name="opinion"
              value={opinion}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <br></br>

        <Button className="add-button" variant="danger" onClick={handleClick}>
          Add
        </Button>
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
export default TripScreen;
