import React from 'react'

const First = () => {
  const color = {
    color: "green",
    backgroundColor: "yellow"
  }
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>My first  react component</h1>
      <p style={color}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem deleniti nisi debitis quisquam quia eligendi sed temporibus, est quod rerum illo cupiditate sapiente laboriosam quo neque. Corrupti, repudiandae atque.</p>
    </div>
  )
}

export default First
