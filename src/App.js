import logo from './logo.svg';
import './App.css';
import JSX from './note/JSX';
import Welcome from './note/Components_Or_Props';
import Clock from './note/State';
import Toggle from './note/Toggle';
import Greeting from './note/Greeting';
import LoginControl from './note/LoginControl ';
import Page from './note/Page';
import NameForm from './note/NameForm';
import { Counter } from './features/counter/Counter'
import HOOK from './note/HOOK';
import Effect from './note/Effect';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, increase, addTodo } from "./redux/index";
import TodoList from "./components/Todolist";
import React, { useState } from "react";

function App() {
  const counter = useSelector(state => state.Counter);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  return (
    <div className="App">

      Counter from Store is :{counter};
      <button onClick={() => dispatch({ type: "INCREMENT" })}>增加1</button>
      <button onClick={() => dispatch(increment())}>增加</button>
      <button onClick={() => dispatch(decrement())}>減少</button>
      <button onClick={() => dispatch(increase(10))}>+10</button>

      <TodoList />
      <input type="text" value={word} onChange={(e) => { setWord(e.target.value) }} />
      <button onClick={() => dispatch(addTodo(word))}>add todo</button>

      {/* JSX start-------- */}
      {/* <JSX></JSX> */}
      {/* JSX end--------- */}

      {/* // Props start-------- */}
      {/* <Welcome name="Sara" /> */}
      {/* <Welcome name="Cahal" /> */}
      {/* <Welcome name="Edite" /> */}
      {/* // Props end--------- */}

      {/* <Clock    />, */}

      {/* <Toggle/> */}

      {/* <Greeting/> */}

      {/* <LoginControl/> */}

      {/* <Page/> */}
      {/* <HOOK /> */}
      {/* <Effect /> */}


      {/* <NameForm/>
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL ?? ''}/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <Counter/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}
export default App;
