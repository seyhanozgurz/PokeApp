import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    form: {
      backgroundColor: 'white',
      padding: 15,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 1,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    input: {
      height: 40,
      borderColor: '#1a76c0',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    errorText: {
      color: 'red',
    },
  });