import {ImageBackground} from 'react-native';
import {LoginForm} from '../../../components';
import {} from '../../../icons';
function LoginScreen() {
  return (
    <ImageBackground
      style={{
        position: 'absolute',
        width: '100%',
        height: '75%',
      }}
      source={background}
      resizeMode="cover"
      blurRadius={10}>
      <LoginForm></LoginForm>
    </ImageBackground>
  );
}

export default LoginScreen;
/*
<View style={styles.form}>
        <Image source={Inavitas} style={styles.image}></Image>
        <Text style={styles.label}>email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}></TextInput>
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}
        <Text style={styles.label}>password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}></TextInput>
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        {errors.passwordLength ? (
          <Text style={styles.errorText}>{errors.passwordLength}</Text>
        ) : null}
        <Button title="login" onPress={handleSubmit}></Button>
        <TouchableOpacity>
          <Text>if you don't have account click here...</Text>
        </TouchableOpacity>
      </View>*/
