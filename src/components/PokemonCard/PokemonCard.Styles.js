import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 30,
        height: 600,
        marginTop: 30 ,
        padding: 10,
        borderRadius: 30,
        borderCurve: 10,
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
      },
      image: {
        marginTop: 70,
        width: 300,
        height: 300,
        resizeMode: 'contain',
      },
      name: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
      },
      favorite: {
        marginTop: 170,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})