import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {  Text , CheckBox } from 'react-native-elements';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastro</Text>
      </Animatable.View>

      <Animatable.View 
        delay={800}
        animation="fadeInUp" 
        style={styles.containerForm}
        >

        <Text style={styles.title}>Nome completo</Text>
        <TextInput placeholder="Digite o seu nome..." style={styles.input}
         />

        <Text style={styles.title}>CPF</Text>
        <TextInput placeholder="Digite o seu CPF..." style={styles.input}
         />

        <Text style={styles.title}>E-mail</Text>
        <TextInput placeholder="Digite o seu e-maill..." style={styles.input}
         />

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

        <View style={styles.checkboxContainer}>
        <CheckBox
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="#7B68EE"
          uncheckedColor="#7B68EE"
          checked={isSelected}
          onPress={() => setSelection(!isSelected)}
        />
        <Text
         style={styles.registerText}> 
         Concordar com termos de uso.
         </Text>
         
      </View> 
        
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
    alignItems: 'center',
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
    marginTop: 34,
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 14,
    marginBottom: 20
  },
   registerText: {
    color: '#a1a1a1',
    fontWeight: 'bold',
    marginTop: 14,
    textAlign: 'center'
  },
 })
