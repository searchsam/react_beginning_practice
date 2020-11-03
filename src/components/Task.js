import React, {Component} from "react";
import PropTypes from "prop-types";

class Task extends Component {
  state = {
    task: this.props.task
  };

  styleCompleted = () => {
    return {
      fontSize: "20px",
      color: this.state.task.done ? "gray" : "black",
      textDecoration: this.state.task.done ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={this.styleCompleted()}>
        {this.state.task.titulo} - {this.state.task.descripcion}
        <input
          type="checkbox"
          onChange={this.props.checkDone.bind(this, this.state.task.id)}
        />
        <button
          style={btnDelete}
          onClick={this.props.deleteTask.bind(this, this.state.task.id)}
        >
          X
        </button>
      </div>
    );
  };
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};

const btnDelete = {
  background: "#ea2027",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: "18px",
  borderRadius: "50%",
  padding: "10px 15px"
};

export default Task;
