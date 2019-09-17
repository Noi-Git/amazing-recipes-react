import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }
  state = {
    recipes: recipeData, // will get back the array
    search: '', // holding current value when type in the search form
    // ==== make ajax request for serach ====
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    query: '&q=',
    error: ''
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);

      if (jsonData.recipes.length === 0) {
        this.setState({
          error:
            "Your search doesn't match any recipe we have. Press search icon to find the most popular recipes"
        });
      } else {
        this.setState({
          recipes: jsonData.recipes,
          error: ''
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = e => {
    // will show when typing
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    // prevent the page to refresh all the time
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ''
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5 container">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </div>
    );
  }
}
