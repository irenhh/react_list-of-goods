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

  filertByLength = (event) => {
    this.setState({
      selectedValue: event.target.value,
      listOfGoodsToShow: this.state.listOfGoods.filter(good => good.length >= Number(event.target.value)),
    })
  }

  render() {
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

            <select onChange={this.filertByLength} value={this.state.selectedValue}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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
