import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import Pokemon from "../components/Pokemon";
import Search from "../components/Search";
import { getPokemons } from "../services/pokemonService";
import { filterPokemons, setPokemons } from "../utils/pokemonUtils";

class Home extends Component {
  state = {
    isFetched: false,
    error: null,
    pokemons: [],
    displayedPokemons: []
  };

  static navigationOptions = {
    title: "Pokemon"
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const { results } = await getPokemons();
      this.setState({
        isFetched: true,
        pokemons: setPokemons(results),
        displayedPokemons: filterPokemons("", results)
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleSearch = event => {
    const searchString = event.nativeEvent.text;
    this.setState(({ pokemons }) => ({
      displayedPokemons: filterPokemons(searchString, pokemons)
    }));
  };

  renderItem = ({ item }) => <Pokemon pokemon={item} />;

  render() {
    let { displayedPokemons, isFetched, error } = this.state;

    return (
      <View>
        {error && <Text>{error}</Text>}
        <Search onChange={this.handleSearch} />
        {isFetched ? (
          <FlatList
            keyExtractor={item => item.id}
            data={displayedPokemons}
            renderItem={this.renderItem}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

export default Home;
