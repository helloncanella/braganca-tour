import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Form from "./Form/Form.jsx"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Client from "./Client/Client"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/form" component={Form} />
            <Route path="/novo-cliente" component={Client} />
          </div>
        </Router>
      </div>
    )
  }
}
export default App
