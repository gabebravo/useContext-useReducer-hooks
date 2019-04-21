import React from 'react'
const DEFAULT_STATE = { count: 0 }

/// _____ GLOBAL CONTEXT FOR REDUCER ____________________
export const GlobalContext = React.createContext(DEFAULT_STATE)

/// __________________ GLOBAL REDUCER ____________________
export function globalReducer(state, action) {
  const { type, payload } = action;

switch(type){
    case 'INC': {
      return { count: payload }
    }
    case 'DEC': {
      return { count: payload }
    }
    case 'RESET': {
      return DEFAULT_STATE
    }
    default: 
      return state;
  }
}