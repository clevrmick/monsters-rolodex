import { Component } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search/search-component";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchQuery: searchString };
    });
  };

  render() {
    const { monsters, searchQuery } = this.state;
    const { onSearch } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery);
    });

    return (
      <div>
        {/* {filteredMonster.map((monster) => {
          return <h3 key={monster.id}>{monster.name}</h3>;
        })} */}
        <SearchBox
          onSearch={onSearch}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList filteredMonsters={filteredMonster} />
      </div>
    );
  }
}
