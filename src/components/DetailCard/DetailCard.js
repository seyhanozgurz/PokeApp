import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './DetailCard.Styles';

const DetailCard = ({pokemonData}) => {
  return (
    <View testID={`detailsCard-${pokemonData.id}`} style={styles.container}>
      <Image source={{uri: pokemonData.image}} style={styles.image} />
      <Text style={styles.name}>{pokemonData.name}</Text>
      <Text style={styles.detail}>Base Experience: {pokemonData.height}</Text>
      <Text style={styles.detail}>Height: {pokemonData.height}</Text>
      <Text style={styles.detail}>Weight: {pokemonData.weight}</Text>
      <Text style={styles.detail}>Moves:</Text>
      {pokemonData.moves.map((move, index) => (
        <Text key={index} style={styles.more}>
          {move.name} (Learned at level {move.level_learned_at} by{' '}
          {move.move_learn_method})
        </Text>
      ))}
      <Text style={styles.detail}>Abilities:</Text>
      {pokemonData.abilities.map((ability, index) => (
        <Text key={index} style={styles.more}>
          {ability.name} {ability.is_hidden ? '(Hidden)' : ''}
        </Text>
      ))}
    </View>
  );
};
export default DetailCard;
