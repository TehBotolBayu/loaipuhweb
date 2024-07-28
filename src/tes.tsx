import { useEffect, useState } from 'react'
import heroImage from './asset/hero.png'

function tes() {
  const [count, setCount] = useState(0)
const [classString, setclassString] = useState("")

  // useEffect(()=>{
  //   (()=>{
  //     setclassString(`text-red-${count}`);
  //     console.log(classString)
  //   })()
  // }, [count])

  return (
    <div>
      <p className={
        `${
          (count % 2 == 0) ?
          'text-red-500': 'text-blue-500'
        } font-bold`
      }>
      {count}
      </p>
      <button onClick={() => setCount(p => p+1)}>click</button>
    </div>
  )
}

export default tes