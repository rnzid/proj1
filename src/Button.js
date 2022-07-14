import React from 'react'

export const Button = (props) => {
  console.log(props);
    return (
    <div>
        <button>{props.title}</button>
    </div>
  )
}

export default Button
