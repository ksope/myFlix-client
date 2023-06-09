// Update a user's info, by username

import React, {useEffect, useState} from 'react';

export default function UpdateUser({user, token}) {
    
    const [user, setUser] = useState();


const handleSubmit = (e) => {
    //this prevents default behaviour of the form which is to reload the page
    e.preventDefault();

    let data = {...user};
    

    fetch(`https://myflixapp-220423.herokuapp.com/user/${user.Username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
  }).then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        alert("oops, seems something went wrong");
        console.log(e);
      });
    };

  return (
    <Container>
      <Row>
        <Col ></Col>
        <Col xs={8} md={4}>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Please Update Your Details</Card.Title>
            <Form onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group controlId="profileForm">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          defaultValue={user.Username}
          onChange={e => {
            setUser(user => {
            return { ...user, Username: e.target.value }
                });
            }}
          placeholder="Change your username"
          minLength="3" 
        />
      </Form.Group>

      <Form.Group controlId="profilePassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          defaultValue={user.Password}
          onChange={e => {
            setUser(user => {
            return { ...user, Password: e.target.value }
                });
            }}
          placeholder="Change your password"
          minLength="8"
        />
      </Form.Group>

      <Form.Group controlId="profileEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          defaultValue={user.Email}
          onChange={e => {
            setUser(user => {
            return { ...user, Email: e.target.value }
                });
            }}
          placeholder="Change your email address"
          minLength="3" 
        />
      </Form.Group>

      <Form.Group controlId="profileBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type="date"
          defaultValue={user.Birthday}
          onChange={e => {
            setUser(user => {
            return { ...user, Birthday: e.target.value }
                });
            }}
          placeholder="Change your date of birth"
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Update user Details
      </Button>
    </Form>

            </Card.Body>
            
          </Card>
          

        </CardGroup>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    
  );
}
