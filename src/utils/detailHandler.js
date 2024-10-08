import { useNavigation } from "@react-navigation/native";

export const useHandlePokemonDetail = () => {
    const navigation = useNavigation();
  
    const handlePokemonDetail = name => {
      navigation.navigate('Details', { name });
    };
  
    return handlePokemonDetail;
  };