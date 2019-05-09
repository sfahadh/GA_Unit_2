import React, { Component } from 'react';
import FruitFilter from '../FruitFilter/FruitFilter';
import FruitList from '../FruitList/FruitList';

export default class FruitContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      fruitsToDisplay: props.fruits,
      filterValue: '',
      filteredOutFruits: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }
  
  handleFilterChange(event) {
    event.preventDefault()
    const filterValue = event.target.value;
    this.setState((prevState, props) => {
      const filteredFruitList = props.fruits.filter(fruit =>
        fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));

        const listOfFilteredFruits = props.fruits.filter(fruit =>
          !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
      return {
        fruitsToDisplay: filteredFruitList,
        filteredOutFruits: listOfFilteredFruits,
        filterValue
      }
    })
  }
  
  render() {
    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
        <FruitList fruits={this.state.fruitsToDisplay} />
        <br/>
        <FruitList fruits={this.state.filteredOutFruits}/>
      </div>
    )
  }
  
}
