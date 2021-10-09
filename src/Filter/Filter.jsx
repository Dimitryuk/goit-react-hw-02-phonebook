import { Component } from 'react';

export default class Filter extends Component {
  handleFilter = e => {
    this.props.onFilter(e.currentTarget.value);
  };
  render() {
    const { filter } = this.props;
    return (
      <div className="FilterWrapper">
        Find contact by name
        <label htmlFor="">
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleFilter}
          />
        </label>
      </div>
    );
  }
}
