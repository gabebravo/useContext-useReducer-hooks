import React, { useContext, useState } from 'react'
import { Page2Context } from '..'

export default function Count2() {
  const { count, setCount } = useContext(Page2Context);
  const [myCount, setMyCount] = useState(0)

  return (
    <div>
      <p>{`Page2 Count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>Inc Page2</button>
      <button onClick={() => setCount(count - 1)}>Dec Page2</button>
      <p>{`My Count: ${myCount}`}</p>
      <button onClick={() => setMyCount(myCount + 1)}>Inc Local</button>
      <button onClick={() => setMyCount(myCount - 1)}>Dec Local</button>
    </div>
  )
}
