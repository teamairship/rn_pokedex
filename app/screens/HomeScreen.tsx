import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { PokemonListItem } from '../components/PokemonListItem';
import { fetchPokemons } from '../services/pokemonService';

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

  return (
    <View style={styles.container}>
      {!loading ? (
        <ScrollView>
          {pokemonsData.map(item => (
            <PokemonListItem key={item.id} pokemonData={item} />
          ))}
        </ScrollView>
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
