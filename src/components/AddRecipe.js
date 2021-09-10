import React from 'react'
import { useState } from 'react'

const AddRecipe = ({onAdd}) => {
    const [name, setName] = useState('')
    const [instructions, setInstructions] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !instructions) {
            alert('Please make sure you fill in name and instructions')
            return
        }

        onAdd({name, instructions})

        setName("")
        setInstructions("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>recipe-name
                    <input className="recipe-name" type="text" name="recipe-name" value={name} onChange={(e)=> setName(e.target.value)}/>
                </label>
                
            </div>
            <div>
                <label>recipe-instructions
                    <input className="recipe-instructions" type="text" name="recipe-instructions" value={instructions} onChange={(e)=> setInstructions(e.target.value)}/>   
                </label>
                
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddRecipe
