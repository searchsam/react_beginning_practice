import React, {Component} from "react";

class TaskForm extends Component {
  state = {
    titulo: "",
    descripcion: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTask(this.state.titulo, this.state.descripcion);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="titulo"
          onChange={this.onChange}
          placeholder="Nombre de la tarea."
          type="text"
          value={this.state.titulo}
        />
        <br />
        <br />
        <textarea
          name="descripcion"
          onChange={this.onChange}
          placeholder="Describe la tarea."
          value={this.state.descripcion}
        ></textarea>
        <br />
        <br />
        <input type="submit" />
        <br />
        <br />
      </form>
    );
  }
}

export default TaskForm;
