import React, { Component } from 'react'
import RecipeInstructions from "../RecipeInstructions/RecipeInstructions"

export default class Recipe extends Component {
    render() {
        return (
            <div>
                <article className="article">
                    <img id="food_image" src="./media/tikka.jpg" alt="" className="img-thumbnail"></img>
                    <div id="Ingredients_cont">
                        <h1>Ingredients</h1>
                        <ul>
                        <li>{this.props.recipe.ingredients[0]}</li>
                        <li>{this.props.recipe.ingredients[1]}</li>
                        <li>{this.props.recipe.ingredients[2]}</li>
                        <li>{this.props.recipe.ingredients[3]}</li>
                        <li>{this.props.recipe.ingredients[4]}</li>
                        <li>{this.props.recipe.ingredients[5]}</li>
                        <li>{this.props.recipe.ingredients[6]}</li>
                        <li>{this.props.recipe.ingredients[7]}</li>
                        <li>{this.props.recipe.ingredients[8]}</li>
                        </ul>
                    </div>
                    <RecipeInstructions recipe={this.props.recipe}/>
                </article>
            </div>
        )
    }
}
