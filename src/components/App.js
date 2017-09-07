import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      // items: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.filterFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  filterFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket 
        fruit={this.state.fruit} 
        filters={this.state.filters} 
        currentFilter={this.state.currentFilter}
        handleFilterChange={this.handleFilterChange}
      />
    )
  }
}
