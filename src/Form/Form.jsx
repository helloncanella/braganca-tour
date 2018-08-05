import React from "react"

class Section extends React.Component {
  constructor(props) {
    super()
    this.state = {
      fields:
        props.fields.length === 0
          ? [{ name: "Nome", primary: true }]
          : props.fields
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
              <span
                contentEditable={isEditingForm && !field.primary}
                style={{ marginRight: 10 }}
              >
                {field.name || "Nome do campo"}
              </span>

              <span />

              <input
                type="text"
                readOnly={this.props.isEditingForm}
                style={{
                  opacity: this.props.isEditingForm ? 0.8 : 1,
                  background: this.props.isEditingForm
                    ? "lightgray"
                    : "initial",
                  marginRight: 10
                }}
              />
              {isEditingForm &&
                !field.primary && (
                  <button onClick={() => this.deleteField(i)}>delete</button>
                )}
            </div>
          )
        })}
      </div>
    )
  }
}

Section.defaultProps = {
  fields: []
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
        {
          <h2 contentEditable={isEditingForm} onBlur={() => console.log("oi")}>
            {this.props.data.name || "Nova Tabela"}
          </h2>
        }
        <Section isEditingForm={isEditingForm} />
      </div>
    )
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super()
    this.state = {
      tables: props.tables.length === 0 ? [{}] : props.tables,
      isEditingForm: props.tables.length === 0
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
          {isEditingForm &&
            this.props.allowNewTables && (
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
              allowNewTables={this.props.allowNewTables}
            />
          )
        })}
      </div>
    )
  }
}

Form.defaultProps = {
  allowNewTables: true,
  tables: []
}
