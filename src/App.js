import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    
    };
  }
  addItem(todovalue) {
    if (todovalue !== "") {
      const newItem = {
        id: Date.now(),
        value: todovalue,
        isDone: false,
      };
      const list = [...this.state.list]; //... means append all values
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }
  updateInput(input) {
    this.setState({ newItem: input });
  }




    render() {
        return (
          <div>
            
            <h1 className="app-title"> Task Lister</h1>
            <div className="container">
              Add a Task
              <br></br>
              <input
                type="text"
                className="input-text"
                placeholder="Write a todo"
                 value={this.state.newItem}
onChange={(e) => this.updateInput(e.target.value)}
              ></input>
              <button
                className="add-btn"
              
               
              >
                Add to do
              </button>
              <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                                          >
                    Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" />
                Finish homework
                <button className="btn ">Delete</button>
              </li>
            </ul>
          </div>
              </div>
              </div>
              )
} 