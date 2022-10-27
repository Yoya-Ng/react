import Counter from "./Counter";
import { combineReducers } from "redux";

export const increment = () =>{
    return{
        type: 'INCREMENT',
    };
}
export const decrement = () =>{
    return{
        type: 'DECREMENT',
    };
}
export const increase = (value) =>{
    return{
        type: 'INCREASE',
        value:value,
    };
}
export const addTodo = (value) =>{
    return{
        type: 'todo',
        value:value,
    };
}

