import React, {Component} from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

class ViewAllToDoLists extends Component {
    render() {
        return (
            <div className="todo-list item-list mb-3">
                {this.props.todos.map(item =>(
                <div className="list-item col media py-3" key={item.listID}>
                    <div className="mr-3">
                        <button className="todo-delete btn btn-sm btn-danger"
                        onClick={()=>this.props.deleteToDoList(item)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="todo-info media-body">
                        <div className="todo-head d-flex">
                            <span className="todo"
                                  contentEditable
                                  suppressContentEditableWarning
                                  onBlur={
                                      e => this.props.updateInfo('taskName', e.target.innerText, item.listID)
                                  }
                            >{item.taskName}</span>
                            <span className="todo-date ml-auto">
                                <Moment
                                  date={item.toDoDate}
                                  parse="YYYY-MM-dd hh:mm"
                                  format="D MMM h:mma"
                                />
                            </span>
                        </div>

                        <div className="name">
                            <span className="label-item">Responsible: </span>
                            <span  contentEditable
                                   suppressContentEditableWarning
                                   onBlur={
                                       e => this.props.updateInfo('person', e.target.innerText, item.listID)
                                   }>{item.person}</span>
                        </div>
                        <div className="todo-notes" contentEditable
                             suppressContentEditableWarning
                             onBlur={
                                 e => this.props.updateInfo('toDoNotes', e.target.innerText, item.listID)
                             }>{item.toDoNotes}</div>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default ViewAllToDoLists;
