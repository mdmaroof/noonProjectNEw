import {observable,action} from 'mobx';

class store {
    @observable toDoList = ['abc'];
    @observable toDoListCompleted = []


    @action addToDoList = (value) => {
        this.toDoList.push(value)
    }

}

const Store = new store();

export default Store;