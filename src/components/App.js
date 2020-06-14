import React, {Component} from 'react';
import '../css/App.css';

import AddToDoList from './AddToDoList';
import SearchToDoList from './SearchToDoLists';
import ViewAllToDoLists from './ViewAllToDoLists';

import {without} from 'lodash';
import {findIndex} from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
        myLists: [],
        formDisplay: false,
        orderBy: 'taskName',
        orderDir: 'asc',
        queryText: '',
        lastIndex: 0
    }
    this.deleteToDoList = this.deleteToDoList.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addList = this.addList.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchToDo = this.searchToDo.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

    toggleForm() {
      this.setState({
          formDisplay: !this.state.formDisplay
      });
    }

    searchToDo(query) {
      this.setState({queryText: query});
    }

    changeOrder(order, dir) {
      this.setState({
          orderBy: order,
          orderDir: dir
      })
    }

    updateInfo(name, value, id) {
      let tempList = this.state.myLists;
      let listIndex = findIndex(this.state.myLists, {
          listID: id
      });
      tempList[listIndex][name] = value;
      this.setState({
          myLists: tempList
      })

    }

    addList(list) {
      let tempList = this.state.myLists;
      list.listID = this.state.lastIndex;
      tempList.unshift(list);
      this.setState({
          myLists: tempList,
          lastIndex: this.state.lastIndex + 1
      })
    }

    deleteToDoList(todo) {
      let tempToDo = this.state.myLists;
      tempToDo = without(tempToDo, todo);

      this.setState({
          myLists: tempToDo
      })
    }

  componentDidMount() {
    fetch('./data.json')
        .then(response => response.json())
        .then(result => {
          const lists = result.map(item => {
              item.listID = this.state.lastIndex;
              this.setState({lastIndex: this.state.lastIndex + 1})
            return item;
          })
            this.setState({
                myLists: lists
            });
        });
  }

  render() {

      let order;
      let filterToDos = this.state.myLists;
      if(this.state.orderDir === 'asc') {
          order = 1;
      } else {
          order = -1;
      }

      filterToDos = filterToDos.sort((a,b) => {
          if (a[this.state.orderBy].toLowerCase() <
              b[this.state.orderBy].toLowerCase()
          ) {
              return -1 * order;
          } else {
              return 1 * order;
          }
      }).filter(eachItem => {
          return(
              eachItem['taskName']
                  .toLowerCase()
                  .includes(this.state.queryText.toLowerCase()) ||
              eachItem['person']
                  .toLowerCase()
                  .includes(this.state.queryText.toLowerCase()) ||
              eachItem['toDoNotes']
                  .toLowerCase()
                  .includes(this.state.queryText.toLowerCase())
          )
      });

    return (
        <main className="page bg-white" id="taskratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  <AddToDoList
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addList={this.addList}
                  />
                  <SearchToDoList
                  orderBy = {this.state.orderBy}
                  orderDir = {this.state.orderDir}
                  changeOrder = {this.changeOrder}
                  searchToDo = {this.searchToDo}
                  />
                  <ViewAllToDoLists todos = {filterToDos}
                                    deleteToDoList = {this.deleteToDoList}
                                    updateInfo = {this.updateInfo}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App;
