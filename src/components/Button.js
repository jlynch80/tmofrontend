import React from 'react'

const Button = ({onAdd}) => {
    return (
        <button onClick={onAdd}>
          Add Recipe  
        </button>
    )
}

export default Button
