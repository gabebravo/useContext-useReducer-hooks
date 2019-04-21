import React, { useContext, useState } from 'react'
import { Page1Context } from '..'

export default function Count2() {
  const { count, setCount } = useContext(Page1Context);
  const [myCount, setMyCount] = useState(0)

  return (
    <div>
      <p>{`Page1 Count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>Inc Page1</button>
      <button onClick={() => setCount(count - 1)}>Dec Page1</button>
      <p>{`My Count: ${myCount}`}</p>
      <button onClick={() => setMyCount(myCount + 1)}>Inc Local</button>
      <button onClick={() => setMyCount(myCount - 1)}>Dec Local</button>
    </div>
  )
}
