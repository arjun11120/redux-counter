import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {createStore} from "redux";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const App = () =>{
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state);
  const handleIncrement = () =>{
    dispatch({type:"increment"})
  }
  const handleDecrement = () =>{
    dispatch({type:"decrement"})
  }
  const double = () =>{
    dispatch({type:"double"})
  }
  const reset = () =>{
    dispatch({type:"reset"})
  }
  
  
  return(
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={double}>x2</button>
      <button onClick={reset}>Reset</button>
    </>
)};

const initialState = 0;
const reducer = (state , action)=>{
  switch(action.type){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'double':
      return state * 2;
    case 'reset':
      return 0 ;
    default:
      return initialState;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
