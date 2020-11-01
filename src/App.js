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
  addItem() {
    let todovalue = this.state.newItem;
    console.log(todovalue);
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
    console.log(input, '-----');
    this.setState({ newItem: input });
    
  }
  updateStatus(id){
    let list = this.state.list;
    var index = list.findIndex(p => p.id == id)
    list[index].isDone = !list[index].isDone;
    this.setState({
      list : list
    })
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter((item) => item.id !== id); //filter method shld have a callback
    this.setState({ list: updatedlist });
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
              onClick={(e) => this.addItem()}
               
              >
                Add to do
              </button>
              <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id} className={item.isDone ? 'done': 'notdone'}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone }
                      onChange={(e) => this.updateStatus(item.id)}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}                   >
                    Delete
                    </button>
                  </li>
                );
              })}
              {/* <li>
                <input type="checkbox" />
                Finish homework
                <button className="btn ">Delete</button>
              </li> */}
            </ul>
          </div>
              </div>
              </div>
              )

            }
          }
        
            export default App;
