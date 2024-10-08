import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import pokemonData from '../../pokemonData.json';
import {loadThunk} from '../../redux/features';
import usePokemonRender from '../../utils/pokemonRender';

function HomeScreen() {
  const dispatch = useDispatch();
  const pokemonRender = usePokemonRender();
  const {user} = useSelector(state => state.user);
  /*
  useEffect(() => {
    console.log("home:",user)
    dispatch(loadThunk());
  }, [dispatch]);
  */
  return (
    <FlatList testID='homeFlatList'
      style={{marginTop: 80}}
      data={pokemonData}
      renderItem={pokemonRender}
      keyExtractor={item => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={2}
      maxToRenderPerBatch={3}
      windowSize={3}
    />
  );
}
export default HomeScreen;
