import {PokemonCard} from '../components';
import useHandleFavorite from '../utils/favoriteHandler';
import {useHandlePokemonDetail} from '../utils/detailHandler';
import {useSelector} from 'react-redux';

const usePokemonRender = () => {
  const handleFavorite = useHandleFavorite();
  const handlePokemonDetail = useHandlePokemonDetail();

  const {user} = useSelector(state => state.user);
  const favoriteList = user.favoriteIdList;
  //console.log('render: ', favoriteList);

  
  const pokemonRender = pokemon => {
    const isFavorite =
      favoriteList &&
      favoriteList.some(id => id == pokemon.item.id);
    return (
      <PokemonCard 
        onDetails={() => handlePokemonDetail(pokemon.item.name)}
        onFavorite={() => handleFavorite(pokemon.item.id, isFavorite, user)}
        pokemon={pokemon.item}
        isFavorite={isFavorite}></PokemonCard>
    );
  };
  return pokemonRender;
};

export default usePokemonRender;
