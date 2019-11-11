import React, { Component } from 'react';
import {inject,observer} from 'mobx-react';

@inject('store')
@observer

class Input extends Component {
    state = {
        inputValue:''
    }
    changeValue = (e) => {
        this.setState({
            inputValue:e.target.value
        })
    }
    addToDoList = async() => {
        if(this.state.inputValue === ''){
            alert('PLEASE ADD SOME VALUE')
        }
        else{
            await this.props.store.addToDoList(this.state.inputValue)
            this.setState({
                inputValue:''
            })
        }
    }
    render() {
        return (
            <div className="input">
                <input placeholder="Enter Your To Do List" value={this.state.inputValue} onChange={this.changeValue}/>
                <button onClick={this.addToDoList}>Add To Do List</button>
            </div>
        );
    }
}

export default Input;