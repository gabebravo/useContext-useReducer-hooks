import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

function Home({ history }) {
  return (
    <>
      <HomeWrapper>
        Home
      </HomeWrapper>
      <ButtonWrapper>
        <button onClick={() => history.push('/page1')}>Page1</button>
        <button onClick={() => history.push('/page2')}>Page2</button>
        <button onClick={() => history.push('/page3')}>Page3</button>
      </ButtonWrapper>
    </>
  )
}

export default withRouter(Home)

//_____________ STYLED COMPONENETS :

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center
  padding: 5rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center
  & > button {
    margin: 1rem;
  }
`
