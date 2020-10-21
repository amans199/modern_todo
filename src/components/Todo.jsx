import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';

const Todo = () => {

    return (
        <>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Todo</p>
                <div className="actions gap-2">
                    <Button variant="primary">In Progress</Button>
                    <Button variant="danger">Remove</Button>
                </div>
            </ListGroup.Item>
        </>
    )
}

export default Todo