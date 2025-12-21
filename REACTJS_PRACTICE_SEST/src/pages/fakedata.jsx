// import { useEffect } from "react"

import { useState } from "react"

export const Fakedata = ()=>{
const [count,setCount] = useState(0)

const  counterFunc =()=>{
    setCount(count+1)
}
console.log(`this is count value ${count}`)
console.dir(`this is setCount value ${setCount}`)
return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div>you clicked {count} </div>
        <button onClick={counterFunc}>Click me</button>
    </div>
)
}