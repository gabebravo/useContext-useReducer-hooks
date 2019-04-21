import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import Count1 from './components/Count1'
import Count2 from './components/Count2'
import Count3 from './components/Count3'

// make a new context
export const Page2Context = createContext({ count: 0 });

export default function Page2() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <NavWrapper>
        <button onClick={() => props.history.push('/')}>Home</button>
        <button onClick={() => props.history.push('/page1')}>Page1</button>
        <button onClick={() => props.history.push('/page3')}>Page3</button>
      </NavWrapper>
      <Page1Wrapper>
        <p>{`Page 2 - global state: 0`}</p>
      </Page1Wrapper>
      <ButtonWrapper>
        <button>Inc Global</button>
        <button>Dec Global</button>
      </ButtonWrapper>
      <CountWrapper>
        <Page2Context.Provider value={{ count, setCount }}>
          <Count1 />
          <Count2 />
          <Count3 />
        </Page2Context.Provider>
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