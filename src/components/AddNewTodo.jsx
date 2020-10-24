import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

const AddNewTodo = (props) => {

    if (!props.showModal) {
        return false
    }

    let todo = { id: Math.random(), content: "todoContent", attachment: "", status: 1 }

    const TodoContentHandler = (e) => {
        let todoContent = e.target.value
        todo = { id: Math.random(), content: todoContent, attachment: "", status: 1 }
        return todo
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
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="text" placeholder="What Do you want to do ?" onChange={(e) => { TodoContentHandler(e) }} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Example file input" />
                            </Form.Group>
                            <Form.Group controlId="markInprogress">
                                <Form.Check type="checkbox" label="Mark as InProgress ?!" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex align-items-center justify-content-end gap-2">
                        <Button variant="secondary" onClick={props.hideModal}>Cancel</Button>
                        <Button variant="primary" onClick={() => { props.AddTodoHandler(todo) }}>Add Todo</Button>
                    </Card.Footer>
                </Card>

            </div>
            <div className="backdrop_modal" onClick={props.hideModal}></div>
        </>
    )
}


export default AddNewTodo