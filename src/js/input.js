import React, { Component } from 'react';
import {connect} from 'react-redux'

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
            this.props.addToTodo(this.state.inputValue);
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
const mapStateToProps = (state) => {
    return{
        toDoList:state.toDoList
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addToTodo: (name) =>  {dispatch ({type:'ADD_TODO',payload:name})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input);