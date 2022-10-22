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

export default function Register() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <Animatable.View 
        delay={800}
        animation="fadeInUp" 
        style={styles.containerForm}>

        <Text style={styles.title}>Nome completo</Text>
        <TextInput placeholder="Digite o seu nome..." style={styles.input} />

        <Text style={styles.title}>CPF</Text>
        <TextInput placeholder="Digite o seu CPF..." style={styles.input} />

        <Text style={styles.title}>E-mail</Text>
        <TextInput placeholder="Digite o seu e-maill..." style={styles.input} />

        <Text style={styles.title}>Telefone</Text>
        <TextInput
          placeholder="Digite o seu telefone..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite a sua senha..." style={styles.input} />

        <Text style={styles.title}>Confirmar senha</Text>
        <TextInput placeholder="Digite a sua senha" style={styles.input} />

        <TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttomText}>Entrar</Text>
        </TouchableOpacity>
        {/* <<TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttomText}>Acessar</Text>
        </TouchableOpacity> */}
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
    marginTop: '0%',
    marginBottom: '5%',
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
    marginBottom: -10,
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
 
})
