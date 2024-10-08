import {useEffect} from 'react';
import {DetailCard} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch, useSelector} from 'react-redux';
import {pokemonThunk} from '../../redux/features';

function DetailsScreen({route}) {
  const {name} = route.params;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(pokemonThunk(name));
  }, [dispatch,name]);

  const {pokemon, loading, error} = useSelector(state => state.pokemon)
  console.log("DetailScreen: ",pokemon)

  return (
    <SafeAreaView>
      {pokemon && <DetailCard pokemonData={pokemon}></DetailCard>}
    </SafeAreaView>
  );
}
export default DetailsScreen;
 