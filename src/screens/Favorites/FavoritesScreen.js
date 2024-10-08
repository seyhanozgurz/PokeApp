import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import usePokemonRender from '../../utils/pokemonRender';
import pokemonData from '../../pokemonData.json';

function FavoritesScreen() {
  const pokemonRender = usePokemonRender();
  const {user} = useSelector(state => state.user);

  const favoritePokemonData = user.favoriteIdList.map(favoriteId =>
    pokemonData.find(pokemon => pokemon.id === favoriteId),
  );
  // const favoritePokemonData = pokemonData.filter(pokemon =>
  //   user.favoriteIdList.includes(pokemon.id),
  // ); ctrl + k + c
  // ctr + k + u
  return (
    <FlatList
    testID='favoritesFlatList'
      style={{marginTop: 80}}
      data={favoritePokemonData}
      renderItem={pokemonRender}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
export default FavoritesScreen;
