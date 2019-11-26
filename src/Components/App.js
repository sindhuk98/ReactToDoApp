import React, {Component} from 'react';
import Title from './Title';
import Name from './Name';
import ToDoForm from './Todoform';
import ToDoCard from './Todocard';
import '../Css/App.css';

class ToDoApp extends Component{
  
  state = {
    name: '',
    todo:[
    ]
  }

  //Set the Header name based on the input from user in the Name.js file
  updateName = (value) =>{
      this.setState({
        name: value
      });
  };

  //Set the title and List based on the input from the user in the Todoform.js file
    updateToDo = (todo) =>{
      let toDo = [...this.state.todo,todo];
      console.log(toDo);
      this.setState({
        todo: toDo
      });
    };

  render(){
    return (
      <div>
        <Title name={this.state.name}/>
        <Name name={this.updateName}/>
        <ToDoForm todo={this.updateToDo}/>
        <ToDoCard todo={this.state.todo} />
      </div>
    )
  }
}

export default ToDoApp;
