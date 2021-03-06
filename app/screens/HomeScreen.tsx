import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { PokemonListItem } from '../components/PokemonListItem';
import { fetchPokemons } from '../services/pokemonService';

type Props = {};

export const HomeScreen: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);

  const fetchPokemonData = async () => {
    const data = await fetchPokemons();
    setLoading(false);
    setPokemonsData(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchPokemonData();
  }, []);

  const renderItem = ({ item }: { item: PokemonData }) => {
    return <PokemonListItem pokemonData={item} />;
  };

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          keyExtractor={item => item.id}
          data={pokemonsData}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
  },
});
