import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    return (
      <div>
        <div className="container py-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-capitalize mb-3">
              <h2 className="text-slanted">recipe list</h2>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {recipes.map(recipe => (
              <Recipe key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
