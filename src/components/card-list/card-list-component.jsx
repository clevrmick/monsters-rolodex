import { Component } from "react";
import "./card-list.styles.css";
export default class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log("render from card list component");
    const { filteredMonsters } = this.props;
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div key={id} className="card-container">
              <img
                src={`https://robohash.org/${id}?set=set2`}
                alt={`monster ${name}`}
                width={180}
              />
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
