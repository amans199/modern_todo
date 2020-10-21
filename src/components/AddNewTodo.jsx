import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


const AddNewTodo = (props) => {

    if (!props.showModal) {
        return false
    }

    return (
        <>
            <div className="new_todo_modal">
                <Card className="text-center">
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">Add New Todo</h4>
                        <Button variant="secondary" onClick={props.hideModal}>Close</Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex align-items-center justify-content-end gap-2">
                        <Button variant="secondary" onClick={props.hideModal}>Cancel</Button>
                        <Button variant="primary">Add Todo</Button>
                    </Card.Footer>
                </Card>

            </div>
            <div className="backdrop_modal" onClick={props.hideModal}></div>
        </>
    )
}


export default AddNewTodo