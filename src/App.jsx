import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to React Class Based Component</h1>
        {this.state.monsters.map((monster) => {
          return <h3 key={monster.id}>{monster.name}</h3>;
        })}
      </div>
    );
  }
}
