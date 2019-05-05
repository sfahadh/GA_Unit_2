import React, { Component } from 'react'

export default class RecipeInstructions extends Component {
    render() {
        return (
            <article className="article">
                <h1>Preparation</h1>
                <p>{this.props.recipe.preparation}
                </p>
            </article>
        )
    }
}
