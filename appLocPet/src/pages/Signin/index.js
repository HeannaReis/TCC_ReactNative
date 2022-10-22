import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        delay={800}
        style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input} />

        <TouchableOpacity style={styles.buttom}
         onPress={() => navigation.navigate('Home')}
         >
          <Text style={styles.buttomText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerText}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 15
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    fontSize: 16
  },
  buttom: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 3,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomRegistrer: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#a1a1a1',
    fontWeight: 'bold',
    marginTop: 14,
    textAlign: 'center'
  }
})
