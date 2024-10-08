import React, {useState} from 'react';
import {ActivityIndicator, Button} from 'react-native';
import {TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './search.Styles';
import {pokemonThunk} from '../../redux/features';
import usePokemonRender from '../../utils/pokemonRender';

function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const pokemonRender = usePokemonRender();

  const {pokemon, loading, error} = useSelector(state => state.pokemon);

  const handleSearch = () => {
    dispatch(pokemonThunk(searchText));
  };

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
      <TextInput
        testID="searchTextInput"
        placeholder="Search"
        style={styles.searchBox}
        autoCapitalize="none"
        value={searchText}
        onChangeText={setSearchText}></TextInput>
      <Button testID='searchButton' title="search" onPress={handleSearch}></Button>
      {pokemon && pokemon.name && pokemon.name === searchText
        ? pokemonRender({item: pokemon})
        : null}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error loading data</Text>}
    </SafeAreaView>
  );
}

export default SearchScreen;
