import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';

@inject('store')
@observer
class ToDoList extends Component {
    state = {
        isChecked : false
    }
    handleClick = async(e,x) => {
        if(this.props.store.toDoListCompleted.includes(e.target.name)){
            const indexList = await this.props.store.toDoListCompleted.indexOf(e.target.name);
            this.props.store.toDoListCompleted.splice(indexList, 1);
        }
        else{
            this.setState({
                toDoListCompleted:this.props.store.toDoListCompleted.push(e.target.name)
            })
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
                {this.props.store.toDoList.length === 0 ?
                    'No To Do List Yet Please Add It'
                    :
                    <React.Fragment>
                        <label>
                            <input type="checkbox" onChange={this.hide} /> 
                            <span>Hide Completed To Do List</span>
                            
                        </label>
                        <ul>
                            {this.props.store.toDoList.map(x => {
                                return (
                                    <li className={this.state.isChecked === true && this.props.store.toDoListCompleted.includes(x) ? 'hide' : '' || this.props.store.toDoListCompleted.includes(x) ? 'toDoCompleted' : ''} key={x}>

                                        <label>
                                            <input name={x} checked={this.props.store.toDoListCompleted.includes(x)}
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

export default ToDoList;