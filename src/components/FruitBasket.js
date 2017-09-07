import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = props => 
  <div className="fruit-basket">
    <Filter handleChange={props.handleFilterChange} />
    <FilteredFruitList filter={props.currentFilter} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: []
};

export default FruitBasket;
