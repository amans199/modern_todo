import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import Todo from './components/Todo'
import AddNewTodoModal from './components/AddNewTodo'

class App extends Component {

// Todo status 
//  0 => new,
//  1 => added,
//  2 => In progress,
//  3 => Done

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    ShowModal:false,
    Todos:[
      {id:1,content:"lorem ibsum" , attachment:"" , status:1},
    ]
    };
  }

  ShowAddNewModal(){
    this.setState({ShowModal:true})
    }

    HideModalHandler(state){
      this.setState({ShowModal:false})
    }

     AddTodoHandler = (todo) => {
        let TodosClone = [].concat(this.state.Todos) ,
            lastTodoID = 0
          if(TodosClone.length !== 0){
            lastTodoID =Number(TodosClone[TodosClone.length - 1].id)+1
          }
          let newTodo={id:lastTodoID,content:todo.content , attachment:todo.attachment , status:todo.status?todo.status:0}
          console.log(newTodo)
        TodosClone.push(newTodo)
          this.setState({Todos:TodosClone,ShowModal:false});
  }


  RemoveTodoHandler = (id)=>{
   let TodosClone = [].concat(this.state.Todos) ,
   index = TodosClone.findIndex(todo => todo.id ===id);
   TodosClone.splice(index, 1)
    this.setState({Todos:TodosClone});
  }


  render(){
    return (
      <div className="App container">

      <Card className="m-4">
        <AddNewTodoModal showModal={this.state.ShowModal} hideModal={()=>{this.HideModalHandler(this.state)}} AddTodoHandler={this.AddTodoHandler} />
          <Card.Header className="d-flex align-items-center justify-content-between">
              <div>You have <output>{'5'}</output> Todos</div>
              <Button variant="primary" onClick={()=>this.ShowAddNewModal()}>Add New</Button>
          </Card.Header>
          <Card.Body>
            <ListGroup as="ul">
            {this.state.Todos.map(ele =>
                 <Todo key={ele.id} todo={ele} RemoveTodoHandler={()=>{this.RemoveTodoHandler(ele.id)}} />
                )}
              </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
