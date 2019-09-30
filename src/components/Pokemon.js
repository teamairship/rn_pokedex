import React from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";

const Pokemon = props => {
  const { pokemon } = props;

  return (
    <ListItem
      leftAvatar={{
        source: {
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        }
      }}
      title={pokemon.name}
      bottomDivider
    />
  );
};

export default Pokemon;
