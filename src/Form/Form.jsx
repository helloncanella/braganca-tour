import React from "react"

class Section extends React.Component {
  constructor(props) {
    super()
    this.state = {
      fields: props.fields || []
    }
  }

  insertFields = () => {
    this.setState({ fields: [...this.state.fields, {}] })
  }

  deleteField = index => {
    const items = [...this.state.fields]
    this.setState({ items: items.splice(index, 1) })
  }

  render() {
    const style = {
      padding: 15
    }

    const { isEditingForm } = this.props

    return (
      <div className="section" style={style}>
        {isEditingForm && (
          <button onClick={this.insertFields}>Novo campo</button>
        )}
        {(this.state.fields || []).map((field, i) => {
          return (
            <div className="field" style={{ marginTop: 15 }}>
              <span contentEditable={isEditingForm} style={{ marginRight: 10 }}>
                Nome do campo
              </span>

              <span />

              <input
                type="text"
                style={{ marginRight: 10 }}
                readOnly={this.props.isEditingForm}
              />
              {isEditingForm && (
                <button onClick={() => this.deleteField(i)}>delete</button>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}

class Table extends React.Component {
  constructor(props) {
    super()
    this.state = {
      sections: props.sections || []
    }
  }

  insertSections = () => {
    this.setState({ sections: [...this.state.sections, {}] })
  }

  render() {
    const style = {
      padding: 15
    }

    const { isEditingForm } = this.props

    return (
      <div className="table" style={style}>
        {isEditingForm && (
          <h2 contentEditable onBlur={() => console.log("oi")}>
            Nova Tabela
          </h2>
        )}
        <Section isEditingForm={isEditingForm} />
      </div>
    )
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super()
    this.state = {
      tables: props.tables || [],
      isEditingForm: false
    }
  }

  insertTable = () => {
    this.setState({ tables: [...this.state.tables, {}] })
  }

  toggleEdition = () => {
    this.setState({ isEditingForm: !this.state.isEditingForm })
  }

  render() {
    const { isEditingForm } = this.state
    return (
      <div className="form">
        <div
          className="buttons"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {isEditingForm && (
            <button onClick={this.insertTable}>Nova tabela</button>
          )}
          <button onClick={this.toggleEdition}>
            {isEditingForm ? "Salvar formulário" : "Editar formulário"}
          </button>
        </div>

        {this.state.tables.map((data, i) => {
          return (
            <Table
              data={data}
              key={`table-${i}`}
              isEditingForm={isEditingForm}
            />
          )
        })}
      </div>
    )
  }
}
