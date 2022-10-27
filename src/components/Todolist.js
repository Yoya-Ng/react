import React from "react";
import { useSelector } from "react-redux";
import { selectTodo } from "../store/slice/todo";
const TodoList = () => {
//   const states = useSelector(selectTodo); // <-- 拿取資料
  const states = useSelector(state=>state.todoReducer); // <-- 拿取資料
  return (
    <ul>
      {states.todolist.map((i) => (
        <li key={i.id}>{i.id + ' - ' +  i.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;