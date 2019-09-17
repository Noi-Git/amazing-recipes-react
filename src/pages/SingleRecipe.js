import React, { Component } from 'react';
import { recipeData } from '../data/tempDetails';
import { Link } from 'react-router-dom';

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;

    this.state = {
      recipe: recipeData,
      id,
      loading: false
    };
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/recipes"
              className="btn btn-warning mb-5 text-capitalize"
            >
              back to recipes list
            </Link>
            <img
              src={image_url}
              className="d-block w-100"
              style={{ maxHeight: '30rem' }}
              alt="recipe"
            />
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h5 className="text-uppercase">{title}</h5>
            <h6 className="text-warning text-capitalize text-slanted">
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 textcapitalize"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-2 textcapitalize"
            >
              recipe original url
            </a>
            {/* ingredient */}
            <ul className="list-group mt-4">
              <h3 className="mt-3 mb-4">Ingredients</h3>
              {/* loop through an array of ingredients using .map */}
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
