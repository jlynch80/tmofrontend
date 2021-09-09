import React from 'react'

const Recipe = ({recipe}) => {
    return (
        <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.instructions}</p>
        </div>
    )
}

export default Recipe
