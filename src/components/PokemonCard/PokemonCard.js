import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './PokemonCard.Styles';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const PokemonCard = ({pokemon, onDetails, onFavorite, isFavorite}) => {
  return (
    <View testID={`pokemonCard-${pokemon.id}`} style={styles.container}>
      <TouchableOpacity
        testID={`detailsButton-${pokemon.id}`}
        onPress={onDetails}>
        <Image source={{uri: pokemon.image}} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID={`favoriteButton-${pokemon.id}`}
        onPress={onFavorite}>
        <FavoriteButton onFavorite={onFavorite} isFavorite={isFavorite} />
      </TouchableOpacity>
    </View>
  );
};

export default PokemonCard;
