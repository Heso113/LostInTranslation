import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Row, Col } from 'react-bootstrap';

const LoginForm = props => {
    const [user, setUsername] = useState({});

    const onLoginClicked = ev => {
        props.complete(user);
    };

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

    return (
        <Form className="m-5">
            <Row>
                <Col sm={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter a username" onChange={onUsernameChanged} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col sm={6}>
                    <Button type="button" onClick={onLoginClicked}>Login</Button>
                </Col>
            </Row>
        </Form>
    )
};

export default LoginForm;