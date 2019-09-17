import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe,
      recipe_id
    } = this.props;
    return <div>hello for a single recipe</div>;
  }
}
