import React from 'react'

/// _____ GLOBAL CONTEXT FOR REDUCER ____________________
export const GlobalContext = React.createContext({ count: 0 })

/// __________________ GLOBAL REDUCER ____________________
export function globalReducer(state, action) {
  const { type, payload } = action;

switch(type){
    case 'INC': {
      return state
    }
    case 'DEC': {
      return state
    }
    case 'RESET': {
      return state
    }
    default: 
      return state;
  }
}