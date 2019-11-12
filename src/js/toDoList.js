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
       const toDoList = this.state.isChecked === true ?  this.props.toDoList.filter(z => !this.props.toDoListCompleted.includes(z)) : this.props.toDoList
        return (
            <div className="todolist">
                {this.props.toDoList.length === 0 ?
                    'No To Do List Yet Please Add It'
                    :
                    <React.Fragment>
                        <label className="todolist__labelBoxElementOne">
                            <input className="todolist__labelBoxElementOne--inputCheckBox" type="checkbox" onChange={this.hide} /> 
                            <span className="todolist__labelBoxElementOne--spanClass">Hide Completed To Do List</span>
                            
                        </label>
                        <ul className="todolist__underlineClass">
                            {toDoList.map(x => {
                                return (
                                    <li className={this.props.toDoListCompleted.includes(x) ? 'todolist__underlineClass--listingItems todolist__underlineClass--toDoCompleted' : 'todolist__underlineClass--listingItems'} key={x}>
                                        <label className="todolist__labelBox">
                                            <input className="todolist__labelBox--inputCheckBox" name={x} checked={this.props.toDoListCompleted.includes(x)}
                                                onChange={(event) => this.handleClick(event)} type="checkbox" />
                                             <span className="todolist__labelBox--spanClass">{x}</span>
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