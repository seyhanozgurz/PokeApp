import {View, Text, TextInput} from 'react-native';
import {styles} from './FormField.styles';

function FormField({
  testID,
  title,
  placeholder,
  value,
  handleChangeText,
  secureTextEntry,
  error}
) {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        testID= {testID}
        autoCapitalize="none"
        autoComplete="none"
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}></TextInput>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
export default FormField;