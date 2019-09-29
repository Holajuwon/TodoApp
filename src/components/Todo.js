//class component
//the {} bracket is used to embed in html
//Handling forms in react
//React events

import React, { Component, Fragment } from "react";
import Header from "./Header";
import { TodoItems, RemoveAll, SearchAll } from "./TodoItems";
import "../styles/Todo.css";
import { Link } from "react-router-dom";

class Todo extends Component {
  //create a state
  state = {
    todoItems: [],
    newTodo: "",
    search: ""
  };

  handleSearch = e => {
    const local = localStorage.getItem("todoItems");
    this.setState({
      search: e.target.value
    });
    const savelasttodo = [];
    const parsed = JSON.parse(local);
    if (this.state.search) {
      const sss = parsed.filter(item => {
        return item.includes(this.state.search);
      });
      this.setState({
        todoItems: sss
      });
    } else {
      this.setState({
        todoItems: parsed
      });
    }

    // let searchInput= f.target.value
    //   let todos = JSON.parse(todo)
    //   if(searchInput >1){
    //   this.setState((prevState)=>({

    //     todoItems: prevState.filter(items=>items.includes(searchInput.toLowerCase()))

    // }))}else{
    //   this.setState({
    //     todoItems: this.state.todoItems
    //   })
    // }
  };

  handleSort = e => {
    this.setState({
      todoItems: this.state.todoItems.sort((a, b) => (a > b ? 1 : -1))
    });
  };

  handleRemoveOneItem = individualItem => {
    //array filter method  to filter through the array of todos to return a new array of values without the deleted item
    //prevstate is used to access previous state so we dont manipulate the state.
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(item => item !== individualItem)
    }));
  };

  handleRemoveAll = () => {
    this.setState({
      todoItems: []
    });
  };

  handleChange = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.newTodo === "") {
      } else if (
        prevState.todoItems.includes(prevState.newTodo.toLowerCase())
      ) {
      } else {
        return {
          // use concat or the spread operator to add the alue of prev todo to the new todo
          // todoItems: prevState.todoItems.concat(this.state.newTodo)
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: (prevState.newTodo = "")
        };
      }
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState);
    }
  }

  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem("todoItems");
    const todoItems = JSON.parse(itemsFromLocalStorage);

    if (todoItems) {
      this.setState(() => ({
        todoItems
      }));
    }
  }

  render() {
    return (
      <Fragment>
        <Link to="/Likes">Likes Page</Link>
        {/* <Header title="MY TODO APP" /> */}
        <h1> Welcome to my todo App </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=""> Todo Items </label> <br />
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
        </form>
        <div className="myButtons">
          <button onClick={this.handleSubmit}> Submit </button>
          <RemoveAll
            allItem={this.state.todoItems}
            handleRemoveAll={this.handleRemoveAll}
          />
          <button placeholder="a" onClick={this.handleSort} />
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleSearch}
          />
          {/*<SearchAll SearchAll={this.handleSearch} value={this.state.searchInput}/>*/}
        </div>
        {this.state.todoItems.map(item => (
          <TodoItems
            individualItem={item}
            //pass the prop here
            handleRemoveOneItem={this.handleRemoveOneItem}
          />
        ))}
      </Fragment>
    );
  }
}

export default Todo;
