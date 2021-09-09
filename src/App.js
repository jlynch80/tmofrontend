import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import AddRecipe from './components/AddRecipe';
import Recipes from './components/Recipes';
import Button from './components/Button'


function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false)
  const [showButton, setShowButton] = useState(true)

  const [recipes, setRecipes] = useState([])

  const addRecipe = (recipe) => {
    const id = Math.floor(Math.random() * 10000)+1
    const newRecipe = {id, ...recipe}
    setRecipes([...recipes,newRecipe])
  }

  const onAdd = () => {
    setShowAddRecipe(!showAddRecipe)
    setShowButton(!showButton)
  }

  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}

      <Header />
      {showButton && <Button onAdd={onAdd} />}
      {showAddRecipe && <AddRecipe onAdd={addRecipe} />}

      {recipes.length > 0 ? (
        <Recipes recipes={recipes} />
      ) : (
        <p>There are no recipes to list</p>
      )}
    </div>
  );
}

export default App;
