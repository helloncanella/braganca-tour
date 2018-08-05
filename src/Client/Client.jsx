import React from "react"
import Form from "../Form/Form"

export default class Client extends React.Component {
  render() {
    return (
      <div className="client">
        <Form allowNewTables={false} tables={[{ name: "Cliente" }]} />
      </div>
    )
  }
}
