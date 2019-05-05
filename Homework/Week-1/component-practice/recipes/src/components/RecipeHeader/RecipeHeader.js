import React, { Component } from 'react'

export default class RecipeHeader extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.recipe.title}</h1>
                <cite className="contributors">
                <div>{this.props.recipe.byline.name}</div>
                <div><a href={this.props.recipe.byline.source} target="_blank">Source</a></div>
                </cite>
                <ul id="recipe_meta_data" className="list-group">
                <li className="list-group-item">Active: {this.props.recipe.activePrep}</li>
                <li className="list-group-item">Total: {this.props.recipe.totalPrep}</li>
                <li className="list-group-item">{this.props.recipe.servings} Servings</li>
                </ul>
            </header>
        )
    }
}
