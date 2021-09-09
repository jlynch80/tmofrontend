import React from 'react'
import Recipe from './Recipe'

const Recipes = ({recipes}) => {
    return (
        <div>
            {recipes.map((recipe) =>
                <Recipe recipe={recipe} />
            )}
        </div>
    )
}

export default Recipes
