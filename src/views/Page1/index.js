import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from '../../context'
import styled from 'styled-components'
import Count1 from './components/Count1'
import Count2 from './components/Count2'
import Count3 from './components/Count3'

// make a new context
export const Page1Context = createContext({ count: 0 });

export default function Page1() {
  const [count, setCount] = useState(0)
  const globalReducer = useContext(GlobalContext);
  const { state, dispatch } = globalReducer;
  
  return (
    <>
      <NavWrapper>
        <button onClick={() => props.history.push('/')}>Home</button>
        <button onClick={() => props.history.push('/page2')}>Page2</button>
        <button onClick={() => props.history.push('/page3')}>Page3</button>
      </NavWrapper>
      <Page1Wrapper>
        <p>{`Page 1 - global state: 0`}</p>
      </Page1Wrapper>
      <ButtonWrapper>
        <button onClick={() => console.log('inc')}>Inc Global</button>
        <button onClick={() => console.log('dec')}>Dec Global</button>
      </ButtonWrapper>
      <CountWrapper>
        <Page1Context.Provider value={{ count, setCount }}>
          <Count1 />
          <Count2 />
          <Count3 />
        </Page1Context.Provider>
      </CountWrapper>
    </>
  )
}

//_____________ STYLED COMPONENETS :

const Page1Wrapper = styled.div`
  display: flex;
  justify-content: center
  padding-top: 5rem;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center
  padding-bottom: 3rem;
`
const CountWrapper = styled.div`
  display: flex;
  justify-content: space-evenly
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: center
  & > button {
    margin: 1rem;
  }
`
