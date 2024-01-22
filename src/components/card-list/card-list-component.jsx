import { Component } from "react";

export default class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log("render from card list component");
    const { filteredMonsters } = this.props;
    return (
      <div className="card-list">
        <h2>this is the card list</h2>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <img
                src={`https://robohash.org/${monster.id}?set=set2`}
                alt={`monster ${monster.name}`}
              />
              <h3>{monster.name}</h3>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
