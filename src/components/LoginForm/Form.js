import {Button, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {FormField} from '../../components';
import {styles} from './From.styles';
import {setUser} from '../../redux/features/favorites/slice';
import {useDispatch} from 'react-redux';

function Form({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    let isValid = true;
    let validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
      isValid = false;
    }
    if (!password) {
      validationErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      validationErrors.password = 'Password length must be at least 6';
      isValid = false;
    }
    if (isValid) {
      //console.log("is validi gecti")
      const response = await axios.get('http://10.0.2.2:3000/users');
      const user = response.data.find(user => user.email === email);
      //console.log("user: ",user)
      if (user) {
        if (user.password === password) {
          console.log('giris basarili');
          //Alert.alert('Successful', 'Login successfull', [{text: 'OK'}]);
          dispatch(setUser(user));
          navigation.navigate('Tabs');
        } else {
          console.log('wrong password');
          validationErrors.password = 'Wrong Password';
        }
      } else {
        validationErrors.email = 'Wrong email';
      }
      //console.log(validationErrors)
      setErrors(validationErrors);
    }
    setErrors(validationErrors);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
      keyboardVerticalOffset={100}>
      <FormField testID = 'emailInput'
        title="email"
        placeholder="enter email"
        value={email}
        handleChangeText={setEmail}
        error={errors.email}></FormField>
      <FormField testID = 'passwordInput'
        title="password"
        placeholder="enter password"
        value={password}
        handleChangeText={setPassword}
        secureTextEntry={true}
        error={errors.password}></FormField>
      <Button testID = 'LoginButton' onPress={handleSubmit} title="LOGIN"></Button>
    </KeyboardAvoidingView>
  );
}

export default Form;
