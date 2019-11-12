import React, { Component } from 'react';
import {connect} from 'react-redux';

class ToDoList extends Component {
    state = {
        isChecked : false
    }
    handleClick = async(e,x) => {
        if(this.props.toDoListCompleted.includes(e.target.name)){

            this.props.deleteToDoListCompleted(e.target.name)
        }
        else{
            this.props.addToDoListCompleted(e.target.name)
        }
    }
    hide = async() => {
        await this.setState({
            isChecked : !this.state.isChecked
        })

    }

    render() {
        return (
            <div className="todolist">
                {this.props.toDoList.length === 0 ?
                    'No To Do List Yet Please Add It'
                    :
                    <React.Fragment>
                        <label>
                            <input type="checkbox" onChange={this.hide} /> 
                            <span>Hide Completed To Do List</span>
                            
                        </label>
                        <ul>
                            {this.props.toDoList.map(x => {
                                return (
                                    <li className={this.state.isChecked === true && this.props.toDoListCompleted.includes(x) ? 'hide' : '' || this.props.toDoListCompleted.includes(x) ? 'toDoCompleted' : ''} key={x}>
                                        <label>
                                            <input name={x} checked={this.props.toDoListCompleted.includes(x)}
                                                onChange={(event) => this.handleClick(event)} type="checkbox" />
                                             <span>{x}</span>
                                        </label>

                                    </li>

                                )
                            }
                            )
                            }
                        </ul>
                    </React.Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        toDoList:state.toDoList,
        toDoListCompleted:state.toDoListCompleted
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteToDoListCompleted: (name) =>  {dispatch ({type:'REMOVE_FROM_TODOLIST_COMPLETED',payload:name})},
        addToDoListCompleted : (name) => {dispatch ({type:'ADD_TODO_LIST_COMPLETED',payload:name})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);