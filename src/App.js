import React from "react";

import "./App.css";

class App extends React.Component {
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
                onClick={() => this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
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
                      onClick={() => this.deleteItem(item.id)}
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