import { Alert, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';

import { styles } from './style'
import { useState } from 'react';

export function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(false)



  function handleSignIn() {
    if (email === 'paulo@email.com' && password === '123') {
      setIsValid(true)
    } else {
      Alert.alert('E-mail ou senha inválidos.')
      return setIsValid(false)
    }
  }


  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder='E-mail'
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn} onPressOut={Keyboard.dismiss} >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      {isValid &&
        <Text style={styles.message}>
          Acesso Liberado!
        </Text>}

    </View>
  );
}
