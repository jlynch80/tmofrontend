import React from 'react'
import Recipe from './Recipe'

const Recipes = ({recipes}) => {
    return (
        <ul>
            {recipes.map((recipe) =>
                <Recipe recipe={recipe} />
            )}
        </ul>
    )
}

export default Recipes
