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
              </div>
              </div>
              )
} 