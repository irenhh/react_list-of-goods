import React from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class GoodsList extends React.Component {
  state = {
    listOfGoods: [],
    listOfGoodsToShow: [],
    selectedValue: '1',
    isLoaded: false,
  }

  loadData = () => {
    this.setState({
      listOfGoods: [...goodsFromServer],
      listOfGoodsToShow: [...goodsFromServer],
      isLoaded: true,
    })
  }

  reverseList = () => {
    this.setState((prevState) => ({
      listOfGoodsToShow: [...prevState.listOfGoodsToShow].reverse(),
    }))
  }

  sortByAlphabet = () => {
    this.setState((prevState) => ({
      listOfGoodsToShow: [...prevState.listOfGoods].sort(),
    }))
  }

  sortByLength = () => {
    this.setState((prevState) => ({
      listOfGoodsToShow: [...prevState.listOfGoods]
        .sort((a, b) => a.length - b.length),
    }))
  }

  resetListView = () => {
    this.setState((prevState) => ({
      listOfGoodsToShow: prevState.listOfGoods,
      selectedValue: '1',
    }));
  }

  filterByLength = (event) => {
    const { value } = event.target;

    this.setState({
      selectedValue: value,
      listOfGoodsToShow: this.state.listOfGoods.filter(good => good.length >= Number(value)),
    })
  }

  render() {
    let options = [];
    for (let i = 1; i < 11; i++) {
      options.push(<option value={i}>{i}</option>)
    }

    return (
      <div>
        {!this.state.isLoaded && (
          <button
            type="button"
            onClick={this.loadData}
          >
            Start
          </button>
        )}

        {this.state.isLoaded && (
          <>
            <button type="button" onClick={this.reverseList}>
              Reverse
            </button>

            <button type="button" onClick={this.sortByAlphabet}>
              Sort alphabetically
            </button>

            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>

            <button type="button" onClick={this.resetListView}>
              Reset
            </button>

            <select onChange={this.filterByLength} value={this.state.selectedValue}>
              {options}
            </select>

            <ul>
              {this.state.listOfGoodsToShow.map(good => (
                <li key={Date.now() + good}>{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default GoodsList;
