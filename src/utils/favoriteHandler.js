import {addThunk, removeThunk} from '../redux/features/favorites/slice';
import {useDispatch} from 'react-redux';

const useHandleFavorite = () => {
  const dispatch = useDispatch();

  const handleFavorite = (pokemonId, isFavorite, user) => {
    if (isFavorite) {
      //console.log("removeThunk: ",user, pokemonId)
      dispatch(removeThunk({user, pokemonId}));
    } else {
      dispatch(addThunk({user, pokemonId}));
    }
  };
  return handleFavorite;
};
export default useHandleFavorite;
