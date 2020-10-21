import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import Todo from './components/Todo'
import AddNewTodoModal from './components/AddNewTodo'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    ShowModal:false,
    Todos:[1,2,3,4,5,6,7]
    };
  }

  AddNewTodoHandler(){
    this.setState({ShowModal:true})
    }

    HideModalHandler(state){
      this.setState({ShowModal:false})
    }

  render(){
    return (
      <div className="App container">

      <Card className="m-4">
        <AddNewTodoModal showModal={this.state.ShowModal} hideModal={()=>{this.HideModalHandler(this.state)}} />
          <Card.Header className="d-flex align-items-center justify-content-between">
              <div>You have <output>{'5'}</output> Todos</div>
              <Button variant="primary" onClick={()=>this.AddNewTodoHandler('3')}>Add New</Button>
          </Card.Header>
          <Card.Body>
            <ListGroup as="ul">
            {this.state.Todos.map((ele , index) =>
                 <Todo key={index} />
                )}
              </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
