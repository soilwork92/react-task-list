import React, {Component} from 'react';
import {FaPlus} from 'react-icons/fa';

class AddToDoList extends Component {

    constructor() {
        super();
        this.state= {
            taskName: '',
            person: '',
            toDoDate: '',
            toDoTime: '',
            toDoNotes: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        let tempList = {
            taskName: this.state.taskName,
            person: this.state.person,
            toDoDate: this.state.toDoDate + '' + this.state.toDoTime,
            toDoNotes: this.state.toDoNotes
        }

        this.props.addList(tempList);

        this.setState({
            taskName: '',
            person: '',
            toDoDate: '',
            toDoTime: '',
            toDoNotes: ''
        });
        this.props.toggleForm();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
           [name]: value
        });

    }

    render() {
        return (
            <div   className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-todo')
            }>
                <div className="todo-head card-header bg-primary text-white"
                     onClick={this.props.toggleForm}>
                    <FaPlus /> Add To Do Item
                </div>
                <div className="card-body">
                    <form id="taskForm" noValidate
                          onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="taskName"
                                readOnly
                            >
                                Task
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="taskName"
                                    placeholder="Task's Name"
                                    value={this.state.taskName}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="person"
                            >
                                Person
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="person"
                                    placeholder="Responsible Person"
                                    value={this.state.person}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="toDoDate"
                            >
                                Date
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="toDoDate"
                                    id="toDoDate"
                                    value={this.state.toDoDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="toDoTime"
                            >
                                Time
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="toDoTime"
                                    id="toDoTime"
                                    value={this.state.toDoTime}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="toDoNotes">
                                Taks Notes
                            </label>
                            <div className="col-md-10">
                  <textarea
                      className="form-control"
                      rows="4"
                      cols="50"
                      name="toDoNotes"
                      id="toDoNotes"
                      placeholder="Notes"
                      value={this.state.toDoNotes}
                      onChange={this.handleChange}
                  />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block ml-auto"
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddToDoList;
