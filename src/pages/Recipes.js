import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: recipeData, // will get back the array
    search: '' // holding current value when type in the search form
  };

  handleChange = e => {
    // will show when typing
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    // prevent the page to refresh all the time
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
