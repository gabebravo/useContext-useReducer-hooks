import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'

// import context and reducer
import { GlobalContext, globalReducer } from './context';

// root state wrapper will provide context for all children to access the global reducer
function StateWrapper({ children }){
  const initialState = useContext(GlobalContext); // initialize context
  const [state, dispatch] = useReducer(globalReducer, initialState); // use context as the state for the reducer instance

  return ( // wrapper component
    <GlobalContext.Provider value={{ state, dispatch }}>
      { children }
    </GlobalContext.Provider>
  )
}

ReactDOM.render(
  <StateWrapper>
    <App />
  </StateWrapper>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
