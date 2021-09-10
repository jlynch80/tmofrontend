import React from 'react'

const Recipe = ({recipe}) => {
    return (
        <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.instructions}</p>
        </li>
    )
}

export default Recipe
