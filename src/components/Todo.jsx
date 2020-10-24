import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';

const Todo = (props) => {

    return (
        <>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                <p className="mb-0">{props.todo.content}</p>
                <div className="actions gap-2">
                    <Button variant="primary">In Progress</Button>
                    <Button variant="danger" onClick={props.RemoveTodoHandler}>Remove</Button>
                </div>
            </ListGroup.Item>
        </>
    )
}

export default Todo