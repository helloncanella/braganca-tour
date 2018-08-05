import React from "react"
import { Link } from "react-router-dom"

export default class Dashboard extends React.Component {
  render() {
    const style = { display: "block" }
    const link = {
      marginRight: 10
    }

    return (
      <div className="dashboard" style={style}>
        <Link to="/novo-cliente" style={link}>
          Criar cliente
        </Link>
        <Link to="/nova-viagem">Criar viagem</Link>
      </div>
    )
  }
}
