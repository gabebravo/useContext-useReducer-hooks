import React from 'react'
import styled from 'styled-components'

export default function NotFound() {
  return (
    <>
       <NavWrapper>
        <button onClick={() => props.history.push('/')}>Home</button>
        <button onClick={() => props.history.push('/page1')}>Page1</button>
        <button onClick={() => props.history.push('/page2')}>Page2</button>
        <button onClick={() => props.history.push('/page3')}>Page3</button>
      </NavWrapper>
      <NotFoundWrapper>
        Page Not Found...
      </NotFoundWrapper>
    </>
  )
}

//_____________ STYLED COMPONENETS :

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center
  padding: 5rem;
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: center
  & > button {
    margin: 1rem;
  }
`
