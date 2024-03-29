import { useState } from 'react'

function Counter() {
  // useState 函数返回一个数组
  // 0 初始化值, 不传默认为 undefined
  const arr = useState(0)
  // 第一个元素存储值
  const counter = arr[0]
  // 第二个元素存储变更值的函数
  const setState = arr[1]

  console.log(counter)

  return (
    <div>
      <h3>当前计数: {counter}</h3>
      <button onClick={() => setState(counter + 1)}>+1</button>
      <button onClick={() => setState(counter - 1)}>-1</button>
    </div>
  )
}

export default Counter
