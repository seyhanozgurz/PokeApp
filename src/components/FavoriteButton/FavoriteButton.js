import {TouchableOpacity, Image, Text} from 'react-native';
import {styles} from './button.styles';
import {RedHeart, Heart} from '../../icons';
function FavoriteButton({onFavorite, isFavorite}) {
  return (
    <TouchableOpacity testID="button" onPress={onFavorite}>
      <Image
        style={styles.button}
        source={isFavorite ? RedHeart : Heart}></Image>
    </TouchableOpacity>
  );
}
export default FavoriteButton;
