import React, {Component} from 'react';

class SearchToDoLists extends Component {
    render() {
        return (
            <div className="search-todos row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="SearchTasks"
                            type="text"
                            className="form-control"
                            aria-label="Search Tasks"
                            onChange={e => this.props.searchToDo(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: <span className="caret" />
                            </button>

                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'taskName' ? 'active' : '')
                                }
                                        onClick={e => this.props.changeOrder('taskName', this.props.orderDir)}
                                        href="#">
                                    Task Name
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'toDoDate' ? 'active' : '')
                                }
                                        onClick={e => this.props.changeOrder('toDoDate', this.props.orderDir)}
                                        href="#">
                                    Date
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'person' ? 'active' : '')
                                }
                                        onClick={e => this.props.changeOrder('person', this.props.orderDir)}
                                        href="#">
                                    Person
                                </button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'asc' ? 'active' : '')
                                }
                                        onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                                        href="#">
                                    Asc
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'desc' ? 'active' : '')
                                }
                                        onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}
                                        href="#">
                                    Desc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchToDoLists;
